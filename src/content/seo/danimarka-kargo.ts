import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const danimarkaKargo: SeoPageData = {
  slug: "danimarka-kargo",
  title: "Danimarka'ya Kargo ve Nakliyat | Kopenhag'a Kapıdan Kapıya | RouteEU",
  description:
    "Türkiye'den Danimarka'ya kapıdan kapıya panelvan nakliyat. Kopenhag, Aarhus ve Odense'ye 2-3 günde sigortalı teslimat, canlı GPS takip, anında fiyat teklifi.",
  h1: "Türkiye'den Danimarka'ya Kapıdan Kapıya Nakliyat",
  intro: [
    "Türkiye'den Danimarka'ya kargo veya eşya göndermek istediğinizde karşınıza çoğunlukla tek seçenek çıkar: parsiyel TIR ile 2-3 hafta süren, aktarmalı ve takibi zor bir taşıma. RouteEU Express bu hatta farklı çalışır. Yükünüz Türkiye'deki adresinizden ayrılmış bir panelvana alınır, Almanya üzerinden kesintisiz ilerler ve Kopenhag'a tipik olarak 36-52 saat içinde, yani 2-3 gün içinde kapınıza teslim edilir. Araç değişmez, yük depo beklemez, elden ele geçmez.",
    "Danimarka'da yaşayan Türk toplumu için bu hat yalnızca ticari kargo değil; ev eşyası, kesin dönüş nakliyatı ve aileye gönderilen kişisel eşyalar için de düzenli çalışan bir köprüdür. İskandinav hattına planlı seferlerimiz sayesinde hem komple panelvan hem de parsiyel seçenek sunuyoruz. Tüm gönderiler sigortalı taşınır, aracın konumunu 7/24 canlı GPS takibiyle harita üzerinden anlık izlersiniz.",
  ],
  transitTable: {
    caption: "Türkiye - Danimarka Transit Süreleri",
    rows: [
      { destination: "İstanbul → Kopenhag", time: "36-52 saat" },
      { destination: "İstanbul → Odense", time: "38-54 saat" },
      { destination: "İstanbul → Aarhus", time: "40-56 saat" },
    ],
  },
  priceTable: {
    caption: "Danimarka'ya Panelvan Nakliyat Fiyatları",
    rows: [
      { route: "İstanbul → Kopenhag", price: priceRange("Kopenhag") },
      { route: "İstanbul → Aarhus", price: priceRange("Aarhus") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Danimarka'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için teslimat ağımız belirli şehirlerle sınırlı değildir. Başkent Kopenhag başta olmak üzere Aarhus, Odense, Aalborg, Esbjerg, Randers, Kolding, Horsens ve Vejle dahil Danimarka'nın tüm şehirlerine ve kasabalarına teslimat yapıyoruz. Yükünüz Türkiye'de hangi adresteyse oradan alınır, Danimarka'da hangi adrese gidecekse oraya kadar aynı araçla gider.",
        "Kopenhag'ın da bulunduğu Zealand adasına Büyük Kemer (Storebælt) köprüsü üzerinden karayoluyla kesintisiz ulaşıyoruz; feribot beklemesi veya ara aktarma söz konusu değildir. Jutland yarımadasındaki Aarhus, Aalborg ve Esbjerg gibi şehirlere ise Almanya sınırından doğrudan devam ederiz.",
      ],
    },
    {
      heading: "Neden Panelvan? Sektör Bu Hatta 2-3 Hafta Veriyor",
      paragraphs: [
        "Danimarka, klasik parsiyel TIR taşımacılığında dezavantajlı bir varış noktasıdır: yükler önce Almanya'daki bir depoda toplanır, İskandinav aktarması için araç dolmasını bekler ve teslimat çoğu firmada 2-3 haftayı bulur. Panelvan ekspres modelinde bu bekleme tamamen ortadan kalkar; araç yalnızca sizin yükünüz (veya aynı güzergahtaki birkaç parsiyel yük) için yola çıkar ve durmadan gider. Farkı yaratan unsurlar şunlardır:",
      ],
      list: [
        "Aktarmasız taşıma: Yük Almanya'da depoya girmez, İskandinav aktarması beklemez; hasar ve kayıp riski en aza iner.",
        "Hafta sonu yasağı yok: Panelvanlar TIR'ların hafta sonu seyir yasağından muaftır; cuma çıkan yük pazartesiyi beklemeden ilerler.",
        "Çift şoför: İki şoför dönüşümlü kullandığı için araç dinlenme molasında saatlerce durmaz, transit süre kısalır.",
        "Sınır avantajı: Panelvan sınıfı araçlar gümrük kapılarında 40 tonluk TIR'lara göre belirgin biçimde daha hızlı işlem görür.",
      ],
    },
    {
      heading: "Almanya Üzerinden Kesintisiz Güzergah",
      paragraphs: [
        "Danimarka seferlerimiz Türkiye'den çıkıp Orta Avrupa ve Almanya üzerinden kuzeye ilerler; Flensburg sınırından Danimarka'ya giriş yapılır. Güzergahın tamamı karayoludur ve tek araçla planlanır. Almanya hattındaki yoğun sefer trafiğimiz sayesinde Danimarka yükleri için düzenli çıkış günleri sunabiliyoruz; komple panelvan tutmak istemeyen müşterilerimiz için parsiyel yükleme de aynı seferlere eklenebilir.",
      ],
    },
    {
      heading: "Danimarka'ya Ev Eşyası Taşıma ve Kesin Dönüş",
      paragraphs: [
        "Danimarka'daki Türk toplumundan en sık aldığımız talepler ev eşyası taşıma ve kesin dönüş nakliyatıdır. Türkiye'den Kopenhag'a taşınıyorsanız evinizin eşyası tek panelvanla, aktarmasız olarak yeni adresinize kadar gider; mobilya, beyaz eşya ve koliler aynı araçta, sigortalı taşınır. Yaklaşık 1.300 kg / 5 palet kapasiteli aracımız ortalama bir evin temel eşyası için yeterlidir; daha büyük hacimlerde iki araçlı planlama yapıyoruz.",
        "Ters yönde de çalışıyoruz: Danimarka'da yaşayıp Türkiye'ye kalıcı olarak dönecekseniz kesin dönüş nakliyat hizmetimizle eşyanız Kopenhag, Aarhus veya bulunduğunuz herhangi bir şehirden alınır, Türkiye'deki yeni adresinize teslim edilir. Kesin dönüş kapsamındaki gümrük muafiyeti şartları kişisel duruma göre değiştiği için güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz; evrak hazırlığında ekibimiz size yol gösterir.",
      ],
    },
    {
      heading: "İsveç ile Aynı Seferde Taşıma",
      paragraphs: [
        "Danimarka, İskandinav hattımızın kapısıdır: Kopenhag'a teslimat yapan aracımız Öresund köprüsü üzerinden Malmö'ye ve İsveç'in diğer şehirlerine devam eder. Bu sayede Danimarka ve İsveç'e gidecek yükler aynı seferde, parsiyel olarak taşınabilir; iki ülkeye birden gönderisi olan ticari müşterilerimiz için tek araç, tek planlama yeterlidir. İsveç güzergahının detayları, transit süreleri ve fiyat aralıkları için İsveç'e kargo sayfamıza göz atabilirsiniz.",
      ],
    },
    {
      heading: "Danimarka'ya Neler Gönderebilirsiniz?",
      paragraphs: [
        "Bu hatta ev eşyası ve kişisel gönderilerin yanı sıra ticari yük de düzenli olarak taşıyoruz: numune, e-ticaret ürünleri, tekstil ve mobilya partileri, makine yedek parçası, fuar malzemesi ve paletli ticari mal. Kopenhag'daki bir mağazaya sezon ürünü yetiştirmek ya da Aarhus'taki bir üretim hattına acil parça ulaştırmak gerektiğinde, haftalarca bekleyen parsiyel yerine 2-3 gün içinde kapıda olan bir panelvan çoğu zaman tek gerçekçi seçenektir.",
        "Komple araca ihtiyacınız yoksa tek koli, birkaç valiz veya birkaç parça eşya için parsiyel seçeneğimiz vardır; yükünüz aynı İskandinav seferindeki diğer gönderilerle birlikte, yine aktarmasız ve sigortalı olarak taşınır. Yükleme öncesinde eşya listesini ve varsa faturayı paylaşmanız yeterlidir; evrak hazırlığında ekibimiz adım adım yol gösterir.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Danimarka'ya gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte Türkiye'deki adresinize gelir, yükünüz sözleşme ve sigorta kapsamında araca alınır.",
        "Taşıma: Yük gümrük işlemlerinin ardından Almanya üzerinden aktarmasız olarak Danimarka'ya hareket eder; konumu 7/24 canlı haritada izlersiniz.",
        "Teslim: Araç Danimarka'daki teslimat adresine ulaşır, yükünüz kapıda alıcıya teslim edilir.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Danimarka'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Kopenhag'a teslimat tipik olarak 36-52 saat, Aarhus'a 40-56 saat sürer; yani yükünüz 2-3 gün içinde kapıda olur. Parsiyel TIR taşımacılığında aynı hat çoğu firmada 2-3 hafta sürmektedir.",
    },
    {
      question: "Danimarka'ya kargo ve nakliyat ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre değişir: örneğin İstanbul-Kopenhag hattında " +
        priceRange("Kopenhag") +
        " aralığındadır. Küçük hacimler için parsiyel seçenek daha ekonomiktir. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde teklif alabilirsiniz.",
    },
    {
      question: "Danimarka'ya tek koli veya birkaç parça eşya gönderebilir miyim?",
      answer:
        "Evet. Komple panelvan kiralamanız gerekmez; tek koli, birkaç valiz veya birkaç parça mobilya için parsiyel seçeneğimiz vardır. Yükünüz aynı İskandinav seferindeki diğer gönderilerle birlikte, aktarmasız ve sigortalı olarak Danimarka'daki adrese teslim edilir; yalnızca kullandığınız hacim ve ağırlık kadar ödersiniz.",
    },
    {
      question: "Danimarka'ya ev eşyası nasıl gönderilir?",
      answer:
        "Ev eşyanız Türkiye'deki adresinizden panelvana yüklenir ve aktarmasız olarak Danimarka'daki yeni adresinize taşınır. Araç yaklaşık 1.300 kg / 5 palet kapasitelidir; eşya listesi üzerinden hacim planlamasını birlikte yapar, gerekirse paketleme konusunda yönlendiririz.",
    },
    {
      question: "Danimarka'dan Türkiye'ye kesin dönüş nakliyatı yapıyor musunuz?",
      answer:
        "Evet, hattımız çift yönlü çalışır. Kesin dönüş yapacaksanız eşyanız Kopenhag, Aarhus veya Danimarka'daki herhangi bir adresten alınır ve Türkiye'deki yeni adresinize kapıdan kapıya teslim edilir. Kesin dönüş gümrük muafiyeti şartlarını gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Danimarka'ya gönderilerde gümrük işlemleri nasıl yapılıyor?",
      answer:
        "Ticari gönderilerde fatura ve ATR belgesiyle işlemler standart şekilde ilerler; kişisel eşya ve kesin dönüş gönderilerinde ise eşya listesi ve duruma göre ek belgeler gerekir. Evrak hazırlığında ekibimiz adım adım yol gösterir; güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Yükümü nasıl takip ederim?",
      answer:
        "Her gönderiye canlı GPS takibi tanımlanır. Gönderi takip sayfasından aracınızın anlık konumunu 7/24 harita üzerinde görebilir, teslimata kalan mesafeyi izleyebilirsiniz.",
    },
    {
      question: "Gönderim sigortalı mı?",
      answer:
        "Evet, tüm gönderiler taşıma sigortası kapsamında ve yazılı sözleşmeyle taşınır. Değerli yükler için sigorta kapsamını teklif aşamasında netleştiriyoruz.",
    },
  ],
  related: [
    { slug: "isvec-kargo", label: "İsveç'e Kargo ve Nakliyat" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "kesin-donus-nakliyat", label: "Kesin Dönüş Nakliyat" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
  ],
};

export default danimarkaKargo;
