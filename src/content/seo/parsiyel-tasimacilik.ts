import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const parsiyelTasimacilik: SeoPageData = {
  slug: "parsiyel-tasimacilik",
  title: "Avrupa'ya Parsiyel ve Parça Eşya Taşıma | Koli Gönderimi | RouteEU",
  description:
    "Avrupa'ya parsiyel taşımacılık: koli, palet ve parça eşyanızı panelvan parsiyelle hızlı, aktarmasız ve sigortalı gönderin. Hacme göre fiyat, anında teklif.",
  h1: "Avrupa'ya Parsiyel Yük ve Koli Taşıma",
  intro: [
    "Avrupa'ya göndereceğiniz yük bir aracı dolduracak kadar büyük değilse komple panelvan kiralamanıza gerek yok. Parsiyel taşımacılıkta aynı güzergaha giden birden fazla göndericinin yükü tek araçta birleştirilir ve siz yalnızca kendi yükünüzün kapladığı hacim için ödeme yaparsınız. RouteEU Express, Türkiye'den Almanya, Hollanda, Belçika, Avusturya, Fransa ve diğer Avrupa ülkelerine panelvan parsiyel taşıma yapar: birkaç koliden yarım araçlık yüke kadar her ölçekte gönderi için ekonomik ve hızlı bir çözümdür.",
    "Klasik parsiyel denince akla haftalarca süren TIR organizasyonları gelir; bizim modelimiz farklıdır. Yükünüz adresinizden alınır, panelvana yüklenir ve depo aktarması olmadan doğrudan Avrupa'daki teslimat adresine gider. Tüm gönderiler sigortalı taşınır, 7/24 canlı GPS takibiyle kolinizin hangi ülkede olduğunu anlık görürsünüz ve uygulamadan saniyeler içinde hacme göre fiyat teklifi alırsınız.",
  ],
  transitTable: {
    caption: "Ekspres Hat Transit Süreleri (İstanbul Çıkışlı)",
    rows: [
      { destination: "İstanbul → Viyana", time: "20-32 saat" },
      { destination: "İstanbul → Berlin", time: "24-36 saat" },
      { destination: "İstanbul → Paris", time: "34-48 saat" },
      { destination: "İstanbul → Amsterdam", time: "30-46 saat" },
      { destination: "İstanbul → Brüksel", time: "30-46 saat" },
      { destination: "Genel Avrupa", time: "24-72 saat" },
    ],
  },
  priceTable: {
    caption: "Kıyas İçin: Komple Panelvan Fiyat Aralıkları",
    rows: [
      { route: "İstanbul → Berlin (komple panelvan)", price: priceRange("Berlin") },
      { route: "İstanbul → Amsterdam (komple panelvan)", price: priceRange("Amsterdam") },
      { route: "İstanbul → Viyana (komple panelvan)", price: priceRange("Viyana") },
    ],
    disclaimer:
      "Yukarıdaki aralıklar aracın tamamını kiraladığınız komple panelvan taşıma içindir. Parsiyel gönderiler bu tabloya göre değil, yükünüzün kapladığı hacme (desi/m³) göre fiyatlandırılır; kesin fiyat için uygulamadan anında teklif alın.",
  },
  sections: [
    {
      heading: "Parsiyel Taşımacılık Nedir?",
      paragraphs: [
        "Parsiyel (parça eşya) taşımacılık, tek başına bir aracı doldurmayan yüklerin aynı yöne giden diğer gönderilerle birleştirilerek taşınmasıdır. Araç maliyeti gönderiler arasında paylaşıldığı için her gönderici yalnızca kendi yükünün kapladığı alanın bedelini öder. Almanya'daki yakınınıza birkaç koli göndermek, Hollanda'daki müşterinize bir palet ürün ulaştırmak veya Belçika'ya küçük bir mobilya yollamak istiyorsanız parsiyel çoğu zaman en mantıklı seçenektir.",
        "RouteEU'da parsiyel yükler, komple taşımalarda kullandığımız aynı ekspres panelvan hatlarında taşınır. Yani parsiyel gönderdiğinizde ikinci sınıf bir hizmete değil, aynı hız standardının paylaşımlı versiyonuna erişirsiniz.",
      ],
    },
    {
      heading: "Panelvan Parsiyelin Klasik TIR Parsiyelinden Farkı",
      paragraphs: [
        "Geleneksel TIR parsiyelinde yükünüz önce bir toplama deposuna gider, orada araç dolana kadar bekler, ara depolarda elleçlenir ve varış ülkesinde yeniden dağıtıma girer; sektör ortalamasında bu süreç 7-15 gün sürer. Zincirin her halkası zaman kaybı ve hasar riski demektir. Panelvan parsiyel bu zinciri kısaltır:",
      ],
      list: [
        "Depo beklemesi yok: Araç dolduğunda değil, planlanan çıkış gününde yola çıkar; yükünüz haftalarca depoda araç beklemez.",
        "Daha az elleçleme: Koliniz yüklendiği panelvandan teslimata kadar inmez; forklift ve depo aktarması kaynaklı hasar riski en aza iner.",
        "Hafta sonu yasağı yok: Panelvanlar TIR'ların hafta sonu seyir yasağından muaftır; cuma çıkan yük pazartesiyi beklemeden yol alır.",
        "Çift şoför: Araç dinlenme molası için durmadan yola devam eder, transit süre kısalır.",
        "Kapıdan kapıya: Yükünüz adresinizden alınır, alıcının kapısına teslim edilir; şubeye götürme veya şubeden alma zorunluluğu yoktur.",
      ],
    },
    {
      heading: "Hangi Yükler Parsiyel Taşımaya Uygun?",
      paragraphs: [
        "Parsiyel taşıma, komple araç gerektirmeyen hemen her yük tipi için uygundur. Parsiyele en uygun gönderi türleri şunlardır:",
      ],
      list: [
        "Koli ve paketler: E-ticaret ürünleri, aileye gönderilen eşyalar, hediyeler, kitap ve kişisel eşya kolileri.",
        "Paletli ticari yük: Bir veya birkaç palet ürün, numune sevkiyatı, yedek parça ve fuar malzemesi.",
        "Valiz ve bavul: Öğrenci eşyaları, uzun süreli seyahat bagajı, taşınma öncesi ön gönderiler.",
        "Küçük mobilya ve beyaz eşya: Koltuk, komodin, televizyon, bisiklet gibi tekil parçalar.",
        "Not: Yanıcı, patlayıcı ve taşınması özel izne tabi maddeler parsiyel gönderilerde kabul edilmez.",
      ],
    },
    {
      heading: "Parsiyel Fiyatlandırma Nasıl Çalışır?",
      paragraphs: [
        "Parsiyel taşımada sabit bir liste fiyatı yoktur; fiyat, yükünüzün araçta kapladığı hacme göre hesaplanır. Sektörde bu hesap desi (hacimsel ağırlık) veya metreküp üzerinden yapılır: kolilerinizin en, boy ve yükseklik ölçüleri ile ağırlığı fiyatın temelini oluşturur. Aynı ağırlıkta ama daha hacimli bir yük, araçta daha fazla yer kapladığı için daha yüksek fiyatlandırılabilir.",
        "Bu yüzden size internette gördüğünüz genel geçer rakamlar yerine yükünüze özel fiyat sunarız: uygulamada kalkış ve varış noktanızı seçip yük bilgilerinizi girdiğinizde anında teklif alırsınız. Gönderiniz büyüdükçe birim maliyet düşer; yarım aracı aşan yüklerde komple panelvan çoğu zaman daha avantajlı hale gelir.",
      ],
    },
    {
      heading: "Parsiyel Taşıma Fiyatı Nasıl Hesaplanır?",
      paragraphs: [
        "Parsiyel fiyatının arkasındaki mantık tek cümleye sığar: yükünüzün, aracın toplam kapasitesi içinde kapladığı payın bedelini ödersiniz. Bu pay sektörde üç farklı birimle ölçülür ve hangisinin kullanılacağını yükünüzün tipi belirler:",
      ],
      list: [
        "Metreküp (m³): Koliler ve düzensiz şekilli yüklerde en, boy ve yükseklik çarpılarak hacim bulunur; fiyat, bu hacmin aracın 13-14 m³'lük toplam hacmine oranına göre şekillenir.",
        "Palet: Paletli ticari yüklerde hesap birimi palettir. Panelvan 5 Euro palet aldığı için tek palet, kabaca araç kapasitesinin beşte birine karşılık gelir ve buna göre fiyatlandırılır.",
        "LDM (yükleme metresi): Araç tabanında tam genişlikte kapladığınız uzunluğu ifade eder. Uzun, bölünemeyen veya üzerine istif yapılamayan yüklerde 1 metrelik taban şeridi başına hesap yapılır.",
      ],
    },
    {
      heading: "Avrupa'ya Palet Gönderme",
      paragraphs: [
        "Avrupa'ya palet göndermek isteyen üretici, toptancı ve e-ticaret firmaları için parsiyel panelvan, 1-5 palet arası ticari yüklerde hem hızlı hem ekonomik bir çözümdür. Standart Euro palet 80 × 120 cm taban ölçüsündedir; yaklaşık 180 cm yüksekliğe kadar istiflenmiş paletler araçlarımıza sorunsuz yüklenir. Tek palet için komple araç bedeli ödemek zorunda kalmazsınız: yalnızca paletinizin kapladığı alanın bedelini ödersiniz, yükünüz yine aynı ekspres hatta, aktarmasız taşınır.",
        "Palet hazırlığı transit güvenliğinin yarısıdır: ürünler palet tabanını taşmayacak şekilde dizilmeli, streç filmle sarılmalı ve gerekiyorsa köşebent ile çemberlenmelidir. Araç içinde paletler kaymaya karşı sabitlenir, tüm paletli gönderiler taşıma sigortası kapsamında yola çıkar ve 7/24 canlı GPS takibiyle sevkiyatınızın hangi ülkede olduğunu anlık görürsünüz. Palet sayınızı ve ölçülerinizi uygulamaya girerek saniyeler içinde anında teklif alabilirsiniz.",
      ],
    },
    {
      heading: "Komple Araç mı, Parsiyel mi? Karar Rehberi",
      paragraphs: [
        "İki hizmet arasındaki seçim üç soruya bakar: yükünüzün hacmi, teslimatın aciliyeti ve bütçeniz. Birkaç koli, birkaç valiz veya tek palet gönderiyorsanız parsiyel açık ara daha ekonomiktir; komple araç bedelinin küçük bir bölümüyle aynı ekspres hatta taşınırsınız. Yükünüz aracın yarısını aşıyorsa, teslim tarihi saat hassasiyetinde kritikse veya yükünüzün başka gönderilerle aynı araçta taşınmasını istemiyorsanız komple panelvan doğru tercihtir: araç yalnızca sizin için çalışır, rota üzerinde başka durak olmaz.",
        "Parsiyel gönderilerde araç birden fazla teslimat noktasına uğrayabileceği için varış süresi, tabloda verdiğimiz ekspres sürelerin üzerine birkaç saat ekleyebilir. Kararsızsanız uygulamadan her iki seçenek için de teklif alıp karşılaştırmanız yeterli; ekibimiz yük ölçülerinize göre hangi modelin daha avantajlı olduğunu söyler.",
      ],
    },
    {
      heading: "Avrupa'dan Türkiye'ye Parsiyel",
      paragraphs: [
        "Parsiyel hatlarımız çift yönlü çalışır: Almanya, Hollanda, Belçika, Avusturya veya Fransa'dan Türkiye'ye koli, palet ve parça eşya göndermek için de aynı model geçerlidir. Yükünüz Avrupa'daki adresten alınır, dönüş seferindeki panelvana yüklenir ve Türkiye'deki teslimat adresine kapıdan kapıya ulaştırılır; siz yine yalnızca kapladığınız hacmin bedelini ödersiniz.",
        "Bu yönü en çok Avrupa'da yaşayıp Türkiye'deki ailesine eşya gönderenler, Türkiye'ye numune veya iade sevkiyatı yapan firmalar ve dönüş hazırlığında ön gönderi yapanlar tercih eder. Daha büyük hacimli dönüş yükleri ve komple taşınmalar için Almanya'dan Türkiye'ye nakliyat hizmetimize göz atabilirsiniz: ev eşyanızın tamamı tek araçla, aktarmasız olarak Türkiye'deki yeni adresinize taşınır.",
      ],
    },
    {
      heading: "Süreç Nasıl İşliyor?",
      paragraphs: [
        "Parsiyel gönderiniz de komple taşımalarla aynı dört adımdan geçer; tek fark, aracın aynı yöne giden birkaç gönderiyi birlikte taşımasıdır:",
      ],
      list: [
        "Teklif: Uygulamada kalkış ve varış noktanızı seçin, koli veya palet ölçülerinizi girin; hacme göre tahmini fiyat anında hesaplanır. Onayınızla gönderiniz en yakın çıkışa planlanır ve taşıma sözleşmeniz oluşturulur.",
        "Alım: Planlanan günde aracımız adresinize gelir; kolileriniz etiketlenir, araç içindeki bölmesine yerleştirilir ve sabitlenir. Yükünüz bu andan itibaren sigorta kapsamındadır.",
        "Taşıma: Araç planlanan çıkış gününde, depo beklemeden Avrupa'ya hareket eder; gümrük geçişini ve anlık konumu 7/24 canlı GPS takibinden izlersiniz.",
        "Teslim: Gönderiniz alıcının kapısına teslim edilir; şubeden alma zorunluluğu yoktur. Teslimat bilgisi uygulamada anında görünür.",
      ],
    },
    {
      heading: "Gümrük ve Evrak Süreci",
      paragraphs: [
        "Türkiye'den Avrupa Birliği ülkelerine giden her gönderi, parsiyel de olsa gümrük işleminden geçer. Ticari yüklerde fatura ve ATR gibi belgeler, kişisel eşyalarda ise içerik beyanı sürecin temelini oluşturur; ekibimiz hangi evrakın gerektiği konusunda gönderi öncesinde size yol gösterir. Gümrük mevzuatı ve muafiyet şartları ülkeye ve yük tipine göre değişebildiğinden, özellikle ticari sevkiyatlarda güncel şartları gümrük müşavirinize veya ilgili ülkenin konsolosluğuna teyit ettirmenizi öneririz.",
      ],
    },
  ],
  faq: [
    {
      question: "Almanya'ya koli göndermek ne kadar?",
      answer:
        "Parsiyel gönderilerde sabit fiyat yoktur; ücret kolilerinizin hacmine (desi/m³) ve güzergaha göre hesaplanır. Uygulamada kalkış-varış noktanızı seçip yük bilgilerinizi girerek saniyeler içinde anında teklif alabilirsiniz. Kıyas için: aracın tamamını kiraladığınız komple panelvanda İstanbul-Berlin hattı " +
        priceRange("Berlin") +
        " aralığındadır; birkaç kolilik parsiyel gönderi bunun çok altında bir maliyetle taşınır.",
    },
    {
      question: "Avrupa'ya parsiyel gönderi kaç günde gider?",
      answer:
        "Panelvan parsiyelde yükünüz ekspres hatlarımızda taşınır: İstanbul'dan Viyana'ya 20-32 saat, Berlin'e 24-36 saat, Amsterdam'a 30-46 saat tipik sürelerdir. Araç birden fazla teslimat noktasına uğruyorsa bu sürelere birkaç saat eklenebilir. Klasik TIR parsiyelinde 7-15 günü bulan depo bekleme ve aktarma süreci bizim modelimizde yoktur.",
    },
    {
      question: "En az kaç koli veya kaç desi gönderebilirim?",
      answer:
        "Tek koli dahi gönderebilirsiniz; parsiyelde alt limit yoktur. Küçük gönderilerde birim maliyet görece yüksek kalabileceği için birden fazla koliniz varsa tek seferde göndermek genellikle daha avantajlıdır.",
    },
    {
      question: "Kolimi nasıl paketlemeliyim?",
      answer:
        "Sağlam, tercihen çift oluklu karton koli kullanın; kırılacak eşyaları balonlu naylonla sarıp koli içinde boşluk bırakmayın. Her kolinin üzerine alıcı adı, adresi ve telefon numarasını yazın. Panelvan parsiyelde elleçleme az olsa da yol boyunca titreşime dayanıklı paketleme her zaman en güvenli yaklaşımdır.",
    },
    {
      question: "Parsiyel gönderim sigortalı mı, takip edebilir miyim?",
      answer:
        "Evet. Parsiyel gönderiler de komple taşımalar gibi taşıma sigortası kapsamındadır ve araçtaki 7/24 canlı GPS takibi sayesinde kolinizin anlık konumunu takip sayfasından görebilirsiniz.",
    },
    {
      question: "Parsiyel yükte gümrük işlemi nasıl olur?",
      answer:
        "Araçtaki tüm gönderiler tek taşıma kapsamında sınırdan geçer; her göndericinin yükü kendi evrakıyla beyan edilir. Ticari ürünlerde fatura, kişisel eşyalarda içerik beyanı gerekir. Evrak hazırlığında ekibimiz size yol gösterir; ülkeye göre değişen güncel muafiyet ve vergi şartlarını gümrük müşavirinize veya konsolosluğa teyit ettirmenizi öneririz.",
    },
    {
      question: "Parsiyel taşımada fiyat neye göre belirlenir?",
      answer:
        "Üç etken belirler: yükünüzün araçta kapladığı pay (m³, palet sayısı veya yükleme metresi olarak ölçülür), güzergâhın uzunluğu ve yükün ağırlığı. Aynı ağırlıkta ama daha hacimli bir yük daha fazla yer kapladığı için daha yüksek fiyatlanabilir. Ölçülerinizi uygulamaya girdiğinizde hesap sizin için otomatik yapılır ve anında teklif ekranınıza düşer.",
    },
    {
      question: "Tek palet gönderebilir miyim?",
      answer:
        "Evet. Tek Euro palet, panelvan kapasitesinin kabaca beşte birine karşılık gelir ve yalnızca bu payın bedelini ödersiniz; komple araç kiralamanız gerekmez. Paletinizin ölçü ve ağırlığını uygulamaya girerek saniyeler içinde fiyat teklifi alabilirsiniz.",
    },
    {
      question: "Yüküm başka yüklerle mi taşınıyor, güvenli mi?",
      answer:
        "Parsiyelde araç aynı yöne giden birden fazla gönderiyi taşır; ancak her gönderi araç içinde ayrılmış bölmesinde sabitlenir, etiketlenir ve teslimata kadar yerinden oynamaz. Tüm gönderiler taşıma sigortası kapsamındadır, araç 7/24 canlı GPS ile izlenir ve depo aktarması olmadığı için elleçleme kaynaklı hasar riski klasik parsiyele göre çok daha düşüktür.",
    },
  ],
  related: [
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan & Panelvan Ekspres Taşımacılık" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "hollanda-kargo", label: "Hollanda'ya Panelvan Kargo" },
    { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
    { slug: "almanyadan-turkiyeye-nakliyat", label: "Almanya'dan Türkiye'ye Nakliyat" },
    { slug: "bavul-kargo", label: "Avrupa'ya Bavul Kargo" },
  ],
};

export default parsiyelTasimacilik;
