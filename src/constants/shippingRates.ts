// City-based shipping rates for Minivan Express (EUR)
// Format: [minPrice, maxPrice]

export const SHIPPING_RATES: Record<string, [number, number]> = {
  // Germany (Almanya)
  "Munich": [2050, 2350],
  "Münih": [2050, 2350],
  "Stuttgart": [2100, 2500],
  "Frankfurt": [2200, 2600],
  "Cologne": [2250, 2650],
  "Köln": [2250, 2650],
  "Berlin": [2350, 2700],
  "Hamburg": [2500, 2800],
  
  // Austria (Avusturya)
  "Vienna": [1950, 2250],
  "Viyana": [1950, 2250],
  "Graz": [2000, 2300],
  "Salzburg": [2000, 2300],
  
  // Netherlands (Hollanda)
  "Amsterdam": [2450, 2950],
  "Rotterdam": [2450, 2900],
  "Eindhoven": [2400, 2800],
  
  // Belgium (Belçika)
  "Brussels": [2400, 2900],
  "Brüksel": [2400, 2900],
  "Antwerp": [2450, 2950],
  "Anvers": [2450, 2950],
  
  // France (Fransa)
  "Paris": [2650, 3250],
  "Strasbourg": [2400, 2700],
  "Strazburg": [2400, 2700],
  "Lyon": [2550, 3100],
  
  // Poland (Polonya)
  "Warsaw": [2000, 2400],
  "Varşova": [2000, 2400],
  "Krakow": [1950, 2250],
  "Kraków": [1950, 2250],
  "Poznan": [2150, 2500],
  "Poznań": [2150, 2500],
  
  // Czech Republic (Çekya)
  "Prague": [2050, 2350],
  "Prag": [2050, 2350],
  "Brno": [2000, 2250],
  
  // UK (İngiltere)
  "London": [3500, 4300],
  "Londra": [3500, 4300],
  "Manchester": [3850, 4600],
  
  // Italy (İtalya)
  "Milan": [2400, 2800],
  "Milano": [2400, 2800],
  "Verona": [2250, 2700],
  
  // Switzerland (İsviçre)
  "Zurich": [2500, 2950],
  "Zürich": [2500, 2950],
  "Zürih": [2500, 2950],
  "Basel": [2550, 3000],
  
  // Romania (Romanya)
  "Bucharest": [1150, 1500],
  "Bükreş": [1150, 1500],
};

export interface PriceResult {
  found: boolean;
  minPrice?: number;
  maxPrice?: number;
  city?: string;
}

export function getShippingPrice(destination: string): PriceResult {
  // Extract city name from various formats like "İstanbul → Berlin" or just "Berlin"
  const parts = destination.split("→").map(p => p.trim());
  const cityName = parts[parts.length - 1]; // Get the last part (destination city)
  
  // Try exact match first
  if (SHIPPING_RATES[cityName]) {
    const [minPrice, maxPrice] = SHIPPING_RATES[cityName];
    return { found: true, minPrice, maxPrice, city: cityName };
  }
  
  // Try case-insensitive match
  const lowerCity = cityName.toLowerCase();
  for (const [key, value] of Object.entries(SHIPPING_RATES)) {
    if (key.toLowerCase() === lowerCity) {
      return { found: true, minPrice: value[0], maxPrice: value[1], city: key };
    }
  }
  
  // Try partial match (for cities with different spellings)
  for (const [key, value] of Object.entries(SHIPPING_RATES)) {
    if (lowerCity.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerCity)) {
      return { found: true, minPrice: value[0], maxPrice: value[1], city: key };
    }
  }
  
  return { found: false };
}
