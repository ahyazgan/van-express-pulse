import { useState, useRef } from "react";
import { Upload, FileText, X, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DocumentUploadProps {
  orderId: string;
  documents: string[];
  onUpdate: (documents: string[]) => void;
}

const DocumentUpload = ({ orderId, documents, onUpdate }: DocumentUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        // Validate file type (PDF and images)
        const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/webp"];
        if (!validTypes.includes(file.type)) {
          throw new Error("Only PDF and image files are allowed");
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          throw new Error("File size must be less than 10MB");
        }

        const fileExt = file.name.split(".").pop();
        const fileName = `admin/${orderId}/${Date.now()}-${file.name}`;

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
      const updatedDocs = [...documents, ...newUrls];
      
      // Update in database
      const { error } = await supabase
        .from("shipping_requests")
        .update({ admin_documents: updatedDocs })
        .eq("id", orderId);

      if (error) throw error;
      
      onUpdate(updatedDocs);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeDocument = async (index: number) => {
    const updatedDocs = documents.filter((_, i) => i !== index);
    
    const { error } = await supabase
      .from("shipping_requests")
      .update({ admin_documents: updatedDocs })
      .eq("id", orderId);

    if (!error) {
      onUpdate(updatedDocs);
    }
  };

  const getFileName = (url: string) => {
    const parts = url.split("/");
    return parts[parts.length - 1].split("-").slice(1).join("-") || "document";
  };

  const isPdf = (url: string) => url.toLowerCase().endsWith(".pdf");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="gap-1.5">
          <Upload className="w-3.5 h-3.5" />
          Belge
          {documents.length > 0 && (
            <span className="ml-1 bg-primary text-primary-foreground text-xs px-1.5 rounded-full">
              {documents.length}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Belgeler (CMR, Fatura vb.)</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Uploaded Documents */}
          {documents.length > 0 && (
            <div className="space-y-2">
              {documents.map((url, index) => (
                <div
                  key={url}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {getFileName(url)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isPdf(url) ? "PDF Dosyası" : "Görsel"}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a
                      href={url}
                      download
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <button
                      onClick={() => removeDocument(index)}
                      className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 text-destructive" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full p-6 border-2 border-dashed border-border/50 rounded-xl flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-secondary/30 transition-colors disabled:opacity-50"
          >
            {uploading ? (
              <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            ) : (
              <>
                <Upload className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  PDF veya görsel yüklemek için tıklayın
                </span>
              </>
            )}
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf,image/jpeg,image/png,image/webp"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentUpload;
