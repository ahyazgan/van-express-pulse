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
}

/**
 * Formats the panelvan price range for a city from the single source of truth
 * in shippingRates.ts. Content pages must NOT hardcode prices — the market
 * moves weekly and rates are maintained in one place.
 */
export const priceRange = (city: string): string => {
  const r = SHIPPING_RATES[city];
  return r ? `${r[0].toLocaleString("tr-TR")} € – ${r[1].toLocaleString("tr-TR")} €` : "Teklif alın";
};
