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
