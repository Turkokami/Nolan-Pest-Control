/**
 * nap.ts — the single NAP formatter. Footer, contact page, and schema all call these.
 * One format everywhere = citation consistency (audit §1 "NAP rule", Defect #3/#7).
 */
import { business } from "@/data/business";

export function formatPhoneHref(): string {
  return `tel:${business.phoneE164}`;
}

export function formatPhoneDisplay(): string {
  return business.phone;
}

export function formatAddressLine(): string {
  const a = business.address;
  if (business.addressPending || !a.street) {
    // No street published yet (Defect #3). Show service-area line instead of a fake address.
    return `Serving ${business.hubCity} and Central New York`;
  }
  const parts = [a.street, `${a.city}, ${a.region}`, a.postalCode].filter(Boolean);
  return parts.join(", ");
}

/** Structured address for schema — omitted entirely until a real street exists. */
export function schemaPostalAddress() {
  const a = business.address;
  if (business.addressPending || !a.street) return undefined;
  return {
    "@type": "PostalAddress",
    streetAddress: a.street,
    addressLocality: a.city,
    addressRegion: a.region,
    postalCode: a.postalCode,
    addressCountry: a.country,
  };
}
