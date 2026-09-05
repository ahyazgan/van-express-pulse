import type { PageLang } from "./seoData";

/**
 * Page furniture for the SEO landing template. Content pages supply their own
 * prose; these are the surrounding labels that must follow the page language,
 * otherwise a German landing page renders Turkish buttons and breadcrumbs.
 */
export interface ChromeStrings {
  home: string;
  headerCta: string;
  trust: [string, string, string];
  routeCol: string;
  timeCol: string;
  priceCol: string;
  faqHeading: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
  relatedHeading: string;
  footerTagline: string;
  footerQuote: string;
  footerTracking: string;
}

export const CHROME: Record<PageLang, ChromeStrings> = {
  tr: {
    home: "Ana Sayfa",
    headerCta: "Hemen Fiyat Al",
    trust: ["Aşamalı Sevkiyat Takibi", "Kapıdan Kapıya Ekspres", "CMR Sorumluluğu + Ek Sigorta"],
    routeCol: "Güzergah",
    timeCol: "Tahmini Süre",
    priceCol: "Fiyat Aralığı",
    faqHeading: "Sık Sorulan Sorular",
    ctaHeading: "Yükünüz İçin Hemen Fiyat Alın",
    ctaBody:
      "Kalkış ve varış noktanızı seçin, saniyeler içinde tahmini fiyatınızı görün. Talebiniz sonrası ekibimiz aynı gün sizinle iletişime geçer.",
    ctaButton: "Ücretsiz Teklif Al",
    relatedHeading: "İlgili Hizmetler",
    footerTagline:
      "Türkiye ↔ Avrupa kapıdan kapıya ekspres panelvan taşımacılık. CMR taşıma sorumluluğu, talep üzerine ek yük sigortası, takip numarasıyla aşamalı sevkiyat takibi.",
    footerQuote: "Fiyat Al",
    footerTracking: "Gönderi Takibi",
  },
  de: {
    home: "Startseite",
    headerCta: "Preis berechnen",
    trust: ["Sendungsstatus in vier Stufen", "Direkt von Tür zu Tür", "CMR-Haftung + Zusatzversicherung"],
    routeCol: "Strecke",
    timeCol: "Laufzeit",
    priceCol: "Preisspanne",
    faqHeading: "Häufige Fragen",
    ctaHeading: "Jetzt Preis für Ihre Sendung berechnen",
    ctaBody:
      "Abhol- und Zieladresse eingeben und die Preisspanne in Sekunden sehen. Nach Ihrer Anfrage meldet sich unser Team noch am selben Tag.",
    ctaButton: "Kostenloses Angebot",
    relatedHeading: "Passende Leistungen",
    footerTagline:
      "Express-Transporte von Tür zu Tür zwischen der Türkei und Europa. CMR-Haftung, Zusatzversicherung auf Wunsch, Sendungsstatus per Sendungsnummer.",
    footerQuote: "Preis berechnen",
    footerTracking: "Sendungsverfolgung",
  },
  nl: {
    home: "Startpagina",
    headerCta: "Prijs berekenen",
    trust: ["Zendingstatus in vier stappen", "Van deur tot deur", "CMR-aansprakelijkheid + bijverzekering"],
    routeCol: "Traject",
    timeCol: "Transittijd",
    priceCol: "Prijsindicatie",
    faqHeading: "Veelgestelde vragen",
    ctaHeading: "Bereken direct de prijs van uw zending",
    ctaBody:
      "Vul het ophaal- en afleveradres in en zie binnen enkele seconden de prijsindicatie. Na uw aanvraag nemen wij dezelfde dag contact op.",
    ctaButton: "Gratis offerte",
    relatedHeading: "Gerelateerde diensten",
    footerTagline:
      "Expresstransport van deur tot deur tussen Turkije en Europa. CMR-aansprakelijkheid, bijverzekering op aanvraag, zendingstatus via uw zendingnummer.",
    footerQuote: "Prijs berekenen",
    footerTracking: "Zending volgen",
  },
  en: {
    home: "Home",
    headerCta: "Get a price",
    trust: ["Four-stage shipment status", "Door-to-door express", "CMR liability + added cover"],
    routeCol: "Route",
    timeCol: "Transit time",
    priceCol: "Price range",
    faqHeading: "Frequently asked questions",
    ctaHeading: "Get a price for your shipment",
    ctaBody:
      "Enter your pickup and delivery addresses to see an estimated price in seconds. Our team gets back to you the same day.",
    ctaButton: "Get a free quote",
    relatedHeading: "Related services",
    footerTagline:
      "Door-to-door express van transport between Türkiye and Europe. CMR carrier liability, added cargo cover on request, shipment status by tracking number.",
    footerQuote: "Get a price",
    footerTracking: "Track a shipment",
  },
  fr: {
    home: "Accueil",
    headerCta: "Obtenir un prix",
    trust: ["Statut en quatre étapes", "Porte-à-porte express", "Responsabilité CMR + assurance"],
    routeCol: "Trajet",
    timeCol: "Délai",
    priceCol: "Fourchette de prix",
    faqHeading: "Questions fréquentes",
    ctaHeading: "Obtenez le prix de votre envoi",
    ctaBody:
      "Indiquez vos adresses d'enlèvement et de livraison pour voir une estimation en quelques secondes. Notre équipe vous répond le jour même.",
    ctaButton: "Devis gratuit",
    relatedHeading: "Services associés",
    footerTagline:
      "Transport express porte-à-porte entre la Türkiye et l'Europe. Responsabilité CMR, assurance complémentaire sur demande, statut par numéro de suivi.",
    footerQuote: "Obtenir un prix",
    footerTracking: "Suivi d'envoi",
  },
};

/** BCP 47 tags for the html lang attribute and hreflang annotations. */
export const HREFLANG: Record<PageLang, string> = {
  tr: "tr",
  de: "de",
  nl: "nl",
  en: "en",
  fr: "fr",
};
