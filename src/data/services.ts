/**
 * services.ts — Tier 2 service spokes (audit §8.3). 8 existing + 14 new = 22.
 *
 * Phase 0 ships the 8 EXISTING services (URLs preserved exactly — audit §3, no redirects).
 * The 14 NEW services are defined here with priority so Phase 2 is a data task, not a re-architecture.
 *
 * `status: "existing"` → route rendered now. `status: "existing"` → in data, not yet routed
 * (kept out of nav/sitemap until built). This lets us grow 8 → 22 by flipping a flag + adding copy.
 */

export type Priority = "P1" | "P2" | "P3";
export type ServiceStatus = "existing" | "planned";

export interface FaqItem {
  q: string;
  a: string;
}

export interface Service {
  slug: string; // URL segment (preserved for existing)
  name: string; // full nav/title name
  shortName: string;
  status: ServiceStatus;
  priority: Priority;
  category: "general" | "rodent" | "insect" | "wildlife" | "wood-destroying" | "inspection";
  // AEO direct-answer lead (1–2 sentences) — expanded to full template in Phase 1
  answer: string;
  pestsTreated: string[];
  relatedPests: string[]; // pest-library slugs (Phase 3)
  faqs: FaqItem[];
  warrantyNote?: string;
  rationale?: string; // why this page exists (for new services)
}

// Warranty language must be defined-term, never "lifetime"/unqualified (Defect #17).
const standardWarranty =
  "Covered by our defined-term service guarantee: if covered pests return during the service period, we re-treat at no additional charge. See Our Guarantee for terms and exclusions.";

export const services: Service[] = [
  // ---------- 8 EXISTING (URLs preserved) ----------
  {
    slug: "general-pest",
    name: "General Pest Preventative Service",
    shortName: "General Pest",
    status: "existing",
    priority: "P1",
    category: "general",
    answer:
      "Our general preventative program protects Central New York homes year-round against the most common household pests with scheduled interior and exterior treatments tuned to CNY's seasons.",
    pestsTreated: ["ants", "spiders", "mice", "cockroaches", "wasps", "occasional invaders"],
    relatedPests: ["house-mouse", "odorous-house-ant", "german-cockroach"],
    faqs: [
      { q: "How often should preventative service be done?", a: "Most CNY homes do best on a quarterly program timed to seasonal pest cycles, with a heavier focus in spring and fall." },
      { q: "Is it safe for kids and pets?", a: "Yes. We use products and application methods rated for use in occupied homes and follow all New York application requirements." },
    ],
    warrantyNote: standardWarranty,
  },
  {
    slug: "roach-control",
    name: "Roach Control",
    shortName: "Roaches",
    status: "existing",
    priority: "P1",
    category: "insect",
    answer:
      "We eliminate German and other cockroach infestations at the source with targeted baiting and treatment, then seal and monitor to keep them from coming back — critical in older Ithaca and student-rental housing.",
    pestsTreated: ["German cockroach", "American cockroach", "Oriental cockroach"],
    relatedPests: ["german-cockroach", "american-cockroach", "oriental-cockroach"],
    faqs: [
      { q: "Why do roaches keep coming back?", a: "Roaches breed fast and hide in wall voids and appliances. Lasting control needs source baiting plus sanitation and sealing, not just a spray." },
    ],
    warrantyNote: standardWarranty,
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    shortName: "Rodents",
    status: "existing",
    priority: "P1",
    category: "rodent",
    answer:
      "We control mice and rats with a trap-and-remove program plus exclusion — sealing the entry points that let them back in. Exclusion is the step most companies skip and the reason infestations recur.",
    pestsTreated: ["house mouse", "deer mouse", "Norway rat"],
    relatedPests: ["house-mouse", "deer-mouse", "norway-rat"],
    faqs: [
      { q: "Do you seal up entry points or just set traps?", a: "Both. Trapping clears the current population; exclusion sealing keeps new rodents out. We offer exclusion as its own service for larger jobs." },
    ],
    warrantyNote: standardWarranty,
  },
  {
    slug: "ant-control",
    name: "Ant Control",
    shortName: "Ants",
    status: "existing",
    priority: "P1",
    category: "insect",
    answer:
      "We treat the ant species that actually invade CNY homes — including carpenter ants, which damage wood and need a different approach than nuisance ants.",
    pestsTreated: ["carpenter ant", "pavement ant", "odorous house ant"],
    relatedPests: ["carpenter-ant", "pavement-ant", "odorous-house-ant"],
    faqs: [
      { q: "Are these carpenter ants?", a: "Large black ants indoors, especially with sawdust-like shavings near woodwork, are often carpenter ants. See our carpenter ant service for how we handle structural risk." },
    ],
    warrantyNote: standardWarranty,
  },
  {
    slug: "spider-control",
    name: "Spider Control",
    shortName: "Spiders",
    status: "existing",
    priority: "P2",
    category: "insect",
    answer:
      "We reduce spider populations inside and around the home by treating harborage areas and the insects spiders feed on, with attention to the few species of medical concern in New York.",
    pestsTreated: ["house spider", "cellar spider", "wolf spider"],
    relatedPests: [],
    faqs: [
      { q: "Are there dangerous spiders in Central NY?", a: "Medically significant spiders are rare in CNY. Most home spiders are harmless nuisances; we can identify anything you're concerned about." },
    ],
    warrantyNote: standardWarranty,
  },
  {
    slug: "stinging-insects",
    name: "Stinging Insects",
    shortName: "Stinging Insects",
    status: "existing",
    priority: "P1",
    category: "insect",
    answer:
      "We safely remove yellowjacket, hornet, and wasp nests and treat the stinging insects most active around CNY homes in late summer and fall.",
    pestsTreated: ["yellowjacket", "bald-faced hornet", "paper wasp", "European hornet"],
    relatedPests: ["yellowjacket", "bald-faced-hornet", "paper-wasp"],
    faqs: [
      { q: "Can you remove a nest in the wall or ground?", a: "Yes. We handle wall-void and ground nests, which are riskier to remove and often require professional equipment." },
    ],
    warrantyNote: standardWarranty,
  },
  {
    slug: "mosquito-tick",
    name: "Mosquitoes & Ticks",
    shortName: "Mosquitoes & Ticks",
    status: "existing",
    priority: "P2",
    category: "insect",
    answer:
      "Our seasonal yard program reduces mosquito and tick pressure around your property — important in the Finger Lakes, where blacklegged (deer) ticks carry Lyme disease.",
    pestsTreated: ["mosquito", "blacklegged (deer) tick", "American dog tick"],
    relatedPests: ["blacklegged-tick", "mosquito"],
    faqs: [
      { q: "When should mosquito and tick treatment start?", a: "Begin in spring and continue through fall. Tick pressure in the Finger Lakes is highest in late spring and again in fall." },
    ],
    warrantyNote: standardWarranty,
  },
  {
    slug: "bed-bug",
    name: "Bed Bug Control",
    shortName: "Bed Bugs",
    status: "existing",
    priority: "P1",
    category: "insect",
    answer:
      "We find and eliminate bed bug infestations with inspection, treatment, and follow-up — including guidance for renters and landlords in Ithaca's dense student-housing market.",
    pestsTreated: ["bed bug"],
    relatedPests: ["bed-bug"],
    faqs: [
      { q: "I rent — who is responsible for bed bug treatment?", a: "In New York, landlords are generally responsible for infestations under the Warranty of Habitability (RPL §235-b). See our renter and landlord resources." },
      { q: "Do you offer discreet service?", a: "Yes. Our vehicles and visits can be kept discreet, which matters for multi-unit and rental situations." },
    ],
    warrantyNote: standardWarranty,
  },

  // ---------- 14 NEW (planned; built Phase 2) ----------
  { slug: "cluster-fly-control", name: "Cluster Fly Control", shortName: "Cluster Flies", status: "existing", priority: "P1", category: "insect", answer: "We treat cluster flies — the fall invader that swarms upstairs windows every autumn — with exterior barrier timing that stops them before they get inside.", pestsTreated: ["cluster fly"], relatedPests: ["cluster-fly"], faqs: [], warrantyNote: standardWarranty, rationale: "Defining upstate NY seasonal pest. Sweeney's + Critter Ridders build for it; Nolan has nothing. Easiest high-volume win." },
  { slug: "carpenter-ant-control", name: "Carpenter Ant Control", shortName: "Carpenter Ants", status: "existing", priority: "P1", category: "insect", answer: "Carpenter ants excavate wood and are the ant that matters most in Central New York. We locate the parent and satellite nests and treat for structural protection.", pestsTreated: ["carpenter ant"], relatedPests: ["carpenter-ant"], faqs: [], warrantyNote: standardWarranty, rationale: "Carpenter ants are THE ant in CNY. A generic ant page can't compete for this term." },
  { slug: "bat-removal-exclusion", name: "Bat Removal & Exclusion", shortName: "Bats", status: "existing", priority: "P1", category: "wildlife", answer: "We remove bats and seal them out humanely and legally — including New York's DEC restriction on exclusion during the maternity/pup season (roughly May 1–Aug 31).", pestsTreated: ["little brown bat", "big brown bat"], relatedPests: ["little-brown-bat", "big-brown-bat"], faqs: [], warrantyNote: standardWarranty, rationale: "Highest residential ticket. Directly contests Wildlife Resolutions (Ithaca incumbent). DEC pup-season = authority content." },
  { slug: "rodent-exclusion-sealing", name: "Rodent Exclusion & Sealing", shortName: "Rodent Exclusion", status: "existing", priority: "P1", category: "rodent", answer: "We seal the entry points mice and rats use to get in — the exclusion step that turns a temporary fix into a permanent one.", pestsTreated: ["house mouse", "Norway rat"], relatedPests: ["house-mouse", "norway-rat"], faqs: [], warrantyNote: standardWarranty, rationale: "Splits the differentiator already claimed on the rodent page into its own sellable service." },
  { slug: "overwintering-pests", name: "Overwintering Pest Control", shortName: "Overwintering Pests", status: "existing", priority: "P1", category: "insect", answer: "Stink bugs, Asian lady beetles, boxelder bugs, cluster flies, and conifer seed bugs invade CNY homes every fall. Our timed exterior program keeps them out.", pestsTreated: ["brown marmorated stink bug", "Asian lady beetle", "boxelder bug", "cluster fly"], relatedPests: ["brown-marmorated-stink-bug", "asian-lady-beetle", "boxelder-bug"], faqs: [], warrantyNote: standardWarranty, rationale: "Fall campaign anchor. High-volume seasonal cluster nobody local packages." },
  { slug: "wildlife-removal", name: "Wildlife Removal", shortName: "Wildlife", status: "existing", priority: "P2", category: "wildlife", answer: "We remove nuisance wildlife — squirrels, raccoons, skunks, and woodchucks — and secure your home against re-entry.", pestsTreated: ["gray squirrel", "raccoon", "skunk", "woodchuck"], relatedPests: ["gray-squirrel", "raccoon", "skunk", "woodchuck"], faqs: [], warrantyNote: standardWarranty, rationale: "Hub for squirrel/raccoon/skunk/woodchuck." },
  { slug: "squirrel-removal", name: "Squirrel Removal", shortName: "Squirrels", status: "existing", priority: "P2", category: "wildlife", answer: "We remove squirrels from attics and soffits and seal chew-damaged entry points — including the wiring risk insurers care about.", pestsTreated: ["gray squirrel", "flying squirrel"], relatedPests: ["gray-squirrel", "flying-squirrel"], faqs: [], warrantyNote: standardWarranty, rationale: "Attic entry, chew damage, insurance angle." },
  { slug: "raccoon-removal", name: "Raccoon Removal", shortName: "Raccoons", status: "existing", priority: "P2", category: "wildlife", answer: "We remove raccoons from attics and chimneys and address the health risks — including raccoon roundworm in contaminated spaces.", pestsTreated: ["raccoon"], relatedPests: ["raccoon"], faqs: [], warrantyNote: standardWarranty, rationale: "Attic/chimney, roundworm health angle." },
  { slug: "mole-vole-control", name: "Mole & Vole Control", shortName: "Moles & Voles", status: "existing", priority: "P2", category: "wildlife", answer: "We control the moles and voles that tunnel and damage CNY lawns, with programs timed to spring and fall activity.", pestsTreated: ["meadow vole", "eastern mole"], relatedPests: ["meadow-vole"], faqs: [], warrantyNote: standardWarranty, rationale: "Lawn damage, spring/fall demand (Burke actively sells this)." },
  { slug: "flea-control", name: "Flea Control", shortName: "Fleas", status: "existing", priority: "P2", category: "insect", answer: "We break the flea life cycle in pet households with treatment timed to catch eggs, larvae, and adults.", pestsTreated: ["cat flea"], relatedPests: [], faqs: [], warrantyNote: standardWarranty, rationale: "Pet households; pairs with the tick page." },
  { slug: "wasp-hornet-nest-removal", name: "Wasp & Hornet Nest Removal", shortName: "Nest Removal", status: "existing", priority: "P2", category: "insect", answer: "Same-day removal of wasp and hornet nests, including bald-faced hornet and yellowjacket nests in walls and the ground.", pestsTreated: ["bald-faced hornet", "yellowjacket", "paper wasp"], relatedPests: ["bald-faced-hornet", "yellowjacket"], faqs: [], warrantyNote: standardWarranty, rationale: "Splits urgent intent out of the general stinging-insects page." },
  { slug: "termite-control", name: "Termite Control", shortName: "Termites", status: "existing", priority: "P3", category: "wood-destroying", answer: "We inspect for and treat eastern subterranean termites — lower pressure in CNY than the South, but a serious structural risk when present.", pestsTreated: ["eastern subterranean termite"], relatedPests: ["eastern-subterranean-termite"], faqs: [], warrantyNote: standardWarranty, rationale: "Lower CNY pressure but high-value search; feeds the WDI page." },
  { slug: "wdi-inspection-real-estate", name: "WDI / Real Estate Pest Inspection", shortName: "WDI Inspection", status: "existing", priority: "P1", category: "inspection", answer: "We provide NPMA-33 wood-destroying-insect inspections for home closings — the report realtors, buyers, and lenders need. No independent in the radius has a page for this.", pestsTreated: ["termite", "carpenter ant", "powderpost beetle", "old house borer"], relatedPests: ["eastern-subterranean-termite", "carpenter-ant"], faqs: [], warrantyNote: standardWarranty, rationale: "NPMA-33 closings inspection. Realtor/lender referral channel. Zero local competition." },
  { slug: "attic-restoration-insulation", name: "Attic Restoration & Insulation", shortName: "Attic Restoration", status: "existing", priority: "P3", category: "wildlife", answer: "After a bat or rodent job, we clean, decontaminate, and restore attic insulation — the highest-ticket add-on and the finish every exclusion job needs.", pestsTreated: [], relatedPests: [], faqs: [], warrantyNote: standardWarranty, rationale: "Highest-ticket add-on; follows every bat/rodent exclusion." },
];

// All routed/live services (Phase 0 launched 8; Phase 2 activated 14 more → 22).
export const existingServices = services.filter((s) => s.status === "existing");
export const routedServices = existingServices;
export const plannedServices = services.filter((s) => s.status === "planned");
export const getService = (slug: string) => services.find((s) => s.slug === slug);

/**
 * Curated core (the original 8) — used in the header dropdown, footer, and homepage grid so
 * those stay uncluttered. The full 22 live on the /services index and in the quote-form selector.
 */
export const coreServiceSlugs = [
  "general-pest",
  "rodent-control",
  "ant-control",
  "bed-bug",
  "roach-control",
  "stinging-insects",
  "mosquito-tick",
  "spider-control",
] as const;
export const coreServices = coreServiceSlugs
  .map((slug) => getService(slug))
  .filter((s): s is Service => Boolean(s));

// Category grouping for the /services index page.
export const serviceCategories: { key: Service["category"]; label: string }[] = [
  { key: "general", label: "General & preventative" },
  { key: "insect", label: "Insects" },
  { key: "rodent", label: "Rodents" },
  { key: "wildlife", label: "Wildlife & exclusion" },
  { key: "wood-destroying", label: "Wood-destroying" },
  { key: "inspection", label: "Inspections" },
];
export const servicesByCategory = (cat: Service["category"]) =>
  routedServices.filter((s) => s.category === cat);
