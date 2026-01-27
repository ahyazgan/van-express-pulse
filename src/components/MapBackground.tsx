import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import europeMap from "@/assets/turkey-europe-corridor-map.jpg";

// City positions aligned to the Turkey-Europe corridor map
const cityMarkers = [
  { id: "istanbul", x: "86%", y: "56%", label: "İstanbul", country: "TR", isPrimary: true },
  { id: "sofia", x: "70%", y: "50%", label: "Sofya", country: "BG", isPrimary: false },
  { id: "belgrade", x: "58%", y: "48%", label: "Belgrad", country: "RS", isPrimary: false },
  { id: "budapest", x: "50%", y: "40%", label: "Budapeşte", country: "HU", isPrimary: false },
  { id: "vienna", x: "40%", y: "36%", label: "Viyana", country: "AT", isPrimary: false },
  { id: "munich", x: "35%", y: "32%", label: "Münih", country: "DE", isPrimary: true },
  { id: "berlin", x: "45%", y: "18%", label: "Berlin", country: "DE", isPrimary: false },
  { id: "paris", x: "14%", y: "32%", label: "Paris", country: "FR", isPrimary: true },
];

// Animated vans following the transport corridor
const animatedVans = [
  { id: 1, startX: "86%", startY: "56%", endX: "70%", endY: "50%", duration: 14, delay: 0 },
  { id: 2, startX: "70%", startY: "50%", endX: "58%", endY: "48%", duration: 12, delay: 4 },
  { id: 3, startX: "58%", startY: "48%", endX: "50%", endY: "40%", duration: 10, delay: 8 },
  { id: 4, startX: "50%", startY: "40%", endX: "40%", endY: "36%", duration: 8, delay: 12 },
  { id: 5, startX: "40%", startY: "36%", endX: "35%", endY: "32%", duration: 8, delay: 2 },
  { id: 6, startX: "35%", startY: "32%", endX: "14%", endY: "32%", duration: 16, delay: 6 },
];

const MapBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Geographic Map Background - Turkey to Europe Corridor */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${europeMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-transparent to-background/40" />

      {/* Route Path SVG Overlay */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="routeGradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(45, 100%, 50%)" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(45, 100%, 55%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(356, 94%, 43%)" stopOpacity="0.6" />
          </linearGradient>
          <filter id="routeGlow">
            <feGaussianBlur stdDeviation="0.4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Main route: Istanbul → Sofia → Belgrade → Budapest → Vienna → Munich */}
        <motion.path
          d="M 86 56 Q 78 53 70 50 L 58 48 L 50 40 L 40 36 L 35 32"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 1"
          filter="url(#routeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Extension to Paris */}
        <motion.path
          d="M 35 32 L 14 32"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeDasharray="1.5 0.8"
          filter="url(#routeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Extension to Berlin */}
        <motion.path
          d="M 40 36 L 45 18"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeDasharray="1 0.5"
          filter="url(#routeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 3.5 }}
        />
      </svg>

      {/* Animated Minivans */}
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
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-2 bg-primary/50 rounded-full blur-md" />
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary/90 rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
              <Truck className="w-4 h-4 text-primary-foreground" />
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
          transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 200 }}
        >
          {/* Pulsing ring for primary cities */}
          {city.isPrimary && (
            <motion.div
              className="absolute w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          )}
          
          {/* City dot */}
          <div 
            className={`w-4 h-4 rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2 ${
              city.isPrimary ? "bg-primary" : "bg-foreground/50"
            }`}
            style={{ 
              boxShadow: city.isPrimary 
                ? "0 0 18px hsl(45 100% 50% / 0.8)" 
                : "0 2px 8px rgba(0,0,0,0.2)" 
            }}
          />
          
          {/* City label */}
          <motion.div
            className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <span 
              className={`text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm shadow-sm ${
                city.isPrimary 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card/85 text-foreground border border-border/50"
              }`}
            >
              {city.label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Bottom gradient for UI contrast */}
      <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Top gradient for header contrast */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default MapBackground;