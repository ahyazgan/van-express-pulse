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
          className="fixed inset-x-0 bottom-0 z-[60] p-4 pointer-events-none safe-bottom md:left-[420px]"
        >
          <div className="pointer-events-auto mr-20 max-w-md sm:mx-auto rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-lg p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground flex-1">{t.consent.message}</p>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="rounded-lg h-8"
                onClick={() => choose(false)}
              >
                {t.consent.reject}
              </Button>
              <Button size="sm" className="rounded-lg h-8" onClick={() => choose(true)}>
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
