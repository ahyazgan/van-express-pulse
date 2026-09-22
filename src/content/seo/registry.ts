import type { SeoPageData } from "./seoData";
// Ülke güzergahları (Türkiye → Avrupa)
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
// Ters yön (Avrupa → Türkiye)
import almanyadanTurkiyeyeNakliyat from "./almanyadan-turkiyeye-nakliyat";
import hollandadanTurkiyeyeNakliyat from "./hollandadan-turkiyeye-nakliyat";
import belcikadanTurkiyeyeNakliyat from "./belcikadan-turkiyeye-nakliyat";
// Hizmetler
import minivanEkspres from "./minivan-ekspres-tasimacilik";
import parsiyelTasimacilik from "./parsiyel-tasimacilik";
import evEsyasiTasima from "./ev-esyasi-tasima";
import kesinDonusNakliyat from "./kesin-donus-nakliyat";
import fuarTasimaciligi from "./fuar-tasimaciligi";
import acilYedekParcaSevkiyati from "./acil-yedek-parca-sevkiyati";
import amazonFbaLojistik from "./amazon-fba-lojistik";
import bavulKargo from "./bavul-kargo";
import ogrenciEsyasiTasima from "./ogrenci-esyasi-tasima";
// Rehberler (bilgi amaçlı)
import almanyaKargoGumrukVergisi from "./almanya-kargo-gumruk-vergisi";
import avrupayaGonderimGumrukBelgeleri from "./avrupaya-gonderim-gumruk-belgeleri";
import zatiEsyaGumrukMuafiyeti from "./zati-esya-gumruk-muafiyeti";
import yolcuBeraberiEsyaMuafiyeti from "./yolcu-beraberi-esya-muafiyeti";
import avrupayaGidaGonderme from "./avrupaya-gida-gonderme";
import guvenilirNakliyeFirmasiSecimi from "./guvenilir-nakliye-firmasi-secimi";
import avrupayaKargoKacGundeGider from "./avrupaya-kargo-kac-gunde-gider";
import etgbMikroIhracatRehberi from "./etgb-mikro-ihracat-rehberi";
import yurtdisinaEvTasimaRehberi from "./yurtdisina-ev-tasima-rehberi";
// Yabancı dil sayfaları
import deUmzugInDieTuerkei from "./de-umzug-in-die-tuerkei";
import deSpeditionTuerkei from "./de-spedition-tuerkei";
import deTuerkeiTransportKosten from "./de-tuerkei-transport-kosten";
import deTransportDeutschlandTuerkei from "./de-transport-deutschland-tuerkei";
import nlVerhuizenNaarTurkije from "./nl-verhuizen-naar-turkije";
import nlTransportNaarTurkije from "./nl-transport-naar-turkije";
import enExpressVanTransportTurkey from "./en-express-van-transport-turkey";
import enMovingToTurkey from "./en-moving-to-turkey";
import frDemenagementTurquie from "./fr-demenagement-turquie";
import frTransportExpressTurquie from "./fr-transport-express-turquie";

/** Ana sayfa link bölümü ve footer bu gruplamayı kullanır. */
export const COUNTRY_PAGES: SeoPageData[] = [
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
];

export const REVERSE_PAGES: SeoPageData[] = [
  almanyadanTurkiyeyeNakliyat,
  hollandadanTurkiyeyeNakliyat,
  belcikadanTurkiyeyeNakliyat,
  kesinDonusNakliyat,
];

export const SERVICE_PAGES: SeoPageData[] = [
  minivanEkspres,
  parsiyelTasimacilik,
  evEsyasiTasima,
  fuarTasimaciligi,
  acilYedekParcaSevkiyati,
  amazonFbaLojistik,
  bavulKargo,
  ogrenciEsyasiTasima,
];

export const GUIDE_PAGES: SeoPageData[] = [
  almanyaKargoGumrukVergisi,
  avrupayaGonderimGumrukBelgeleri,
  zatiEsyaGumrukMuafiyeti,
  yolcuBeraberiEsyaMuafiyeti,
  avrupayaGidaGonderme,
  guvenilirNakliyeFirmasiSecimi,
  avrupayaKargoKacGundeGider,
  etgbMikroIhracatRehberi,
  yurtdisinaEvTasimaRehberi,
];

export const LOCALIZED_PAGES: SeoPageData[] = [
  deUmzugInDieTuerkei,
  deTransportDeutschlandTuerkei,
  deSpeditionTuerkei,
  deTuerkeiTransportKosten,
  nlVerhuizenNaarTurkije,
  nlTransportNaarTurkije,
  enExpressVanTransportTurkey,
  enMovingToTurkey,
  frDemenagementTurquie,
  frTransportExpressTurquie,
];

// kesin-donus-nakliyat hem ters yön hem hizmet listesinde mantıklı; tekilleştiriyoruz.
const pages: SeoPageData[] = Array.from(
  new Map(
    [
      ...COUNTRY_PAGES,
      ...REVERSE_PAGES,
      ...SERVICE_PAGES,
      ...GUIDE_PAGES,
      ...LOCALIZED_PAGES,
    ].map((p) => [p.slug, p])
  ).values()
);

export const SEO_PAGES: Record<string, SeoPageData> = Object.fromEntries(
  pages.map((p) => [p.slug, p])
);

/** Route paths; App.tsx tüketmez (bundle maliyeti) — orası seoSlugs.ts kullanır. */
export const SEO_ROUTES = pages.map((p) => `/${p.slug}`);
