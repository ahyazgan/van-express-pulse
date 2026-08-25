import type { SeoPageData } from "./seoData";
import almanyaKargo from "./almanya-kargo";
import hollandaKargo from "./hollanda-kargo";
import belcikaKargo from "./belcika-kargo";
import fransaKargo from "./fransa-kargo";
import avusturyaKargo from "./avusturya-kargo";
import isvicreKargo from "./isvicre-kargo";
import italyaKargo from "./italya-kargo";
import danimarkaKargo from "./danimarka-kargo";
import isvecKargo from "./isvec-kargo";
import polonyaKargo from "./polonya-kargo";
import almanyadanTurkiyeyeNakliyat from "./almanyadan-turkiyeye-nakliyat";
import hollandadanTurkiyeyeNakliyat from "./hollandadan-turkiyeye-nakliyat";
import belcikadanTurkiyeyeNakliyat from "./belcikadan-turkiyeye-nakliyat";
import minivanEkspres from "./minivan-ekspres-tasimacilik";
import parsiyelTasimacilik from "./parsiyel-tasimacilik";
import evEsyasiTasima from "./ev-esyasi-tasima";
import kesinDonusNakliyat from "./kesin-donus-nakliyat";
import fuarTasimaciligi from "./fuar-tasimaciligi";
import acilYedekParcaSevkiyati from "./acil-yedek-parca-sevkiyati";
import amazonFbaLojistik from "./amazon-fba-lojistik";
import bavulKargo from "./bavul-kargo";
import ogrenciEsyasiTasima from "./ogrenci-esyasi-tasima";

const pages: SeoPageData[] = [
  // Ülke sayfaları (TR → EU)
  almanyaKargo,
  hollandaKargo,
  belcikaKargo,
  fransaKargo,
  avusturyaKargo,
  isvicreKargo,
  italyaKargo,
  danimarkaKargo,
  isvecKargo,
  polonyaKargo,
  // Ters yön (EU → TR)
  almanyadanTurkiyeyeNakliyat,
  hollandadanTurkiyeyeNakliyat,
  belcikadanTurkiyeyeNakliyat,
  // Hizmet sayfaları
  minivanEkspres,
  parsiyelTasimacilik,
  evEsyasiTasima,
  kesinDonusNakliyat,
  fuarTasimaciligi,
  acilYedekParcaSevkiyati,
  amazonFbaLojistik,
  bavulKargo,
  ogrenciEsyasiTasima,
];

export const SEO_PAGES: Record<string, SeoPageData> = Object.fromEntries(
  pages.map((p) => [p.slug, p])
);

/** Route paths for App.tsx; keep in sync with public/sitemap.xml. */
export const SEO_ROUTES = pages.map((p) => `/${p.slug}`);
