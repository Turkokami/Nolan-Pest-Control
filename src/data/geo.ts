/**
 * geo.ts — CORRECTED service-area hierarchy (audit §5, §8.1, §8.4).
 *
 * Fixes baked in at the source:
 *  - Defect #2: Binghamton (Broome) and Elmira-under-Wayne removed. Elmira is correctly
 *    placed in Chemung County. Binghamton is out of the service footprint entirely.
 *  - §8.1 Wayne County gate: Wayne towns live in `deferredMarkets` — NOT in the live county
 *    tier, NOT in nav/schema/sitemap — until the client confirms truck/address location.
 *    Option A (Ithaca hub) is assumed.
 *
 * Town pages (24) and neighborhood pages (14) are BUILT in Phase 2/4. Phase 0 uses this data
 * only to render an accurate Service Areas list and the areaServed schema Place list.
 */

export interface Neighborhood {
  slug: string;
  name: string;
  commercialValue: "highest" | "high" | "standard";
  notes?: string;
}

export interface Town {
  slug: string;
  name: string;
  county: string; // county slug
  priorityPhase: 2 | 4;
  localSpecifics: string[]; // ≥3 required before a town page ships (Phase 2)
  knownPests: string[];
}

export interface County {
  slug: string;
  name: string;
  seat: string;
  region: "NY";
  pestPressure: string;
  housingStock: string;
  towns: Town[];
}

// Ithaca neighborhood tier (§8.4) — built Phase 4. Nobody in CNY does this.
export const ithacaNeighborhoods: Neighborhood[] = [
  { slug: "collegetown", name: "Collegetown", commercialValue: "highest", notes: "Dense student rentals; bed bugs, roaches, mice; landlord decision-makers." },
  { slug: "cornell-heights", name: "Cornell Heights", commercialValue: "highest", notes: "Student rentals, historic housing." },
  { slug: "fall-creek", name: "Fall Creek", commercialValue: "high" },
  { slug: "belle-sherman", name: "Belle Sherman", commercialValue: "high" },
  { slug: "northside", name: "Northside", commercialValue: "standard" },
  { slug: "southside", name: "Southside", commercialValue: "standard" },
  { slug: "south-hill", name: "South Hill", commercialValue: "high", notes: "Ithaca College rentals." },
  { slug: "east-hill", name: "East Hill", commercialValue: "high" },
  { slug: "west-hill", name: "West Hill", commercialValue: "standard" },
  { slug: "downtown-commons", name: "Downtown / The Commons", commercialValue: "high", notes: "Restaurants, commercial." },
  { slug: "forest-home", name: "Forest Home", commercialValue: "standard" },
  { slug: "coddington-road", name: "Coddington Road corridor", commercialValue: "standard" },
  { slug: "danby-road", name: "Danby Road corridor", commercialValue: "standard" },
  { slug: "cayuga-heights-village", name: "Cayuga Heights village", commercialValue: "high" },
];

// Live county tier — Option A (Ithaca hub). 5 counties, 24 towns.
export const counties: County[] = [
  {
    slug: "tompkins",
    name: "Tompkins County",
    seat: "Ithaca",
    region: "NY",
    pestPressure: "High renter concentration (Cornell + Ithaca College); aging Victorian and pre-war housing stock drives bed bugs, mice, and roaches.",
    housingStock: "Dense student rentals, historic homes, rural farmhouses on the county edges.",
    towns: [
      { slug: "ithaca", name: "Ithaca", county: "tompkins", priorityPhase: 2, localSpecifics: ["Cornell/IC rental density", "pre-war housing", "downtown restaurant corridor"], knownPests: ["bed bug", "mouse", "cockroach", "carpenter ant"] },
      { slug: "lansing", name: "Lansing", county: "tompkins", priorityPhase: 2, localSpecifics: ["lakefront homes", "newer subdivisions", "Cayuga Lake shoreline"], knownPests: ["cluster fly", "mouse", "wasp"] },
      { slug: "dryden", name: "Dryden", county: "tompkins", priorityPhase: 2, localSpecifics: ["rural farmhouses", "wooded lots"], knownPests: ["cluster fly", "carpenter ant", "mouse"] },
      { slug: "trumansburg", name: "Trumansburg", county: "tompkins", priorityPhase: 2, localSpecifics: ["village housing", "near Taughannock"], knownPests: ["stink bug", "mouse"] },
      { slug: "newfield", name: "Newfield", county: "tompkins", priorityPhase: 2, localSpecifics: ["rural", "wooded"], knownPests: ["cluster fly", "carpenter ant"] },
      { slug: "groton", name: "Groton", county: "tompkins", priorityPhase: 2, localSpecifics: ["small-town housing", "farm properties"], knownPests: ["mouse", "cluster fly"] },
      { slug: "freeville", name: "Freeville", county: "tompkins", priorityPhase: 4, localSpecifics: ["village", "rural surrounds"], knownPests: ["mouse", "wasp"] },
      { slug: "cayuga-heights", name: "Cayuga Heights", county: "tompkins", priorityPhase: 4, localSpecifics: ["affluent homes", "mature tree cover"], knownPests: ["carpenter ant", "cluster fly"] },
      { slug: "danby", name: "Danby", county: "tompkins", priorityPhase: 4, localSpecifics: ["rural", "state forest edge"], knownPests: ["wildlife", "cluster fly"] },
      { slug: "enfield", name: "Enfield", county: "tompkins", priorityPhase: 4, localSpecifics: ["rural", "wooded"], knownPests: ["mouse", "cluster fly"] },
    ],
  },
  {
    slug: "schuyler",
    name: "Schuyler County",
    seat: "Watkins Glen",
    region: "NY",
    pestPressure: "Seneca Lake wine-trail hospitality density; tasting rooms, restaurants, STRs — inspection- and bed-bug-exposed.",
    housingStock: "Village homes, lakefront properties, hospitality real estate.",
    towns: [
      { slug: "watkins-glen", name: "Watkins Glen", county: "schuyler", priorityPhase: 2, localSpecifics: ["wine-trail hospitality", "Watkins Glen International", "STR inventory"], knownPests: ["bed bug", "cluster fly", "fruit fly"] },
      { slug: "montour-falls", name: "Montour Falls", county: "schuyler", priorityPhase: 2, localSpecifics: ["village housing", "near Watkins Glen"], knownPests: ["cluster fly", "mouse"] },
      { slug: "odessa", name: "Odessa", county: "schuyler", priorityPhase: 4, localSpecifics: ["rural village"], knownPests: ["cluster fly", "mouse"] },
      { slug: "burdett", name: "Burdett", county: "schuyler", priorityPhase: 4, localSpecifics: ["wine trail", "rural"], knownPests: ["cluster fly", "stink bug"] },
      { slug: "tyrone", name: "Tyrone", county: "schuyler", priorityPhase: 4, localSpecifics: ["rural", "wooded"], knownPests: ["mouse", "cluster fly"] },
      { slug: "beaver-dams", name: "Beaver Dams", county: "schuyler", priorityPhase: 4, localSpecifics: ["rural hamlet"], knownPests: ["mouse", "cluster fly"] },
    ],
  },
  {
    slug: "chemung",
    name: "Chemung County",
    seat: "Elmira",
    region: "NY",
    pestPressure: "Weak competitive field; bed-bug demand in Elmira; overwintering pests in rural surrounds.",
    housingStock: "Older urban housing in Elmira, suburban Horseheads, rural Big Flats.",
    towns: [
      { slug: "elmira", name: "Elmira", county: "chemung", priorityPhase: 2, localSpecifics: ["older urban housing", "bed-bug demand", "multi-unit rentals"], knownPests: ["bed bug", "cockroach", "mouse"] },
      { slug: "horseheads", name: "Horseheads", county: "chemung", priorityPhase: 2, localSpecifics: ["suburban subdivisions", "retail corridor"], knownPests: ["ant", "wasp", "mouse"] },
      { slug: "big-flats", name: "Big Flats", county: "chemung", priorityPhase: 4, localSpecifics: ["airport corridor", "commercial"], knownPests: ["cluster fly", "mouse"] },
    ],
  },
  {
    slug: "cortland",
    name: "Cortland County",
    seat: "Cortland",
    region: "NY",
    pestPressure: "Sweeney's home turf — hardest sub-market; SUNY Cortland rentals; rural overwintering pressure.",
    housingStock: "College rentals, village homes, dairy-country farmhouses.",
    towns: [
      { slug: "cortland", name: "Cortland", county: "cortland", priorityPhase: 2, localSpecifics: ["SUNY Cortland rentals", "older housing"], knownPests: ["mouse", "cockroach", "cluster fly"] },
      { slug: "homer", name: "Homer", county: "cortland", priorityPhase: 4, localSpecifics: ["historic village", "Sweeney's base"], knownPests: ["cluster fly", "carpenter ant"] },
      { slug: "mcgraw", name: "McGraw", county: "cortland", priorityPhase: 4, localSpecifics: ["small village", "rural"], knownPests: ["mouse", "cluster fly"] },
    ],
  },
  {
    slug: "tioga",
    name: "Tioga County",
    seat: "Owego",
    region: "NY",
    pestPressure: "Very thin competition — no meaningful local independent. Rural river-valley housing.",
    housingStock: "Historic Owego, riverside homes, rural farm properties.",
    towns: [
      { slug: "owego", name: "Owego", county: "tioga", priorityPhase: 2, localSpecifics: ["historic downtown", "Susquehanna riverfront", "flood-prone basements"], knownPests: ["mouse", "cluster fly", "carpenter ant"] },
      { slug: "waverly", name: "Waverly", county: "tioga", priorityPhase: 4, localSpecifics: ["NY/PA border village"], knownPests: ["mouse", "cockroach"] },
      { slug: "candor", name: "Candor", county: "tioga", priorityPhase: 4, localSpecifics: ["rural", "wooded"], knownPests: ["cluster fly", "mouse"] },
      { slug: "spencer", name: "Spencer", county: "tioga", priorityPhase: 4, localSpecifics: ["rural hamlet"], knownPests: ["mouse", "cluster fly"] },
    ],
  },
  {
    slug: "wayne",
    name: "Wayne County",
    seat: "Lyons",
    region: "NY",
    pestPressure:
      "Fruit country on the Lake Ontario plain. Orchard voles, cluster flies off 23,000+ acres of apple ground, harvest-season yellowjackets, and seasonal lakefront cottages that sit empty all winter.",
    housingStock:
      "19th-century Erie Canal villages, farmhouses on orchard land, lakefront cottages at Sodus Point and Pultneyville, and newer subdivisions on the Macedon edge.",
    towns: [
      { slug: "lyons", name: "Lyons", county: "wayne", priorityPhase: 2, localSpecifics: ["county seat", "Erie Canal village", "former peppermint-oil capital"], knownPests: ["mouse", "cluster fly", "carpenter ant"] },
      { slug: "newark", name: "Newark", county: "wayne", priorityPhase: 2, localSpecifics: ["largest village in the county", "canal-side industrial stock", "dense village housing"], knownPests: ["mouse", "cockroach", "cluster fly"] },
      { slug: "palmyra", name: "Palmyra", county: "wayne", priorityPhase: 2, localSpecifics: ["year-round visitor traffic to the church history sites", "historic Main Street", "lodging and short-term rentals"], knownPests: ["bed bug", "mouse", "cluster fly"] },
      { slug: "sodus", name: "Sodus", county: "wayne", priorityPhase: 2, localSpecifics: ["Sodus Point lakefront cottages", "summer population swing", "Great Sodus Bay"], knownPests: ["mouse", "cluster fly", "wasp"] },
      { slug: "macedon", name: "Macedon", county: "wayne", priorityPhase: 2, localSpecifics: ["Rochester commuter edge", "newer subdivisions on former orchard ground"], knownPests: ["cluster fly", "ant", "mouse"] },
      { slug: "williamson", name: "Williamson", county: "wayne", priorityPhase: 4, localSpecifics: ["fruit farms", "orchard country"], knownPests: ["vole", "cluster fly", "mouse"] },
      { slug: "marion", name: "Marion", county: "wayne", priorityPhase: 4, localSpecifics: ["orchard and farm properties"], knownPests: ["vole", "mouse", "cluster fly"] },
      { slug: "clyde", name: "Clyde", county: "wayne", priorityPhase: 4, localSpecifics: ["Erie Canal village", "older village housing"], knownPests: ["mouse", "cluster fly"] },
      { slug: "wolcott", name: "Wolcott", county: "wayne", priorityPhase: 4, localSpecifics: ["eastern rural end of the county"], knownPests: ["mouse", "cluster fly"] },
      { slug: "pultneyville", name: "Pultneyville", county: "wayne", priorityPhase: 4, localSpecifics: ["historic lakeside hamlet", "seasonal shoreline homes"], knownPests: ["mouse", "cluster fly", "wasp"] },
    ],
  },
];

/**
 * Wayne County was held back here through the first build while the owner decided whether to
 * market it. He confirmed on 2026-10-03 that he wants it, so it is now a full county in `counties`
 * above. Retained as a note because the reasoning still matters: it is a genuinely separate market
 * 55-70 miles from Ithaca with no service corridor between them, and the only reason to carry it is
 * that the business is physically based in Lyons and can reach the local map results there.
 *
 * Binghamton and Elmira, which the old site wrongly filed under Wayne, are still NOT here.
 * (Binghamton is out of footprint; Elmira is correctly in Chemung.)
 */

// Helpers
export const allTowns: Town[] = counties.flatMap((c) => c.towns);
export const townCount = allTowns.length;
export const getCounty = (slug: string) => counties.find((c) => c.slug === slug);
export const getTown = (slug: string) => allTowns.find((t) => t.slug === slug);
