/**
 * Measurement, kept deliberately small.
 *
 * index.html loads gtag.js for the Google Ads tag and sets Consent Mode v2 to
 * "denied" until the banner grants it. This module adds GA4 on top when
 * VITE_GA4_ID is set (a property the business owner creates; nothing is sent
 * without it) and records the handful of actions that actually mean something
 * for a freight quote page: someone opened WhatsApp, tapped the phone number,
 * started or submitted a quote, used the calculator.
 *
 * WhatsApp and phone taps are caught by one document-level listener, so every
 * button on every page counts without wiring each one — including the links in
 * the prerendered landing pages.
 */
type Gtag = (...args: unknown[]) => void;

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;

const gtag = (): Gtag | null => {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  return typeof g === "function" ? g : null;
};

export const analyticsEnabled = (): boolean => Boolean(GA4_ID);

export const trackEvent = (name: string, params: Record<string, string | number | undefined> = {}) => {
  if (!GA4_ID) return;
  gtag()?.("event", name, params);
};

export const trackPageView = (path: string) => {
  if (!GA4_ID) return;
  gtag()?.("event", "page_view", { page_path: path, page_location: window.location.href });
};

let initialised = false;

/** Configures GA4 and installs the click listener. Safe to call more than once. */
export const initAnalytics = () => {
  if (initialised || !GA4_ID) return;
  initialised = true;

  // send_page_view false: the router reports views, so a SPA navigation counts
  // once instead of never (or twice after a hydration).
  gtag()?.("config", GA4_ID, { send_page_view: false });

  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.includes("wa.me/")) {
        trackEvent("whatsapp_click", { page_path: location.pathname, label: a.getAttribute("aria-label") ?? a.textContent?.trim().slice(0, 60) });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: location.pathname });
      }
    },
    { capture: true }
  );
};
