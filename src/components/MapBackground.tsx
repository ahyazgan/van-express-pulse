const MapBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
      
      {/* Stylized map pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid pattern for roads */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Stylized route lines */}
          <path
            d="M 100 700 Q 150 500 200 400 T 300 200 T 350 50"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 5"
            className="animate-pulse"
          />

          {/* City markers */}
          <circle cx="100" cy="700" r="8" fill="hsl(var(--primary))" />
          <circle cx="200" cy="400" r="6" fill="hsl(var(--muted-foreground))" />
          <circle cx="350" cy="50" r="8" fill="hsl(var(--accent))" />

          {/* Connecting dots */}
          <circle cx="150" cy="550" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          <circle cx="250" cy="300" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          <circle cx="320" cy="150" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
        </svg>
      </div>

      {/* Floating location markers */}
      <div className="absolute top-1/4 left-1/4 z-20">
        <div className="relative">
          <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
          <div className="w-4 h-4 bg-primary rounded-full relative" />
        </div>
      </div>

      <div className="absolute top-1/2 right-1/3 z-20">
        <div className="w-3 h-3 bg-accent rounded-full" />
      </div>
    </div>
  );
};

export default MapBackground;
