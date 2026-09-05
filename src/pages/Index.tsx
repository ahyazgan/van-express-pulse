import { useState } from "react";
import TopBar from "@/components/TopBar";
import MapBackground from "@/components/MapBackground";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";
import usePageMeta from "@/hooks/usePageMeta";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ShippingMode } from "@/constants/domesticRates";

const HOME_META = {
  title: "Uluslararası Nakliyat ve Avrupa Kargo Fiyatları 2026",
  description:
    "Türkiye'den Avrupa'ya kapıdan kapıya panelvan taşımacılık: 10 ülkeye 24-72 saatte aktarmasız teslimat. Güzergâh fiyatlarını görün, hemen teklif alın.",
  h1: "RouteEU Express - Avrupa'nın En Hızlı Panelvan Ağı",
} as const;

const Index = () => {
  const { t } = useLanguage();
  // Shipping mode is shared between the map and the bottom sheet.
  const [mode, setMode] = useState<ShippingMode>("europe");

  // Indexable metadata is pinned to Turkish on purpose. The served HTML is
  // Turkish (index.html) and this is the Turkish market's landing page, but the
  // UI language falls back to English whenever navigator.language is not "tr" —
  // which is exactly the locale Googlebot's renderer uses. Driving <title>,
  // description and <html lang> off `t` therefore got the homepage indexed in
  // English while the crawled HTML said Turkish. The interface still switches;
  // only the document-level signals stay fixed.
  usePageMeta({
    title: HOME_META.title,
    description: HOME_META.description,
    canonicalPath: "/",
    lang: "tr",
  });

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {/* Screen-reader/crawler heading: the map-first UI has no visible page title. */}
      <h1 className="sr-only">{HOME_META.h1}</h1>
      <MapBackground mode={mode} />
      <TopBar />
      <BottomSheet mode={mode} onModeChange={setMode} />
      <AppNavigation />
    </div>
  );
};

export default Index;
