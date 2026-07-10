import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Package, Clock, CheckCircle2, Truck, MapPin, LogIn } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import AppNavigation from "@/components/AppNavigation";
import TopBar from "@/components/TopBar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import BookingChoiceModal from "@/components/BookingChoiceModal";
import usePageMeta from "@/hooks/usePageMeta";
import { formatMoney } from "@/lib/money";

type OrderStatus = "new" | "negotiating" | "in_transit" | "delivered";

interface ShippingRequest {
  id: string;
  destination: string;
  product_category: string;
  total_weight: number;
  status: OrderStatus;
  created_at: string;
  estimated_min_price: number;
  estimated_max_price: number;
  shipping_type?: string;
}

const OrdersPage = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState<ShippingRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  usePageMeta({
    title: t.meta.orders.title,
    description: t.meta.orders.description,
  });

  const statusConfig: Record<OrderStatus, { label: string; icon: React.ReactNode; color: string }> = {
    new: { label: t.orders.status.new, icon: <Clock className="w-4 h-4" />, color: "bg-blue-500" },
    negotiating: { label: t.orders.status.negotiating, icon: <Package className="w-4 h-4" />, color: "bg-amber-500" },
    in_transit: { label: t.orders.status.in_transit, icon: <Truck className="w-4 h-4" />, color: "bg-primary" },
    delivered: { label: t.orders.status.delivered, icon: <CheckCircle2 className="w-4 h-4" />, color: "bg-success" },
  };

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    fetchOrders();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("orders-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "shipping_requests",
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const fetchOrders = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from("shipping_requests")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setOrders(data);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const origin = language === "tr" ? "İstanbul" : "Istanbul";

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar />

      <div className="pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-foreground">{t.orders.title}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {t.orders.subtitle}
          </p>
        </motion.div>

        {authLoading || loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 w-full rounded-2xl" />
            ))}
          </div>
        ) : !user ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <LogIn className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {language === "tr" ? "Giriş Yapmanız Gerekiyor" : "Login Required"}
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              {language === "tr" 
                ? "Gönderilerinizi görmek için lütfen giriş yapın veya üye olun."
                : "Please log in or sign up to view your shipments."
              }
            </p>
            <Button 
              onClick={() => setShowAuthModal(true)}
              className="btn-primary-glow rounded-xl px-8"
            >
              {language === "tr" ? "Giriş Yap / Üye Ol" : "Log In / Sign Up"}
            </Button>
          </motion.div>
        ) : orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {t.orders.noOrders}
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t.orders.noOrdersDesc}
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => {
              const status = statusConfig[order.status];
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => navigate("/track", { state: { id: order.id } })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate("/track", { state: { id: order.id } });
                    }
                  }}
                  className="bg-card rounded-2xl border border-border p-4 shadow-sm cursor-pointer transition-colors hover:border-primary/50"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {origin} → {order.destination}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {order.product_category} • {order.total_weight} kg
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${status.color} text-white gap-1`}
                    >
                      {status.icon}
                      {status.label}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">{t.orders.orderId}</p>
                      <p className="text-sm font-mono text-foreground">
                        {order.id.slice(0, 8).toUpperCase()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {formatDate(order.created_at)}
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        {formatMoney(order.estimated_min_price, order.shipping_type === "domestic" ? "TRY" : "EUR")}
                        {" - "}
                        {formatMoney(order.estimated_max_price, order.shipping_type === "domestic" ? "TRY" : "EUR")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <AppNavigation />

      <BookingChoiceModal
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        onGuestContinue={() => setShowAuthModal(false)}
      />
    </div>
  );
};

export default OrdersPage;
