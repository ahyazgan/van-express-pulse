import { Calendar, Users, Satellite } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Haftasonu Yasağı Yok",
    description: "7 gün kesintisiz teslimat",
  },
  {
    icon: Users,
    title: "Çift Şoför",
    description: "Mola vermeden hızlı ulaşım",
  },
  {
    icon: Satellite,
    title: "7/24 GPS Takip",
    description: "Anlık konum bilgisi",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="px-4 py-12 pb-24">
      <div className="space-y-2 mb-8">
        <span className="text-sm font-medium text-primary">Neden Biz?</span>
        <h2 className="text-2xl font-bold text-foreground">
          Fark Yaratan Özellikler
        </h2>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card-elevated p-5 flex items-center gap-4 group hover:border-primary/30 transition-colors"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-0.5">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">2018'den beri</span>{" "}
          güvenilir lojistik partneri
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-muted-foreground">
          <span className="text-xs">🇹🇷 Türkiye</span>
          <span className="text-xs">🇩🇪 Almanya</span>
          <span className="text-xs">🇳🇱 Hollanda</span>
          <span className="text-xs">🇧🇪 Belçika</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;