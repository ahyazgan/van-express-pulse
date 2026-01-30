import { Truck } from "lucide-react";

const RouteEULogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <Truck className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="font-extrabold text-foreground text-lg">RouteEU</span>
      <span className="text-xs font-bold text-red-500 bg-red-100 px-1.5 py-0.5 rounded">EXPRESS</span>
    </div>
  );
};

export default RouteEULogo;
