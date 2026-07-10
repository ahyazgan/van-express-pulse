// Domestic (Türkiye içi) shipping — distance-based estimate model.
//
// Pricing is computed from the driving distance between two Turkish cities
// (great-circle × roadFactor), shown as a ±range instead of a single number:
//   estimate = (baseFee + perKm * roadKm) * vehicleMultiplier
//
// Numbers below are calibrated to 2026 market/cost data but should still be
// validated with real carrier quotes. Tune only the DOMESTIC_PRICING block.

import type { PriceResult } from "@/constants/shippingRates";

export type ShippingMode = "europe" | "domestic";

export interface DomesticCity {
  id: string;
  label: string;
  coords: [number, number]; // [lng, lat]
  isPrimary?: boolean;
}

// Top Turkish provinces (extend freely — pricing works for any pair here).
export const DOMESTIC_CITIES: DomesticCity[] = [
  { id: "istanbul", label: "İstanbul", coords: [28.9784, 41.0082], isPrimary: true },
  { id: "ankara", label: "Ankara", coords: [32.8597, 39.9334], isPrimary: true },
  { id: "izmir", label: "İzmir", coords: [27.1428, 38.4237], isPrimary: true },
  { id: "bursa", label: "Bursa", coords: [29.061, 40.1826], isPrimary: true },
  { id: "antalya", label: "Antalya", coords: [30.7133, 36.8969], isPrimary: true },
  { id: "adana", label: "Adana", coords: [35.3213, 37.0 ], isPrimary: true },
  { id: "gaziantep", label: "Gaziantep", coords: [37.3833, 37.0662] },
  { id: "konya", label: "Konya", coords: [32.4846, 37.8746] },
  { id: "kayseri", label: "Kayseri", coords: [35.4787, 38.7312] },
  { id: "mersin", label: "Mersin", coords: [34.6415, 36.8121] },
  { id: "eskisehir", label: "Eskişehir", coords: [30.5206, 39.7767] },
  { id: "kocaeli", label: "Kocaeli", coords: [29.9187, 40.7654] },
  { id: "diyarbakir", label: "Diyarbakır", coords: [40.2306, 37.9144] },
  { id: "samsun", label: "Samsun", coords: [36.33, 41.2867] },
  { id: "denizli", label: "Denizli", coords: [29.0875, 37.7765] },
  { id: "sanliurfa", label: "Şanlıurfa", coords: [38.7969, 37.1591] },
  { id: "malatya", label: "Malatya", coords: [38.3095, 38.3552] },
  { id: "trabzon", label: "Trabzon", coords: [39.7168, 41.0027] },
  { id: "mugla", label: "Muğla", coords: [28.3636, 37.2153] },
  { id: "erzurum", label: "Erzurum", coords: [41.2769, 39.9] },
];

// Kalibrasyon (2026 tahmini) — pazar araştırması + maliyet kırılımından türetildi.
// Panelvan (~10 km/L dizel), gidiş + boş dönüş dahil kırılım:
//   Yakıt ~9 TL/km · Sürücü/amortisman ~10 TL/km · Otoyol/köprü + marj ~9 TL/km => ~28 TL/km
//   Taban: yükleme/boşaltma + operasyon + sabit gider payı ~4.500 TL
// Referans: küçük kamyonet/panelvan 100–300 km ≈ 7.000–12.500 TL; İst–Ankara ≈ 14–19k TL.
// ⚠️ Sahadan gerçek taşıyıcı verisiyle DOĞRULANMALI; tek yerden ayarlanır.
export const DOMESTIC_PRICING = {
  baseFee: 4500, // TL
  perKm: 28, // TL/km (gerçek yol mesafesi başına)
  roadFactor: 1.3, // kuş-uçuşu -> yaklaşık karayolu mesafesi (routing API yok)
  rangeSpread: 0.15, // ±%15 -> tahmini aralık
  minKm: 40, // çok yakın rotalarda alt sınır (yol km)
  roundTo: 100, // gösterimi yuvarlama
};

// Vehicle multipliers (panelvan = referans).
export const DOMESTIC_VEHICLES: Record<string, number> = {
  panelvan: 1.0,
  kamyonet: 1.4,
  kamyon: 2.0,
};

const toRad = (deg: number) => (deg * Math.PI) / 180;

// Great-circle distance in km between two [lng, lat] points.
export function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const dLat = toRad(b[1] - a[1]);
  const dLng = toRad(a[0] - b[0]);
  const lat1 = toRad(a[1]);
  const lat2 = toRad(b[1]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

const norm = (s: string) =>
  s.trim().toLocaleLowerCase("tr-TR");

export function findDomesticCity(name: string): DomesticCity | undefined {
  const n = norm(name);
  return (
    DOMESTIC_CITIES.find((c) => norm(c.label) === n) ||
    DOMESTIC_CITIES.find((c) => c.id === n)
  );
}

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

/**
 * Estimated domestic freight price (TL) as a range.
 * Returns { found: false } when either city is outside the covered list
 * (caller then shows a "custom quote" path).
 */
export function getDomesticPrice(
  origin: string,
  destination: string,
  vehicle: keyof typeof DOMESTIC_VEHICLES | string = "panelvan",
): PriceResult {
  const from = findDomesticCity(origin);
  const to = findDomesticCity(destination);

  if (!from || !to) {
    return { found: false, currency: "TRY" };
  }

  const multiplier = DOMESTIC_VEHICLES[vehicle] ?? 1.0;
  // Great-circle distance underestimates real driving distance by ~30%; correct it.
  const roadKm = Math.max(
    DOMESTIC_PRICING.minKm,
    haversineKm(from.coords, to.coords) * DOMESTIC_PRICING.roadFactor,
  );
  const central = (DOMESTIC_PRICING.baseFee + DOMESTIC_PRICING.perKm * roadKm) * multiplier;

  const minPrice = roundTo(central * (1 - DOMESTIC_PRICING.rangeSpread), DOMESTIC_PRICING.roundTo);
  const maxPrice = roundTo(central * (1 + DOMESTIC_PRICING.rangeSpread), DOMESTIC_PRICING.roundTo);

  return { found: true, minPrice, maxPrice, city: to.label, currency: "TRY" };
}
