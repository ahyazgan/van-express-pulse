import { motion } from "framer-motion";

interface QuickRoute {
  id: number;
  from: string;
  fromFlag: string;
  to: string;
  toFlag: string;
  toCountryCode: string;
  time: string;
  popular?: boolean;
}

// FlagCDN URLs for reliable cross-platform flag display
const getFlagUrl = (countryCode: string) => 
  `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;

const routes: QuickRoute[] = [
  { id: 1, from: "İstanbul", fromFlag: "🇹🇷", to: "Berlin", toFlag: "🇩🇪", toCountryCode: "de", time: "24 saat", popular: true },
  { id: 2, from: "İstanbul", fromFlag: "🇹🇷", to: "Paris", toFlag: "🇫🇷", toCountryCode: "fr", time: "28 saat" },
  { id: 3, from: "İstanbul", fromFlag: "🇹🇷", to: "Amsterdam", toFlag: "🇳🇱", toCountryCode: "nl", time: "32 saat" },
  { id: 4, from: "İstanbul", fromFlag: "🇹🇷", to: "Londra", toFlag: "🇬🇧", toCountryCode: "gb", time: "36 saat" },
  { id: 5, from: "İstanbul", fromFlag: "🇹🇷", to: "Milano", toFlag: "🇮🇹", toCountryCode: "it", time: "22 saat" },
];

interface QuickRouteCardsProps {
  onSelect?: (route: QuickRoute) => void;
  selectedId?: number | null;
}

const QuickRouteCards = ({ onSelect, selectedId }: QuickRouteCardsProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
        Hızlı Rotalar
      </h3>
      <div className="flex flex-wrap gap-3 pb-1">
        {routes.map((route, index) => (
          <motion.button
            key={route.id}
            onClick={() => onSelect?.(route)}
            className={`relative py-3 px-5 rounded-xl border transition-all duration-200 min-w-[120px] hover:scale-105 ${
              selectedId === route.id
                ? "border-accent bg-accent/10"
                : "border-border/30 bg-secondary/40 hover:border-border/50"
            }`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {route.popular && (
              <span className="absolute -top-1.5 -right-0.5 bg-accent text-accent-foreground text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                TOP
              </span>
            )}
            
            {/* Origin Flag */}
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-xl">{route.fromFlag}</span>
              <svg className="w-4 h-4 text-muted-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Route Info - Image flag with destination */}
            <p className="text-sm font-semibold text-foreground truncate flex items-center gap-1.5">
              <img 
                src={getFlagUrl(route.toCountryCode)} 
                alt={route.toCountryCode.toUpperCase()}
                className="h-5 w-5 rounded-full object-cover"
              />
              {route.to}
            </p>
            <p className={`text-xs font-medium ${selectedId === route.id ? "text-accent" : "text-muted-foreground"}`}>
              {route.time}
            </p>

            {/* Selected indicator */}
            {selectedId === route.id && (
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-accent/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickRouteCards;
