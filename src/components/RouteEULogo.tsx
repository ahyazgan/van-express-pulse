import logoSvg from "@/assets/routeeu-logo.svg";

const RouteEULogo = () => {
  return (
    <img
      src={logoSvg}
      alt="RouteEU Express"
      style={{ width: '240px', height: '64px' }}
      className="flex-shrink-0"
    />
  );
};

export default RouteEULogo;
