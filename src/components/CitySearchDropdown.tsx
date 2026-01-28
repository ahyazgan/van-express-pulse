import { useState, useRef, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SHIPPING_RATES } from "@/constants/shippingRates";
import { motion, AnimatePresence } from "framer-motion";

// Unique city list with Turkish names preferred
const SEARCHABLE_CITIES = [
  { id: "berlin", label: "Berlin", country: "Almanya", flag: "🇩🇪" },
  { id: "munich", label: "Münih", country: "Almanya", flag: "🇩🇪" },
  { id: "frankfurt", label: "Frankfurt", country: "Almanya", flag: "🇩🇪" },
  { id: "hamburg", label: "Hamburg", country: "Almanya", flag: "🇩🇪" },
  { id: "cologne", label: "Köln", country: "Almanya", flag: "🇩🇪" },
  { id: "stuttgart", label: "Stuttgart", country: "Almanya", flag: "🇩🇪" },
  { id: "paris", label: "Paris", country: "Fransa", flag: "🇫🇷" },
  { id: "marseille", label: "Marsilya", country: "Fransa", flag: "🇫🇷" },
  { id: "amsterdam", label: "Amsterdam", country: "Hollanda", flag: "🇳🇱" },
  { id: "london", label: "Londra", country: "İngiltere", flag: "🇬🇧" },
  { id: "milan", label: "Milano", country: "İtalya", flag: "🇮🇹" },
  { id: "rome", label: "Roma", country: "İtalya", flag: "🇮🇹" },
  { id: "vienna", label: "Viyana", country: "Avusturya", flag: "🇦🇹" },
  { id: "prague", label: "Prag", country: "Çekya", flag: "🇨🇿" },
  { id: "budapest", label: "Budapeşte", country: "Macaristan", flag: "🇭🇺" },
  { id: "madrid", label: "Madrid", country: "İspanya", flag: "🇪🇸" },
  { id: "barcelona", label: "Barcelona", country: "İspanya", flag: "🇪🇸" },
  { id: "bucharest", label: "Bükreş", country: "Romanya", flag: "🇷🇴" },
  { id: "sofia", label: "Sofya", country: "Bulgaristan", flag: "🇧🇬" },
  { id: "belgrade", label: "Belgrad", country: "Sırbistan", flag: "🇷🇸" },
  { id: "zagreb", label: "Zagreb", country: "Hırvatistan", flag: "🇭🇷" },
  { id: "ljubljana", label: "Ljubljana", country: "Slovenya", flag: "🇸🇮" },
  { id: "bratislava", label: "Bratislava", country: "Slovakya", flag: "🇸🇰" },
];

interface CitySearchDropdownProps {
  value: string;
  onChange: (value: string) => void;
  onCitySelect: (cityId: string, cityLabel: string) => void;
  onFocus?: () => void;
}

const CitySearchDropdown = ({ value, onChange, onCitySelect, onFocus }: CitySearchDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter cities based on search
  const filteredCities = SEARCHABLE_CITIES.filter(city => {
    const query = searchQuery.toLowerCase();
    return (
      city.label.toLowerCase().includes(query) ||
      city.country.toLowerCase().includes(query) ||
      city.id.toLowerCase().includes(query)
    );
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    onChange(newValue);
    setIsOpen(true);
  };

  const handleCityClick = (city: typeof SEARCHABLE_CITIES[0]) => {
    const rate = SHIPPING_RATES[city.label];
    const minPrice = rate ? rate[0] : null;
    
    onChange(`İstanbul → ${city.label}`);
    setSearchQuery("");
    setIsOpen(false);
    onCitySelect(city.id, city.label);
  };

  const handleFocus = () => {
    setIsOpen(true);
    onFocus?.();
  };

  return (
    <div ref={containerRef} className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
      <Input
        placeholder="Nereye gönderilecek?"
        className="h-14 pl-12 pr-4 text-base bg-secondary border-0 rounded-2xl placeholder:text-muted-foreground focus-visible:ring-primary"
        value={value.includes("→") ? value : searchQuery}
        onChange={handleInputChange}
        onFocus={handleFocus}
      />

      <AnimatePresence>
        {isOpen && filteredCities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl shadow-lg overflow-hidden z-50 max-h-72 overflow-y-auto"
          >
            <div className="p-2">
              <p className="px-3 py-2 text-xs font-medium text-muted-foreground">
                Popüler Destinasyonlar
              </p>
              {filteredCities.map((city) => {
                const rate = SHIPPING_RATES[city.label];
                const minPrice = rate ? rate[0] : null;
                
                return (
                  <button
                    key={city.id}
                    onClick={() => handleCityClick(city)}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-secondary transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">
                      {city.flag}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{city.label}</span>
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{city.country}</p>
                    </div>
                    {minPrice && (
                      <div className="text-right">
                        <p className="text-sm font-bold text-primary">€{minPrice.toLocaleString('tr-TR')}+</p>
                        <p className="text-xs text-muted-foreground">başlayan</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CitySearchDropdown;
