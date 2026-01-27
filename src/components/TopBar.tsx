import { User, HelpCircle, Truck } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 px-4 safe-top">
      <div className="flex items-center justify-between h-16 max-w-lg mx-auto">
        {/* Profile Icon */}
        <button className="w-11 h-11 rounded-full glass border border-border/50 flex items-center justify-center touch-target">
          <User className="w-5 h-5 text-foreground" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Truck className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-foreground">Minivan</span>
            <span className="font-bold text-primary ml-1">Express</span>
          </div>
        </div>

        {/* Help Button */}
        <button className="pill-button flex items-center gap-1.5 touch-target">
          <HelpCircle className="w-4 h-4" />
          <span>Yardım</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
