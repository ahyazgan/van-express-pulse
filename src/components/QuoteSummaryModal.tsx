import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Navigation, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { PriceResult } from "@/constants/shippingRates";

interface QuoteSummaryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  origin: string;
  destination: string;
  priceResult: PriceResult | null;
  onProceed: () => void;
}

const QuoteSummaryModal = ({
  open,
  onOpenChange,
  origin,
  destination,
  priceResult,
  onProceed,
}: QuoteSummaryModalProps) => {
  const { language } = useLanguage();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE").format(price);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border/50 p-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="bg-primary/10 px-6 py-5 border-b border-border/30">
          <DialogTitle className="text-lg font-bold text-foreground flex items-center gap-2">
            <Truck className="w-5 h-5 text-accent" />
            {language === "tr" ? "Taşıma Teklif Özetiniz" : "Your Shipping Quote"}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-5 space-y-5">
          {/* Route Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/50 rounded-xl p-4 border border-border/30"
          >
            <p className="text-xs text-muted-foreground mb-3 font-medium">
              {language === "tr" ? "Taşıma Rotası" : "Shipping Route"}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-accent" />
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">{origin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-foreground">{destination}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-accent/10 rounded-xl p-4 border border-accent/30"
          >
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              {language === "tr" ? "Tahmini Navlun" : "Estimated Freight"}
            </p>
            {priceResult?.found ? (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-accent">
                  €{formatPrice(priceResult.minPrice!)}
                </span>
                <span className="text-lg text-muted-foreground mx-1">-</span>
                <span className="text-2xl font-bold text-accent">
                  €{formatPrice(priceResult.maxPrice!)}
                </span>
              </div>
            ) : (
              <p className="text-lg font-semibold text-foreground">
                {language === "tr" ? "Özel teklif hazırlanacak" : "Custom quote will be prepared"}
              </p>
            )}
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-2 text-xs text-muted-foreground"
          >
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>
              {language === "tr"
                ? "Fiyatlar yükün hacmi ve ağırlığına göre değişiklik gösterebilir."
                : "Prices may vary based on cargo volume and weight."}
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={onProceed}
              className="w-full h-12 btn-primary-glow rounded-xl text-sm font-semibold gap-2"
            >
              <Truck className="w-4 h-4" />
              {language === "tr" ? "Rezervasyon Talebi Oluştur" : "Create Booking Request"}
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteSummaryModal;
