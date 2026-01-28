import { useState, useMemo, useEffect } from "react";
import { motion, useDragControls, useAnimationControls, PanInfo, AnimatePresence } from "framer-motion";
import { Clock, Truck, Zap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import QuickRouteCards from "./QuickRouteCards";
import CitySearchDropdown from "./CitySearchDropdown";
import { getShippingPrice } from "@/constants/shippingRates";
import { destinationEvents } from "@/lib/destinationEvents";
import { OrderForm, OrderData } from "./OrderForm";

const vehicles = [
  {
    id: "express",
    name: "Minivan Express",
    time: "24 saat",
    icon: Zap,
    express: true,
    description: "En hızlı teslimat garantisi",
  },
  {
    id: "standard",
    name: "Standart Van",
    time: "48 saat",
    icon: Truck,
    express: false,
    description: "Ekonomik kargo çözümü",
  },
];

type ViewMode = "browse" | "order";

const BottomSheet = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("browse");
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>("express");
  const [selectedRouteId, setSelectedRouteId] = useState<number | null>(null);
  const [destination, setDestination] = useState("");
  const dragControls = useDragControls();
  const animationControls = useAnimationControls();
  const { toast } = useToast();

  // Subscribe to map destination events
  useEffect(() => {
    const unsubscribe = destinationEvents.subscribe((dest) => {
      setDestination(`İstanbul → ${dest}`);
      setIsExpanded(true);
      animationControls.start({ height: expandedHeight });
    });
    return () => { unsubscribe(); };
  }, [animationControls]);

  const priceResult = useMemo(() => {
    if (!destination) return null;
    return getShippingPrice(destination);
  }, [destination]);

  const collapsedHeight = "30%";
  const expandedHeight = "85%";

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
        title: "Hedef seçin",
        description: "Lütfen önce gönderi yapılacak şehri seçin.",
        variant: "destructive",
      });
      return;
    }
    setViewMode("order");
  };

  const handleOrderSuccess = (data: OrderData) => {
    console.log("Order submitted:", data);
    toast({
      title: "Talep alındı!",
      description: "Yazgan Nakliyat en kısa sürede sizinle iletişime geçecek.",
    });
  };

  const handleCancelOrder = () => {
    setViewMode("browse");
  };

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 bottom-sheet pointer-events-auto"
      initial={{ height: collapsedHeight }}
      animate={animationControls}
      drag={viewMode === "browse" ? "y" : false}
      dragControls={dragControls}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      style={{ touchAction: "none" }}
    >
      {/* Handle */}
      <div className="pt-3 pb-2 cursor-grab active:cursor-grabbing">
        <div className="sheet-handle" />
      </div>

      {/* Content */}
      <div className="px-5 pb-24 overflow-y-auto h-full">
        <AnimatePresence mode="wait">
          {viewMode === "browse" ? (
            <motion.div
              key="browse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Search Input with Dropdown */}
              <div className="mb-6">
                <CitySearchDropdown
                  value={destination}
                  onChange={setDestination}
                  onCitySelect={(cityId) => {
                    destinationEvents.flyTo(cityId);
                  }}
                  onFocus={handleInputFocus}
                />
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={isExpanded ? "block" : "hidden"}
              >
                {/* Quick Route Cards */}
                <QuickRouteCards
                  selectedId={selectedRouteId}
                  onSelect={(route) => {
                    setSelectedRouteId(route.id);
                    setDestination(`${route.from} → ${route.to}`);
                    destinationEvents.flyTo(route.to);
                  }}
                />

                {/* Vehicle Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Araç Seçimi</h3>
                  <div className="space-y-3">
                    {vehicles.map((vehicle) => (
                      <button
                        key={vehicle.id}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                        className={`vehicle-card w-full flex items-center gap-4 text-left ${
                          selectedVehicle === vehicle.id ? "selected" : ""
                        }`}
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                          <vehicle.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-foreground">{vehicle.name}</span>
                            {vehicle.express && <span className="express-tag">EXPRESS</span>}
                          </div>
                          <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-bold">{vehicle.time}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={handleStartOrder}
                  disabled={!destination}
                  className="w-full h-14 btn-primary-glow rounded-2xl text-base gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Detaylı Teklif Al
                </Button>
              </motion.div>

              {/* Collapsed hint */}
              {!isExpanded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-muted-foreground mt-2"
                >
                  Yukarı kaydırarak devam edin
                </motion.p>
              )}
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
                <p className="text-xs text-muted-foreground">Gönderim Rotası</p>
                <p className="font-semibold text-foreground">{destination}</p>
              </div>

              {/* Order Form */}
              <OrderForm
                destination={destination}
                priceResult={priceResult}
                onSuccess={handleOrderSuccess}
                onCancel={handleCancelOrder}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default BottomSheet;
