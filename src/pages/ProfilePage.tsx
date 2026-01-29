import { motion } from "framer-motion";
import { MapPin, Bell, Package, LogOut, Building2, Warehouse } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AppNavigation from "@/components/AppNavigation";
import TopBar from "@/components/TopBar";

const savedAddresses = [
  {
    id: 1,
    name: "İstanbul Depo",
    address: "Esenyurt, İstanbul, Türkiye",
    icon: Warehouse,
    type: "Çıkış Noktası",
  },
  {
    id: 2,
    name: "Berlin Office",
    address: "Kreuzberg, Berlin, Germany",
    icon: Building2,
    type: "Varış Noktası",
  },
  {
    id: 3,
    name: "Münih Depo",
    address: "Schwabing, München, Germany",
    icon: Warehouse,
    type: "Varış Noktası",
  },
];

const ProfilePage = () => {
  const [priceNotifications, setPriceNotifications] = useState(true);
  const [trackingNotifications, setTrackingNotifications] = useState(true);
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Çıkış Yapıldı",
      description: "Güvenli bir şekilde çıkış yaptınız.",
    });
  };

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
                  <span className="text-3xl font-bold text-primary">AY</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-success rounded-full flex items-center justify-center border-4 border-background">
                <div className="w-3 h-3 bg-background rounded-full" />
              </div>
            </div>

            {/* Name & Badge */}
            <h1 className="text-2xl font-bold text-foreground mb-2">Ahmet Yılmaz</h1>
            <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-semibold text-primary">Kurumsal Üye</span>
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
              <p className="text-2xl font-bold text-foreground">47</p>
              <p className="text-xs text-muted-foreground">Gönderi</p>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border text-center">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Ülke</p>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border text-center">
              <Bell className="w-6 h-6 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">%98</p>
              <p className="text-xs text-muted-foreground">Zamanında</p>
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
          <h2 className="text-lg font-bold text-foreground mb-3">Kayıtlı Adresler</h2>
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
          <h2 className="text-lg font-bold text-foreground mb-3">Bildirim Ayarları</h2>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Fiyat Bildirimleri</p>
                  <p className="text-sm text-muted-foreground">Özel kampanya ve indirimler</p>
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
                  <p className="font-semibold text-foreground">Kargo Takip</p>
                  <p className="text-sm text-muted-foreground">Gönderi durum güncellemeleri</p>
                </div>
              </div>
              <Switch
                checked={trackingNotifications}
                onCheckedChange={setTrackingNotifications}
              />
            </div>
          </div>
        </motion.div>

        {/* Logout Button */}
        <motion.div
          className="px-6 py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="w-full h-14 rounded-2xl text-base font-semibold gap-2"
          >
            <LogOut className="w-5 h-5" />
            Çıkış Yap
          </Button>
        </motion.div>
      </div>

      <AppNavigation />
    </div>
  );
};

export default ProfilePage;
