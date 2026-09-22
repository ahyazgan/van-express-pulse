import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { SHIPPING_RATES } from "@/constants/shippingRates";
import { DOMESTIC_CITIES, type DomesticCity, type ShippingMode } from "@/constants/domesticRates";
import { destinationEvents } from "@/lib/destinationEvents";
import {
  buildSelectedPath,
  pathDistanceKm,
  resolveDestinationId,
  resolveOriginCity,
  selectedEtaHours,
  selectedVanDurationMs,
} from "@/lib/routeSelection";

// Free, no-token vector basemap (CARTO Positron via MapLibre GL). Light & minimal,
// so the yellow routes/markers pop — matches the app's light theme. Overridable via env.
const MAP_STYLE =
  import.meta.env.VITE_MAP_STYLE ||
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

// City coordinates [lng, lat]
const cities = [
  // Primary Hubs
  { id: "istanbul", coords: [28.9784, 41.0082] as [number, number], label: "İstanbul", country: "TR", isPrimary: true },
  { id: "paris", coords: [2.3522, 48.8566] as [number, number], label: "Paris", country: "FR", isPrimary: true },
  { id: "berlin", coords: [13.4050, 52.5200] as [number, number], label: "Berlin", country: "DE", isPrimary: true },
  { id: "amsterdam", coords: [4.9041, 52.3676] as [number, number], label: "Amsterdam", country: "NL", isPrimary: true },
  { id: "madrid", coords: [-3.7038, 40.4168] as [number, number], label: "Madrid", country: "ES", isPrimary: true },
  // Secondary Cities
  { id: "sofia", coords: [23.3219, 42.6977] as [number, number], label: "Sofya", country: "BG", isPrimary: false },
  { id: "belgrade", coords: [20.4489, 44.7866] as [number, number], label: "Belgrad", country: "RS", isPrimary: false },
  { id: "budapest", coords: [19.0402, 47.4979] as [number, number], label: "Budapeşte", country: "HU", isPrimary: false },
  { id: "vienna", coords: [16.3738, 48.2082] as [number, number], label: "Viyana", country: "AT", isPrimary: false },
  { id: "munich", coords: [11.5820, 48.1351] as [number, number], label: "Münih", country: "DE", isPrimary: false },
  { id: "frankfurt", coords: [8.6821, 50.1109] as [number, number], label: "Frankfurt", country: "DE", isPrimary: true },
  { id: "prague", coords: [14.4378, 50.0755] as [number, number], label: "Prag", country: "CZ", isPrimary: true },
  { id: "milan", coords: [9.1900, 45.4642] as [number, number], label: "Milano", country: "IT", isPrimary: true },
  { id: "zagreb", coords: [15.9819, 45.8150] as [number, number], label: "Zagreb", country: "HR", isPrimary: false },
  { id: "ljubljana", coords: [14.5058, 46.0569] as [number, number], label: "Ljubljana", country: "SI", isPrimary: false },
  { id: "bratislava", coords: [17.1077, 48.1486] as [number, number], label: "Bratislava", country: "SK", isPrimary: false },
  { id: "marseille", coords: [5.3698, 43.2965] as [number, number], label: "Marsilya", country: "FR", isPrimary: false },
  // Additional pricing cities
  { id: "london", coords: [-0.1276, 51.5074] as [number, number], label: "Londra", country: "UK", isPrimary: true },
  { id: "stuttgart", coords: [9.1829, 48.7758] as [number, number], label: "Stuttgart", country: "DE", isPrimary: false },
  { id: "cologne", coords: [6.9603, 50.9375] as [number, number], label: "Köln", country: "DE", isPrimary: false },
  { id: "hamburg", coords: [9.9937, 53.5511] as [number, number], label: "Hamburg", country: "DE", isPrimary: false },
  { id: "bucharest", coords: [26.1025, 44.4268] as [number, number], label: "Bükreş", country: "RO", isPrimary: false },
  { id: "rome", coords: [12.4964, 41.9028] as [number, number], label: "Roma", country: "IT", isPrimary: false },
  { id: "barcelona", coords: [2.1734, 41.3851] as [number, number], label: "Barcelona", country: "ES", isPrimary: false },
];

// 7 Unique logistics routes following European E-highways
const vanRoutes = [
  {
    // Route 1: Istanbul -> Madrid (via E-80, E-90)
    id: 1,
    name: "Madrid Express",
    destinationId: "madrid",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [17.5, 45.2],
      [12.5, 45.5],
      [9.1900, 45.4642], // Milan
      [7.0, 44.5],
      [5.3698, 43.2965], // Marseille
      [3.0, 42.5],
      [0.0, 41.5],
      [-3.7038, 40.4168], // Madrid
    ] as [number, number][],
    duration: 28000,
  },
  {
    // Route 2: Istanbul -> Amsterdam (via E-75, E-45)
    id: 2,
    name: "Amsterdam Express",
    destinationId: "amsterdam",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [19.5, 46.0],
      [19.0402, 47.4979], // Budapest
      [17.0, 48.5],
      [14.0, 49.5],
      [10.5, 50.0],
      [8.6821, 50.1109], // Frankfurt
      [7.0, 51.0],
      [5.5, 51.8],
      [4.9041, 52.3676], // Amsterdam
    ] as [number, number][],
    duration: 26000,
  },
  {
    // Route 3: Istanbul -> Frankfurt (via E-75, E-45)
    id: 3,
    name: "Frankfurt Express",
    destinationId: "frankfurt",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [19.5, 46.0],
      [19.0402, 47.4979], // Budapest
      [17.5, 47.8],
      [16.3738, 48.2082], // Vienna
      [13.5, 48.8],
      [11.0, 49.5],
      [8.6821, 50.1109], // Frankfurt
    ] as [number, number][],
    duration: 22000,
  },
  {
    // Route 4: Istanbul -> Prague (via E-75, E-65)
    id: 4,
    name: "Prague Express",
    destinationId: "prague",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [19.5, 46.0],
      [19.0402, 47.4979], // Budapest
      [17.5, 48.0],
      [17.1077, 48.1486], // Bratislava
      [16.0, 48.8],
      [15.0, 49.5],
      [14.4378, 50.0755], // Prague
    ] as [number, number][],
    duration: 20000,
  },
  {
    // Route 5: Istanbul -> Milan (via E-70, E-61)
    id: 5,
    name: "Milan Express",
    destinationId: "milan",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [18.0, 45.0],
      [15.9819, 45.8150], // Zagreb
      [15.0, 46.0],
      [14.5058, 46.0569], // Ljubljana
      [12.5, 46.0],
      [10.5, 45.8],
      [9.1900, 45.4642], // Milan
    ] as [number, number][],
    duration: 18000,
  },
  {
    // Route 6: Istanbul -> Berlin (via E-75, E-55)
    id: 6,
    name: "Berlin Express",
    destinationId: "berlin",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [19.5, 46.0],
      [19.0402, 47.4979], // Budapest
      [17.5, 48.5],
      [15.5, 49.5],
      [14.5, 50.5],
      [13.8, 51.5],
      [13.4050, 52.5200], // Berlin
    ] as [number, number][],
    duration: 21000,
  },
  {
    // Route 7: Istanbul -> Paris (via E-75, E-50, E-25)
    id: 7,
    name: "Paris Express",
    destinationId: "paris",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [19.5, 46.0],
      [19.0402, 47.4979], // Budapest
      [17.5, 47.8],
      [14.0, 48.0],
      [11.5820, 48.1351], // Munich
      [9.0, 48.5],
      [6.0, 48.8],
      [4.0, 48.8],
      [2.3522, 48.8566], // Paris
    ] as [number, number][],
    duration: 24000,
  },
  {
    // Route 8: Istanbul -> London (Paris corridor + Calais channel crossing)
    id: 8,
    name: "London Express",
    destinationId: "london",
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
      [19.5, 46.0],
      [19.0402, 47.4979], // Budapest
      [17.5, 47.8],
      [14.0, 48.0],
      [11.5820, 48.1351], // Munich
      [9.0, 48.5],
      [6.0, 48.8],
      [4.0, 48.8],
      [2.3522, 48.8566], // Paris
      [2.0, 49.9],
      [1.85, 50.95], // Calais
      [0.5, 51.2],
      [-0.1276, 51.5074], // London
    ] as [number, number][],
    duration: 27000,
  },
];

type VanRoute = (typeof vanRoutes)[number];

// Shared van marker markup (decorative fleet + selected-route van)
const VAN_MARKER_HTML = `
  <div class="van-container">
    <div class="van-glow"></div>
    <div class="van-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
        <path d="M15 18H9"/>
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
        <circle cx="17" cy="18" r="2"/>
        <circle cx="7" cy="18" r="2"/>
      </svg>
    </div>
  </div>
`;

// Major hubs visible at all zoom levels
const MAJOR_HUBS = ["istanbul", "london", "paris", "berlin", "madrid"];

const MapBackground = ({ mode = "europe" }: { mode?: ShippingMode }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const priceMarkersRef = useRef<{ marker: maplibregl.Marker; cityId: string }[]>([]);
  const vanMarkersRef = useRef<maplibregl.Marker[]>([]);
  const animationFramesRef = useRef<number[]>([]);
  const vanTimeoutsRef = useRef<number[]>([]);

  // Selected-route (single route) mode state
  const selectedVanMarkerRef = useRef<maplibregl.Marker | null>(null);
  const selectedVanFrameRef = useRef<number | null>(null);
  const selectedOriginMarkerRef = useRef<maplibregl.Marker | null>(null);
  const selectionActiveRef = useRef(false);
  const pendingSelectionRef = useRef<{ originCity: DomesticCity; route: VanRoute } | null>(null);
  const mapReadyRef = useRef(false);

  // Secondary city labels (Bratislava, Budapest, Ljubljana, Köln...) sit on
  // top of each other at the showcase zoom. Below the threshold only the dots
  // stay; the names return as the user zooms in. Driven by a data attribute so
  // the CSS below does the work and no marker has to be touched.
  const updateCityLabelVisibility = (zoom: number) => {
    mapContainer.current?.setAttribute("data-labels", zoom < 4.8 ? "primary" : "all");
  };

  // Update price tag visibility based on zoom level
  const updatePriceTagVisibility = (zoom: number) => {
    // Single-route mode hides all price tags; zoom events must not re-show them.
    if (selectionActiveRef.current) return;
    priceMarkersRef.current.forEach(({ marker, cityId }) => {
      const element = marker.getElement();
      const isMajorHub = MAJOR_HUBS.includes(cityId);
      
      if (zoom < 4) {
        // At low zoom, only show major hubs
        element.style.display = isMajorHub ? "block" : "none";
      } else {
        // At higher zoom, show all
        element.style.display = "block";
      }
    });
  };

  // Fly to a city and pulse its price tag.
  // Callers may pass either the city id ("berlin") or the display label ("Berlin"/"Londra"),
  // so match on both, case-insensitively.
  const flyToCity = (cityIdOrLabel: string) => {
    const needle = cityIdOrLabel.trim().toLowerCase();
    const city = cities.find(
      c => c.id.toLowerCase() === needle || c.label.toLowerCase() === needle
    );
    if (!city || !map.current) return;

    // Fly to the city
    map.current.flyTo({
      center: city.coords,
      zoom: 5.5,
      duration: 1500,
      essential: true
    });

    // Find and pulse the price tag (price markers are keyed by city id).
    // Skip while single-route mode owns tag visibility.
    const priceMarker = priceMarkersRef.current.find(p => p.cityId === city.id);
    if (priceMarker && !selectionActiveRef.current) {
      const element = priceMarker.marker.getElement();
      element.style.display = "block"; // Ensure it's visible
      element.classList.add("pulse-attention");
      
      // Remove pulse class after animation
      setTimeout(() => {
        element.classList.remove("pulse-attention");
      }, 2000);
    }
  };

  // Drive a van marker along a path in an endless loop (linear per segment).
  // registerFrame hands back each rAF id so the caller can cancel the loop.
  const runVanLoop = (
    marker: maplibregl.Marker,
    path: [number, number][],
    duration: number,
    registerFrame: (id: number) => void,
  ) => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;

      // Calculate position along path
      const pathLength = path.length - 1;
      const segmentProgress = progress * pathLength;
      const segmentIndex = Math.floor(segmentProgress);
      const segmentFraction = segmentProgress - segmentIndex;

      if (segmentIndex < pathLength) {
        const start = path[segmentIndex];
        const end = path[segmentIndex + 1];
        const lng = start[0] + (end[0] - start[0]) * segmentFraction;
        const lat = start[1] + (end[1] - start[1]) * segmentFraction;
        marker.setLngLat([lng, lat]);
      }

      registerFrame(requestAnimationFrame(animate));
    };

    registerFrame(requestAnimationFrame(animate));
  };

  // Showcase fleet: staggered van loops on every decorative corridor.
  const startDecorativeVans = () => {
    vanRoutes.forEach((route, index) => {
      const marker = vanMarkersRef.current[index];
      if (!marker) return;
      marker.getElement().style.display = "block";
      marker.setLngLat(route.path[0]);
      // Stagger start times (track the timeout so we can cancel it on unmount)
      const timeoutId = window.setTimeout(() => {
        runVanLoop(marker, route.path, route.duration, (id) => {
          animationFramesRef.current[index] = id;
        });
      }, index * 2000);
      vanTimeoutsRef.current.push(timeoutId);
    });
  };

  const stopDecorativeVans = () => {
    vanTimeoutsRef.current.forEach((tid) => clearTimeout(tid));
    vanTimeoutsRef.current = [];
    animationFramesRef.current.forEach((frame) => cancelAnimationFrame(frame));
    animationFramesRef.current = [];
    vanMarkersRef.current.forEach((marker) => {
      marker.getElement().style.display = "none";
    });
  };

  const removeSelectionArtifacts = () => {
    if (selectedVanFrameRef.current !== null) {
      cancelAnimationFrame(selectedVanFrameRef.current);
      selectedVanFrameRef.current = null;
    }
    selectedVanMarkerRef.current?.remove();
    selectedVanMarkerRef.current = null;
    selectedOriginMarkerRef.current?.remove();
    selectedOriginMarkerRef.current = null;
  };

  // Single-route mode: hide the showcase, draw origin → İstanbul → destination,
  // run one van along it and frame the whole journey.
  const applySelection = (originCity: DomesticCity, route: VanRoute) => {
    const m = map.current;
    if (!m || !mapReadyRef.current) {
      // Map still loading — remembered and applied from the load handler.
      pendingSelectionRef.current = { originCity, route };
      return;
    }
    pendingSelectionRef.current = null;

    removeSelectionArtifacts();
    stopDecorativeVans();
    selectionActiveRef.current = true;
    if (m.getLayer("route-line")) m.setLayoutProperty("route-line", "visibility", "none");
    if (m.getLayer("route-glow")) m.setLayoutProperty("route-glow", "visibility", "none");
    priceMarkersRef.current.forEach(({ marker }) => {
      marker.getElement().style.display = "none";
    });

    const path = buildSelectedPath(originCity.coords, route.path);
    const source = m.getSource("selected-route") as maplibregl.GeoJSONSource | undefined;
    source?.setData({
      type: "Feature",
      properties: {},
      geometry: { type: "LineString", coordinates: path },
    });

    // Turkish origins other than İstanbul aren't in the Europe city set — pin them.
    if (!cities.some((c) => c.id === originCity.id)) {
      const el = document.createElement("div");
      el.className = "city-marker";
      el.innerHTML = `
        <div class="marker-container primary">
          <div class="pulse-ring"></div>
          <div class="marker-dot"></div>
          <div class="marker-label">${originCity.label}</div>
        </div>
      `;
      selectedOriginMarkerRef.current = new maplibregl.Marker({ element: el })
        .setLngLat(originCity.coords)
        .addTo(m);
    }

    const km = pathDistanceKm(path);
    const destLabel = cities.find((c) => c.id === route.destinationId)?.label ?? route.name;

    const vanEl = document.createElement("div");
    vanEl.className = "van-marker";
    vanEl.innerHTML = VAN_MARKER_HTML;

    const popup = new maplibregl.Popup({
      offset: 25,
      closeButton: true,
      closeOnClick: true,
      className: "van-popup",
    }).setHTML(`
      <div class="van-popup-content">
        <div class="van-popup-header">
          <span class="van-popup-title">${originCity.label} → ${destLabel}</span>
          <span class="van-popup-badge">ROTANIZ</span>
        </div>
        <div class="van-popup-info">
          <div class="van-popup-row">
            <span class="van-popup-label">Mesafe:</span>
            <span class="van-popup-value">~${Math.round(km).toLocaleString("tr-TR")} km</span>
          </div>
          <div class="van-popup-row">
            <span class="van-popup-label">Kapasite:</span>
            <span class="van-popup-value">1200kg / 12m³</span>
          </div>
          <div class="van-popup-row">
            <span class="van-popup-label">Tahmini Varış:</span>
            <span class="van-popup-value van-popup-eta">${selectedEtaHours(km)}h</span>
          </div>
        </div>
      </div>
    `);

    const vanMarker = new maplibregl.Marker({ element: vanEl })
      .setLngLat(path[0])
      .setPopup(popup)
      .addTo(m);
    selectedVanMarkerRef.current = vanMarker;
    runVanLoop(vanMarker, path, selectedVanDurationMs(km), (id) => {
      selectedVanFrameRef.current = id;
    });

    // Frame the whole journey; extra bottom padding keeps it above the sheet.
    const bounds = path.reduce(
      (b, coord) => b.extend(coord),
      new maplibregl.LngLatBounds(path[0], path[0]),
    );
    const h = m.getContainer().clientHeight;
    m.fitBounds(bounds, {
      padding: { top: 80, left: 60, right: 60, bottom: Math.max(0, Math.min(h * 0.4, h - 180)) },
      duration: 1400,
      essential: true,
    });
  };

  // Back to showcase: restore decorative corridors, vans and price tags.
  const clearSelection = () => {
    pendingSelectionRef.current = null;
    const m = map.current;
    if (!m || !mapReadyRef.current || !selectionActiveRef.current) return;
    selectionActiveRef.current = false;

    removeSelectionArtifacts();
    const source = m.getSource("selected-route") as maplibregl.GeoJSONSource | undefined;
    source?.setData({ type: "FeatureCollection", features: [] });
    if (m.getLayer("route-line")) m.setLayoutProperty("route-line", "visibility", "visible");
    if (m.getLayer("route-glow")) m.setLayoutProperty("route-glow", "visibility", "visible");
    startDecorativeVans();
    updatePriceTagVisibility(m.getZoom());
    m.easeTo({ center: [15.0, 45.0], zoom: 4.2, duration: 1200 });
  };

  // Subscribe to flyTo events from search
  useEffect(() => {
    const unsubscribe = destinationEvents.subscribeFlyTo((cityId) => {
      flyToCity(cityId);
    });
    return () => { unsubscribe(); };
  }, []);

  // Origin/destination changes from the search form (Europe mode only):
  // both ends resolved → single-route mode, anything else → showcase.
  useEffect(() => {
    if (mode === "domestic") return;
    const unsubscribe = destinationEvents.subscribeRouteSelection(({ origin, destination }) => {
      const originCity = resolveOriginCity(origin);
      const destinationId = resolveDestinationId(destination);
      const route = destinationId
        ? vanRoutes.find((r) => r.destinationId === destinationId)
        : undefined;
      if (originCity && route) {
        applySelection(originCity, route);
      } else {
        clearSelection();
      }
    });
    return () => { unsubscribe(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Mode-specific config: Türkiye içi (domestic) vs Avrupa (europe).
    const isDomestic = mode === "domestic";
    const activeCities = isDomestic ? DOMESTIC_CITIES : cities;

    // Initialize map
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: isDomestic ? [35.2, 39.0] : [15.0, 45.0],
      zoom: isDomestic ? 5.2 : 4.2,
      interactive: true, // Enable map interactions (drag, zoom)
      // Compact (ⓘ) attribution — required by OpenStreetMap/CARTO licensing.
      attributionControl: { compact: true },
    });

    map.current.on("load", () => {

      // Add route line (Europe corridors only)
      if (map.current && !isDomestic) {
        // Create a FeatureCollection with all route lines
        const routeFeatures = vanRoutes.map(route => ({
          type: "Feature" as const,
          properties: { routeId: route.id, routeName: route.name },
          geometry: {
            type: "LineString" as const,
            coordinates: route.path,
          },
        }));

        map.current.addSource("route", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: routeFeatures,
          },
        });

        map.current.addLayer({
          id: "route-line",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#FFCC00",
            "line-width": 4,
            "line-opacity": 0.8,
          },
        });

        // Add glow effect layer
        map.current.addLayer({
          id: "route-glow",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#FFCC00",
            "line-width": 12,
            "line-opacity": 0.3,
            "line-blur": 8,
          },
        }, "route-line");

        // Selected-route overlay (empty until the user picks origin + destination)
        map.current.addSource("selected-route", {
          type: "geojson",
          data: { type: "FeatureCollection", features: [] },
        });

        map.current.addLayer({
          id: "selected-route-glow",
          type: "line",
          source: "selected-route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#FFCC00",
            "line-width": 14,
            "line-opacity": 0.35,
            "line-blur": 8,
          },
        });

        map.current.addLayer({
          id: "selected-route-line",
          type: "line",
          source: "selected-route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#FFCC00",
            "line-width": 5,
            "line-opacity": 0.95,
          },
        });
      }

      // Add city markers (mode-specific city set)
      activeCities.forEach((city) => {
        const el = document.createElement("div");
        el.className = "city-marker";
        el.innerHTML = `
          <div class="marker-container ${city.isPrimary ? "primary" : "secondary"}">
            ${city.isPrimary ? '<div class="pulse-ring"></div>' : ''}
            <div class="marker-dot"></div>
            <div class="marker-label">${city.label}</div>
          </div>
        `;

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat(city.coords)
          .addTo(map.current!);
        
        markersRef.current.push(marker);
      });

      // Create price tag markers for cities with shipping rates (Europe only —
      // domestic price depends on origin+destination, shown in the quote flow).
      if (!isDomestic) cities.forEach((city) => {
        // Skip Istanbul (origin city)
        if (city.id === "istanbul") return;
        
        // Check if city has a shipping rate
        const cityLabel = city.label;
        const rate = SHIPPING_RATES[cityLabel];
        if (!rate) return;
        
        const [minPrice] = rate;
        const isMajorHub = MAJOR_HUBS.includes(city.id);
        
        const el = document.createElement("div");
        el.className = `price-tag-marker ${isMajorHub ? 'major-hub' : 'secondary-hub'}`;
        // Initially hide secondary hubs (will be shown on zoom)
        if (!isMajorHub) {
          el.style.display = "none";
        }
        el.innerHTML = `
          <div class="price-tag">
            <span class="price-tag-text">€${minPrice.toLocaleString('tr-TR')}+</span>
          </div>
        `;
        
        // Add click handler
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          destinationEvents.emit(cityLabel);
        });
        
        const priceMarker = new maplibregl.Marker({
          element: el,
          anchor: "bottom",
          offset: [0, -8],
        })
          .setLngLat(city.coords)
          .addTo(map.current!);
        
        priceMarkersRef.current.push({ marker: priceMarker, cityId: city.id });
      });

      // Add zoom event listener for price tag visibility
      updateCityLabelVisibility(map.current.getZoom());
      // The desktop side panel covers the left 420px; shift the map's usable
      // area so Spain/Portugal are not permanently behind it.
      if (window.matchMedia("(min-width: 768px)").matches) {
        map.current.setPadding({ left: 420, top: 0, right: 0, bottom: 0 });
      } else {
        // Hero card on top, sheet (44%) at the bottom: keep the bubbles between.
        map.current.setPadding({ left: 0, top: 230, right: 0, bottom: Math.round(window.innerHeight * 0.52) });
      }
      // Padding only applies to camera moves made after it is set; re-apply the
      // opening view so it is framed inside the padded area. Phones get a wider
      // view so the major-hub price bubbles fit in the strip between hero and sheet.
      const phone = !window.matchMedia("(min-width: 768px)").matches;
      map.current.jumpTo({
        center: isDomestic ? [35.2, 39.0] : [15.0, 46.5],
        zoom: isDomestic ? (phone ? 4.6 : 5.2) : phone ? 4.0 : 4.2,
      });
      map.current.on("zoom", () => {
        if (!map.current) return;
        const zoom = map.current.getZoom();
        updateCityLabelVisibility(zoom);
        updatePriceTagVisibility(zoom);
      });

      // Initial visibility update
      updatePriceTagVisibility(map.current.getZoom());

      // Decorative animated markers illustrating the service corridors we run.
      // These are looped illustrations of the routes, not positions of real
      // vehicles: no vehicle location data is collected anywhere in the product,
      // so the popup must describe the corridor and never imply a live position.
      if (!isDomestic) vanRoutes.forEach((route) => {
        const el = document.createElement("div");
        el.className = "van-marker";
        el.innerHTML = VAN_MARKER_HTML;

        // Create popup describing this corridor
        const popup = new maplibregl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: true,
          className: "van-popup",
        }).setHTML(`
          <div class="van-popup-content">
            <div class="van-popup-header">
              <span class="van-popup-title">${route.name}</span>
              <span class="van-popup-badge">GÜZERGÂH</span>
            </div>
            <div class="van-popup-info">
              <div class="van-popup-row">
                <span class="van-popup-label">Hizmet:</span>
                <span class="van-popup-value">Kapıdan Kapıya</span>
              </div>
              <div class="van-popup-row">
                <span class="van-popup-label">Kapasite:</span>
                <span class="van-popup-value">1200kg / 12m³</span>
              </div>
              <div class="van-popup-row">
                <span class="van-popup-label">Tahmini Süre:</span>
                <span class="van-popup-value van-popup-eta">${Math.round(route.duration / 1000)}h</span>
              </div>
            </div>
          </div>
        `);

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat(route.path[0])
          .setPopup(popup)
          .addTo(map.current!);

        vanMarkersRef.current.push(marker);
      });

      // Start the showcase van loops (also restarted when a selection clears)
      if (!isDomestic) startDecorativeVans();

      // Map is ready — apply any selection that arrived before load finished.
      mapReadyRef.current = true;
      if (pendingSelectionRef.current) {
        const { originCity, route } = pendingSelectionRef.current;
        applySelection(originCity, route);
      }
    });

    return () => {
      // Cleanup staggered-start timeouts (prevents orphan rAF loops after unmount)
      vanTimeoutsRef.current.forEach((tid) => clearTimeout(tid));
      vanTimeoutsRef.current = [];

      // Cleanup animation frames
      animationFramesRef.current.forEach((frame) => cancelAnimationFrame(frame));
      animationFramesRef.current = [];

      // Cleanup markers (reset arrays so a mode switch rebuilds cleanly)
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      priceMarkersRef.current.forEach(({ marker }) => marker.remove());
      priceMarkersRef.current = [];
      vanMarkersRef.current.forEach((marker) => marker.remove());
      vanMarkersRef.current = [];

      // Cleanup selected-route mode state
      removeSelectionArtifacts();
      selectionActiveRef.current = false;
      pendingSelectionRef.current = null;
      mapReadyRef.current = false;

      // Cleanup map
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
    // applySelection/startDecorativeVans only touch refs — rebuild strictly on mode
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <>
      <style>{`
        .city-marker {
          pointer-events: none;
        }
        
        .marker-container {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .marker-container.primary .marker-dot {
          width: 16px;
          height: 16px;
          background: hsl(45, 100%, 50%);
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 18px hsl(45, 100%, 50%, 0.8);
        }
        
        .marker-container.secondary .marker-dot {
          width: 12px;
          height: 12px;
          background: hsl(220, 15%, 40%);
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        
        .pulse-ring {
          position: absolute;
          width: 28px;
          height: 28px;
          left: -6px;
          top: -6px;
          border-radius: 50%;
          background: hsl(45, 100%, 50%);
          animation: pulse-ring 2.5s ease-out infinite;
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        .marker-label {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          white-space: nowrap;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .marker-container.primary .marker-label {
          background: hsl(45, 100%, 50%);
          color: hsl(220, 15%, 10%);
        }
        
        [data-labels="primary"] .marker-container.secondary .marker-label {
          display: none;
        }

        .marker-container.secondary .marker-label {
          background: rgba(255, 255, 255, 0.9);
          color: hsl(220, 15%, 15%);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        /* Price Tag Markers - Elegant Pill Design */
        .price-tag-marker {
          pointer-events: auto;
          cursor: pointer;
          z-index: 5;
          transition: opacity 0.3s ease, transform 0.2s ease;
        }
        
        .price-tag {
          background: rgba(255, 255, 255, 0.95);
          color: hsl(220, 50%, 25%);
          padding: 4px 10px;
          border-radius: 16px;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
          border: 1.5px solid hsl(220, 15%, 85%);
          transition: all 0.2s ease;
          white-space: nowrap;
          backdrop-filter: blur(4px);
        }
        
        .price-tag-marker.major-hub .price-tag {
          border-color: hsl(45, 100%, 50%);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        }
        
        .price-tag:hover {
          transform: scale(1.08);
          background: hsl(45, 100%, 50%);
          color: hsl(220, 15%, 10%);
          border-color: hsl(45, 100%, 45%);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        
        .price-tag-text {
          display: block;
          letter-spacing: -0.3px;
        }
        
        /* Pulse attention animation for flyTo */
        .price-tag-marker.pulse-attention .price-tag {
          animation: pulse-attention 0.5s ease-out 3;
          background: hsl(45, 100%, 50%);
          border-color: hsl(45, 100%, 45%);
          box-shadow: 0 0 0 0 hsl(45, 100%, 50%, 0.7);
        }
        
        @keyframes pulse-attention {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 hsl(45, 100%, 50%, 0.7);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 0 12px hsl(45, 100%, 50%, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 hsl(45, 100%, 50%, 0);
          }
        }
        
        .van-marker {
          pointer-events: auto;
          cursor: pointer;
        }
        
        /* Popup Styles */
        .van-popup .maplibregl-popup-content {
          padding: 0;
          border-radius: 16px;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          min-width: 220px;
        }
        
        .van-popup .maplibregl-popup-close-button {
          font-size: 18px;
          padding: 8px 12px;
          color: hsl(220, 15%, 40%);
          right: 4px;
          top: 4px;
        }
        
        .van-popup .maplibregl-popup-close-button:hover {
          background: transparent;
          color: hsl(220, 15%, 15%);
        }
        
        .van-popup .maplibregl-popup-tip {
          border-top-color: white;
        }
        
        .van-popup-content {
          background: white;
        }
        
        .van-popup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: linear-gradient(135deg, hsl(45, 100%, 50%) 0%, hsl(45, 100%, 45%) 100%);
          border-bottom: 1px solid hsl(45, 100%, 40%);
        }
        
        .van-popup-title {
          font-weight: 800;
          font-size: 14px;
          color: hsl(220, 15%, 10%);
          letter-spacing: -0.3px;
        }
        
        .van-popup-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 6px;
          background: hsl(142, 76%, 36%);
          color: white;
          letter-spacing: 0.5px;
        }
        
        .van-popup-info {
          padding: 14px 16px;
        }
        
        .van-popup-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 0;
        }
        
        .van-popup-row:not(:last-child) {
          border-bottom: 1px solid hsl(220, 15%, 94%);
        }
        
        .van-popup-label {
          font-size: 12px;
          color: hsl(220, 10%, 50%);
          font-weight: 500;
        }
        
        .van-popup-value {
          font-size: 12px;
          color: hsl(220, 15%, 15%);
          font-weight: 600;
        }
        
        .van-popup-eta {
          color: hsl(45, 100%, 40%);
          font-weight: 700;
        }
        
        .van-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .van-glow {
          position: absolute;
          width: 40px;
          height: 40px;
          background: hsl(45, 100%, 50%, 0.5);
          border-radius: 50%;
          filter: blur(10px);
        }
        
        .van-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, hsl(45, 100%, 50%) 0%, hsl(45, 100%, 45%) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          border: 2px solid white;
          color: hsl(220, 15%, 10%);
        }
      `}</style>
      
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <div ref={mapContainer} className="w-full h-full pointer-events-auto" />
        
        {/* Gradient overlays for UI contrast */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/50 to-transparent z-10 pointer-events-none" />
      </div>
    </>
  );
};

export default MapBackground;
