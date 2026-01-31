import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import usePageMeta from "@/hooks/usePageMeta";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  usePageMeta({
    title: language === "tr" ? "Talebiniz Alındı - RouteEU Express" : "Request Received - RouteEU Express",
    description: language === "tr" 
      ? "Kargo talebiniz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
      : "Your shipping request has been received. Our team will contact you shortly."
  });

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full text-center space-y-6"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-20 h-20 rounded-full bg-success/10 flex items-center justify-center"
        >
          <CheckCircle className="w-12 h-12 text-success" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-foreground"
        >
          {language === "tr" ? "Talebiniz Alındı!" : "Request Received!"}
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground"
        >
          {language === "tr" 
            ? "RouteEU Express ekibi en kısa sürede sizinle iletişime geçecektir."
            : "The RouteEU Express team will contact you shortly."}
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={() => navigate("/")}
            className="btn-primary-glow gap-2 px-8 h-12 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "tr" ? "Ana Sayfaya Dön" : "Back to Home"}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
