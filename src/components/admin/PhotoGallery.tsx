import { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PhotoGalleryProps {
  photos: string[];
}

// Extract file path from public URL or return as-is if it's already a path
const extractFilePath = (url: string): string => {
  // If it's already a path (not a full URL), return as-is
  if (!url.startsWith("http")) return url;
  
  // Extract path from public URL: .../storage/v1/object/public/shipment-files/customer/...
  const match = url.match(/\/storage\/v1\/object\/public\/shipment-files\/(.+)$/);
  if (match) return match[1];
  
  // Try alternate pattern: bucket name in path
  const altMatch = url.match(/shipment-files\/(.+)$/);
  if (altMatch) return altMatch[1];
  
  return url;
};

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [signedUrls, setSignedUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Generate signed URLs when dialog opens
  useEffect(() => {
    if (!isOpen || photos.length === 0) return;

    const generateSignedUrls = async () => {
      setLoading(true);
      try {
        const urls = await Promise.all(
          photos.map(async (photo) => {
            const filePath = extractFilePath(photo);
            const { data, error } = await supabase.storage
              .from("shipment-files")
              .createSignedUrl(filePath, 3600); // 1 hour expiry
            
            if (error) {
              console.error("Error generating signed URL:", error);
              return photo; // Fallback to original URL
            }
            return data.signedUrl;
          })
        );
        setSignedUrls(urls);
      } catch (error) {
        console.error("Error generating signed URLs:", error);
        setSignedUrls(photos); // Fallback to original URLs
      } finally {
        setLoading(false);
      }
    };

    generateSignedUrls();
  }, [isOpen, photos]);

  if (photos.length === 0) {
    return (
      <span className="text-xs text-muted-foreground">Fotoğraf yok</span>
    );
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const displayUrls = signedUrls.length > 0 ? signedUrls : photos;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="gap-1.5 text-primary hover:text-primary">
          <Camera className="w-3.5 h-3.5" />
          {photos.length} Fotoğraf
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Yük Fotoğrafları</DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
              <img
                src={displayUrls[currentIndex]}
                alt={`Cargo photo ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        )}

        {/* Thumbnails */}
        {photos.length > 1 && !loading && (
          <div className="flex gap-2 justify-center mt-4">
            {displayUrls.map((url, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentIndex
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGallery;
