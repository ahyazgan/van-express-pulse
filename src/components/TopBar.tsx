import { useState } from "react";
import { motion } from "framer-motion";
import { User, HelpCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import RouteEULogo from "./RouteEULogo";
import HelpModal from "./HelpModal";
import { waHref } from "@/content/seo/contact";

// Logo sits straight on the map with a white halo so lines and bubbles behind it
// don't cut through. true brings back the white pill chip it used to sit in.
const LOGO_IN_CHIP = false;
// "segmented": TR | EN side by side, active one filled navy. "classic": the old
// single button with a flag emoji (Windows shows the emoji as the letters "TR").
const LANG_TOGGLE_STYLE: "segmented" | "classic" = "segmented";
// Phones already have the WhatsApp tab in the bottom nav, within thumb reach;
// the top-bar button only shows from tablet width up. true shows it on phones.
const TOPBAR_WHATSAPP_ON_PHONE = false;

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
      <div className="flex items-center justify-between px-5 py-3 w-full max-w-md lg:max-w-xl mx-auto">
        {/* Profile Button — only for signed-in users while sign-up is suspended. */}
        {user ? (
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
        ) : (
          <div className="w-12 h-12" aria-hidden="true" />
        )}

        {/* Logo */}
        <motion.div className={`relative isolate flex shrink-0 items-center pointer-events-auto ${LOGO_IN_CHIP ? "px-3 py-1.5 rounded-full glass border border-border/60 shadow-md" : ""}`} initial={{
        scale: 0.9
      }} animate={{
        scale: 1
      }} transition={{
        delay: 0.3
      }}>
          {!LOGO_IN_CHIP && (
            // Soft white glow with no edge: mutes map labels behind the logo
            // without drawing a box around it.
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 bg-[radial-gradient(ellipse_closest-side,rgba(255,255,255,0.95)_55%,rgba(255,255,255,0.6)_75%,rgba(255,255,255,0)_100%)]"
            />
          )}
          <RouteEULogo
            compact
            className={LOGO_IN_CHIP ? undefined : "h-11 w-auto [filter:drop-shadow(0_0_1px_#fff)_drop-shadow(0_0_2px_#fff)_drop-shadow(0_1px_6px_rgba(255,255,255,0.9))]"}
          />
        </motion.div>

        {/* Language Toggle & Help */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Language Toggle */}
          {LANG_TOGGLE_STYLE === "segmented" ? (
          <div
            role="group"
            aria-label={language === "tr" ? "Dil seçimi" : "Language"}
            className="flex items-center gap-0.5 p-1 rounded-full glass border border-border/60 shadow-md"
          >
            {(["tr", "en"] as const).map((lang) => {
              const active = language === lang;
              return (
                <motion.button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={active}
                  lang={lang}
                  aria-label={lang === "tr" ? "Türkçe" : "English"}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-colors ${
                    active ? "bg-[#14213D] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang}
                </motion.button>
              );
            })}
          </div>
          ) : (
          <motion.button onClick={toggleLanguage} className="px-3 py-2 rounded-full glass border border-border/60 flex items-center gap-1.5 shadow-md" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <span className="text-lg">{language === "tr" ? "🇹🇷" : "🇬🇧"}</span>
            <span className="text-xs font-bold text-foreground uppercase">{language}</span>
          </motion.button>
          )}

          {/* WhatsApp: the primary way to reach us, so it sits in the bar and
              not behind the Help modal. */}
          <motion.a
            href={waHref(language === "tr"
              ? "Merhaba, Avrupa'ya panelvan taşıma için fiyat almak istiyorum."
              : "Hello, I would like a quote for van transport to Europe.")}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className={`px-3 py-2.5 rounded-full bg-[#25D366] text-white items-center gap-2 shadow-md ${TOPBAR_WHATSAPP_ON_PHONE ? "flex" : "hidden md:flex"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="text-sm font-bold hidden lg:inline">WhatsApp</span>
          </motion.a>

          {/* Help Button */}
          <motion.button 
            onClick={() => setHelpOpen(true)}
            className="px-4 py-2.5 rounded-full glass border border-border/60 flex items-center gap-2 shadow-md" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <HelpCircle className="w-4 h-4 text-foreground" />
            <span className="text-sm font-bold text-foreground hidden lg:inline">
              {language === "tr" ? "Yardım" : "Help"}
            </span>
          </motion.button>
        </div>
      </div>

      <HelpModal open={helpOpen} onOpenChange={setHelpOpen} />
    </motion.div>;
};
export default TopBar;
