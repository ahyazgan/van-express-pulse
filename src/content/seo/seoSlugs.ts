/**
 * Route paths for the SEO landing pages.
 *
 * App.tsx needs the route list at startup but must NOT import registry.ts — that
 * would pull every content file into the main bundle instead of the lazy SeoPage
 * chunk. This module is the cheap mirror; SeoPage.test.tsx asserts it stays in
 * sync with the registry, so drift fails the build rather than serving a 404.
 *
 * Keep in sync with public/sitemap.xml.
 */
export const SEO_ROUTE_PATHS: string[] = [
  // Ülke güzergahları (Türkiye → Avrupa)
  "/almanya-kargo",
  "/hollanda-kargo",
  "/belcika-kargo",
  "/fransa-kargo",
  "/avusturya-kargo",
  "/isvicre-kargo",
  "/italya-kargo",
  "/danimarka-kargo",
  "/isvec-kargo",
  "/polonya-kargo",
  // Ters yön (Avrupa → Türkiye)
  "/almanyadan-turkiyeye-nakliyat",
  "/hollandadan-turkiyeye-nakliyat",
  "/belcikadan-turkiyeye-nakliyat",
  "/kesin-donus-nakliyat",
  // Hizmetler
  "/minivan-ekspres-tasimacilik",
  "/parsiyel-tasimacilik",
  "/ev-esyasi-tasima",
  "/fuar-tasimaciligi",
  "/acil-yedek-parca-sevkiyati",
  "/amazon-fba-lojistik",
  "/bavul-kargo",
  "/ogrenci-esyasi-tasima",
  // Rehberler
  "/almanya-kargo-gumruk-vergisi",
  "/avrupaya-gonderim-gumruk-belgeleri",
  "/zati-esya-gumruk-muafiyeti",
  "/yolcu-beraberi-esya-muafiyeti",
  "/avrupaya-gida-gonderme",
  "/guvenilir-nakliye-firmasi-secimi",
  "/etgb-mikro-ihracat-rehberi",
  "/yurtdisina-ev-tasima-rehberi",
  // Yabancı dil sayfaları
  "/de/umzug-in-die-tuerkei",
  "/de/spedition-tuerkei",
  "/de/tuerkei-transport-kosten",
  "/nl/verhuizen-naar-turkije",
  "/nl/transport-naar-turkije",
  "/en/express-van-transport-turkey",
  "/en/moving-to-turkey",
  "/fr/demenagement-turquie",
  "/fr/transport-express-turquie",
];
