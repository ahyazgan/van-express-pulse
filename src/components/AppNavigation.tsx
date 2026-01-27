import { motion } from "framer-motion";
import { Compass, Package, Wallet, User } from "lucide-react";

const navItems = [
  { id: "explore", icon: Compass, label: "Keşfet" },
  { id: "shipments", icon: Package, label: "Gönderilerim" },
  { id: "wallet", icon: Wallet, label: "Cüzdan" },
  { id: "profile", icon: User, label: "Profil" },
];

interface AppNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const AppNavigation = ({ activeTab, onTabChange }: AppNavigationProps) => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 safe-bottom"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="mx-4 mb-2 rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`bottom-nav-item relative ${activeTab === item.id ? "active" : ""}`}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "radial-gradient(circle at center, hsl(45 100% 50% / 0.12), transparent 70%)",
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <motion.div
                animate={{
                  scale: activeTab === item.id ? 1.15 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <item.icon className="w-6 h-6" strokeWidth={activeTab === item.id ? 2.5 : 2} />
              </motion.div>
              <span className="text-xs font-bold mt-0.5">{item.label}</span>
              
              {/* Glow effect for active item */}
              {activeTab === item.id && (
                <motion.div
                  className="absolute -top-1 left-1/2 w-8 h-1 rounded-full bg-primary"
                  initial={{ opacity: 0, x: "-50%" }}
                  animate={{ opacity: 1, x: "-50%" }}
                  style={{ boxShadow: "0 0 14px 3px hsl(45 100% 50% / 0.9)" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default AppNavigation;