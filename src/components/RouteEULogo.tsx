const RouteEULogo = () => {
  return (
    <svg
      width="180"
      height="48"
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Yellow Circle Background */}
      <circle cx="24" cy="24" r="20" fill="#FBBF24" />
      
      {/* Minimalist Truck Icon */}
      <g fill="#1E293B">
        {/* Truck cabin */}
        <rect x="14" y="18" width="12" height="10" rx="2" />
        {/* Truck cargo */}
        <rect x="26" y="14" width="10" height="14" rx="1" />
        {/* Front wheel */}
        <circle cx="18" cy="30" r="3" fill="#1E293B" />
        <circle cx="18" cy="30" r="1.5" fill="#FBBF24" />
        {/* Back wheel */}
        <circle cx="32" cy="30" r="3" fill="#1E293B" />
        <circle cx="32" cy="30" r="1.5" fill="#FBBF24" />
      </g>
      
      {/* RouteEU Text */}
      <text
        x="52"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="#1E293B"
      >
        RouteEU
      </text>
      
      {/* EXPRESS Badge */}
      <rect x="126" y="14" width="50" height="20" rx="10" fill="#EF4444" />
      <text
        x="151"
        y="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        EXPRESS
      </text>
    </svg>
  );
};

export default RouteEULogo;
