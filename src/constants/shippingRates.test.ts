import { describe, it, expect } from "vitest";
import {
  VAN_CAPACITY_M3,
  VAN_CAPACITY_PALLETS,
  dimensionsToM3,
  estimateShipmentPrice,
  getShippingPrice,
  palletsToM3,
  SHIPPING_RATES,
} from "./shippingRates";

describe("getShippingPrice", () => {
  it("returns the exact price for a known city", () => {
    const res = getShippingPrice("Berlin");
    expect(res.found).toBe(true);
    expect(res.minPrice).toBe(SHIPPING_RATES["Berlin"][0]);
    expect(res.maxPrice).toBe(SHIPPING_RATES["Berlin"][1]);
  });

  it("matches case-insensitively", () => {
    expect(getShippingPrice("berlin").found).toBe(true);
    expect(getShippingPrice("BERLIN").minPrice).toBe(SHIPPING_RATES["Berlin"][0]);
  });

  it("supports Turkish spellings", () => {
    expect(getShippingPrice("Münih").found).toBe(true);
    expect(getShippingPrice("Londra").found).toBe(true);
  });

  it("extracts the destination from a route string", () => {
    const res = getShippingPrice("İstanbul → Berlin");
    expect(res.found).toBe(true);
    expect(res.city?.toLowerCase()).toBe("berlin");
  });

  it("prices Madrid (a marketed primary hub)", () => {
    expect(getShippingPrice("Madrid").found).toBe(true);
  });

  it("returns not-found for unknown destinations instead of guessing", () => {
    expect(getShippingPrice("asdf").found).toBe(false);
  });

  it("does NOT fuzzy-match partial strings (regression: 'ver' must not hit Verona)", () => {
    expect(getShippingPrice("ver").found).toBe(false);
    expect(getShippingPrice("an").found).toBe(false);
  });
});

describe("volume helpers", () => {
  it("converts pallets to m3 against the van capacity", () => {
    expect(palletsToM3(VAN_CAPACITY_PALLETS)).toBeCloseTo(VAN_CAPACITY_M3);
    expect(palletsToM3(1)).toBeCloseTo(VAN_CAPACITY_M3 / VAN_CAPACITY_PALLETS);
  });

  it("converts centimetre dimensions to m3", () => {
    expect(dimensionsToM3(100, 100, 100)).toBeCloseTo(1);
    expect(dimensionsToM3(60, 40, 40)).toBeCloseTo(0.096);
    expect(dimensionsToM3(60, 40, 40, 2)).toBeCloseTo(0.192);
  });
});

describe("estimateShipmentPrice", () => {
  const [berlinMin, berlinMax] = SHIPPING_RATES["Berlin"];

  it("returns the complete-van price when no volume is given", () => {
    const res = estimateShipmentPrice("Berlin");
    expect(res.isComplete).toBe(true);
    expect(res.minPrice).toBe(berlinMin);
    expect(res.maxPrice).toBe(berlinMax);
  });

  it("returns the complete-van price once the volume fills the van", () => {
    expect(estimateShipmentPrice("Berlin", VAN_CAPACITY_M3).isComplete).toBe(true);
    expect(estimateShipmentPrice("Berlin", VAN_CAPACITY_M3 + 5).minPrice).toBe(berlinMin);
  });

  it("prices partial loads below the complete-van price", () => {
    const res = estimateShipmentPrice("Berlin", 3);
    expect(res.isComplete).toBe(false);
    expect(res.minPrice!).toBeGreaterThan(0);
    expect(res.maxPrice!).toBeLessThan(berlinMax);
    expect(res.minPrice!).toBeLessThan(res.maxPrice!);
  });

  it("charges a higher per-m3 rate for smaller loads", () => {
    const small = estimateShipmentPrice("Berlin", 2);
    const large = estimateShipmentPrice("Berlin", 10);
    expect(small.minPrice! / 2).toBeGreaterThan(large.minPrice! / 10);
  });

  it("grows monotonically with volume", () => {
    const volumes = [1, 2, 5, 8, 12];
    const prices = volumes.map((v) => estimateShipmentPrice("Berlin", v).minPrice!);
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThan(prices[i - 1]);
    }
  });

  it("applies a minimum billable volume to tiny shipments", () => {
    const tiny = estimateShipmentPrice("Berlin", 0.05);
    expect(tiny.billableM3).toBe(0.5);
    expect(tiny.minPrice).toBe(estimateShipmentPrice("Berlin", 0.5).minPrice);
  });

  it("never exceeds the complete-van price for partial loads", () => {
    for (const v of [0.1, 1, 5, 13.4]) {
      expect(estimateShipmentPrice("Berlin", v).maxPrice!).toBeLessThanOrEqual(berlinMax);
    }
  });

  it("stays not-found for unknown cities", () => {
    expect(estimateShipmentPrice("asdf", 3).found).toBe(false);
  });
});
