import { PHONE_DISPLAY } from "@/content/seo/contact";

/**
 * Legal identity of the business, shown on /kunye (imprint).
 *
 * Fill in the empty fields with the real registry data. Until every REQUIRED
 * field has a value, /kunye renders the 404 page and no footer links to it, so
 * a half-filled imprint is never published. Never put placeholder text here.
 *
 * After filling it in: add "/kunye" to public/sitemap.xml (and to the sitemap
 * test's allow-list) and, if you like, the address to the Organization schema
 * in index.html.
 */
export interface CompanyInfo {
  /** Registered name, e.g. "... Lojistik Ticaret Ltd. Şti." */
  legalName: string;
  /** Brand the site trades under. */
  tradeName: string;
  /** Full postal address of the registered office. */
  address: string;
  taxOffice: string;
  taxNumber: string;
  /** MERSİS number (16 digits). */
  mersisNo: string;
  tradeRegistryNo: string;
  /** Transport authorization certificate from the Ministry, e.g. "L2 - 12345". Optional. */
  authorizationCertificate: string;
  phone: string;
  /** Optional: needs MX/SPF records on the domain before it can receive mail. */
  email: string;
}

export const COMPANY: CompanyInfo = {
  legalName: "",
  tradeName: "RouteEU Express",
  address: "",
  taxOffice: "",
  taxNumber: "",
  mersisNo: "",
  tradeRegistryNo: "",
  authorizationCertificate: "",
  phone: PHONE_DISPLAY,
  email: "",
};

export const REQUIRED_COMPANY_FIELDS: (keyof CompanyInfo)[] = [
  "legalName",
  "address",
  "taxOffice",
  "taxNumber",
  "mersisNo",
];

export const isCompanyInfoComplete = (info: CompanyInfo = COMPANY): boolean =>
  REQUIRED_COMPANY_FIELDS.every((k) => info[k].trim().length > 0);
