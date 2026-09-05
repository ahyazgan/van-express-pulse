import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const fransaKargo: SeoPageData = {
  slug: "fransa-kargo",
  title: "Fransa Kargo Fiyatları {{yil}} | Paris'e 34-48 Saat",
  description:
    "Türkiye'den Fransa'ya kapıdan kapıya panelvan kargo: Paris, Lyon, Marsilya ve Strazburg'a 34-48 saatte aktarmasız teslimat, CMR sorumluluğu. Anında teklif alın.",
  h1: "Türkiye'den Fransa'ya Kapıdan Kapıya Panelvan Kargo",
  intro: [
    "Türkiye'den Fransa'ya kargo göndermenin klasik yolu parsiyel TIR taşımacılığıdır; bu yolda yükünüz depo bekleme, aktarma ve hafta sonu seyir yasakları yüzünden çoğu zaman 10-15 günde adrese ulaşır. RouteEU Express bu süreyi yükünüze ayrılmış bir panelvanla 34-48 saate indirir: eşyanız Türkiye'deki adresinizden alınır, araç değiştirmeden ve depoya girmeden doğrudan Paris, Lyon, Marsilya, Strazburg ya da Fransa'nın herhangi bir şehrindeki teslimat adresine gider.",
    "Panelvan araçlarımız hafta sonu TIR seyir yasağından muaf olduğu için cuma günü yüklenen eşya pazartesiyi beklemeden yola devam eder. Çift şoför uygulamasıyla araç mola kaybı yaşamadan ilerler; yaklaşık 1.300 kg ve 5 palet kapasiteli araçlarımızla komple ya da parsiyel taşıma seçeneği sunarız. Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında ve yazılı sözleşmeyle taşınır; talep üzerine beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Takip numaranızla sevkiyatınızın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) görür, aracın o anki yerini WhatsApp'tan sorabilirsiniz.",
  ],
  transitTable: {
    caption: "Türkiye - Fransa Transit Süreleri",
    rows: [
      { destination: "İstanbul → Strazburg", time: "28-40 saat" },
      { destination: "İstanbul → Lyon", time: "32-46 saat" },
      { destination: "İstanbul → Paris", time: "34-48 saat" },
      { destination: "İstanbul → Marsilya", time: "34-48 saat" },
    ],
  },
  priceTable: {
    caption: "Fransa'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Paris", price: priceRange("Paris") },
      { route: "İstanbul → Strazburg", price: priceRange("Strazburg") },
      { route: "İstanbul → Lyon", price: priceRange("Lyon") },
      { route: "İstanbul → Marsilya", price: priceRange("Marsilya") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Fransa'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için hizmet ağımız belirli merkezlerle sınırlı değildir. Paris ve çevresindeki Île-de-France bölgesi, Lyon, Marsilya, Strazburg, Toulouse, Nice, Bordeaux, Lille, Nantes, Montpellier, Rennes ve Grenoble başta olmak üzere Fransa'nın tüm şehirlerine, kasabalarına ve sanayi bölgelerine teslimat yapıyoruz. Paris'e giden yükler Almanya güzergâhı üzerinden ilerlerken Marsilya ve Nice gibi Akdeniz kıyısındaki şehirlere İtalya üzerinden ulaşırız; her iki hatta da araç aktarmasız gider.",
        "Strazburg, Türkiye'den Fransa'ya en kısa sürede ulaştığımız şehirdir: Almanya sınırının hemen yanında yer aldığı için Stuttgart hattının doğal uzantısıdır. Fransa'nın doğusundaki Mulhouse, Metz ve Nancy gibi şehirler de aynı hızlı güzergâhtan faydalanır. Yükünüz hangi adresteyse oradan alınır, Fransa'da hangi adrese gidecekse oraya teslim edilir.",
      ],
    },
    {
      heading: "Minivan Ekspres Avantajı: 10-15 Gün Yerine 34-48 Saat",
      paragraphs: [
        "Fransa, Türkiye'den bakıldığında Avrupa'nın uzak ucundadır ve parsiyel TIR taşımacılığında bu mesafe kendini süreye yansıtır. Sektör ortalamasında Türkiye'den Fransa'ya parsiyel bir gönderi, toplama deposunda araç dolana kadar beklemesi, aktarma merkezlerinden geçmesi ve hafta sonu seyir yasağına takılmasıyla 10-15 gün sürer. RouteEU'nun minivan ekspres modelinde ise aynı yolculuk 34-48 saatte tamamlanır. Farkı yaratan unsurlar şunlardır:",
      ],
      list: [
        "Hafta sonu yasağı yok: Panelvan sınıfı araçlar Avrupa'daki hafta sonu TIR yasaklarına tabi değildir; yükünüz cumartesi ve pazar günleri de yol alır.",
        "Çift şoför: İki şoför dönüşümlü sürdüğü için araç zorunlu dinlenme molalarında saatlerce durmaz.",
        "Aktarmasız taşıma: Yük tek araca yüklenir ve aynı araçtan Fransa'daki adreste indirilir; depo, forklift ve elden ele geçiş yoktur.",
        "Sınır geçişinde hız: Panelvanlar gümrük kapılarında 40 tonluk TIR'lara göre belirgin biçimde daha hızlı işlem görür.",
        "Esnek kapasite: Yaklaşık 1.300 kg ve 5 palete kadar yük için komple araç, daha küçük gönderiler için parsiyel seçenek sunulur.",
      ],
    },
    {
      heading: "Fransa'ya Ev Eşyası Taşıma",
      paragraphs: [
        "Fransa'da yaşayan yüz binlerce Türkiye kökenli aile için memleketten eşya getirtmek sık karşılaşılan bir ihtiyaçtır: çeyiz, mobilya, beyaz eşya, halı, kitaplar, kışlık kıyafetler ya da ailenin hazırladığı kolilerin tamamı. Fransa'ya taşınıyorsanız veya Paris, Lyon, Strazburg'daki bir yakınınıza eşya gönderiyorsanız panelvan taşımacılığı bu ihtiyaç için en pratik çözümdür; çünkü eşyanız Türkiye'deki evinizden alınır, hiçbir depoda bekletilmeden Fransa'daki kapıya kadar aynı araçla gider.",
        "Ev eşyası taşımada kırılacak parçalar için ambalajlama önerileri sunar, eşya listesi ve evrak hazırlığında size yol gösteririz. Kullanılmış zati eşyanın gümrük durumu ikamet ve eşyanın kullanım süresi gibi koşullara bağlı olduğundan güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz. Süreç, ambalajlama ve evrak ayrıntıları için yurtdışına ev eşyası taşıma sayfamızı inceleyebilirsiniz.",
      ],
    },
    {
      heading: "Neler Gönderebilirsiniz?",
      paragraphs: [
        "Ticari mal, numune, e-ticaret ürünleri, tekstil ve hazır giyim, fuar malzemesi, yedek parça, makine ekipmanı, mobilya ve dekorasyon ürünleri, ev eşyası ve zati eşya taşıyoruz. Paris'teki fuarlara stand malzemesi yetiştirmesi gereken firmalar, Lyon ve Toulouse çevresindeki sanayi tesislerine acil parça gönderen üreticiler ve Fransa'daki müşterilerine paletli sevkiyat yapan ihracatçılar için panelvan ekspres çoğu zaman tek gerçekçi seçenektir.",
        "Ticari gönderilerde fatura ve ATR belgesiyle süreç ilerler; ekibimiz evrak hazırlığında size yol gösterir. Tehlikeli madde sınıfına giren ürünler, canlı hayvan ve bozulabilir gıda taşımalarını kabul etmiyoruz; yükünüzün uygunluğundan emin değilseniz teklif aşamasında bize sorabilirsiniz.",
      ],
    },
    {
      heading: "Fransa'ya Kargo Fiyatını Ne Belirler?",
      paragraphs: [
        "Fransa'ya kargo fiyatı tek bir tarifeyle açıklanamaz; yukarıdaki tabloda şehir bazlı güncel aralıkları görebilir, kendi yükünüz için kesin rakamı uygulamadan saniyeler içinde alabilirsiniz. Teklifinizi şekillendiren başlıca unsurlar şunlardır:",
      ],
      list: [
        "Varış şehri ve güzergâh: Strazburg ile Marsilya arasında yüzlerce kilometre fark vardır; mesafe uzadıkça yakıt ve süre maliyeti fiyata yansır.",
        "Hacim ve ağırlık: Yükünüzün kapladığı alan ve toplam kilosu, aracın ne kadarını kullandığınızı belirler.",
        "Komple mi, parsiyel mi: Aracın tamamını kiralarsanız sabit araç fiyatı ödersiniz; parsiyel gönderide yalnızca kullandığınız hacim kadar ödeme yaparsınız.",
        "Sezon ve talep: Yaz dönemi, bayram öncesi ve Paris fuar haftalarında talep artar; fiyat aralıkları buna göre hareket eder.",
        "Gümrük kapsamı: Ticari mal, numune ve zati eşya için evrak ve işlem yükü farklıdır; bu da toplam maliyeti etkiler.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Fransa'ya gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte Türkiye'deki adresinize gelir, yükünüz yazılı sözleşme ve CMR taşıyıcı sorumluluğu kapsamında araca alınır.",
        "Taşıma: Yük gümrük işlemlerinin ardından aktarmasız olarak Fransa'ya hareket eder; hangi aşamada olduğunu takip numaranızla, güzergâhı harita üzerinde izlersiniz.",
        "Teslim: Araç Fransa'daki teslimat adresine ulaşır, yükünüz kapıda alıcıya teslim edilir.",
      ],
    },
    {
      heading: "Fransa'dan Türkiye'ye Dönüş Yükleri",
      paragraphs: [
        "Taşımalarımız çift yönlüdür. Fransa'dan Türkiye'ye eşya, ticari yük veya ev eşyası göndermek istiyorsanız aynı hız ve takip imkânıyla dönüş taşıması da yapıyoruz. Paris, Lyon, Marsilya ya da Fransa'nın herhangi bir şehrinden Türkiye'deki adrese kapıdan kapıya teslimat mümkündür. Fransa'ya giden araçlarımız dönüş yolunda yük aldığı için dönüş yönünde tarih ve fiyat esnekliği sunabiliriz.",
        "Fransa'da yaşayıp Türkiye'ye kalıcı olarak dönecekseniz kesin dönüş nakliyat hizmetimizle ev eşyanızın tamamı tek panelvanla, aktarmasız olarak Türkiye'deki yeni adresinize taşınır. Almanya ve Avusturya güzergâhındaki ara teslimatlarla birleştirilebilen dönüş yükleri için uygulamadan teklif alarak planlamaya başlayabilirsiniz.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Fransa'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Strazburg'a 28-40 saat, Lyon'a 32-46 saat, Paris ve Marsilya'ya 34-48 saat sürer. Parsiyel TIR taşımacılığında aynı güzergâh sektör ortalamasında 10-15 gün alır. Süreler gümrük yoğunluğu ve hava koşullarına göre birkaç saat değişebilir.",
    },
    {
      question: "Fransa'ya panelvan kargo ücreti ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergâha göre değişir: örneğin İstanbul-Paris hattında " +
        priceRange("Paris") +
        ", İstanbul-Strazburg hattında " +
        priceRange("Strazburg") +
        " aralığındadır. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde tahmini teklif alabilirsiniz.",
    },
    {
      question: "Fransa'ya ev eşyası taşınır mı?",
      answer:
        "Evet. Mobilya, beyaz eşya, çeyiz, halı, kitap ve kişisel eşyadan oluşan komple ev eşyasını Türkiye'deki evinizden alıp Fransa'daki adrese aynı araçla teslim ediyoruz. Kırılacak parçalar için ambalajlama önerileri sunuyor, eşya listesi ve evrak konusunda yol gösteriyoruz.",
    },
    {
      question: "Tek koli veya birkaç parça eşya için parsiyel gönderebilir miyim?",
      answer:
        "Evet. Komple araç kiralamanız gerekmez; tek koli, birkaç valiz veya birkaç parça eşya için parsiyel seçeneğimiz vardır. Yükünüz aynı güzergâhtaki diğer gönderilerle birlikte, yine aktarmasız ve CMR sorumluluğu altında Fransa'daki adrese teslim edilir; yalnızca kullandığınız hacim kadar ödersiniz.",
    },
    {
      question: "Fransa'ya kargoda gümrük nasıl işler, vergi ödenir mi?",
      answer:
        "Gümrük işlemi Avrupa Birliği'ne giriş noktasında tamamlanır; Fransa AB üyesi olduğu için sonrasında iç sınırlarda ayrıca gümrük yoktur. Ticari mallar fatura ve ATR belgesiyle işlem görür ve gümrük birliği kapsamındaki sanayi ürünlerinde çoğu durumda ek vergi doğmaz. Kullanılmış zati eşya farklı bir rejime tabidir. Ekibimiz evrak sürecinde yol gösterir; yükünüze özel güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Yükümü nasıl takip ederim?",
      answer:
        "Her gönderiye bir takip numarası tanımlanır. Gönderi takip sayfasından sevkiyatınızın hangi aşamada olduğunu görürsünüz: talep alındı, anlaşma, yolda ve teslim edildi. Güzergâh harita üzerinde gösterilir; aracın o anki yerini WhatsApp'tan sorabilir, teslimat öncesinde alıcıyla saat koordinasyonu yapabilirsiniz.",
    },
    {
      question: "Gönderim sigortalı mı?",
      answer:
        "Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında ve yazılı sözleşmeyle taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlıdır. Mobilya, elektronik veya makine gibi yüklerde bu tavan çoğu zaman eşyanın gerçek değerini karşılamaz; bu nedenle talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Kapsamı ve maliyeti teklif aşamasında birlikte netleştiriyoruz.",
    },
    {
      question: "Fransa'ya hafta sonu gönderi çıkışı yapılıyor mu?",
      answer:
        "Evet. Panelvan araçlar hafta sonu TIR seyir yasağından muaf olduğu için cumartesi ve pazar günleri de yükleme ve seyir devam eder; cuma günü alınan yük pazar akşamı Paris'te olabilir.",
    },
  ],
  related: [
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "avusturya-kargo", label: "Avusturya'ya Panelvan Kargo" },
  ],
};

export default fransaKargo;
