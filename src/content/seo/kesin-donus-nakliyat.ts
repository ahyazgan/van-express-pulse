import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const kesinDonusNakliyat: SeoPageData = {
  slug: "kesin-donus-nakliyat",
  title: "Kesin Dönüş Nakliyat | Almanya'dan Türkiye'ye Eşya Taşıma | RouteEU",
  description:
    "Almanya'dan Türkiye'ye kesin dönüş nakliyat: ev eşyanız kapıdan kapıya, sigortalı ve aktarmasız taşınır. Gümrük sürecinde rehberlik, anında fiyat teklifi.",
  h1: "Almanya'dan Türkiye'ye Kesin Dönüş ve Eşya Taşıma",
  intro: [
    "Yıllarca Avrupa'da yaşadıktan sonra Türkiye'ye kesin dönüş yapmak büyük bir karar; ev eşyanızın taşınması ise bu kararın en çok kafa karıştıran ayağıdır. RouteEU Express, Almanya başta olmak üzere Hollanda, Belçika, Avusturya ve Fransa'dan Türkiye'ye kapıdan kapıya kesin dönüş nakliyatı yapar: eşyalarınız Avrupa'daki adresinizden alınır, araç değiştirmeden ve ara depoya girmeden Türkiye'deki yeni adresinize kadar aynı panelvanla gider.",
    "Aktarmasız taşıma özellikle ev eşyasında önemlidir; eşyanız elden ele geçmediği için hasar ve kayıp riski en aza iner. Tüm gönderiler sigortalı taşınır, 7/24 canlı GPS takibiyle eşyanızın yolun neresinde olduğunu telefonunuzdan anlık görürsünüz. Panelvan araçlar hafta sonu TIR seyir yasağından muaf olduğu için taşımanız cumartesi-pazar da kesintisiz devam eder; çift şoför uygulamasıyla araç mola vermeden yol alır.",
  ],
  transitTable: {
    caption: "Avrupa'dan Türkiye'ye Kesin Dönüş Transit Süreleri",
    rows: [
      { destination: "Berlin → İstanbul", time: "24-36 saat" },
      { destination: "Frankfurt → İstanbul", time: "28-40 saat" },
      { destination: "Köln → İstanbul", time: "30-44 saat" },
      { destination: "Viyana → İstanbul", time: "20-30 saat" },
      { destination: "Amsterdam → İstanbul", time: "32-48 saat" },
      { destination: "Brüksel → İstanbul", time: "32-48 saat" },
      { destination: "Paris → İstanbul", time: "28-44 saat" },
    ],
  },
  priceTable: {
    caption: "Avrupa'dan Türkiye'ye Komple Panelvan Fiyatları",
    rows: [
      { route: "Berlin → İstanbul", price: priceRange("Berlin") },
      { route: "Köln → İstanbul", price: priceRange("Köln") },
      { route: "Münih → İstanbul", price: priceRange("Münih") },
      { route: "Amsterdam → İstanbul", price: priceRange("Amsterdam") },
      { route: "Brüksel → İstanbul", price: priceRange("Brüksel") },
      { route: "Viyana → İstanbul", price: priceRange("Viyana") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma içindir; aynı güzergahta dönüş yönü navlunu gidiş yönüyle benzer aralıktadır. Sezon, yakıt ve talebe göre değişir; kesin fiyat için uygulamadan anında teklif alın. Komple araç doldurmayan eşyalar hacme göre fiyatlandırılır.",
  },
  sections: [
    {
      heading: "Kesin Dönüş Nakliyatı Kimler İçin?",
      paragraphs: [
        "Kesin dönüş nakliyatı yalnızca emeklilik sonrası Türkiye'ye yerleşenler için değildir. Almanya'daki işini kapatıp Türkiye'de devam ettirecek esnaf ve girişimciler, eğitimini tamamlayıp dönen öğrenciler, tayin veya iş değişikliğiyle Türkiye'ye atanan çalışanlar ve Avrupa'daki evini boşaltıp eşyalarını Türkiye'deki aile evine göndermek isteyenler bu hizmetten yararlanır.",
        "Eşyanızın hacmi de esnektir: komple bir evin eşyası için panelvanın tamamını ayırabilir, birkaç koli ve beyaz eşyadan oluşan daha küçük yükler için hacme göre fiyatlandırılan taşıma seçeneğini kullanabilirsiniz. Küçük hacimli gönderilerde sayısal fiyat yerine uygulama üzerinden anında teklif alarak net rakamı saniyeler içinde görürsünüz.",
      ],
    },
    {
      heading: "Kesin Dönüşte Gümrük Muafiyeti: Genel Çerçeve",
      paragraphs: [
        "Türkiye mevzuatı, yurtdışında belirli bir süre yerleşik olarak yaşamış kişilerin kesin dönüşlerinde kullanılmış ev eşyalarını belirli şartlarla gümrük vergisinden muaf olarak getirmesine imkân tanır. Muafiyetin temel mantığı şudur: eşyanın size ait ve kullanılmış olması, yurtdışındaki ikametinizi gerçekten sonlandırdığınızı belgelemeniz ve eşyanın ticari amaç taşımaması. Yurtdışında yaşadığınız süre, ikamet nakil belgesi ve başvuru zamanlaması gibi konularda mevzuatta şartlar ve süre sınırları bulunur; bu şartlar zaman zaman güncellenir.",
        "Bu nedenle taşıma tarihinizi kesinleştirmeden önce güncel muafiyet şartlarını mutlaka bağlı bulunduğunuz konsolosluğa ve bir gümrük müşavirine teyit ettirin. RouteEU ekibi hangi evrakların hazırlanması gerektiği konusunda size yol gösterir, ancak muafiyet başvurusunun resmi muhatabı gümrük idaresidir; buradaki anlatım genel bilgilendirme amaçlıdır ve resmi danışmanlık yerine geçmez.",
      ],
    },
    {
      heading: "Süreç Adım Adım Nasıl İşliyor?",
      paragraphs: [
        "Kesin dönüş taşımasını dört net adımda tamamlıyoruz. Amacımız, siz uçağa binmeden önce eşyanızın yolda olması ve Türkiye'ye vardığınızda sizi kapınızda karşılamasıdır:",
      ],
      list: [
        "Adresten alım: Aracımız Almanya, Hollanda, Belçika, Avusturya veya Fransa'daki adresinize gelir; eşyalar araç içinde sabitlenerek yüklenir. Depoya götürme veya şubeye bırakma zorunluluğu yoktur.",
        "Evrak hazırlığı: Eşya listesi (paket listesi), kimlik ve ikamet belgeleriniz ile varsa muafiyet evrakınız kontrol edilir. Hangi belgenin nereden alınacağı konusunda ekibimiz sizi önceden bilgilendirir.",
        "Sınır ve gümrük geçişi: Yükünüz güzergah üzerindeki gümrük işlemlerini aynı araç içinde tamamlar. Panelvan sınıfı araçlar TIR kuyruğuna girmeden işlem gördüğü için sınırda kaybedilen süre kısalır.",
        "Türkiye'de teslim: Eşyanız İstanbul'a veya Türkiye'deki hangi adrese gidecekse oraya, yüklendiği araçtan indirilerek teslim edilir. Tüm süreç boyunca canlı GPS takibi açıktır.",
      ],
    },
    {
      heading: "Sadece Almanya Değil: Hollanda, Belçika, Avusturya ve Fransa'dan Dönüş",
      paragraphs: [
        "Kesin dönüş denince akla ilk Almanya gelse de, taşıma ağımız tüm Batı ve Orta Avrupa'yı kapsar. Amsterdam, Rotterdam ve Eindhoven'dan; Brüksel ve Anvers'ten; Viyana, Graz ve Salzburg'dan; Paris, Strazburg ve Lyon'dan Türkiye'ye aynı kapıdan kapıya modelle taşıma yapıyoruz. Farklı şehirlerde eşyası olan aileler için güzergah üzerinde birden fazla adresten yükleme de planlanabilir.",
        "Dönüş yönü taşımalarında transit süreler gidiş yönüyle aynı mantıkla işler: Viyana'dan İstanbul'a 20-30 saat, Berlin'den 24-36 saat, Amsterdam veya Brüksel'den 32-48 saat tipik aralıklardır. Parsiyel TIR taşımacılığında haftalar süren bu yolculuk, size ayrılmış panelvanla çoğu güzergahta 1-2 güne iner.",
      ],
    },
    {
      heading: "Ev Eşyanız Neden Panelvanla Taşınmalı?",
      paragraphs: [
        "Ev eşyası, ticari yükten farklı olarak yeri doldurulamaz parçalar içerir: anılarınız, mobilyalarınız, elektroniğiniz. Parsiyel taşımada eşyanız başka yüklerle aynı TIR'da yolculuk eder, aktarma depolarında elden ele geçer. Panelvan modelinde ise araç yalnızca sizin eşyanız için ayrılır; yükleyen ekip ile teslim eden ekip aynıdır ve eşya yol boyunca araçtan hiç inmez.",
        "Buna hafta sonu TIR yasağı muafiyeti ve çift şoför eklenince ortaya öngörülebilir bir teslim tarihi çıkar. Türkiye'deki yeni evinize taşınma, tadilat veya iş başlangıcı planınızı net bir takvime bağlayabilirsiniz.",
      ],
    },
  ],
  faq: [
    {
      question: "Almanya'dan Türkiye'ye ev eşyası göndermek kaç gün sürer?",
      answer:
        "Komple panelvan taşımada Berlin'den İstanbul'a tipik transit süre 24-36 saat, Köln ve çevresinden 30-44 saattir. Genel olarak Avrupa'dan Türkiye'ye teslimatlar 24-72 saat aralığında tamamlanır. Parsiyel TIR taşımacılığında aynı yolculuk 1-3 haftayı bulabilir.",
    },
    {
      question: "Kesin dönüşte ev eşyası gümrük vergisinden muaf mı?",
      answer:
        "Yurtdışında yerleşik olarak yaşamış kişilerin kullanılmış ev eşyaları, mevzuattaki şartların sağlanması halinde muafiyet kapsamına girebilir. Şartlar (ikamet süresi, evrak, başvuru zamanlaması) güncellenebildiği için taşıma öncesinde güncel durumu konsolosluğunuza ve bir gümrük müşavirine mutlaka teyit ettirin.",
    },
    {
      question: "Almanya'dan Türkiye'ye eşya gönderme fiyatları ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre değişir: örneğin Berlin-İstanbul hattında " +
        priceRange("Berlin") +
        ", Köln-İstanbul hattında " +
        priceRange("Köln") +
        " aralığındadır. Komple araç doldurmayan koli ve eşya gönderileri hacme göre fiyatlandırılır; uygulamadan adreslerinizi seçerek anında teklif alabilirsiniz.",
    },
    {
      question: "Eşyalarımı kendim mi paketlemeliyim?",
      answer:
        "Eşyalarınızı kendiniz paketleyebilirsiniz; kırılacak parçaların ayrıca sarılması ve kolilerin oda bazında etiketlenmesi süreci hızlandırır. Yükleme sırasında eşyalar araç içinde sabitlenir. Gümrük işlemleri için taşınan eşyaların listesinin (paket listesi) hazırlanması gerekir; şablon konusunda ekibimiz yardımcı olur.",
    },
    {
      question: "Hollanda veya Belçika'dan da kesin dönüş taşıması yapıyor musunuz?",
      answer:
        "Evet. Almanya'nın yanı sıra Hollanda, Belçika, Avusturya ve Fransa'dan Türkiye'ye kapıdan kapıya taşıma yapıyoruz. Amsterdam veya Brüksel'den İstanbul'a tipik transit süre 32-48 saat, Viyana'dan 20-30 saattir.",
    },
    {
      question: "Eşyam yolda güvende mi, takip edebilir miyim?",
      answer:
        "Tüm gönderiler sigortalı taşınır ve aktarmasız gittiği için eşyanız yol boyunca araçtan inmez. Her taşımaya 7/24 canlı GPS takibi tanımlanır; aracın anlık konumunu gönderi takip sayfasından harita üzerinde izleyebilirsiniz.",
    },
  ],
  related: [
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "hollanda-kargo", label: "Hollanda'ya Panelvan Kargo" },
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan & Panelvan Ekspres Taşımacılık" },
  ],
};

export default kesinDonusNakliyat;
