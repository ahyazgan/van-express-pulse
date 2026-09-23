import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SHIPPING_RATES } from "@/constants/shippingRates";

const indexHtml = readFileSync(resolve(process.cwd(), "index.html"), "utf8");

describe("static home shell", () => {
  it("has the hero the overlay copies", () => {
    expect(indexHtml).toContain('id="ss-home"');
    expect(indexHtml).toContain('class="ss-hero"');
  });

  it("shows the same 'from' prices as the rate table", () => {
    // The chips are hand-written HTML; this keeps them from drifting.
    const chips = [...indexHtml.matchAll(/<li><a href="[^"]+">([^<]+?) <b>€([\d.]+)'den<\/b><\/a><\/li>/g)];
    expect(chips.length).toBeGreaterThan(0);
    for (const [, city, price] of chips) {
      const rate = SHIPPING_RATES[city];
      expect(rate, `no rate for ${city}`).toBeDefined();
      expect(price, city).toBe(rate[0].toLocaleString("tr-TR"));
    }
  });
});
