import { Calendar, Users, PackageSearch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const f = t.features;

  const features = [
    { icon: Calendar, ...f.items.noWeekendBan },
    { icon: Users, ...f.items.doubleDriver },
    { icon: PackageSearch, ...f.items.gps },
  ];

  return (
    <section id="features" className="pt-10 pb-2">
      <div className="space-y-2 mb-6">
        <span className="text-sm font-medium text-primary">{f.eyebrow}</span>
        <h2 className="text-2xl font-bold text-foreground">{f.title}</h2>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card-elevated p-5 flex items-center gap-4 group hover:border-primary/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-0.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">{f.trustPrefix}</span>{" "}
          {f.trustSuffix}
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-muted-foreground">
          <span className="text-xs">🇹🇷 {f.countries.tr}</span>
          <span className="text-xs">🇩🇪 {f.countries.de}</span>
          <span className="text-xs">🇳🇱 {f.countries.nl}</span>
          <span className="text-xs">🇧🇪 {f.countries.be}</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
