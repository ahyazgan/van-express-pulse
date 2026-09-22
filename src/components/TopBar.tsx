import { useState } from "react";
import { motion } from "framer-motion";
import { User, HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import RouteEULogo from "./RouteEULogo";
import HelpModal from "./HelpModal";
import { waHref } from "@/content/seo/contact";

// Real <a href> so crawlers can discover the route (buttons are invisible to them).
const MotionLink = motion(Link);

const TopBar = () => {
  const { user } = useAuth();
  const [helpOpen, setHelpOpen] = useState(false);
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return <motion.div className="fixed top-0 left-0 right-0 z-30 safe-top pointer-events-none flex justify-center md:left-[420px]" initial={{
    y: -50,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    type: "spring",
    damping: 20,
    delay: 0.2
  }}>
      <div className="flex items-center justify-between px-5 py-3 w-full max-w-md mx-auto">
        {/* Profile Button */}
        <MotionLink
          to="/profile"
          aria-label={language === "tr" ? "Profil" : "Profile"}
          className="w-12 h-12 rounded-full glass border border-border/60 flex items-center justify-center shadow-md pointer-events-auto hover:bg-secondary/50 transition-colors"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
        >
          <User className={`w-5 h-5 ${user ? "text-accent" : "text-foreground"}`} />
        </MotionLink>

        {/* Logo */}
        <motion.div className="flex items-center px-3 py-1.5 rounded-full glass border border-border/60 shadow-md pointer-events-auto" initial={{
        scale: 0.9
      }} animate={{
        scale: 1
      }} transition={{
        delay: 0.3
      }}>
          <RouteEULogo />
        </motion.div>

        {/* Language Toggle & Help */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Language Toggle */}
          <motion.button onClick={toggleLanguage} className="px-3 py-2 rounded-full glass border border-border/60 flex items-center gap-1.5 shadow-md" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <span className="text-lg">{language === "tr" ? "🇹🇷" : "🇬🇧"}</span>
            <span className="text-xs font-bold text-foreground uppercase">{language}</span>
          </motion.button>

          {/* WhatsApp: the primary way to reach us, so it sits in the bar and
              not behind the Help modal. */}
          <motion.a
            href={waHref(language === "tr"
              ? "Merhaba, Avrupa'ya panelvan taşıma için fiyat almak istiyorum."
              : "Hello, I would like a quote for van transport to Europe.")}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="px-3 py-2.5 rounded-full bg-[#25D366] text-white flex items-center gap-2 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-bold hidden sm:inline">WhatsApp</span>
          </motion.a>

          {/* Help Button */}
          <motion.button 
            onClick={() => setHelpOpen(true)}
            className="px-4 py-2.5 rounded-full glass border border-border/60 flex items-center gap-2 shadow-md" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <HelpCircle className="w-4 h-4 text-foreground" />
            <span className="text-sm font-bold text-foreground hidden sm:inline">
              {language === "tr" ? "Yardım" : "Help"}
            </span>
          </motion.button>
        </div>
      </div>

      <HelpModal open={helpOpen} onOpenChange={setHelpOpen} />
    </motion.div>;
};
export default TopBar;