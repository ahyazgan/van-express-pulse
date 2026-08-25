import type { SeoPageData } from "./seoData";

const almanyaKargoGumrukVergisi: SeoPageData = {
  slug: "almanya-kargo-gumruk-vergisi",
  title: "Almanya'ya Kargoda Gümrük Vergisi: Kim, Ne Zaman Öder?",
  description:
    "Türkiye'den Almanya'ya gönderilerde gümrük vergisi ve ithalat KDV'sini kim öder? ATR belgesi, DDP-DAP farkı ve hediye gönderileri sade bir dille anlatılıyor.",
  h1: "Almanya'ya Kargo Gönderirken Gümrük Vergisi Ödenir mi?",
  intro: [
    "Türkiye'den Almanya'ya bir koli, palet ya da ticari sevkiyat gönderen herkesin aklındaki soru aynıdır: karşı tarafta kapı çalındığında alıcıdan ek bir ödeme istenecek mi, istenecekse ne kadar? Bu sorunun tek cümlelik bir cevabı yok; çünkü Avrupa Birliği sınırından giren her gönderi hukuken bir ithalat işlemidir ve ithalatta birbirinden bağımsız iki ayrı kalem doğabilir. Biri gümrük vergisi, diğeri ithalat KDV'si.",
    "Bu rehberde vergiyi doğuran mantığı adım adım anlatıyoruz: gönderinin ticari mi yoksa kişisel mi sayıldığı, Gümrük Birliği'nin ve ATR belgesinin gerçekte neyi çözdüğü, DDP ile DAP arasındaki farkın faturaya nasıl yansıdığı ve evrakta yapılan hangi hataların sınırda beklemeye yol açtığı. Amacımız satış yapmak değil, göndermeden önce doğru soruları sormanızı sağlamak.",
    "Bir uyarıyı baştan yapalım: vergi ve muafiyet tutarları dönemsel olarak güncellenir. Bu sayfa genel bir çerçeve sunar, resmi danışmanlık yerine geçmez. Somut bir sevkiyat planlamadan önce Ticaret Bakanlığı'nın güncel duyurularını ve çalıştığınız gümrük müşavirinin görüşünü mutlaka alın.",
  ],
  sections: [
    {
      heading: "Kısa Cevap: Gönderinin Ticari mi Kişisel mi Olduğu Belirler",
      paragraphs: [
        "Almanya gümrüğü kutunun içindeki eşyaya değil, o eşyanın hangi amaçla ve kimden kime gönderildiğine bakar. Kabaca üç kategori vardır ve her birinin vergi sonucu farklıdır.",
        "Ticari gönderiler, yani bir satışa konu olan ya da işletmenin faaliyetinde kullanılacak mallar, kural olarak beyana ve vergiye tabidir. Kişiden kişiye gönderilen hediye niteliğindeki paketler dar kapsamlı bir muafiyetten yararlanabilir. Taşınma kapsamındaki kullanılmış ev eşyası ise \"zati eşya\" adı verilen tamamen ayrı bir rejime girer ve kendi belgeleriyle işlem görür.",
        "Bu ayrım yalnızca teorik değil, pratik sonuçları olan bir ayrımdır: ticari bir malı hediye gibi göstermek vergiyi ortadan kaldırmaz, aksine yanlış beyan sayılır ve gönderinin durdurulmasından para cezasına kadar giden sonuçlar doğurabilir. Doğru kategoriyi baştan seçmek, sürecin en ucuz adımıdır.",
      ],
    },
    {
      heading: "AB'ye İthalatta İki Ayrı Kalem: Gümrük Vergisi ve İthalat KDV'si",
      paragraphs: [
        "Birçok gönderici bu iki kalemi tek bir \"gümrük parası\" sanır; oysa hesaplama mantıkları da, muafiyet kuralları da farklıdır.",
        "Gümrük vergisi, eşyanın cinsine göre değişen orandaki bir ithalat vergisidir ve oranı eşyanın tarife pozisyonuna (GTİP / HS kodu) bağlıdır. Aynı kutudaki bir tekstil ürünüyle bir makine parçasının oranı aynı değildir. Avrupa Birliği düşük kıymetli ticari gönderilerde belirli bir eşiğin altında gümrük vergisi aramaz; bu yazının hazırlandığı dönemde söz konusu eşik gönderi başına 150 euro civarındaydı.",
        "İthalat KDV'si ise Almanya'da Einfuhrumsatzsteuer adıyla anılır ve yurt içindeki satışlara uygulanan KDV'nin ithalattaki karşılığıdır. Almanya'da genel oran yüzde 19, kitap ve bazı gıda gibi kalemlerde uygulanan indirimli oran yüzde 7 civarındadır. Kritik nokta şudur: Avrupa Birliği, düşük değerli gönderilere tanınan ithalat KDV'si muafiyetini yıllar önce kaldırmıştır. Yani gümrük vergisi çıkmasa bile ithalat KDV'si ilk eurodan itibaren doğabilir.",
        "KDV'nin matrahı da çoğu kişinin sandığından geniştir: yalnızca mal bedeli değil, taşıma ve sigorta masrafları ile varsa ödenen gümrük vergisi de matraha eklenir. Bu yüzden ucuz bir malın navlunla birlikte hesaplanan vergisi beklenenden yüksek çıkabilir.",
        "Bu bölümdeki oran ve eşikler zaman içinde değişebilir. Gönderi öncesinde Ticaret Bakanlığı'nın resmi duyurularını, Almanya tarafında ise ilgili gümrük idaresinin güncel uygulamasını gümrük müşavirinizle birlikte teyit edin.",
      ],
      list: [
        "Gümrük vergisi: Eşyanın GTİP koduna göre değişir; belirli bir kıymet eşiğinin altındaki ticari gönderilerde genellikle aranmaz.",
        "İthalat KDV'si (Einfuhrumsatzsteuer): Almanya'da genel ve indirimli olmak üzere iki oran vardır; düşük değerli gönderi muafiyeti bulunmaz.",
        "Matrah: Mal bedeli + navlun + sigorta + varsa gümrük vergisi. Vergi bu toplam üzerinden hesaplanır.",
        "Ek kalemler: Alkol, tütün, parfüm gibi ürünlerde ayrıca özel tüketim vergisi niteliğinde yükümlülükler doğabilir.",
      ],
    },
    {
      heading: "Gümrük Birliği ve ATR Belgesi: Neyi Çözer, Neyi Çözmez?",
      paragraphs: [
        "Türkiye ile Avrupa Birliği arasındaki Gümrük Birliği, sanayi ürünleri ve işlenmiş tarım ürünlerinin sanayi payı bakımından karşılıklı ticareti kolaylaştırır. Bu kolaylıktan yararlanmanın aracı ATR Dolaşım Belgesi'dir.",
        "ATR'nin en çok karıştırılan yönü şudur: ATR bir menşe belgesi değil, serbest dolaşım belgesidir. Malın Türkiye'de üretilmiş olması şart değildir; üçüncü bir ülkeden gelip Türkiye'de serbest dolaşıma girmiş, yani ithalat işlemleri tamamlanmış bir mal için de ATR düzenlenebilir. Belge, ihracatçı ya da gümrük müşaviri tarafından hazırlanır ve gümrük idaresince vize edilir.",
        "ATR usulüne uygun düzenlendiğinde, kapsama giren sanayi ürünlerinde Almanya tarafında gümrük vergisi avantajı sağlar. Ancak burada net olmak gerekir: ATR ithalat KDV'sini kaldırmaz. Almanya'da doğan Einfuhrumsatzsteuer, ATR'li gönderilerde de doğar. \"ATR'yi ekledik, artık vergi çıkmaz\" beklentisiyle yola çıkan göndericiler alıcı tarafında sürprizle karşılaşır.",
        "Gümrük Birliği'nin dışında kalan alanlar da vardır. Tarım ürünleri ile kömür ve çelik ürünleri ATR kapsamında değildir; bunlarda tercihli tarifeden yararlanmak için menşe ispatına, yani EUR.1 gibi belgelere ihtiyaç duyulur. Ürününüzün hangi grupta olduğunu tarife pozisyonu belirler.",
        "Kapsam ve belge kuralları güncellenebildiği için ürününüzün ATR mi yoksa menşe ispatı mı gerektirdiğini, sevkiyattan önce gümrük müşavirinizle ve Ticaret Bakanlığı'nın yayımladığı güncel mevzuatla teyit edin.",
      ],
    },
    {
      heading: "DDP mi DAP mı? Vergiyi Gönderici mi Alıcı mı Öder?",
      paragraphs: [
        "Vergiyi kimin ödeyeceği kanunla değil, taraflar arasındaki teslim şekliyle belirlenir. Uluslararası ticarette bu teslim şekilleri Incoterms kısaltmalarıyla ifade edilir ve Almanya'ya gönderilerde en çok iki tanesi karşımıza çıkar.",
        "DAP (Delivered at Place), malın alıcının adresine kadar getirildiği, ancak ithalat gümrük işlemleri ve vergilerinin alıcıya ait olduğu teslim şeklidir. Uygulamada en yaygın olanı budur. Alıcı Almanya'da KDV mükellefi bir şirketse, ödediği ithalat KDV'sini kendi beyannamesinde indirim konusu yapabildiği için DAP çoğu B2B işlemde mantıklı sonuç verir.",
        "DDP (Delivered Duty Paid) ise vergiler dahil teslimi ifade eder; ithalatta doğan tüm yükümlülükler göndericiye aittir. Son tüketiciye satış yapan e-ticaret satıcıları için müşteri deneyimi açısından caziptir, çünkü alıcı kapıda hiçbir ek ödeme yapmaz. Ancak pratikte kolay değildir: Avrupa Birliği'nde yerleşik olmayan bir göndericinin ithalatçı sıfatıyla işlem yapabilmesi için EORI numarası ve çoğu durumda AB'de yerleşik bir dolaylı temsilci ya da gümrük müşaviri gerekir. Ayrıca ödenen ithalat KDV'si, AB'de kayıtlı bir mükellefiyetiniz yoksa genellikle indirilemez ve doğrudan maliyete kalır.",
        "Pratik tavsiye: hangi teslim şeklini seçerseniz seçin, bunu sözleşmeye ve faturaya açıkça yazın. \"Vergiyi kim ödeyecek?\" sorusunun cevabının mal sınıra dayandığında konuşulması, hem gecikmenin hem de ticari anlaşmazlığın en sık sebebidir.",
        "Teslim şekli seçiminin vergisel sonuçları işletmenizin durumuna göre değişir; kararı vermeden önce mali müşavirinizden ve gümrük müşavirinizden görüş almanızı öneririz.",
      ],
    },
    {
      heading: "Hediye Gönderileri ve Kişisel Eşya",
      paragraphs: [
        "Almanya'daki bir yakınınıza gönderdiğiniz paket \"hediye\" sayılabilmesi için birkaç şartı birlikte taşımalıdır: gönderen ve alıcının gerçek kişi olması, gönderinin karşılıksız olması, ticari nitelik taşımaması ve arızi, yani süreklilik arz etmeyen bir gönderi olması. Avrupa Birliği bu tür gönderilere düşük tutarlı bir muafiyet tanır; bu yazının hazırlandığı dönemde kişiden kişiye hediye gönderilerindeki muafiyet sınırı 45 euro civarındaydı ve alkol, tütün, parfüm gibi kalemlerde ayrıca miktar sınırlamaları uygulanıyordu.",
        "Bu sınırın ne kadar dar olduğunu görmek için pratik bir örnek yeterli: bir çift ayakkabı ya da orta segment bir tekstil paketi bile eşiği aşar. Dolayısıyla \"hediye yazarsak vergi çıkmaz\" varsayımı çoğu gönderide gerçeği yansıtmaz. Kutunun üzerine hediye yazmak, gümrük idaresinin fatura ve içerik incelemesini de ortadan kaldırmaz.",
        "Taşınma kapsamındaki kullanılmış ev eşyası ise bambaşka bir rejimdir. Türkiye'den Almanya'ya yerleşim yerini nakleden kişiler için öngörülen muafiyetler; ikamet değişikliğinin belgelenmesi, eşya listesinin hazırlanması ve süre şartlarının sağlanması gibi koşullara bağlıdır. Kesin dönüş nakliyat ve ev eşyası taşıma işlerinde bu belgelerin sevkiyattan önce hazırlanması, sınırda kaybedilen günlerin önüne geçer.",
        "İlaç konusunda dürüst olmak zorundayız: reçeteli olsun olmasın ilaçların posta ve kargo yoluyla Avrupa Birliği ülkelerine gönderilmesi yasal olarak kısıtlıdır ve RouteEU ilaç taşımaz. Yasal yol, ilacın kişinin kendi kullanımı için, kendi reçetesi ve doktor raporuyla birlikte makul miktarda şahsen taşınmasıdır. Süreklilik gerektiren tedavilerde ise en sağlıklı çözüm, Almanya'daki bir hekimden reçete alıp muadil ilacı oradaki eczaneden temin etmektir. Almanya'da ilaç satışı eczane tekelindedir ve birçok üründe reçete zorunluluğu vardır.",
        "Hediye muafiyeti tutarları, zati eşya şartları ve ürün bazlı kısıtlamalar zaman içinde değişebilir; işlem öncesinde Ticaret Bakanlığı'nın resmi duyurularından ve gümrük müşavirinizden teyit edin.",
      ],
    },
    {
      heading: "Vergi Sürprizi Yaşamamak İçin 5 Pratik Öneri",
      paragraphs: [
        "Sınırda yaşanan sorunların büyük bölümü mevzuatın karmaşıklığından değil, evrakın özensiz hazırlanmasından kaynaklanır. Aşağıdaki beş başlık, en sık karşılaştığımız aksaklıkların doğrudan panzehiridir.",
      ],
      list: [
        "Faturayı ya da proformayı eksiksiz doldurun: gönderici ve alıcının tam unvanı, açık adresi, vergi ve EORI numaraları, fatura numarası ve tarihi, para birimi, ödeme şekli ve teslim şekli (DAP, DDP gibi) mutlaka yer alsın.",
        "Ürünü somut tanımlayın: \"hediyelik eşya\", \"çeşitli malzeme\" gibi genel ifadeler beyanın en zayıf halkasıdır. Bunun yerine ürünün cinsini, malzemesini, miktarını ve GTİP kodunu yazın; tanımı İngilizce ya da Almanca olarak da ekleyin.",
        "Kıymeti gerçekçi beyan edin: düşük beyan, gümrük idaresinin en sık ceza kestiği başlıktır. Fatura değeriyle ürünün piyasa değeri arasındaki makul olmayan fark, gönderinin komple incelemeye alınmasına yol açar.",
        "Belge planını baştan kurun: ürününüz ATR mi gerektiriyor, menşe ispatı mı; belgeyi kim düzenleyip kim vize ettirecek; çeki listesi hazır mı? Bu soruların cevabı araç yola çıkmadan önce net olmalı.",
        "Alıcıyı önceden bilgilendirin: vergiyi kimin ödeyeceğini, Almanya tarafında hangi gümrük müşaviriyle çalışılacağını ve alıcının EORI numarasının bulunup bulunmadığını gönderiden önce yazılı olarak teyitleyin.",
      ],
    },
    {
      heading: "RouteEU ile Süreç Nasıl İşliyor?",
      paragraphs: [
        "Rolümüzü net tanımlayalım: RouteEU bir taşımacılık firmasıdır, gümrük müşavirliği ya da vergi danışmanlığı hizmeti vermez. Beyannameyi imzalayan ve vergi sonucunu doğuran taraf, sizin ya da alıcınızın çalıştığı gümrük müşaviridir. Bizim yaptığımız iş, o beyana konu olan yükü Türkiye'deki adresten Almanya'daki adrese aktarmasız ve zamanında ulaştırmak, taşıma ayağının evrakını (CMR ve eşlik eden belgeler) eksiksiz yürütmektir.",
        "Buna karşılık, yüzlerce sevkiyatın getirdiği pratik tecrübeyi paylaşmaktan kaçınmayız. Yükleme öncesinde faturanızda ya da çeki listenizde gözümüze çarpan bir eksiklik varsa, araç yola çıkmadan önce söyleriz; çünkü sınırda düzeltilen bir evrak, ofiste düzeltilen evraktan çok daha pahalıya mal olur.",
        "Taşıma tarafında panelvan modelinin somut avantajı zaman ve bütünlüktür. Yükünüz depoda toplanmayı beklemez, aktarma noktalarında elden ele geçmez; çift şoförle yola çıkan araç yaklaşık 1.300 kilogram ve 5 palet kapasitesiyle doğrudan varış adresine ilerler. Panelvanlarımız hafta sonu TIR yasağından muaf olduğu için cuma yüklenen bir gönderi pazartesiyi beklemez ve yakın Avrupa hatlarında Almanya'ya teslimat tipik olarak 24-48 saatte tamamlanır.",
        "Tek başına bir palet ya da birkaç koli gönderiyorsanız parsiyel taşımacılık seçeneğiyle yalnızca kullandığınız hacim kadar ödeme yaparsınız. Almanya'daki depolara mal gönderen e-ticaret satıcıları için ise Amazon FBA lojistik hattımız, teslim randevusu ve etiketleme gereklerine uygun şekilde planlanır. Gönderi boyunca aracın konumunu 7/24 canlı GPS ile izler, sevkiyatınızın sigortalı olduğunu bilerek çalışırsınız.",
        "Güzergahınıza özel bir plan çıkarmak isterseniz uygulamadan adreslerinizi ve yük bilgilerinizi girerek anında teklif alabilir, ardından evrak listesini birlikte gözden geçirebiliriz.",
      ],
    },
  ],
  faq: [
    {
      question: "Almanya'ya gönderide gümrük vergisini kim öder?",
      answer:
        "Bunu kanun değil, taraflar arasındaki teslim şekli belirler. DAP teslimde ithalat vergileri alıcıya, DDP teslimde ise göndericiye aittir. Uygulamada en yaygın olan DAP'tır ve alıcı Almanya'da KDV mükellefi bir şirketse ödediği ithalat KDV'sini genellikle indirim konusu yapabilir. Hangi şekli seçtiğinizi faturaya ve sözleşmeye açıkça yazın.",
    },
    {
      question: "ATR belgesi nedir, ne işe yarar?",
      answer:
        "ATR, Türkiye ile Avrupa Birliği arasındaki Gümrük Birliği kapsamında düzenlenen bir serbest dolaşım belgesidir. Kapsama giren sanayi ürünlerinde Almanya tarafında gümrük vergisi avantajı sağlar. Menşe belgesi olmadığı için malın Türkiye'de üretilmiş olması şart değildir; Türkiye'de serbest dolaşıma girmiş olması yeterlidir. Ancak ATR ithalat KDV'sini ortadan kaldırmaz.",
    },
    {
      question: "Hediye gönderisinde vergi çıkar mı?",
      answer:
        "Çıkabilir. Kişiden kişiye, karşılıksız ve arızi olarak gönderilen paketlere Avrupa Birliği düşük tutarlı bir muafiyet tanır; bu yazının hazırlandığı dönemde sınır 45 euro civarındaydı ve alkol, tütün, parfüm gibi ürünlerde ayrı miktar kısıtları vardı. Sınır oldukça dar olduğu için sıradan bir hediye paketi bile eşiği aşabilir. Tutarlar güncellenebildiği için işlem öncesi Ticaret Bakanlığı'nın resmi duyurularından ve gümrük müşavirinizden teyit edin.",
    },
    {
      question: "Almanya'ya DDP olarak, vergiler ödenmiş şekilde gönderebilir miyim?",
      answer:
        "Teknik olarak mümkündür ancak hazırlık gerektirir. DDP'de gönderici ithalatçı yükümlülüğünü üstlenir; bunun için EORI numarası ve çoğu durumda Avrupa Birliği'nde yerleşik bir dolaylı temsilci ya da gümrük müşaviri gerekir. Ayrıca AB'de kayıtlı bir mükellefiyetiniz yoksa ödediğiniz ithalat KDV'si genellikle indirilemez ve maliyete kalır. Karar öncesinde mali müşavirinize danışın.",
    },
    {
      question: "Fatura olmadan Almanya'ya gönderi yapabilir miyim?",
      answer:
        "Ticari gönderilerde hayır. Gümrük idaresi eşyanın kıymetini ve niteliğini fatura üzerinden değerlendirir; fatura yoksa beyan yapılamaz. Satışa konu olmayan gönderilerde ise kıymet beyanı içeren bir proforma fatura düzenlenir. Kişisel eşya ve taşınma kapsamındaki gönderilerde fatura yerine ayrıntılı eşya listesi ve ikametle ilgili belgeler devreye girer.",
    },
    {
      question: "Ticari numune gönderirken vergi doğar mı?",
      answer:
        "Numune gönderimleri için özel düzenlemeler bulunur; ancak muafiyet otomatik değildir. Numunenin ticari değerinin düşük olması, satışa konu edilemeyecek şekilde işaretlenmesi ya da kullanılamaz hale getirilmesi gibi şartlar aranabilir. Faturada ürünün numune olduğunu açıkça belirtin ve kıymetini gerçekçi beyan edin. Uygulama ürün grubuna göre değişebildiğinden gönderi öncesi gümrük müşavirinizle teyit edin.",
    },
    {
      question: "Vergiyi göndermeden önce hesaplayabilir miyim?",
      answer:
        "Yaklaşık bir tahmin yapılabilir. Bunun için ürününüzün GTİP kodunu, beyan edilecek kıymetini, taşıma ve sigorta maliyetini bilmeniz gerekir; ithalat KDV'sinin matrahına bu kalemler de eklenir. Oranlar ürüne ve döneme göre değiştiği için kesin rakamı gümrük müşaviriniz çıkarır. Bu sayfadaki bilgiler genel çerçeve sunar, resmi danışmanlık yerine geçmez.",
    },
    {
      question: "Alıcı vergiyi ödemezse ne olur?",
      answer:
        "Gönderi gümrükte bekletilir. Beklemenin uzaması ardiye ve terminal masraflarını doğurur, sonuçta eşya iade edilebilir ya da tasfiye sürecine girebilir. Her iki senaryoda da maliyet taraflardan birine yansır. Bu yüzden vergiyi kimin ödeyeceğini ve alıcının gümrük işlemleri için hazır olup olmadığını gönderiden önce yazılı olarak netleştirmek gerekir.",
    },
    {
      question: "Türkiye'den Almanya'ya kaç günde teslim ediyorsunuz?",
      answer:
        "Panelvan hattımızda Almanya'ya teslimat tipik olarak 24-48 saatte tamamlanır. Yük aktarmasız taşınır, çift şoförle yol kesintisiz sürer ve araçlarımız hafta sonu TIR yasağından muaf olduğu için cuma yüklenen gönderi pazartesiyi beklemez. Gümrük işlemlerinin süresi bu sürenin dışındadır ve evrakın eksiksizliğine bağlıdır.",
    },
  ],
  related: [
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
    { slug: "parsiyel-tasimacilik", label: "Avrupa'ya Parsiyel Taşımacılık" },
    { slug: "amazon-fba-lojistik", label: "Amazon FBA Lojistik" },
  ],
};

export default almanyaKargoGumrukVergisi;
