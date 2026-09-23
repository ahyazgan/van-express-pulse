import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CONSENT_KEY = "cookie_consent";

type Gtag = (...args: unknown[]) => void;
const getGtag = (): Gtag | undefined =>
  (window as unknown as { gtag?: Gtag }).gtag;

// Consent Mode v2 starts denied on every load (set in index.html); grant when opted in.
const grantConsent = () => {
  getGtag()?.("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
};

const ConsentBanner = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* ignore */
    }
    if (stored === "granted") {
      grantConsent(); // re-apply previously granted consent on load
    } else if (stored !== "denied") {
      setVisible(true); // no choice made yet
    }
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore */
    }
    if (granted) grantConsent();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          // Sits just above the bottom nav (safe-area pad + 8px margin + 64px bar)
          // instead of on top of it, so the nav and the WhatsApp button stay usable
          // while the visitor decides.
          className="fixed inset-x-0 z-[60] px-4 pointer-events-none bottom-[calc(max(env(safe-area-inset-bottom),16px)+80px)] md:left-[420px]"
        >
          <div
            className="pointer-events-auto mx-auto max-w-md rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-lg px-3 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <Cookie className="hidden sm:block w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
            <p className="text-xs leading-snug text-muted-foreground flex-1 min-w-[10rem]">{t.consent.message}</p>
            <div className="flex gap-2 ml-auto flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="rounded-lg h-7 px-3 text-xs"
                onClick={() => choose(false)}
              >
                {t.consent.reject}
              </Button>
              <Button size="sm" className="rounded-lg h-7 px-3 text-xs" onClick={() => choose(true)}>
                {t.consent.accept}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentBanner;
