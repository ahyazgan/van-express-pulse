import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const hollandaKargo: SeoPageData = {
  slug: "hollanda-kargo",
  title: "Hollanda'ya Panelvan Kargo ve Eşya Taşıma | Kapıdan Kapıya | RouteEU",
  description:
    "Türkiye'den Hollanda'ya kapıdan kapıya panelvan kargo ve eşya gönderme. Amsterdam, Rotterdam, Eindhoven'a 32-48 saatte sigortalı taşıma. Anında teklif alın.",
  h1: "Türkiye'den Hollanda'ya Kapıdan Kapıya Ekspres Kargo",
  intro: [
    "Türkiye'den Hollanda'ya kargo veya eşya göndermek istediğinizde klasik yöntem, yükünüzün başka gönderilerle birleştirilip TIR'la haftalar içinde taşınmasıdır. RouteEU Express bunun yerine yükünüze ayrılmış bir panelvanla çalışır: eşyanız Türkiye'deki adresinizden alınır, araç değiştirmeden ve depo beklemeden Amsterdam, Rotterdam, Eindhoven ya da Hollanda'nın hangi şehrine gidecekse doğrudan o kapıya teslim edilir. İstanbul'dan Amsterdam'a tipik transit süre 32-48 saattir; yani bugün yüklenen eşyanız çoğu zaman iki gün içinde Hollanda'daki adresinde olur.",
    "Panelvan araçlarımız hafta sonu TIR seyir yasağına tabi olmadığı için cuma günü çıkan yük pazartesiyi beklemeden yoluna devam eder; çift şoför uygulamasıyla araç mola vermeden ilerler. Tüm gönderiler sigortalı taşınır, 7/24 canlı GPS takibiyle yükünüzün hangi ülkede, hangi otoyolda olduğunu anlık olarak görürsünüz. Fiyat öğrenmek için telefon trafiğine gerek yok: uygulamadan kalkış ve varış adresinizi seçip anında tahmini teklif alabilirsiniz.",
  ],
  transitTable: {
    caption: "Türkiye - Hollanda Transit Süreleri",
    rows: [
      { destination: "İstanbul → Amsterdam", time: "32-48 saat" },
      { destination: "İstanbul → Rotterdam", time: "32-48 saat" },
      { destination: "İstanbul → Eindhoven", time: "30-44 saat" },
      { destination: "İstanbul → Utrecht", time: "32-46 saat" },
      { destination: "İstanbul → Lahey (Den Haag)", time: "32-48 saat" },
      { destination: "İstanbul → Groningen", time: "36-52 saat" },
    ],
  },
  priceTable: {
    caption: "Hollanda'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Amsterdam", price: priceRange("Amsterdam") },
      { route: "İstanbul → Rotterdam", price: priceRange("Rotterdam") },
      { route: "İstanbul → Eindhoven", price: priceRange("Eindhoven") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Koli ve parsiyel gönderiler hacme göre fiyatlandırılır; kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Hollanda'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için teslimat ağımız belirli şehirlerle sınırlı değildir. Amsterdam, Rotterdam, Lahey (Den Haag), Utrecht, Eindhoven, Groningen, Tilburg, Breda, Nijmegen, Arnhem, Almere, Haarlem, Enschede ve Maastricht başta olmak üzere Hollanda'nın tüm şehir ve kasabalarına teslimat yapıyoruz. Adres ister Amsterdam'ın merkezinde ister Zaandam'da bir sanayi bölgesinde olsun, yükünüz aynı araçla o kapıya kadar gider.",
        "Hollanda, Avrupa'daki en büyük Türk topluluklarından birine ev sahipliği yapıyor; Rotterdam, Amsterdam, Lahey ve Utrecht'te yaşayan Türkler için Türkiye'den düzenli eşya, gıda dışı koli ve ticari yük taşıması yapıyoruz. Aynı şekilde Hollanda'daki firmalara acil yedek parça, numune ve fuar malzemesi teslimatlarında da panelvan ekspres en çok tercih edilen çözümdür.",
      ],
    },
    {
      heading: "Hollanda Hattında Panelvan Ekspresin Avantajları",
      paragraphs: [
        "Türkiye-Hollanda güzergahı yaklaşık 2.800 kilometrelik, birden fazla sınır geçişi içeren bir rotadır. Bu rotada panelvanı TIR'la parsiyel taşımadan ayıran dört temel unsur vardır:",
      ],
      list: [
        "Hafta sonu yasağı yok: TIR'ların hafta sonu seyir yasağına panelvanlar tabi değildir; yükünüz cumartesi ve pazar da yol alır.",
        "Çift şoför: İki şoför dönüşümlü kullandığı için araç dinlenme molası vermeden ilerler, İstanbul-Amsterdam 32-48 saatte tamamlanır.",
        "Aktarmasız taşıma: Yükünüz depoya girmez, başka araçlara aktarılmaz; kırılma, kaybolma ve karışma riski en aza iner.",
        "Sınırda beklemez: Panelvan sınıfı araçlar gümrük kapılarında TIR kuyruğuna girmeden işlem görür, transit süre öngörülebilir kalır.",
      ],
    },
    {
      heading: "Hollanda'ya Neler Gönderebilirsiniz?",
      paragraphs: [
        "Ticari mal, numune, fuar ve stand malzemesi, yedek parça, makine ekipmanı, e-ticaret ürünleri, ev eşyası ve zati eşya taşıyoruz. Rotterdam Limanı çevresindeki lojistik firmalarına, Eindhoven'daki teknoloji üreticilerine ve Hollanda genelindeki toptancılara teslim süresi kritik yükler için panelvan ekspres çoğu zaman tek gerçekçi seçenektir.",
        "Gümrük tarafında genel kural şudur: ticari gönderilerde fatura ve ATR belgesiyle süreç sorunsuz ilerler; kişisel eşya gönderimlerinde ise eşyanın niteliğine göre farklı beyan usulleri uygulanabilir. Ekibimiz evrak hazırlığında size yol gösterir; ancak vergi muafiyetleri ve kişisel eşya rejimi gibi konularda güncel şartları gümrük müşavirinize veya konsolosluğa teyit ettirmenizi öneririz.",
      ],
    },
    {
      heading: "Hollanda'ya Koli Gönderme ve Parsiyel Seçenekler",
      paragraphs: [
        "Komple panelvan dolduracak kadar yükünüz yoksa Hollanda hattında koli ve parsiyel gönderiler de taşıyoruz. Birkaç koliden birkaç palete kadar her hacim için yer ayrılabilir; gönderiniz yine sigortalı taşınır ve aynı canlı takip sisteminden izlenir. Koli ve parsiyel taşımada sabit bir liste fiyatı yoktur: fiyat, gönderinizin hacmine ve güzergaha göre belirlenir. Uygulamadan ölçü ve adres bilgilerinizi girerek anında teklif alabilirsiniz.",
        "Hollanda güzergahı, Almanya ve Belçika hatlarımızla aynı koridor üzerinde ilerlediği için parsiyel gönderilerde araç doluluk oranı yüksektir; bu da koli başına maliyeti düşürür ve kalkış sıklığını artırır. Acele etmeyen gönderiler için parsiyel, teslim tarihi kritik yükler için komple panelvan en verimli iki seçenektir.",
      ],
    },
    {
      heading: "Hollanda'dan Türkiye'ye Dönüş Yükleri",
      paragraphs: [
        "Taşımalarımız çift yönlüdür: Hollanda'dan Türkiye'ye eşya, koli veya ticari yük göndermek istiyorsanız aynı hız, sigorta ve takip imkânıyla dönüş taşıması da yapıyoruz. Amsterdam veya Rotterdam'dan aldığımız yük, Türkiye'deki teslimat adresine yine aktarmasız gider. Dönüş yönünde de transit süreler aynıdır: Amsterdam'dan İstanbul'a tipik teslimat 32-48 saat içinde tamamlanır.",
        "Hollanda'da yaşayıp Türkiye'ye kalıcı dönüş yapmayı planlıyorsanız, ev eşyalarınızın komple taşınması için kesin dönüş nakliyat hizmetimize göz atabilirsiniz; evinizdeki eşyalar Hollanda'daki adresinizden paketlenmiş halde alınır ve Türkiye'deki yeni adresinize tek araçla teslim edilir.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Hollanda'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Amsterdam veya Rotterdam'a teslimat tipik olarak 32-48 saat sürer; Eindhoven gibi güney şehirlerine 30-44 saatte ulaşılır. Parsiyel TIR taşımacılığında aynı güzergah 7-15 gün alabilir.",
    },
    {
      question: "Hollanda'ya kargo göndermek ne kadar tutar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre değişir: örneğin İstanbul-Amsterdam hattında " +
        priceRange("Amsterdam") +
        " aralığındadır. Koli ve parsiyel gönderiler hacme göre fiyatlandırılır; uygulamadan adres ve ölçü bilgilerinizi girerek saniyeler içinde tahmini teklif alabilirsiniz.",
    },
    {
      question: "Hollanda'ya tek koli gönderebilir miyim?",
      answer:
        "Evet. Komple araç kiralamanıza gerek yok; koli ve parsiyel gönderileriniz için araçta yer ayırıyoruz. Fiyat, kolinizin hacmine göre belirlenir ve gönderiniz yine sigortalı taşınıp canlı takip edilir.",
    },
    {
      question: "Hollanda'ya ev eşyası gönderirken gümrükte ne gerekir?",
      answer:
        "Kişisel eşya gönderimlerinde eşya listesi ve kimlik bilgileri temel evraklardır; eşyanın niteliğine ve ikamet durumunuza göre ek beyan gerekebilir. Ekibimiz evrak hazırlığında yol gösterir; muafiyet şartları gibi güncel detayları gümrük müşavirinize veya konsolosluğa teyit ettirmenizi öneririz.",
    },
    {
      question: "Yükümü yolda takip edebilir miyim?",
      answer:
        "Evet. Her gönderiye canlı GPS takibi tanımlanır; gönderi takip sayfasından aracınızın anlık konumunu 7/24 harita üzerinde görebilirsiniz. Amsterdam'a giden yükünüzün hangi ülkede olduğunu her an bilirsiniz.",
    },
    {
      question: "Hollanda'dan Türkiye'ye eşya gönderiyor musunuz?",
      answer:
        "Evet, hattımız çift yönlü çalışır. Hollanda'daki adresinizden alınan eşya veya ticari yük, aynı araçla Türkiye'deki teslimat adresine götürülür. Kesin dönüş yapacaklar için komple ev eşyası taşıma hizmetimiz de mevcuttur.",
    },
  ],
  related: [
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "belcika-kargo", label: "Belçika'ya Panelvan Kargo" },
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan & Panelvan Ekspres Taşımacılık" },
    { slug: "kesin-donus-nakliyat", label: "Kesin Dönüş Nakliyat" },
  ],
};

export default hollandaKargo;
