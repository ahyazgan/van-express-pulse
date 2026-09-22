import { useState, useMemo, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Send, Banknote } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PriceResult } from "@/constants/shippingRates";
import { formatMoney } from "@/lib/money";
import type { ShippingMode } from "@/constants/domesticRates";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import ProductStep from "./ProductStep";
import ContactStep from "./ContactStep";
import { ProductInfo, ContactInfo, OrderData } from "./types";
import { Database } from "@/integrations/supabase/types";

interface PrefillData {
  fullName: string;
  phone: string;
  email: string;
}

interface OrderFormProps {
  mode: ShippingMode;
  destination: string;
  priceResult: PriceResult | null;
  onSuccess: (data: OrderData) => void;
  onCancel: () => void;
  prefillData?: PrefillData;
}
const INITIAL_PRODUCT: ProductInfo = {
  category: "",
  packagingType: "",
  quantity: 0,
  totalWeight: 0,
  totalVolume: 0,
  isStackable: false,
};

const OrderForm = ({
  mode,
  destination,
  priceResult,
  onSuccess,
  onCancel,
  prefillData,
}: OrderFormProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [product, setProduct] = useState<ProductInfo>(INITIAL_PRODUCT);
  const [contact, setContact] = useState<ContactInfo>({
    fullName: prefillData?.fullName || "",
    phone: prefillData?.phone || "",
    email: prefillData?.email || "",
    photos: [],
  });

  // Update contact when prefillData changes (e.g., after login)
  useEffect(() => {
    if (prefillData) {
      setContact(prev => ({
        ...prev,
        fullName: prefillData.fullName || prev.fullName,
        phone: prefillData.phone || prev.phone,
        email: prefillData.email || prev.email,
      }));
    }
  }, [prefillData]);

  // Validation
  const isProductValid = useMemo(() => {
    return (
      product.category !== "" &&
      product.packagingType !== "" &&
      product.quantity > 0
      // Weight and volume are now optional
    );
  }, [product]);

  const isContactValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    
    return (
      contact.fullName.trim().length >= 3 &&
      phoneRegex.test(contact.phone.replace(/\s/g, "")) &&
      emailRegex.test(contact.email)
    );
  }, [contact]);

  const canSubmit = isProductValid && isContactValid;

  const handleSubmit = async () => {
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);

    const orderData: OrderData = {
      destination,
      product,
      contact,
      estimatedPrice: {
        min: priceResult?.minPrice || 0,
        max: priceResult?.maxPrice || 0,
      },
    };

    // Get current session directly from Supabase for accurate auth state
    const { data: sessionData } = await supabase.auth.getSession();
    const currentUserId = sessionData?.session?.user?.id || null;

    // NOTE: Guests are not allowed to SELECT shipping_requests (by design).
    // If we use `.select()` on insert, Postgres applies SELECT RLS to the RETURNING rows,
    // and the insert can fail even though the INSERT policy allows it.
    const clientGeneratedId = crypto.randomUUID();
    const clientCreatedAt = new Date().toISOString();

    // Save to database - include user_id if authenticated
    type ShippingInsert = Database["public"]["Tables"]["shipping_requests"]["Insert"];
    
    const insertData: ShippingInsert = {
      id: clientGeneratedId,
      destination,
      product_category: product.category,
      packaging_type: product.packagingType,
      quantity: product.quantity,
      total_weight: product.totalWeight,
      total_volume: product.totalVolume,
      is_stackable: product.isStackable,
      customer_name: contact.fullName,
      phone: contact.phone,
      email: contact.email,
      estimated_min_price: priceResult?.minPrice || 0,
      estimated_max_price: priceResult?.maxPrice || 0,
      customer_photos: contact.photos,
      user_id: currentUserId,
    };

    // Only tag domestic orders (Europe stays untouched so it works even before the
    // shipping_type migration is applied on the live DB).
    if (mode === "domestic") {
      insertData.shipping_type = "domestic";
    }

    const insertQuery = supabase.from("shipping_requests").insert(insertData);

    const { data, error } = currentUserId
      ? await insertQuery.select().single()
      : await insertQuery;

    if (error) {
      console.error("Error saving order:", error);
      toast.error(t.orderForm.submitError);
      setIsSubmitting(false);
      return;
    }

    // Trigger email notification via edge function
    // - authenticated: use returned row
    // - guest: use client-side payload (no RETURNING to avoid SELECT RLS)
    const recordForNotify =
      data ??
      ({
        id: clientGeneratedId,
        destination,
        customer_name: contact.fullName,
        email: contact.email,
        phone: contact.phone,
        product_category: product.category,
        packaging_type: product.packagingType,
        quantity: product.quantity,
        total_weight: product.totalWeight,
        total_volume: product.totalVolume,
        estimated_min_price: priceResult?.minPrice || 0,
        estimated_max_price: priceResult?.maxPrice || 0,
        user_id: currentUserId,
        created_at: clientCreatedAt,
      } as const);

    supabase.functions
      .invoke("notify-new-order", {
        body: {
          type: "INSERT",
          table: "shipping_requests",
          schema: "public",
          currency: priceResult?.currency ?? (mode === "domestic" ? "TRY" : "EUR"),
          shipping_type: mode,
          record: recordForNotify,
        },
      })
      .catch((err) => {
        console.error("Failed to send notification:", err);
      });

    trackEvent("quote_submit", { mode });
    onSuccess(orderData);
    navigate("/success");
  };

  return (
    <div className="flex flex-col">
      <div className="space-y-4 pb-4">
        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div
            className={`flex-1 h-1 rounded-full transition-colors ${
              step >= 1 ? "bg-primary" : "bg-border"
            }`}
          />
          <div
            className={`flex-1 h-1 rounded-full transition-colors ${
              step >= 2 ? "bg-primary" : "bg-border"
            }`}
          />
        </div>

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <ProductStep key="product" data={product} onChange={setProduct} />
          )}
          {step === 2 && (
            <ContactStep key="contact" data={contact} onChange={setContact} />
          )}
        </AnimatePresence>

        {/* Price Summary */}
        {priceResult?.found && (
          <motion.div
            layout
            className="p-4 rounded-2xl bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Banknote className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  {t.orderForm.estimatedPrice}
                </span>
              </div>
              <p className="text-lg font-bold text-foreground">
                {formatMoney(priceResult.minPrice ?? 0, priceResult.currency)} -{" "}
                {formatMoney(priceResult.maxPrice ?? 0, priceResult.currency)}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Buttons - Positioned properly */}
      <div className="flex gap-3 pt-2 pb-2">
        {step === 1 ? (
          <>
            <Button
              variant="outline"
              onClick={onCancel}
              className="flex-1 h-12 rounded-xl border-border/50"
            >
              {t.common.cancel}
            </Button>
            <Button
              onClick={() => setStep(2)}
              disabled={!isProductValid}
              className="flex-1 h-12 rounded-xl btn-primary-glow gap-2"
            >
              {t.orderForm.continue}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="h-12 rounded-xl border-border/50 px-4"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!canSubmit || isSubmitting}
              className="flex-1 h-12 rounded-xl btn-primary-glow gap-2"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? t.orderForm.sending : t.orderForm.sendRequest}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
