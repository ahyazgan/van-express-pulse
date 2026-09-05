import { Home, MapPin, MessageCircle, FileText } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`bottom-nav-item flex-1 ${active ? "text-primary" : ""}`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNavigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/905393308617", "_blank");
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        <NavItem
          icon={<Home className="w-5 h-5" />}
          label="Ana Sayfa"
          active
          onClick={() => scrollToSection("hero")}
        />
        <NavItem
          icon={<MapPin className="w-5 h-5" />}
          label="Takip"
          onClick={() => scrollToSection("tracking")}
        />
        <NavItem
          icon={<MessageCircle className="w-5 h-5" />}
          label="WhatsApp"
          onClick={openWhatsApp}
        />
        <NavItem
          icon={<FileText className="w-5 h-5" />}
          label="Fiyat Al"
          onClick={() => scrollToSection("hero")}
        />
      </div>
    </nav>
  );
};

export default BottomNavigation;