import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, MapPin, Building2, Warehouse, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface SavedAddress {
  id: string;
  title: string;
  city: string;
  full_address: string;
  address_type: string;
}

const addressTypeIcons: Record<string, React.ElementType> = {
  home: Home,
  office: Building2,
  warehouse: Warehouse,
  other: MapPin,
};

const SavedAddresses = () => {
  const { user } = useAuth();
  const { language, t } = useLanguage();
  const { toast } = useToast();
  
  const [addresses, setAddresses] = useState<SavedAddress[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Form state
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [addressType, setAddressType] = useState("other");

  useEffect(() => {
    if (user) {
      fetchAddresses();
    }
  }, [user]);

  const fetchAddresses = async () => {
    try {
      const { data, error } = await supabase
        .from("saved_addresses")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAddresses(data || []);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !city.trim() || !fullAddress.trim()) {
      toast({
        title: language === "tr" ? "Hata" : "Error",
        description: language === "tr" 
          ? "Lütfen tüm alanları doldurun" 
          : "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);

    try {
      const { error } = await supabase.from("saved_addresses").insert({
        user_id: user?.id,
        title: title.trim(),
        city: city.trim(),
        full_address: fullAddress.trim(),
        address_type: addressType,
      });

      if (error) throw error;

      toast({
        title: language === "tr" ? "Başarılı!" : "Success!",
        description: language === "tr" 
          ? "Adres başarıyla eklendi" 
          : "Address added successfully",
      });

      // Reset form and close modal
      setTitle("");
      setCity("");
      setFullAddress("");
      setAddressType("other");
      setIsModalOpen(false);
      
      // Refresh addresses
      fetchAddresses();
    } catch (error) {
      console.error("Error saving address:", error);
      toast({
        title: language === "tr" ? "Hata" : "Error",
        description: language === "tr" 
          ? "Adres eklenirken bir hata oluştu" 
          : "Failed to add address",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const getAddressTypeLabel = (type: string) => {
    const labels: Record<string, { tr: string; en: string }> = {
      home: { tr: "Ev", en: "Home" },
      office: { tr: "Ofis", en: "Office" },
      warehouse: { tr: "Depo", en: "Warehouse" },
      other: { tr: "Diğer", en: "Other" },
    };
    return labels[type]?.[language] || labels.other[language];
  };

  if (loading) {
    return (
      <div className="space-y-3">
        <div className="h-20 bg-muted/50 rounded-2xl animate-pulse" />
        <div className="h-20 bg-muted/50 rounded-2xl animate-pulse" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-foreground">{t.profile.savedAddresses}</h2>
      </div>

      {/* Address List or Empty State */}
      {addresses.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-border p-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground mb-4">
            {language === "tr" 
              ? "Henüz kayıtlı bir adresiniz bulunmuyor." 
              : "You don't have any saved addresses yet."
            }
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl gap-2"
          >
            <Plus className="w-4 h-4" />
            {language === "tr" ? "+ Yeni Adres Ekle" : "+ Add New Address"}
          </Button>
        </motion.div>
      ) : (
        <div className="space-y-3">
          {/* Add Address Button at Top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl h-12 gap-2"
            >
              <Plus className="w-5 h-5" />
              {language === "tr" ? "+ Yeni Adres Ekle" : "+ Add New Address"}
            </Button>
          </motion.div>

          {/* Address Cards */}
          {addresses.map((address, index) => {
            const IconComponent = addressTypeIcons[address.address_type] || MapPin;
            return (
              <motion.div
                key={address.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-4 border border-border flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{address.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {address.city} - {address.full_address}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full flex-shrink-0">
                  {getAddressTypeLabel(address.address_type)}
                </span>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Add Address Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="mx-4 rounded-2xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {language === "tr" ? "Yeni Adres Ekle" : "Add New Address"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="title">
                {language === "tr" ? "Adres Başlığı" : "Address Title"} *
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={language === "tr" ? "Örn: Ev, Ofis, Depo" : "e.g., Home, Office, Warehouse"}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="addressType">
                {language === "tr" ? "Adres Tipi" : "Address Type"}
              </Label>
              <Select value={addressType} onValueChange={setAddressType}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">{language === "tr" ? "Ev" : "Home"}</SelectItem>
                  <SelectItem value="office">{language === "tr" ? "Ofis" : "Office"}</SelectItem>
                  <SelectItem value="warehouse">{language === "tr" ? "Depo" : "Warehouse"}</SelectItem>
                  <SelectItem value="other">{language === "tr" ? "Diğer" : "Other"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">
                {language === "tr" ? "Şehir" : "City"} *
              </Label>
              <Input
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={language === "tr" ? "Örn: İstanbul" : "e.g., Istanbul"}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullAddress">
                {language === "tr" ? "Tam Adres" : "Full Address"} *
              </Label>
              <Input
                id="fullAddress"
                value={fullAddress}
                onChange={(e) => setFullAddress(e.target.value)}
                placeholder={language === "tr" ? "Sokak, Mahalle, İlçe" : "Street, District, Area"}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 h-12 rounded-xl"
              >
                {language === "tr" ? "İptal" : "Cancel"}
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="flex-1 h-12 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                {saving 
                  ? (language === "tr" ? "Ekleniyor..." : "Adding...")
                  : (language === "tr" ? "Ekle" : "Add")
                }
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SavedAddresses;
