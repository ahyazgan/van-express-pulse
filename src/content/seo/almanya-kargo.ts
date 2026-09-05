import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const almanyaKargo: SeoPageData = {
  slug: "almanya-kargo",
  title: "Almanya Kargo Fiyatları {{yil}} | Kapıdan Kapıya 24-48 Saat",
  description:
    "Türkiye'den Almanya'ya kapıdan kapıya panelvan kargo. Berlin, Hamburg, Münih ve Köln'e 24-48 saatte aktarmasız ekspres taşıma. Anında fiyat alın.",
  h1: "Türkiye'den Almanya'ya Kapıdan Kapıya Panelvan Kargo",
  intro: [
    "Türkiye'den Almanya'ya kargo göndermek istediğinizde iki seçeneğiniz vardır: haftalarca süren parsiyel TIR taşımacılığı ya da yükünüz için ayrılmış bir panelvanla 24-48 saat içinde teslimat. RouteEU Express, İstanbul ve tüm Türkiye'den Almanya'nın her şehrine kapıdan kapıya ekspres panelvan taşımacılığı yapar: yükünüz adresinizden alınır, araç değiştirmeden ve depo beklemeden doğrudan Almanya'daki teslimat adresine gider.",
    "Panelvan araçlarımız hafta sonu TIR yasağına tabi olmadığı için cuma günü çıkan yükünüz pazartesiyi beklemez; çift şoför uygulamasıyla araç mola vermeden yola devam eder. Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlı olduğu için mobilya, elektronik veya makine gibi yüklerde talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Takip numaranızla sevkiyatınızın hangi aşamada olduğunu görürsünüz (talep alındı, anlaşma, yolda, teslim edildi); aracın o anki yerini WhatsApp'tan sorabilirsiniz.",
  ],
  transitTable: {
    caption: "Türkiye - Almanya Transit Süreleri",
    rows: [
      { destination: "İstanbul → Berlin", time: "24-36 saat" },
      { destination: "İstanbul → Münih", time: "24-36 saat" },
      { destination: "İstanbul → Stuttgart", time: "28-40 saat" },
      { destination: "İstanbul → Frankfurt", time: "28-40 saat" },
      { destination: "İstanbul → Köln", time: "30-44 saat" },
      { destination: "İstanbul → Hamburg", time: "32-48 saat" },
    ],
  },
  priceTable: {
    caption: "Almanya'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Berlin", price: priceRange("Berlin") },
      { route: "İstanbul → Münih", price: priceRange("Münih") },
      { route: "İstanbul → Stuttgart", price: priceRange("Stuttgart") },
      { route: "İstanbul → Frankfurt", price: priceRange("Frankfurt") },
      { route: "İstanbul → Köln", price: priceRange("Köln") },
      { route: "İstanbul → Hamburg", price: priceRange("Hamburg") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Almanya'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için teslimat ağımız belirli şehirlerle sınırlı değildir. Berlin, Hamburg, Münih, Köln, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Essen, Bremen, Hannover, Nürnberg ve Leipzig başta olmak üzere Almanya'nın tüm şehirlerine ve kasabalarına teslimat yapıyoruz. Yükünüz hangi adresteyse oradan alınır, Almanya'da hangi adrese gidecekse oraya teslim edilir.",
      ],
    },
    {
      heading: "Panelvan Ekspres Taşımanın Avantajları",
      paragraphs: [
        "Panelvan taşımacılığı, TIR ile parsiyel taşımaya göre Almanya güzergahında ciddi zaman kazandırır. Aradaki farkı yaratan dört unsur vardır:",
      ],
      list: [
        "Hafta sonu yasağı yok: TIR'ların hafta sonu seyir yasağına panelvanlar tabi değildir; teslimat 7 gün kesintisiz sürer.",
        "Çift şoför: Araç dinlenme molası vermeden yola devam eder, transit süre kısalır.",
        "Aktarmasız taşıma: Yükünüz depoya girmez, elden ele geçmez; hasar riski en aza iner.",
        "Sınırda beklemez: Panelvan sınıfı araçlar gümrük kapılarında 40 tonluk TIR'lara göre belirgin biçimde daha hızlı işlem görür.",
      ],
    },
    {
      heading: "Panelvan Ekspres mi, Klasik Kargo Firması mı?",
      paragraphs: [
        "\"Yurtdışı kargo hangi firma ile gönderilir?\" sorusunun dürüst cevabı yükünüze bağlıdır. 0-30 kg arası tek bir koliniz varsa ve teslimat süresi birkaç gün esneyebiliyorsa, uluslararası kurye firmaları sizin için mantıklı ve ekonomik bir seçenektir; bu segmentte panelvan kiralamak çoğu zaman gereksizdir. Biz size uymayan bir hizmeti satmayız.",
        "Denge, yük 30 kilogramı aştığında, palet söz konusu olduğunda veya teslim tarihi kritikleştiğinde değişir. Kurye ağlarında büyük ve ağır gönderiler hacimsel ağırlık üzerinden fiyatlanır, birden fazla aktarma merkezinden geçer ve gümrük süreci çoğu zaman alıcının üzerine kalır. Panelvan ekspreste ise fiyat baştan bellidir, yük tek araçta aktarmasız gider, gümrük işlemleri sürece dahildir ve teslimat depoya değil doğrudan Almanya'daki adrese yapılır. Paletli ticari mal, makine parçası, çok parçalı eşya veya acil sevkiyat söz konusuysa panelvan ekspres hem daha hızlı hem de toplamda daha öngörülebilir bir maliyet sunar.",
      ],
    },
    {
      heading: "Neler Gönderebilirsiniz?",
      paragraphs: [
        "Ticari mal, numune, fuar malzemesi, yedek parça, makine ekipmanı, e-ticaret ürünleri, ev eşyası ve zati eşya taşıyoruz. Acil üretim parçası bekleyen fabrikalar, fuara yetişmesi gereken standlar ve teslim tarihi kritik ticari yükler için panelvan ekspres çoğu zaman tek gerçekçi seçenektir.",
        "Gümrük sürecinde evrak hazırlığı konusunda ekibimiz size yol gösterir; ATR belgesi ve fatura ile Almanya'ya ticari gönderiler sorunsuz ilerler.",
      ],
    },
    {
      heading: "Almanya'ya Kargo Fiyatını Ne Belirler?",
      paragraphs: [
        "Almanya'ya kargo fiyatı tek bir tarifeyle açıklanamaz; teklifinizi birkaç somut faktör şekillendirir. Yukarıdaki fiyat tablosunda şehir bazlı güncel aralıkları görebilirsiniz; kendi yükünüz için kesin rakamı ise uygulamadan saniyeler içinde alırsınız. Fiyatı belirleyen başlıca unsurlar şunlardır:",
      ],
      list: [
        "Mesafe ve varış şehri: Münih ile Hamburg arasında yüzlerce kilometre fark vardır; güzergâh uzadıkça yakıt ve süre maliyeti fiyata yansır.",
        "Hacim ve ağırlık: Yükünüzün kapladığı alan ve toplam kilosu, aracın ne kadarını kullandığınızı belirler.",
        "Komple mi, parsiyel mi: Aracın tamamını kiralarsanız sabit araç fiyatı ödersiniz; parsiyel gönderide yalnızca kullandığınız hacim kadar ödeme yaparsınız.",
        "Sezon ve talep: Yaz dönemi, bayram öncesi ve fuar haftalarında talep artar; fiyat aralıkları buna göre hareket eder.",
        "Gümrük kapsamı: Ticari mal, numune ve zati eşya için evrak ve işlem yükü farklıdır; bu da toplam maliyeti etkiler.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Almanya'ya gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte Türkiye'deki adresinize gelir, yükünüz güvenle araca alınır.",
        "Taşıma: Yük gümrük işlemlerinin ardından aktarmasız olarak Almanya'ya hareket eder; takip sayfasında aşaması \"yolda\" görünür, güzergâh harita üzerinde gösterilir.",
        "Teslim: Araç Almanya'daki teslimat adresine ulaşır, yükünüz kapıda alıcıya teslim edilir.",
      ],
    },
    {
      heading: "Almanya'dan Türkiye'ye Dönüş Yükleri",
      paragraphs: [
        "Taşımalarımız çift yönlüdür: Almanya'dan Türkiye'ye kargo, eşya veya ticari yük göndermek istiyorsanız aynı hız ve takip imkânıyla dönüş taşıması da yapıyoruz. Berlin, Hamburg, Münih veya Almanya'nın herhangi bir şehrinden Türkiye'deki adrese kapıdan kapıya teslimat mümkündür. Almanya'da yaşayıp Türkiye'ye kalıcı olarak dönecekseniz kesin dönüş nakliyat hizmetimize de göz atabilirsiniz; ev eşyanızın tamamı tek panelvanla, aktarmasız olarak Türkiye'deki yeni adresinize taşınır. Dönüş yönündeki güzergâhlar, süreler ve sık sorulan sorular için Almanya'dan Türkiye'ye nakliyat sayfamızı inceleyebilirsiniz.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Almanya'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Berlin veya Münih'e teslimat tipik olarak 24-36 saat, Hamburg gibi kuzey şehirlerine 32-48 saat sürer. Parsiyel TIR taşımacılığında bu süre 7-15 güne çıkar.",
    },
    {
      question: "Almanya'ya panelvan kargo fiyatı ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre değişir: örneğin İstanbul-Berlin hattında " +
        priceRange("Berlin") +
        " aralığındadır. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde tahmini teklif alabilirsiniz.",
    },
    {
      question: "Yükümü nasıl takip ederim?",
      answer:
        "Her gönderiye bir takip numarası tanımlanır. Gönderi takip sayfasından sevkiyatınızın hangi aşamada olduğunu görürsünüz: talep alındı, anlaşma, yolda ve teslim edildi. Güzergâh harita üzerinde gösterilir; aracın o anki yerini öğrenmek isterseniz WhatsApp'tan sorabilirsiniz.",
    },
    {
      question: "Gönderim sigortalı mı?",
      answer:
        "Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlıdır. Mobilya, elektronik veya makine gibi yüklerde bu tavan çoğu zaman eşyanın gerçek değerini karşılamaz; bu nedenle talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Değerli yükler için kapsamı teklif aşamasında netleştiriyoruz.",
    },
    {
      question: "Kapıdan kapıya teslimat tam olarak ne demek?",
      answer:
        "Yükünüz Türkiye'deki adresinizden araca alınır ve Almanya'daki teslimat adresine kadar aynı araçla gider. Depoya bırakmanız veya bir şubeden teslim almanız gerekmez.",
    },
    {
      question: "Hafta sonu gönderi çıkışı yapılıyor mu?",
      answer:
        "Evet. Panelvan araçlar hafta sonu TIR seyir yasağından muaf olduğu için cumartesi ve pazar günleri de yükleme ve seyir devam eder.",
    },
    {
      question: "Almanya'ya en ucuz kargo nasıl gönderilir?",
      answer:
        "Aracın tamamına ihtiyacınız yoksa en ekonomik yol parsiyel taşımadır: aynı yöne giden yüklerle aracı paylaşır, yalnızca kullandığınız hacim ve ağırlık kadar ödersiniz. Aktarmasız taşıma ve kapıdan kapıya teslim avantajları parsiyelde de geçerlidir. Detaylar için parsiyel taşımacılık sayfamıza bakabilir, uygulamadan yükünüze özel teklif alabilirsiniz.",
    },
    {
      question: "Tek koli veya birkaç parça eşya gönderebilir miyim?",
      answer:
        "Evet. Komple araç kiralamanız gerekmez; tek koli, birkaç valiz veya birkaç parça eşya için parsiyel seçeneğimiz vardır. Yükünüz aynı güzergâhtaki diğer gönderilerle birlikte, yine aktarmasız ve CMR sorumluluğu altında Almanya'daki adrese teslim edilir; talep ederseniz beyan değeriniz üzerinden ek sigorta yaptırırız.",
    },
    {
      question: "Almanya'ya kargoda gümrük vergisi ödenir mi?",
      answer:
        "Yükün türüne bağlıdır. Ticari mallar fatura ve ATR belgesiyle işlem görür; Türkiye-AB gümrük birliği kapsamındaki sanayi ürünlerinde çoğu durumda ek gümrük vergisi doğmaz. Kullanılmış zati eşya ise farklı bir rejime tabidir ve belirli koşullarda muafiyetten yararlanabilir. Ekibimiz evrak sürecinde yol gösterir; yükünüze özel güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Zati eşya taşıması yapıyor musunuz?",
      answer:
        "Evet. Kişisel eşya, valiz, mobilya ve komple ev eşyası taşıyoruz. Almanya'ya taşınıyor veya oradaki bir yakınınıza eşya gönderiyorsanız yurtdışına ev eşyası taşıma sayfamızda süreç, ambalajlama ve evrak detaylarını bulabilirsiniz.",
    },
  ],
  related: [
    { slug: "almanyadan-turkiyeye-nakliyat", label: "Almanya'dan Türkiye'ye Nakliyat" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "kesin-donus-nakliyat", label: "Kesin Dönüş Nakliyat" },
    { slug: "hollanda-kargo", label: "Hollanda'ya Panelvan Kargo" },
    { slug: "almanya-kargo-gumruk-vergisi", label: "Almanya Kargo Gümrük Vergisi ve Muafiyet Sınırları" },
    { slug: "isvicre-kargo", label: "İsviçre'ye Kargo ve Nakliyat" },
  ],
};

export default almanyaKargo;
