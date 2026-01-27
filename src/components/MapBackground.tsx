import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoiYWh5YXpnYW4iLCJhIjoiY21reDdocm5lMDVlZjNmczdkczhmaHFmZyJ9.xUutc-BMX33es9ECgpdtUg";

// City coordinates [lng, lat]
const cities = [
  { id: "istanbul", coords: [28.9784, 41.0082] as [number, number], label: "İstanbul", country: "TR", isPrimary: true },
  { id: "sofia", coords: [23.3219, 42.6977] as [number, number], label: "Sofya", country: "BG", isPrimary: false },
  { id: "belgrade", coords: [20.4489, 44.7866] as [number, number], label: "Belgrad", country: "RS", isPrimary: false },
  { id: "budapest", coords: [19.0402, 47.4979] as [number, number], label: "Budapeşte", country: "HU", isPrimary: false },
  { id: "vienna", coords: [16.3738, 48.2082] as [number, number], label: "Viyana", country: "AT", isPrimary: false },
  { id: "munich", coords: [11.5820, 48.1351] as [number, number], label: "Münih", country: "DE", isPrimary: true },
  { id: "berlin", coords: [13.4050, 52.5200] as [number, number], label: "Berlin", country: "DE", isPrimary: false },
  { id: "paris", coords: [2.3522, 48.8566] as [number, number], label: "Paris", country: "FR", isPrimary: true },
];

// Route paths for animated vans (arrays of coordinates)
const vanRoutes = [
  {
    id: 1,
    path: [
      [28.9784, 41.0082], // Istanbul
      [26.5, 41.8],
      [23.3219, 42.6977], // Sofia
    ] as [number, number][],
    duration: 12000,
  },
  {
    id: 2,
    path: [
      [23.3219, 42.6977], // Sofia
      [21.9, 43.7],
      [20.4489, 44.7866], // Belgrade
    ] as [number, number][],
    duration: 10000,
  },
  {
    id: 3,
    path: [
      [20.4489, 44.7866], // Belgrade
      [19.5, 46.0],
      [19.0402, 47.4979], // Budapest
    ] as [number, number][],
    duration: 10000,
  },
  {
    id: 4,
    path: [
      [19.0402, 47.4979], // Budapest
      [17.5, 47.8],
      [16.3738, 48.2082], // Vienna
    ] as [number, number][],
    duration: 8000,
  },
  {
    id: 5,
    path: [
      [16.3738, 48.2082], // Vienna
      [13.5, 48.1],
      [11.5820, 48.1351], // Munich
    ] as [number, number][],
    duration: 10000,
  },
  {
    id: 6,
    path: [
      [11.5820, 48.1351], // Munich
      [7.0, 48.5],
      [2.3522, 48.8566], // Paris
    ] as [number, number][],
    duration: 14000,
  },
];

const MapBackground = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const vanMarkersRef = useRef<mapboxgl.Marker[]>([]);
  const animationFramesRef = useRef<number[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [15.0, 45.0],
      zoom: 3.5,
      interactive: false, // Disable interactions to act as background
      attributionControl: false,
    });

    map.current.on("load", () => {
      setMapLoaded(true);

      // Add route line
      if (map.current) {
        map.current.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [28.9784, 41.0082], // Istanbul
                [26.5, 41.8],
                [23.3219, 42.6977], // Sofia
                [21.9, 43.7],
                [20.4489, 44.7866], // Belgrade
                [19.5, 46.0],
                [19.0402, 47.4979], // Budapest
                [17.5, 47.8],
                [16.3738, 48.2082], // Vienna
                [13.5, 48.1],
                [11.5820, 48.1351], // Munich
                [7.0, 48.5],
                [2.3522, 48.8566], // Paris
              ],
            },
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
      }

      // Add city markers
      cities.forEach((city) => {
        const el = document.createElement("div");
        el.className = "city-marker";
        el.innerHTML = `
          <div class="marker-container ${city.isPrimary ? "primary" : "secondary"}">
            ${city.isPrimary ? '<div class="pulse-ring"></div>' : ''}
            <div class="marker-dot"></div>
            <div class="marker-label">${city.label}</div>
          </div>
        `;

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat(city.coords)
          .addTo(map.current!);
        
        markersRef.current.push(marker);
      });

      // Create and animate van markers
      vanRoutes.forEach((route, index) => {
        const el = document.createElement("div");
        el.className = "van-marker";
        el.innerHTML = `
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

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat(route.path[0])
          .addTo(map.current!);
        
        vanMarkersRef.current.push(marker);

        // Animate van along path
        const animateVan = () => {
          let startTime: number | null = null;
          const totalDuration = route.duration;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = (elapsed % totalDuration) / totalDuration;

            // Calculate position along path
            const pathLength = route.path.length - 1;
            const segmentProgress = progress * pathLength;
            const segmentIndex = Math.floor(segmentProgress);
            const segmentFraction = segmentProgress - segmentIndex;

            if (segmentIndex < pathLength) {
              const start = route.path[segmentIndex];
              const end = route.path[segmentIndex + 1];
              const lng = start[0] + (end[0] - start[0]) * segmentFraction;
              const lat = start[1] + (end[1] - start[1]) * segmentFraction;
              marker.setLngLat([lng, lat]);
            }

            animationFramesRef.current[index] = requestAnimationFrame(animate);
          };

          // Stagger start times
          setTimeout(() => {
            animationFramesRef.current[index] = requestAnimationFrame(animate);
          }, index * 2000);
        };

        animateVan();
      });
    });

    return () => {
      // Cleanup animation frames
      animationFramesRef.current.forEach((frame) => {
        cancelAnimationFrame(frame);
      });
      
      // Cleanup markers
      markersRef.current.forEach((marker) => marker.remove());
      vanMarkersRef.current.forEach((marker) => marker.remove());
      
      // Cleanup map
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

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
        
        .marker-container.secondary .marker-label {
          background: rgba(255, 255, 255, 0.9);
          color: hsl(220, 15%, 15%);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .van-marker {
          pointer-events: none;
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
      
      <div className="fixed inset-0 z-0">
        <div ref={mapContainer} className="w-full h-full" />
        
        {/* Gradient overlays for UI contrast */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/50 to-transparent z-10 pointer-events-none" />
      </div>
    </>
  );
};

export default MapBackground;
