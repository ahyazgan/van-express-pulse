import { useState } from "react";
import TopBar from "@/components/TopBar";
import MapBackground from "@/components/MapBackground";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";
import usePageMeta from "@/hooks/usePageMeta";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ShippingMode } from "@/constants/domesticRates";

const Index = () => {
  const { t } = useLanguage();
  // Shipping mode is shared between the map and the bottom sheet.
  const [mode, setMode] = useState<ShippingMode>("europe");

  usePageMeta({
    title: t.meta.home.title,
    description: t.meta.home.description,
    canonicalPath: "/",
  });

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {/* Screen-reader/crawler heading: the map-first UI has no visible page title. */}
      <h1 className="sr-only">{t.hero.heading}</h1>
      <MapBackground mode={mode} />
      <TopBar />
      <BottomSheet mode={mode} onModeChange={setMode} />
      <AppNavigation />
    </div>
  );
};

export default Index;
