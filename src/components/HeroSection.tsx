import { ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-between px-4 pt-12 pb-8">
      {/* Logo & Badge */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Truck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Minivan Express</h2>
            <p className="text-xs text-muted-foreground">Uluslararası Lojistik</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          Aktif Teslimatlar: 847
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6 my-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          <span className="text-foreground">Avrupa'ya</span>
          <br />
          <span className="text-gradient-accent">24 Saatte</span>
          <br />
          <span className="text-foreground">Express Teslimat</span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
          Uçaktan ucuz, Tırdan hızlı.{" "}
          <span className="text-foreground font-medium">Minivan taşımacılığı</span>{" "}
          ile gümrüksüz, güvenli teslimat.
        </p>

        {/* Stats */}
        <div className="flex gap-6 pt-4">
          <div>
            <p className="text-2xl font-bold text-foreground">15K+</p>
            <p className="text-xs text-muted-foreground">Teslimat</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-2xl font-bold text-foreground">98%</p>
            <p className="text-xs text-muted-foreground">Memnuniyet</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-2xl font-bold text-foreground">24s</p>
            <p className="text-xs text-muted-foreground">Teslimat</p>
          </div>
        </div>
      </div>

      {/* CTA at Bottom (Thumb Zone) */}
      <div className="space-y-3">
        <Button
          size="lg"
          className="w-full btn-primary-glow touch-target text-base font-semibold rounded-xl h-14"
        >
          Hemen Fiyat Al
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          2 dakikada teklif alın • Taahhüt yok
        </p>
      </div>
    </section>
  );
};

export default HeroSection;