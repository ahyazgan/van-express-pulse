import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Upload, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

interface PhotoUploadProps {
  photos: string[];
  onChange: (photos: string[]) => void;
  maxPhotos?: number;
}

const PhotoUpload = ({ photos, onChange, maxPhotos = 3 }: PhotoUploadProps) => {
  const { language } = useLanguage();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const remainingSlots = maxPhotos - photos.length;
    const filesToUpload = Array.from(files).slice(0, remainingSlots);

    setUploading(true);

    try {
      const uploadPromises = filesToUpload.map(async (file) => {
        // Validate file type
        if (!file.type.startsWith("image/")) {
          throw new Error("Only image files are allowed");
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          throw new Error("File size must be less than 5MB");
        }

        const fileExt = file.name.split(".").pop();
        const fileName = `customer/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("shipment-files")
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("shipment-files")
          .getPublicUrl(fileName);

        return publicUrl;
      });

      const newUrls = await Promise.all(uploadPromises);
      onChange([...photos, ...newUrls]);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removePhoto = (index: number) => {
    onChange(photos.filter((_, i) => i !== index));
  };

  const texts = {
    title: language === "tr" ? "Yük Fotoğrafları" : "Cargo Photos",
    description: language === "tr" 
      ? "Yükünüzün fotoğraflarını ekleyin (opsiyonel)" 
      : "Add photos of your cargo (optional)",
    upload: language === "tr" ? "Fotoğraf Ekle" : "Add Photo",
    uploading: language === "tr" ? "Yükleniyor..." : "Uploading...",
    remaining: language === "tr" 
      ? `${maxPhotos - photos.length} fotoğraf daha ekleyebilirsiniz`
      : `You can add ${maxPhotos - photos.length} more photos`,
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Camera className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-foreground text-sm">{texts.title}</h4>
          <p className="text-xs text-muted-foreground">{texts.description}</p>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-3 gap-2">
        <AnimatePresence mode="popLayout">
          {photos.map((url, index) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-secondary"
            >
              <img
                src={url}
                alt={`Cargo ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Upload Button */}
        {photos.length < maxPhotos && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="aspect-square rounded-xl border-2 border-dashed border-border/50 bg-secondary/30 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-secondary/50 transition-colors disabled:opacity-50"
          >
            {uploading ? (
              <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            ) : (
              <>
                <ImageIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">
                  {photos.length}/{maxPhotos}
                </span>
              </>
            )}
          </motion.button>
        )}
      </div>

      {photos.length < maxPhotos && (
        <p className="text-xs text-muted-foreground text-center">
          {texts.remaining}
        </p>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default PhotoUpload;
