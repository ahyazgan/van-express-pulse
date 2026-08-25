import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const belcikaKargo: SeoPageData = {
  slug: "belcika-kargo",
  title: "Belçika'ya Panelvan Kargo | Kapıdan Kapıya Ekspres | RouteEU",
  description:
    "Türkiye'den Belçika'ya kapıdan kapıya panelvan kargo. Brüksel, Anvers, Gent'e 30-46 saatte sigortalı ekspres taşıma ve canlı GPS takip. Anında fiyat alın.",
  h1: "Türkiye'den Belçika'ya Kapıdan Kapıya Kargo",
  intro: [
    "Türkiye'den Belçika'ya kargo göndermenin alışılmış yolu, yükünüzün başka gönderilerle birleştirilip TIR'la yola çıktığı parsiyel taşımadır; bu yöntemde teslimat çoğu zaman haftalar alır ve yükünüz birden fazla depoya uğrar. RouteEU Express bunun yerine yükünüze ayrılmış bir panelvanla çalışır: eşyanız Türkiye'deki adresinizden alınır, araç değiştirmeden ve depo beklemeden Brüksel, Anvers, Gent ya da Belçika'nın herhangi bir adresine 30-46 saat içinde teslim edilir.",
    "Panelvan sınıfı araçlar hafta sonu TIR seyir yasağından muaf olduğu için cuma günü yüklenen gönderi pazartesiyi beklemeden yola devam eder. Çift şoför uygulamasıyla araç uzun molalar vermez, transit süre kısalır. Tüm gönderiler sigortalı taşınır ve 7/24 canlı GPS takibiyle yükünüzün hangi ülkede, hangi otoyolda olduğunu telefonunuzdan anlık olarak izlersiniz. Fiyat öğrenmek için kimseyi aramanız gerekmez; uygulamadan kalkış ve varış adresinizi seçerek anında teklif alırsınız.",
  ],
  transitTable: {
    caption: "Türkiye - Belçika Transit Süreleri",
    rows: [
      { destination: "İstanbul → Brüksel", time: "30-46 saat" },
      { destination: "İstanbul → Anvers", time: "30-46 saat" },
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
        "Çift şoför: Şoförler dönüşümlü sürdüğü için araç uzun dinlenme molası vermeden ilerler, İstanbul'dan Brüksel'e teslimat 30-46 saatte tamamlanır.",
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
      heading: "Belçika'ya Eşya ve Koli Gönderme",
      paragraphs: [
        "Belçika'ya gönderiniz her zaman komple bir araç dolduracak kadar büyük olmayabilir. Türkiye'deki ailenizin hazırladığı birkaç koli, yeni evinize eklenecek birkaç mobilya parçası ya da iş yerinize gidecek numune paketleri için komple panelvan kiralamanıza gerek yok: Brüksel, Anvers, Gent, Liège ve Charleroi başta olmak üzere tüm Belçika adreslerine koli ve parça eşya gönderilerini parsiyel olarak taşıyoruz. Gönderiniz yine sigortalıdır, aynı canlı GPS takibinden izlenir ve kapıya teslim edilir.",
        "Belçika'da yaşayan gurbetçiler için bu hizmet özellikle pratiktir: memleketten gelen çeyiz, giyim kolileri, bebek eşyası veya aile yadigarı parçalar Türkiye'deki adresten alınır, Belçika'daki kapınıza kadar aynı koridorda ilerleyen araçlarımızla ulaştırılır. Almanya ve Hollanda hatlarımızla aynı güzergahı paylaştığımız için kalkış sıklığımız yüksek, koli başına maliyet düşüktür. Hacim bazlı fiyatlandırmanın ayrıntıları için parsiyel taşımacılık sayfamıza göz atabilir, uygulamadan ölçü ve adres bilgilerinizi girerek anında teklif alabilirsiniz.",
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
      heading: "Parsiyel TIR ile Panelvan Ekspres Arasındaki Fark",
      paragraphs: [
        "Türkiye'den Belçika'ya yük göndermenin sektör standardı parsiyel TIR taşımacılığıdır. Bu modelde yükünüz önce bir toplama deposuna gider, araç dolana kadar bekler, Avrupa'da bir aktarma merkezinden geçer ve son olarak dağıtım aracına yüklenir. Her aşama gün demektir: sektör ortalamasında Belçika teslimatı 7-15 gün sürer, hafta sonu seyir yasağı bu süreye çoğu zaman iki gün daha ekler ve kesin teslim tarihi ancak araç yola çıktığında netleşir.",
        "RouteEU panelvan ekspreste aracı ya yalnızca siz kullanırsınız ya da aynı güzergahtaki birkaç gönderiyle paylaşırsınız; her iki durumda da yük depoya girmez, aktarılmaz ve İstanbul'dan Brüksel veya Anvers'e 30-46 saatte ulaşır. İki yöntemi aynı ölçütlerle karşılaştırdığımızda fark şöyle görünür:",
      ],
      list: [
        "Transit süre: parsiyel TIR 7-15 gün; RouteEU panelvan 30-46 saat.",
        "Aktarma sayısı: parsiyel TIR'da en az iki depo; panelvanda sıfır, yükleme anından teslimata aynı araç.",
        "Hafta sonu: TIR'lar seyir yasağına tabi; panelvan cumartesi ve pazar da yol alır.",
        "Takip: parsiyelde telefonla sorulan tahmini konum; panelvanda 7/24 canlı GPS.",
        "Teslim noktası: parsiyelde sıklıkla depo veya şube; panelvanda Belçika'daki adresin kapısı.",
        "Güvence: her RouteEU taşıması yazılı sözleşme ve taşıma sigortası kapsamında yola çıkar.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Belçika'ya gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış adresinizi ve Belçika'daki varış adresini seçin, yükünüzün hacmini girin ve tahmini fiyatı saniyeler içinde görün. Onayladığınızda taşıma sözleşmesi ve sigorta kapsamı dijital olarak oluşturulur.",
        "Alım: Aracımız belirlenen gün ve saatte Türkiye'deki adresinize gelir; eşyanız kontrol edilerek araca yüklenir, gümrük evrakı sizinle birlikte tamamlanır.",
        "Taşıma: Yük, gümrük işlemlerinin ardından aktarmasız olarak Belçika'ya hareket eder. Çift şoför sayesinde araç mola için durmaz; konumunu 7/24 canlı haritada izlersiniz.",
        "Teslim: Araç Brüksel, Anvers, Gent ya da Belçika'daki hangi adrese gidecekse oraya ulaşır; eşyanız kapıda alıcıya teslim edilir ve teslimat bilgisi uygulamada görünür.",
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
      question: "Belçika'ya kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Brüksel veya Anvers'e teslimat tipik olarak 30-46 saat sürer; Gent ve Charleroi'ya 34-50, Brugge gibi batı uçtaki şehirlere 36-52 saat içinde ulaşılır. Sektör ortalaması olan parsiyel TIR taşımacılığında aynı güzergah 7-15 gün alabilir.",
    },
    {
      question: "Belçika'ya eşya gönderme ücreti ne kadar?",
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
    {
      question: "Belçika'dan Türkiye'ye taşıma yapıyor musunuz?",
      answer:
        "Evet, hattımız çift yönlü çalışır. Brüksel, Anvers, Gent veya Belçika'nın herhangi bir şehrindeki adresten alınan eşya ve ticari yük, aynı araçla Türkiye'deki teslimat adresine götürülür. Süreç, evrak ve fiyat detayları için Belçika'dan Türkiye'ye nakliyat sayfamızı inceleyebilirsiniz; kesin dönüş yapacaklar için komple ev eşyası taşıma çözümümüz de mevcuttur.",
    },
  ],
  related: [
    { slug: "belcikadan-turkiyeye-nakliyat", label: "Belçika'dan Türkiye'ye Nakliyat" },
    { slug: "hollanda-kargo", label: "Hollanda'ya Panelvan Kargo" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
  ],
};

export default belcikaKargo;
