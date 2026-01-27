import { motion } from "framer-motion";
import { Truck } from "lucide-react";

const animatedVans = [
  { id: 1, startX: 50, startY: 600, endX: 300, endY: 150, duration: 18, delay: 0 },
  { id: 2, startX: 350, startY: 400, endX: 80, endY: 100, duration: 22, delay: 3 },
  { id: 3, startX: 150, startY: 300, endX: 320, endY: 500, duration: 16, delay: 6 },
];

const MapBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Premium Dark Map Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,12%)] via-[hsl(220,12%,10%)] to-[hsl(220,10%,8%)]" />
      
      {/* Map Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(220, 15%, 30%)" strokeWidth="0.3" />
          </pattern>
          <pattern id="largeGrid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(220, 15%, 35%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#largeGrid)" />
      </svg>

      {/* Stylized Roads */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="roadGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 15%, 25%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(220, 15%, 20%)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="roadGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(220, 15%, 28%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(220, 15%, 18%)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="routeActive" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 100%, 50%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(45, 100%, 55%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(356, 94%, 43%)" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Major Roads */}
        <path d="M 0 200 Q 100 180 200 200 T 400 180" fill="none" stroke="url(#roadGradient1)" strokeWidth="12" strokeLinecap="round" />
        <path d="M 0 450 Q 150 420 250 460 T 400 440" fill="none" stroke="url(#roadGradient1)" strokeWidth="10" strokeLinecap="round" />
        <path d="M 0 650 Q 200 620 300 670 T 400 640" fill="none" stroke="url(#roadGradient2)" strokeWidth="14" strokeLinecap="round" />
        
        {/* Vertical Roads */}
        <path d="M 100 0 Q 90 200 110 400 T 90 800" fill="none" stroke="url(#roadGradient2)" strokeWidth="8" strokeLinecap="round" />
        <path d="M 300 0 Q 310 300 290 500 T 310 800" fill="none" stroke="url(#roadGradient1)" strokeWidth="10" strokeLinecap="round" />

        {/* Diagonal Highways */}
        <path d="M 0 100 L 150 300 L 250 280 L 400 500" fill="none" stroke="url(#roadGradient2)" strokeWidth="6" strokeLinecap="round" />
        <path d="M 400 100 L 300 250 L 200 350 L 0 600" fill="none" stroke="url(#roadGradient1)" strokeWidth="6" strokeLinecap="round" />

        {/* Active Route - Highlighted */}
        <motion.path
          d="M 80 720 Q 120 550 180 450 Q 240 350 280 280 Q 320 210 350 120"
          fill="none"
          stroke="url(#routeActive)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="12 6"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />

        {/* City Markers */}
        <motion.circle
          cx="80" cy="720" r="10"
          fill="hsl(45, 100%, 50%)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        />
        <motion.circle
          cx="80" cy="720" r="16"
          fill="none"
          stroke="hsl(45, 100%, 50%)"
          strokeWidth="2"
          opacity="0.4"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        
        <motion.circle
          cx="350" cy="120" r="8"
          fill="hsl(356, 94%, 43%)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        />
        
        {/* Intermediate Points */}
        <circle cx="180" cy="450" r="4" fill="hsl(220, 15%, 45%)" />
        <circle cx="280" cy="280" r="4" fill="hsl(220, 15%, 45%)" />
      </svg>

      {/* Animated Minivans */}
      {animatedVans.map((van) => (
        <motion.div
          key={van.id}
          className="absolute z-20"
          initial={{ x: van.startX, y: van.startY, opacity: 0 }}
          animate={{
            x: [van.startX, (van.startX + van.endX) / 2, van.endX],
            y: [van.startY, (van.startY + van.endY) / 2 - 50, van.endY],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: van.duration,
            delay: van.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md" />
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
              <Truck className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Pulsing Location Markers */}
      <div className="absolute top-[15%] left-[20%] z-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="absolute inset-0 w-5 h-5 bg-primary rounded-full"
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-5 h-5 bg-primary rounded-full shadow-lg" style={{ boxShadow: '0 0 20px hsl(45, 100%, 50%, 0.5)' }} />
        </motion.div>
      </div>

      <div className="absolute top-[40%] right-[25%] z-20">
        <motion.div
          className="w-3 h-3 bg-accent rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ boxShadow: '0 0 15px hsl(356, 94%, 43%, 0.5)' }}
        />
      </div>

      <div className="absolute bottom-[35%] left-[35%] z-20">
        <motion.div
          className="w-4 h-4 bg-muted-foreground/60 rounded-full"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default MapBackground;
