import { motion } from "framer-motion";
import { User, Phone, Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ContactInfo } from "./types";
import PhotoUpload from "./PhotoUpload";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactStepProps {
  data: ContactInfo;
  onChange: (data: ContactInfo) => void;
}

const ContactStep = ({ data, onChange }: ContactStepProps) => {
  const { language } = useLanguage();
  
  const updateField = <K extends keyof ContactInfo>(
    field: K,
    value: ContactInfo[K]
  ) => {
    onChange({ ...data, [field]: value });
  };

  const texts = {
    title: language === "tr" ? "İletişim Bilgileri" : "Contact Information",
    fullName: language === "tr" ? "Ad Soyad / Firma Adı" : "Full Name / Company",
    phone: language === "tr" ? "Telefon Numarası" : "Phone Number",
    email: language === "tr" ? "E-posta Adresi" : "Email Address",
    privacy: language === "tr" 
      ? "🔒 Bilgileriniz güvenle saklanır ve sadece gönderi takibi için kullanılır."
      : "🔒 Your information is securely stored and used only for shipment tracking.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-4 h-4 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">{texts.title}</h3>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground flex items-center gap-2">
          <User className="w-4 h-4" />
          {texts.fullName}
        </Label>
        <Input
          type="text"
          value={data.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="Yazgan Nakliyat A.Ş."
          className="h-12 rounded-xl bg-secondary/50 border-border/50"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground flex items-center gap-2">
          <Phone className="w-4 h-4" />
          {texts.phone}
        </Label>
        <Input
          type="tel"
          value={data.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="+90 555 123 45 67"
          className="h-12 rounded-xl bg-secondary/50 border-border/50"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground flex items-center gap-2">
          <Mail className="w-4 h-4" />
          {texts.email}
        </Label>
        <Input
          type="email"
          value={data.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="info@firmaniz.com"
          className="h-12 rounded-xl bg-secondary/50 border-border/50"
        />
      </div>

      {/* Photo Upload */}
      <div className="pt-2">
        <PhotoUpload
          photos={data.photos}
          onChange={(photos) => updateField("photos", photos)}
          maxPhotos={3}
        />
      </div>

      <div className="p-3 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-xs text-muted-foreground">
          {texts.privacy}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactStep;
