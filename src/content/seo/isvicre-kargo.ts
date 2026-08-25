import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const isvicreKargo: SeoPageData = {
  slug: "isvicre-kargo",
  title: "İsviçre'ye Kargo ve Nakliyat | Gümrük Dahil Kapıdan Kapıya | RouteEU",
  description:
    "Türkiye'den İsviçre'ye kapıdan kapıya kargo ve nakliyat. Zürih, Basel, Bern ve Cenevre'ye 28-46 saatte sigortalı taşıma; gümrük sürecinde uçtan uca rehberlik.",
  h1: "Türkiye'den İsviçre'ye Kapıdan Kapıya Kargo ve Nakliyat",
  intro: [
    "İsviçre, Avrupa Birliği üyesi olmadığı için Türkiye'den İsviçre'ye kargo göndermek, Almanya'ya veya Hollanda'ya göndermekten farklı bir süreçtir: Türkiye çıkışında ihracat beyanı, Avrupa üzerinden geçişte transit belgeleri ve varışta İsviçre ithalat işlemi devreye girer. Bu ek evrak yükü nedeniyle pek çok taşıma firması bu hatta ya hiç çalışmaz ya da yükü yolda başka firmalara devreder. RouteEU Express, İstanbul ve tüm Türkiye'den Zürih, Basel, Bern, Cenevre ve Lozan başta olmak üzere İsviçre'nin her adresine kapıdan kapıya panelvan taşımacılığı yapar ve gümrük sürecinin her adımında size yol gösterir.",
    "Yükünüz Türkiye'deki adresinizden alınır; araç değiştirmeden, depoda beklemeden doğrudan İsviçre'deki teslimat adresine gider. Çift şoför uygulaması ve hafta sonu TIR seyir yasağından muaf panelvan araçlarımız sayesinde İstanbul'dan Zürih'e teslimat tipik olarak 28-42 saatte tamamlanır. Tüm gönderiler sigortalı taşınır; 7/24 canlı GPS takibiyle yükünüzün Avrupa'nın neresinde olduğunu anlık olarak görürsünüz.",
  ],
  transitTable: {
    caption: "Türkiye - İsviçre Transit Süreleri",
    rows: [
      { destination: "İstanbul → Zürih", time: "28-42 saat" },
      { destination: "İstanbul → Basel", time: "28-42 saat" },
      { destination: "İstanbul → Bern", time: "30-44 saat" },
      { destination: "İstanbul → Cenevre", time: "32-46 saat" },
    ],
  },
  priceTable: {
    caption: "İsviçre'ye Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Zürih", price: priceRange("Zürih") },
      { route: "İstanbul → Basel", price: priceRange("Basel") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "İsviçre'nin Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için teslimat ağımız belirli şehirlerle sınırlı değildir. Finans ve ticaretin merkezi Zürih, ilaç ve kimya sanayisinin kalbi Basel, başkent Bern, uluslararası kuruluşların şehri Cenevre ve Léman kıyısındaki Lozan başta olmak üzere Winterthur, Luzern, St. Gallen ve Lugano dahil İsviçre'nin tüm şehir ve kasabalarına teslimat yapıyoruz. Basel'in Almanya ve Fransa sınırındaki konumu sayesinde kuzey güzergâhımız bu şehre çok hızlı ulaşır; Cenevre ve Lozan gibi ülkenin batısındaki adresler için süreler yalnızca birkaç saat uzar. Yükünüz Türkiye'de hangi adresteyse oradan alınır, İsviçre'de hangi adrese gidecekse oraya teslim edilir.",
      ],
    },
    {
      heading: "İsviçre Gümrüğü: AB Dışı Ülkeye Gönderim",
      paragraphs: [
        "İsviçre, Schengen bölgesinde yer alsa da AB gümrük birliğinin parçası değildir. Bu yüzden İsviçre'ye giden bir yük üç ayrı aşamadan geçer: Türkiye'den çıkışta ihracat beyanı düzenlenir, yük Avrupa Birliği topraklarından transit belgeleri eşliğinde geçer ve İsviçre sınırında ithalat işlemi yapılır. Bu zincirin herhangi bir halkasında eksik evrak, yükün sınırda günlerce beklemesi anlamına gelebilir.",
        "RouteEU bu hattı düzenli çalışan az sayıdaki firmadan biridir ve sürecin tamamını koordine eder: hangi belgelerin gerektiğini baştan netleştirir, ihracat beyanı ve transit evrakının hazırlanmasında size yol gösterir, İsviçre tarafındaki ithalat işleminin planlanmasını taşımayla birlikte yönetiriz. Çok az firmanın girdiği bu güzergâhta farkı yaratan şey tam olarak budur: evrakları doğru hazırlanmış bir yük sınırı beklemeden geçer, hazırlıksız bir yük ise en hızlı araçta bile takılır. Gümrük vergisi ve muafiyet koşulları yükün türüne, değerine ve alıcının statüsüne göre değişir; yükünüze özel güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
      ],
    },
    {
      heading: "Sektör Ortalaması ile RouteEU Panelvan Karşılaştırması",
      paragraphs: [
        "Sektörde yaygın yöntem olan parsiyel TIR taşımacılığında İsviçre'ye teslimat genellikle 7-15 gün sürer; yük birden fazla depoda elleçlenir ve AB dışı gümrük süreci bu bekleyişi daha da uzatabilir. RouteEU panelvan ekspreste ise aynı yük 28-46 saat aralığında adrese ulaşır. Farkı yaratan unsurlar şunlardır:",
      ],
      list: [
        "Aktarmasız taşıma: Yükünüz depoya girmez, elden ele geçmez; hasar ve kayıp riski en aza iner.",
        "Çift şoför: Araç dinlenme molası vermeden yola devam eder, transit süre kısalır.",
        "Hafta sonu yasağı yok: Panelvan araçlar TIR seyir yasağından muaf olduğu için cuma çıkan yük pazartesiyi beklemez.",
        "Planlı gümrük geçişi: Evraklar yola çıkmadan hazırlandığı için sınır geçişleri beklemeye dönüşmez.",
      ],
    },
    {
      heading: "Hassas ve Yüksek Değerli Yükler İçin Premium Taşıma",
      paragraphs: [
        "İsviçre hattında taşınan yüklerin önemli bölümü yüksek değerli ve hassas ürünlerdir: saat ve hassas mekanik parçalar, medikal cihazlar, laboratuvar ekipmanı, ölçüm aletleri ve makine yedek parçaları. Bu tür yükler için panelvan ekspres en güvenli seçenektir; çünkü yük tek araçta, tek ekibin sorumluluğunda ve sigorta kapsamında taşınır, hiçbir aktarma merkezinde elleçlenmez. Üretim hattı duran bir fabrikaya acil parça yetiştirmek ya da değerli bir cihazı hasarsız teslim etmek gerektiğinde, aracın yalnızca sizin yükünüz için yola çıkması ve konumunu 7/24 izleyebilmeniz belirleyici fark yaratır. Değeri yüksek gönderilerde sigorta kapsamını teklif aşamasında birlikte netleştiriyoruz.",
      ],
    },
    {
      heading: "İsviçre'ye Ev Eşyası Taşıma",
      paragraphs: [
        "İsviçre'de yaşayan Türk toplumu için ev eşyası, mobilya, valiz ve kişisel eşya taşımacılığı da yapıyoruz. İş için Zürih'e taşınıyor, Cenevre'deki bir yakınınıza eşya gönderiyor ya da Türkiye'den aldığınız mobilyaları İsviçre'deki evinize getirtmek istiyorsanız, yaklaşık 1.300 kilogram / 5 palet kapasiteli panelvanımız çoğu ev taşımasını tek seferde karşılar. Kullanılmış zati eşya, ticari maldan farklı bir gümrük rejimine tabidir ve ikamet nakli gibi durumlarda belirli muafiyet koşulları uygulanabilir; evrak hazırlığında ekibimiz size yol gösterir. Ambalajlama, evrak listesi ve süreç detayları için yurtdışına ev eşyası taşıma sayfamızı inceleyebilirsiniz.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "İsviçre'ye gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte Türkiye'deki adresinize gelir; yükünüz güvenle araca alınır, ihracat evrakı süreci başlar.",
        "Taşıma: Yük gümrük işlemlerinin ardından aktarmasız olarak İsviçre'ye hareket eder; konumu 7/24 canlı haritada izlersiniz.",
        "Teslim: İsviçre ithalat işleminin ardından araç teslimat adresine ulaşır, yükünüz kapıda alıcıya teslim edilir.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den İsviçre'ye kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Zürih ve Basel'e teslimat tipik olarak 28-42 saat, Bern'e 30-44 saat, Cenevre'ye 32-46 saat sürer. Parsiyel TIR taşımacılığında bu süre 7-15 güne çıkar ve AB dışı gümrük işlemleri bekleyişi daha da uzatabilir.",
    },
    {
      question: "İsviçre'ye kargo göndermek ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergâha göre değişir: örneğin İstanbul-Zürih hattında " +
        priceRange("Zürih") +
        " aralığındadır. Parsiyel gönderilerde yalnızca kullandığınız hacim kadar ödersiniz. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde teklif alabilirsiniz.",
    },
    {
      question: "İsviçre gümrüğü nasıl işliyor?",
      answer:
        "İsviçre AB üyesi olmadığı için süreç üç aşamalıdır: Türkiye çıkışında ihracat beyanı, AB toprakları üzerinden transit belgeleriyle geçiş ve İsviçre sınırında ithalat işlemi. RouteEU bu adımların koordinasyonunu yönetir ve evrak hazırlığında size yol gösterir. Vergi ve muafiyet koşulları yüke göre değiştiğinden güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "İsviçre'ye ev eşyası gönderebilir miyim?",
      answer:
        "Evet. Mobilya, valiz, beyaz eşya ve komple ev eşyası taşıyoruz; panelvanımızın yaklaşık 1.300 kg / 5 palet kapasitesi çoğu ev taşımasını tek seferde karşılar. Kullanılmış zati eşya için İsviçre'de ikamet nakli koşullarına bağlı muafiyetler uygulanabilir; evrak sürecinde ekibimiz yol gösterir.",
    },
    {
      question: "Yükümü nasıl takip ederim?",
      answer:
        "Her gönderiye canlı GPS takibi tanımlanır. Gönderi takip sayfasından aracınızın anlık konumunu 7/24 harita üzerinde görebilir, gümrük geçişi ve teslimat aşamalarını uygulamadan izleyebilirsiniz.",
    },
    {
      question: "Gönderim sigortalı mı?",
      answer:
        "Evet, tüm gönderiler taşıma sigortası kapsamında taşınır. Saat, medikal cihaz ve makine parçası gibi yüksek değerli yüklerde sigorta kapsamını teklif aşamasında birlikte netleştiriyoruz.",
    },
    {
      question: "Hafta sonu gönderi çıkışı yapılıyor mu?",
      answer:
        "Evet. Panelvan araçlar hafta sonu TIR seyir yasağından muaf olduğu için cumartesi ve pazar günleri de yükleme ve seyir devam eder; cuma günü çıkan yükünüz pazartesiyi beklemez.",
    },
    {
      question: "Komple araç yerine parsiyel gönderebilir miyim?",
      answer:
        "Evet. Tek koli, birkaç parça eşya veya bir-iki palet için parsiyel seçeneğimiz vardır: yükünüz aynı güzergâhtaki diğer gönderilerle aracı paylaşır, yine aktarmasız ve sigortalı olarak İsviçre'deki adrese teslim edilir. Detaylar için parsiyel taşımacılık sayfamıza bakabilirsiniz.",
    },
  ],
  related: [
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
  ],
};

export default isvicreKargo;
