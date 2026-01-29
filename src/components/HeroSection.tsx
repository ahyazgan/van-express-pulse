import { ArrowDown, MapPin, Zap, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToForm = () => {
    // Trigger the bottom sheet to expand
    const bottomSheet = document.querySelector('[class*="bottom-sheet"]');
    if (bottomSheet) {
      bottomSheet.scrollIntoView({ behavior: "smooth" });
    }
    // Dispatch a custom event to expand the bottom sheet
    window.dispatchEvent(new CustomEvent("expandBottomSheet"));
  };

  const trustMarkers = [
    {
      icon: MapPin,
      label: t.hero.trustMarkers.liveTracking,
    },
    {
      icon: Zap,
      label: t.hero.trustMarkers.expressBorder,
    },
    {
      icon: Headphones,
      label: t.hero.trustMarkers.proService,
    },
  ];

  return (
    <motion.section
      className="fixed inset-x-0 top-20 z-20 px-5 pt-4 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="max-w-lg mx-auto pointer-events-auto">
        {/* Glass Card Container */}
        <div className="glass border border-border/60 rounded-2xl p-5 shadow-lg">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl font-black text-foreground leading-tight mb-3">
            {t.hero.heading}
          </h1>

          {/* Subheading */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {t.hero.subheading}
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToForm}
            size="lg"
            className="w-full btn-primary-glow touch-target text-base font-bold rounded-xl h-12 mb-5"
          >
            {t.hero.cta}
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>

          {/* Trust Markers */}
          <div className="flex items-center justify-between gap-2">
            {trustMarkers.map((marker, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-1.5 flex-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <marker.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground text-center leading-tight">
                  {marker.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
