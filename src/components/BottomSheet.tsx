import { useState } from "react";
import { motion, useDragControls, useAnimationControls, PanInfo } from "framer-motion";
import { Search, Clock, Truck, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const quickRoutes = [
  { from: "İst", to: "Münih" },
  { from: "İst", to: "Paris" },
  { from: "İst", to: "Londra" },
  { from: "İst", to: "Berlin" },
];

const vehicles = [
  {
    id: "express",
    name: "Minivan Express",
    time: "24 saat",
    icon: Truck,
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

const BottomSheet = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>("express");
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [destination, setDestination] = useState("");
  const dragControls = useDragControls();
  const animationControls = useAnimationControls();
  const { toast } = useToast();

  const collapsedHeight = "30%";
  const expandedHeight = "85%";

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
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

  const handleCTAClick = () => {
    toast({
      title: "WhatsApp'a yönlendiriliyorsunuz",
      description: "Temsilcimiz sizinle en kısa sürede iletişime geçecek.",
    });
    window.open("https://wa.me/905551234567", "_blank");
  };

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 bottom-sheet"
      initial={{ height: collapsedHeight }}
      animate={animationControls}
      drag="y"
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
        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Nereye gönderilecek?"
            className="h-14 pl-12 pr-4 text-base bg-secondary border-0 rounded-2xl placeholder:text-muted-foreground focus-visible:ring-primary"
            onFocus={handleInputFocus}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={isExpanded ? "block" : "hidden"}
        >
          {/* Quick Routes */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Popüler Rotalar</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {quickRoutes.map((route, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedRoute(index);
                    setDestination(`${route.from} → ${route.to}`);
                  }}
                  className={`route-chip ${selectedRoute === index ? "active" : ""}`}
                >
                  {route.from} → {route.to}
                </button>
              ))}
            </div>
          </div>

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
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <vehicle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{vehicle.name}</span>
                      {vehicle.express && <span className="express-tag">EXPRESS</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{vehicle.time}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleCTAClick}
            className="w-full h-14 btn-primary-glow rounded-2xl text-base gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Fiyat Al & WhatsApp'a Bağlan
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
      </div>
    </motion.div>
  );
};

export default BottomSheet;
