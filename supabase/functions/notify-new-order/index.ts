import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Escape untrusted values before embedding them in the email HTML (prevents
// HTML/link injection into the notification inbox).
const esc = (value: unknown): string =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

interface OrderPayload {
  type: "INSERT";
  table: string;
  record: {
    id: string;
    destination: string;
    customer_name: string;
    email: string;
    phone: string;
    product_category: string;
    packaging_type: string;
    quantity: number;
    total_weight: number;
    total_volume: number;
    estimated_min_price: number;
    estimated_max_price: number;
    user_id: string | null;
    created_at: string;
  };
  schema: string;
  currency?: string;
  shipping_type?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload: OrderPayload = await req.json();
    console.log("Received order notification payload:", JSON.stringify(payload));

    const { record } = payload;

    // Validate required fields before templating untrusted input.
    if (!record || typeof record !== "object" || !record.destination || !record.email) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid payload" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Determine customer type
    const customerType = record.user_id ? "Üye Müşteri" : "Misafir Müşteri";

    // Parse route from destination (format: "İstanbul → Berlin")
    const routeParts = String(record.destination).split("→").map((p) => p.trim());
    const origin = esc(routeParts[0] || "İstanbul");
    const dest = esc(routeParts[1] || record.destination);

    // Display-safe (escaped) copies of user-supplied fields.
    const safeName = esc(record.customer_name);
    const safeEmail = esc(record.email);
    const safePhone = esc(record.phone);
    const safeCategory = esc(record.product_category);
    const safePackaging = esc(record.packaging_type);
    const safeQuantity = esc(record.quantity);
    const safeWeight = esc(record.total_weight);
    const safeVolume = esc(record.total_volume);
    const safeId = esc(record.id);

    // Format price with the right currency (₺ for domestic, € for Europe).
    const currency = payload.currency === "TRY" ? "TRY" : "EUR";
    const formatPrice = (price: number) => {
      const n = new Intl.NumberFormat(currency === "TRY" ? "tr-TR" : "de-DE").format(Number(price) || 0);
      return currency === "TRY" ? `${n} ₺` : `€${n}`;
    };

    // Create email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yeni Sipariş Bildirimi</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #facc15; font-size: 24px; font-weight: bold;">🚚 RouteEU</h1>
              <p style="margin: 10px 0 0; color: #94a3b8; font-size: 14px;">Yeni Sipariş Bildirimi</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px; color: #1e3a5f; font-size: 20px;">🔔 Yeni Sipariş Alındı!</h2>
              
              <!-- Route Info -->
              <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #facc15;">
                <p style="margin: 0 0 10px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Taşıma Rotası</p>
                <p style="margin: 0; color: #1e3a5f; font-size: 18px; font-weight: bold;">
                  ${origin} → ${dest}
                </p>
              </div>
              
              <!-- Price Info -->
              <div style="background-color: #fefce8; border-radius: 8px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #facc15;">
                <p style="margin: 0 0 10px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Tahmini Fiyat</p>
                <p style="margin: 0; color: #1e3a5f; font-size: 22px; font-weight: bold;">
                  ${formatPrice(record.estimated_min_price)} - ${formatPrice(record.estimated_max_price)}
                </p>
              </div>
              
              <!-- Customer Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">Müşteri Tipi:</span>
                    <span style="color: #1e3a5f; font-size: 14px; font-weight: 600; float: right;">
                      ${customerType === "Üye Müşteri" ? "✅ " : "👤 "}${customerType}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">Müşteri Adı:</span>
                    <span style="color: #1e3a5f; font-size: 14px; font-weight: 600; float: right;">${safeName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">E-posta:</span>
                    <span style="color: #1e3a5f; font-size: 14px; float: right;">${safeEmail}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">Telefon:</span>
                    <span style="color: #1e3a5f; font-size: 14px; float: right;">${safePhone}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">Ürün Kategorisi:</span>
                    <span style="color: #1e3a5f; font-size: 14px; float: right;">${safeCategory}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">Paketleme:</span>
                    <span style="color: #1e3a5f; font-size: 14px; float: right;">${safePackaging}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">Adet:</span>
                    <span style="color: #1e3a5f; font-size: 14px; float: right;">${safeQuantity}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <span style="color: #64748b; font-size: 14px;">Toplam Ağırlık:</span>
                    <span style="color: #1e3a5f; font-size: 14px; float: right;">${safeWeight} kg</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <span style="color: #64748b; font-size: 14px;">Toplam Hacim:</span>
                    <span style="color: #1e3a5f; font-size: 14px; float: right;">${safeVolume} m³</span>
                  </td>
                </tr>
              </table>
              
              <!-- Order ID -->
              <p style="margin: 0; color: #94a3b8; font-size: 12px; text-align: center;">
                Sipariş ID: ${safeId}
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                Bu e-posta RouteEU sipariş sistemi tarafından otomatik olarak gönderilmiştir.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email
    const emailResponse = await resend.emails.send({
      from: "RouteEU <onboarding@resend.dev>",
      to: ["ahyazgab@gmail.com"],
      subject: "🔔 Yeni Sipariş Geldi! - RouteEU",
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in notify-new-order function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
