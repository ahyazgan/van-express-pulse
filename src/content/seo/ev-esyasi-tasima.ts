import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const evEsyasiTasima: SeoPageData = {
  slug: "ev-esyasi-tasima",
  title: "Yurtdışına Ev Eşyası Taşıma | Almanya · Hollanda · Belçika | RouteEU",
  description:
    "Türkiye'den Almanya, Hollanda ve Belçika'ya kapıdan kapıya ev eşyası ve mobilya taşıma. Aktarmasız panelvan, CMR sorumluluğu, aşamalı takip. Anında teklif alın.",
  h1: "Türkiye'den Avrupa'ya Ev Eşyası ve Mobilya Taşıma",
  intro: [
    "Yurtdışına taşınmak hayatınızın en büyük adımlarından biridir ve eşyalarınızın bu yolculuğu sorunsuz atlatması, yeni hayata iyi başlamanın ilk şartıdır. RouteEU Express, Türkiye'den Almanya, Hollanda, Belçika başta olmak üzere Avrupa'nın dört bir yanına kapıdan kapıya ev eşyası ve mobilya taşıması yapar: eşyalarınız Türkiye'deki evinizden yüklenir, araç değiştirmeden ve depoya girmeden Avrupa'daki yeni adresinize teslim edilir.",
    "Konteyner dolduramayacak kadar az, kargoya sığmayacak kadar çok eşyanız varsa panelvan taşımacılığı tam size göredir. 1+0 veya 1+1 bir evin eşyası tipik olarak tek bir panelvana sığar; böylece başkalarının yüküyle birleştirilmeyi beklemez, parsiyel aktarmalarda hasar riski taşımazsınız. Tüm taşımalar CMR konvansiyonunun belirlediği taşıyıcı sorumluluğu altında yapılır ve talep üzerine beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz; takip numaranızla sevkiyatınızın hangi aşamada olduğunu görür ve uygulamadan saniyeler içinde tahmini fiyat alabilirsiniz.",
  ],
  transitTable: {
    caption: "Ev Eşyası Taşımada Tipik Transit Süreleri",
    rows: [
      { destination: "İstanbul → Berlin", time: "24-36 saat" },
      { destination: "İstanbul → Viyana", time: "20-32 saat" },
      { destination: "İstanbul → Paris", time: "34-48 saat" },
      { destination: "İstanbul → Amsterdam", time: "30-46 saat" },
      { destination: "İstanbul → Brüksel", time: "30-46 saat" },
      { destination: "İstanbul → Londra", time: "36-56 saat" },
    ],
  },
  priceTable: {
    caption: "Yurtdışına Ev Eşyası Taşıma Fiyatları (Komple Panelvan)",
    rows: [
      { route: "İstanbul → Berlin", price: priceRange("Berlin") },
      { route: "İstanbul → Amsterdam", price: priceRange("Amsterdam") },
      { route: "İstanbul → Brüksel", price: priceRange("Brüksel") },
    ],
    disclaimer:
      "Fiyatlar komple panelvan (yaklaşık 1.300 kg / 5 palet kapasiteli) taşıma için tahmini aralıklardır; sezon, yakıt ve talebe göre değişir. Birkaç koli veya kısmi yük gönderiyorsanız fiyat hacme göre belirlenir — uygulamadan anında teklif alabilirsiniz.",
  },
  sections: [
    {
      heading: "Yurtdışına Ev Eşyası Taşıma Kimler İçin?",
      paragraphs: [
        "Avrupa'ya evden eve nakliyat hizmetimizi en çok üç grup kullanıyor. Birincisi, iş, evlilik veya aile birleşimi nedeniyle Avrupa'ya kalıcı olarak taşınanlar: ev eşyalarını sıfırdan almak yerine alışık oldukları eşyalarla yeni hayata başlamak hem ekonomik hem pratiktir. İkincisi, Almanya, Hollanda veya Belçika'da eğitime başlayan öğrenciler: bir öğrenci odasını dolduracak eşya — yatak, çalışma masası, kıyafet kolileri, bisiklet — tek seferde ve tek araçla gider.",
        "Üçüncü grup ise Avrupa'daki yakınlarına eşya gönderen aileler. Çeyiz, mobilya takımı, el yapımı halı, anneannenin yolladığı erzak kolileri... Türkiye'den Avrupa'daki bir aile yakınına toplu eşya göndermek istediğinizde, eşyayı kargo şubesine taşımak yerine kapınızdan aldırıp alıcının kapısına teslim ettirebilirsiniz. Yönümüz çift taraflıdır: Avrupa'dan Türkiye'ye dönüş taşımalarında da aynı hizmeti veriyoruz.",
      ],
    },
    {
      heading: "Neden Panelvanla Ev Taşıma?",
      paragraphs: [
        "Uluslararası ev taşımacılığında klasik yöntem, eşyanızın başka müşterilerin yükleriyle birlikte bir TIR'a veya konteynere konsolide edilmesidir. Bu yöntem ucuz görünse de eşyanız depolarda bekler, birkaç kez elden ele geçer ve teslimat haftalar sürebilir. Panelvan taşımacılığında ise araç yalnızca sizin eşyanız için yola çıkar:",
      ],
      list: [
        "Tek araca sığar: 1+0 veya 1+1 bir evin eşyası (yaklaşık 1.300 kg / 5 palet hacmi) tipik olarak tek panelvanla taşınır; iki eve yetecek eşya için ikinci araç planlanır.",
        "Aktarmasız taşıma: Eşyanız yükleme anından teslimata kadar aynı araçta kalır. Depoya girmez, forkliftle bir araçtan diğerine aktarılmaz — mobilya ve kırılacak eşyalar için en büyük hasar riski olan aktarma tamamen ortadan kalkar.",
        "Hafta sonu TIR yasağı muafiyeti: Panelvanlar Avrupa'daki hafta sonu kamyon seyir yasağına tabi değildir; cuma yüklenen ev pazartesiyi beklemeden yola devam eder.",
        "Çift şoför: Uzun güzergahlarda iki şoför dönüşümlü sürer, araç mola için saatlerce durmaz; İstanbul'dan Berlin'e 24-36 saatte ulaşmak böyle mümkün olur.",
        "Aşamalı takip: Takip numaranızla sevkiyatınızın hangi aşamada olduğunu (talep alındı, anlaşma, yolda, teslim edildi) görürsünüz; aracın o anki yerini merak ederseniz WhatsApp'tan sorabilirsiniz.",
      ],
    },
    {
      heading: "Ev Eşyası Taşıma Fiyatı Nasıl Belirlenir?",
      paragraphs: [
        "Yurt dışına ev eşyası taşıma fiyatını belirleyen ana unsur, eşyanızın kapladığı hacimdir; nakliye sektörü bu hacmi metreküp (m3) ile ölçer. Standart bir 1+1 evin eşyası tipik olarak 8-12 m3 tutar ve tek panelvana rahatça sığar. 2+1 bir ev ortalama 14-20 m3, mobilyası bol bir 3+1 ev ise 25 m3 ve üzeri hacme ulaşır; bu büyüklükteki taşınmalarda ya iki araç planlanır ya da eşyanın öncelikli bölümü panelvanla gönderilip kalan hacim parsiyel seçenekle kombine edilir.",
        "Net ve sürprizsiz bir teklif için en pratik yol şudur: taşınacak eşyaların listesini çıkarın, mümkünse odaların fotoğraflarını çekin ve talebinizle birlikte iletin. Eşya listesi ve fotoğraflarla toplam hacmi birlikte netleştirir, taşıma günü değişmeyecek sabit bir fiyat veririz. Hacmin dışında fiyatı etkileyen unsurlar şunlardır:",
      ],
      list: [
        "Ev büyüklüğü ve hacim: 1+1 ev yaklaşık 8-12 m3 (tek panelvan); 2+1 ev 14-20 m3; 3+1 ev 25 m3 ve üzeri (iki araç veya panelvan + parsiyel kombinasyonu).",
        "Güzergah: Kalkış ve varış adresleri arasındaki mesafe ile geçilen ülke sayısı navlunu doğrudan etkiler.",
        "Sezon: Yaz ayları, bayram ve tatil dönemleri taşınma talebinin en yoğun olduğu zamanlardır; tarih esnekliğiniz varsa fiyat avantajına dönüşür.",
        "Adres koşulları: Kat, asansör ve aracın kapıya yanaşma imkânı yükleme-boşaltma süresini, dolayısıyla maliyeti etkiler.",
        "Paketleme desteği: Eşyayı kendiniz mi paketleyeceksiniz, ekipten destek mi istiyorsunuz — teklif aşamasında netleştirilir.",
      ],
    },
    {
      heading: "Adım Adım Yurtdışına Ev Taşıma Süreci",
      paragraphs: [
        "Uluslararası ev taşımayı dört ana adımda yürütüyoruz. Sürecin en kritik kısmı hazırlık aşamasıdır; iyi paketlenmiş bir ev, sınırda ve teslimatta zaman kaybetmez.",
      ],
      list: [
        "1. Teklif ve planlama: Uygulamadan kalkış ve varış şehrini seçerek anında tahmini fiyat alırsınız. Eşya listeniz netleşince taşıma tarihi birlikte planlanır.",
        "2. Paketleme: Kırılacak eşyaları balonlu naylonla, mobilya yüzeylerini battaniye veya köşe koruyucularla sarmanızı öneririz. Kolilerinizi oda ve içerik bilgisiyle etiketleyin, gümrük için sade bir eşya listesi (koli sayısı ve içerik) hazırlayın. Beyaz eşyaların suyunu boşaltıp kapaklarını bantlayın.",
        "3. Yükleme ve gümrük: Eşyalarınız adresinizden araca özenle istiflenir. Gümrük işlemleri için hangi belgelerin gerekeceği konusunda ekibimiz size yol gösterir; evraklar tamam olduğunda sınır geçişi planlı ilerler.",
        "4. Teslimat: Araç Avrupa'daki yeni adresinize gelir ve eşyalarınız kapınızda teslim edilir. Tüm süreç boyunca sevkiyatın hangi aşamada olduğunu takip numaranızdan izlersiniz.",
      ],
    },
    {
      heading: "Zati Eşya ve Gümrük: Bilmeniz Gerekenler",
      paragraphs: [
        "Uluslararası taşınmalarda sık duyacağınız kavram \"zati eşya\"dır: kişinin halihazırda kullandığı, ticari amaç taşımayan kişisel ev eşyalarını ifade eder. Birçok Avrupa ülkesi, ikametini o ülkeye taşıyan kişilerin kullanılmış ev eşyalarını belirli şartlar altında gümrük avantajlarıyla kabul eder. Bu şartlar genellikle ikamet değişikliğinin resmi belgelerle kanıtlanması (ikamet kaydı, iş veya öğrenci belgesi gibi) ve eşyaların kişisel kullanıma ait, kullanılmış eşyalar olması gibi kriterlere dayanır.",
        "Ancak zati eşya uygulamasının kapsamı, istenen belgeler ve şartlar ülkeye göre farklılık gösterir ve zaman içinde değişebilir. Bu nedenle taşınma tarihinizden önce güncel şartları mutlaka gideceğiniz ülkenin konsolosluğuna veya bir gümrük müşavirine teyit ettirin. Ekibimiz sürecin taşıma tarafını eksiksiz yönetir ve evrak hazırlığında size yol gösterir; resmi şartların güncel halini ise her zaman resmi kaynaktan doğrulamanızı öneririz.",
        "Yönün tersi için de aynı mantık geçerlidir: Avrupa'da yaşarken Türkiye'ye kalıcı olarak dönüyorsanız, kullanılmış ev eşyalarınız Türkiye tarafında kesin dönüş muafiyeti kapsamında değerlendirilebilir. Bu sürecin şartlarını, evrak sırasını ve Almanya'dan dönüş örneğini kesin dönüş nakliyat sayfamızda adım adım anlattık.",
      ],
    },
    {
      heading: "Hangi Ülkelere Ev Eşyası Taşıyoruz?",
      paragraphs: [
        "En çok talep gören güzergahlar Türk nüfusunun yoğun olduğu Almanya (Berlin, Hamburg, Münih, Köln, Stuttgart, Frankfurt), Hollanda (Amsterdam, Rotterdam, Eindhoven) ve Belçika'dır (Brüksel, Anvers). Bunun yanında Avusturya, Fransa, İsviçre ve Avrupa'nın diğer ülkelerine de kapıdan kapıya ev taşıması yapıyoruz. Genel Avrupa güzergahlarında teslimat tipik olarak 24-72 saat aralığındadır — adres nereye olursa olsun eşyanız aynı araçla kapıya kadar gider.",
      ],
    },
    {
      heading: "Dolandırıcılığa Karşı: Sözleşme, Taşıyıcı Sorumluluğu, Takip",
      paragraphs: [
        "Uluslararası evden eve nakliyat, ne yazık ki güven sorununun en sık yaşandığı alanlardan biridir. Kapora alıp ortadan kaybolan, yola çıktıktan sonra \"ek masraf\" adıyla fiyat artıran ya da eşyayı belirsiz depolarda haftalarca bekleten firmalarla ilgili şikâyetleri siz de duymuşsunuzdur. Önerimiz nettir: hangi firmayla çalışırsanız çalışın, yazılı sözleşme isteyin, taşıyıcı sorumluluğunun ve varsa ek sigortanın kapsamını yazılı olarak sorun, sevkiyatın hangi aşamada olduğunu gösteren bir takip sistemi talep edin.",
        "RouteEU olarak bu güvenceleri standart hizmetin parçası yaptık:",
      ],
      list: [
        "Yazılı sözleşme: Taşıma kapsamı, tarih, adresler ve fiyat sözleşmede yazar; sözlü vaatle iş yürütülmez.",
        "Sabit fiyat: Teklifte anlaşılan rakam taşıma günü değişmez; yolda zam, sürpriz \"gümrük ücreti\" veya pazarlık yoktur.",
        "CMR sorumluluğu ve ek sigorta: Her sevkiyat CMR konvansiyonunun taşıyıcı sorumluluğu altındadır; bu sorumluluk brüt kilogram başına 8,33 SDR ile sınırlı olduğundan, talep üzerine beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz.",
        "Takip numarası: Sevkiyatınızın hangi aşamada olduğunu uygulamadan görür, güzergâhı harita üzerinde izlersiniz; aracın o anki yerini WhatsApp'tan sorarak öğrenirsiniz.",
        "Kapıda tutanaklı teslim: Teslimatta eşya listesi birlikte kontrol edilir ve teslim tutanağı imzalanır.",
      ],
    },
  ],
  faq: [
    {
      question: "Yurtdışına ev eşyası göndermek ne kadar tutar?",
      answer:
        "Komple panelvan taşımada fiyat güzergaha göre belirlenir: örneğin İstanbul-Berlin hattında " +
        priceRange("Berlin") +
        ", İstanbul-Amsterdam hattında " +
        priceRange("Amsterdam") +
        " aralığındadır. Birkaç koli veya yarım araçlık eşya gönderiyorsanız fiyat hacme göre hesaplanır; uygulamadan kalkış ve varış noktanızı seçerek anında teklif alabilirsiniz.",
    },
    {
      question: "1+1 evin eşyası bir panelvana sığar mı?",
      answer:
        "Evet, çoğu durumda sığar. Panelvanlarımız yaklaşık 1.300 kg ve 5 palet hacim kapasitesine sahiptir; 1+0 ve 1+1 evlerin eşyası tipik olarak tek araçla taşınır. Daha büyük evler veya çok mobilyalı taşınmalar için eşya listenize göre ikinci araç ya da uygun bir taşıma planı öneriyoruz.",
    },
    {
      question: "Türkiye'den Almanya'ya ev eşyası göndermek gümrüğe tabi mi?",
      answer:
        "Kişisel ev eşyaları gümrük işlemine tabidir; ancak ikametini taşıyan kişilerin kullanılmış eşyaları birçok ülkede zati eşya kapsamında avantajlı şartlarla işlem görebilir. Şartlar ülkeye göre değiştiği için güncel uygulamayı gideceğiniz ülkenin konsolosluğuna veya bir gümrük müşavirine teyit ettirmenizi öneririz. Evrak hazırlığında ekibimiz size yol gösterir.",
    },
    {
      question: "Yurtdışına ev taşıma kaç gün sürer?",
      answer:
        "Panelvan taşımada İstanbul'dan Berlin'e 24-36 saat, Amsterdam ve Brüksel'e 30-46 saat, Paris'e 34-48 saat sürer. Genel Avrupa güzergahlarında teslimat 24-72 saat aralığındadır. Konsolide (parsiyel) taşımacılıkta haftalar süren bu yolculuk, aracın yalnızca sizin eşyanız için yola çıkmasıyla saatlere iner.",
    },
    {
      question: "Mobilya ve kırılacak eşyalarım taşımada zarar görür mü?",
      answer:
        "Hasarın en büyük kaynağı aktarma ve depolamadır; panelvan taşımada eşyanız yüklendiği araçtan teslimata kadar hiç çıkmaz, bu risk büyük ölçüde ortadan kalkar. Ayrıca her sevkiyat CMR taşıyıcı sorumluluğu altında taşınır ve talep üzerine beyan ettiğiniz değer üzerinden ek yük sigortası yaptırıyoruz. Kırılacak eşyaların balonlu naylonla, mobilya yüzeylerinin battaniyeyle sarılması gibi paketleme önerilerimizi uyguladığınızda eşyalarınız yolculuğu sorunsuz tamamlar.",
    },
    {
      question: "Buzdolabı, çamaşır makinesi gibi beyaz eşyalar yurtdışına gönderilebilir mi?",
      answer:
        "Evet, beyaz eşyalar taşıma kapsamındadır. Taşımadan önce buzdolabının fişini en az 24 saat önce çekip çözülmesini sağlamanızı, çamaşır ve bulaşık makinesinin suyunu tamamen boşaltmanızı ve kapaklarını bantlamanızı öneririz. Araçta beyaz eşyalar dik konumda ve sabitlenmiş şekilde taşınır.",
    },
    {
      question: "Yurt dışına ev eşyası taşıma fiyatları ne kadar?",
      answer:
        "Fiyat, eşyanızın hacmine (m3) ve güzergaha göre belirlenir. Komple panelvan dolduran bir taşınmada örnek aralık İstanbul-Berlin hattı için " +
        priceRange("Berlin") +
        " seviyesindedir; daha küçük hacimler bunun altında, hacme göre fiyatlandırılır. Eşya listenizi ve mümkünse oda fotoğraflarınızı ileterek uygulamadan sabit ve sürprizsiz bir teklif alabilirsiniz.",
    },
    {
      question: "Eşyalarım m3 olarak nasıl hesaplanır?",
      answer:
        "Her parçanın en, boy ve yükseklik ölçüsü çarpılarak hacmi bulunur; standart bir taşınma kolisi yaklaşık 0,1-0,15 m3 yer kaplar. Pratikte bu hesabı sizin yapmanız gerekmez: eşya listenizi ve oda fotoğraflarınızı paylaştığınızda toplam hacmi ekibimiz hesaplar, araç planını ve fiyatı buna göre netleştiririz. Referans olarak 1+1 bir evin eşyası 8-12 m3 civarındadır ve tek panelvana sığar.",
    },
    {
      question: "Zati eşya gümrükten vergisiz geçer mi?",
      answer:
        "Belirli şartlarla mümkündür: eşyaların kullanılmış ve kişisel olması, ikamet değişikliğinin resmi belgelerle kanıtlanması ve başvurunun süresi içinde yapılması halinde birçok ülke kullanılmış ev eşyasına gümrük muafiyeti tanır. Şartlar ülkeye göre değişir ve güncellenebilir; taşınma tarihinizden önce güncel mevzuatı gideceğiniz ülkenin konsolosluğuna veya bir gümrük müşavirine mutlaka teyit ettirin.",
    },
    {
      question: "Çeyiz eşyası taşıyor musunuz?",
      answer:
        "Evet. Çeyiz taşıma en sık çalıştığımız taleplerden biridir: Türkiye'den Almanya, Hollanda veya Belçika'daki yeni eve giden çeyiz eşyası, kırılacak parçaları özenle paketlenerek kapıdan kapıya tek araçla taşınır. Taşıma CMR sorumluluğu altındadır ve talep üzerine ek sigorta yaptırılır, teslimat kapıda tutanakla yapılır, süreç boyunca sevkiyatın hangi aşamada olduğunu takip numaranızdan izlersiniz.",
    },
  ],
  related: [
    { slug: "kesin-donus-nakliyat", label: "Kesin Dönüş Nakliyat" },
    { slug: "almanyadan-turkiyeye-nakliyat", label: "Almanya'dan Türkiye'ye Nakliyat" },
    { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
    { slug: "parsiyel-tasimacilik", label: "Parsiyel Taşımacılık" },
  ],
};

export default evEsyasiTasima;
