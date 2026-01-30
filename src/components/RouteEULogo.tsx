import logoSvg from "@/assets/routeeu-logo.svg";

const RouteEULogo = () => {
  return (
    <img
      src={logoSvg}
      alt="RouteEU Express"
      style={{ width: '180px', height: '48px' }}
      className="flex-shrink-0"
    />
  );
};

export default RouteEULogo;
