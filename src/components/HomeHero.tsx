import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PHONE_DISPLAY, TEL_HREF, waHref } from "@/content/seo/contact";
import { priceRange, priceRangeEn } from "@/content/seo/seoData";

/**
 * The visible headline and contact strip over the map.
 *
 * The homepage opened as an app: a map, price bubbles, a "Help" button. A
 * visitor arriving from Google saw no sentence saying what we do and no way to
 * reach us without scrolling or opening a modal. This block answers both in the
 * first screen. The H1 text is kept identical to the prerendered one in
 * index.html so the crawled page and the hydrated page say the same thing.
 */
const COPY = {
  tr: {
    h1: "Türkiye'den Avrupa'ya Kapıdan Kapıya Ekspres Panelvan Taşımacılık",
    promise: "İstanbul'dan Berlin'e 24-36 saatte, kapıdan kapıya.",
    detail: (price: string) => `Komple panelvan ${price}. Yazın, aynı gün yazılı teklif alın.`,
    wa: "WhatsApp'tan yazın",
    waMessage: "Merhaba, Avrupa'ya panelvan taşıma için fiyat almak istiyorum.",
  },
  en: {
    h1: "Door-to-Door Express Van Transport from Türkiye to Europe",
    promise: "Istanbul to Berlin in 24-36 hours, door to door.",
    detail: (price: string) => `Full van ${price}. Message us, get a written quote the same day.`,
    wa: "Message us on WhatsApp",
    waMessage: "Hello, I would like a quote for van transport to Europe.",
  },
} as const;

const HomeHero = () => {
  const { language } = useLanguage();
  const c = language === "en" ? COPY.en : COPY.tr;
  const price = language === "en" ? priceRangeEn("Berlin") : priceRange("Berlin");

  return (
    <section
      aria-label={c.h1}
      className="pointer-events-none absolute left-0 right-0 top-[76px] z-20 flex justify-center px-4 sm:top-[84px] sm:justify-start sm:px-6 md:left-[420px]"
    >
      <div className="pointer-events-auto max-w-md rounded-2xl border border-border/60 bg-card/92 p-4 shadow-lg backdrop-blur-xl sm:p-5">
        <h1 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{c.h1}</h1>
        <p className="mt-1.5 text-xl font-black leading-tight text-foreground sm:text-2xl">{c.promise}</p>
        <p className="mt-1.5 text-sm text-muted-foreground">{c.detail(price)}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href={waHref(c.waMessage)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            {c.wa}
          </a>
          <a
            href={TEL_HREF}
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/80 px-3 py-2.5 text-sm font-semibold hover:border-primary/40"
          >
            <Phone className="h-4 w-4 text-primary" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
