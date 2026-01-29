import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, UserX, Percent, MapPin, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingChoiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGuestContinue: () => void;
}

const BookingChoiceModal = ({
  open,
  onOpenChange,
  onGuestContinue,
}: BookingChoiceModalProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleMemberClick = () => {
    onOpenChange(false);
    navigate("/auth", { state: { from: "/" } });
  };

  const handleGuestClick = () => {
    onOpenChange(false);
    onGuestContinue();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-4 rounded-3xl p-0 overflow-hidden border-border/50 bg-background/95 backdrop-blur-xl">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-bold text-center">
            {language === "tr" ? "Nasıl devam etmek istersiniz?" : "How would you like to continue?"}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-4">
          {/* Member Option */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={handleMemberClick}
            className="w-full p-5 rounded-2xl border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all text-left group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-foreground">
                    {language === "tr" ? "Üye Ol / Giriş Yap" : "Sign Up / Log In"}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold">
                    {language === "tr" ? "ÖNERİLEN" : "RECOMMENDED"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "tr" 
                    ? "Bilgileriniz kaydedilsin, sonraki gönderilerinizde %5 indirim kazanın ve yükünüzü canlı takip edin."
                    : "Save your info, get 5% off future shipments, and track your cargo live."
                  }
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium">
                    <Percent className="w-3 h-3" /> %5 {language === "tr" ? "İndirim" : "Off"}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium">
                    <MapPin className="w-3 h-3" /> {language === "tr" ? "Canlı Takip" : "Live Tracking"}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium">
                    <Sparkles className="w-3 h-3" /> {language === "tr" ? "Hızlı Form" : "Quick Form"}
                  </span>
                </div>
              </div>
            </div>
          </motion.button>

          {/* Guest Option */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={handleGuestClick}
            className="w-full p-5 rounded-2xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-all text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <UserX className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">
                  {language === "tr" ? "Misafir Olarak Devam Et" : "Continue as Guest"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "tr" 
                    ? "Üye olmadan hızlıca talep oluşturun. (Sadece bu sipariş için geçerlidir)"
                    : "Create a quick request without signing up. (Valid for this order only)"
                  }
                </p>
              </div>
            </div>
          </motion.button>

          {/* Cancel Button */}
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="w-full h-12 rounded-xl text-muted-foreground"
          >
            {language === "tr" ? "İptal" : "Cancel"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingChoiceModal;
