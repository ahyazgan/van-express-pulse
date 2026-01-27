import { Compass, Package, Wallet, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`bottom-nav-item ${active ? "active" : ""}`}
  >
    <motion.div
      className="relative"
      whileTap={{ scale: 0.9 }}
    >
      {active && (
        <motion.div
          className="absolute -inset-2 bg-primary/20 rounded-full blur-lg"
          layoutId="navGlow"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      {icon}
    </motion.div>
    <span className="text-[11px] font-semibold">{label}</span>
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/30" style={{
      background: "linear-gradient(180deg, hsl(220, 10%, 12%, 0.9) 0%, hsl(220, 10%, 10%, 0.95) 100%)",
      backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
    }}>
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2 safe-bottom">
        {tabs.map((tab) => (
          <NavItem
            key={tab.id}
            icon={<tab.icon className="w-5 h-5" strokeWidth={2.5} />}
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
