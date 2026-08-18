import type { SeoPageData } from "./seoData";
import almanyaKargo from "./almanya-kargo";
import hollandaKargo from "./hollanda-kargo";
import belcikaKargo from "./belcika-kargo";
import minivanEkspres from "./minivan-ekspres-tasimacilik";
import parsiyelTasimacilik from "./parsiyel-tasimacilik";
import evEsyasiTasima from "./ev-esyasi-tasima";
import kesinDonusNakliyat from "./kesin-donus-nakliyat";

const pages: SeoPageData[] = [
  almanyaKargo,
  hollandaKargo,
  belcikaKargo,
  minivanEkspres,
  parsiyelTasimacilik,
  evEsyasiTasima,
  kesinDonusNakliyat,
];

export const SEO_PAGES: Record<string, SeoPageData> = Object.fromEntries(
  pages.map((p) => [p.slug, p])
);

/** Route paths for App.tsx; keep in sync with public/sitemap.xml. */
export const SEO_ROUTES = pages.map((p) => `/${p.slug}`);
