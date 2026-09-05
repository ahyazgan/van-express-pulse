import { Truck, FileCheck, Home, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesGrid = () => {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="pt-10 pb-2">
      <div className="space-y-2 mb-6">
        <span className="text-sm font-medium text-primary">{s.eyebrow}</span>
        <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Large Box - Panelvan Express */}
        <div className="col-span-2 bento-box h-44 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{s.express.title}</h3>
            <p className="text-sm text-muted-foreground">{s.express.description}</p>
          </div>
          <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/20 text-xs font-medium text-primary">
            {s.express.badge}
          </div>
        </div>

        {/* Small Box - Customs */}
        <div className="bento-box h-36 group">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
            <FileCheck className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{s.customs.title}</h3>
          <p className="text-xs text-muted-foreground">{s.customs.description}</p>
        </div>

        {/* Small Box - Door to Door */}
        <div className="bento-box h-36 group">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
            <Home className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{s.doorToDoor.title}</h3>
          <p className="text-xs text-muted-foreground">{s.doorToDoor.description}</p>
        </div>

        {/* Wide Box - CMR liability + added cover on request */}
        <div className="col-span-2 bento-box h-28 flex-row items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-7 h-7 text-success" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">{s.insured.title}</h3>
            <p className="text-sm text-muted-foreground">{s.insured.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
