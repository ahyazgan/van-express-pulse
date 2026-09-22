import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Internal links to the SEO landing pages: crawlers discover the country and
// service pages from the homepage through real <a href> elements.
const groups = [
  {
    tr: "Ülke Güzergahları",
    en: "Country Routes",
    links: [
      { to: "/almanya-kargo", tr: "Almanya'ya Panelvan Kargo", en: "Van Cargo to Germany" },
      { to: "/hollanda-kargo", tr: "Hollanda'ya Panelvan Kargo", en: "Van Cargo to Netherlands" },
      { to: "/belcika-kargo", tr: "Belçika'ya Panelvan Kargo", en: "Van Cargo to Belgium" },
      { to: "/fransa-kargo", tr: "Fransa'ya Panelvan Kargo", en: "Van Cargo to France" },
      { to: "/avusturya-kargo", tr: "Avusturya'ya Panelvan Kargo", en: "Van Cargo to Austria" },
      { to: "/isvicre-kargo", tr: "İsviçre'ye Kargo", en: "Cargo to Switzerland" },
      { to: "/italya-kargo", tr: "İtalya'ya Panelvan Kargo", en: "Van Cargo to Italy" },
      { to: "/danimarka-kargo", tr: "Danimarka'ya Nakliyat", en: "Transport to Denmark" },
      { to: "/isvec-kargo", tr: "İsveç'e Nakliyat", en: "Transport to Sweden" },
      { to: "/polonya-kargo", tr: "Polonya'ya Kargo", en: "Cargo to Poland" },
    ],
  },
  {
    tr: "Avrupa'dan Türkiye'ye",
    en: "Europe to Türkiye",
    links: [
      { to: "/almanyadan-turkiyeye-nakliyat", tr: "Almanya'dan Türkiye'ye Nakliyat", en: "Germany to Türkiye" },
      { to: "/hollandadan-turkiyeye-nakliyat", tr: "Hollanda'dan Türkiye'ye Kargo", en: "Netherlands to Türkiye" },
      { to: "/belcikadan-turkiyeye-nakliyat", tr: "Belçika'dan Türkiye'ye Nakliyat", en: "Belgium to Türkiye" },
      { to: "/kesin-donus-nakliyat", tr: "Kesin Dönüş Nakliyat", en: "Relocation Back to Türkiye" },
    ],
  },
  {
    tr: "Hizmetlerimiz",
    en: "Services",
    links: [
      { to: "/minivan-ekspres-tasimacilik", tr: "Minivan Ekspres Taşımacılık", en: "Express Minivan Transport" },
      { to: "/parsiyel-tasimacilik", tr: "Parsiyel & Koli Taşıma", en: "Groupage & Parcel Shipping" },
      { to: "/ev-esyasi-tasima", tr: "Yurtdışına Ev Eşyası Taşıma", en: "Household Goods Abroad" },
      { to: "/fuar-tasimaciligi", tr: "Fuar Taşımacılığı", en: "Trade Fair Logistics" },
      { to: "/acil-yedek-parca-sevkiyati", tr: "Acil Yedek Parça Sevkiyatı", en: "Urgent Spare Parts" },
      { to: "/amazon-fba-lojistik", tr: "Amazon FBA Lojistik", en: "Amazon FBA Logistics" },
      { to: "/bavul-kargo", tr: "Bavul & Koli Gönderme", en: "Luggage & Box Shipping" },
      { to: "/ogrenci-esyasi-tasima", tr: "Öğrenci Eşyası Taşıma", en: "Student Belongings" },
      { to: "/fiyat-hesaplama", tr: "Fiyat Hesaplama (m³ / palet)", en: "Price Calculator (m³ / pallet)" },
    ],
  },
  {
    tr: "Gümrük ve Taşıma Rehberleri",
    en: "Customs & Shipping Guides",
    links: [
      { to: "/almanya-kargo-gumruk-vergisi", tr: "Almanya'ya Kargoda Gümrük Vergisi", en: "Customs Duty on Cargo to Germany" },
      { to: "/avrupaya-gonderim-gumruk-belgeleri", tr: "Gümrük Belgeleri: CMR, ATR, T1", en: "Customs Documents: CMR, ATR, T1" },
      { to: "/zati-esya-gumruk-muafiyeti", tr: "Zati Eşya Gümrük Muafiyeti", en: "Personal Effects Exemption" },
      { to: "/yolcu-beraberi-esya-muafiyeti", tr: "Yolcu Beraberi Eşya Muafiyeti", en: "Traveller Allowance Guide" },
      { to: "/avrupaya-gida-gonderme", tr: "Avrupa'ya Gıda Gönderilir mi?", en: "Sending Food to Europe" },
      { to: "/guvenilir-nakliye-firmasi-secimi", tr: "Güvenilir Nakliye Firması Seçimi", en: "Choosing a Trustworthy Mover" },
      { to: "/avrupaya-kargo-kac-gunde-gider", tr: "Avrupa'ya Kargo Kaç Günde Gider?", en: "How Long Does Shipping to Europe Take?" },
      { to: "/etgb-mikro-ihracat-rehberi", tr: "ETGB ve Mikro İhracat", en: "Micro-Export (ETGB) Guide" },
      { to: "/yurtdisina-ev-tasima-rehberi", tr: "Yurtdışına Ev Taşıma Rehberi", en: "Moving Abroad: Full Guide" },
    ],
  },
  {
    tr: "Diğer Diller",
    en: "Other Languages",
    links: [
      { to: "/de/umzug-in-die-tuerkei", tr: "Umzug in die Türkei (DE)", en: "Umzug in die Türkei (DE)" },
      { to: "/de/spedition-tuerkei", tr: "Spedition Türkei (DE)", en: "Spedition Türkei (DE)" },
      { to: "/de/tuerkei-transport-kosten", tr: "Transportkosten Türkei (DE)", en: "Transportkosten Türkei (DE)" },
      { to: "/de/transport-deutschland-tuerkei", tr: "Transport Deutschland Türkei (DE)", en: "Transport Deutschland Türkei (DE)" },
      { to: "/nl/verhuizen-naar-turkije", tr: "Verhuizen naar Turkije (NL)", en: "Verhuizen naar Turkije (NL)" },
      { to: "/nl/transport-naar-turkije", tr: "Transport naar Turkije (NL)", en: "Transport naar Turkije (NL)" },
      { to: "/en/express-van-transport-turkey", tr: "Express Van Transport (EN)", en: "Express Van Transport (EN)" },
      { to: "/en/moving-to-turkey", tr: "Moving to Türkiye (EN)", en: "Moving to Türkiye (EN)" },
      { to: "/fr/demenagement-turquie", tr: "Déménagement Turquie (FR)", en: "Déménagement Turquie (FR)" },
      { to: "/fr/transport-express-turquie", tr: "Transport Express Turquie (FR)", en: "Transport Express Turquie (FR)" },
    ],
  },
];

const SeoLinksSection = () => {
  const { language } = useLanguage();

  return (
    <section className="mt-6 pb-2">
      {groups.map((group) => (
        <div key={group.tr} className="mb-4">
          <h3 className="text-sm font-bold text-foreground mb-3">
            {language === "tr" ? group.tr : group.en}
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {group.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                {language === "tr" ? link.tr : link.en}
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SeoLinksSection;
