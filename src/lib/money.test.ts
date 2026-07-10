import { describe, it, expect } from "vitest";
import { formatMoney } from "./money";

describe("formatMoney", () => {
  it("formats TRY with the ₺ symbol and tr grouping", () => {
    expect(formatMoney(14600, "TRY")).toBe("14.600 ₺");
  });

  it("formats EUR with the € symbol and de grouping", () => {
    expect(formatMoney(1750, "EUR")).toBe("€1.750");
  });

  it("defaults to EUR when no currency is given", () => {
    expect(formatMoney(2300)).toBe("€2.300");
  });

  it("rounds to whole units", () => {
    expect(formatMoney(1749.6, "EUR")).toBe("€1.750");
    expect(formatMoney(19780, "TRY")).toBe("19.780 ₺");
  });
});
