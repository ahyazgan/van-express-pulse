import { Suspense, lazy, useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";
import HomeHero from "@/components/HomeHero";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waHref } from "@/content/seo/contact";
import usePageMeta from "@/hooks/usePageMeta";
import { dismissStaticShell } from "@/lib/staticShell";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ShippingMode } from "@/constants/domesticRates";

// The map library is ~780 KB. Loading it lazily lets the top bar, the quote
// panel and the prices show without waiting for it; the map fills in behind.
const MapBackground = lazy(() => import("@/components/MapBackground"));

const HOME_META = {
  title: "Uluslararası Nakliyat ve Avrupa Kargo Fiyatları 2026",
  description:
    "Türkiye'den Avrupa'ya kapıdan kapıya panelvan taşımacılık: 10 ülkeye 24-72 saatte aktarmasız teslimat. Güzergâh fiyatlarını görün, hemen teklif alın.",
} as const;

// The home page reaches WhatsApp through the bottom nav tab (and the top bar on
// desktop). true brings back the extra floating round button.
const SHOW_FLOATING_WHATSAPP = false;

const Index = () => {
  const { t } = useLanguage();
  // Shipping mode is shared between the map and the bottom sheet.
  const [mode, setMode] = useState<ShippingMode>("europe");
  const isDesktop = useIsDesktop();

  // Indexable metadata is pinned to Turkish on purpose. The served HTML is
  // Turkish (index.html) and this is the Turkish market's landing page, but the
  // UI language falls back to English whenever navigator.language is not "tr" —
  // which is exactly the locale Googlebot's renderer uses. Driving <title>,
  // description and <html lang> off `t` therefore got the homepage indexed in
  // English while the crawled HTML said Turkish. The interface still switches;
  // only the document-level signals stay fixed.
  // Our UI is in the DOM; let it paint once, then fade out the static hero.
  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(dismissStaticShell));
    return () => cancelAnimationFrame(id);
  }, []);

  usePageMeta({
    title: HOME_META.title,
    description: HOME_META.description,
    canonicalPath: "/",
    lang: "tr",
  });

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {/* Same light grey as the basemap, so the swap is not a flash. */}
      <Suspense fallback={<div className="fixed inset-0 bg-[#f6f6f4]" aria-hidden="true" />}>
        <MapBackground mode={mode} />
      </Suspense>
      <TopBar />
      {/* Visible H1 + contact strip on desktop; phones get it in the sheet. */}
      {isDesktop && <HomeHero />}
      {/* Same floating WhatsApp button the landing pages carry, lifted above the
          bottom navigation. Off: it sat right on top of the nav's WhatsApp tab
          (and over the nav's right end on desktop). */}
      {SHOW_FLOATING_WHATSAPP && (
      <a
        href={waHref("Merhaba, Avrupa'ya panelvan taşıma için fiyat almak istiyorum.")}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-20 right-4 z-50 md:bottom-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      )}
      <BottomSheet mode={mode} onModeChange={setMode} />
      <AppNavigation />
    </div>
  );
};

export default Index;
