/**
 * money-pages.ts — Tier 4 service × geo money pages (audit §8.5).
 * Hand-written combinations of a service and a priority market. Highest commercial intent.
 * Rendered at /services/[service]/[town], combining this unique local copy with the service's
 * answer/FAQ (from services data) and the town (from geo). Only these 18 combos are built.
 */

export interface MoneyPage {
  serviceSlug: string;
  townSlug: string;
  intro: string[];
  whyHere: string[];
}

export const moneyPages: MoneyPage[] = [
  // Bed bug
  {
    serviceSlug: "bed-bug",
    townSlug: "ithaca",
    intro: [
      "Bed bug control in Ithaca is one of our most-requested services, and for good reason. The city's dense off-campus student rentals around Cornell and Ithaca College, constant tenant turnover, and steady flow of travelers make bed bugs a recurring reality — and one where discretion, speed, and coordination across units all matter.",
    ],
    whyHere: [
      "We treat bed bugs discreetly in Ithaca apartments, houses, and multi-unit buildings, with the required follow-up to catch eggs that hatch after the first visit.",
      "In rentals, we coordinate across connected units and with landlords, and document treatment for New York habitability purposes (RPL §235-b).",
      "We schedule around the August and May move cycles, when bed bugs spread fastest through Ithaca's student housing.",
    ],
  },
  {
    serviceSlug: "bed-bug",
    townSlug: "watkins-glen",
    intro: [
      "Bed bug control in Watkins Glen is as much a hospitality service as a residential one. With the Seneca Lake wine trail, hotels, B&Bs, and a large short-term-rental inventory, a single bed bug incident can damage guest reviews and cost future bookings — so protection and fast, discreet response are essential here.",
    ],
    whyHere: [
      "We provide discreet bed bug treatment and documentation for Watkins Glen lodging, short-term rentals, and homes, protecting both guests and your reputation.",
      "For hospitality properties, we offer fast response and follow-up so a guest report doesn't become a review-ending problem.",
      "Every treatment includes the follow-up visit bed bugs require, because a single treatment doesn't end an infestation.",
    ],
  },
  {
    serviceSlug: "bed-bug",
    townSlug: "elmira",
    intro: [
      "Bed bug control in Elmira addresses one of the city's most persistent pest problems. Elmira's older, denser housing — including a substantial stock of multi-unit rentals — sees steady bed bug activity, and a competitively weak local market has left residents with fewer strong options. We bring full-depth treatment to the area.",
    ],
    whyHere: [
      "We treat bed bugs discreetly in Elmira apartments, rentals, and homes, with the follow-up visit needed to break the egg cycle.",
      "For renters, we document the infestation and treatment for landlord and habitability purposes under New York law.",
      "In multi-unit buildings, we coordinate treatment across connected units so bed bugs can't simply migrate and return.",
    ],
  },
  {
    serviceSlug: "bed-bug",
    townSlug: "cortland",
    intro: [
      "Bed bug control in Cortland serves a college-town market much like Ithaca's. SUNY Cortland rentals and older city housing see bed bug spread through tenant turnover, and prompt, coordinated, documented treatment is what keeps a single infestation from moving through a building.",
    ],
    whyHere: [
      "We treat bed bugs discreetly in Cortland student rentals and homes, with the required follow-up.",
      "We coordinate across units and with landlords and property managers, and document treatment for habitability needs.",
      "We schedule around the college move cycles, when bed bugs spread most.",
    ],
  },

  // Rodent
  {
    serviceSlug: "rodent-control",
    townSlug: "ithaca",
    intro: [
      "Rodent control in Ithaca is a fall ritual for many homeowners — and it doesn't have to be. The city's pre-war and Victorian housing stock, with fieldstone foundations and settling gaps, lets mice in every autumn. The lasting fix isn't just trapping; it's exclusion sealing that closes the entry points for good.",
    ],
    whyHere: [
      "We clear the active mouse population and seal the entry points older Ithaca homes are full of — the combination that ends the annual reinfestation.",
      "We handle both single-family homes and rentals, documenting service for landlords where needed.",
      "Sealing also tightens older homes against drafts, a real benefit in Ithaca winters.",
    ],
  },
  {
    serviceSlug: "rodent-control",
    townSlug: "watkins-glen",
    intro: [
      "Rodent control in Watkins Glen covers both village homes and the hospitality properties along Seneca Lake. Mice push into older buildings each fall, and for wineries, restaurants, and lodging, a rodent problem is also a sanitation and inspection concern.",
    ],
    whyHere: [
      "We handle rodent control for Watkins Glen homes, wineries, restaurants, and lodging, with discreet, documented commercial service where needed.",
      "We combine trapping with exclusion sealing so rodents don't keep returning through the same gaps.",
      "For food and hospitality settings, we focus on the exclusion and sanitation that inspections look for.",
    ],
  },
  {
    serviceSlug: "rodent-control",
    townSlug: "elmira",
    intro: [
      "Rodent control in Elmira addresses the mice that push into the city's older, denser housing every fall. Aging urban homes and multi-unit rentals offer plenty of entry points, and exclusion sealing is what turns a recurring problem into a solved one.",
    ],
    whyHere: [
      "We clear the mouse population and seal the gaps older Elmira homes and rentals are full of.",
      "For rental housing, we document service for landlord and habitability purposes.",
      "In multi-unit buildings, we address the shared entry points that let rodents move between units.",
    ],
  },
  {
    serviceSlug: "rodent-control",
    townSlug: "cortland",
    intro: [
      "Rodent control in Cortland covers college rentals, older city homes, and dairy-country properties. Mice move indoors each fall through the gaps typical of older and rural construction, and exclusion sealing is the durable fix.",
    ],
    whyHere: [
      "We combine trapping with exclusion sealing for Cortland homes, rentals, and farm properties.",
      "For SUNY Cortland rentals, we provide coordinated, documented service for landlords.",
      "On rural properties with constant pressure, we can add seasonal monitoring.",
    ],
  },

  // Carpenter ant
  {
    serviceSlug: "carpenter-ant-control",
    townSlug: "ithaca",
    intro: [
      "Carpenter ant control in Ithaca protects the city's older homes from the ant most likely to damage them. Ithaca's pre-war and Victorian housing, with its moisture-prone wood around porches, sills, and roof edges, is prime carpenter-ant territory — and a generic ant spray won't touch the colony.",
    ],
    whyHere: [
      "We locate the parent and satellite nests in and around older Ithaca homes and treat the colony at the source.",
      "We point out the moisture conditions — leaks, gutters, wood-to-soil contact — that draw carpenter ants to older homes.",
      "Treatment protects the structural wood that carpenter ants weaken over time.",
    ],
  },
  {
    serviceSlug: "carpenter-ant-control",
    townSlug: "cortland",
    intro: [
      "Carpenter ant control in Cortland handles the region's defining wood-damaging ant. The county's historic village homes — especially in and around Homer and Cortland — offer the moisture-softened wood carpenter ants seek, and treating the colony rather than the trail is what actually solves it.",
    ],
    whyHere: [
      "We trace and treat the parent and satellite nests in older Cortland-area homes.",
      "We correct the moisture conditions that invite carpenter ants back.",
      "Our depth of service gives Cortland residents a content-rich, specialized alternative in a competitive market.",
    ],
  },
  {
    serviceSlug: "carpenter-ant-control",
    townSlug: "watkins-glen",
    intro: [
      "Carpenter ant control in Watkins Glen protects village and lakeside homes from the ant that damages wood. Older construction and the damp lakeside environment give carpenter ants the moisture-softened wood they nest in.",
    ],
    whyHere: [
      "We locate and treat carpenter-ant nests in Watkins Glen homes and lakeside properties.",
      "We address the moisture that draws them, from leaks to lakeside dampness.",
      "Treatment protects structural wood before an established colony causes damage.",
    ],
  },

  // Cluster fly
  {
    serviceSlug: "cluster-fly-control",
    townSlug: "watkins-glen",
    intro: [
      "Cluster fly control in Watkins Glen tackles the defining fall invader of the Finger Lakes. The lakeside and rural setting around Watkins Glen is prime cluster-fly habitat, and both homes and hospitality properties fill with these slow fall flies unless the exterior is treated in time.",
    ],
    whyHere: [
      "We apply a timed late-summer exterior barrier to Watkins Glen homes and businesses, before the flies move in.",
      "For lodging and tasting rooms, we keep cluster flies from becoming a guest-facing nuisance.",
      "We seal the entry points that let cluster flies into walls and attics.",
    ],
  },
  {
    serviceSlug: "cluster-fly-control",
    townSlug: "cortland",
    intro: [
      "Cluster fly control in Cortland gets ahead of the county's heavy fall invasion. Cortland's dairy-country fields produce cluster flies in force, and they overwinter in village and rural homes alike — a problem solved by timing, not by spraying the flies you see indoors.",
    ],
    whyHere: [
      "We apply a timed exterior barrier to Cortland-area homes in late summer, before the invasion.",
      "We seal the gaps cluster flies use to get into walls and attics.",
      "We can bundle cluster fly service with overwintering-pest treatment, since they invade together.",
    ],
  },
  {
    serviceSlug: "cluster-fly-control",
    townSlug: "ithaca",
    intro: [
      "Cluster fly control in Ithaca addresses a problem that surprises many city and edge-of-town homeowners each fall. Ithaca's greener neighborhoods and rural edges produce cluster flies that overwinter in walls and reappear on upstairs windows — and the fix is a timed exterior barrier, not indoor spray.",
    ],
    whyHere: [
      "We treat the exterior of Ithaca-area homes in late summer, ahead of the fall invasion.",
      "We seal the window, soffit, and utility gaps cluster flies use to get inside.",
      "We handle cluster flies alongside the other overwintering pests that invade on the same schedule.",
    ],
  },

  // Bat exclusion
  {
    serviceSlug: "bat-removal-exclusion",
    townSlug: "ithaca",
    intro: [
      "Bat removal and exclusion in Ithaca is the highest-value wildlife service in the area — and the most regulated. Ithaca's older homes and wooded neighborhoods, from East Hill to Forest Home, give little brown and big brown bats plenty of roosting sites, and getting them out legally and humanely takes the right approach and timing.",
    ],
    whyHere: [
      "We perform humane, legal bat exclusion on Ithaca homes, working within New York's maternity-season restriction (roughly May 1 to mid-August).",
      "We seal every entry point — bats exploit any gap you miss — and clean up guano where it has accumulated.",
      "We directly contest the wildlife-only incumbents by pairing bat work with full general-pest service.",
    ],
  },
  {
    serviceSlug: "bat-removal-exclusion",
    townSlug: "watkins-glen",
    intro: [
      "Bat removal and exclusion in Watkins Glen protects village, lakeside, and hospitality properties. Older buildings around Seneca Lake make good bat roosts, and for lodging especially, a bat problem is both a guest and a health concern that needs humane, legal resolution.",
    ],
    whyHere: [
      "We perform humane, legal bat exclusion on Watkins Glen homes and lodging, timed around New York's maternity-season rules.",
      "We seal all entry points and handle guano cleanup and decontamination where needed.",
      "For hospitality properties, we resolve bat issues discreetly to protect the guest experience.",
    ],
  },

  // Roach
  {
    serviceSlug: "roach-control",
    townSlug: "ithaca",
    intro: [
      "Roach control in Ithaca targets the German cockroach infestations that spread through the city's older multi-unit rentals and student housing. Roaches move between units through shared walls and plumbing, so coordinated treatment and follow-up are what actually eliminate them.",
    ],
    whyHere: [
      "We eliminate roaches in Ithaca apartments and houses with gel baiting and a follow-up to break the breeding cycle.",
      "In multi-unit buildings, we coordinate across connected units so roaches can't just move next door and return.",
      "For rentals, we document treatment for landlord and habitability purposes.",
    ],
  },
  {
    serviceSlug: "roach-control",
    townSlug: "elmira",
    intro: [
      "Roach control in Elmira handles the cockroach pressure that comes with the city's older, denser housing and multi-unit rentals. German cockroaches spread fast through shared structures, and thorough baiting plus follow-up is the reliable path to eliminating them.",
    ],
    whyHere: [
      "We eliminate roaches in Elmira rentals and homes with professional baiting and the necessary follow-up.",
      "We coordinate multi-unit treatment so roaches don't cycle back between apartments.",
      "For renters, we document the work for landlord and habitability purposes.",
    ],
  },
];

export const getMoneyPage = (serviceSlug: string, townSlug: string) =>
  moneyPages.find((m) => m.serviceSlug === serviceSlug && m.townSlug === townSlug);
export const moneyPageParams = moneyPages.map((m) => ({
  service: m.serviceSlug,
  town: m.townSlug,
}));
export const moneyPagesForService = (serviceSlug: string) =>
  moneyPages.filter((m) => m.serviceSlug === serviceSlug);
