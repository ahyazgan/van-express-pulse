import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Internal links to the SEO landing pages: crawlers discover the country and
// service pages from the homepage through real <a href> elements.
const links = [
  { to: "/almanya-kargo", tr: "Almanya'ya Panelvan Kargo", en: "Van Cargo to Germany" },
  { to: "/hollanda-kargo", tr: "Hollanda'ya Panelvan Kargo", en: "Van Cargo to Netherlands" },
  { to: "/belcika-kargo", tr: "Belçika'ya Panelvan Kargo", en: "Van Cargo to Belgium" },
  { to: "/minivan-ekspres-tasimacilik", tr: "Minivan Ekspres Taşımacılık", en: "Express Minivan Transport" },
  { to: "/parsiyel-tasimacilik", tr: "Parsiyel & Koli Taşıma", en: "Groupage & Parcel Shipping" },
  { to: "/ev-esyasi-tasima", tr: "Yurtdışına Ev Eşyası Taşıma", en: "Household Goods Abroad" },
  { to: "/kesin-donus-nakliyat", tr: "Kesin Dönüş Nakliyat", en: "Relocation Back to Türkiye" },
];

const SeoLinksSection = () => {
  const { language } = useLanguage();

  return (
    <section className="mt-6 pb-2">
      <h3 className="text-sm font-bold text-foreground mb-3">
        {language === "tr" ? "Hizmetlerimiz ve Güzergahlar" : "Services & Routes"}
      </h3>
      <div className="grid grid-cols-1 gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            {language === "tr" ? link.tr : link.en}
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SeoLinksSection;
