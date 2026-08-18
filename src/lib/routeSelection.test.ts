import { describe, it, expect } from "vitest";
import {
  buildSelectedPath,
  buildTurkishLeg,
  pathDistanceKm,
  resolveDestinationId,
  resolveOriginCity,
  selectedVanDurationMs,
  slugifyCity,
} from "./routeSelection";

const ISTANBUL: [number, number] = [28.9784, 41.0082];
const GAZIANTEP: [number, number] = [37.3833, 37.0662];

// Trimmed copy of the Berlin corridor from MapBackground (starts at İstanbul).
const BERLIN_CORRIDOR: [number, number][] = [
  ISTANBUL,
  [23.3219, 42.6977], // Sofia
  [19.0402, 47.4979], // Budapest
  [13.405, 52.52], // Berlin
];

describe("slugifyCity", () => {
  it("normalizes Turkish characters and case", () => {
    expect(slugifyCity("İstanbul")).toBe("istanbul");
    expect(slugifyCity("Istanbul")).toBe("istanbul");
    expect(slugifyCity("ŞANLIURFA")).toBe("sanliurfa");
    expect(slugifyCity("  Münih ")).toBe("munih");
  });
});

describe("resolveOriginCity", () => {
  it("resolves Turkish cities by label or id, any spelling", () => {
    expect(resolveOriginCity("Gaziantep")?.id).toBe("gaziantep");
    expect(resolveOriginCity("istanbul")?.id).toBe("istanbul");
    expect(resolveOriginCity("İSTANBUL")?.id).toBe("istanbul");
    expect(resolveOriginCity("Şanlıurfa")?.id).toBe("sanliurfa");
  });

  it("rejects non-Turkish or unknown cities", () => {
    expect(resolveOriginCity("Berlin")).toBeNull();
    expect(resolveOriginCity("")).toBeNull();
    expect(resolveOriginCity("Atlantis")).toBeNull();
  });
});

describe("resolveDestinationId", () => {
  it("resolves corridor cities in Turkish and English spellings", () => {
    expect(resolveDestinationId("Berlin")).toBe("berlin");
    expect(resolveDestinationId("Prag")).toBe("prague");
    expect(resolveDestinationId("Prague")).toBe("prague");
    expect(resolveDestinationId("Milano")).toBe("milan");
    expect(resolveDestinationId("Londra")).toBe("london");
  });

  it("rejects cities without a hand-drawn corridor", () => {
    expect(resolveDestinationId("Hamburg")).toBeNull();
    expect(resolveDestinationId("İstanbul")).toBeNull();
    expect(resolveDestinationId("")).toBeNull();
  });
});

describe("buildTurkishLeg", () => {
  it("starts at the origin and ends at the hub", () => {
    const leg = buildTurkishLeg(GAZIANTEP, ISTANBUL);
    expect(leg[0]).toEqual(GAZIANTEP);
    expect(leg[leg.length - 1]).toEqual(ISTANBUL);
    expect(leg.length).toBeGreaterThan(2);
  });

  it("returns an empty leg when the origin already is the hub", () => {
    expect(buildTurkishLeg(ISTANBUL, ISTANBUL)).toEqual([]);
  });
});

describe("buildSelectedPath", () => {
  it("prepends the feeder leg without duplicating İstanbul", () => {
    const path = buildSelectedPath(GAZIANTEP, BERLIN_CORRIDOR);
    expect(path[0]).toEqual(GAZIANTEP);
    expect(path[path.length - 1]).toEqual(BERLIN_CORRIDOR[BERLIN_CORRIDOR.length - 1]);
    const istanbulCount = path.filter(
      ([lng, lat]) => lng === ISTANBUL[0] && lat === ISTANBUL[1],
    ).length;
    expect(istanbulCount).toBe(1);
  });

  it("returns the corridor untouched for an İstanbul origin", () => {
    expect(buildSelectedPath(ISTANBUL, BERLIN_CORRIDOR)).toEqual(BERLIN_CORRIDOR);
  });
});

describe("pathDistanceKm / selectedVanDurationMs", () => {
  it("a Gaziantep departure is longer and slower than an İstanbul one", () => {
    const fromIstanbul = pathDistanceKm(buildSelectedPath(ISTANBUL, BERLIN_CORRIDOR));
    const fromGaziantep = pathDistanceKm(buildSelectedPath(GAZIANTEP, BERLIN_CORRIDOR));
    expect(fromGaziantep).toBeGreaterThan(fromIstanbul + 800); // ~1.100 km feeder leg
    expect(selectedVanDurationMs(fromGaziantep)).toBeGreaterThan(
      selectedVanDurationMs(fromIstanbul),
    );
  });

  it("enforces a minimum animation duration", () => {
    expect(selectedVanDurationMs(10)).toBe(12_000);
  });
});
