// City-based shipping rates for Minivan Express (EUR)
// Format: [minPrice, maxPrice]

export const SHIPPING_RATES: Record<string, [number, number]> = {
  // Germany
  "Munich": [2050, 2350],
  "Münih": [2050, 2350],
  "Stuttgart": [2100, 2500],
  "Frankfurt": [2200, 2600],
  "Cologne": [2250, 2650],
  "Köln": [2250, 2650],
  "Berlin": [2350, 2700],
  "Hamburg": [2500, 2800],
  
  // Austria
  "Vienna": [1950, 2250],
  "Viyana": [1950, 2250],
  
  // Netherlands
  "Amsterdam": [2450, 2950],
  
  // France
  "Paris": [2650, 3250],
  "Marseille": [2500, 3000],
  
  // UK
  "London": [3500, 4300],
  "Londra": [3500, 4300],
  
  // Italy
  "Milan": [2400, 2800],
  "Milano": [2400, 2800],
  "Rome": [2600, 3100],
  "Roma": [2600, 3100],
  
  // Romania
  "Bucharest": [1150, 1500],
  "Bükreş": [1150, 1500],
  
  // Czech Republic
  "Prague": [2100, 2450],
  "Prag": [2100, 2450],
  
  // Hungary
  "Budapest": [1650, 2000],
  
  // Serbia
  "Belgrade": [1200, 1550],
  "Belgrad": [1200, 1550],
  
  // Bulgaria
  "Sofia": [950, 1250],
  "Sofya": [950, 1250],
  
  // Slovenia
  "Ljubljana": [2050, 2400],
  
  // Croatia
  "Zagreb": [1850, 2200],
  
  // Slovakia
  "Bratislava": [1900, 2250],
  
  // Spain
  "Madrid": [3200, 3900],
  "Barcelona": [3000, 3650],
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
