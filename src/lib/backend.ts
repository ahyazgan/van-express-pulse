/**
 * Whether the Supabase backend is in service.
 *
 * Set VITE_BACKEND_ENABLED="true" in .env to turn accounts, order storage and
 * shipment tracking back on. Off (the default), the site runs entirely on
 * WhatsApp: the quote form hands its content to a WhatsApp message, the
 * tracking page points to WhatsApp, and nothing touches the database. This
 * exists because the Supabase project disappeared from DNS in September 2026
 * and the owner could not find it in the dashboard; every request to it failed
 * for every visitor.
 */
export const BACKEND_ENABLED = import.meta.env.VITE_BACKEND_ENABLED === "true";
