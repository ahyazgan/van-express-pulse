import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const belcikaKargo: SeoPageData = {
  slug: "belcika-kargo",
  title: "Belçika'ya Panelvan Kargo | Kapıdan Kapıya Ekspres | RouteEU",
  description:
    "Türkiye'den Belçika'ya kapıdan kapıya panelvan kargo. Brüksel, Anvers, Gent'e 32-48 saatte sigortalı ekspres taşıma ve canlı GPS takip. Anında fiyat alın.",
  h1: "Türkiye'den Belçika'ya Kapıdan Kapıya Kargo",
  intro: [
    "Türkiye'den Belçika'ya kargo göndermenin alışılmış yolu, yükünüzün başka gönderilerle birleştirilip TIR'la yola çıktığı parsiyel taşımadır; bu yöntemde teslimat çoğu zaman haftalar alır ve yükünüz birden fazla depoya uğrar. RouteEU Express bunun yerine yükünüze ayrılmış bir panelvanla çalışır: eşyanız Türkiye'deki adresinizden alınır, araç değiştirmeden ve depo beklemeden Brüksel, Anvers, Gent ya da Belçika'nın herhangi bir adresine 32-48 saat içinde teslim edilir.",
    "Panelvan sınıfı araçlar hafta sonu TIR seyir yasağından muaf olduğu için cuma günü yüklenen gönderi pazartesiyi beklemeden yola devam eder. Çift şoför uygulamasıyla araç uzun molalar vermez, transit süre kısalır. Tüm gönderiler sigortalı taşınır ve 7/24 canlı GPS takibiyle yükünüzün hangi ülkede, hangi otoyolda olduğunu telefonunuzdan anlık olarak izlersiniz. Fiyat öğrenmek için kimseyi aramanız gerekmez; uygulamadan kalkış ve varış adresinizi seçerek anında teklif alırsınız.",
  ],
  transitTable: {
    caption: "Türkiye - Belçika Transit Süreleri",
    rows: [
      { destination: "İstanbul → Brüksel", time: "32-48 saat" },
      { destination: "İstanbul → Anvers", time: "32-48 saat" },
      { destination: "İstanbul → Liège", time: "30-46 saat" },
      { destination: "İstanbul → Gent", time: "34-50 saat" },
      { destination: "İstanbul → Charleroi", time: "34-50 saat" },
      { destination: "İstanbul → Brugge", time: "36-52 saat" },
    ],
  },
  priceTable: {
    caption: "Belçika'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Brüksel", price: priceRange("Brüksel") },
      { route: "İstanbul → Anvers", price: priceRange("Anvers") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Koli ve parsiyel gönderiler hacme göre fiyatlandırılır — kesin fiyat için uygulamadan anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Belçika'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Belçika, Avrupa'nın en kompakt ülkelerinden biridir; bir ucundan diğerine karayoluyla birkaç saatte geçilir. Bu yüzden kapıdan kapıya çalışan bir panelvan için ülkede ulaşılamayacak adres yoktur. Başkent Brüksel ve çevresi, liman kenti Anvers, Gent, Charleroi, Liège, Brugge, Leuven, Mechelen, Hasselt, Genk, Namur ve Kortrijk dahil olmak üzere Belçika'nın tüm şehir ve kasabalarına teslimat yapıyoruz.",
        "Yükünüz Türkiye'de hangi adresteyse oradan alınır; Belçika'da ev, iş yeri, depo veya şantiye — hangi adrese gidecekse aynı araçla oraya teslim edilir. Ara depo, aktarma merkezi veya şubeden teslim alma zorunluluğu yoktur.",
      ],
    },
    {
      heading: "Panelvan Ekspres Taşımanın Avantajları",
      paragraphs: [
        "Türkiye-Belçika hattında panelvan taşımacılığını parsiyel TIR'dan ayıran fark yalnızca hız değildir; sürecin her adımı daha öngörülebilirdir:",
      ],
      list: [
        "Hafta sonu yasağı yok: TIR'ların tabi olduğu hafta sonu seyir yasağı panelvanları kapsamaz; yükünüz cumartesi ve pazar da yol alır.",
        "Çift şoför: Şoförler dönüşümlü sürdüğü için araç uzun dinlenme molası vermeden ilerler, İstanbul'dan Brüksel'e teslimat 32-48 saatte tamamlanır.",
        "Aktarmasız taşıma: Eşyanız yükleme anından teslimata kadar aynı araçta kalır; depoya girmez, elden ele geçmez, hasar ve kayıp riski en aza iner.",
        "Sınırda avantaj: Panelvan sınıfı araçlar gümrük kapılarında TIR kuyruğuna girmeden işlem görür; sınır geçişleri saatler değil, çok daha kısa sürer.",
        "Canlı takip: 7/24 GPS takibiyle aracın konumunu harita üzerinde görürsünüz; 'yüküm nerede?' sorusunu kimseye sormanız gerekmez.",
      ],
    },
    {
      heading: "Belçika'daki Türk Topluluğuna Eşya Gönderimi",
      paragraphs: [
        "Belçika, Avrupa'daki en köklü Türk topluluklarından birine ev sahipliği yapar; Brüksel, Anvers, Gent ve Limburg bölgesindeki Genk gibi şehirlerde geniş bir Türkçe konuşan topluluk yaşar. Türkiye'deki ailesinden eşya bekleyenler, yeni eve çıkanlar veya memleketten özel eşyalarını getirtmek isteyenler için kapıdan kapıya panelvan taşıma en pratik yoldur: eşyanız Türkiye'deki evden alınır, Belçika'daki kapıya kadar aynı araçla gelir.",
        "Çeyiz, mobilya, beyaz eşya, kişisel eşya kolileri, bebek eşyası veya aile yadigarı özel parçalar — hepsi sigortalı ve tek elden taşınır. Komple panelvan doldurmayacak kadar küçük gönderiler için de çözümümüz var: koli ve parça eşya gönderileri hacme göre fiyatlandırılır, uygulamadan anında teklif alarak gönderinizi planlayabilirsiniz.",
        "Belçika'da yaşayıp Türkiye'ye kalıcı dönüş yapmayı planlıyorsanız, tüm ev eşyanızın tek seferde taşındığı kesin dönüş nakliyat hizmetimiz bu iş için tasarlandı.",
      ],
    },
    {
      heading: "Gümrük Süreci Hakkında Bilmeniz Gerekenler",
      paragraphs: [
        "Belçika bir Avrupa Birliği ülkesidir; Türkiye'den gönderilen her yük AB gümrük sahasına giriş işlemi görür. Ticari gönderilerde fatura ve ATR belgesi sürecin temelini oluşturur; zati eşya ve ev eşyası gönderilerinde ise aranan belgeler gönderenin ve alıcının durumuna (ikamet, taşınma, eşyanın niteliği) göre değişir. Ekibimiz hangi gönderi için hangi evrakın hazırlanması gerektiği konusunda size yol gösterir ve süreci sizinle birlikte takip eder.",
        "Gümrük mevzuatı ve muafiyet şartları zaman içinde değişebildiği için, özellikle ev eşyası ve kesin dönüş gibi özel durumlarda güncel şartları gümrük müşavirinize veya konsolosluğa teyit ettirmenizi öneririz.",
      ],
    },
    {
      heading: "Belçika'dan Türkiye'ye Dönüş Taşımaları",
      paragraphs: [
        "Taşımalarımız çift yönlüdür. Belçika'dan Türkiye'ye eşya, ticari yük veya numune göndermek istiyorsanız aynı araç tipi, aynı hız ve aynı canlı takip imkânıyla dönüş taşıması da yapıyoruz. Anvers, Avrupa'nın en büyük liman kentlerinden biri olduğu için bölgede ticari hareketlilik yoğundur; Belçika'dan Türkiye'ye yedek parça, makine ekipmanı veya ticari mal taşıyan işletmeler için dönüş yönü de tam kapasiteyle çalışır.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Belçika'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Brüksel veya Anvers'e teslimat tipik olarak 32-48 saat sürer; Liège gibi doğudaki şehirlere 30-46 saat, Brugge gibi batı uçtaki şehirlere 36-52 saat içinde ulaşılır. Parsiyel TIR taşımacılığında aynı güzergah 7-15 gün alabilir.",
    },
    {
      question: "Belçika'ya eşya gönderme fiyatı ne kadar?",
      answer:
        "Komple panelvan taşımada İstanbul-Brüksel hattı " +
        priceRange("Brüksel") +
        ", İstanbul-Anvers hattı " +
        priceRange("Anvers") +
        " aralığındadır. Komple araç doldurmayan koli ve parça eşya gönderileri hacme göre fiyatlandırılır; uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde anında teklif alabilirsiniz.",
    },
    {
      question: "Brüksel'e kargo gönderirken eşyam adresten mi alınıyor?",
      answer:
        "Evet. Kapıdan kapıya çalışırız: eşyanız Türkiye'deki adresinizden araca yüklenir ve Brüksel'deki teslimat adresine kadar aynı araçla gider. Depoya bırakmanız veya bir şubeden teslim almanız gerekmez.",
    },
    {
      question: "Belçika'ya koli göndermek için gümrükte hangi belgeler gerekiyor?",
      answer:
        "Ticari gönderilerde fatura ve ATR belgesi esastır; kişisel eşya ve koli gönderilerinde aranan belgeler eşyanın niteliğine ve alıcının durumuna göre değişir. Ekibimiz evrak hazırlığında size yol gösterir; yine de güncel muafiyet ve belge şartlarını gümrük müşavirinize veya konsolosluğa teyit ettirmenizi öneririz.",
    },
    {
      question: "Anvers'e ticari yük taşıyor musunuz?",
      answer:
        "Evet. Anvers ve çevresi Avrupa'nın en yoğun ticaret bölgelerinden biridir; numune, yedek parça, fuar malzemesi, e-ticaret ürünleri ve makine ekipmanı gibi ticari yükleri Anvers'e kapıdan kapıya taşıyoruz. Acil üretim parçası bekleyen işletmeler için panelvan ekspres çoğu zaman tek gerçekçi seçenektir.",
    },
    {
      question: "Gönderim sigortalı mı, yolda takip edebilir miyim?",
      answer:
        "Tüm gönderiler taşıma sigortası kapsamında taşınır; değerli yükler için kapsam teklif aşamasında netleştirilir. Her gönderiye 7/24 canlı GPS takibi tanımlanır — aracınızın anlık konumunu gönderi takip sayfasından harita üzerinde izleyebilirsiniz.",
    },
  ],
  related: [
    { slug: "hollanda-kargo", label: "Hollanda'ya Panelvan Kargo" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
  ],
};

export default belcikaKargo;
