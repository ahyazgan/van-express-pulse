import type { PageLang, SeoPageData } from "./seoData";

/**
 * The three numbers a reader (or an answer engine) wants before anything else,
 * lifted out of the tables the page already publishes. Nothing here is a new
 * claim: the fastest route is the transit row with the lowest lower bound, the
 * best price is the price row with the lowest first figure, and capacity is the
 * one figure every service page states. Change a table and the box follows.
 */
export interface KeyFacts {
  fastest?: { route: string; time: string };
  cheapest?: { route: string; price: string };
  capacity: string;
}

export interface KeyFactsStrings {
  heading: string;
  fastest: string;
  cheapest: string;
  capacity: string;
  capacityValue: string;
}

export const KEY_FACTS: Record<PageLang, KeyFactsStrings> = {
  tr: { heading: "Bir bakışta", fastest: "En hızlı rota", cheapest: "En uygun rota", capacity: "Araç kapasitesi", capacityValue: "≈1.300 kg · 5 palet · 13,5 m³" },
  de: { heading: "Auf einen Blick", fastest: "Schnellste Strecke", cheapest: "Günstigste Strecke", capacity: "Ladekapazität", capacityValue: "≈1.300 kg · 5 Paletten · 13,5 m³" },
  nl: { heading: "In één oogopslag", fastest: "Snelste route", cheapest: "Voordeligste route", capacity: "Laadcapaciteit", capacityValue: "≈1.300 kg · 5 pallets · 13,5 m³" },
  en: { heading: "At a glance", fastest: "Fastest route", cheapest: "Best-value route", capacity: "Van capacity", capacityValue: "≈1,300 kg · 5 pallets · 13.5 m³" },
  fr: { heading: "En un coup d'œil", fastest: "Trajet le plus rapide", cheapest: "Trajet le plus avantageux", capacity: "Capacité du véhicule", capacityValue: "≈1 300 kg · 5 palettes · 13,5 m³" },
};

/** First integer in a string, ignoring thousands separators: "1.750 € – 2.300 €" -> 1750. */
const firstNumber = (text: string): number | null => {
  const m = text.replace(/[.,\s ](?=\d{3}\b)/g, "").match(/\d+/);
  return m ? Number(m[0]) : null;
};

export const keyFacts = (page: SeoPageData): KeyFacts => {
  const lang: PageLang = page.lang ?? "tr";
  const facts: KeyFacts = { capacity: KEY_FACTS[lang].capacityValue };

  const transit = page.transitTable?.rows
    .map((r) => ({ route: r.destination, time: r.time, n: firstNumber(r.time) }))
    .filter((r): r is typeof r & { n: number } => r.n !== null)
    .sort((a, b) => a.n - b.n)[0];
  if (transit) facts.fastest = { route: transit.route, time: transit.time };

  const price = page.priceTable?.rows
    .map((r) => ({ route: r.route, price: r.price, n: firstNumber(r.price) }))
    .filter((r): r is typeof r & { n: number } => r.n !== null)
    .sort((a, b) => a.n - b.n)[0];
  if (price) facts.cheapest = { route: price.route, price: price.price };

  return facts;
};

/** Pages without a single table get no box; three lines of capacity alone would be padding. */
export const hasKeyFacts = (page: SeoPageData): boolean =>
  Boolean(page.transitTable?.rows.length || page.priceTable?.rows.length);
