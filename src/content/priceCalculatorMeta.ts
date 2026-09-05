import {
  VAN_CAPACITY_KG,
  VAN_CAPACITY_M3,
  VAN_CAPACITY_PALLETS,
} from "@/constants/shippingRates";
import type { FaqItem } from "./seo/seoData";

/**
 * Hesaplayıcı sayfasının arama motorlarına dönük metni. Sayfa bileşeninden
 * ayrı durmasının sebebi, scripts/prerender.ts'in bu içeriği React'e hiç
 * dokunmadan statik HTML'e basabilmesi.
 */
export const CALC_TITLE = "Uluslararası Nakliyat Fiyat Hesaplama | m³ ve Palet";

export const CALC_DESCRIPTION =
  "Avrupa'ya nakliyat fiyatını hesaplayın: varış şehrini ve yük hacmini girin, komple panelvan veya parsiyel için tahmini fiyat aralığını anında görün.";

export const CALC_H1 = "Uluslararası Nakliyat Fiyat Hesaplama";

export const CALC_INTRO =
  "Türkiye'den Avrupa'ya göndereceğiniz yükün tahmini maliyetini saniyeler içinde görün. Varış şehrini seçin, yükünüzün hacmini metreküp veya palet olarak girin; hesaplayıcı komple panelvan ve parsiyel taşıma için güncel fiyat aralığını gösterir. Ölçüleri bilmiyorsanız hacim hesaplayıcı en, boy ve yükseklikten m³ değerini sizin için bulur.";

export const CALC_FAQ: FaqItem[] = [
  {
    question: "Uluslararası nakliyat fiyatı nasıl hesaplanır?",
    answer:
      "Fiyatın iki belirleyicisi vardır: güzergah ve yükün araçta kapladığı yer. Komple panelvan taşımada aracın tamamı size ayrılır ve fiyat güzergaha göre sabittir. Parsiyel taşımada ise yükünüzün hacmi (m³) veya palet sayısı araç kapasitesine oranlanır. Birim maliyet küçük hacimlerde daha yüksektir; çünkü adresten alım, gümrük işlemi ve adrese teslim maliyetleri hacimden bağımsızdır.",
  },
  {
    question: "Eşyamın kaç m³ olduğunu nasıl bulurum?",
    answer:
      "Her parçanın en, boy ve yüksekliğini santimetre cinsinden çarpıp 1.000.000'a bölün; sonuç o parçanın m³ değeridir. Örneğin 60×40×40 cm bir koli 0,096 m³'tür. Tüm parçaları toplayın. Kaba referans olarak standart bir taşıma kolisi yaklaşık 0,1 m³, bir buzdolabı 1 m³, bir Euro palet yaklaşık 2,7 m³ yer kaplar. Sayfadaki hesaplayıcıda ölçüleri girerek bu işlemi otomatik yaptırabilirsiniz.",
  },
  {
    question: "Panelvana ne kadar yük sığar?",
    answer: `Komple panelvan yaklaşık ${VAN_CAPACITY_KG.toLocaleString("tr-TR")} kg yük, ${VAN_CAPACITY_PALLETS} Euro palet ve ${VAN_CAPACITY_M3.toLocaleString("tr-TR")} m³ hacim alır. Bu kapasite 1+1 bir evin eşyasına, komple bir fuar standına veya paletli orta ölçekli bir ticari partiye karşılık gelir.`,
  },
  {
    question: "Hesaplanan fiyat kesin mi?",
    answer:
      "Hayır, buradaki rakamlar tahmini aralıklardır. Kesin fiyat; yükün gerçek hacmi ve ağırlığı, alım ve teslim adreslerinin merkeze uzaklığı, sezon, yakıt fiyatları ve gümrük kapsamına göre belirlenir. Bağlayıcı teklif için ana sayfadaki teklif formunu kullanın; ekibimiz aynı gün dönüş yapar.",
  },
  {
    question: "Fiyata gümrük ve sigorta dahil mi?",
    answer:
      "Tahmini aralıklar kapıdan kapıya taşımayı ve CMR kapsamındaki taşıyıcı sorumluluğunu kapsar; beyan değeri üzerinden ek yük sigortası talep halinde ayrıca düzenlenir. Gümrük vergisi, ithalat KDV'si ve gümrük müşavirliği ücretleri gönderinin niteliğine (ticari mal, zati eşya, numune) göre değiştiği için ayrı değerlendirilir; teklif aşamasında hangi kalemlerin dahil olduğunu yazılı paylaşıyoruz.",
  },
  {
    question: "Parsiyel mi komple araç mı daha ekonomik?",
    answer: `Yükünüz araç kapasitesinin yaklaşık yarısını (${(VAN_CAPACITY_M3 / 2).toLocaleString("tr-TR")} m³) aşıyorsa komple araç genellikle daha mantıklıdır: metreküp başına maliyet düşer ve aracı paylaşmadığınız için teslim tarihiniz tamamen size bağlı olur. Daha küçük yüklerde parsiyel belirgin biçimde ekonomiktir.`,
  },
];
