import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const belcikadanTurkiyeyeNakliyat: SeoPageData = {
  slug: "belcikadan-turkiyeye-nakliyat",
  title: "Belçika'dan Türkiye'ye Nakliyat ve Kargo | RouteEU",
  description:
    "Belçika'dan Türkiye'ye kapıdan kapıya nakliyat. Brüksel, Anvers, Gent ve Liège'den eşyanız 30-46 saatte Türkiye'de. Sigortalı, aktarmasız, GPS takipli taşıma.",
  h1: "Belçika'dan Türkiye'ye Kapıdan Kapıya Nakliyat",
  intro: [
    "Belçika'dan Türkiye'ye eşya göndermek çoğu zaman sabır işi sayılır: koliler Brüksel veya Anvers'teki bir depoda haftalarca sıra bekler, teslim tarihi sorulduğunda net bir cevap alınamaz. RouteEU Express'te işleyiş farklıdır. Türkiye-Belçika hattında araçlarımız zaten iki yönlü sefer yaptığından dönüş yükünüz için ayrılmış bir panelvan Belçika'daki adresinize gelir ve eşyanız aktarmasız, depoya uğramadan ve beklemeden 30-46 saat içinde Türkiye'deki kapıya teslim edilir.",
    "Brüksel'in Schaerbeek semtinden Anvers'e, Gent'ten Limburg bölgesindeki Genk'e kadar Belçika'nın her adresinden yük alıyoruz. Taşıma çift şoförle kesintisiz yapılır, gönderiniz sigorta güvencesindedir ve 7/24 canlı GPS takibiyle aracın hangi ülkede, hangi yolda olduğunu anbean görürsünüz.",
  ],
  transitTable: {
    caption: "Belçika - Türkiye Transit Süreleri",
    rows: [
      { destination: "Brüksel → İstanbul", time: "30-46 saat" },
      { destination: "Anvers → İstanbul", time: "30-46 saat" },
      { destination: "Gent → İstanbul", time: "30-46 saat" },
      { destination: "Liège → İstanbul", time: "28-44 saat" },
    ],
  },
  priceTable: {
    caption: "Belçika'dan Türkiye'ye Panelvan Nakliyat Fiyatları",
    rows: [
      { route: "Brüksel → İstanbul", price: priceRange("Brüksel") },
      { route: "Anvers → İstanbul", price: priceRange("Anvers") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Kimlerin Yükünü Taşıyoruz?",
      paragraphs: [
        "Belçika-Türkiye hattındaki müşterilerimizin başında, Brüksel, Anvers, Gent ve özellikle Limburg bölgesinde (Genk, Beringen, Houthalen) köklü bir geçmişe sahip Türk toplumu gelir. Türkiye'deki aileye gönderilen koliler, çeyiz ve düğün eşyası, mobilya ve beyaz eşya en sık taşıdığımız yüklerdendir. Türkiye'ye temelli dönüş hazırlığındaysanız iki yol sunuyoruz: dönüşten önce eşyalarınızın bir kısmını kısmi taşımayla gönderebilir, evin tamamı için kesin dönüş nakliyat hizmetimizden yararlanabilirsiniz.",
        "İkinci büyük grup ticari müşterilerdir. Anvers, Avrupa'nın en işlek liman kentlerinden biri olduğu için Belçika üzerinden mal getiren Türk ithalatçılar, makine ve yedek parça alan üreticiler ile numune bekleyen firmalar bu hattı yoğun kullanır. Belçikalı alıcılardan dönen e-ticaret iadeleri ve fuar sonrası geri taşınan stand malzemeleri de panelvan ekspresin hız avantajından yararlanan yükler arasındadır.",
      ],
    },
    {
      heading: "Belçika'nın Her Şehrinden Kapıdan Alım",
      paragraphs: [
        "Belçika'da nereye araç gönderemeyeceğimiz bir adres yoktur. Brüksel, Anvers, Gent, Charleroi, Liège, Brugge, Leuven, Mechelen, Hasselt, Genk ve Namur dahil ülkenin tüm şehir ve kasabalarından alım yapıyoruz. Ülkenin bir ucundan diğerine iki saatte ulaşılabildiği için alım randevoları aynı gün içinde bile planlanabilir. Eşyanızı hiçbir depoya götürmezsiniz; panelvan kapınıza gelir, yükleme gözünüzün önünde yapılır ve eşya Türkiye'deki teslimata kadar aynı araçta kalır.",
      ],
    },
    {
      heading: "Rakip Model 7-14 Gün Sürerken RouteEU 30-46 Saatte Teslim Eder",
      paragraphs: [
        "Belçika'dan Türkiye'ye klasik taşıma modeli üç bekleme noktası içerir: kolinin depoya alınması, TIR dolana kadar geçen günler ve Türkiye'de aktarma merkezindeki dağıtım sırası. Sektörde bu zincirin toplamı genellikle 7-14 gün olarak verilir; yoğun yaz aylarında 3 haftaya uzadığı olur. RouteEU'nun panelvan ekspres modelinde bu üç bekleme de yoktur; araç sizin yükünüzle yola çıkar ve durmadan Türkiye'ye iner.",
        "Hız farkını mümkün kılan unsurlar:",
      ],
      list: [
        "Depolama aşaması yok: Eşya alındığı gün güzergâha çıkar; konsolidasyon beklemesi tamamen ortadan kalkar.",
        "Çift şoför düzeni: Sürücüler dönüşümlü direksiyona geçtiği için araç mola kaynaklı zaman kaybetmez.",
        "Hafta sonu muafiyeti: Güzergâhtaki ülkelerin hafta sonu TIR seyir yasakları panelvanları bağlamaz; yük cumartesi ve pazar da ilerler.",
        "Aktarmasız taşıma: Eşya tek araçta seyahat ettiğinden elleçleme kaynaklı hasar riski en düşük seviyededir.",
      ],
    },
    {
      heading: "Sözleşmeli, Sigortalı ve Takipli Taşıma",
      paragraphs: [
        "Belçika'dan çıkan her yük taşıma sigortasıyla korunur; Anvers'ten getirilen ticari bir parti ya da Genk'ten yollanan çeyiz eşyası fark etmeksizin teminat kapsamı teklif aşamasında netleştirilir. Fiyat, alım ve teslim adresleri, tahmini süre ve eşya listesi yazılı sözleşmeyle kayıt altına alınır; yol boyunca ek ücret talebiyle karşılaşmazsınız. Yüklemede düzenlenen tutanak, Türkiye'de alıcının imzaladığı teslim belgesiyle kapatılır. Bu süre zarfında canlı GPS takibi hem gönderici hem alıcı için açıktır ve eşya yalnızca sözleşmede yazan adrese, kapıda teslim edilir.",
      ],
    },
    {
      heading: "Türkiye Gümrüğünde Sizi Ne Bekler?",
      paragraphs: [
        "Türkiye'ye giriş yapan yüklerde uygulanacak işlem, eşyanın statüsüne göre değişir. Kullanılmış kişisel eşyalar ve zati eşya kapsamındaki gönderiler belirli şartlarda gümrük vergisinden muaf tutulabilir; kesin dönüş yapanların ev eşyasında bu muafiyet yurtdışında ikamet süresi gibi koşullara bağlıdır. Ticari mallar, numuneler ve iadeler ise fatura eşliğinde ithalat beyanına tabidir.",
        "Taşıma başlamadan önce gönderinizin hangi kapsama girdiğini birlikte belirliyor ve gereken evrak listesini size iletiyoruz. Muafiyet şartları ve vergi uygulamaları zaman içinde değişebildiğinden, kendi gönderiniz için kesin bilgiyi güncel mevzuat üzerinden gümrük müşavirinizle teyit etmenizi öneririz.",
      ],
    },
    {
      heading: "Taşıma Süreci: Dört Net Adım",
      paragraphs: [
        "Belçika'dan Türkiye'ye taşımanızın tamamı dört adımda ilerler ve her aşama uygulamadan görünür:",
      ],
      list: [
        "Teklif: Belçika'daki alım adresini ve Türkiye'deki varış ilini uygulamaya girin; tahmini fiyat anında karşınızda.",
        "Alım: Panelvan randevu saatinde adresinize gelir; eşya sayım ve tutanakla teslim alınır, güvenli şekilde yüklenir.",
        "Taşıma: Gümrük evrakları tamamlandığında araç aktarmasız olarak Türkiye yönüne hareket eder; GPS konumunu 7/24 izlersiniz.",
        "Teslim: Eşyanız Türkiye'deki adreste kapıda, imza karşılığında alıcıya teslim edilir.",
      ],
    },
    {
      heading: "Türkiye'de Adres Neresi Olursa Olsun Teslimat",
      paragraphs: [
        "Varış tarafında teslimat ağımız tüm Türkiye'yi kapsar. Brüksel'den yüklenen araç İstanbul'a da gider, Emirdağ'a da — Belçika'daki Türk toplumunun önemli bölümünün memleketi olan Afyonkarahisar ve çevresi dahil 81 ilin tamamına, ilçe ve köy adreslerine kadar kapıda teslimat yapıyoruz. Alıcınızın şubeye gitmesi, kargo beklemek için gün ayırması gerekmez; eşya doğrudan adrese ulaşır.",
      ],
    },
  ],
  faq: [
    {
      question: "Belçika'dan Türkiye'ye kargo kaç günde gelir?",
      answer:
        "Panelvan ekspres taşımada Brüksel, Anvers veya Gent'ten İstanbul'a teslimat tipik olarak 30-46 saat, Liège çıkışında 28-44 saat sürer. Depolu parsiyel modelde aynı taşıma çoğunlukla 7-14 gün, yoğun sezonda 3 haftaya kadar uzayabilir.",
    },
    {
      question: "Belçika'dan Türkiye'ye nakliyat ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergâha göre belirlenir: Brüksel-İstanbul hattında " +
        priceRange("Brüksel") +
        ", Anvers-İstanbul hattında " +
        priceRange("Anvers") +
        " aralığındadır. Kesin rakam için uygulamadan adreslerinizi seçerek saniyeler içinde teklif alabilirsiniz.",
    },
    {
      question: "Belçika'da eşyamı nereden alıyorsunuz?",
      answer:
        "Doğrudan adresinizden. Brüksel, Anvers, Gent, Genk veya Belçika'nın herhangi bir kasabası — panelvan kapınıza gelir ve yükleme orada yapılır. Depoya koli bırakmanız veya bir toplama gününü beklemeniz gerekmez.",
    },
    {
      question: "Türkiye'ye girişte gümrük vergisi ödenir mi?",
      answer:
        "Eşyanın niteliğine göre değişir. Kullanılmış kişisel eşyalar şartları karşıladığında muafiyetten yararlanabilir; yeni ürünler ve ticari mallar ithalat vergisine tabi olabilir. Evrak hazırlığında size adım adım rehberlik ediyoruz; gönderinize özel kesin durumu güncel mevzuat üzerinden gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Birkaç koli göndermek istiyorum, parsiyel olur mu?",
      answer:
        "Olur. Aracı komple kiralamak zorunda değilsiniz; aynı güzergâhtaki yüklerle paylaşımlı parsiyel seçeneğiyle birkaç koliden birkaç palete kadar gönderi yapabilirsiniz. Komple panelvan yaklaşık 1.300 kg / 5 palet kapasite sunar.",
    },
    {
      question: "Belçika'dan Türkiye'ye eşya nasıl gönderilir?",
      answer:
        "Uygulamadan Belçika'daki alım adresini ve Türkiye'deki teslimat ilini girerek tahmini fiyatı görür, size uygun alım tarihini seçersiniz. Ekibimiz gümrük için hangi evrakların gerekeceğini önceden bildirir; panelvan randevu saatinde kapınıza gelir, eşyanız yüklenir ve aktarmasız olarak Türkiye'deki adrese kapıda teslim edilir.",
    },
    {
      question: "Belçika'dan gönderdiğim eşya sigortalı mı?",
      answer:
        "Evet. Tüm gönderiler yükleme anından teslimata kadar taşıma sigortası kapsamındadır. Değerli eşya veya ticari mal için teminat tutarını teklif aşamasında birlikte belirliyoruz; sigorta kapsamı ve şartları sözleşmenizde yazılı olarak yer alır.",
    },
    {
      question: "Eşyamın nerede olduğunu nasıl görürüm?",
      answer:
        "Her gönderiye canlı GPS takibi tanımlanır. Belçika'dan çıkıştan Türkiye'deki teslim anına kadar aracın anlık konumunu 7/24 uygulamadaki harita üzerinden takip edersiniz.",
    },
  ],
  related: [
    { slug: "belcika-kargo", label: "Türkiye'den Belçika'ya Panelvan Kargo" },
    { slug: "kesin-donus-nakliyat", label: "Kesin Dönüş Nakliyat" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
  ],
};

export default belcikadanTurkiyeyeNakliyat;
