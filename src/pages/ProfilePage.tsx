import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Bell, Package, LogOut, LogIn, Building2, Warehouse, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import AppNavigation from "@/components/AppNavigation";
import TopBar from "@/components/TopBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { user, profile, signOut } = useAuth();
  const [priceNotifications, setPriceNotifications] = useState(true);
  const [trackingNotifications, setTrackingNotifications] = useState(true);
  const { toast } = useToast();

  const savedAddresses = [
    {
      id: 1,
      name: language === "tr" ? "İstanbul Depo" : "Istanbul Warehouse",
      address: "Esenyurt, İstanbul, Türkiye",
      icon: Warehouse,
      type: t.profile.origin,
    },
    {
      id: 2,
      name: "Berlin Office",
      address: "Kreuzberg, Berlin, Germany",
      icon: Building2,
      type: t.profile.destination,
    },
    {
      id: 3,
      name: language === "tr" ? "Münih Depo" : "Munich Warehouse",
      address: "Schwabing, München, Germany",
      icon: Warehouse,
      type: t.profile.destination,
    },
  ];

  const handleLogout = async () => {
    await signOut();
    toast({
      title: t.profile.logoutSuccess,
      description: t.profile.logoutMessage,
    });
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/auth", { state: { from: "/profile" } });
  };

  // Get display name from profile or user email
  const displayName = profile?.full_name || profile?.company_name || user?.email?.split("@")[0] || "User";
  const initials = displayName.slice(0, 2).toUpperCase();

  // If user is not logged in, show login prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <TopBar />
        <div className="flex flex-col items-center justify-center h-[70vh] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <User className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {language === "tr" ? "Giriş Yapın" : "Log In"}
            </h1>
            <p className="text-muted-foreground mb-6 max-w-xs">
              {language === "tr" 
                ? "Profilinizi görüntülemek ve siparişlerinizi takip etmek için giriş yapın."
                : "Log in to view your profile and track your orders."
              }
            </p>
            <Button
              onClick={handleLogin}
              className="h-14 px-8 rounded-2xl btn-primary-glow gap-2"
            >
              <LogIn className="w-5 h-5" />
              {language === "tr" ? "Giriş Yap / Üye Ol" : "Log In / Sign Up"}
            </Button>
          </motion.div>
        </div>
        <AppNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar />

      <div className="h-full overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-b from-primary/10 to-background pt-20 pb-8 px-6">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Avatar */}
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{initials}</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-background">
                <div className="w-3 h-3 bg-background rounded-full" />
              </div>
            </div>

            {/* Name & Badge */}
            <h1 className="text-2xl font-bold text-foreground mb-1">{displayName}</h1>
            {profile?.company_name && profile.full_name && (
              <p className="text-sm text-muted-foreground mb-2">{profile.company_name}</p>
            )}
            <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-semibold text-primary">{t.profile.corporateMember}</span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="px-6 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card rounded-2xl p-4 border border-border text-center">
              <Package className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">0</p>
              <p className="text-xs text-muted-foreground">{t.profile.shipments}</p>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border text-center">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">0</p>
              <p className="text-xs text-muted-foreground">{t.profile.countries}</p>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border text-center">
              <Bell className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">-</p>
              <p className="text-xs text-muted-foreground">{t.profile.onTime}</p>
            </div>
          </div>
        </motion.div>

        {/* Saved Addresses */}
        <motion.div
          className="px-6 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-bold text-foreground mb-3">{t.profile.savedAddresses}</h2>
          <div className="space-y-3">
            {savedAddresses.map((address) => (
              <motion.div
                key={address.id}
                className="bg-card rounded-2xl p-4 border border-border flex items-center gap-4"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <address.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{address.name}</h3>
                  <p className="text-sm text-muted-foreground">{address.address}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                  {address.type}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          className="px-6 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-bold text-foreground mb-3">{t.profile.notificationSettings}</h2>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.profile.priceNotifications}</p>
                  <p className="text-sm text-muted-foreground">{t.profile.priceNotificationsDesc}</p>
                </div>
              </div>
              <Switch
                checked={priceNotifications}
                onCheckedChange={setPriceNotifications}
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Package className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.profile.trackingNotifications}</p>
                  <p className="text-sm text-muted-foreground">{t.profile.trackingNotificationsDesc}</p>
                </div>
              </div>
              <Switch
                checked={trackingNotifications}
                onCheckedChange={setTrackingNotifications}
              />
            </div>
          </div>
        </motion.div>

        {/* Email Info */}
        <motion.div
          className="px-6 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <p className="text-center text-sm text-muted-foreground">
            {user.email}
          </p>
        </motion.div>

        {/* Logout Button with Confirmation */}
        <motion.div
          className="px-6 py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full h-14 rounded-2xl text-base font-semibold gap-2 border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="w-5 h-5" />
                {t.profile.logout}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="mx-4 rounded-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {language === "tr" ? "Çıkış yapmak istiyor musunuz?" : "Do you want to log out?"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {language === "tr" 
                    ? "Oturumunuz sonlandırılacak ve ana sayfaya yönlendirileceksiniz."
                    : "Your session will be ended and you will be redirected to the homepage."
                  }
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2 sm:gap-0">
                <AlertDialogCancel className="rounded-xl">
                  {language === "tr" ? "İptal" : "Cancel"}
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleLogout}
                  className="rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  {t.profile.logout}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </motion.div>
      </div>

      <AppNavigation />
    </div>
  );
};

export default ProfilePage;
