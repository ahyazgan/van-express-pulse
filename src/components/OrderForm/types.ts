export interface ProductInfo {
  category: string;
  packagingType: string;
  quantity: number;
  totalWeight: number;
  totalVolume: number;
  isStackable: boolean;
}

export interface ContactInfo {
  fullName: string;
  phone: string;
  email: string;
  photos: string[];
}

export interface OrderData {
  destination: string;
  product: ProductInfo;
  contact: ContactInfo;
  estimatedPrice: {
    min: number;
    max: number;
  };
}

export const PRODUCT_CATEGORIES = [
  { value: "electronics", label: "Elektronik" },
  { value: "textiles", label: "Tekstil" },
  { value: "automotive", label: "Otomotiv" },
  { value: "machinery", label: "Makine" },
  { value: "other", label: "Diğer" },
];

export const PACKAGING_TYPES = [
  { value: "pallets", label: "Palet" },
  { value: "boxes", label: "Kutu" },
  { value: "crates", label: "Sandık" },
  { value: "loose", label: "Dökme" },
];
