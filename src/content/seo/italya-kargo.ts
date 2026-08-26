import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const italyaKargo: SeoPageData = {
  slug: "italya-kargo",
  title: "İtalya'ya Panelvan Kargo | Milano'ya 24-36 Saat Ekspres | RouteEU",
  description:
    "Türkiye'den İtalya'ya kapıdan kapıya panelvan kargo. Milano ve Verona'ya 24-36 saatte fuar, tekstil ve ticari yük taşıma; anında fiyat, canlı GPS takip.",
  h1: "Türkiye'den İtalya'ya Kapıdan Kapıya Panelvan Kargo",
  intro: [
    "İtalya, Türkiye'nin Avrupa'daki en yoğun ticaret ortaklarından biridir: tekstil ve hazır giyim koleksiyonları, deri ürünleri, mobilya ve makine parçaları iki ülke arasında sürekli hareket eder ve Milano'nun moda ile mobilya fuarları her sezon yüzlerce Türk firmasını ağırlar. Bu trafikte parsiyel TIR ile haftalarca beklemek, koleksiyonun sezonu kaçırması ya da fuar standının açılışa yetişmemesi demektir. RouteEU Express, İstanbul ve tüm Türkiye'den Milano, Verona, Bologna, Torino ve Roma başta olmak üzere İtalya'nın her adresine kapıdan kapıya ekspres panelvan taşımacılığı yapar; Milano'ya teslimat tipik olarak 24-36 saatte tamamlanır.",
    "Yükünüz Türkiye'deki adresinizden alınır; araç değiştirmeden, depoda beklemeden doğrudan İtalya'daki teslimat adresine gider. Panelvan araçlarımız hafta sonu TIR seyir yasağına tabi olmadığı için cuma günü çıkan yük pazartesiyi beklemez; çift şoför uygulamasıyla araç mola vermeden yola devam eder. Tüm gönderiler sigortalı taşınır ve 7/24 canlı GPS takibiyle yükünüzün konumunu anlık olarak görürsünüz.",
  ],
  transitTable: {
    caption: "Türkiye - İtalya Transit Süreleri",
    rows: [
      { destination: "İstanbul → Milano", time: "24-36 saat" },
      { destination: "İstanbul → Verona", time: "24-36 saat" },
      { destination: "İstanbul → Bologna", time: "26-40 saat" },
      { destination: "İstanbul → Roma", time: "32-46 saat" },
    ],
  },
  priceTable: {
    caption: "İtalya'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Milano", price: priceRange("Milano") },
      { route: "İstanbul → Verona", price: priceRange("Verona") },
      { route: "İstanbul → Roma", price: priceRange("Roma") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "İtalya'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için teslimat ağımız belirli şehirlerle sınırlı değildir. Taşımalarımızın büyük bölümü sanayinin ve ticaretin yoğunlaştığı Kuzey İtalya'ya gider: moda ve finans merkezi Milano, Verona, Bologna, Torino, Brescia, Bergamo, Padova, Venedik, Modena ve Trieste. Bu bölge Türkiye'ye kara yoluyla en yakın İtalyan coğrafyasıdır ve teslimat süreleri buna göre en kısadır. Floransa, Roma, Napoli ve Bari gibi orta ve güney şehirlerine de aynı araçla, aktarmasız teslimat yapıyoruz; süre yalnızca mesafe kadar uzar. Yükünüz Türkiye'de hangi adresteyse oradan alınır, İtalya'da hangi adrese gidecekse oraya teslim edilir.",
      ],
    },
    {
      heading: "Ticari Yük, Tekstil ve Milano Fuarları",
      paragraphs: [
        "Türkiye-İtalya hattındaki yükün omurgasını tekstil, hazır giyim, deri, ayakkabı ve mobilya oluşturur. Moda sezonlarında koleksiyon numunelerinin İtalyan alıcıya birkaç gün geç ulaşması siparişin kaçması anlamına gelebilir; mobilya ve dekorasyon ürünlerinde ise hasarsız teslim en az hız kadar önemlidir. Panelvan ekspreste yük tek araçta, aktarma merkezine uğramadan ve elden ele geçmeden gider; bu, hem sezon takvimini tutturmanın hem de hasar riskini en aza indirmenin en güvenilir yoludur.",
        "Milano'nun uluslararası moda, mobilya, tekstil makineleri ve gıda fuarları Türk katılımcılar için ayrı bir ihtiyaç doğurur: stand malzemesi, ürün numuneleri ve tanıtım ekipmanının kurulum gününden önce fuar alanında olması gerekir. Fuar takvimine göre planlanan alım tarihi, doğrudan fuar alanına teslimat ve fuar sonunda malzemenin Türkiye'ye geri getirilmesi dahil tüm süreci tek elden yönetiyoruz. Stand ve numune taşımasının ayrıntıları için fuar taşımacılığı sayfamızı inceleyebilirsiniz. Ticari gönderilerde fatura ve ATR belgesiyle gümrük süreci hızlı ilerler; yükünüze özel güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
      ],
    },
    {
      heading: "Sektör Ortalaması ile RouteEU Panelvan Karşılaştırması",
      paragraphs: [
        "Sektörde yaygın yöntem olan parsiyel TIR taşımacılığında Türkiye'den İtalya'ya teslimat genellikle 7-15 gün sürer; yük önce toplama deposunda birikir, sonra aktarma merkezlerinden geçer ve hafta sonu seyir yasağında yol kenarında bekler. RouteEU panelvan ekspreste aynı yük Milano'ya 24-36, Roma'ya 32-46 saat içinde adrese ulaşır. Farkı yaratan unsurlar şunlardır:",
      ],
      list: [
        "Aktarmasız taşıma: Yükünüz depoya girmez, elden ele geçmez; tekstil ve mobilya gibi hasara açık ürünlerde risk en aza iner.",
        "Çift şoför: Araç dinlenme molası vermeden yola devam eder, transit süre kısalır.",
        "Hafta sonu yasağı yok: Panelvan araçlar TIR seyir yasağından muaf olduğu için teslimat 7 gün kesintisiz sürer.",
        "Sınırda beklemez: Panelvan sınıfı araçlar gümrük kapılarında 40 tonluk TIR'lara göre belirgin biçimde daha hızlı işlem görür.",
      ],
    },
    {
      heading: "Minivan Ekspres: Küçük ve Acil Yükler",
      paragraphs: [
        "Her gönderi beş paletlik bir panelvanı doldurmaz. Birkaç koli koleksiyon numunesi, üretim hattını bekleyen tek bir makine parçası ya da fuar açılışına yetişmesi gereken bir stand aksesuarı için minivan ekspres seçeneğimiz daha hızlı ve daha ekonomik bir çözümdür. Daha küçük araç, daha hızlı yükleme ve şehir içi teslimatlarda daha kolay erişim demektir; Milano ve Verona'ya yine 24-36 saat aralığında, kapıdan kapıya ve sigortalı teslimat yapılır. Yükünüzün hacmi ve aciliyeti hangi aracın uygun olduğunu belirler; uygulamadan teklif alırken her iki seçeneği de karşılaştırabilirsiniz. Ayrıntılar için minivan ekspres taşımacılık sayfamıza göz atabilirsiniz.",
      ],
    },
    {
      heading: "İtalya'ya Ev Eşyası Taşıma",
      paragraphs: [
        "İtalya'da yaşayan, eğitim için Milano ya da Bologna'ya giden veya iş nedeniyle taşınan müşterilerimiz için ev eşyası, mobilya, valiz ve kişisel eşya taşımacılığı da yapıyoruz. Yaklaşık 1.300 kilogram / 5 palet kapasiteli panelvanımız çoğu ev taşımasını tek seferde karşılar; birkaç valiz veya birkaç parça eşya için parsiyel seçeneğimiz vardır. Kullanılmış zati eşya, ticari maldan farklı bir gümrük rejimine tabidir ve ikamet nakli durumunda belirli muafiyet koşulları uygulanabilir; evrak hazırlığında ekibimiz size yol gösterir. Ambalajlama, evrak listesi ve süreç detayları için yurtdışına ev eşyası taşıma sayfamızı inceleyebilirsiniz.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "İtalya'ya gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte Türkiye'deki adresinize gelir, yükünüz güvenle araca alınır.",
        "Taşıma: Yük gümrük işlemlerinin ardından aktarmasız olarak İtalya'ya hareket eder; konumu 7/24 canlı haritada izlersiniz.",
        "Teslim: Araç İtalya'daki teslimat adresine ulaşır, yükünüz kapıda alıcıya teslim edilir.",
      ],
    },
    {
      heading: "İtalya'dan Türkiye'ye Dönüş Yükleri",
      paragraphs: [
        "Taşımalarımız çift yönlüdür: İtalya'dan Türkiye'ye mobilya, makine, tekstil makinesi yedek parçası, kumaş ve aksesuar gibi ticari yükleri de aynı hız ve takip imkânıyla taşıyoruz. Milano fuarından dönen stand malzemesi, İtalyan tedarikçiden alınan mobilya veya Türkiye'ye kalıcı dönüş yapan bir ailenin ev eşyası, kapıdan kapıya ve aktarmasız olarak Türkiye'deki adrese teslim edilir. Gidiş ve dönüş yükünü aynı planlamada birleştirmek isteyen firmalar için uygulamadan iki yönlü teklif alabilirsiniz.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den İtalya'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Milano ve Verona'ya teslimat tipik olarak 24-36 saat, Bologna'ya 26-40 saat, Roma'ya 32-46 saat sürer. Parsiyel TIR taşımacılığında bu süre 7-15 güne çıkar.",
    },
    {
      question: "İtalya'ya panelvan kargo fiyatı ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergâha göre değişir: örneğin İstanbul-Milano hattında " +
        priceRange("Milano") +
        " aralığındadır. Parsiyel gönderilerde yalnızca kullandığınız hacim kadar ödersiniz. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde teklif alabilirsiniz.",
    },
    {
      question: "Milano fuarına stand ve numune yetiştirebilir misiniz?",
      answer:
        "Evet. Fuar takvimine göre alım tarihini birlikte planlıyor, stand malzemesi ve numuneleri doğrudan fuar alanındaki teslimat noktasına 24-36 saat içinde ulaştırıyoruz. Fuar bitiminde malzemenin Türkiye'ye dönüş taşımasını da aynı planlamaya dahil edebiliriz; ayrıntılar fuar taşımacılığı sayfamızda.",
    },
    {
      question: "Tek koli veya birkaç parça eşya için parsiyel gönderebilir miyim?",
      answer:
        "Evet. Komple araç kiralamanız gerekmez; birkaç koli numune, valiz veya bir-iki palet için parsiyel seçeneğimiz vardır. Yükünüz aynı güzergâhtaki diğer gönderilerle aracı paylaşır, yine aktarmasız ve sigortalı olarak İtalya'daki adrese teslim edilir. Küçük ve acil yükler için minivan ekspres de uygun bir alternatiftir.",
    },
    {
      question: "İtalya'ya kargoda gümrük vergisi ödenir mi?",
      answer:
        "Yükün türüne bağlıdır. Ticari mallar fatura ve ATR belgesiyle işlem görür; Türkiye-AB gümrük birliği kapsamındaki sanayi ürünlerinde çoğu durumda ek gümrük vergisi doğmaz. Kullanılmış zati eşya farklı bir rejime tabidir ve belirli koşullarda muafiyetten yararlanabilir. Ekibimiz evrak sürecinde yol gösterir; yükünüze özel güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Yükümü nasıl takip ederim?",
      answer:
        "Her gönderiye canlı GPS takibi tanımlanır. Gönderi takip sayfasından aracınızın anlık konumunu 7/24 harita üzerinde görebilir, sınır geçişi ve teslimat aşamalarını uygulamadan izleyebilirsiniz.",
    },
    {
      question: "Gönderim sigortalı mı?",
      answer:
        "Evet, tüm gönderiler taşıma sigortası kapsamında taşınır. Mobilya, koleksiyon numunesi ve makine parçası gibi değerli yüklerde sigorta kapsamını teklif aşamasında birlikte netleştiriyoruz.",
    },
    {
      question: "Hafta sonu gönderi çıkışı yapılıyor mu?",
      answer:
        "Evet. Panelvan araçlar hafta sonu TIR seyir yasağından muaf olduğu için cumartesi ve pazar günleri de yükleme ve seyir devam eder; pazartesi açılan fuar için cuma çıkan yük zamanında yerinde olur.",
    },
  ],
  related: [
    { slug: "fuar-tasimaciligi", label: "Fuar Taşımacılığı" },
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
  ],
};

export default italyaKargo;
