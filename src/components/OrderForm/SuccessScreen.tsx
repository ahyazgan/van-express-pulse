import { motion } from "framer-motion";
import { CheckCircle, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessScreenProps {
  onClose: () => void;
}

const SuccessScreen = ({ onClose }: SuccessScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center py-8 text-center"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6"
      >
        <CheckCircle className="w-12 h-12 text-accent" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-bold text-foreground mb-2"
      >
        Talebiniz Alındı!
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground mb-6 px-4"
      >
        <span className="font-semibold text-foreground">Yazgan Nakliyat</span>{" "}
        15 dk içinde size dönecektir.
      </motion.p>

      {/* Timeline indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
      >
        <Clock className="w-4 h-4" />
        <span className="text-sm font-medium">~15 dakika</span>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full space-y-3 px-4"
      >
        <Button
          onClick={() => window.open("https://wa.me/905551234567", "_blank")}
          className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
        >
          <Phone className="w-4 h-4" />
          Hemen WhatsApp ile Ara
        </Button>

        <Button
          variant="outline"
          onClick={onClose}
          className="w-full h-12 rounded-xl border-border/50"
        >
          Tamam
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessScreen;
