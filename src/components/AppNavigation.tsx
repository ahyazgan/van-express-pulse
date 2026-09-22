import { motion } from "framer-motion";
import { Map, Package, Search, User } from "lucide-react";
import type { ComponentType } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { waHref } from "@/content/seo/contact";

// lucide icons type strokeWidth as string | number; match it so both fit.
type Icon = ComponentType<{ className?: string; strokeWidth?: number | string }>;
type NavItem =
  | { id: string; icon: Icon; label: string; route: string }
  | { id: string; icon: Icon; label: string; href: string };

const AppNavigation = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const { user } = useAuth();

  // A first-time visitor has no profile to open; that slot is worth more as the
  // one nav item that reaches a human. Signed-in users get Profile back.
  const contactHref = waHref(
    language === "tr"
      ? "Merhaba, Avrupa'ya panelvan taşıma için fiyat almak istiyorum."
      : "Hello, I would like a quote for van transport to Europe."
  );
  const navItems: NavItem[] = [
    { id: "explore", icon: Map, label: t.nav.explore, route: "/" },
    { id: "orders", icon: Package, label: t.nav.shipments, route: "/orders" },
    { id: "track", icon: Search, label: t.nav.liveTracking, route: "/track" },
    user
      ? { id: "profile", icon: User, label: t.nav.profile, route: "/profile" }
      : { id: "contact", icon: WhatsAppIcon, label: t.nav.contact, href: contactHref },
  ];

  const getActiveTab = () => {
    const currentPath = location.pathname;
    const item = navItems.find((item) => "route" in item && item.route === currentPath);
    return item?.id || "explore";
  };

  const activeTab = getActiveTab();

  return (
    <motion.nav
      // On desktop the quote panel owns the left 420px; the bar sits over the map.
      className="fixed bottom-0 left-0 right-0 z-50 safe-bottom pointer-events-none md:left-[420px]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="mx-4 mb-2 rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-lg pointer-events-auto">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const inner = (
              <>
                {isActive && (
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
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <span className="text-xs font-bold mt-0.5">{item.label}</span>

                {/* Glow effect for active item */}
                {isActive && (
                  <motion.div
                    className="absolute -top-1 left-1/2 w-8 h-1 rounded-full bg-primary"
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "-50%" }}
                    style={{ boxShadow: "0 0 14px 3px hsl(45 100% 50% / 0.9)" }}
                  />
                )}
              </>
            );
            const cls = `bottom-nav-item relative ${isActive ? "active" : ""}`;
            return "href" in item ? (
              <a key={item.id} href={item.href} target="_blank" rel="noopener" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={item.id} to={item.route} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default AppNavigation;
