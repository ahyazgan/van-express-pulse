import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const hollandaKargo: SeoPageData = {
  slug: "hollanda-kargo",
  title: "Hollanda'ya Panelvan Kargo | 2026 Güncel Fiyat ve Süreler | RouteEU",
  description:
    "Hollanda'ya kapıdan kapıya panelvan kargo: 2026 güncel fiyatlar ve transit süreler. Amsterdam, Rotterdam'a 30-46 saatte sigortalı taşıma, anında teklif alın.",
  h1: "Türkiye'den Hollanda'ya Kapıdan Kapıya Ekspres Kargo",
  intro: [
    "Türkiye'den Hollanda'ya kargo veya eşya göndermek istediğinizde klasik yöntem, yükünüzün başka gönderilerle birleştirilip TIR'la haftalar içinde taşınmasıdır. RouteEU Express bunun yerine yükünüze ayrılmış bir panelvanla çalışır: eşyanız Türkiye'deki adresinizden alınır, araç değiştirmeden ve depo beklemeden Amsterdam, Rotterdam, Eindhoven ya da Hollanda'nın hangi şehrine gidecekse doğrudan o kapıya teslim edilir. İstanbul'dan Amsterdam'a tipik transit süre 30-46 saattir; yani bugün yüklenen eşyanız çoğu zaman iki gün içinde Hollanda'daki adresinde olur.",
    "Panelvan araçlarımız hafta sonu TIR seyir yasağına tabi olmadığı için cuma günü çıkan yük pazartesiyi beklemeden yoluna devam eder; çift şoför uygulamasıyla araç mola vermeden ilerler. Tüm gönderiler sigortalı taşınır, 7/24 canlı GPS takibiyle yükünüzün hangi ülkede, hangi otoyolda olduğunu anlık olarak görürsünüz. Fiyat öğrenmek için telefon trafiğine gerek yok: uygulamadan kalkış ve varış adresinizi seçip anında tahmini teklif alabilirsiniz.",
  ],
  transitTable: {
    caption: "Türkiye - Hollanda Transit Süreleri",
    rows: [
      { destination: "İstanbul → Amsterdam", time: "30-46 saat" },
      { destination: "İstanbul → Rotterdam", time: "30-46 saat" },
      { destination: "İstanbul → Eindhoven", time: "28-44 saat" },
      { destination: "İstanbul → Utrecht", time: "30-46 saat" },
      { destination: "İstanbul → Lahey (Den Haag)", time: "30-46 saat" },
      { destination: "İstanbul → Groningen", time: "36-52 saat" },
    ],
  },
  priceTable: {
    caption: "Hollanda'ya Panelvan Kargo Fiyatları",
    rows: [
      { route: "İstanbul → Amsterdam", price: priceRange("Amsterdam") },
      { route: "İstanbul → Rotterdam", price: priceRange("Rotterdam") },
      { route: "İstanbul → Eindhoven", price: priceRange("Eindhoven") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Koli ve parsiyel gönderiler hacme göre fiyatlandırılır; kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Hollanda'nın Hangi Şehirlerine Taşıma Yapıyoruz?",
      paragraphs: [
        "Kapıdan kapıya çalıştığımız için teslimat ağımız belirli şehirlerle sınırlı değildir. Amsterdam, Rotterdam, Lahey (Den Haag), Utrecht, Eindhoven, Groningen, Tilburg, Breda, Nijmegen, Arnhem, Almere, Haarlem, Enschede ve Maastricht başta olmak üzere Hollanda'nın tüm şehir ve kasabalarına teslimat yapıyoruz. Adres ister Amsterdam'ın merkezinde ister Zaandam'da bir sanayi bölgesinde olsun, yükünüz aynı araçla o kapıya kadar gider.",
        "Hollanda, Avrupa'daki en büyük Türk topluluklarından birine ev sahipliği yapıyor; Rotterdam, Amsterdam, Lahey ve Utrecht'te yaşayan Türkler için Türkiye'den düzenli eşya, gıda dışı koli ve ticari yük taşıması yapıyoruz. Aynı şekilde Hollanda'daki firmalara acil yedek parça, numune ve fuar malzemesi teslimatlarında da panelvan ekspres en çok tercih edilen çözümdür.",
      ],
    },
    {
      heading: "Hollanda Hattında Panelvan Ekspresin Avantajları",
      paragraphs: [
        "Türkiye-Hollanda güzergahı yaklaşık 2.800 kilometrelik, birden fazla sınır geçişi içeren bir rotadır. Bu rotada panelvanı TIR'la parsiyel taşımadan ayıran dört temel unsur vardır:",
      ],
      list: [
        "Hafta sonu yasağı yok: TIR'ların hafta sonu seyir yasağına panelvanlar tabi değildir; yükünüz cumartesi ve pazar da yol alır.",
        "Çift şoför: İki şoför dönüşümlü kullandığı için araç dinlenme molası vermeden ilerler, İstanbul-Amsterdam 30-46 saatte tamamlanır.",
        "Aktarmasız taşıma: Yükünüz depoya girmez, başka araçlara aktarılmaz; kırılma, kaybolma ve karışma riski en aza iner.",
        "Sınırda beklemez: Panelvan sınıfı araçlar gümrük kapılarında TIR kuyruğuna girmeden işlem görür, transit süre öngörülebilir kalır.",
      ],
    },
    {
      heading: "Hollanda'ya Neler Gönderebilirsiniz?",
      paragraphs: [
        "Ticari mal, numune, fuar ve stand malzemesi, yedek parça, makine ekipmanı, e-ticaret ürünleri, ev eşyası ve zati eşya taşıyoruz. Rotterdam Limanı çevresindeki lojistik firmalarına, Eindhoven'daki teknoloji üreticilerine ve Hollanda genelindeki toptancılara teslim süresi kritik yükler için panelvan ekspres çoğu zaman tek gerçekçi seçenektir.",
        "Gümrük tarafında genel kural şudur: ticari gönderilerde fatura ve ATR belgesiyle süreç sorunsuz ilerler; kişisel eşya gönderimlerinde ise eşyanın niteliğine göre farklı beyan usulleri uygulanabilir. Ekibimiz evrak hazırlığında size yol gösterir; ancak vergi muafiyetleri ve kişisel eşya rejimi gibi konularda güncel şartları gümrük müşavirinize veya konsolosluğa teyit ettirmenizi öneririz.",
      ],
    },
    {
      heading: "Hollanda'ya Ev Eşyası Taşıma",
      paragraphs: [
        "Hollanda'da yeni bir hayata başlıyorsanız ya da yıllardır Amsterdam, Rotterdam veya Lahey'de yaşıyor ve Türkiye'deki evinizden mobilya, beyaz eşya, çeyiz ya da kişisel eşyalarınızı getirtmek istiyorsanız, kapıdan kapıya panelvan taşıma bu iş için en pratik çözümdür. Eşyalarınız Türkiye'deki evden paketlenmiş halde araca alınır, yol boyunca aynı araçta kalır ve Hollanda'daki adresinizin kapısında teslim edilir. Depo beklemesi ve aktarma olmadığı için çizilme, kırılma ve kaybolma riski en aza iner.",
        "Ev eşyası taşımada fiyatı belirleyen ana ölçü hacimdir: eşyanızın kapladığı metreküp (m³), aracın ne kadarını kullanacağınızı gösterir. Yaklaşık 1.300 kg ve 5 palet kapasiteli panelvanımız, bir stüdyo dairenin veya 1+1 bir evin eşyasını tek seferde taşıyabilir. Eşyanız aracın tamamını doldurmuyorsa yalnızca kapladığı hacim kadar ödersiniz; komple ev taşınmalarında ise araç size özel ayrılır. Büyük parçaları ve tahmini koli sayınızı uygulamaya girerek fiyatı anında görebilirsiniz.",
        "Paketleme önerileri, taşınma günü planlaması ve evrak hazırlığı dahil sürecin tamamını yurtdışına ev eşyası taşıma sayfamızda adım adım anlattık. Hollanda'dan Türkiye'ye kalıcı dönüş planlayanlar için kesin dönüş nakliyat hizmetimiz aynı konforu ters yönde sunar.",
      ],
    },
    {
      heading: "Hollanda'ya Koli ve Parça Eşya Gönderme",
      paragraphs: [
        "Komple panelvan dolduracak kadar yükünüz yoksa Hollanda hattında koli ve parsiyel gönderiler de taşıyoruz. Birkaç koliden birkaç palete kadar her hacim için yer ayrılabilir; gönderiniz yine sigortalı taşınır ve aynı canlı takip sisteminden izlenir. Koli ve parsiyel taşımada sabit bir liste fiyatı yoktur: fiyat, gönderinizin hacmine ve güzergaha göre belirlenir. Uygulamadan ölçü ve adres bilgilerinizi girerek anında teklif alabilirsiniz.",
        "Hollanda güzergahı, Almanya ve Belçika hatlarımızla aynı koridor üzerinde ilerlediği için parsiyel gönderilerde araç doluluk oranı yüksektir; bu da koli başına maliyeti düşürür ve kalkış sıklığını artırır. Acele etmeyen gönderiler için parsiyel, teslim tarihi kritik yükler için komple panelvan en verimli iki seçenektir. Parsiyel taşımanın işleyişi, hacim hesabı ve kalkış planları hakkında ayrıntılı bilgiyi parsiyel taşımacılık sayfamızda bulabilirsiniz.",
      ],
    },
    {
      heading: "Parsiyel TIR mı, Panelvan Ekspres mi?",
      paragraphs: [
        "Sektörde Türkiye'den Hollanda'ya kargo denince akla ilk gelen yöntem parsiyel TIR taşımacılığıdır: yükünüz önce bir toplama deposunda bekler, araç dolunca yola çıkar, Avrupa'da bir aktarma merkezine uğrar ve oradan dağıtıma verilir. Bu zincirin her halkası zaman demektir; sektör ortalamasında Hollanda teslimatı 7-15 gün sürer, hafta sonu seyir yasağı bu süreye ek günler ekler ve teslim tarihi çoğu zaman \"araç dolduğunda\" şeklinde belirsiz kalır.",
        "RouteEU panelvan ekspreste bu zincir yoktur. Araç yükünüz için ayrılır, yükleme günü bellidir, yol boyunca araç değişmez ve İstanbul'dan Amsterdam ya da Rotterdam'a teslimat 30-46 saatte tamamlanır. Fark yalnızca hız değil, öngörülebilirliktir: alıcınıza \"perşembe öğleden sonra kapınızda\" diyebilirsiniz. İki yöntemi aynı ölçütlerle yan yana koyduğumuzda tablo şöyle:",
      ],
      list: [
        "Transit süre: parsiyel TIR 7-15 gün; RouteEU panelvan 30-46 saat.",
        "Aktarma: parsiyel TIR'da en az bir toplama ve bir dağıtım deposu; panelvanda sıfır aktarma, yükleme anından teslimata aynı araç.",
        "Hafta sonu: TIR'lar cumartesi-pazar seyir yasağına tabi; panelvan kesintisiz yol alır.",
        "Takip: parsiyelde telefonla sorulan tahmini konum; panelvanda 7/24 canlı GPS.",
        "Teslim noktası: parsiyelde sıklıkla depo veya şube; panelvanda doğrudan adres, kapıya teslim.",
        "Güvence: her RouteEU taşıması yazılı sözleşme ve taşıma sigortası kapsamında yola çıkar.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Hollanda'ya gönderiniz dört adımda tamamlanır; her adımda yükünüzün durumunu uygulamadan izleyebilirsiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış adresinizi ve Hollanda'daki varış adresini seçin, yükünüzün hacmini girin ve tahmini fiyatı saniyeler içinde görün. Onayladığınızda taşıma sözleşmesi ve sigorta kapsamı dijital olarak oluşturulur.",
        "Alım: Aracımız belirlenen gün ve saatte Türkiye'deki adresinize gelir; eşyanız kontrol edilerek araca yüklenir, gümrük evrakı sizinle birlikte tamamlanır.",
        "Taşıma: Yük, gümrük işlemlerinin ardından aktarmasız olarak Hollanda'ya hareket eder. Çift şoför sayesinde araç mola için durmaz; konumunu 7/24 canlı haritada izlersiniz.",
        "Teslim: Araç Amsterdam, Rotterdam veya Hollanda'daki hangi adrese gidecekse oraya ulaşır; eşyanız kapıda alıcıya teslim edilir ve teslimat bilgisi uygulamada görünür.",
      ],
    },
    {
      heading: "Hollanda'dan Türkiye'ye Dönüş Yükleri",
      paragraphs: [
        "Taşımalarımız çift yönlüdür: Hollanda'dan Türkiye'ye eşya, koli veya ticari yük göndermek istiyorsanız aynı hız, sigorta ve takip imkânıyla dönüş taşıması da yapıyoruz. Amsterdam veya Rotterdam'dan aldığımız yük, Türkiye'deki teslimat adresine yine aktarmasız gider. Dönüş yönünde de transit süreler aynıdır: Amsterdam'dan İstanbul'a tipik teslimat 30-46 saat içinde tamamlanır.",
        "Hollanda'da yaşayıp Türkiye'ye kalıcı dönüş yapmayı planlıyorsanız, ev eşyalarınızın komple taşınması için kesin dönüş nakliyat hizmetimize göz atabilirsiniz; evinizdeki eşyalar Hollanda'daki adresinizden paketlenmiş halde alınır ve Türkiye'deki yeni adresinize tek araçla teslim edilir.",
      ],
    },
  ],
  faq: [
    {
      question: "Hollanda'ya kargo kaç günde gider?",
      answer:
        "RouteEU panelvan ekspres taşımalarında Avrupa teslimatları genel olarak 24-48 saat bandında tamamlanır. Hollanda özelinde İstanbul'dan Amsterdam veya Rotterdam'a tipik teslimat 30-46 saat sürer; Eindhoven gibi güney şehirlerine 28-44 saatte ulaşılır. Sektör ortalaması olan parsiyel TIR taşımacılığında aynı güzergah 7-15 gün alabilir.",
    },
    {
      question: "Hollanda'ya kargo ücreti ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre değişir: örneğin İstanbul-Amsterdam hattında " +
        priceRange("Amsterdam") +
        " aralığındadır. Koli ve parsiyel gönderiler hacme göre fiyatlandırılır; uygulamadan adres ve ölçü bilgilerinizi girerek saniyeler içinde tahmini teklif alabilirsiniz.",
    },
    {
      question: "Hollanda'ya ev eşyası taşıma fiyatı nasıl hesaplanır?",
      answer:
        "Ev eşyası taşımada fiyatın ana belirleyicisi eşyanızın kapladığı hacimdir (m³). Komple panelvan gerekiyorsa güzergah bazlı komple araç fiyatı uygulanır: örneğin İstanbul-Rotterdam hattında " +
        priceRange("Rotterdam") +
        " aralığındadır. Daha küçük hacimlerde yalnızca kapladığınız yer kadar ödersiniz; uygulamadan eşya listenizi girerek anında teklif alabilirsiniz.",
    },
    {
      question: "Hollanda'ya tek koli gönderebilir miyim?",
      answer:
        "Evet. Komple araç kiralamanıza gerek yok; koli ve parsiyel gönderileriniz için araçta yer ayırıyoruz. Fiyat, kolinizin hacmine göre belirlenir ve gönderiniz yine sigortalı taşınıp canlı takip edilir.",
    },
    {
      question: "Hollanda'ya ev eşyası gönderirken gümrükte ne gerekir?",
      answer:
        "Kişisel eşya gönderimlerinde eşya listesi ve kimlik bilgileri temel evraklardır; eşyanın niteliğine ve ikamet durumunuza göre ek beyan gerekebilir. Ekibimiz evrak hazırlığında yol gösterir; muafiyet şartları gibi güncel detayları gümrük müşavirinize veya konsolosluğa teyit ettirmenizi öneririz.",
    },
    {
      question: "Yükümü yolda takip edebilir miyim?",
      answer:
        "Evet. Her gönderiye canlı GPS takibi tanımlanır; gönderi takip sayfasından aracınızın anlık konumunu 7/24 harita üzerinde görebilirsiniz. Amsterdam'a giden yükünüzün hangi ülkede olduğunu her an bilirsiniz.",
    },
    {
      question: "Hollanda'dan Türkiye'ye de taşıma yapıyor musunuz?",
      answer:
        "Evet, hattımız çift yönlü çalışır. Amsterdam, Rotterdam veya Hollanda'nın herhangi bir şehrindeki adresinizden alınan eşya ve ticari yük, aynı araçla Türkiye'deki teslimat adresine götürülür. Süreç, evrak ve fiyat detayları için Hollanda'dan Türkiye'ye nakliyat sayfamızı inceleyebilirsiniz; kesin dönüş yapacaklar için komple ev eşyası taşıma hizmetimiz de mevcuttur.",
    },
  ],
  related: [
    { slug: "hollandadan-turkiyeye-nakliyat", label: "Hollanda'dan Türkiye'ye Nakliyat" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
  ],
};

export default hollandaKargo;
