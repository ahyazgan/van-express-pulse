import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "@/lib/translations";

type Translations = typeof translations.tr | typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("tr")) {
    return "tr";
  }
  return "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "tr" || saved === "en")) {
      return saved;
    }
    // Fallback to browser detection
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
