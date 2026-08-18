// Selected-route helpers for the Europe map: resolve the free-text origin/destination
// inputs to known cities and build the animated van path as
//   Turkish feeder leg (origin → İstanbul) + hand-drawn Europe corridor.
//
// Origins are limited to DOMESTIC_CITIES (Turkish provinces, coords ready) and
// destinations to the cities that have a hand-drawn corridor in MapBackground.
// Anything else simply doesn't resolve and the map stays in showcase mode.

import { DOMESTIC_CITIES, haversineKm, type DomesticCity } from "@/constants/domesticRates";

// Destinations with a hand-drawn corridor, keyed by corridor id → accepted names.
// Keep in sync with vanRoutes[].destinationId in MapBackground.
export const CORRIDOR_DESTINATIONS: Record<string, string[]> = {
  madrid: ["madrid"],
  amsterdam: ["amsterdam"],
  frankfurt: ["frankfurt"],
  prague: ["prag", "prague"],
  milan: ["milano", "milan"],
  berlin: ["berlin"],
  paris: ["paris"],
  london: ["londra", "london"],
};

// Turkish-aware slug: "İstanbul"/"Istanbul" → "istanbul", "Şanlıurfa" → "sanliurfa".
// Map the tricky chars before lowercasing (tr "İ/I/ı" don't survive toLowerCase alone).
const TR_CHAR_MAP: Record<string, string> = {
  "ç": "c", "Ç": "c", "ğ": "g", "Ğ": "g", "ı": "i", "I": "i", "İ": "i",
  "ö": "o", "Ö": "o", "ş": "s", "Ş": "s", "ü": "u", "Ü": "u",
};

export function slugifyCity(input: string): string {
  return input
    .trim()
    .replace(/[çÇğĞıIİöÖşŞüÜ]/g, (ch) => TR_CHAR_MAP[ch])
    .toLowerCase();
}

// Origin must be a Turkish city we have coordinates for.
export function resolveOriginCity(input: string): DomesticCity | null {
  const slug = slugifyCity(input);
  if (!slug) return null;
  return (
    DOMESTIC_CITIES.find((c) => c.id === slug || slugifyCity(c.label) === slug) ?? null
  );
}

// Destination must have a hand-drawn corridor; returns the corridor id or null.
export function resolveDestinationId(input: string): string | null {
  const slug = slugifyCity(input);
  if (!slug) return null;
  for (const [id, aliases] of Object.entries(CORRIDOR_DESTINATIONS)) {
    if (aliases.includes(slug)) return id;
  }
  return null;
}

// Turkish highways hub through central Anatolia, so bowing the feeder leg toward
// Ankara keeps it over land for every origin (coastal straight lines would clip sea).
const ANKARA: [number, number] = [32.8597, 39.9334];

export function buildTurkishLeg(
  origin: [number, number],
  hub: [number, number],
  samples = 12,
): [number, number][] {
  if (haversineKm(origin, hub) < 5) return []; // origin already at the hub
  const mid: [number, number] = [(origin[0] + hub[0]) / 2, (origin[1] + hub[1]) / 2];
  const control: [number, number] = [
    mid[0] + (ANKARA[0] - mid[0]) * 0.35,
    mid[1] + (ANKARA[1] - mid[1]) * 0.35,
  ];
  const points: [number, number][] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const a = 1 - t;
    points.push([
      a * a * origin[0] + 2 * a * t * control[0] + t * t * hub[0],
      a * a * origin[1] + 2 * a * t * control[1] + t * t * hub[1],
    ]);
  }
  return points;
}

// Corridor paths start at İstanbul; the feeder leg ends there, so drop the
// corridor's first point when a leg is prepended to avoid a duplicate vertex.
export function buildSelectedPath(
  originCoords: [number, number],
  corridorPath: [number, number][],
): [number, number][] {
  const leg = buildTurkishLeg(originCoords, corridorPath[0]);
  return leg.length ? [...leg, ...corridorPath.slice(1)] : [...corridorPath];
}

export function pathDistanceKm(path: [number, number][]): number {
  let km = 0;
  for (let i = 1; i < path.length; i++) km += haversineKm(path[i - 1], path[i]);
  return km;
}

// Van animation speed: ~9 ms per km matches the hand-tuned decorative durations
// (İstanbul→Berlin ≈ 2300 km ≈ 21 s), so a Gaziantep departure just takes longer.
const MS_PER_KM = 9;
const MIN_DURATION_MS = 12_000;

export function selectedVanDurationMs(km: number): number {
  return Math.max(MIN_DURATION_MS, Math.round(km * MS_PER_KM));
}

// Rough door-to-door ETA shown in the van popup (~90 km/h effective express pace).
export function selectedEtaHours(km: number): number {
  return Math.max(4, Math.round(km / 90));
}
