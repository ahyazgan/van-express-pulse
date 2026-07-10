import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Public shipment tracking. Guests have no session, so RLS on shipping_requests
// hides guest orders (user_id IS NULL) from the anon client. This function looks
// the order up with the service_role key BUT only by full (unguessable) UUID and
// returns a minimal, non-PII projection (no name / email / phone).
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { id } = await req.json().catch(() => ({ id: null }));

    if (!id || typeof id !== "string" || !UUID_RE.test(id.trim())) {
      // Not a valid tracking id — treat as "not found" without probing the DB.
      return json({ order: null }, 200);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await supabase
      .from("shipping_requests")
      .select(
        "id, created_at, destination, product_category, status, estimated_min_price, estimated_max_price, shipping_type",
      )
      .eq("id", id.trim())
      .maybeSingle();

    if (error) {
      console.error("track-order db error:", error);
      return json({ error: "lookup_failed" }, 500);
    }

    return json({ order: data ?? null }, 200);
  } catch (err) {
    console.error("track-order error:", err);
    return json({ error: "internal_error" }, 500);
  }
});
