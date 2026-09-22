import { useState } from "react";
import TopBar from "@/components/TopBar";
import MapBackground from "@/components/MapBackground";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";
import HomeHero from "@/components/HomeHero";
import { MessageCircle } from "lucide-react";
import { waHref } from "@/content/seo/contact";
import usePageMeta from "@/hooks/usePageMeta";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ShippingMode } from "@/constants/domesticRates";

const HOME_META = {
  title: "Uluslararası Nakliyat ve Avrupa Kargo Fiyatları 2026",
  description:
    "Türkiye'den Avrupa'ya kapıdan kapıya panelvan taşımacılık: 10 ülkeye 24-72 saatte aktarmasız teslimat. Güzergâh fiyatlarını görün, hemen teklif alın.",
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
      <MapBackground mode={mode} />
      <TopBar />
      {/* Visible H1 + contact strip; replaces the old sr-only heading. */}
      <HomeHero />
      {/* Same floating WhatsApp button the landing pages carry, lifted above the
          bottom navigation. */}
      <a
        href={waHref("Merhaba, Avrupa'ya panelvan taşıma için fiyat almak istiyorum.")}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <BottomSheet mode={mode} onModeChange={setMode} />
      <AppNavigation />
    </div>
  );
};

export default Index;
