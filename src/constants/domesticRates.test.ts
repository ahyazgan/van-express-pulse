import { describe, it, expect } from "vitest";
import { getDomesticPrice, haversineKm, DOMESTIC_CITIES } from "./domesticRates";

describe("getDomesticPrice", () => {
  it("prices a known city pair in TRY as a range", () => {
    const r = getDomesticPrice("İstanbul", "Ankara");
    expect(r.found).toBe(true);
    expect(r.currency).toBe("TRY");
    expect(r.minPrice!).toBeGreaterThan(0);
    expect(r.maxPrice!).toBeGreaterThan(r.minPrice!);
  });

  it("is case-insensitive and also accepts ids", () => {
    expect(getDomesticPrice("istanbul", "izmir").found).toBe(true);
    expect(getDomesticPrice("ANKARA", "Bursa").found).toBe(true);
  });

  it("returns not-found for cities outside the domestic list", () => {
    expect(getDomesticPrice("İstanbul", "Berlin").found).toBe(false);
    expect(getDomesticPrice("Atlantis", "Ankara").found).toBe(false);
  });

  it("charges more for longer distances", () => {
    const near = getDomesticPrice("İstanbul", "Bursa").maxPrice!;
    const far = getDomesticPrice("İstanbul", "Erzurum").maxPrice!;
    expect(far).toBeGreaterThan(near);
  });

  it("İstanbul–Ankara estimate sits in a sane band (draft numbers)", () => {
    const r = getDomesticPrice("İstanbul", "Ankara");
    expect(r.minPrice!).toBeGreaterThan(9000);
    expect(r.maxPrice!).toBeLessThan(22000);
  });

  it("haversine ~ İstanbul–Ankara great-circle (300–400 km)", () => {
    const ist = DOMESTIC_CITIES.find((c) => c.id === "istanbul")!.coords;
    const ank = DOMESTIC_CITIES.find((c) => c.id === "ankara")!.coords;
    const d = haversineKm(ist, ank);
    expect(d).toBeGreaterThan(300);
    expect(d).toBeLessThan(400);
  });
});
