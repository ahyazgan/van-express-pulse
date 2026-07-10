import { MapPin, Navigation, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface RouteSearchInputsProps {
  origin: string;
  destination: string;
  onOriginChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onSwap?: () => void;
  onFocus?: () => void;
}

const RouteSearchInputs = ({
  origin,
  destination,
  onOriginChange,
  onDestinationChange,
  onSwap,
  onFocus,
}: RouteSearchInputsProps) => {
  const { language } = useLanguage();

  return (
    <div className="relative flex items-stretch gap-3 w-[calc(100%-32px)] mx-auto max-w-md">
      {/* Vertical Route Line with Swap Button */}
      <div className="flex flex-col items-center justify-center flex-shrink-0" style={{ width: '24px' }}>
        {/* Origin dot - aligned with first input center */}
        <div className="flex items-center justify-center h-11">
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary-foreground shadow-sm" />
        </div>
        
        {/* Connecting line with swap button */}
        <div className="relative flex flex-col items-center h-2 my-0">
          <div className="absolute top-0 bottom-0 w-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-primary via-primary/50 to-accent" style={{ height: 'calc(100% + 16px)', top: '-8px' }} />
          {onSwap && (
            <button
              type="button"
              onClick={onSwap}
              className="relative z-10 w-6 h-6 rounded-full bg-secondary border border-border/50 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              aria-label={language === "tr" ? "Rotayı değiştir" : "Swap route"}
            >
              <ArrowUpDown className="w-3 h-3 text-muted-foreground" />
            </button>
          )}
        </div>
        
        {/* Destination dot - aligned with second input center */}
        <div className="flex items-center justify-center h-11">
          <div className="w-3 h-3 rounded-full bg-accent border-2 border-accent-foreground shadow-sm" />
        </div>
      </div>

      {/* Input Fields */}
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        {/* Origin Input */}
        <div className="relative">
          <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
          <Input
            value={origin}
            onChange={(e) => onOriginChange(e.target.value)}
            onFocus={onFocus}
            placeholder={language === "tr" ? "Nereden?" : "From?"}
            className="pl-10 h-11 bg-secondary/60 border-border/40 rounded-xl text-sm placeholder:text-muted-foreground/70 focus:border-primary/50 w-full"
          />
        </div>

        {/* Destination Input */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
          <Input
            value={destination}
            onChange={(e) => onDestinationChange(e.target.value)}
            onFocus={onFocus}
            placeholder={language === "tr" ? "Nereye?" : "To?"}
            className="pl-10 h-11 bg-secondary/60 border-border/40 rounded-xl text-sm placeholder:text-muted-foreground/70 focus:border-accent/50 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RouteSearchInputs;
