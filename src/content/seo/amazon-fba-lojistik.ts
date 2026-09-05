import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const amazonFbaLojistik: SeoPageData = {
  slug: "amazon-fba-lojistik",
  title: "Amazon FBA Lojistik | Türkiye'den Avrupa Depolarına Sevkiyat",
  description:
    "Türkiye'den Amazon FBA depolarına palet sevkiyatı: Almanya, Polonya, İtalya depolarına 24-48 saatte, randevu saatine göre kapıda teslim. Stok bitmeden yetişin.",
  h1: "Türkiye'den Amazon FBA Depolarına Palet Sevkiyatı",
  intro: [
    "Amazon.de, Amazon.fr, Amazon.it veya Amazon.pl üzerinde satış yapan her Türk satıcının aynı kabusu vardır: listing yükselmişken stok tükenmesi. Buy Box'ı kaybetmek, reklam bütçesinin boşa gitmesi ve sıralamanın gerilemesi, tek bir gecikmiş sevkiyatın faturasıdır. Havayolu kargo hızlıdır ama palet başına maliyeti kâr marjını eritir; klasik karayolu parsiyel taşımada ise mal Avrupa'daki depoya 7-12 günde ulaşır ve o sürede ürün sayfanız \"stokta yok\" gösterir.",
    "RouteEU Express bu ikilemi ortadan kaldırır. Türkiye'deki üretim yerinizden, deponuzdan veya hazırlık merkezinizden alınan yük, tek panelvanla ve aktarmasız olarak Almanya, Polonya ve İtalya'daki Amazon fulfillment merkezlerine 24-48 saat içinde ulaşır. Beş palete kadar FBA sevkiyatı, çift şoförle ve hafta sonu TIR yasağına takılmadan yola çıkar; depo randevu saatinize göre planlanır ve takip numaranızla sevkiyatınızın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) her an görürsünüz.",
  ],
  transitTable: {
    caption: "Türkiye - Amazon FBA Depo Bölgeleri Transit Süreleri",
    rows: [
      { destination: "İstanbul → Frankfurt bölgesi (FRA depoları)", time: "28-40 saat" },
      { destination: "İstanbul → Köln bölgesi (CGN / DUS depoları)", time: "30-44 saat" },
      { destination: "İstanbul → Berlin bölgesi (BER depoları)", time: "24-36 saat" },
      { destination: "İstanbul → Varşova bölgesi (Polonya depoları)", time: "24-40 saat" },
      { destination: "İstanbul → Milano bölgesi (İtalya depoları)", time: "24-36 saat" },
    ],
  },
  priceTable: {
    caption: "Amazon FBA Depolarına Panelvan Sevkiyat Fiyatları",
    rows: [
      { route: "İstanbul → Frankfurt bölgesi", price: priceRange("Frankfurt") },
      { route: "İstanbul → Köln bölgesi", price: priceRange("Köln") },
      { route: "İstanbul → Berlin bölgesi", price: priceRange("Berlin") },
      { route: "İstanbul → Varşova bölgesi", price: priceRange("Varşova") },
      { route: "İstanbul → Milano bölgesi", price: priceRange("Milano") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "FBA Sevkiyatında Süreç: Hazırlık, Etiket ve Randevu",
      paragraphs: [
        "Amazon depoları sıradan bir alıcı değildir; malı kabul etmeleri için sevkiyatın Seller Central'da oluşturulmuş bir gönderi planına, doğru etikete ve onaylı bir teslim randevusuna bağlı olması gerekir. Bu kurallara uymayan yükler depo kapısından geri çevrilir ve her geri çevrilme, hem ek taşıma maliyeti hem de günlerce süren stok kaybı demektir. RouteEU olarak FBA yüklerini bu gerçeği bilerek taşırız.",
        "Hazırlık aşamasında sizden beklenen, gönderi planındaki kutu ve palet bilgileriyle fiziksel yükün birebir örtüşmesidir. Genel çerçeveyi şöyle özetleyebiliriz; güncel FBA gereksinimleri Seller Central'daki depo yönergelerinde yer alır ve zaman zaman değişir:",
      ],
      list: [
        "Kutu etiketleri: Her kutuda Seller Central'dan alınan FBA kutu etiketi (FNSKU / gönderi kimliği) okunabilir şekilde ve tek yüzde bulunmalı; eski barkodlar kapatılmalıdır.",
        "Palet standardı: Avrupa depoları genellikle 80x120 cm Euro palet ister; palet yüksekliği ve ağırlığı depo limitlerini aşmamalı, yük streçle sarılmalı ve dört yüzüne palet etiketi yapıştırılmalıdır.",
        "Randevu: Paletli sevkiyatlarda depo teslim randevusu (carrier appointment) alınır. Randevu saatini bize ilettiğinizde araç rotasını buna göre planlar, depo önünde saatinde hazır oluruz.",
        "Evrak: Ticari fatura, çeki listesi ve gönderi planı çıktısı araçta bulunur; gümrük çıkış ve giriş işlemleri bu evrakla ilerler.",
      ],
    },
    {
      heading: "ETGB ve Mikro İhracat Sınırını Aşan Yükler",
      paragraphs: [
        "Küçük hacimli FBA satıcıları ilk sevkiyatlarını çoğunlukla ekspres kurye ve ETGB (Elektronik Ticaret Gümrük Beyannamesi) yoluyla yapar. Mikro ihracat rejimi, belirli ağırlık ve değer limitleri içinde kalan gönderiler için pratik bir çözümdür; ancak satışlar büyüdüğünde tek seferde birkaç yüz kilo veya birkaç palet mal göndermeniz gerekir ve bu partiler mikro ihracat limitlerinin dışına çıkar.",
        "Sınırı aşan yüklerde sevkiyat standart ihracat beyannamesiyle yapılır; ürün ATR veya menşe belgesiyle Avrupa Birliği'ne giriş yapar ve ithalat tarafında KDV ile varsa gümrük vergileri doğar. Bu noktada panelvan taşımacılığı, kurye ile TIR arasındaki boşluğu tam olarak doldurur: kuryenin taşıyamayacağı kadar büyük, TIR'ın ekonomik olmayacağı kadar küçük partiler için tek araç, tek sürücü ekibi ve tek gümrük işlemiyle depoya kadar gidersiniz. Ekibimiz evrak hazırlığında yol gösterir; ancak ETGB limitleri, ihracat rejimi ve AB'deki ithalat yükümlülükleri sık güncellendiğinden, kendi ürününüz için geçerli güncel mevzuatı gümrük müşavirinizle teyit etmenizi öneririz.",
      ],
    },
    {
      heading: "DDP Mantığı: Depo Kapısına Kadar Tek Sorumlu",
      paragraphs: [
        "Amazon fulfillment merkezleri gümrük işlemi yapmaz, vergi ödemez ve \"alıcı\" sıfatıyla ithalatçı olmaz. Bu nedenle FBA sevkiyatlarında mal, depoya varmadan önce ithalat işlemleri tamamlanmış ve vergileri ödenmiş halde olmalıdır; sektörde bu yaklaşım DDP (Delivered Duty Paid) olarak bilinir. Uygulamada bu, satıcının AB'de kayıtlı bir ithalatçı kimliğine (EORI ve ilgili ülkede KDV numarası) sahip olması ya da bu rolü üstlenen bir gümrük müşaviri veya mali temsilciyle çalışması anlamına gelir.",
        "RouteEU, taşıma sürecini bu mantıkla kurgular: yük Türkiye'de araca alınır, ihracat gümrüğü tamamlanır, AB giriş kapısında gümrük müşavirinizin hazırladığı ithalat beyanıyla işlem görür ve aynı araç depo randevu saatinde kapıya yanaşır. Siz Seller Central'da \"teslim edildi\" bildirimini bekler, depo kabulünü ve stok güncellemesini takip edersiniz. İthalatçı sıfatı ve vergi sorumluluğu satıcıya ait olduğundan, hangi ülkede KDV kaydı yapmanız gerektiğini gümrük ve vergi danışmanınızla netleştirmeniz önemlidir.",
      ],
    },
    {
      heading: "Stok Tükenmeden Yetişin: Sektör Ortalaması ile RouteEU Farkı",
      paragraphs: [
        "FBA'da hız sadece konfor değil, doğrudan gelir meselesidir. Amazon'un algoritması stokta olmayan ürünü organik sonuçlarda geri iter; reklam kampanyaları durur; yeniden stoklandığınızda kaybedilen sıralamayı geri kazanmak haftalar alır. Bu yüzden sevkiyat süresi, stok planlamasının en kritik değişkenidir.",
        "Karayolu parsiyel TIR taşımacılığında yük önce Türkiye'de bir depoda konsolide edilir, araç dolunca yola çıkar, hafta sonu yasaklarında bekler, Avrupa'da bir aktarma merkezine boşaltılır ve oradan son teslimata çıkar; toplamda 7-15 gün, iyimser senaryoda 7-12 gün sürer. Havayolu ise birkaç günde ulaşır ama palet başına maliyet karayolunun katlarına çıkar ve havalimanından depoya son ayak taşıma ile gümrük ayrıca organize edilir. RouteEU panelvanında ise yük sizden alındığı anda yola çıkar; aktarma yok, konsolidasyon beklemesi yok, hafta sonu yasağı yok. İstanbul'dan Berlin veya Milano bölgesindeki depolara 24-36 saat, Frankfurt ve Köln bölgesine 28-44 saat, Varşova bölgesine 24-40 saat içinde teslimat yaparız.",
        "Pratikte bu, stok uyarısı geldiği gün sevkiyat planı açıp yükü ertesi gün araca verebilmeniz ve en geç iki gün sonra depo kabulünü görebilmeniz demektir. Havayolunun hızına yakın, karayolunun maliyetine yakın bir denge; FBA satıcısının tam olarak ihtiyaç duyduğu ara çözüm.",
      ],
    },
    {
      heading: "Panelvan FBA Sevkiyatının Avantajları",
      paragraphs: [
        "Klasik karayolu ve kurye seçeneklerine kıyasla FBA yükleri için fark yaratan unsurlar şunlardır:",
      ],
      list: [
        "Randevu saatine sadakat: Depo randevusu kaçırıldığında yeni randevu günler sonrasına düşebilir; aşama bazlı sevkiyat takibi, sabit güzergâh planı ve çift şoför sayesinde varış saatini öngörülebilir tutarız.",
        "Aktarmasız taşıma: Kutular ve paletler yükleme noktasından depo rampasına kadar aynı araçta kalır; etiket zedelenmesi, kutu ezilmesi ve karışıklık riski en aza iner.",
        "CMR sorumluluğu ve ek sigorta: Her FBA sevkiyatı, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlıdır. Elektronik gibi yüksek değerli partilerde bu tavan eşyanın gerçek değerini karşılamayabilir; bu nedenle talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz.",
        "Yazılı sözleşme ve tek muhatap: Alım noktasından depo kabulüne kadar tek firma, tek sözleşme, tek takip ekranı.",
        "Parsiyel esneklik: Beş paletten az yükünüz varsa aynı güzergahtaki diğer gönderilerle aracı paylaşır, yalnızca kullandığınız hacim kadar ödersiniz.",
      ],
    },
    {
      heading: "İade ve Removal Yükleri: Avrupa'dan Türkiye'ye Dönüş",
      paragraphs: [
        "FBA hikayesi yalnızca depoya mal göndermekten ibaret değildir. Satılamayan stok, sezonu geçen ürünler, hasarlı olarak işaretlenen birimler ve uzun süreli depolama ücreti biriktiren envanter için Amazon üzerinden removal (kaldırma) talebi oluşturursunuz; bu ürünlerin Avrupa'daki bir adrese çıkarılması gerekir. Çoğu satıcı bu noktada Avrupa'da depo bulmakta ya da malı Türkiye'ye geri getirmekte zorlanır.",
        "RouteEU çift yönlü çalışır. Removal siparişinizin teslim edildiği Almanya, Polonya, İtalya veya Hollanda'daki adresten yükü alır, Türkiye'deki deponuza ya da yeniden paketleme merkezinize kapıdan kapıya taşırız. Aynı seferde Avrupa'da biriken müşteri iadelerini de toplayabiliriz; böylece ürünleriniz yeniden etiketlenip bir sonraki FBA sevkiyatına dahil edilebilir. Dönüş yükünün ithalat işlemleri ve olası vergi iadeleri ürün türüne göre değiştiğinden, bu süreci de gümrük müşavirinizle birlikte planlamanızı öneririz.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "FBA sevkiyatınız dört adımda tamamlanır; her adımı uygulamadan takip edersiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış noktanızı ve hedef depo bölgesini seçin, palet sayınızı girin; tahmini fiyatı saniyeler içinde görün ve talebinizi oluşturun.",
        "Alım: Seller Central'da gönderi planını oluşturup depo randevusunu aldıktan sonra aracımız belirlenen tarihte üretim yerinize veya deponuza gelir; etiketli kutular ve paletler araca alınır.",
        "Taşıma: İhracat gümrüğü tamamlanır, yük aktarmasız olarak Avrupa'ya hareket eder; giriş kapısında ithalat işlemleri gümrük müşavirinizin beyanıyla yapılır. Sevkiyatın hangi aşamada olduğunu takip numaranızla görür, güzergâhı harita üzerinde izlersiniz; aracın o anki yerini WhatsApp'tan sorabilirsiniz.",
        "Teslim: Araç randevu saatinde fulfillment merkezinin rampasına yanaşır, yük depo görevlilerine teslim edilir; teslim belgesi uygulamaya işlenir ve stok kabulünü Seller Central'dan takip edersiniz.",
      ],
    },
  ],
  faq: [
    {
      question: "Türkiye'den Amazon FBA deposuna kargo kaç günde gider?",
      answer:
        "Panelvan ekspres taşımada İstanbul'dan Berlin ve Milano bölgesindeki depolara 24-36 saat, Frankfurt bölgesine 28-40 saat, Köln bölgesine 30-44 saat, Varşova bölgesine 24-40 saat içinde teslimat yapıyoruz. Klasik karayolu parsiyel taşımada aynı yol 7-12 gün, bazen 15 güne kadar sürer.",
    },
    {
      question: "Amazon deposunun randevu saatine yetişir mi?",
      answer:
        "Evet, rotayı randevu saatinize göre planlıyoruz. Çift şoför ve hafta sonu yasağından muafiyet sayesinde varış saati öngörülebilir; takip numaranızla sevkiyatın hangi aşamada olduğunu görür, aracın o anki yerini ve tahmini varış zamanını WhatsApp'tan sorabilirsiniz. Randevuyu Seller Central'dan aldıktan sonra saati bize iletmeniz yeterlidir; öngörülemeyen bir gecikme olursa depo ile yeni randevu için sizi önceden bilgilendiririz.",
    },
    {
      question: "FBA için kaç palet gönderebilirim?",
      answer:
        "Komple panelvanla tek seferde yaklaşık 1.300 kg ve 5 Euro palete kadar yük taşıyoruz. Daha az yükünüz varsa parsiyel seçeneğiyle aynı güzergahtaki gönderilerle aracı paylaşabilirsiniz; daha fazlası için birden fazla araç planlanır. Palet ölçüleri ve yükseklik sınırları için Amazon'un güncel depo gereksinimlerine uymanız gerekir.",
    },
    {
      question: "FBA sevkiyatında DDP ne demek?",
      answer:
        "DDP (Delivered Duty Paid), malın ithalat işlemleri tamamlanmış ve vergileri ödenmiş şekilde depoya teslim edilmesi anlamına gelir. Amazon depoları ithalatçı olmadığı için bu sorumluluk satıcıya aittir; AB'de EORI ve KDV kaydı ya da bu rolü üstlenen bir gümrük müşaviri veya mali temsilci gerekir. Biz taşımayı bu mantıkla kurgular, evrak sürecinde yol gösteririz; ürününüze özel güncel yükümlülükleri gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Amazon depolarından iade veya removal yükünü Türkiye'ye getirebilir misiniz?",
      answer:
        "Evet. Removal siparişinizin teslim edildiği Avrupa'daki adresten yükü alır, Türkiye'deki deponuza kapıdan kapıya taşırız. Müşteri iadelerini de aynı seferde toplayabiliriz. Dönüş yükünün ithalat işlemleri ürün türüne göre değiştiğinden bu adımı gümrük müşavirinizle planlamanızı öneririz.",
    },
    {
      question: "Amazon FBA deposuna panelvan sevkiyat fiyatı ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat hedef depo bölgesine göre değişir: örneğin İstanbul-Frankfurt bölgesi hattında " +
        priceRange("Frankfurt") +
        ", İstanbul-Varşova bölgesi hattında " +
        priceRange("Varşova") +
        " aralığındadır. Daha az palet için parsiyel seçeneği daha ekonomiktir. Kesin fiyat için uygulamadan kalkış ve varış noktanızı seçerek saniyeler içinde tahmini teklif alabilirsiniz.",
    },
    {
      question: "Kutu etiketlerini ve paletlemeyi siz yapıyor musunuz?",
      answer:
        "Etiketler Seller Central'daki gönderi planınıza bağlı olduğu için kutu ve palet etiketlerinin sizin tarafınızdan yapıştırılmış olması gerekir. Alım sırasında ekibimiz etiketlerin okunabilirliğini ve palet sarımını kontrol eder; eksik gördüğümüz bir nokta varsa yola çıkmadan sizi uyarırız. Streçleme ve palet etiketi gibi son kontroller için teklif aşamasında destek talep edebilirsiniz.",
    },
    {
      question: "Birden fazla Amazon deposuna aynı seferde teslimat yapabilir misiniz?",
      answer:
        "Evet. Amazon bazen bir gönderi planını birkaç depoya böler; aynı güzergah üzerindeki depolar (örneğin Köln ve Frankfurt bölgesi) tek araçla sırayla teslim edilebilir. Her depo için ayrı randevu saati gerekir; rotayı bu saatlere göre planlarız ve her teslimat ayrı olarak uygulamaya işlenir.",
    },
  ],
  related: [
    { slug: "polonya-kargo", label: "Polonya'ya Panelvan Kargo" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "etgb-mikro-ihracat-rehberi", label: "ETGB ile Mikro İhracat Rehberi" },
  ],
};

export default amazonFbaLojistik;
