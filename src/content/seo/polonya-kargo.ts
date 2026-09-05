import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const polonyaKargo: SeoPageData = {
  slug: "polonya-kargo",
  title: "Polonya'ya Kargo ve Parsiyel Taşıma | Varşova'ya 24-40 Saat | RouteEU",
  description:
    "Türkiye'den Polonya'ya kapıdan kapıya panelvan kargo ve parsiyel taşıma. Varşova, Kraków ve Wrocław'a 24-40 saatte aktarmasız ekspres sevkiyat; hemen teklif alın.",
  h1: "Türkiye'den Polonya'ya Kargo ve Parsiyel Taşımacılık",
  intro: [
    "Türkiye ile Polonya arasındaki ticaret hacmi her yıl büyüyor: otomotiv yan sanayiden beyaz eşya komponentine, tekstilden e-ticaret ürünlerine kadar yüzlerce Türk işletmesi Polonya'daki üretici, distribütör ve depolara düzenli mal gönderiyor. RouteEU Express, İstanbul ve tüm Türkiye'den Varşova, Kraków, Wrocław ve Poznań başta olmak üzere Polonya'nın tüm şehirlerine kapıdan kapıya panelvan ekspres ve parsiyel taşımacılık yapar. Yükünüz fabrikanızdan veya deponuzdan alınır, araç değiştirmeden doğrudan Polonya'daki alıcı adresine teslim edilir.",
    "Çift şoförlü panelvanlarımız hafta sonu TIR seyir yasağına tabi olmadığı için sevkiyat yedi gün kesintisiz sürer; İstanbul'dan Varşova'ya teslimat tipik olarak 24-40 saat içinde tamamlanır. Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır ve yazılı taşıma sözleşmesiyle güvence altına alınır; talep üzerine beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Takip numaranızla sevkiyatın hangi aşamada olduğunu görür, bu bağlantıyı dilerseniz Polonya'daki müşterinizle de paylaşırsınız.",
  ],
  transitTable: {
    caption: "Türkiye - Polonya Transit Süreleri",
    rows: [
      { destination: "İstanbul → Varşova", time: "24-40 saat" },
      { destination: "İstanbul → Kraków", time: "22-36 saat" },
      { destination: "İstanbul → Wrocław", time: "24-38 saat" },
      { destination: "İstanbul → Poznań", time: "28-42 saat" },
    ],
  },
  priceTable: {
    caption: "Polonya'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Varşova", price: priceRange("Varşova") },
      { route: "İstanbul → Kraków", price: priceRange("Kraków") },
      { route: "İstanbul → Poznań", price: priceRange("Poznań") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Polonya'nın Hangi Şehirlerine ve Sanayi Bölgelerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Varşova, Kraków, Wrocław, Poznań, Łódź, Katowice, Gdańsk ve Szczecin dahil Polonya'nın tüm şehirlerine teslimat yapıyoruz. Kapıdan kapıya çalıştığımız için varış noktanız bir şehir merkezindeki ofis, bir organize sanayi bölgesindeki fabrika veya otoyol kenarındaki bir lojistik park olabilir; adres neresiyse araç oraya gider.",
        "Polonya'nın güneyindeki Katowice-Silesia hattı, Avrupa'nın en yoğun otomotiv yan sanayi bölgelerinden biridir; Wrocław ve Poznań çevresi ise uluslararası e-ticaret depolarının ve fulfillment merkezlerinin toplandığı koridordur. Bu bölgelerdeki üretim tesislerine, tedarik zinciri depolarına ve dağıtım merkezlerine randevulu teslimat yapıyor, aracı alıcının mal kabul saatlerine göre planlıyoruz.",
      ],
    },
    {
      heading: "İhracatçı İçin Panelvan Avantajı: Yükünüz Depoda Beklemez",
      paragraphs: [
        "Sektör ortalamasında parsiyel TIR taşımacılığı Türkiye'den Polonya'ya 7-15 gün sürer: yükünüz önce toplama deposuna girer, araç dolana kadar bekler, ara depolarda elleçlenir ve dağıtım sırasına göre teslim edilir. Acil parti sevkiyatı, müşteriye tarih verilmiş numune veya üretim hattını bekleten bir komponent için bu takvim çoğu zaman kabul edilemez.",
        "RouteEU panelvan ekspreste araç sizin yükünüz için kalkar ve dört fark yaratır:",
      ],
      list: [
        "Aktarmasız taşıma: Yük fabrikanızdan çıkar, Polonya'daki alıcıya kadar aynı araçta kalır; elleçleme kaynaklı hasar ve kayıp riski en aza iner.",
        "Hafta sonu dahil seyir: Panelvan araçlar TIR yasağından muaftır; cuma günü yüklenen mal pazartesiyi beklemeden yolda ilerler.",
        "Çift şoför: Araç yasal molalar dışında durmaz; İstanbul-Varşova hattı 24-40 saatte tamamlanır.",
        "Parsiyel seçenek: Yükünüz aracı doldurmuyorsa aynı güzergahtaki az sayıda gönderiyle birleştirilen hızlı parsiyel seçeneğiyle bütçenizi korursunuz.",
      ],
    },
    {
      heading: "E-Ticaret Depoları ve Fulfillment Teslimatları",
      paragraphs: [
        "Polonya, uygun operasyon maliyetleri sayesinde Avrupa'nın e-ticaret depo üssü haline geldi; birçok pazaryerinin fulfillment merkezleri Wrocław, Poznań ve Łódź çevresinde konumlanıyor. Türkiye'den bu depolara stok besleyen satıcılar için randevu saatine sadık, kısa transit süreli teslimat kritik önemdedir: randevusunu kaçıran araç yeni tarih bekler, stok tükenir, satış sıralaması düşer.",
        "RouteEU olarak e-ticaret depo teslimatlarında randevu yönetimini üstleniyor, araç ve şoför bilgilerini depoya önceden bildiriyor, teslim evraklarını dijital olarak paylaşıyoruz. Amazon depolarına düzenli sevkiyat yapıyorsanız bu ihtiyaç için tasarlanmış Amazon FBA lojistik hizmetimize göz atabilirsiniz.",
      ],
    },
    {
      heading: "Polonya'ya En Çok Hangi Yükler Gidiyor?",
      paragraphs: [
        "Panelvan ekspres, hacmi bir TIR'ı doldurmayan ancak zamanı kritik olan yükler için tasarlanmıştır. Polonya hattında en sık taşıdığımız yük grupları şunlardır:",
      ],
      list: [
        "Otomotiv ve beyaz eşya yan sanayi: Silesia ve Wrocław çevresindeki montaj hatlarına giden kalıp, döküm, plastik enjeksiyon ve kablo grubu parçaları; hattın durmaması için saatlerle ölçülen sevkiyatlar.",
        "Acil parti ve eksik tamamlama: Ana sevkiyattan geride kalan ya da kalite kontrolde ayrılan partinin gecikmeden yerine ulaştırılması.",
        "Numune ve prototip: Polonyalı alıcıya onay için giden ilk numuneler, katalog ve deneme partileri; satış süreci haftalarca beklemeden ilerler.",
        "Fuar malzemesi: Poznań ve Varşova'daki uluslararası fuarlara stant, tanıtım ürünü ve sergi malının tarihinde ulaştırılması.",
        "E-ticaret stoku: Pazaryeri depolarına düzenli aralıklarla giden birkaç paletlik karma ürün sevkiyatı.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Polonya'ya sevkiyatınız dört adımda tamamlanır; her adımı uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktanızı seçin, tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Aracımız belirlenen tarihte fabrika, depo veya ofis adresinize gelir; yükünüz güvenle araca alınır.",
        "Taşıma: Gümrük işlemlerinin ardından yük aktarmasız olarak Polonya'ya hareket eder; takip sayfasında sevkiyatınızın durumu yolda olarak görünür, güzergâh harita üzerinde gösterilir.",
        "Teslim: Araç Polonya'daki alıcı adresine ulaşır, yük kapıda imza karşılığı teslim edilir.",
      ],
    },
    {
      heading: "Gümrük: ATR Belgesi ile AB İçinde Serbest Dolaşım",
      paragraphs: [
        "Polonya bir Avrupa Birliği üyesidir; Türkiye'den giden ticari mallar Gümrük Birliği kapsamında ATR dolaşım belgesi ve ticari fatura ile işlem görür. Gümrük çıkışı Türkiye'de yapılır, giriş işlemi malın AB'ye girdiği kapıda tamamlanır; AB sınırından sonra Polonya'ya kadar ek bir gümrük durağı yoktur. Ekibimiz evrak hazırlığında yol gösterir ve süreci sizin adınıza koordine eder.",
        "Ürün grubunuza özel vergi, kota veya belge gereklilikleri bulunabilir; kesin bilgi için güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Polonya'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Kraków'a teslimat tipik olarak 22-36 saat, Varşova'ya 24-40 saat, Poznań'a 28-42 saat sürer. Parsiyel TIR taşımacılığında aynı güzergah 7-15 gün alabilir.",
    },
    {
      question: "Polonya'ya kargo fiyatı ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre değişir: örneğin İstanbul-Varşova hattında " +
        priceRange("Varşova") +
        " aralığındadır. Parsiyel gönderilerde yalnızca kullandığınız hacim için ödeme yaparsınız. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek anında teklif alabilirsiniz.",
    },
    {
      question: "Polonya'ya palet gönderebilir miyim?",
      answer:
        "Evet. Panelvanlarımız yaklaşık 1.300 kg ve 5 europalet kapasitelidir. Tek palet için parsiyel, 5 palete kadar yükler için komple araç seçeneği sunuyoruz; paletler forklift veya transpalet ile yüklenebilecek şekilde hazırlanmalıdır.",
    },
    {
      question: "Polonya'ya düzenli sefer yapıyor musunuz?",
      answer:
        "Evet, Polonya güzergahında haftalık düzenli çıkışlarımız vardır. Düzenli tedarik sevkiyatı yapan üretici ve e-ticaret firmaları için sabit günlü, sözleşmeli taşıma programı da oluşturuyoruz.",
    },
    {
      question: "Polonya'ya gönderi için hangi gümrük evrakları gerekiyor?",
      answer:
        "Ticari gönderilerde temel evraklar ticari fatura, ATR dolaşım belgesi ve çeki listesidir. Ekibimiz evrak hazırlığında size yol gösterir; ürününüze özel gereklilikler için güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Sevkiyatımı nasıl takip ederim?",
      answer:
        "Her gönderiye bir takip numarası tanımlanır. Sevkiyatınızın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) takip sayfasından görür, güzergâhı harita üzerinden izlersiniz; takip bağlantısını Polonya'daki alıcınızla paylaşarak mal kabul planlamasını kolaylaştırabilirsiniz. Aracın o anki yerini WhatsApp'tan sorabilirsiniz.",
    },
    {
      question: "Polonya'dan Türkiye'ye dönüş yükü taşıyor musunuz?",
      answer:
        "Evet, taşımalarımız çift yönlüdür. Polonya'daki tedarikçinizden Türkiye'ye gelen komponent, iade edilen ürün veya boş taşıma kasaları aynı panelvanla kapıdan kapıya taşınır. Gidiş ve dönüş yükünü birlikte planladığınızda araç boş dönmediği için toplam maliyetiniz de düşer.",
    },
    {
      question: "Numune veya tek palet gibi küçük gönderiler için panelvan mantıklı mı?",
      answer:
        "Teslim tarihi kritikse evet. Tek palet veya birkaç koli için komple araç yerine hızlı parsiyel seçeneğimizi kullanırsınız: yükünüz aynı güzergahtaki az sayıda gönderiyle birleştirilir, yine aktarmasız gider ve yalnızca kullandığınız hacim için ödersiniz. Aciliyet yoksa ve tek küçük koli söz konusuysa uluslararası kurye daha ekonomik olabilir; size uymayan bir hizmeti önermeyiz.",
    },
  ],
  related: [
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan & Panelvan Ekspres Taşımacılık" },
    { slug: "parsiyel-tasimacilik", label: "Avrupa'ya Parsiyel Taşımacılık" },
    { slug: "amazon-fba-lojistik", label: "Amazon FBA Lojistik Taşımacılığı" },
    { slug: "acil-yedek-parca-sevkiyati", label: "Acil Yedek Parça Sevkiyatı" },
  ],
};

export default polonyaKargo;
