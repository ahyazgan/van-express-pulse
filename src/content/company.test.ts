import { describe, expect, it } from "vitest";
import { COMPANY, isCompanyInfoComplete, REQUIRED_COMPANY_FIELDS } from "./company";

describe("company imprint gate", () => {
  it("stays closed while any required field is empty", () => {
    expect(isCompanyInfoComplete({ ...COMPANY, legalName: "" })).toBe(false);
    expect(isCompanyInfoComplete({ ...COMPANY, legalName: "   " })).toBe(false);
  });

  it("opens once every required field has a value", () => {
    const filled = { ...COMPANY };
    for (const k of REQUIRED_COMPANY_FIELDS) filled[k] = "x";
    expect(isCompanyInfoComplete(filled)).toBe(true);
  });
});
