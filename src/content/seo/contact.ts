import type { PageLang } from "./seoData";

/**
 * Single source for how a landing page lets a reader reach us.
 *
 * The number lives here and nowhere else in the SEO pages; HelpModal and the
 * app shell still carry their own copy, so change both when the number changes.
 *
 * Why the messages are pre-filled: a reader on the Berlin price row is at the
 * hottest moment of the visit. Opening WhatsApp with "İstanbul → Berlin,
 * 1.700–1.900 € aralığı için teklif istiyorum" already typed removes the blank
 * box, and tells us which page and which row produced the lead.
 */
export const PHONE_DISPLAY = "+90 539 330 86 17";
export const PHONE_E164 = "+905393308617";
export const TEL_HREF = `tel:${PHONE_E164}`;

const WA_BASE = "https://wa.me/905393308617";

export const waHref = (message: string): string =>
  `${WA_BASE}?text=${encodeURIComponent(message)}`;

export interface ContactStrings {
  /** Label next to the phone number, e.g. "Hemen arayın". */
  callLabel: string;
  /** Text on the WhatsApp button under the H1 and on the floating button. */
  waLabel: string;
  /** Short line telling the reader what happens after they write. */
  afterYouWrite: string;
  /** Link text on each price row. */
  rowLink: string;
  /** Pre-filled WhatsApp message for the page as a whole. {h1} is replaced. */
  pageMessage: string;
  /** Pre-filled message for one price row. {route} and {price} are replaced. */
  rowMessage: string;
}

export const CONTACT: Record<PageLang, ContactStrings> = {
  tr: {
    callLabel: "Hemen arayın",
    waLabel: "WhatsApp'tan yazın",
    afterYouWrite: "Adres ve eşya bilgisini yazın, aynı gün yazılı teklif alırsınız.",
    rowLink: "Bu rota için teklif iste",
    pageMessage: "Merhaba, {h1} için fiyat almak istiyorum.",
    rowMessage: "Merhaba, {route} rotası ({price}) için teklif istiyorum.",
  },
  de: {
    callLabel: "Jetzt anrufen",
    waLabel: "Per WhatsApp schreiben",
    afterYouWrite: "Adresse und Ladung nennen, Sie erhalten noch am selben Tag ein schriftliches Angebot.",
    rowLink: "Angebot für diese Strecke",
    pageMessage: "Hallo, ich möchte ein Angebot für: {h1}.",
    rowMessage: "Hallo, ich möchte ein Angebot für die Strecke {route} ({price}).",
  },
  nl: {
    callLabel: "Bel direct",
    waLabel: "Stuur een WhatsApp",
    afterYouWrite: "Stuur adres en lading, u ontvangt dezelfde dag een schriftelijke offerte.",
    rowLink: "Offerte voor deze route",
    pageMessage: "Hallo, ik wil graag een offerte voor: {h1}.",
    rowMessage: "Hallo, ik wil graag een offerte voor de route {route} ({price}).",
  },
  en: {
    callLabel: "Call now",
    waLabel: "Message us on WhatsApp",
    afterYouWrite: "Send the addresses and what you are shipping; you get a written quote the same day.",
    rowLink: "Quote for this route",
    pageMessage: "Hello, I would like a quote for: {h1}.",
    rowMessage: "Hello, I would like a quote for the route {route} ({price}).",
  },
  fr: {
    callLabel: "Appelez maintenant",
    waLabel: "Écrire sur WhatsApp",
    afterYouWrite: "Envoyez les adresses et la nature du chargement, vous recevez un devis écrit le jour même.",
    rowLink: "Devis pour ce trajet",
    pageMessage: "Bonjour, je souhaite un devis pour : {h1}.",
    rowMessage: "Bonjour, je souhaite un devis pour le trajet {route} ({price}).",
  },
};

const fill = (template: string, values: Record<string, string>): string =>
  Object.entries(values).reduce((s, [k, v]) => s.split(`{${k}}`).join(v), template);

export const pageWaHref = (lang: PageLang, h1: string): string =>
  waHref(fill(CONTACT[lang].pageMessage, { h1 }));

export const rowWaHref = (lang: PageLang, route: string, price: string): string =>
  waHref(fill(CONTACT[lang].rowMessage, { route, price }));
