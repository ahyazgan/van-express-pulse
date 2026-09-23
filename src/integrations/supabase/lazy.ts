// Type-only reference: a top-level `import ... from "./client"` (even `import type`)
// left a side-effect import of the client chunk in the bundle.
type SupabaseClient = Awaited<typeof import("./client")>["supabase"];

/**
 * Loads the Supabase client on first use instead of at startup.
 *
 * The SDK is roughly half of what the entry bundle used to download, and the
 * backend is switched off (see lib/backend.ts): every visitor paid for code
 * that never ran. Modules on the startup path (AuthContext, ProtectedRoute,
 * OrderForm) go through this; lazily loaded pages may import the client
 * directly.
 */
let pending: Promise<SupabaseClient> | null = null;

export const loadSupabase = (): Promise<SupabaseClient> => {
  pending ??= import("./client").then((m) => m.supabase);
  return pending;
};
