import { Truck, FileCheck, Home, Shield } from "lucide-react";

const ServicesGrid = () => {
  return (
    <section id="services" className="px-4 py-12">
      <div className="space-y-2 mb-8">
        <span className="text-sm font-medium text-primary">Hizmetler</span>
        <h2 className="text-2xl font-bold text-foreground">
          Kapsamlı Lojistik Çözümleri
        </h2>
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
            <h3 className="text-xl font-bold text-foreground mb-1">
              Panelvan Express
            </h3>
            <p className="text-sm text-muted-foreground">
              24-48 saat içinde Avrupa'nın her noktasına güvenli teslimat
            </p>
          </div>
          <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/20 text-xs font-medium text-primary">
            Popüler
          </div>
        </div>

        {/* Small Box - Gümrükleme */}
        <div className="bento-box h-36 group">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
            <FileCheck className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Gümrükleme</h3>
          <p className="text-xs text-muted-foreground">
            Tüm evrak işlemleri dahil
          </p>
        </div>

        {/* Small Box - Kapıdan Kapıya */}
        <div className="bento-box h-36 group">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
            <Home className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Kapıdan Kapıya</h3>
          <p className="text-xs text-muted-foreground">
            Adresinizden alıp teslim
          </p>
        </div>

        {/* Wide Box - Sigortalı Taşıma */}
        <div className="col-span-2 bento-box h-28 flex-row items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-7 h-7 text-success" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">
              Sigortalı Taşıma
            </h3>
            <p className="text-sm text-muted-foreground">
              Tüm gönderileriniz %100 sigorta kapsamında. Değerli eşyalarınız güvende.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;