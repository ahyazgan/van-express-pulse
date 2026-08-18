import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const minivanEkspresTasimacilik: SeoPageData = {
  slug: "minivan-ekspres-tasimacilik",
  title: "Minivan & Panelvan Ekspres Taşımacılık | Avrupa'ya 24-72 Saat | RouteEU",
  description:
    "Avrupa'ya ekspres minivan ve panelvan taşımacılık: ~1.300 kg / 5 palet kapasite, sigortalı, aktarmasız kapıdan kapıya teslimat 24-72 saatte. Anında fiyat alın.",
  h1: "Avrupa'ya Ekspres Minivan / Panelvan Taşımacılık",
  intro: [
    "Üretim hattınız bir yedek parça bekliyorsa, fuar standınızın açılışa yetişmesi gerekiyorsa ya da müşteriniz teslim tarihini öne çektiyse, klasik parsiyel TIR taşımacılığının 7-15 günlük süreleri bir seçenek olmaktan çıkar. Minivan ve panelvan ekspres taşımacılık tam bu noktada devreye girer: yükünüz için tahsis edilmiş bir araç, adresinizden yükleme yapar ve Avrupa'daki teslimat noktasına aktarmasız, depo beklemeden, 24-72 saat içinde ulaşır.",
    "RouteEU Express, Türkiye'den Almanya, Avusturya, Hollanda, Belçika, Fransa, İtalya, Polonya ve Çekya başta olmak üzere tüm Avrupa'ya ekspres panelvan taşımacılığı yapar. Araçlarımız çift şoförle kesintisiz ilerler, tüm gönderiler sigortalı taşınır ve 7/24 canlı GPS takibiyle yükünüzün hangi ülkede, hangi otoyolda olduğunu anlık görürsünüz. Fiyat için telefon trafiğine gerek yok: uygulamadan kalkış ve varış noktasını seçin, saniyeler içinde tahmini teklifinizi alın.",
  ],
  transitTable: {
    caption: "İstanbul'dan Avrupa'ya Ekspres Minivan Transit Süreleri",
    rows: [
      { destination: "İstanbul → Berlin (Almanya)", time: "24-36 saat" },
      { destination: "İstanbul → Viyana (Avusturya)", time: "20-30 saat" },
      { destination: "İstanbul → Prag (Çekya)", time: "24-36 saat" },
      { destination: "İstanbul → Varşova (Polonya)", time: "28-42 saat" },
      { destination: "İstanbul → Milano (İtalya)", time: "28-44 saat" },
      { destination: "İstanbul → Paris (Fransa)", time: "28-44 saat" },
      { destination: "İstanbul → Amsterdam (Hollanda)", time: "32-48 saat" },
      { destination: "İstanbul → Brüksel (Belçika)", time: "32-48 saat" },
    ],
  },
  priceTable: {
    caption: "Avrupa'ya Komple Panelvan Taşıma Fiyatları",
    rows: [
      { route: "İstanbul → Berlin", price: priceRange("Berlin") },
      { route: "İstanbul → Viyana", price: priceRange("Viyana") },
      { route: "İstanbul → Prag", price: priceRange("Prag") },
      { route: "İstanbul → Varşova", price: priceRange("Varşova") },
      { route: "İstanbul → Milano", price: priceRange("Milano") },
      { route: "İstanbul → Paris", price: priceRange("Paris") },
      { route: "İstanbul → Amsterdam", price: priceRange("Amsterdam") },
      { route: "İstanbul → Brüksel", price: priceRange("Brüksel") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet / 17 m³ sınıfı) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Koli ve parsiyel gönderiler hacme göre fiyatlandırılır — kesin fiyat için uygulamadan anında teklif alın.",
  },
  sections: [
    {
      heading: "Araç Kapasitesi: Ekspres Panelvana Ne Sığar?",
      paragraphs: [
        "Ekspres taşımada kullandığımız panelvan sınıfı araçlar, yaklaşık 1.300 kg yük, 5 Euro palet ve 17 m³ hacim kapasitesindedir. Bu kapasite, kritik bir üretim partisini, komple bir fuar standını, sezonluk bir tekstil koleksiyonunu veya hacimli bir yedek parça sevkiyatını tek araçta taşımaya yeter. Aracın tamamı sizin yükünüze ayrılır; başka gönderici beklenmez, ara depoya girilmez, rota yalnızca sizin teslimat adresinize göre çizilir.",
        "Yükünüz komple araç doldurmuyorsa da çözümsüz değilsiniz: koli ve palet bazlı gönderiler hacme göre fiyatlandırılır. Uygulamadan yük bilgilerinizi girerek anında teklif alabilir, düzenli parsiyel gönderileriniz için parsiyel taşımacılık hizmetimizi inceleyebilirsiniz.",
      ],
    },
    {
      heading: "Neden TIR Değil, Ekspres Minivan?",
      paragraphs: [
        "Avrupa hattında panelvanı TIR'a karşı avantajlı kılan şey yalnızca aracın küçük olması değil, tabi olduğu kuralların farklı olmasıdır. Zaman kritik yüklerde farkı yaratan dört unsur şunlardır:",
      ],
      list: [
        "Hafta sonu seyir yasağı muafiyeti: Avrupa'da ağır vasıtaların hafta sonu ve tatil günlerindeki seyir kısıtlamaları panelvan sınıfını kapsamaz. Cuma akşamı çıkan yükünüz pazartesi sabahını beklemez, hafta sonu boyunca yol alır.",
        "TIR kuyruğu yok: Sınır kapılarında ağır vasıta kuyruğuna girmeden işlem görülür; gümrük geçişlerinde saatler, bazen günler kazanılır.",
        "Çift şoför, kesintisiz seyir: İki şoför dönüşümlü kullandığı için araç dinlenme molasında saatlerce park halinde beklemez; transit süre belirgin şekilde kısalır.",
        "Aktarmasız, kapıdan kapıya: Yükünüz kalkış adresinde araca biner, varış adresinde iner. Ara depo, elleçleme ve araç değişimi olmadığı için hasar ve kayıp riski en aza iner.",
      ],
    },
    {
      heading: "Hangi Sektörler Ekspres Minivan Taşımacılığı Kullanıyor?",
      paragraphs: [
        "Ekspres panelvan, teslim tarihi para eden her sektörün aracıdır. En çok talep gören senaryolar şunlardır:",
      ],
      list: [
        "Otomotiv ve yedek parça: Avrupa'daki bir fabrikanın hattını durduran eksik parça, üretim kaybının saatlik maliyeti yanında taşıma ücretini önemsiz kılar. Hat besleme sevkiyatlarında en hızlı karayolu çözümü ekspres panelvandır.",
        "Fuar ve etkinlik lojistiği: Stand malzemesi, numuneler ve tanıtım ürünleri kurulum gününe yetişmek zorundadır. Aktarmasız taşıma, fuar yükünde hasar riskini de ortadan kaldırır.",
        "Tekstil ve hazır giyim: Koleksiyon teslimleri, sezon açılışları ve mağaza ikmalleri gibi tarihe bağlı sevkiyatlarda 24-72 saatlik transit, deniz ve parsiyel yola kıyasla sezonu kurtarır.",
        "Acil üretim ve makine ekipmanı: Arızalanan makinenin yedeği, kalıp, prototip veya test partisi gibi 'bugün çıkması gereken' her yük için araç aynı gün organize edilir.",
      ],
    },
    {
      heading: "Gümrük ve Evrak Süreci Nasıl İşler?",
      paragraphs: [
        "Türkiye'den Avrupa Birliği ülkelerine ticari gönderilerde temel olarak fatura ve dolaşım belgesi (ör. ATR) ile ihracat beyanı süreci işler; ekibimiz hangi evrakların gerekeceği konusunda size yol gösterir ve süreci taşımayla eş zamanlı yürütür. Gümrük mevzuatı ürün grubuna ve ülkeye göre farklılık gösterebildiğinden, gönderinize özel güncel şartları gümrük müşavirinize veya ilgili ülkenin konsolosluğuna teyit ettirmenizi öneririz.",
        "Taşımalarımız çift yönlüdür: Avrupa'dan Türkiye'ye dönüş yükleriniz için de aynı hız, sigorta ve canlı takip imkânıyla hizmet veriyoruz.",
      ],
    },
  ],
  faq: [
    {
      question: "Minivan ile Avrupa'ya nakliye kaç saatte gider?",
      answer:
        "Güzergâha göre 24-72 saat aralığındadır. İstanbul'dan Viyana'ya 20-30 saat, Berlin'e 24-36 saat, Paris'e 28-44 saat, Amsterdam ve Brüksel'e 32-48 saat tipik transit süreleridir. Çift şoför ve hafta sonu seyir muafiyeti sayesinde bu süreler TIR taşımacılığının çok altındadır.",
    },
    {
      question: "Yurtdışına minibüsle nakliye yapan firmalar nasıl fiyat verir?",
      answer:
        "Komple araç taşımada fiyat güzergâha göre belirlenir: örneğin İstanbul-Berlin hattında komple panelvan " +
        priceRange("Berlin") +
        ", İstanbul-Viyana hattında " +
        priceRange("Viyana") +
        " aralığındadır. RouteEU uygulamasından kalkış ve varış noktanızı seçerek beklemeden tahmini teklif alabilirsiniz.",
    },
    {
      question: "Panelvana ne kadar yük sığar?",
      answer:
        "Ekspres taşımada kullandığımız panelvan sınıfı yaklaşık 1.300 kg, 5 Euro palet ve 17 m³ kapasitelidir. Bu hacim komple bir fuar standı, palet bazlı ticari yük veya hacimli yedek parça sevkiyatı için yeterlidir.",
    },
    {
      question: "Yüküm komple araç doldurmuyor, yine de gönderebilir miyim?",
      answer:
        "Evet. Koli ve palet bazlı gönderiler hacme göre fiyatlandırılır; uygulamadan yük bilgilerinizi girerek anında teklif alırsınız. Düzenli küçük hacimli sevkiyatlarınız varsa parsiyel taşımacılık hizmetimiz daha ekonomik olabilir.",
    },
    {
      question: "Acil yük taşıma Avrupa'ya hafta sonu da yapılıyor mu?",
      answer:
        "Evet. Panelvan sınıfı araçlar, ağır vasıtaların hafta sonu seyir yasaklarından muaf olduğu için cumartesi ve pazar günleri de yükleme ve seyir devam eder. Acil sevkiyatlarda araç aynı gün organize edilebilir.",
    },
    {
      question: "Gönderim sigortalı mı, yolda takip edebilir miyim?",
      answer:
        "Tüm gönderiler taşıma sigortası kapsamında taşınır; değerli yüklerde kapsam teklif aşamasında netleştirilir. Her araca 7/24 canlı GPS takibi tanımlıdır — yükünüzün anlık konumunu harita üzerinden kendiniz izlersiniz.",
    },
  ],
  related: [
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "hollanda-kargo", label: "Hollanda'ya Panelvan Kargo" },
    { slug: "belcika-kargo", label: "Belçika'ya Panelvan Kargo" },
    { slug: "parsiyel-tasimacilik", label: "Avrupa'ya Parsiyel Taşımacılık" },
  ],
};

export default minivanEkspresTasimacilik;
