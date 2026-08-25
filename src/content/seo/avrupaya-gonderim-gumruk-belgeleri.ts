import type { SeoPageData } from "./seoData";

const avrupayaGonderimGumrukBelgeleri: SeoPageData = {
  slug: "avrupaya-gonderim-gumruk-belgeleri",
  title: "Avrupa'ya Gönderimde Gümrük Belgeleri: CMR, ATR, T1, Fatura",
  description:
    "Türkiye'den Avrupa'ya karayolu gönderiminde hangi evraklar gerekir? CMR, ATR, EUR.1, T1 transit beyannamesi, fatura ve çeki listesi adım adım anlatılıyor.",
  h1: "Türkiye'den Avrupa'ya Karayolu Gönderiminde Gümrük Belgeleri",
  intro: [
    "Avrupa'ya ilk kez yük gönderen hemen herkes aynı yerde takılır: ortada birbirine benzeyen kısaltmalarla dolu bir belge listesi vardır, kimin neyi hazırlayacağı belirsizdir ve eksik bir kağıt yüzünden aracın sınırda beklediği hikayeler kulaktan kulağa dolaşır. Oysa karayolu ihracatındaki evrak zinciri, mantığı bir kez kavrandığında oldukça düzenli işleyen bir yapıdır.",
    "Bu rehberde zinciri baştan sona açıyoruz: hangi belge neyi kanıtlar, kim düzenler, hangi aşamada devreye girer ve en sık yapılan hatalar nelerdir. CMR'den ATR'ye, ticari faturadan T1 transit beyannamesine kadar her başlığı, ilk kez gönderi yapan birinin anlayacağı sadelikte ele alıyoruz.",
    "Baştan söyleyelim: mevzuat ve belge uygulamaları ülkeye, ürüne ve döneme göre değişebilir. Bu sayfa genel bir çerçeve sunar, resmi danışmanlık yerine geçmez; somut sevkiyat öncesinde Ticaret Bakanlığı'nın güncel düzenlemelerini ve gümrük müşavirinizin görüşünü esas alın.",
  ],
  sections: [
    {
      heading: "Karayolu İhracatında Evrak Zincirine Genel Bakış",
      paragraphs: [
        "Bir yükün Türkiye'den çıkıp Avrupa'daki adrese ulaşması, birbirini tetikleyen üç halkadan oluşur. Birinci halka malın ne olduğunu ve ne değerde olduğunu anlatır: ticari fatura ve çeki listesi. İkinci halka bu bilgiyi resmi beyana dönüştürür: ihracat beyannamesi ve varsa dolaşım ya da menşe belgeleri. Üçüncü halka ise malın fiziken taşındığını ve kime teslim edildiğini kanıtlar: CMR ve transit belgeleri.",
        "Bu üç halka tutarlı olmak zorundadır. Faturadaki koli sayısıyla çeki listesindeki koli sayısı, beyannamedeki ağırlıkla CMR'deki ağırlık birbirini tutmalıdır. Gümrük idaresinin ilk baktığı şey karmaşık bir mevzuat detayı değil, bu tutarlılıktır.",
        "Ürün grubuna göre zincire ek halkalar da eklenebilir: gıda ve tarım ürünlerinde sağlık veya kontrol belgeleri, elektrikli cihazlarda uygunluk beyanları, tekstilde ihracatçı birlikleri onayı gibi. Bazı ürünler ise hiçbir belgeyle taşınamaz; örneğin ilaçların posta ve kargo yoluyla Avrupa Birliği ülkelerine gönderilmesi yasal olarak kısıtlıdır ve RouteEU ilaç taşımaz. Bu tür kalemleri gönderi planına hiç dahil etmemek en doğrusudur.",
      ],
      list: [
        "Ticari fatura: Malın cinsi, miktarı, kıymeti ve teslim şekli.",
        "Çeki listesi (packing list): Koli/palet dökümü, brüt ve net ağırlık, ölçüler.",
        "İhracat beyannamesi: Gümrük müşaviri tarafından elektronik ortamda tescil edilir.",
        "ATR ya da EUR.1: Ürünün tarife pozisyonuna göre değişen dolaşım veya menşe belgesi.",
        "CMR: Uluslararası karayolu taşıma irsaliyesi; taşıyıcı düzenler.",
        "T1 transit beyannamesi veya TIR karnesi: Transit rejiminde hareket eden yükler için.",
      ],
    },
    {
      heading: "CMR: Uluslararası Taşıma İrsaliyesi",
      paragraphs: [
        "CMR, adını uluslararası karayolu taşımacılığını düzenleyen konvansiyondan alır ve pratikte iki işlevi vardır: taşıma sözleşmesinin varlığını ispatlar, malın taşıyıcıya belirtilen durumda teslim edildiğini gösterir. Yani hem sözleşme belgesi hem de teslim belgesidir.",
        "Belgeyi kural olarak taşıyıcı düzenler; ancak içindeki bilgilerin doğruluğu için göndericinin verdiği veriler esastır. Üzerinde gönderici, alıcı ve taşıyıcı bilgileri, yükleme ve boşaltma yerleri, malın tanımı, koli adedi, brüt ağırlık ve eşlik eden belgelerin listesi yer alır. Nüshalar gönderici, alıcı ve taşıyıcı arasında paylaştırılır; bir nüsha mala eşlik eder.",
        "İşin en kritik kısmı teslim anındadır. Alıcı malı teslim alırken CMR'yi imzalar ve kaşeler; bu imza teslimin kanıtıdır. Eğer kolilerde ezik, ıslaklık, eksik parça gibi bir durum varsa bunun teslim anında CMR üzerine şerh olarak yazılması gerekir. Şerh düşülmeden imzalanmış bir CMR, sonradan yapılacak hasar bildiriminde ispat gücünü büyük ölçüde zayıflatır. Sigorta sürecinin en sık tıkandığı nokta da tam olarak burasıdır.",
        "Kısacası CMR bürokratik bir formalite değil, hak arayışının dayanağıdır. Teslim alan kişiye \"imzalamadan önce paketlere bak\" demek, gönderici olarak yapabileceğiniz en değerli hatırlatmadır.",
      ],
    },
    {
      heading: "ATR Dolaşım Belgesi ve EUR.1",
      paragraphs: [
        "Türkiye ile Avrupa Birliği arasındaki Gümrük Birliği, sanayi ürünleri ile işlenmiş tarım ürünlerinin sanayi payını kapsar. Bu kapsamdaki ürünlerde tarife avantajından yararlanmanın yolu ATR Dolaşım Belgesi'nden geçer.",
        "ATR bir serbest dolaşım belgesidir; malın Türkiye'de üretilmiş olduğunu değil, Türkiye'de serbest dolaşımda bulunduğunu gösterir. Üçüncü bir ülkeden ithal edilip Türkiye'de gümrük işlemleri tamamlanmış bir ürün için de düzenlenebilmesi bu yüzdendir. Belgeyi ihracatçı veya gümrük müşaviri hazırlar, gümrük idaresi vize eder. Vize edilmemiş bir ATR hükümsüzdür.",
        "Gümrük Birliği'nin dışında kalan alanlarda ise devreye menşe ispatı girer. Tarım ürünleri ile kömür ve çelik ürünlerinde tercihli tarifeden yararlanmak için EUR.1 Dolaşım Sertifikası gibi belgeler gerekir. Aynı şekilde Avrupa Birliği üyesi olmayan ancak Türkiye ile serbest ticaret anlaşması bulunan ülkelere yapılan gönderilerde de ATR değil, menşe ispatına dayalı belgeler kullanılır.",
        "Hangi belgeye ihtiyaç duyulacağını ürünün tarife pozisyonu, yani GTİP kodu belirler. Bu yüzden GTİP'i sevkiyattan önce doğru tespit etmek, sonradan yapılacak tüm düzeltmelerden ucuzdur.",
        "Belge kapsamları ve anlaşma listeleri güncellenebildiği için, ürününüzün ATR mi yoksa menşe ispatı mı gerektirdiğini işlem öncesinde Ticaret Bakanlığı'nın resmi düzenlemelerinden ve gümrük müşavirinizden teyit edin.",
      ],
    },
    {
      heading: "Ticari Fatura ve Çeki Listesi Nasıl Doldurulur?",
      paragraphs: [
        "Gümrük sürecinin omurgası ticari faturadır. İdare eşyanın kıymetini, cinsini ve vergisel sonucunu bu belge üzerinden değerlendirir. Faturada gönderici ve alıcının tam unvanı ve açık adresi, vergi ve EORI numaraları, fatura numarası ve tarihi, ürünün ayrıntılı tanımı ve GTİP kodu, miktar, birim fiyat, toplam kıymet, para birimi, ödeme şekli ve teslim şekli bulunmalıdır.",
        "Çeki listesi ise faturanın fiziksel karşılığıdır: hangi kolide ne var, kaç parça, brüt ve net ağırlık ne kadar, ölçüler nedir. Çok kalemli sevkiyatlarda çeki listesi olmadan fiziki muayene yapmak neredeyse imkansızdır ve muayene uzarsa araç bekler.",
        "En sık karşılaştığımız hatalar şaşırtıcı derecede basittir ve hepsi önlenebilir niteliktedir:",
      ],
      list: [
        "Ürün tanımının \"çeşitli malzeme\", \"hediyelik eşya\" gibi genel yazılması; somut cins, malzeme ve kullanım amacı belirtilmemesi.",
        "Fatura ile çeki listesi arasında koli adedi ya da ağırlık uyuşmazlığı bulunması.",
        "Alıcı unvanının fatura, beyanname ve CMR'de farklı biçimlerde yazılması.",
        "Teslim şeklinin (DAP, DDP, EXW gibi) faturaya hiç yazılmaması.",
        "Para biriminin belirtilmemesi ya da tutarın rakam ve yazıyla farklı gösterilmesi.",
        "GTİP kodunun tahminen yazılması; yanlış kod hem vergi oranını hem gerekli belgeyi değiştirir.",
        "İmza ve kaşe eksikliği ile faturanın yalnızca Türkçe düzenlenmesi; İngilizce tanım eklenmesi süreci hızlandırır.",
      ],
    },
    {
      heading: "T1 Transit Beyannamesi ve AB Dışı Ülkeler",
      paragraphs: [
        "Bir yük Avrupa Birliği gümrük bölgesine girdiğinde iki durumdan biri geçerlidir: ya o noktada ithalat işlemleri tamamlanır, ya da eşya serbest dolaşıma girmeden transit rejiminde varış gümrüğüne kadar hareket eder. İkinci durumda kullanılan belge T1 transit beyannamesidir.",
        "T1, Ortak Transit Rejimi kapsamında elektronik olarak (NCTS üzerinden) düzenlenir ve eşyanın giriş gümrüğünden varış gümrüğüne kadar vergileri askıya alınmış şekilde ilerlemesini sağlar. Varışta beyanname kapatılır ve ithalat işlemi orada yapılır. Bunun pratik faydası açıktır: yük, sınır kapısında saatlerce ithalat işlemi beklemek yerine varış noktasındaki gümrükte, alıcının müşaviriyle koordineli biçimde işlem görür. Karayolu taşımacılığında T1'in yanı sıra TIR karnesi de transit için kullanılan bir başka yöntemdir.",
        "Avrupa Birliği üyesi olmayan ülkelerde tablo değişir. İsviçre, Birliğin gümrük bölgesi dışındadır; Ortak Transit Sözleşmesi'ne taraf olduğu için transit hareketi sorunsuz kurgulanır, ancak İsviçre'ye yapılan teslimlerde ayrı bir ithalat işlemi ve İsviçre'nin kendi vergi düzeni devreye girer. AB üzerinden geçip İsviçre'de boşaltılan yüklerde transit ve ithalat aşamalarının doğru sıralanması gerekir. Brexit sonrasında İngiltere'ye gönderilerde de ayrı bir ithalat prosedürü uygulanır.",
        "Transit uygulamaları ve elektronik sistem gereklilikleri değişebildiğinden, güzergahınızdaki ülke için geçerli usulü sevkiyattan önce gümrük müşavirinizle teyit etmenizi öneririz.",
      ],
    },
    {
      heading: "ETGB ve Mikro İhracat: Küçük Gönderilerde Kısa Yol",
      paragraphs: [
        "Düşük değerli ve düşük ağırlıklı gönderiler için mevzuat, klasik beyanname sürecine göre daha hızlı işleyen bir yol tanımlar: ETGB, yani Elektronik Ticaret Gümrük Beyannamesi. Mikro ihracat olarak da anılan bu usulde beyan, yetkilendirilmiş hızlı kargo veya posta operatörü aracılığıyla elektronik ortamda yapılır ve gönderici her sevkiyat için ayrı bir müşavirlik süreci yürütmek zorunda kalmaz.",
        "ETGB'nin kıymet ve ağırlık bakımından üst sınırları vardır; bu sınırlar aşıldığında normal ihracat beyannamesi düzenlenmesi gerekir. Sınır değerleri dönemsel olarak güncellendiği için burada kesin rakam vermiyoruz. Özellikle Etsy, eBay ve kendi sitesi üzerinden Avrupa'ya satış yapan küçük ölçekli satıcılar için ETGB, süreci ciddi biçimde sadeleştirir.",
        "ETGB ile taşıma modelini karıştırmamak gerekir: ETGB bir beyan usulüdür, taşıma şeklini belirlemez. Aynı gönderi ETGB kapsamında beyan edilip farklı taşıma yöntemleriyle Avrupa'ya ulaştırılabilir. Mikro ihracatın ayrıntılarını ve hangi durumda tercih edilmesi gerektiğini ayrı bir ETGB rehberinde ele alıyoruz.",
        "Kıymet ve ağırlık eşikleri güncellenebildiği için, gönderiniz ETGB kapsamına giriyor mu sorusunu işlem öncesinde Ticaret Bakanlığı'nın resmi duyurularından ve gümrük müşavirinizden teyit edin.",
      ],
    },
    {
      heading: "Zati Eşya ve Ev Eşyasında Evrak Farkı",
      paragraphs: [
        "Ticari sevkiyatlarla taşınma amaçlı gönderiler aynı belge mantığına tabi değildir. Kullanılmış ev eşyası, yani zati eşya, satışa konu olmadığı için ticari fatura yerine ayrıntılı bir eşya listesiyle (envanter) beyan edilir. Listede her kalemin cinsi, adedi ve yaklaşık değeri yer alır; kapalı kolilerin içeriğinin de dökümlenmesi beklenir.",
        "Buna ek olarak kişinin ikamet değişikliğini kanıtlayan belgeler istenir: pasaport, ikamet izni ya da adres kaydı, bazı durumlarda konsolosluk onaylı belgeler. Muafiyetten yararlanmak için eşyanın kullanılmış olması, belirli bir süre kişinin kullanımında bulunmuş olması ve taşınmanın belirli bir zaman aralığında gerçekleşmesi gibi şartlar aranabilir. Kesin dönüş nakliyat işlerinde bu belgelerin taşımadan haftalar önce hazırlanmaya başlanması gerekir.",
        "Öğrenci eşyası, bavul ve koli gönderileri gibi ara durumlarda ise beyan, gönderinin ticari olmadığını gösterecek şekilde kurgulanır. Burada da içerik listesi hazırlamak ve kıymeti gerçekçi göstermek en önemli iki adımdır.",
        "Zati eşya muafiyetinin şartları ve süreleri değişebildiğinden, taşınma planınızı yapmadan önce güncel düzenlemeleri Ticaret Bakanlığı'nın resmi kaynaklarından ve gümrük müşavirinizden teyit edin.",
      ],
    },
    {
      heading: "Kim Ne Yapar? Gönderici, Gümrük Müşaviri, Taşıyıcı",
      paragraphs: [
        "Sürecin en çok kafa karıştıran yönü, sorumluluğun üç taraf arasında paylaşılmasıdır. Görev dağılımı netleştiğinde iş büyük ölçüde kolaylaşır.",
        "Gönderici; malın ne olduğunu, kime, hangi teslim şekliyle gittiğini ve kıymetini bilir. Ticari faturayı ve çeki listesini hazırlar, GTİP kodunu ve ürünün özel izin gerektirip gerektirmediğini araştırır, alıcının vergi ve EORI bilgilerini temin eder. Zincirin doğruluğu buradan başlar.",
        "Gümrük müşaviri; beyannameyi tescil eden, ATR ya da EUR.1 belgelerini hazırlayıp vize ettiren, mevzuat sorularının muhatabı olan taraftır. Ürün grubuna özel izin ve sertifikaların takibi de onun alanına girer. Türkiye tarafında ihracat beyanını yapan müşavirle, varış ülkesinde ithalat beyanını yapan müşavirin farklı kişiler olabileceğini unutmayın.",
        "Taşıyıcı olarak RouteEU'nun rolü ise fiziki taşıma ayağıdır: aracın planlanması, yükün alınması, CMR'nin düzenlenmesi, transit belgelerinin araca eşlik etmesi, sınır geçişlerinin takibi ve varış adresinde teslimin imza karşılığı tamamlanması. Gümrük müşavirliği yapmıyoruz; ancak yükleme öncesinde evrakınızda gözümüze çarpan bir eksikliği söylemekten kaçınmıyoruz, çünkü sınırda düzeltilen bir hata her zaman ofiste düzeltilenden pahalıdır.",
        "Taşıma tarafında panelvan modelinin en somut faydası, evrak-zaman ilişkisidir. Yük depoda toplanmayı beklemez, aktarma noktalarında elden ele geçmez; çift şoförlü araç yaklaşık 1.300 kilogram ve 5 palet kapasitesiyle doğrudan varış adresine ilerler, yakın Avrupa hatlarında teslimat tipik olarak 24-48 saatte tamamlanır. Hafta sonu TIR yasağından muaf olduğumuz için cuma yüklenen bir sevkiyat pazartesiyi beklemez. Fuar taşımacılığı gibi tarihe kilitli işlerde bu fark doğrudan işin kendisini kurtarır.",
        "Tek palet ya da birkaç koliden oluşan gönderilerde parsiyel taşımacılık seçeneğiyle yalnızca kullandığınız hacim kadar ödersiniz. Güzergahınız ve yükünüz için plan çıkarmak isterseniz uygulamadan anında teklif alabilir, ardından evrak listesini birlikte gözden geçirebiliriz.",
      ],
    },
  ],
  faq: [
    {
      question: "CMR nedir, ne işe yarar?",
      answer:
        "CMR, uluslararası karayolu taşımalarında kullanılan taşıma irsaliyesidir. Hem taşıma sözleşmesinin varlığını hem de malın taşıyıcıya teslim edildiğini kanıtlar. Alıcı teslim sırasında imzalayıp kaşeler; bu imza teslimin belgesidir. Pakette hasar veya eksik varsa mutlaka teslim anında CMR üzerine şerh düşülmelidir, aksi halde sonradan yapılacak hasar bildiriminde ispat zorlaşır.",
    },
    {
      question: "ATR belgesi olmadan Avrupa'ya gönderi yapabilir miyim?",
      answer:
        "Yapabilirsiniz; ATR bir zorunluluk değil, tarife avantajı sağlayan bir belgedir. Ancak kapsama giren sanayi ürünlerinde ATR düzenlenmediğinde varış ülkesinde gümrük vergisi doğabilir ve maliyet artar. Ürününüzün ATR kapsamında olup olmadığını GTİP kodu belirler; bunu sevkiyat öncesinde gümrük müşavirinizle teyit edin.",
    },
    {
      question: "Gümrük müşaviriyle çalışmak şart mı?",
      answer:
        "Klasik ihracat beyannamesi gerektiren sevkiyatlarda pratikte evet; beyannamenin tescili ve dolaşım belgelerinin vize süreci uzmanlık ister. Düşük kıymetli ve düşük ağırlıklı gönderilerde ise ETGB usulüyle beyan, yetkilendirilmiş operatör aracılığıyla yapılabildiği için ayrı bir müşavirlik süreci gerekmeyebilir. Hangi yolun size uyduğu gönderinin niteliğine bağlıdır.",
    },
    {
      question: "Evrakları kim hazırlıyor?",
      answer:
        "İş üç tarafa dağılır. Gönderici ticari faturayı, çeki listesini ve ürün bilgilerini hazırlar. Gümrük müşaviri beyannameyi tescil eder, ATR veya EUR.1 gibi belgeleri düzenleyip vize ettirir. Taşıyıcı ise CMR'yi düzenler, transit belgelerinin araca eşlik etmesini ve teslimin imza karşılığı tamamlanmasını sağlar.",
    },
    {
      question: "En sık yapılan evrak hatası nedir?",
      answer:
        "Ürün tanımının fazla genel yazılması ile fatura ve çeki listesi arasındaki tutarsızlıklar başı çekiyor. \"Çeşitli malzeme\" gibi bir tanım, gönderinin fiziki muayeneye alınma olasılığını doğrudan artırır. Koli adedi, brüt ağırlık ve alıcı unvanının tüm belgelerde birebir aynı yazılması, kaybedilen günlerin çoğunu baştan önler.",
    },
    {
      question: "Sınırda bekleme neden olur?",
      answer:
        "En yaygın sebepler evrak eksikliği veya belgeler arasındaki uyuşmazlıktır: vize edilmemiş dolaşım belgesi, hatalı GTİP kodu, faturayla örtüşmeyen ağırlık bilgisi, teslim şeklinin belirtilmemesi gibi. Bunlara kapılardaki yoğunluk, seçilen hattaki denetim yoğunluğu ve ürün grubuna özel kontroller eklenebilir. Evrak eksiksizse bekleme süresi büyük ölçüde öngörülebilir hale gelir.",
    },
    {
      question: "İsviçre'ye gönderimde ne fark var?",
      answer:
        "İsviçre Avrupa Birliği'nin gümrük bölgesi dışındadır. Ortak Transit Sözleşmesi'ne taraf olduğu için transit hareketi kurgulanabilir, ancak teslimde İsviçre'nin kendi ithalat prosedürü ve vergi düzeni işler; AB içi bir teslim gibi değerlendirilmez. Brexit sonrasında İngiltere'ye yapılan gönderilerde de ayrı bir ithalat süreci uygulanır. Güzergahınıza özel usulü müşavirinizle netleştirin.",
    },
    {
      question: "İhracat beyannamesi nedir?",
      answer:
        "Malın Türkiye'den yasal olarak çıkışını sağlayan resmi beyandır; gümrük müşaviri tarafından elektronik ortamda tescil edilir. Fatura ve çeki listesindeki bilgiler bu beyanın dayanağını oluşturur. Beyanname kapanmadan ihracat işlemi tamamlanmış sayılmaz, bu nedenle çıkış sonrasında beyannamenin kapandığını takip etmek gerekir.",
    },
    {
      question: "Numune veya sergi malzemesi gönderirken evrak farklı mı?",
      answer:
        "Evet, bu gönderiler kendi kurallarına tabidir. Numunelerde ürünün numune olduğu faturada açıkça belirtilir ve kıymeti gerçekçi beyan edilir. Fuar ve sergi malzemesi gibi geçici olarak gönderilip geri getirilecek eşyada ise geçici ihracat usulleri ve buna bağlı belgeler devreye girebilir. Uygulama ürüne ve ülkeye göre değiştiğinden gönderi öncesinde gümrük müşavirinizden teyit alın; bu sayfadaki bilgiler resmi danışmanlık yerine geçmez.",
    },
  ],
  related: [
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "fuar-tasimaciligi", label: "Fuar Taşımacılığı" },
    { slug: "polonya-kargo", label: "Polonya'ya Panelvan Kargo" },
  ],
};

export default avrupayaGonderimGumrukBelgeleri;
