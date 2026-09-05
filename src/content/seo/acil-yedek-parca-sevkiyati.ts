import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const acilYedekParcaSevkiyati: SeoPageData = {
  slug: "acil-yedek-parca-sevkiyati",
  title: "Avrupa'ya Acil Yedek Parça Sevkiyatı | Aynı Gün Çıkış | RouteEU",
  description:
    "Üretim hattı durdu mu? Acil yedek parçanız aynı gün çıkar, çift şoförle aktarmasız Münih, Stuttgart, Milano ve Viyana'ya 24-48 saatte teslim. Takip numarasıyla aşama takibi.",
  h1: "Avrupa'ya Acil Yedek Parça ve Time-Critical Sevkiyat",
  intro: [
    "Üretim hattı durduğunda saat değil, dakika sayarsınız. Almanya'daki bir montaj hattı Türkiye'den gelecek tek bir kalıbı, rulmanı ya da kontrol kartını bekliyorsa her saat hattın durması, cezai şart ve müşteri kaybı demektir. RouteEU Express, Türkiye'den Avrupa'ya acil yedek parça sevkiyatını kapıdan kapıya panelvan ekspresle yapar: talebiniz alındığı gün araç fabrikanıza gelir, parça yüklenir ve depo, aktarma ya da uçuş saati beklemeden doğrudan Avrupa'daki tesise hareket eder.",
    "Çift şoförle çalışan panelvanımız mola vermeden yol alır; hafta sonu TIR seyir yasağından muaf olduğu için cuma akşamı çıkan parça pazartesiyi beklemez. Viyana'ya 20-32, Münih ve Milano'ya 24-36, Stuttgart'a 28-40 saat içinde teslim ederiz. Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; talep üzerine beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Takip numaranızla bakım ekibiniz sevkiyatın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) görür, aracın o anki yerini WhatsApp'tan sorabilir; hat yeniden çalışana kadar saati sizinle birlikte izleriz.",
  ],
  transitTable: {
    caption: "Türkiye - Avrupa Acil Sevkiyat Transit Süreleri",
    rows: [
      { destination: "İstanbul → Münih", time: "24-36 saat" },
      { destination: "İstanbul → Stuttgart", time: "28-40 saat" },
      { destination: "İstanbul → Milano", time: "24-36 saat" },
      { destination: "İstanbul → Viyana", time: "20-32 saat" },
      { destination: "Bursa → Stuttgart", time: "30-42 saat" },
    ],
  },
  priceTable: {
    caption: "Avrupa'ya Acil Yedek Parça Sevkiyatı Fiyatları",
    rows: [
      { route: "İstanbul → Münih", price: priceRange("Münih") },
      { route: "İstanbul → Stuttgart", price: priceRange("Stuttgart") },
      { route: "İstanbul → Milano", price: priceRange("Milano") },
      { route: "İstanbul → Viyana", price: priceRange("Viyana") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Kesin fiyat için uygulama üzerinden anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Üretim Hattı Durduğunda Süreç",
      paragraphs: [
        "Acil sevkiyatta en pahalı şey belirsizliktir; bu yüzden ilk temastan teslimata kadar her adımı saat bazında planlarız:",
      ],
      list: [
        "Bildirim: Telefonla veya uygulamadan parçanın ölçü, ağırlık ve alım adresini iletirsiniz; uygulamadan tahmini fiyatı anında görürsünüz.",
        "Araç ataması: Talep onaylandığı anda en yakın panelvan ve çift şoför ekibi atanır; İstanbul, Bursa ve Kocaeli gibi sanayi bölgelerinde araç genellikle 2-4 saat içinde adresinizdedir.",
        "Aynı gün çıkış: Parça yüklenir, ATR ve fatura kontrol edilir, araç aynı gün sınıra doğru hareket eder.",
        "Kesintisiz seyir: Çift şoför sayesinde araç gece boyunca yol alır; sınır geçişinden sonra doğrudan tesise gider.",
        "Teslim: Parça bakım ekibinize kapıda, gerekirse üretim hattının yanına teslim edilir; teslim tutanağı uygulamada anında görünür.",
      ],
    },
    {
      heading: "Neden Kurye Değil Panelvan?",
      paragraphs: [
        "Acil parça denince akla ilk gelen uluslararası kurye olur; ancak kurye ağları hız için değil hacim için tasarlanmıştır. Paketiniz önce şehir içi toplama merkezine, oradan ülke aktarma merkezine, sonra havalimanına gider; uçak kapasitesini ve uçuş saatini bekler, varış ülkesinde yeniden aktarma merkezi ve dağıtım aracı zinciri başlar. Her aktarma bir bekleme, her bekleme bir gecikme riskidir. Üstelik kurye kargoları ağırlık ve ölçü sınırına tabidir: paletli bir redüktör, iki metrelik bir mil ya da 300 kilogramlık bir kalıp uçağa sığmaz; sığsa da havayolunun boyut ve tehlikeli madde kurallarına takılır.",
        "Panelvan ekspreste zincir yoktur. Araç fabrikanızdan parçayı alır ve aynı araç Avrupa'daki tesise teslim eder; arada depo, aktarma merkezi ya da uçuş penceresi bulunmaz. 1.300 kilograma ve 5 palete kadar yükü tek seferde taşırız, tek parça ağırlıkta 1 tona kadar çıkabiliriz. Gümrük işlemleri sürecin parçasıdır, alıcının üzerine kalmaz. Ağır, hacimli ya da birden fazla parçadan oluşan acil yüklerde panelvan çoğu zaman kuryeden daha hızlı, ekspres hava kargodan ise belirgin biçimde daha öngörülebilirdir.",
      ],
    },
    {
      heading: "Çift Şoför Farkı",
      paragraphs: [
        "Uluslararası karayolu taşımacılığında tek şoför, sürüş ve dinlenme kurallarına göre günde belirli bir süre araç kullanabilir; geri kalan saatlerde araç park halinde bekler. İstanbul-Münih gibi bir güzergâhta bu zorunlu molalar transit süreyi neredeyse ikiye katlar. Çift şoför uygulamasında bir şoför direksiyondayken diğeri dinlenir; araç yalnızca yakıt ve sınır işlemleri için durur. Sonuç, aynı mesafenin kesintisiz ve öngörülebilir bir saatte tamamlanmasıdır.",
        "Çift şoförün ikinci faydası güvenliktir: yorgun şoför riski ortadan kalkar, yük hiçbir zaman gözetimsiz kalmaz. Acil parça sevkiyatında bu iki unsur, teslim saatinin sabit kalmasının asıl güvencesidir.",
      ],
    },
    {
      heading: "Sektör Ortalaması ile Karşılaştırma",
      paragraphs: [
        "Parsiyel TIR taşımacılığı Türkiye-Avrupa hattında 7-15 gün sürer: yük depoda araç dolmasını bekler, sınırda TIR kuyruğuna girer, hafta sonu seyir yasağıyla durur ve varışta dağıtım deposunda bir kez daha sıra bekler. Planlı stok sevkiyatı için makul olan bu model, duran bir hat için kabul edilemez. Panelvan ekspres aynı güzergâhı 24-48 saatte, sabit bir teslim saatiyle tamamlar. Fark yalnızca hız değil, hesaplanabilirliktir: bakım planlamacınız parçanın hangi saatte tesiste olacağını bilir ve hattın yeniden devreye alınmasını buna göre programlar.",
      ],
    },
    {
      heading: "Hangi Sektörlere Çalışıyoruz?",
      paragraphs: [
        "Time-critical sevkiyat talepleri belirli sektörlerde yoğunlaşır; her birinin parça tipini ve teslim koşullarını tanıyoruz:",
      ],
      list: [
        "Otomotiv yan sanayi: Almanya, Avusturya ve İtalya'daki ana sanayi ve birinci kademe tedarikçi hatlarına kalıp, fikstür, döküm ve enjeksiyon parçası; hat durma cezalarına karşı saat bazlı teslim.",
        "Makine imalat: Redüktör, mil, servo motor, PLC ve kontrol kartı gibi Avrupa'daki müşteri tesislerinde montaj ya da servis bekleyen parçalar.",
        "Tekstil makineleri: Dokuma, örme ve boyahane hatlarında arızalanan bileşenlerin yedeği; sezon döneminde duran hat için ekspres teslim.",
        "Medikal cihaz: Hastane ve laboratuvar cihazlarına ait modül ve yedek parçalar; hassas ambalajlı, aktarmasız ve CMR sorumluluğu altında, talep üzerine ek sigortalı taşıma.",
        "Enerji ve endüstriyel tesisler: Türbin, kompresör ve pompa bileşenleri; plansız duruşlarda tek parça ağır yük taşıması.",
      ],
    },
    {
      heading: "Güven: Sigorta, Sözleşme ve Sevkiyat Takibi",
      paragraphs: [
        "Acil sevkiyatta hız kadar hesap verebilirlik de önemlidir; bu yüzden süreci yazılı ve izlenebilir kurarız:",
      ],
      list: [
        "Taşıyıcı sorumluluğu ve sigorta: Her sevkiyat, CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında taşınır; bu sorumluluk yasa gereği brüt kilogram başına 8,33 SDR ile sınırlıdır. Yüksek değerli kalıp ve elektronik modüllerde bu tavan çoğu zaman eşyanın gerçek değerini karşılamaz; bu nedenle talep üzerine, beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz.",
        "Yazılı sözleşme: Alım saati, teslim adresi ve fiyat tek belgede sabitlenir; yol boyunca ek ücret sürprizi yoktur.",
        "Aşama takibi: Takip numaranızla sevkiyatın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) uygulamadan görürsünüz; aracın o anki yerini WhatsApp'tan sorar, tahmini varış saatini Avrupa'daki bakım ekibine iletirsiniz.",
        "Kapıda teslim: Parça tesisin kapısına, gerekirse üretim hattının yanına kadar aynı araçla gider; teslim tutanağı anında uygulamaya düşer.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Acil yedek parça sevkiyatı dört adımda tamamlanır ve her adımı uygulamadan izlersiniz:",
      ],
      list: [
        "Teklif: Uygulamadan kalkış ve varış noktasını seçin, tahmini fiyatı anında görün; acil sevkiyat için telefon hattımız da 7/24 açıktır.",
        "Alım: Atanan araç sanayi bölgelerinde 2-4 saat içinde fabrikanızdadır; parça, ATR ve fatura kontrol edilerek yüklenir.",
        "Taşıma: Araç aynı gün çıkar, çift şoförle kesintisiz seyreder; güzergâhı haritada görür, o anki yerini WhatsApp'tan sorarsınız.",
        "Teslim: Parça Avrupa'daki tesise kapıda teslim edilir; alıcı imzasıyla süreç uygulamada kapanır.",
      ],
    },
  ],
  faq: [
    {
      question: "Avrupa'ya acil yedek parça en hızlı ne kadar sürede teslim edilir?",
      answer:
        "İstanbul'dan Viyana'ya 20-32 saat, Münih ve Milano'ya 24-36 saat, Stuttgart'a 28-40 saat içinde teslim ederiz; Bursa çıkışlı bir sevkiyat Stuttgart'a 30-42 saatte ulaşır. Süre, aracın adresinize varışından itibaren hesaplanır ve çift şoförle kesintisiz seyir sayesinde sabit kalır.",
    },
    {
      question: "Aynı gün çıkış mümkün mü?",
      answer:
        "Evet. Sabah saatlerinde bildirilen talepte araç İstanbul, Bursa ve Kocaeli gibi sanayi bölgelerinde genellikle 2-4 saat içinde adresinizde olur; parça ve gümrük evrakı hazırsa araç aynı gün sınıra doğru hareket eder. Fatura ve ATR belgesinin yükleme anında hazır olması aynı gün çıkışın ön koşuludur.",
    },
    {
      question: "Gece ve hafta sonu çalışıyor musunuz?",
      answer:
        "Evet. Acil sevkiyat hattımız 7/24 açıktır; panelvanlar hafta sonu TIR seyir yasağından muaf olduğu için cumartesi ve pazar günleri de yükleme ve seyir devam eder. Cuma akşamı çıkan parça pazartesi sabahı Avrupa'daki tesistedir.",
    },
    {
      question: "Ağır tek parça (1 tona kadar) taşınır mı?",
      answer:
        "Evet. Araç kapasitemiz yaklaşık 1.300 kg / 5 palettir ve tek parça ağırlıkta 1 tona kadar yük taşıyabiliriz. Kalıp, redüktör veya döküm gövde gibi ağır parçalarda alım ve teslim noktasında forklift ya da vinç imkânının bulunması gerekir; ölçü ve ağırlığı teklif aşamasında paylaşırsanız aracı ve bağlama ekipmanını buna göre planlarız.",
    },
    {
      question: "Acil yedek parça sevkiyatı fiyatı nasıl belirlenir?",
      answer:
        "Fiyatı güzergâh, araç ataması ve sezon belirler; komple panelvan için örneğin İstanbul-Münih hattında " +
        priceRange("Münih") +
        " aralığındadır. Acil sevkiyatlarda araç yalnızca sizin yükünüz için ayrıldığından parsiyel paylaşım olmaz; kesin fiyat için uygulamadan kalkış ve varış noktasını seçerek anında teklif alabilirsiniz.",
    },
    {
      question: "Parçamın nerede olduğunu nasıl takip ederim?",
      answer:
        "Her sevkiyata bir takip numarası tanımlanır. Uygulamadaki gönderi takip sayfasından sevkiyatın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) görür, güzergâhı harita üzerinde izlersiniz; aracın o anki yerini WhatsApp'tan sorabilir, tahmini varış saatini Avrupa'daki bakım ekibiyle paylaşabilirsiniz. Teslim anında tutanak uygulamaya düşer.",
    },
    {
      question: "Acil sevkiyat için hangi gümrük evrakları gerekir?",
      answer:
        "Ticari yedek parça için fatura ve ATR belgesi temel evraktır; Türkiye-AB gümrük birliği kapsamındaki sanayi ürünlerinde çoğu durumda ek vergi doğmaz. Garanti kapsamında değişim veya tamir için gidip geri dönecek parçalarda farklı rejimler söz konusu olabilir. Evrak hazırlığında yol gösteririz; parçaya özel güncel mevzuatı gümrük müşavirinizle teyit edin.",
    },
    {
      question: "Türkiye'nin hangi şehirlerinden alım yapıyorsunuz?",
      answer:
        "Tüm Türkiye'den. İstanbul, Bursa, Kocaeli, İzmir, Konya ve Ankara gibi sanayi merkezlerinde araç ataması en hızlıdır; diğer şehirlerde alım süresi mesafeye göre planlanır ve teklif aşamasında saat olarak bildirilir.",
    },
  ],
  related: [
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "fuar-tasimaciligi", label: "Yurtdışı Fuar Taşımacılığı" },
    { slug: "polonya-kargo", label: "Polonya'ya Panelvan Kargo" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
  ],
};

export default acilYedekParcaSevkiyati;
