import { useState, useRef, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SHIPPING_RATES } from "@/constants/shippingRates";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Unique city list with Turkish names preferred
export const SEARCHABLE_CITIES = [
  { id: "berlin", label: "Berlin", country: { tr: "Almanya", en: "Germany" }, flag: "🇩🇪" },
  { id: "munich", label: { tr: "Münih", en: "Munich" }, country: { tr: "Almanya", en: "Germany" }, flag: "🇩🇪" },
  { id: "frankfurt", label: "Frankfurt", country: { tr: "Almanya", en: "Germany" }, flag: "🇩🇪" },
  { id: "hamburg", label: "Hamburg", country: { tr: "Almanya", en: "Germany" }, flag: "🇩🇪" },
  { id: "cologne", label: { tr: "Köln", en: "Cologne" }, country: { tr: "Almanya", en: "Germany" }, flag: "🇩🇪" },
  { id: "stuttgart", label: "Stuttgart", country: { tr: "Almanya", en: "Germany" }, flag: "🇩🇪" },
  { id: "paris", label: "Paris", country: { tr: "Fransa", en: "France" }, flag: "🇫🇷" },
  { id: "marseille", label: { tr: "Marsilya", en: "Marseille" }, country: { tr: "Fransa", en: "France" }, flag: "🇫🇷" },
  { id: "amsterdam", label: "Amsterdam", country: { tr: "Hollanda", en: "Netherlands" }, flag: "🇳🇱" },
  { id: "london", label: { tr: "Londra", en: "London" }, country: { tr: "İngiltere", en: "UK" }, flag: "🇬🇧" },
  { id: "milan", label: { tr: "Milano", en: "Milan" }, country: { tr: "İtalya", en: "Italy" }, flag: "🇮🇹" },
  { id: "rome", label: { tr: "Roma", en: "Rome" }, country: { tr: "İtalya", en: "Italy" }, flag: "🇮🇹" },
  { id: "vienna", label: { tr: "Viyana", en: "Vienna" }, country: { tr: "Avusturya", en: "Austria" }, flag: "🇦🇹" },
  { id: "prague", label: { tr: "Prag", en: "Prague" }, country: { tr: "Çekya", en: "Czechia" }, flag: "🇨🇿" },
  { id: "budapest", label: { tr: "Budapeşte", en: "Budapest" }, country: { tr: "Macaristan", en: "Hungary" }, flag: "🇭🇺" },
  { id: "madrid", label: "Madrid", country: { tr: "İspanya", en: "Spain" }, flag: "🇪🇸" },
  { id: "barcelona", label: "Barcelona", country: { tr: "İspanya", en: "Spain" }, flag: "🇪🇸" },
  { id: "bucharest", label: { tr: "Bükreş", en: "Bucharest" }, country: { tr: "Romanya", en: "Romania" }, flag: "🇷🇴" },
  { id: "sofia", label: { tr: "Sofya", en: "Sofia" }, country: { tr: "Bulgaristan", en: "Bulgaria" }, flag: "🇧🇬" },
  { id: "belgrade", label: { tr: "Belgrad", en: "Belgrade" }, country: { tr: "Sırbistan", en: "Serbia" }, flag: "🇷🇸" },
  { id: "zagreb", label: "Zagreb", country: { tr: "Hırvatistan", en: "Croatia" }, flag: "🇭🇷" },
  { id: "ljubljana", label: "Ljubljana", country: { tr: "Slovenya", en: "Slovenia" }, flag: "🇸🇮" },
  { id: "bratislava", label: "Bratislava", country: { tr: "Slovakya", en: "Slovakia" }, flag: "🇸🇰" },
  // Every city in the tariff must be selectable; a Lyon customer could not
  // pick Lyon before this.
  { id: "lyon", label: "Lyon", country: { tr: "Fransa", en: "France" }, flag: "🇫🇷" },
  { id: "strasbourg", label: { tr: "Strazburg", en: "Strasbourg" }, country: { tr: "Fransa", en: "France" }, flag: "🇫🇷" },
  { id: "eindhoven", label: "Eindhoven", country: { tr: "Hollanda", en: "Netherlands" }, flag: "🇳🇱" },
  { id: "rotterdam", label: "Rotterdam", country: { tr: "Hollanda", en: "Netherlands" }, flag: "🇳🇱" },
  { id: "brussels", label: { tr: "Brüksel", en: "Brussels" }, country: { tr: "Belçika", en: "Belgium" }, flag: "🇧🇪" },
  { id: "antwerp", label: { tr: "Anvers", en: "Antwerp" }, country: { tr: "Belçika", en: "Belgium" }, flag: "🇧🇪" },
  { id: "graz", label: "Graz", country: { tr: "Avusturya", en: "Austria" }, flag: "🇦🇹" },
  { id: "salzburg", label: "Salzburg", country: { tr: "Avusturya", en: "Austria" }, flag: "🇦🇹" },
  { id: "warsaw", label: { tr: "Varşova", en: "Warsaw" }, country: { tr: "Polonya", en: "Poland" }, flag: "🇵🇱" },
  { id: "krakow", label: { tr: "Kraków", en: "Krakow" }, country: { tr: "Polonya", en: "Poland" }, flag: "🇵🇱" },
  { id: "poznan", label: { tr: "Poznań", en: "Poznan" }, country: { tr: "Polonya", en: "Poland" }, flag: "🇵🇱" },
  { id: "brno", label: "Brno", country: { tr: "Çekya", en: "Czechia" }, flag: "🇨🇿" },
  { id: "manchester", label: "Manchester", country: { tr: "İngiltere", en: "UK" }, flag: "🇬🇧" },
  { id: "verona", label: "Verona", country: { tr: "İtalya", en: "Italy" }, flag: "🇮🇹" },
  { id: "zurich", label: { tr: "Zürih", en: "Zurich" }, country: { tr: "İsviçre", en: "Switzerland" }, flag: "🇨🇭" },
  { id: "basel", label: "Basel", country: { tr: "İsviçre", en: "Switzerland" }, flag: "🇨🇭" },
  { id: "copenhagen", label: { tr: "Kopenhag", en: "Copenhagen" }, country: { tr: "Danimarka", en: "Denmark" }, flag: "🇩🇰" },
  { id: "aarhus", label: "Aarhus", country: { tr: "Danimarka", en: "Denmark" }, flag: "🇩🇰" },
  { id: "malmo", label: "Malmö", country: { tr: "İsveç", en: "Sweden" }, flag: "🇸🇪" },
  { id: "gothenburg", label: { tr: "Göteborg", en: "Gothenburg" }, country: { tr: "İsveç", en: "Sweden" }, flag: "🇸🇪" },
  { id: "stockholm", label: "Stockholm", country: { tr: "İsveç", en: "Sweden" }, flag: "🇸🇪" },
];

interface CitySearchDropdownProps {
  value: string;
  onChange: (value: string) => void;
  onCitySelect: (cityId: string, cityLabel: string) => void;
  onFocus?: () => void;
}

const CitySearchDropdown = ({ value, onChange, onCitySelect, onFocus }: CitySearchDropdownProps) => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const getLabel = (label: string | { tr: string; en: string }) => {
    return typeof label === "string" ? label : label[language];
  };

  const getCountry = (country: { tr: string; en: string }) => {
    return country[language];
  };

  // Filter cities based on search
  const filteredCities = SEARCHABLE_CITIES.filter(city => {
    const query = searchQuery.toLowerCase();
    const label = getLabel(city.label);
    const country = getCountry(city.country);
    return (
      label.toLowerCase().includes(query) ||
      country.toLowerCase().includes(query) ||
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
    const label = getLabel(city.label);
    const prefix = language === "tr" ? "İstanbul" : "Istanbul";
    
    onChange(`${prefix} → ${label}`);
    setSearchQuery("");
    setIsOpen(false);
    onCitySelect(city.id, label);
  };

  const handleFocus = () => {
    setIsOpen(true);
    onFocus?.();
  };

  return (
    <div ref={containerRef} className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
      <Input
        placeholder={t.home.whereToShip}
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
                {t.home.popularRoutes}
              </p>
              {filteredCities.map((city) => {
                const label = getLabel(city.label);
                // Use Turkish label for price lookup since rates are indexed by Turkish names
                const trLabel = typeof city.label === "string" ? city.label : city.label.tr;
                const rate = SHIPPING_RATES[trLabel];
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
                        <span className="font-semibold text-foreground">{label}</span>
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{getCountry(city.country)}</p>
                    </div>
                    {minPrice && (
                      <div className="text-right">
                        <p className="text-sm font-bold text-primary">€{minPrice.toLocaleString(language === "tr" ? "tr-TR" : "en-US")}+</p>
                        <p className="text-xs text-muted-foreground">
                          {language === "tr" ? "başlayan" : "from"}
                        </p>
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
