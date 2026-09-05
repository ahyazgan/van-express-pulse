import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const almanyadanTurkiyeyeNakliyat: SeoPageData = {
  slug: "almanyadan-turkiyeye-nakliyat",
  title: "Almanya'dan Türkiye'ye Nakliyat Fiyatları ve Süresi {{yil}}",
  description:
    "Almanya'dan Türkiye'ye kapıdan kapıya nakliyat ve kargo. Berlin, Münih ve Köln'den eşyanız 24-48 saatte adresinizde. Aktarmasız, takip numaralı.",
  h1: "Almanya'dan Türkiye'ye Kapıdan Kapıya Nakliyat ve Kargo",
  intro: [
    "Almanya'dan Türkiye'ye eşya veya kargo göndermek isteyenlerin en sık duyduğu cevap bellidir: \"Bir-iki hafta sürer, araç dolunca çıkar.\" RouteEU Express bu bekleme mantığını tersine çevirir. Panelvan araçlarımız Türkiye-Avrupa hattında zaten iki yönlü çalıştığı için Almanya'dan dönüş yükleri de aynı ekspres standartla taşınır: eşyanız Almanya'daki kapınızdan alınır, araç değiştirmeden ve depoya uğramadan 24-48 saat içinde Türkiye'deki adrese teslim edilir.",
    "Berlin'den İstanbul'a, Köln'den Ankara'ya ya da Münih'ten İzmir'e — çıkış noktası neresi olursa olsun taşıma tek araçla, çift şoförle ve kesintisiz yapılır. Gönderiniz, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; takip numaranızla sevkiyatınızın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) görür, aracın o anki yerini WhatsApp'tan sorabilirsiniz.",
  ],
  transitTable: {
    caption: "Almanya - Türkiye Transit Süreleri",
    rows: [
      { destination: "Berlin → İstanbul", time: "24-36 saat" },
      { destination: "Münih → İstanbul", time: "24-36 saat" },
      { destination: "Frankfurt → İstanbul", time: "28-40 saat" },
      { destination: "Köln → İstanbul", time: "30-44 saat" },
      { destination: "Hamburg → İstanbul", time: "32-48 saat" },
    ],
  },
  priceTable: {
    caption: "Almanya'dan Türkiye'ye Panelvan Nakliyat Fiyatları",
    rows: [
      { route: "Berlin → İstanbul", price: priceRange("Berlin") },
      { route: "Münih → İstanbul", price: priceRange("Münih") },
      { route: "Frankfurt → İstanbul", price: priceRange("Frankfurt") },
      { route: "Hamburg → İstanbul", price: priceRange("Hamburg") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Bu Hizmet Kimler İçin?",
      paragraphs: [
        "Almanya'dan Türkiye'ye dönüş taşımalarımızı en çok dört grup kullanıyor. İlki, Avrupa'nın en kalabalık Türk toplumunun yaşadığı Almanya'daki gurbetçiler: Türkiye'deki aileye gönderilen koliler, beyaz eşya, mobilya veya kışlık dönüş öncesi yollanan kişisel eşyalar tek panelvanla, elden ele geçmeden gider. İkincisi, Türkiye'ye kalıcı dönüş hazırlığı yapanlar; evin tamamını taşımadan önce eşyanın bir kısmını göndermek isteyenler için kısmi taşıma, komple dönüş içinse kesin dönüş nakliyat hizmetimiz uygundur.",
        "Üçüncü grup, Almanya'dan mal getiren ithalatçılar ve üreticilerdir: makine parçası, endüstriyel ekipman, otomotiv yedek parçası veya üretim hattını bekleten acil bir komponent söz konusuysa haftalarca süren parsiyel yüklemeyi beklemek çoğu zaman mümkün değildir. Dördüncüsü ise numune ve e-ticaret iadeleri; Almanya'daki müşteriden dönen ürünlerin veya tedarikçiden gelen numunelerin hızla Türkiye'ye ulaşması gereken durumlar.",
      ],
    },
    {
      heading: "Almanya'nın Her Şehrinden Adresten Alım",
      paragraphs: [
        "Alım ağımız belirli merkezlerle sınırlı değildir; kapıdan kapıya çalıştığımız için aracımız eşyanızın bulunduğu adrese gelir. Berlin, Hamburg, Münih, Köln, Frankfurt, Stuttgart, Düsseldorf, Duisburg, Essen, Dortmund, Bremen, Hannover, Nürnberg, Mannheim ve Leipzig başta olmak üzere Almanya'nın tüm şehirlerinden, kasabalarından ve köylerinden yük alıyoruz. Eşyanızı bir depoya götürmeniz, koliyi bir şubeye bırakmanız gerekmez — randevu saatinde araç kapınızdadır.",
      ],
    },
    {
      heading: "Sektör Ortalaması 7-14 Gün, RouteEU 24-48 Saat",
      paragraphs: [
        "Almanya'dan Türkiye'ye taşımada sektörün genel işleyişi şöyledir: eşyanız önce Almanya'daki bir toplama deposuna gider, araç dolana kadar bekler, parsiyel TIR ile yola çıkar ve Türkiye'de bir aktarma merkezinden dağıtıma verilir. Bu zincirin toplamı çoğu firmada 7-15 gün, yoğun dönemlerde 1-3 haftayı bulur. RouteEU'da bu zincir yoktur: yükünüz için ayrılan panelvan adresinizden aldığı eşyayla doğrudan Türkiye'ye hareket eder.",
        "Farkı yaratan somut unsurlar şunlardır:",
      ],
      list: [
        "Depo ve konsolidasyon beklemesi yok: Araç dolsun diye beklenmez, yükünüz alındığı gün yola çıkar.",
        "Çift şoför: Şoförler dönüşümlü kullandığı için araç mola vermeden ilerler.",
        "Hafta sonu yasağından muafiyet: Almanya'daki pazar günü TIR seyir yasağı panelvanları kapsamaz; cuma alınan yük pazartesiyi beklemez.",
        "Aktarmasız güzergâh: Eşya tek araçta kaldığı için hasar ve kayıp riski en aza iner.",
      ],
    },
    {
      heading: "Sigorta, Sözleşme ve Kapıda Teslim Güvencesi",
      paragraphs: [
        "Almanya'dan Türkiye'ye taşınan her yük, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlıdır. Mobilya, elektronik veya makine gibi yüklerde bu tavan çoğu zaman eşyanın gerçek değerini karşılamaz; bu nedenle talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Taşıma öncesinde fiyatı, alım ve teslim adreslerini, tahmini süreyi ve eşya listesini içeren yazılı bir sözleşme düzenlenir; böylece yolda sürpriz bir ek ücretle karşılaşmazsınız. Yükleme sırasında tutulan tutanak, teslimatta imzalanan belgeyle karşılaştırılır. Bu iki an arasında takip numaranızla sevkiyatın hangi aşamada olduğunu görür, aracın o anki yerini WhatsApp'tan sorarsınız; eşyanız yalnızca sözleşmede yazan Türkiye'deki adrese, kapıda teslim edilir.",
      ],
    },
    {
      heading: "Türkiye'ye Girişte Gümrük: Zati Eşya ve Ticari Yük Ayrımı",
      paragraphs: [
        "Almanya'dan Türkiye yönünde gümrük işlemleri, yükün niteliğine göre iki ayrı rejimde ilerler. Kullanılmış kişisel eşyalar (zati eşya) belirli şartlar altında gümrük vergisinden muaf tutulabilir; özellikle kesin dönüş yapanların ev eşyası için mevzuat muafiyet imkânı tanır, ancak bu muafiyet ikamet süresi ve eşyanın kullanım durumu gibi koşullara bağlıdır. Ticari mallar, numuneler ve iade ürünler ise fatura ve ilgili beyanlarla ithalat işlemine tabidir.",
        "Ekibimiz her iki senaryoda da hangi evrakların hazırlanacağı konusunda size adım adım yol gösterir ve sınır geçişini planlar. Muafiyet şartları ve vergi oranları güncellenebildiği için, gönderinizin durumuna özel kesin bilgiyi güncel mevzuat üzerinden gümrük müşavirinizle teyit etmenizi öneririz.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Almanya'dan Türkiye'ye taşımanız dört adımda tamamlanır ve her adımı uygulamadan izlersiniz:",
      ],
      list: [
        "Teklif: Uygulamada Almanya'daki alım adresini ve Türkiye'deki teslimat noktasını seçin, tahmini fiyatı saniyeler içinde görün.",
        "Alım: Aracımız randevu tarihinde Almanya'daki adresinize gelir; eşyanız güvenle yüklenir ve tutanakla teslim alınır.",
        "Taşıma: Yük, gümrük evrakları tamamlandıktan sonra aktarmasız olarak Türkiye'ye hareket eder; takip numaranızla aşamayı görür, konumu WhatsApp'tan sorarsınız.",
        "Teslim: Araç Türkiye'deki adrese ulaşır, eşyanız kapıda size veya alıcınıza imza karşılığı teslim edilir.",
      ],
    },
    {
      heading: "Türkiye'de Her İle Teslimat",
      paragraphs: [
        "Varış tarafında da kapıdan kapıya ilkesi geçerlidir. İstanbul, Ankara, İzmir, Bursa, Antalya, Konya, Kayseri, Trabzon veya Anadolu'nun herhangi bir ilçesi — eşyanız Almanya'dan çıktığı araçla Türkiye'deki nihai adrese kadar gider. Şehir merkezinden uzak köy adresleri dahil olmak üzere 81 ilin tamamına teslimat yapıyoruz; alıcınızın bir dağıtım noktasına gitmesi gerekmez.",
      ],
    },
  ],
  faq: [
    {
      question: "Almanya'dan Türkiye'ye kargo kaç günde gelir?",
      answer:
        "Panelvan ekspres taşımada Berlin veya Münih'ten İstanbul'a teslimat tipik olarak 24-36 saat, Hamburg gibi kuzey şehirlerinden 32-48 saat sürer. Sektörde yaygın parsiyel taşımada aynı yol 7-15 gün, yoğun sezonda 3 haftaya kadar uzayabilir.",
    },
    {
      question: "Almanya'dan Türkiye'ye nakliyat ne kadar?",
      answer:
        "Komple panelvan taşımada fiyat güzergâha göre değişir: örneğin Berlin-İstanbul hattında " +
        priceRange("Berlin") +
        ", Münih-İstanbul hattında " +
        priceRange("Münih") +
        " aralığındadır. Kesin fiyat için uygulamadan adreslerinizi seçerek anında teklif alabilirsiniz.",
    },
    {
      question: "Almanya'da eşyamı nereden alıyorsunuz?",
      answer:
        "Bulunduğunuz adresten. Berlin, Köln, Duisburg, Münih veya Almanya'nın herhangi bir kasabası fark etmez; aracımız randevu saatinde kapınıza gelir ve eşyanız orada yüklenir. Depoya veya şubeye eşya götürmeniz gerekmez.",
    },
    {
      question: "Türkiye'ye girişte gümrük vergisi çıkar mı?",
      answer:
        "Yükün niteliğine bağlıdır. Kullanılmış kişisel eşyalar belirli şartlarda muafiyet kapsamına girebilirken ticari mallar ve yeni ürünler ithalat vergilerine tabi olabilir. Evrak hazırlığında size yol gösteriyoruz; gönderinize özel kesin durumu güncel mevzuat üzerinden gümrük müşavirinizle teyit etmenizi öneririz.",
    },
    {
      question: "Kısmi veya parsiyel gönderi yapabilir miyim?",
      answer:
        "Evet. Eşyanız aracı tek başına doldurmuyorsa aynı güzergâhtaki başka yüklerle paylaşımlı parsiyel seçeneğimizden yararlanabilirsiniz; birkaç koliden birkaç palete kadar esnek kapasite sunuyoruz. Komple panelvan yaklaşık 1.300 kg / 5 palet almaktadır.",
    },
    {
      question: "Almanya'dan Türkiye'ye kargo nasıl gönderilir?",
      answer:
        "Uygulamadan Almanya'daki alım adresinizi ve Türkiye'deki teslimat adresini girerek tahmini fiyatı görür, size uygun tarihi seçersiniz. Aracımız randevu günü kapınıza gelir; gümrük evrakları için hangi belgelerin gerekeceğini ekibimiz önceden bildirir. Yükleme sonrasında eşyanız aktarmasız olarak Türkiye'ye hareket eder ve alıcıya kapıda teslim edilir.",
    },
    {
      question: "Eşyamı yolda takip edebilir miyim?",
      answer:
        "Evet. Her gönderiye bir takip numarası tanımlanır; bu numarayla sevkiyatınızın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) görür, güzergâhı harita üzerinde takip edersiniz. Aracın o anki yerini öğrenmek isterseniz WhatsApp'tan sorabilirsiniz.",
    },
  ],
  related: [
    { slug: "almanya-kargo", label: "Türkiye'den Almanya'ya Panelvan Kargo" },
    { slug: "kesin-donus-nakliyat", label: "Kesin Dönüş Nakliyat" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
    { slug: "almanya-kargo-gumruk-vergisi", label: "Almanya Gümrük Vergisi ve Muafiyet Rehberi" },
  ],
};

export default almanyadanTurkiyeyeNakliyat;
