import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCheck, User, History, MapPin, FileText, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  const [rememberMe, setRememberMe] = useState(true);

  const handleMemberClick = (isLogin: boolean) => {
    onOpenChange(false);
    navigate("/auth", { 
      state: { 
        from: "/", 
        rememberMe,
        mode: isLogin ? "login" : "signup"
      } 
    });
  };

  const handleGuestClick = () => {
    onOpenChange(false);
    onGuestContinue();
  };

  const memberBenefits = language === "tr" 
    ? [
        "Geçmiş siparişlerinize ve fatura arşivinize anında ulaşın.",
        "Yükünüzü 7/24 harita üzerinden canlı takip edin.",
        "Şirket ve fatura bilgilerinizi kaydederek bir sonraki sefer saniyeler içinde sipariş verin.",
      ]
    : [
        "Instantly access your past orders and invoice archive.",
        "Track your cargo live on the map 24/7.",
        "Save your company and billing info to order in seconds next time.",
      ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg mx-4 rounded-3xl p-0 overflow-hidden border-border/50 bg-background/95 backdrop-blur-xl flex flex-col max-h-[90vh]">
        <DialogHeader className="px-6 pt-6 pb-2 flex-shrink-0">
          <DialogTitle className="text-xl font-bold text-center text-foreground">
            {language === "tr" ? "Nasıl Devam Etmek İstersiniz?" : "How Would You Like to Continue?"}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-4 overflow-y-auto flex-1" style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom))' }}>
          {/* Member Option */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-5 overflow-hidden"
          >
            {/* Recommended badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
              {language === "tr" ? "ÖNERİLEN" : "RECOMMENDED"}
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {language === "tr" ? "Üyelik Avantajlarıyla Devam Et" : "Continue with Member Benefits"}
                </h3>
              </div>
            </div>

            {/* Benefits list */}
            <ul className="mt-4 space-y-2.5">
              {memberBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Benefit icons row */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-primary/20">
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                <History className="w-4 h-4" />
                <span>{language === "tr" ? "Sipariş Geçmişi" : "Order History"}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                <MapPin className="w-4 h-4" />
                <span>{language === "tr" ? "Canlı Takip" : "Live Tracking"}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                <FileText className="w-4 h-4" />
                <span>{language === "tr" ? "Fatura Arşivi" : "Invoice Archive"}</span>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-primary/20">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label 
                htmlFor="rememberMe" 
                className="text-sm text-muted-foreground cursor-pointer select-none"
              >
                {language === "tr" ? "Beni Hatırla (Sürekli aktif kal)" : "Remember Me (Stay logged in)"}
              </label>
            </div>

            {/* Two Distinct CTA Buttons */}
            <div className="mt-4 space-y-3">
              {/* Sign Up Button - Yellow bg */}
              <Button
                onClick={() => handleMemberClick(false)}
                className="w-full h-12 btn-primary-glow rounded-xl text-base font-bold gap-2"
              >
                <UserCheck className="w-5 h-5" />
                {language === "tr" ? "Üye Ol" : "Sign Up"}
              </Button>

              {/* Login Button - Navy border/text */}
              <Button
                onClick={() => handleMemberClick(true)}
                variant="outline"
                className="w-full h-12 rounded-xl text-base font-bold gap-2 border-2 border-foreground text-foreground hover:bg-foreground/5"
              >
                <User className="w-5 h-5" />
                {language === "tr" ? "Giriş Yap" : "Log In"}
              </Button>
            </div>
          </motion.div>

          {/* Guest Option */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-border/60 bg-secondary/30 p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-muted border border-border/50 flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {language === "tr" ? "Hızlı Talep (Misafir)" : "Quick Request (Guest)"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "tr" 
                    ? "Üyelik açmadan sadece bu sipariş için bilgilerinizi girerek devam edin."
                    : "Continue by entering your info just for this order without signing up."
                  }
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleGuestClick}
              variant="outline"
              className="w-full h-12 mt-4 rounded-xl text-base font-semibold gap-2 border-border/60 hover:bg-secondary/50"
            >
              <User className="w-5 h-5" />
              {language === "tr" ? "Misafir Olarak Devam Et" : "Continue as Guest"}
            </Button>
          </motion.div>

          {/* Cancel Button */}
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="w-full h-10 rounded-xl text-muted-foreground text-sm"
          >
            {language === "tr" ? "İptal" : "Cancel"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingChoiceModal;
