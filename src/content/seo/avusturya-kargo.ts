import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const avusturyaKargo: SeoPageData = {
  slug: "avusturya-kargo",
  title: "Avusturya Kargo Fiyatları {{yil}} | Viyana'ya 20-32 Saat",
  description:
    "Türkiye'den Avusturya'ya panelvan kargo: Viyana, Graz ve Salzburg'a 20-32 saatte kapıdan kapıya, aktarmasız teslimat. Aşama takibi, anında teklif.",
  h1: "Türkiye'den Avusturya'ya Kapıdan Kapıya Panelvan Kargo",
  intro: [
    "Avusturya, Türkiye'den Batı Avrupa'ya uzanan ana kara güzergâhının tam üzerinde yer alır; bu yüzden panelvanla en hızlı teslimat yaptığımız ülkelerden biridir. RouteEU Express, İstanbul ve tüm Türkiye'den Viyana, Graz, Linz, Salzburg ve Avusturya'nın her şehrine kapıdan kapıya ekspres panelvan taşımacılığı yapar: yükünüz adresinizden alınır, araç değiştirmeden ve depoda beklemeden 20-32 saat içinde Avusturya'daki teslimat adresine ulaşır.",
    "Viyana'daki köklü Türk toplumu için ev eşyası ve zati eşya, Avusturya'nın sanayi bölgeleri için paletli ticari yük ve yedek parça taşıyoruz. Panelvan araçlarımız hafta sonu TIR seyir yasağına tabi değildir ve çift şoförle mola kaybı yaşamadan yol alır; her sevkiyat yazılı sözleşmeyle güvence altına alınır ve CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır. Bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlı olduğundan, mobilya veya elektronik gibi yüklerde talep üzerine beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Takip numaranızla sevkiyatınızın hangi aşamada olduğunu görürsünüz (talep alındı, anlaşma, yolda, teslim edildi); aracın o anki yerini WhatsApp'tan sorabilirsiniz.",
  ],
  transitTable: {
    caption: "Türkiye - Avusturya Transit Süreleri",
    rows: [
      { destination: "İstanbul → Graz", time: "18-30 saat" },
      { destination: "İstanbul → Viyana", time: "20-32 saat" },
      { destination: "İstanbul → Linz", time: "20-32 saat" },
      { destination: "İstanbul → Salzburg", time: "22-34 saat" },
    ],
  },
  priceTable: {
    caption: "Avusturya'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Viyana", price: priceRange("Viyana") },
      { route: "İstanbul → Graz", price: priceRange("Graz") },
      { route: "İstanbul → Salzburg", price: priceRange("Salzburg") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Avusturya'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya teslimat yaptığımız için hizmet ağımız belirli merkezlerle sınırlı değildir. Viyana ve çevresi, Graz, Linz, Salzburg, Innsbruck, Klagenfurt, Villach, Wels, St. Pölten, Dornbirn ve Bregenz başta olmak üzere Avusturya'nın tüm eyaletlerine, kasabalarına ve sanayi bölgelerine teslimat yapıyoruz. Yükünüz hangi adresteyse oradan alınır, Avusturya'da hangi adrese gidecekse oraya teslim edilir.",
        "Güzergâh açısından Graz, Türkiye'ye en yakın büyük Avusturya şehridir ve en kısa sürede ulaştığımız noktadır. Viyana, Macaristan üzerinden ilerleyen ana hattın ilk büyük durağıdır; Linz ve Salzburg ise aynı hattın Almanya yönündeki devamında yer alır. Innsbruck ve Vorarlberg bölgesi için süre birkaç saat uzar, ancak aktarmasız yapı değişmez.",
      ],
    },
    {
      heading: "Neden Panelvan? Sektör Ortalaması ile RouteEU Karşılaştırması",
      paragraphs: [
        "Türkiye'den Avusturya'ya parsiyel TIR taşımacılığı sektör ortalamasında 7-15 gün sürer: yük önce Türkiye'de bir toplama deposunda araç dolana kadar bekler, sınırda TIR kuyruğuna girer, Avrupa'da bir aktarma merkezine uğrar ve hafta sonu seyir yasağıyla en az iki gün daha kaybeder. RouteEU'nun minivan ekspres modelinde aynı yolculuk Viyana için 20-32 saat, Graz için 18-30 saattir. Bu farkı mümkün kılan unsurlar şunlardır:",
      ],
      list: [
        "Güzergâh avantajı: Avusturya, Almanya'ya giden ana hattın üzerindedir; araç sapmadan, en kısa yoldan ulaşır.",
        "Hafta sonu yasağı yok: Panelvan sınıfı araçlar hafta sonu TIR seyir yasağına tabi değildir; teslimat 7 gün kesintisiz sürer.",
        "Çift şoför: İki şoför dönüşümlü sürdüğü için araç zorunlu dinlenme molalarında durmaz, transit süre kısalır.",
        "Aktarmasız taşıma: Yük tek araca yüklenir ve aynı araçtan Avusturya'daki adreste indirilir; depo ve elden ele geçiş yoktur.",
        "Sınırda beklemez: Panelvanlar gümrük kapılarında 40 tonluk TIR'lara göre belirgin biçimde daha hızlı işlem görür.",
      ],
    },
    {
      heading: "Viyana'daki Türk Toplumu ve Ticari Yükler",
      paragraphs: [
        "Viyana, Avrupa'da Türkiye kökenli nüfusun en yoğun olduğu başkentlerden biridir. Bu topluluk için memleketten gelen çeyiz, mobilya, halı, beyaz eşya, kitap ve mevsimlik eşyanın tek seferde ve zarar görmeden ulaşması önemlidir. Panelvan taşımacılığı, eşyanın Türkiye'deki evden alınıp Viyana'daki daireye kadar aynı araçta gitmesini sağlar; ara depo, yeniden yükleme ve kayıp riski ortadan kalkar.",
        "Ticari tarafta Avusturya, Türkiye'nin Avrupa Birliği içindeki istikrarlı ticaret ortaklarından biridir. Viyana ve Linz çevresindeki sanayi tesislerine yedek parça, Graz çevresindeki otomotiv sanayine acil üretim parçası, Salzburg ve Tirol'deki turizm işletmelerine tekstil ve donanım, e-ticaret satıcılarına toplu ürün sevkiyatı yapıyoruz. Paletli ticari mal fatura ve ATR belgesiyle sorunsuz ilerler; ekibimiz evrak hazırlığında yol gösterir.",
      ],
    },
    {
      heading: "Avusturya'ya Ev Eşyası Taşıma ve Kesin Dönüş",
      paragraphs: [
        "Avusturya'ya taşınıyorsanız, orada okuyacaksanız veya Viyana'daki bir yakınınıza eşya gönderiyorsanız ev eşyası taşıma hizmetimiz tam bu ihtiyaç için tasarlanmıştır. Komple ev eşyası yaklaşık 1.300 kg ve 5 palet kapasiteli tek bir panelvanla, birkaç parça eşya ise parsiyel seçenekle taşınır. Kırılacak eşyalar için ambalajlama önerileri sunar, eşya listesi ve evrak hazırlığında size yol gösteririz. Kullanılmış zati eşyanın gümrük durumu ikamet ve kullanım süresi gibi koşullara bağlı olduğundan güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
        "Ters yönde de aynı hizmet geçerlidir: Avusturya'da yaşayıp Türkiye'ye kalıcı olarak dönecekseniz kesin dönüş nakliyat hizmetimizle ev eşyanızın tamamı Viyana, Graz ya da Salzburg'daki evinizden alınır ve aktarmasız olarak Türkiye'deki yeni adresinize teslim edilir.",
      ],
    },
    {
      heading: "Neler Gönderebilirsiniz?",
      paragraphs: [
        "Ticari mal, numune, e-ticaret ürünleri, tekstil ve hazır giyim, fuar malzemesi, yedek parça, makine ekipmanı, mobilya ve dekorasyon ürünleri, ev eşyası ve zati eşya taşıyoruz. Viyana'daki fuarlara stand malzemesi yetiştirmesi gereken firmalar, üretim hattı durmuş bir tesise acil parça gönderen tedarikçiler ve teslim tarihi kritik ihracat yükleri için panelvan ekspres çoğu zaman tek gerçekçi seçenektir.",
        "Tehlikeli madde sınıfına giren ürünler, canlı hayvan ve bozulabilir gıda taşımalarını kabul etmiyoruz; yükünüzün uygunluğundan emin değilseniz teklif aşamasında bize sorabilirsiniz.",
      ],
    },
    {
      heading: "Avusturya'ya Kargo Fiyatını Ne Belirler?",
      paragraphs: [
        "Avusturya, Almanya güzergâhının üzerinde olduğu için Batı Avrupa'nın daha uzak ülkelerine göre daha kısa mesafe ve daha öngörülebilir maliyet sunar. Yukarıdaki tabloda şehir bazlı güncel aralıkları görebilir, kendi yükünüz için kesin rakamı uygulamadan saniyeler içinde alabilirsiniz. Teklifinizi şekillendiren başlıca unsurlar şunlardır:",
      ],
      list: [
        "Varış şehri: Graz ile Bregenz arasında yüzlerce kilometre fark vardır; mesafe uzadıkça yakıt ve süre maliyeti fiyata yansır.",
        "Hacim ve ağırlık: Yükünüzün kapladığı alan ve toplam kilosu, aracın ne kadarını kullandığınızı belirler.",
        "Komple mi, parsiyel mi: Aracın tamamını kiralarsanız sabit araç fiyatı ödersiniz; parsiyel gönderide yalnızca kullandığınız hacim kadar ödeme yaparsınız.",
        "Sezon ve talep: Yaz dönemi, bayram öncesi ve okul açılış haftalarında talep artar; fiyat aralıkları buna göre hareket eder.",
        "Gümrük kapsamı: Ticari mal, numune ve zati eşya için evrak ve işlem yükü farklıdır; bu da toplam maliyeti etkiler.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Avusturya'ya gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte Türkiye'deki adresinize gelir, yükünüz yazılı sözleşme ve CMR taşıyıcı sorumluluğu kapsamında araca alınır.",
        "Taşıma: Yük gümrük işlemlerinin ardından aktarmasız olarak Avusturya'ya hareket eder; takip sayfasında aşaması \"yolda\" görünür, güzergâh harita üzerinde gösterilir.",
        "Teslim: Araç Avusturya'daki teslimat adresine ulaşır, yükünüz kapıda alıcıya teslim edilir.",
      ],
    },
    {
      heading: "Avusturya'dan Türkiye'ye Dönüş Yükleri",
      paragraphs: [
        "Taşımalarımız çift yönlüdür. Avusturya'dan Türkiye'ye eşya, ticari yük veya ev eşyası göndermek istiyorsanız aynı hız ve takip imkânıyla dönüş taşıması da yapıyoruz. Viyana, Graz, Linz, Salzburg ya da Avusturya'nın herhangi bir şehrinden Türkiye'deki adrese kapıdan kapıya teslimat mümkündür. Almanya'dan dönen araçlarımız Avusturya üzerinden geçtiği için dönüş yönünde tarih esnekliği ve parsiyel yer bulma olasılığı yüksektir.",
        "Aynı güzergâhın devamındaki Fransa, İsviçre ve Almanya teslimatlarıyla birleştirilebilen yükler için uygulamadan teklif alarak planlamaya başlayabilirsiniz; ekibimiz sizin için en uygun çıkış tarihini önerir.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Avusturya'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Graz'a 18-30 saat, Viyana ve Linz'e 20-32 saat, Salzburg'a 22-34 saat sürer. Parsiyel TIR taşımacılığında aynı güzergâh sektör ortalamasında 7-15 gün alır. Süreler gümrük yoğunluğu ve hava koşullarına göre birkaç saat değişebilir.",
    },
    {
      question: "Avusturya'ya panelvan kargo fiyatı ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergâha göre değişir: örneğin İstanbul-Viyana hattında " +
        priceRange("Viyana") +
        ", İstanbul-Graz hattında " +
        priceRange("Graz") +
        " aralığındadır. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde tahmini teklif alabilirsiniz.",
    },
    {
      question: "Avusturya'ya ev eşyası taşınır mı?",
      answer:
        "Evet. Mobilya, beyaz eşya, çeyiz, halı, kitap ve kişisel eşyadan oluşan komple ev eşyasını Türkiye'deki evinizden alıp Viyana, Graz veya Avusturya'nın herhangi bir şehrindeki adrese aynı araçla teslim ediyoruz. Kırılacak parçalar için ambalajlama önerileri sunuyor, eşya listesi ve evrak konusunda yol gösteriyoruz.",
    },
    {
      question: "Komple araç kiralamadan parsiyel gönderebilir miyim?",
      answer:
        "Evet. Tek koli, birkaç valiz veya birkaç parça eşya için parsiyel seçeneğimiz vardır. Avusturya, Almanya'ya giden araçlarımızın güzergâhı üzerinde olduğu için parsiyel yer bulma olasılığı yüksektir; yükünüz yine aktarmasız ve CMR sorumluluğu altında adrese teslim edilir, talep ederseniz beyan değeriniz üzerinden ek sigorta yaptırılır ve yalnızca kullandığınız hacim kadar ödersiniz.",
    },
    {
      question: "Avusturya'ya kargoda gümrük nasıl işler?",
      answer:
        "Gümrük işlemi Avrupa Birliği'ne giriş noktasında tamamlanır; Avusturya AB üyesi olduğu için sonrasında iç sınırlarda ayrıca gümrük yoktur. Ticari mallar fatura ve ATR belgesiyle işlem görür ve gümrük birliği kapsamındaki sanayi ürünlerinde çoğu durumda ek vergi doğmaz. Kullanılmış zati eşya farklı bir rejime tabidir. Ekibimiz evrak sürecinde yol gösterir; yükünüze özel güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Yükümü nasıl takip ederim?",
      answer:
        "Her gönderiye bir takip numarası tanımlanır. Gönderi takip sayfasından sevkiyatınızın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) görebilir, güzergâhı harita üzerinde izleyebilirsiniz. Aracın o anki yerini WhatsApp'tan sorabilir, teslimat öncesinde alıcıyla saat koordinasyonu yapabilirsiniz.",
    },
    {
      question: "Gönderim sigortalı mı?",
      answer:
        "Her sevkiyat yazılı sözleşmeyle ve CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlıdır. Mobilya, elektronik veya makine gibi yüklerde bu tavan çoğu zaman eşyanın gerçek değerini karşılamaz; bu nedenle talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Değerli yükler için kapsamı teklif aşamasında birlikte netleştiriyoruz.",
    },
    {
      question: "Viyana'ya hafta sonu teslimat yapılıyor mu?",
      answer:
        "Evet. Panelvan araçlar hafta sonu TIR seyir yasağından muaf olduğu için cumartesi ve pazar günleri de yükleme, seyir ve teslimat devam eder; cuma günü alınan yük cumartesi akşamı Viyana'da olabilir.",
    },
  ],
  related: [
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "fransa-kargo", label: "Fransa'ya Panelvan Kargo" },
    { slug: "isvicre-kargo", label: "İsviçre'ye Panelvan Kargo" },
  ],
};

export default avusturyaKargo;
