import { motion } from "framer-motion";
import { Package, Scale, Box, Layers } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductInfo, PRODUCT_CATEGORIES, PACKAGING_TYPES } from "./types";

interface ProductStepProps {
  data: ProductInfo;
  onChange: (data: ProductInfo) => void;
}

const ProductStep = ({ data, onChange }: ProductStepProps) => {
  const updateField = <K extends keyof ProductInfo>(
    field: K,
    value: ProductInfo[K]
  ) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Package className="w-4 h-4 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">Ürün Bilgileri</h3>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Ürün Kategorisi</Label>
        <Select
          value={data.category}
          onValueChange={(v) => updateField("category", v)}
        >
          <SelectTrigger className="h-12 rounded-xl bg-secondary/50 border-border/50">
            <SelectValue placeholder="Kategori seçin" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            {PRODUCT_CATEGORIES.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Packaging Type */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Ambalaj Tipi</Label>
        <Select
          value={data.packagingType}
          onValueChange={(v) => updateField("packagingType", v)}
        >
          <SelectTrigger className="h-12 rounded-xl bg-secondary/50 border-border/50">
            <SelectValue placeholder="Ambalaj tipi seçin" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            {PACKAGING_TYPES.map((pkg) => (
              <SelectItem key={pkg.value} value={pkg.value}>
                {pkg.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Quantity */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground flex items-center gap-2">
          <Box className="w-4 h-4" />
          Adet
        </Label>
        <Input
          type="number"
          min={1}
          value={data.quantity || ""}
          onChange={(e) => updateField("quantity", parseInt(e.target.value) || 0)}
          placeholder="Toplam adet"
          className="h-12 rounded-xl bg-secondary/50 border-border/50"
        />
      </div>

      {/* Weight & Volume Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground flex items-center gap-2">
            <Scale className="w-4 h-4" />
            Ağırlık (kg) <span className="text-xs">(opsiyonel)</span>
          </Label>
          <Input
            type="number"
            min={0}
            value={data.totalWeight || ""}
            onChange={(e) =>
              updateField("totalWeight", parseInt(e.target.value) || 0)
            }
            placeholder="Ağırlık girin"
            className="h-12 rounded-xl bg-secondary/50 border-border/50"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Hacim (m³) <span className="text-xs">(opsiyonel)</span>
          </Label>
          <Input
            type="number"
            min={0}
            step={0.1}
            value={data.totalVolume || ""}
            onChange={(e) =>
              updateField("totalVolume", parseFloat(e.target.value) || 0)
            }
            placeholder="Hacim girin"
            className="h-12 rounded-xl bg-secondary/50 border-border/50"
          />
        </div>
      </div>

      {/* Stackable Toggle */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50">
        <div>
          <Label className="text-sm font-medium text-foreground">
            İstiflenebilir mi?
          </Label>
          <p className="text-xs text-muted-foreground mt-0.5">
            Üzerine yük koyulabilir mi?
          </p>
        </div>
        <Switch
          checked={data.isStackable}
          onCheckedChange={(v) => updateField("isStackable", v)}
        />
      </div>
    </motion.div>
  );
};

export default ProductStep;
