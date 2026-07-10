import type { Currency } from "@/constants/shippingRates";

// Format an amount with the right symbol/locale for the shipping mode.
//  EUR -> "€2.350"   TRY -> "16.600 ₺"
export const formatMoney = (amount: number, currency: Currency = "EUR"): string => {
  const rounded = Math.round(amount);
  if (currency === "TRY") {
    return `${new Intl.NumberFormat("tr-TR").format(rounded)} ₺`;
  }
  return `€${new Intl.NumberFormat("de-DE").format(rounded)}`;
};
