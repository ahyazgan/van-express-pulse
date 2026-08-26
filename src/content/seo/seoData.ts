import { SHIPPING_RATES } from "@/constants/shippingRates";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TransitRow {
  destination: string;
  time: string;
}

export interface PriceRow {
  route: string;
  price: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

/** Content languages. Non-Turkish pages carry their prefix inside the slug (e.g. "de/umzug-in-die-tuerkei"). */
export type PageLang = "tr" | "de" | "nl" | "en" | "fr";

export interface SeoPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  /** Opening paragraphs rendered right under the H1. */
  intro: string[];
  transitTable?: { caption: string; rows: TransitRow[] };
  priceTable?: { caption: string; rows: PriceRow[]; disclaimer: string };
  sections: ContentSection[];
  faq: FaqItem[];
  related: { slug: string; label: string }[];
  /** Defaults to "tr". Drives the page chrome language and the html lang attribute. */
  lang?: PageLang;
  /**
   * Pages that are translations of one another share a group id; SeoPage emits
   * reciprocal hreflang alternates for every member. The Turkish member is x-default.
   */
  hreflangGroup?: string;
}

const LOCALES: Record<PageLang, string> = {
  tr: "tr-TR",
  de: "de-DE",
  nl: "nl-NL",
  en: "en-GB",
  fr: "fr-FR",
};

/** Bilinmeyen şehirde fiyat yerine geçen metin; sayfanın dilinde olmalı. */
const ON_REQUEST: Record<PageLang, string> = {
  tr: "Teklif alın",
  de: "auf Anfrage",
  nl: "op aanvraag",
  en: "on request",
  fr: "sur devis",
};

/**
 * Formats the panelvan price range for a city from the single source of truth
 * in shippingRates.ts. Content pages must NOT hardcode prices — the market
 * moves weekly and rates are maintained in one place.
 *
 * The number format follows the page language, not the author's: "1.900" reads
 * as one thousand nine hundred to a German but as 1.9 to an English reader.
 * Each language imports its own alias below rather than passing a flag at all
 * 46 call sites.
 */
const format = (city: string, lang: PageLang): string => {
  const r = SHIPPING_RATES[city];
  if (!r) return ON_REQUEST[lang];
  const n = (v: number) => v.toLocaleString(LOCALES[lang]);
  // Symbol placement is a convention per language, not a style choice:
  // English writes €1,900; Dutch writes € 1.900; German/French/Turkish 1.900 €.
  if (lang === "en") return `€${n(r[0])} – €${n(r[1])}`;
  if (lang === "nl") return `€ ${n(r[0])} – € ${n(r[1])}`;
  return `${n(r[0])} € – ${n(r[1])} €`;
};

export const priceRange = (city: string): string => format(city, "tr");
export const priceRangeDe = (city: string): string => format(city, "de");
export const priceRangeNl = (city: string): string => format(city, "nl");
export const priceRangeEn = (city: string): string => format(city, "en");
export const priceRangeFr = (city: string): string => format(city, "fr");
