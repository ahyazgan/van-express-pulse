import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const isvecKargo: SeoPageData = {
  slug: "isvec-kargo",
  title: "İsveç'e Kargo ve Nakliyat | Stockholm ve Göteborg'a Teslimat | RouteEU",
  description:
    "Türkiye'den İsveç'e kapıdan kapıya panelvan nakliyat. Stockholm, Göteborg ve Malmö'ye 2-3 günde sigortalı teslimat, 7/24 canlı GPS takip, anında fiyat.",
  h1: "Türkiye'den İsveç'e Kapıdan Kapıya Nakliyat",
  intro: [
    "Türkiye'den İsveç'e kargo göndermek, klasik parsiyel taşımacılıkta sabır isteyen bir iştir: yükler Almanya'da aktarma bekler, İskandinav hattına haftada bir araç kalkar ve teslimat çoğu firmada 2-4 haftayı bulur. RouteEU Express bu hattı panelvan ekspres modeliyle çalışır: yükünüz Türkiye'deki adresinizden ayrılmış bir araca alınır, Almanya ve Danimarka üzerinden kesintisiz ilerler, Öresund köprüsünden İsveç'e geçer ve Malmö'ye tipik olarak 38-54 saat, Stockholm'e 48-72 saat içinde — yani 2-3 gün içinde — kapıya teslim edilir.",
    "İsveç, Avrupa'daki en köklü Türk topluluklarından birine ev sahipliği yapar; Stockholm, Göteborg ve Malmö'deki ailelere ev eşyası, kişisel eşya ve ticari yük taşımak bu hattaki ana işimizdir. Tüm gönderiler sigortalı ve yazılı sözleşmeyle taşınır; aracın konumunu 7/24 canlı GPS takibiyle harita üzerinden anlık izlersiniz. Komple panelvan tutmak istemeyenler için aynı seferlere parsiyel yükleme de yapıyoruz.",
  ],
  transitTable: {
    caption: "Türkiye - İsveç Transit Süreleri",
    rows: [
      { destination: "İstanbul → Malmö", time: "38-54 saat" },
      { destination: "İstanbul → Göteborg", time: "44-64 saat" },
      { destination: "İstanbul → Stockholm", time: "48-72 saat" },
    ],
  },
  priceTable: {
    caption: "İsveç'e Panelvan Nakliyat Fiyatları",
    rows: [
      { route: "İstanbul → Malmö", price: priceRange("Malmö") },
      { route: "İstanbul → Göteborg", price: priceRange("Göteborg") },
      { route: "İstanbul → Stockholm", price: priceRange("Stockholm") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "İsveç'in Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için teslimat ağımız belirli şehirlerle sınırlı değildir. Başkent Stockholm, ikinci büyük şehir Göteborg ve güneydeki giriş kapımız Malmö başta olmak üzere Uppsala, Örebro, Linköping, Helsingborg, Jönköping, Norrköping ve Västerås dahil İsveç'in tüm şehirlerine teslimat yapıyoruz. Yükünüz Türkiye'de hangi adresteyse oradan alınır, İsveç'te hangi adrese gidecekse oraya kadar aynı araçla gider.",
        "Güzergahımız güneyden kuzeye doğal bir hat izler: araç önce Malmö'ye ulaşır, ardından E4 ve E6 otoyolları üzerinden Göteborg ve Stockholm'e devam eder. Aynı seferde birden fazla şehre teslimat planlanabilir; bu da parsiyel gönderiler için süreyi ve maliyeti düşürür.",
      ],
    },
    {
      heading: "Süre Karşılaştırması: Sektörde 2-4 Hafta, Panelvanla 2-3 Gün",
      paragraphs: [
        "İsveç, parsiyel TIR taşımacılığının en yavaş kaldığı Avrupa hatlarından biridir. Yükler önce Türkiye'de araç dolmasını, sonra Almanya'daki depoda İskandinav aktarmasını bekler; kapıya teslim çoğu firmada 2-4 hafta sürer. Panelvan ekspres modelinde bu beklemelerin tamamı ortadan kalkar ve aynı yol 2-3 güne iner. Farkı yaratan unsurlar şunlardır:",
      ],
      list: [
        "Aktarmasız taşıma: Yük depoya girmez, araç değiştirmez; İstanbul'da yüklenen eşya Stockholm'de aynı araçtan iner.",
        "Çift şoför: İki şoför dönüşümlü kullandığı için araç zorunlu dinlenme molalarında saatlerce beklemez.",
        "Hafta sonu yasağı yok: Panelvanlar TIR'ların hafta sonu seyir yasağından muaftır; yük cumartesi ve pazar da yol alır.",
        "Öresund geçişi: Danimarka'dan İsveç'e köprüyle kesintisiz geçilir; feribot rezervasyonu veya liman beklemesi yoktur.",
      ],
    },
    {
      heading: "Danimarka Üzerinden Devam Eden Hat",
      paragraphs: [
        "İsveç seferlerimiz İskandinav hattımızın devamıdır: araç Almanya'dan Danimarka'ya girer, Kopenhag bölgesindeki teslimatlarını yapar ve Öresund köprüsünden Malmö'ye geçer. Bu yapı sayesinde Danimarka ve İsveç'e gidecek yükler aynı seferde taşınabilir; iki ülkeye birden gönderisi olan müşterilerimiz tek araçla iki teslimat planlayabilir. Danimarka güzergahının transit süreleri ve fiyat aralıkları için Danimarka'ya kargo sayfamıza göz atabilirsiniz.",
      ],
    },
    {
      heading: "İsveç'e Ev Eşyası Taşıma ve Kesin Dönüş",
      paragraphs: [
        "Stockholm'e taşınan bir aile için ev eşyası göndermek, bu hattaki en sık taleplerden biridir. Eşyanız Türkiye'deki adresinizden panelvana yüklenir ve aktarmasız olarak İsveç'teki yeni adresinize taşınır; mobilya, beyaz eşya ve koliler aynı araçta, sigortalı gider. Yaklaşık 1.300 kg / 5 palet kapasiteli aracımız ortalama bir evin temel eşyası için yeterlidir; daha büyük hacimlerde iki araçlı planlama yapıyoruz.",
        "Ters yön de aynı hızda çalışır: İsveç'te yaşayıp Türkiye'ye kalıcı olarak dönecekseniz kesin dönüş nakliyat hizmetimizle eşyanız Stockholm, Göteborg, Malmö veya bulunduğunuz herhangi bir şehirden alınır ve Türkiye'deki yeni adresinize kapıdan kapıya teslim edilir. Kesin dönüş kapsamındaki gümrük muafiyeti şartları kişisel duruma göre değiştiği için güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz; evrak hazırlığında ekibimiz size yol gösterir.",
      ],
    },
    {
      heading: "İsveç'e Neler Gönderebilirsiniz?",
      paragraphs: [
        "Ev eşyası ve kişisel gönderilerin yanı sıra bu hatta ticari yük de taşıyoruz: numune, e-ticaret ürünleri, tekstil ve mobilya partileri, makine yedek parçası, fuar malzemesi ve paletli ticari mal. Stockholm'deki bir müşteriye teslim tarihi kritik bir siparişi yetiştirmek ya da Göteborg'daki bir üretim hattına acil parça ulaştırmak gerektiğinde, haftalarca süren parsiyel yerine 2-3 gün içinde kapıda olan panelvan çoğu zaman tek gerçekçi seçenektir.",
        "Komple araca ihtiyacınız yoksa tek koli, birkaç valiz veya birkaç parça eşya için parsiyel seçeneğimiz vardır; yükünüz aynı İskandinav seferindeki diğer gönderilerle birlikte, yine aktarmasız ve sigortalı olarak taşınır. Kış aylarında İsveç'in kuzey güzergahlarında hava koşulları seyir hızını etkileyebilir; bu dönemde güncel transit süreyi teklif aşamasında sizinle açıkça paylaşırız.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "İsveç'e gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte Türkiye'deki adresinize gelir, yükünüz sözleşme ve sigorta kapsamında araca alınır.",
        "Taşıma: Yük gümrük işlemlerinin ardından Almanya ve Danimarka üzerinden aktarmasız olarak İsveç'e hareket eder; konumu 7/24 canlı haritada izlersiniz.",
        "Teslim: Araç İsveç'teki teslimat adresine ulaşır, yükünüz kapıda alıcıya teslim edilir.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den İsveç'e kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Malmö'ye teslimat tipik olarak 38-54 saat, Göteborg'a 44-64 saat, Stockholm'e 48-72 saat sürer; yani yükünüz 2-3 gün içinde kapıda olur. Parsiyel TIR taşımacılığında aynı hat çoğu firmada 2-4 hafta sürmektedir.",
    },
    {
      question: "İsveç'e kargo ve nakliyat ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre değişir: örneğin İstanbul-Stockholm hattında " +
        priceRange("Stockholm") +
        " aralığındadır. Malmö ve Göteborg gibi güney şehirleri daha uygundur; küçük hacimler için parsiyel seçenek de sunuyoruz. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde teklif alabilirsiniz.",
    },
    {
      question: "İsveç'e tek koli veya birkaç valiz gönderebilir miyim?",
      answer:
        "Evet. Komple panelvan kiralamanız gerekmez; tek koli, birkaç valiz veya birkaç parça mobilya için parsiyel seçeneğimiz vardır. Yükünüz aynı İskandinav seferindeki diğer gönderilerle birlikte, aktarmasız ve sigortalı olarak İsveç'teki adrese teslim edilir; yalnızca kullandığınız hacim ve ağırlık kadar ödersiniz.",
    },
    {
      question: "İsveç'e ev eşyası nasıl gönderilir?",
      answer:
        "Ev eşyanız Türkiye'deki adresinizden panelvana yüklenir ve aktarmasız olarak İsveç'teki yeni adresinize taşınır. Araç yaklaşık 1.300 kg / 5 palet kapasitelidir; eşya listesi üzerinden hacim planlamasını birlikte yapar, gerekirse paketleme konusunda yönlendiririz.",
    },
    {
      question: "İsveç'ten Türkiye'ye kesin dönüş nakliyatı yapıyor musunuz?",
      answer:
        "Evet, hattımız çift yönlü çalışır. Kesin dönüş yapacaksanız eşyanız Stockholm, Göteborg, Malmö veya İsveç'teki herhangi bir adresten alınır ve Türkiye'deki yeni adresinize kapıdan kapıya teslim edilir. Kesin dönüş gümrük muafiyeti şartlarını gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "İsveç'e gönderilerde gümrük işlemleri nasıl yapılıyor?",
      answer:
        "Ticari gönderilerde fatura ve ATR belgesiyle işlemler standart şekilde ilerler; kişisel eşya ve kesin dönüş gönderilerinde eşya listesi ve duruma göre ek belgeler gerekir. Evrak hazırlığında ekibimiz adım adım yol gösterir; güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Yükümü nasıl takip ederim?",
      answer:
        "Her gönderiye canlı GPS takibi tanımlanır. Gönderi takip sayfasından aracınızın anlık konumunu 7/24 harita üzerinde görebilir, Öresund geçişinden teslimata kadar her aşamayı izleyebilirsiniz.",
    },
    {
      question: "Gönderim sigortalı mı?",
      answer:
        "Evet, tüm gönderiler taşıma sigortası kapsamında ve yazılı sözleşmeyle taşınır. Değerli yükler için sigorta kapsamını teklif aşamasında netleştiriyoruz.",
    },
  ],
  related: [
    { slug: "danimarka-kargo", label: "Danimarka'ya Kargo ve Nakliyat" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "kesin-donus-nakliyat", label: "Kesin Dönüş Nakliyat" },
    { slug: "parsiyel-tasimacilik", label: "Avrupa'ya Parsiyel Taşımacılık" },
  ],
};

export default isvecKargo;
