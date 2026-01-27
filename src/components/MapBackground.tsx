import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import europeMap from "@/assets/europe-turkey-map.jpg";

// Animated vans positioned along the highway routes (Turkey -> Europe corridor)
const animatedVans = [
  // Istanbul to Bulgaria route (E-80)
  { id: 1, startX: "15%", startY: "75%", endX: "35%", endY: "45%", duration: 20, delay: 0 },
  // Bulgaria to Romania route
  { id: 2, startX: "38%", startY: "42%", endX: "52%", endY: "28%", duration: 18, delay: 4 },
  // Romania to Hungary route (E-90)
  { id: 3, startX: "55%", startY: "35%", endX: "62%", endY: "25%", duration: 16, delay: 8 },
  // Hungary to Austria route
  { id: 4, startX: "65%", startY: "22%", endX: "72%", endY: "18%", duration: 14, delay: 2 },
  // Austria to Germany route
  { id: 5, startX: "58%", startY: "15%", endX: "48%", endY: "8%", duration: 22, delay: 6 },
];

// Key city markers along the route
const cityMarkers = [
  { id: "istanbul", x: "18%", y: "72%", label: "İstanbul", isPrimary: true },
  { id: "sofia", x: "38%", y: "48%", label: "Sofya", isPrimary: false },
  { id: "bucharest", x: "52%", y: "38%", label: "Bükreş", isPrimary: false },
  { id: "budapest", x: "58%", y: "28%", label: "Budapeşte", isPrimary: false },
  { id: "vienna", x: "62%", y: "20%", label: "Viyana", isPrimary: false },
  { id: "munich", x: "52%", y: "15%", label: "Münih", isPrimary: true },
];

const MapBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* High-Quality Geographic Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${europeMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />
      
      {/* Subtle overlay for better UI contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />

      {/* Animated Minivans along highways */}
      {animatedVans.map((van) => (
        <motion.div
          key={van.id}
          className="absolute z-20"
          style={{ left: van.startX, top: van.startY }}
          initial={{ opacity: 0 }}
          animate={{
            left: [van.startX, van.endX],
            top: [van.startY, van.endY],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: van.duration,
            delay: van.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-3 bg-primary/40 rounded-full blur-lg" />
            {/* Van icon */}
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/90 rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
              <Truck className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </motion.div>
      ))}

      {/* City Markers */}
      {cityMarkers.map((city, index) => (
        <motion.div
          key={city.id}
          className="absolute z-20"
          style={{ left: city.x, top: city.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
        >
          {/* Pulsing ring for primary cities */}
          {city.isPrimary && (
            <motion.div
              className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ 
                background: city.isPrimary 
                  ? "hsl(45 100% 50%)" 
                  : "hsl(220 15% 60%)" 
              }}
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          )}
          
          {/* City dot */}
          <div 
            className={`w-4 h-4 rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2 ${
              city.isPrimary 
                ? "bg-primary" 
                : "bg-muted-foreground/70"
            }`}
            style={{ 
              boxShadow: city.isPrimary 
                ? "0 0 20px hsl(45 100% 50% / 0.6)" 
                : "0 2px 8px rgba(0,0,0,0.2)" 
            }}
          />
          
          {/* City label */}
          <motion.div
            className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
          >
            <span 
              className={`text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm ${
                city.isPrimary 
                  ? "bg-primary/90 text-primary-foreground" 
                  : "bg-card/80 text-foreground border border-border/50"
              }`}
            >
              {city.label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Active Route Line Overlay (Istanbul to Munich) */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(45, 100%, 50%)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(45, 100%, 55%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(356, 94%, 43%)" stopOpacity="0.5" />
          </linearGradient>
          <filter id="routeGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated route path */}
        <motion.path
          d="M 18 72 Q 28 60 38 48 Q 45 40 52 38 Q 55 32 58 28 Q 60 24 62 20 Q 56 17 52 15"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeDasharray="2 1"
          filter="url(#routeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.8 }}
        />
      </svg>

      {/* Bottom gradient for UI contrast */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Top gradient for header contrast */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default MapBackground;