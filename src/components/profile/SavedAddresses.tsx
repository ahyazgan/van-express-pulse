import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, MapPin, Building2, Warehouse, Home, Pencil, Trash2 } from "lucide-react";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  
  // Form state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [addressType, setAddressType] = useState("other");

  useEffect(() => {
    if (user) {
      fetchAddresses();
    } else {
      // No session: stop the skeleton instead of spinning forever.
      setLoading(false);
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

  const resetForm = () => {
    setTitle("");
    setCity("");
    setFullAddress("");
    setAddressType("other");
    setEditingId(null);
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (address: SavedAddress) => {
    setEditingId(address.id);
    setTitle(address.title);
    setCity(address.city);
    setFullAddress(address.full_address);
    setAddressType(address.address_type);
    setIsModalOpen(true);
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
      if (editingId) {
        // Update existing address
        const { error } = await supabase
          .from("saved_addresses")
          .update({
            title: title.trim(),
            city: city.trim(),
            full_address: fullAddress.trim(),
            address_type: addressType,
          })
          .eq("id", editingId);

        if (error) throw error;

        toast({
          title: language === "tr" ? "Başarılı!" : "Success!",
          description: language === "tr" 
            ? "Adres başarıyla güncellendi" 
            : "Address updated successfully",
        });
      } else {
        // Insert new address
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
      }

      resetForm();
      setIsModalOpen(false);
      fetchAddresses();
    } catch (error) {
      console.error("Error saving address:", error);
      toast({
        title: language === "tr" ? "Hata" : "Error",
        description: language === "tr" 
          ? "Adres kaydedilirken bir hata oluştu" 
          : "Failed to save address",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteConfirmId) return;

    setDeleting(true);

    try {
      const { error } = await supabase
        .from("saved_addresses")
        .delete()
        .eq("id", deleteConfirmId);

      if (error) throw error;

      toast({
        title: language === "tr" ? "Silindi" : "Deleted",
        description: language === "tr" 
          ? "Adres başarıyla silindi" 
          : "Address deleted successfully",
      });

      setDeleteConfirmId(null);
      fetchAddresses();
    } catch (error) {
      console.error("Error deleting address:", error);
      toast({
        title: language === "tr" ? "Hata" : "Error",
        description: language === "tr" 
          ? "Adres silinirken bir hata oluştu" 
          : "Failed to delete address",
        variant: "destructive",
      });
    } finally {
      setDeleting(false);
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
            onClick={openAddModal}
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
              onClick={openAddModal}
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
                className="bg-card rounded-2xl p-4 border border-border"
              >
                <div className="flex items-center gap-4">
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
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditModal(address)}
                    className="flex-1 h-9 rounded-xl gap-2 text-foreground"
                  >
                    <Pencil className="w-4 h-4" />
                    {language === "tr" ? "Düzenle" : "Edit"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDeleteConfirmId(address.id)}
                    className="flex-1 h-9 rounded-xl gap-2 text-destructive border-destructive/30 hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                    {language === "tr" ? "Sil" : "Delete"}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Add/Edit Address Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => {
        setIsModalOpen(open);
        if (!open) resetForm();
      }}>
        <DialogContent className="mx-4 rounded-2xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {editingId 
                ? (language === "tr" ? "Adresi Düzenle" : "Edit Address")
                : (language === "tr" ? "Yeni Adres Ekle" : "Add New Address")
              }
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
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
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
                  ? (language === "tr" ? "Kaydediliyor..." : "Saving...")
                  : editingId
                    ? (language === "tr" ? "Güncelle" : "Update")
                    : (language === "tr" ? "Ekle" : "Add")
                }
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirmId} onOpenChange={(open) => !open && setDeleteConfirmId(null)}>
        <AlertDialogContent className="mx-4 rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {language === "tr" ? "Adresi Sil" : "Delete Address"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {language === "tr" 
                ? "Bu adresi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz."
                : "Are you sure you want to delete this address? This action cannot be undone."
              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2 sm:gap-0">
            <AlertDialogCancel className="rounded-xl" disabled={deleting}>
              {language === "tr" ? "İptal" : "Cancel"}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              {deleting 
                ? (language === "tr" ? "Siliniyor..." : "Deleting...")
                : (language === "tr" ? "Sil" : "Delete")
              }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SavedAddresses;
