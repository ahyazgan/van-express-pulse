import { Compass, Package, Wallet, User } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`bottom-nav-item ${active ? "text-primary" : ""}`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const AppNavigation = () => {
  const [activeTab, setActiveTab] = useState("explore");

  const tabs = [
    { id: "explore", icon: Compass, label: "Keşfet" },
    { id: "shipments", icon: Package, label: "Gönderilerim" },
    { id: "wallet", icon: Wallet, label: "Cüzdan" },
    { id: "profile", icon: User, label: "Profil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2 safe-bottom">
        {tabs.map((tab) => (
          <NavItem
            key={tab.id}
            icon={<tab.icon className="w-5 h-5" />}
            label={tab.label}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
    </nav>
  );
};

export default AppNavigation;
