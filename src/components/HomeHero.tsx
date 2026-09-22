import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
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
 *
 * Desktop only: on phones the card covered half the map and repeated what the
 * sheet says, so BottomSheet renders the same copy as its header instead.
 *
 * The middle of the card rotates through a few facts (all already stated on
 * the site — nothing here is a claim the landing pages do not make). The
 * headline and the two contact buttons never move. A close button hides the
 * card for the rest of the visit.
 */
export const HOME_COPY = {
  tr: {
    h1: "Türkiye'den Avrupa'ya Kapıdan Kapıya Ekspres Panelvan Taşımacılık",
    promise: "İstanbul'dan Berlin'e 24-36 saatte, kapıdan kapıya.",
    detail: (price: string) => `Komple panelvan ${price}. Yazın, aynı gün yazılı teklif alın.`,
    wa: "WhatsApp'tan yazın",
    waMessage: "Merhaba, Avrupa'ya panelvan taşıma için fiyat almak istiyorum.",
    close: "Kapat",
    slides: [
      { title: "Nasıl çalışır?", body: "Adres ve eşya bilgisini yazın, aynı gün yazılı teklif alın. Onaylayın; araç planlanır, sevkiyatın aşamasını biz bildiririz." },
      { title: "10 ülke, 44 şehir", body: "Aktarmasız, çift şoförle, hafta sonu TIR yasağından muaf. Yaklaşık 1.300 kg, 5 palet, 13,5 m³ kapasite." },
    ],
  },
  en: {
    h1: "Door-to-Door Express Van Transport from Türkiye to Europe",
    promise: "Istanbul to Berlin in 24-36 hours, door to door.",
    detail: (price: string) => `Full van ${price}. Message us, get a written quote the same day.`,
    wa: "Message us on WhatsApp",
    waMessage: "Hello, I would like a quote for van transport to Europe.",
    close: "Close",
    slides: [
      { title: "How it works", body: "Send the addresses and what you are shipping, get a written quote the same day. Confirm; the van is scheduled and we report each stage." },
      { title: "10 countries, 44 cities", body: "No transshipment, two drivers, exempt from the weekend truck ban. About 1,300 kg, 5 pallets, 13.5 m³ of capacity." },
    ],
  },
} as const;

const ROTATE_MS = 6000;
const DISMISS_KEY = "home_hero_dismissed";

const HomeHero = () => {
  const { language } = useLanguage();
  const c = language === "en" ? HOME_COPY.en : HOME_COPY.tr;
  const price = language === "en" ? priceRangeEn("Berlin") : priceRange("Berlin");

  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Slide 0 is the promise; the rest come from HOME_COPY.slides.
  const count = 1 + c.slides.length;

  useEffect(() => {
    if (dismissed || paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [dismissed, paused, count]);

  if (dismissed) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage unavailable: hide for this render only */
    }
    setDismissed(true);
  };

  const slide = index === 0 ? null : c.slides[index - 1];

  return (
    <section
      aria-label={c.h1}
      className="pointer-events-none absolute left-0 right-0 top-[76px] z-20 flex justify-center px-4 sm:top-[84px] sm:justify-start sm:px-6 md:left-[420px]"
    >
      <div
        className="pointer-events-auto relative w-full max-w-md rounded-2xl border border-border/60 bg-card/92 p-3 pr-10 shadow-lg backdrop-blur-xl sm:w-[26rem] sm:p-5 sm:pr-11"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label={c.close}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <X className="h-4 w-4" />
        </button>

        <h1 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]">{c.h1}</h1>

        {/* Fixed height so the buttons below do not jump between slides. */}
        <div className="mt-1 min-h-[5.5rem] sm:mt-1.5" aria-live="polite">
          {slide === null ? (
            <>
              <p className="text-lg font-black leading-tight text-foreground sm:text-2xl">{c.promise}</p>
              <p className="mt-1 hidden text-sm text-muted-foreground sm:mt-1.5 sm:block">{c.detail(price)}</p>
            </>
          ) : (
            <>
              <p className="text-lg font-black leading-tight text-foreground sm:text-2xl">{slide.title}</p>
              <p className="mt-1 text-sm text-muted-foreground sm:mt-1.5">{slide.body}</p>
            </>
          )}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-2 sm:mt-3">
          <a
            href={waHref(c.waMessage)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-3.5 py-2 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90 sm:px-4 sm:py-2.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {c.wa}
          </a>
          <a
            href={TEL_HREF}
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background/80 px-3 py-2 text-sm font-semibold hover:border-primary/40 sm:py-2.5"
          >
            <Phone className="h-4 w-4 text-primary" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-3 flex gap-1.5" role="tablist" aria-label="Slaytlar">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1} / ${count}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
