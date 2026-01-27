import { Check, MapPin, Package, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface TrackingStepProps {
  city: string;
  status: "completed" | "current" | "pending";
  time?: string;
  isLast?: boolean;
}

const TrackingStep = ({ city, status, time, isLast }: TrackingStepProps) => {
  const getIcon = () => {
    if (status === "completed") {
      return (
        <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-background" />
        </div>
      );
    }
    if (status === "current") {
      return (
        <div className="w-6 h-6 pulse-success rounded-full flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-success relative z-10" />
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full border-2 border-border bg-background flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
      </div>
    );
  };

  return (
    <div className={`tracking-step ${isLast ? "pb-0" : ""}`}>
      <div className="absolute left-0 top-0">{getIcon()}</div>
      <div className="flex justify-between items-start">
        <div>
          <p
            className={`font-medium ${
              status === "pending" ? "text-muted-foreground" : "text-foreground"
            }`}
          >
            {city}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {status === "completed" && "Tamamlandı"}
            {status === "current" && "Şu an burada"}
            {status === "pending" && "Beklemede"}
          </p>
        </div>
        {time && <span className="text-xs text-muted-foreground">{time}</span>}
      </div>
    </div>
  );
};

const TrackingSection = () => {
  const { toast } = useToast();

  const handleTrack = () => {
    toast({
      title: "Demo Modu",
      description: "Demo modundasınız. Gerçek takip için müşteri hizmetleriyle iletişime geçin.",
    });
  };

  return (
    <section id="tracking" className="px-4 py-12">
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2">
          <Navigation className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">Canlı Takip</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Kargonuz Nerede?
        </h2>
        <p className="text-muted-foreground">
          Takip numaranızla anlık konum bilgisi alın.
        </p>
      </div>

      {/* Tracking Input */}
      <div className="flex gap-2 mb-8">
        <Input
          placeholder="Takip No Giriniz"
          className="flex-1 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
        />
        <Button
          onClick={handleTrack}
          className="h-12 px-6 btn-primary-glow"
        >
          Sorgula
        </Button>
      </div>

      {/* Timeline Card */}
      <div className="card-elevated p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">MVX-2024-7823</p>
              <p className="text-xs text-muted-foreground">Örnek Gönderi</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Tahmini Varış</p>
            <p className="text-sm font-medium text-primary">Bugün, 18:00</p>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <TrackingStep city="İstanbul" status="completed" time="06:30" />
          <TrackingStep city="Kapıkule Sınır" status="completed" time="10:45" />
          <TrackingStep city="Münih, Almanya" status="current" time="14:20" />
          <TrackingStep city="Frankfurt" status="pending" isLast />
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-success" />
            <span className="text-sm text-muted-foreground">
              Son güncelleme: 2 dk önce
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;