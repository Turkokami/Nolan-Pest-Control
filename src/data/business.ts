/**
 * business.ts — THE LOCK.
 * Single canonical source for NAP, hours, credentials, brand voice.
 * Every schema node, the footer, the contact page, and the sitemap read from here.
 * Do NOT hardcode the phone/name/address anywhere else. Use lib/nap.ts to format.
 *
 * Fields marked `pending: true` are Phase 0 client inputs (see docs/03-PHASE-0-CHECKLIST.md).
 */

export interface PostalAddress {
  street?: string; // PENDING — client must supply a real address (Defect #3)
  city: string;
  region: string; // "NY"
  postalCode?: string;
  country: string; // "US"
}

export interface BusinessHours {
  days: string; // e.g. "Mo-Fr"
  opens: string; // "08:00"
  closes: string; // "17:00"
  label: string;
}

export const business = {
  name: "Nolan Pest Control",
  legalName: "Nolan Pest Control",
  tagline: "Central New York's family-owned pest control.",
  brandLine: "Built by a family that believes hard work, honesty, and results still matter.",

  // Contact — LOCKED NAP
  phone: "(607) 269-6218",
  phoneE164: "+16072696218",
  emailCurrent: "nolanpest@outlook.com", // legacy — being retired (Defect #7)
  email: "nolanpestny@gmail.com", // confirmed by owner 2026-08-25; info@ mailbox is NOT live

  url: "https://nolanpestcontrol.com",

  // Address — PENDING client input. No LocalBusiness address published today (Defect #3).
  addressPending: true,
  address: {
    street: undefined,
    city: "Ithaca",
    region: "NY",
    postalCode: undefined,
    country: "US",
  } satisfies PostalAddress,

  // Operating center + radius (audit §5)
  hubCity: "Ithaca, NY",
  serviceRadiusMiles: 60,
  geo: { lat: 42.4396, lng: -76.4966 }, // Ithaca centroid (for GeoCircle areaServed)

  /**
   * Hours — current reality is Mon–Fri 8–5 (Defect #8: contradicts the emergency CTA).
   * Phase 0 operational decision: add answering service / emergency line, then update here.
   * Keep this honest until coverage actually changes.
   */
  hours: [
    { days: "Mo-Fr", opens: "08:00", closes: "17:00", label: "Mon–Fri: 8am–5pm" },
  ] satisfies BusinessHours[],
  hoursNote: "Sat–Sun: Closed",
  emergencyLine: false, // set true once an answering/emergency service is live (Defect #8)

  priceRange: "$$",

  // Social — used as schema `sameAs`
  social: {
    facebook: "https://www.facebook.com/NolanPestControl", // confirmed by owner 2026-08-25
    instagram: "https://www.instagram.com/", // PENDING exact handle
    gbp: "", // PENDING — Google Business Profile claim (Phase 0)
  },

  // Credentials / E-E-A-T — PENDING client inputs (Defect #9)
  credentials: {
    nysdecBusinessReg: "", // STILL PENDING — owner supplied the applicator cert, not the business registration
    applicatorCert: "c8902993", // Matthew Nolan, confirmed by owner 2026-08-25
    insured: true,
    npmaMember: false, // set true if/when joined (audit §11 backlinks)
    nyspmaMember: false,
  },

  owner: {
    // PENDING — required for Person schema node + About/Team (Defect #9)
    name: "Matthew Nolan", // confirmed by owner 2026-08-25
    role: "Owner & Certified Applicator",
    bio: "", // STILL PENDING — owner left the bio field blank
    photo: "", // /public path when supplied
  },

  // Founding / trust stats — replace filler stat strip (Defect #15) once real numbers exist
  stats: {
    yearFounded: 2026, // confirmed by owner 2026-08-25
    homesProtected: 0, // STILL PENDING — owner left blank
    yearsInTrade: 9, // Matthew Nolan, years in pest control (NOT the age of the business)
    countiesServed: 5, // Tompkins, Schuyler, Chemung, Cortland, Tioga (Option A)
    servicesOffered: 8, // Phase 0; grows to 22
  },

  // Brand voice — KEEP (audit §3). Extend, do not rewrite.
  voice: [
    "Guaranteed Results",
    "Family Owned & Operated",
    "Prices You Can Afford",
    "Safe for Your Family & Pets",
  ],
} as const;

export type Business = typeof business;
