import { describe, it, expect } from "vitest";
import { getShippingPrice, SHIPPING_RATES } from "./shippingRates";

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
