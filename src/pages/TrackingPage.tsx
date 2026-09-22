import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { BACKEND_ENABLED } from "@/lib/backend";
import { waHref } from "@/content/seo/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Package, 
  FileCheck, 
  Truck, 
  CheckCircle2,
  MapPin,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import AppNavigation from "@/components/AppNavigation";
import TopBar from "@/components/TopBar";
import { useLanguage } from "@/contexts/LanguageContext";
import usePageMeta from "@/hooks/usePageMeta";
import { formatMoney } from "@/lib/money";

// Free, no-token vector basemap (CARTO Positron via MapLibre GL). Overridable via env.
const MAP_STYLE =
  import.meta.env.VITE_MAP_STYLE ||
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

// City coordinates for map display
const CITY_COORDS: Record<string, [number, number]> = {
  "Berlin": [13.4050, 52.5200],
  "Paris": [2.3522, 48.8566],
  "London": [-0.1276, 51.5074],
  "Londra": [-0.1276, 51.5074],
  "Madrid": [-3.7038, 40.4168],
  "Amsterdam": [4.9041, 52.3676],
  "Frankfurt": [8.6821, 50.1109],
  "Munich": [11.5820, 48.1351],
  "Münih": [11.5820, 48.1351],
  "Prague": [14.4378, 50.0755],
  "Prag": [14.4378, 50.0755],
  "Milan": [9.1900, 45.4642],
  "Milano": [9.1900, 45.4642],
  "Vienna": [16.3738, 48.2082],
  "Viyana": [16.3738, 48.2082],
  "Budapest": [19.0402, 47.4979],
  "Barcelona": [2.1734, 41.3851],
  "Rome": [12.4964, 41.9028],
  "Roma": [12.4964, 41.9028],
  "Sofia": [23.3219, 42.6977],
  "Sofya": [23.3219, 42.6977],
  "Bucharest": [26.1025, 44.4268],
  "Bükreş": [26.1025, 44.4268],
  "Belgrade": [20.4489, 44.7866],
  "Belgrad": [20.4489, 44.7866],
  "Zagreb": [15.9819, 45.8150],
  "Ljubljana": [14.5058, 46.0569],
  "Bratislava": [17.1077, 48.1486],
  "Stuttgart": [9.1829, 48.7758],
  "Cologne": [6.9603, 50.9375],
  "Köln": [6.9603, 50.9375],
  "Hamburg": [9.9937, 53.5511],
  "Marseille": [5.3698, 43.2965],
};

type OrderStatus = "new" | "negotiating" | "in_transit" | "delivered";

interface ShippingRequest {
  id: string;
  created_at: string;
  destination: string;
  product_category: string;
  status: OrderStatus;
  estimated_min_price: number;
  estimated_max_price: number;
  shipping_type?: string;
}

const ISTANBUL_COORDS: [number, number] = [28.9784, 41.0082];

const TrackingPage = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<ShippingRequest | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  usePageMeta({
    title: t.meta.tracking.title,
    description: t.meta.tracking.description,
    // Utility page keyed by a tracking number: no unique indexable content, and the served HTML is a byte-for-byte copy of the homepage.
    noindex: true,
  });

  const TRACKING_STAGES: { key: OrderStatus; label: string; icon: typeof Package }[] = [
    { key: "new", label: t.tracking.stages.new, icon: Package },
    { key: "negotiating", label: t.tracking.stages.negotiating, icon: FileCheck },
    { key: "in_transit", label: t.tracking.stages.in_transit, icon: Truck },
    { key: "delivered", label: t.tracking.stages.delivered, icon: CheckCircle2 },
  ];

  // Get destination coordinates
  const getDestinationCoords = (destination: string): [number, number] => {
    // Try exact match
    if (CITY_COORDS[destination]) {
      return CITY_COORDS[destination];
    }
    // Try case-insensitive match
    const lowerDest = destination.toLowerCase();
    for (const [key, coords] of Object.entries(CITY_COORDS)) {
      if (key.toLowerCase() === lowerDest) {
        return coords;
      }
    }
    return [10.0, 50.0]; // Default to central Europe
  };

  const searchOrder = async (idOverride?: string) => {
    const query = (idOverride ?? orderId).trim();
    if (!query) {
      setError(t.tracking.enterOrderId);
      return;
    }

    setLoading(true);
    setError("");

    // Guest orders are hidden from the anon client by RLS, so tracking goes
    // through the track-order edge function (service_role, non-PII projection).
    const { data, error: fetchError } = await supabase.functions.invoke("track-order", {
      body: { id: query },
    });

    if (fetchError) {
      setError(t.tracking.errorOccurred);
      console.error(fetchError);
    } else if (!data?.order) {
      setError(t.tracking.orderNotFound);
    } else {
      setOrder(data.order as ShippingRequest);
    }

    setLoading(false);
  };

  // Auto-search when arriving with an id (e.g. from the Orders page card or ?id=).
  useEffect(() => {
    const stateId = (location.state as { id?: string } | null)?.id;
    const paramId = new URLSearchParams(location.search).get("id");
    const incoming = stateId || paramId;
    if (incoming) {
      setOrderId(incoming);
      searchOrder(incoming);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, location.search]);

  // Realtime subscription for status updates
  useEffect(() => {
    if (!order) return;

    const channel = supabase
      .channel(`order-${order.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "shipping_requests",
          filter: `id=eq.${order.id}`,
        },
        (payload) => {
          setOrder((prev) => (prev ? { ...prev, ...payload.new } : null));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [order?.id]);

  // Initialize map when order is loaded
  useEffect(() => {
    if (!order || !mapContainer.current || map.current) return;

    const destCoords = getDestinationCoords(order.destination);

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: [(ISTANBUL_COORDS[0] + destCoords[0]) / 2, (ISTANBUL_COORDS[1] + destCoords[1]) / 2],
      zoom: 4,
      interactive: false,
    });

    map.current.on("load", () => {
      if (!map.current) return;

      // Add route line
      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [ISTANBUL_COORDS, destCoords],
          },
        },
      });

      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#FFCC00",
          "line-width": 4,
          "line-dasharray": [2, 2],
        },
      });

      // Add Istanbul marker
      new maplibregl.Marker({ color: "#D40511" })
        .setLngLat(ISTANBUL_COORDS)
        .setPopup(new maplibregl.Popup().setHTML(`<strong>${t.tracking.origin}</strong><br/>${language === "tr" ? "Çıkış Noktası" : "Origin"}`))
        .addTo(map.current);

      // Add destination marker
      new maplibregl.Marker({ color: "#FFCC00" })
        .setLngLat(destCoords)
        .setPopup(new maplibregl.Popup().setHTML(`<strong>${order.destination}</strong><br/>${t.tracking.destination}`))
        .addTo(map.current);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [order, language, t.tracking.origin, t.tracking.destination]);

  const currentStageIndex = TRACKING_STAGES.findIndex((s) => s.key === order?.status);

  if (!BACKEND_ENABLED) {
    // Tracking lives in the database; while it is off, status comes from us.
    const tr = t.tracking.offline;
    return (
      <div className="min-h-screen bg-background pb-24">
        <TopBar />
        <main className="max-w-xl mx-auto px-4 pt-24 pb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">{tr.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{tr.body}</p>
              <a
                href={waHref(tr.message)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {tr.cta}
              </a>
            </CardContent>
          </Card>
        </main>
        <AppNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar />

      <main className="max-w-4xl mx-auto px-4 pt-20 pb-8">
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              {t.tracking.searchTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder={t.tracking.searchPlaceholder}
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchOrder()}
                className="flex-1"
              />
              <Button onClick={() => searchOrder()} disabled={loading} className="btn-primary-glow">
                {loading ? t.tracking.searching : t.tracking.search}
              </Button>
            </div>
            {error && (
              <p className="text-sm text-destructive mt-3">{error}</p>
            )}
          </CardContent>
        </Card>

        {/* Tracking Result */}
        <AnimatePresence mode="wait">
          {order && (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Map Section */}
              <Card className="overflow-hidden">
                <div
                  ref={mapContainer}
                  className="h-48 md:h-64 w-full"
                />
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-destructive" />
                      <span className="font-medium">{t.tracking.origin}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-medium">{order.destination}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Bar */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{t.tracking.shipmentStatus}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute top-6 left-0 right-0 h-1 bg-border rounded-full">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${((currentStageIndex + 1) / TRACKING_STAGES.length) * 100}%`,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>

                    {/* Stages */}
                    <div className="relative flex justify-between">
                      {TRACKING_STAGES.map((stage, index) => {
                        const isCompleted = index <= currentStageIndex;
                        const isCurrent = index === currentStageIndex;
                        const Icon = stage.icon;

                        return (
                          <div
                            key={stage.key}
                            className="flex flex-col items-center"
                          >
                            <motion.div
                              className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors ${
                                isCompleted
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              } ${isCurrent ? "ring-4 ring-primary/30" : ""}`}
                              animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              <Icon className="w-5 h-5" />
                            </motion.div>
                            <span
                              className={`mt-3 text-xs md:text-sm font-medium text-center ${
                                isCompleted ? "text-foreground" : "text-muted-foreground"
                              }`}
                            >
                              {stage.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Details */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{t.tracking.orderInfo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm gap-4">
                    <span className="text-muted-foreground shrink-0">{t.tracking.orderNo}</span>
                    <span className="font-mono text-xs break-all text-right">{order.id}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t.tracking.estimatedPrice}</span>
                    <span className="font-medium text-primary">
                      {formatMoney(order.estimated_min_price, order.shipping_type === "domestic" ? "TRY" : "EUR")}
                      {" - "}
                      {formatMoney(order.estimated_max_price, order.shipping_type === "domestic" ? "TRY" : "EUR")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AppNavigation />
    </div>
  );
};

export default TrackingPage;
