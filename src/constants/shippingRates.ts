// Türkiye → Avrupa PANELVAN / minivan express navlun (EUR).
// Format: [minPrice, maxPrice] — tahmini aralık.
//
// Kalibrasyon (2026): panelvan/minivan express sınıfı (~1.250–1.400 kg / ~5 palet,
// kapıdan kapıya, 40–72 saat) için pazar araştırmasından türetildi. Yayınlanan
// "…€'dan başlayan" çapalar min, sezon/yakıt/talep primi max ucu yansıtır.
// Kaynaklar: lojistik.tc, hiperlojistik.com, sayginlarnakliyat, sirlojistik (İngiltere).
// ⚠️ Piyasa haftalık oynar; düşük-güvenli (interpolasyon) şehirler canlı teklifle
// doğrulanmalı. Komple 40t TIR için bu değerleri ~1.6–2× ölçekleyin.

export const SHIPPING_RATES: Record<string, [number, number]> = {
  // Germany (Almanya)
  "Munich": [1700, 2200],
  "Münih": [1700, 2200],
  "Stuttgart": [1800, 2350],
  "Frankfurt": [1850, 2400],
  "Cologne": [1950, 2500],
  "Köln": [1950, 2500],
  "Berlin": [1750, 2300],
  "Hamburg": [2050, 2600],

  // Austria (Avusturya)
  "Vienna": [1600, 2100],
  "Viyana": [1600, 2100],
  "Graz": [1550, 2050],
  "Salzburg": [1700, 2200],

  // Netherlands (Hollanda)
  "Amsterdam": [1900, 2500],
  "Rotterdam": [1950, 2550],
  "Eindhoven": [1850, 2450],

  // Belgium (Belçika)
  "Brussels": [1900, 2500],
  "Brüksel": [1900, 2500],
  "Antwerp": [1950, 2550],
  "Anvers": [1950, 2550],

  // France (Fransa)
  "Paris": [1900, 2500],
  "Strasbourg": [1750, 2300],
  "Strazburg": [1750, 2300],
  "Lyon": [1850, 2450],
  "Marseille": [1900, 2500],
  "Marsilya": [1900, 2500],

  // Poland (Polonya)
  "Warsaw": [1600, 2150],
  "Varşova": [1600, 2150],
  "Krakow": [1500, 2000],
  "Kraków": [1500, 2000],
  "Poznan": [1750, 2300],
  "Poznań": [1750, 2300],

  // Czech Republic (Çekya)
  "Prague": [1650, 2200],
  "Prag": [1650, 2200],
  "Brno": [1550, 2100],

  // UK (İngiltere) — Manş feribotu + Brexit gümrük primi
  "London": [2400, 3200],
  "Londra": [2400, 3200],
  "Manchester": [2600, 3400],

  // Italy (İtalya)
  "Milan": [1600, 2300],
  "Milano": [1600, 2300],
  "Verona": [1550, 2250],
  "Rome": [1750, 2450],
  "Roma": [1750, 2450],

  // Switzerland (İsviçre) — AB-dışı gümrük primi
  "Zurich": [1800, 2400],
  "Zürich": [1800, 2400],
  "Zürih": [1800, 2400],
  "Basel": [1800, 2400],

  // Denmark (Danimarka) — Hamburg + ~350 km; interpolasyon, doğrulanmalı
  "Copenhagen": [2300, 2950],
  "Kopenhag": [2300, 2950],
  "Aarhus": [2400, 3050],

  // Sweden (İsveç) — Öresund geçişi; interpolasyon, doğrulanmalı
  "Malmö": [2400, 3050],
  "Malmo": [2400, 3050],
  "Gothenburg": [2550, 3200],
  "Göteborg": [2550, 3200],
  "Stockholm": [2700, 3400],

  // Romania (Romanya)
  "Bucharest": [1400, 1800],
  "Bükreş": [1400, 1800],

  // Spain (İspanya) — uzak; interpolasyon, doğrulanmalı
  "Madrid": [2200, 2900],
  "Barcelona": [2050, 2700],

  // Balkans / Central Europe (Balkanlar) — yakın, gümrük yok; interpolasyon
  "Sofia": [1100, 1500],
  "Sofya": [1100, 1500],
  "Belgrade": [1300, 1700],
  "Belgrad": [1300, 1700],
  "Budapest": [1500, 1950],
  "Budapeşte": [1500, 1950],
  "Zagreb": [1550, 2000],
  "Ljubljana": [1650, 2150],
  "Bratislava": [1600, 2050],
};

export type Currency = "EUR" | "TRY";

export interface PriceResult {
  found: boolean;
  minPrice?: number;
  maxPrice?: number;
  city?: string;
  currency?: Currency;
}

export function getShippingPrice(destination: string): PriceResult {
  // Extract city name from various formats like "İstanbul → Berlin" or just "Berlin"
  const parts = destination.split("→").map((p) => p.trim());
  const cityName = parts[parts.length - 1]; // Get the last part (destination city)

  // Try exact match first
  if (SHIPPING_RATES[cityName]) {
    const [minPrice, maxPrice] = SHIPPING_RATES[cityName];
    return { found: true, minPrice, maxPrice, city: cityName, currency: "EUR" };
  }

  // Try case-insensitive match
  const lowerCity = cityName.toLowerCase();
  for (const [key, value] of Object.entries(SHIPPING_RATES)) {
    if (key.toLowerCase() === lowerCity) {
      return { found: true, minPrice: value[0], maxPrice: value[1], city: key, currency: "EUR" };
    }
  }

  // No fuzzy/substring matching: it produced wrong prices (e.g. "ver" -> Verona).
  // Unknown destinations fall through to a manual custom quote.
  return { found: false, currency: "EUR" };
}

// ---------------------------------------------------------------------------
// Parsiyel (kısmi yük) tahmini
// ---------------------------------------------------------------------------

/** Komple panelvan kapasitesi — içerik sayfaları ve hesaplayıcı bu değerleri kullanır. */
export const VAN_CAPACITY_M3 = 13.5;
export const VAN_CAPACITY_PALLETS = 5;
export const VAN_CAPACITY_KG = 1300;

/**
 * En küçük faturalanabilir hacim. Kapıdan kapıya uluslararası taşımada adresten
 * alım, gümrük işlemi ve adrese teslim maliyetleri hacimden bağımsızdır; bu
 * yüzden tek koli ile yarım metreküp aynı taban maliyeti taşır.
 */
const MIN_BILLABLE_M3 = 0.5;

/**
 * Parsiyelde birim maliyet hacim küçüldükçe artar (sabit maliyetler daha az
 * hacme dağılır). 1'den küçük üs bunu modeller: yükün kapasiteye oranı 0,15 ise
 * fiyat komple aracın %15'i değil, yaklaşık %24'ü olur.
 */
const GROUPAGE_EXPONENT = 0.75;

export interface EstimateResult extends PriceResult {
  /** true ise komple araç fiyatı, false ise hacme göre parsiyel tahmini. */
  isComplete?: boolean;
  /** Fiyatlamada esas alınan hacim (m³); parsiyelde taban hacim uygulanmış olabilir. */
  billableM3?: number;
}

/** Palet adedini yaklaşık m³ karşılığına çevirir. */
export const palletsToM3 = (pallets: number): number =>
  (pallets * VAN_CAPACITY_M3) / VAN_CAPACITY_PALLETS;

/** En × boy × yükseklik (cm) ve adetten toplam m³ hesaplar. */
export const dimensionsToM3 = (
  widthCm: number,
  lengthCm: number,
  heightCm: number,
  quantity = 1
): number => (widthCm * lengthCm * heightCm * quantity) / 1_000_000;

/**
 * Bir güzergah için tahmini fiyat aralığı döndürür.
 *
 * volumeM3 verilmezse veya kapasiteyi dolduruyorsa komple araç fiyatı döner.
 * Aksi halde hacme göre parsiyel tahmini yapılır. Sonuç 10 €'ya yuvarlanır;
 * bunlar pazarlık payı olan tahminlerdir, bağlayıcı teklif değildir.
 */
export function estimateShipmentPrice(destination: string, volumeM3?: number): EstimateResult {
  const base = getShippingPrice(destination);
  if (!base.found || base.minPrice === undefined || base.maxPrice === undefined) return base;

  if (volumeM3 === undefined || !Number.isFinite(volumeM3) || volumeM3 >= VAN_CAPACITY_M3) {
    return { ...base, isComplete: true, billableM3: VAN_CAPACITY_M3 };
  }

  const billableM3 = Math.max(volumeM3, MIN_BILLABLE_M3);
  const factor = Math.pow(billableM3 / VAN_CAPACITY_M3, GROUPAGE_EXPONENT);
  const round10 = (n: number) => Math.round(n / 10) * 10;

  return {
    ...base,
    isComplete: false,
    billableM3,
    minPrice: round10(base.minPrice * factor),
    maxPrice: round10(base.maxPrice * factor),
  };
}
