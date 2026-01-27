import { motion } from "framer-motion";

interface QuickRoute {
  id: number;
  from: string;
  fromFlag: string;
  to: string;
  toFlag: string;
  time: string;
  popular?: boolean;
}

const routes: QuickRoute[] = [
  { id: 1, from: "İstanbul", fromFlag: "🇹🇷", to: "Berlin", toFlag: "🇩🇪", time: "24 saat", popular: true },
  { id: 2, from: "İstanbul", fromFlag: "🇹🇷", to: "Paris", toFlag: "🇫🇷", time: "28 saat" },
  { id: 3, from: "İstanbul", fromFlag: "🇹🇷", to: "Amsterdam", toFlag: "🇳🇱", time: "32 saat" },
  { id: 4, from: "İstanbul", fromFlag: "🇹🇷", to: "Londra", toFlag: "🇬🇧", time: "36 saat" },
  { id: 5, from: "İstanbul", fromFlag: "🇹🇷", to: "Milano", toFlag: "🇮🇹", time: "22 saat" },
];

interface QuickRouteCardsProps {
  onSelect?: (route: QuickRoute) => void;
  selectedId?: number | null;
}

const QuickRouteCards = ({ onSelect, selectedId }: QuickRouteCardsProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
        Hızlı Rotalar
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
        {routes.map((route, index) => (
          <motion.button
            key={route.id}
            onClick={() => onSelect?.(route)}
            className={`relative flex-shrink-0 p-3 rounded-2xl border transition-all duration-300 min-w-[140px] ${
              selectedId === route.id
                ? "border-primary/60 bg-gradient-to-br from-primary/15 to-primary/5"
                : "border-border/40 bg-gradient-to-br from-secondary/60 to-secondary/40 hover:border-border/60"
            }`}
            style={{
              backdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {route.popular && (
              <span className="absolute -top-2 -right-1 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                POPÜLER
              </span>
            )}
            
            {/* Flags */}
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-2xl">{route.fromFlag}</span>
              <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="text-2xl">{route.toFlag}</span>
            </div>
            
            {/* Route Info */}
            <div className="text-center">
              <p className="text-xs font-semibold text-foreground">
                {route.from} → {route.to}
              </p>
              <p className={`text-[11px] mt-1 font-medium ${selectedId === route.id ? "text-primary" : "text-muted-foreground"}`}>
                {route.time}
              </p>
            </div>

            {/* Selected indicator */}
            {selectedId === route.id && (
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ boxShadow: "0 0 20px -5px hsl(45, 100%, 50%, 0.4)" }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickRouteCards;
