import { useState, useMemo, useEffect } from "react";
import { motion, useDragControls, useAnimationControls, PanInfo, AnimatePresence } from "framer-motion";
import { Clock, Truck, Zap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import QuickRouteCards, { QUICK_ROUTES, fromPrice } from "./QuickRouteCards";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { trackEvent } from "@/lib/analytics";
import { HOME_COPY } from "./HomeHero";
import RouteSearchInputs from "./RouteSearchInputs";
import FeaturesSection from "./FeaturesSection";
import ServicesGrid from "./ServicesGrid";
import SeoLinksSection from "./SeoLinksSection";
import BookingChoiceModal from "./BookingChoiceModal";
import QuoteSummaryModal from "./QuoteSummaryModal";
import { getShippingPrice } from "@/constants/shippingRates";
import { getDomesticPrice, type ShippingMode } from "@/constants/domesticRates";
import { destinationEvents } from "@/lib/destinationEvents";
import OrderForm from "./OrderForm/OrderForm";
import type { OrderData } from "./OrderForm/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

interface BottomSheetProps {
  mode: ShippingMode;
  onModeChange: (m: ShippingMode) => void;
}

const BottomSheet = ({ mode, onModeChange }: BottomSheetProps) => {
  const { language, t } = useLanguage();
  const { user, profile } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const [viewMode, setViewMode] = useState<"browse" | "order">("browse");
  const [showChoiceModal, setShowChoiceModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>("express");
  const [selectedRouteId, setSelectedRouteId] = useState<number | null>(null);
  const [origin, setOrigin] = useState(language === "tr" ? "İstanbul" : "Istanbul");
  const [destination, setDestination] = useState("");
  const dragControls = useDragControls();
  // On desktop the sheet is a fixed left column: fully open, no drag. The
  // mobile bottom-sheet pattern stretched across a 1400px screen pushed the
  // quote button below the fold.
  const isDesktop = useIsDesktop();
  const animationControls = useAnimationControls();
  const { toast } = useToast();

  const vehicles = [
    {
      id: "express",
      name: "Panelvan Express",
      time: language === "tr" ? "24 saat" : "24 hours",
      icon: Zap,
      express: true,
      description: language === "tr" ? "En hızlı teslimat garantisi" : "Fastest delivery guarantee",
    },
    {
      id: "standard",
      name: language === "tr" ? "Standart Van" : "Standard Van",
      time: language === "tr" ? "48 saat" : "48 hours",
      icon: Truck,
      express: false,
      description: language === "tr" ? "Ekonomik kargo çözümü" : "Economical shipping solution",
    },
  ];

  // Subscribe to map destination events
  useEffect(() => {
    const unsubscribe = destinationEvents.subscribe((dest) => {
      setDestination(dest);
      setIsExpanded(true);
      animationControls.start({ height: expandedHeight });
    });
    return () => { unsubscribe(); };
  }, [animationControls]);

  // Mirror the current route pick to the map: the Europe map switches to a
  // single highlighted route when both ends resolve, back to showcase otherwise.
  useEffect(() => {
    destinationEvents.emitRouteSelection({ origin, destination });
  }, [origin, destination]);

  const priceResult = useMemo(() => {
    if (!destination) return null;
    return mode === "domestic"
      ? getDomesticPrice(origin, destination)
      : getShippingPrice(destination);
  }, [mode, origin, destination]);

  const handleModeChange = (m: ShippingMode) => {
    if (m === mode) return;
    onModeChange(m);
    // Reset the route when switching modes (city sets differ).
    setDestination("");
    setSelectedRouteId(null);
    setOrigin(language === "tr" ? "İstanbul" : "Istanbul");
  };

  // Collapsed must still show headline + toggle + both inputs + price strip
  // above the 80px bottom nav on a 740px phone.
  const collapsedHeight = "60%";
  const expandedHeight = "85%";

  useEffect(() => {
    if (isDesktop) {
      setIsExpanded(true);
      animationControls.start({ height: "100%" });
    } else {
      setIsExpanded(false);
      animationControls.start({ height: collapsedHeight });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Disable drag when in order mode
    if (viewMode === "order") return;
    
    const threshold = 50;
    if (info.offset.y < -threshold) {
      setIsExpanded(true);
      animationControls.start({ height: expandedHeight });
    } else if (info.offset.y > threshold) {
      setIsExpanded(false);
      animationControls.start({ height: collapsedHeight });
    }
  };

  const handleInputFocus = () => {
    setIsExpanded(true);
    animationControls.start({ height: expandedHeight });
  };

  const handleStartOrder = () => {
    if (!destination) {
      toast({
        title: language === "tr" ? "Hedef seçin" : "Select destination",
        description: language === "tr" 
          ? "Lütfen önce gönderi yapılacak şehri seçin." 
          : "Please select the destination city first.",
        variant: "destructive",
      });
      return;
    }
    
    trackEvent("quote_start", { mode, destination });
    // Show quote summary modal first
    setShowQuoteModal(true);
  };

  const handleProceedFromQuote = () => {
    setShowQuoteModal(false);
    
    // Account creation is suspended for now: nobody has to sign up to get a
    // quote, so the member/guest choice would only add a step. Signed-in users
    // and guests both go straight to the form (guest orders have user_id null).
    // The modal stays in the codebase; re-enable by restoring the branch here.
    void user;
    handleGuestContinue();
  };

  const handleGuestContinue = () => {
    setViewMode("order");
  };

  const handleOrderSuccess = (data: OrderData) => {
    console.log("Order submitted:", data);
    toast({
      title: language === "tr" ? "Talep alındı!" : "Request received!",
      description: language === "tr" 
        ? "RouteEU en kısa sürede sizinle iletişime geçecek."
        : "RouteEU will contact you shortly.",
    });
  };

  const handleCancelOrder = () => {
    setViewMode("browse");
  };

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 bottom-sheet pointer-events-auto md:inset-y-0 md:right-auto md:w-[420px] md:rounded-none md:rounded-r-[32px] md:border-r md:border-t-0"
      initial={{ height: collapsedHeight }}
      animate={animationControls}
      drag={!isDesktop && viewMode === "browse" ? "y" : false}
      dragControls={dragControls}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      style={{ touchAction: "none" }}
    >
      {/* Handle */}
      <div className="pt-3 pb-2 cursor-grab active:cursor-grabbing md:hidden">
        <div className="sheet-handle" />
      </div>

      {/* Content */}
      <div className={`px-5 overflow-y-auto h-full md:pt-6 ${viewMode === "browse" ? "pb-32 sm:pb-24 md:pb-10" : "pb-36 sm:pb-28 md:pb-10"}`}>
        <AnimatePresence mode="wait">
          {viewMode === "browse" ? (
            <motion.div
              key="browse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Yurt içi / Avrupa mode toggle */}
              {/* Phone header: the page's H1 and promise live here, because the
                  card over the map hid the price bubbles. Desktop shows HomeHero. */}
              {!isDesktop && (
                <div className="mb-3">
                  <h1 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {language === "en" ? HOME_COPY.en.h1 : HOME_COPY.tr.h1}
                  </h1>
                  <p className="mt-0.5 text-base font-black leading-tight text-foreground">
                    {language === "en" ? HOME_COPY.en.promise : HOME_COPY.tr.promise}
                  </p>
                </div>
              )}

              <div className="mb-4 flex items-center gap-1 p-1 rounded-xl bg-secondary/60 border border-border/40">
                {(["domestic", "europe"] as ShippingMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => handleModeChange(m)}
                    className={`flex-1 h-9 rounded-lg text-sm font-semibold transition-colors ${
                      mode === m
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {m === "domestic" ? t.mode.domestic : t.mode.europe}
                  </button>
                ))}
              </div>

              {/* Route Search Inputs */}
              <div className="mb-5">
                <RouteSearchInputs
                  origin={origin}
                  destination={destination}
                  onOriginChange={setOrigin}
                  onDestinationChange={setDestination}
                  onSwap={() => {
                    const temp = origin;
                    setOrigin(destination);
                    setDestination(temp);
                  }}
                  onFocus={handleInputFocus}
                />
              </div>

              {/* Phone-only price strip, visible while the sheet is collapsed: the
                  map strip on a phone is too short for price bubbles, and this
                  is the first thing a visitor asked us to show. Desktop has the
                  route cards. */}
              {mode === "europe" && (
                <div className="-mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-1 md:hidden [scrollbar-width:none]">
                  {QUICK_ROUTES.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => {
                        setSelectedRouteId(r.id);
                        setOrigin(r.from);
                        setDestination(r.to);
                        setIsExpanded(true);
                        animationControls.start({ height: expandedHeight });
                      }}
                      className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-left ${
                        selectedRouteId === r.id ? "border-accent bg-accent/10" : "border-border/40 bg-secondary/40"
                      }`}
                    >
                      <span className="text-sm font-semibold">{r.to}</span>
                      <span className="text-xs text-muted-foreground">{r.time}</span>
                      {fromPrice(r.to) && <span className="text-sm font-bold text-foreground">{fromPrice(r.to)}</span>}
                    </button>
                  ))}
                </div>
              )}

              {/* Expanded Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={isExpanded ? "block" : "hidden"}
              >
                {/* Delivery Badge */}
                <div className="mb-4 flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30">
                    <Zap className="w-4 h-4 text-success" />
                    <span className="text-sm font-bold text-success">
                      {mode === "domestic" ? t.mode.domesticBadge : t.mode.europeBadge}
                    </span>
                  </div>
                </div>

                {/* Vehicle Selection - Compact */}
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-muted-foreground mb-2">
                    {language === "tr" ? "Araç Seçimi" : "Vehicle Selection"}
                  </h3>
                  <div className="flex gap-2">
                    {vehicles.map((vehicle) => (
                      <button
                        key={vehicle.id}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                        className={`relative flex-1 p-3 rounded-xl border transition-all duration-200 text-left ${
                          selectedVehicle === vehicle.id 
                            ? "border-accent bg-accent/10" 
                            : "border-border/30 bg-secondary/40 hover:border-border/50"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <vehicle.icon className={`w-4 h-4 ${selectedVehicle === vehicle.id ? "text-accent" : "text-primary"}`} />
                          <span className="text-xs font-semibold text-foreground">{vehicle.name}</span>
                          {vehicle.express && <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-accent text-accent-foreground">EXPRESS</span>}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span className="text-[10px] font-medium">{vehicle.time}</span>
                        </div>
                        {/* Selected indicator */}
                        {selectedVehicle === vehicle.id && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-accent/60 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Route Cards (Europe routes only) */}
                {mode === "europe" && (
                  <QuickRouteCards
                    selectedId={selectedRouteId}
                    onSelect={(route) => {
                      setSelectedRouteId(route.id);
                      setOrigin(route.from);
                      setDestination(route.to);
                      // Camera follows via the route-selection effect (fitBounds).
                    }}
                  />
                )}

                {/* CTA Button */}
                <Button
                  onClick={handleStartOrder}
                  disabled={!destination}
                  className="w-full h-12 btn-primary-glow rounded-xl text-sm gap-2"
                >
                  <FileText className="w-4 h-4" />
                  {t.home.getQuote}
                </Button>

                {/* What happens after you write: removes the "and then what?"
                    uncertainty that stops people from sending the first message. */}
                <ol className="mt-4 space-y-2 rounded-xl border border-border/40 bg-secondary/30 p-4 text-sm">
                  <li className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.home.nextStepsTitle}
                  </li>
                  {t.home.nextSteps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Marketing sections (visible when the sheet is expanded and scrolled) */}
                <FeaturesSection />
                <ServicesGrid />
                <SeoLinksSection />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="order"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {/* Destination Header */}
              <div className="mb-4 p-3 rounded-xl bg-secondary/50 border border-border/50">
                <p className="text-xs text-muted-foreground">
                  {language === "tr" ? "Gönderim Rotası" : "Shipping Route"}
                </p>
                <p className="font-semibold text-foreground">{origin} → {destination}</p>
              </div>

              {/* Order Form */}
              <OrderForm
                mode={mode}
                destination={`${origin} → ${destination}`}
                priceResult={priceResult}
                onSuccess={handleOrderSuccess}
                onCancel={handleCancelOrder}
                prefillData={profile ? {
                  fullName: profile.full_name || profile.company_name || "",
                  phone: profile.phone || "",
                  email: profile.email || "",
                } : undefined}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quote Summary Modal */}
      <QuoteSummaryModal
        open={showQuoteModal}
        onOpenChange={setShowQuoteModal}
        origin={origin}
        destination={destination}
        priceResult={priceResult}
        onProceed={handleProceedFromQuote}
      />

      {/* Booking Choice Modal */}
      <BookingChoiceModal
        open={showChoiceModal}
        onOpenChange={setShowChoiceModal}
        onGuestContinue={handleGuestContinue}
      />
    </motion.div>
  );
};

export default BottomSheet;
