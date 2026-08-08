/**
 * neighborhood-content.ts — Phase 4 Ithaca neighborhood tier (audit §8.4).
 * The NYE hyperlocal tactic scaled to a small city; nobody in CNY is doing this.
 * Collegetown and Cornell Heights carry the highest commercial value (dense student rentals).
 * Keyed by the neighborhood slugs in geo.ts (ithacaNeighborhoods).
 */

export interface NeighborhoodContent {
  slug: string;
  intro: string[];
  local: string[]; // genuine local specifics
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

export const neighborhoodContent: Record<string, NeighborhoodContent> = {
  collegetown: {
    slug: "collegetown",
    intro: [
      "Collegetown is the densest, most pest-active neighborhood in Ithaca — and the one where fast, discreet, reliable pest control matters most. Packed with off-campus student rentals right against the Cornell campus, it combines aging housing, constant tenant turnover, and shared-wall apartment buildings, which is a recipe for exactly the pests that spread fastest.",
    ],
    local: [
      "Bed bugs are the defining Collegetown pest. The mix of dense multi-unit rentals, heavy August and May move cycles, secondhand furniture, and a steady flow of travelers moves bed bugs from unit to unit and building to building. Treating one apartment while the one next door is infested just pushes them back and forth, so coordinated, documented treatment across units is what actually works here.",
      "Cockroaches and mice run a close second. German cockroaches spread through the shared plumbing chases and walls of older Collegetown apartment buildings, and mice pour into the aging housing stock every fall. Both are health and habitability issues, and under New York's Warranty of Habitability (RPL §235-b), landlords are generally responsible for addressing them.",
      "For Collegetown landlords and property managers, pest problems are a business and legal reality, not an occasional nuisance. We provide discreet service that keeps tenants comfortable and units rentable, coordinate across buildings, and document treatment for habitability purposes — the kind of ongoing, professional coverage the neighborhood's rental density demands.",
    ],
    faqs: [
      { q: "Do you handle bed bugs in Collegetown student apartments?", a: "Yes — it's one of our most common jobs in the neighborhood. We treat discreetly, coordinate across connected units and with landlords, and provide the follow-up and documentation bed bugs and New York habitability law require." },
      { q: "I'm a Collegetown landlord — can you cover multiple buildings?", a: "Yes. We work with Collegetown property managers on coordinated, documented pest control across units and buildings, which is the only approach that actually keeps bed bugs, roaches, and mice from cycling back." },
      { q: "As a tenant, what should I do if I find pests?", a: "Report it to your landlord in writing right away — in New York, landlords are generally responsible for infestations under RPL §235-b. Early reporting matters because pests spread fast in dense Collegetown buildings." },
    ],
    relatedServices: ["bed-bug", "roach-control", "rodent-control"],
  },
  "cornell-heights": {
    slug: "cornell-heights",
    intro: [
      "Cornell Heights, the historic district just north of campus, blends grand older homes with a heavy concentration of student rentals and Greek houses. That combination — beautiful but aging housing plus dense, high-turnover occupancy — makes it one of Ithaca's highest-value neighborhoods for professional pest control.",
    ],
    local: [
      "The neighborhood's large, older houses are prone to mice, carpenter ants, and the overwintering pests that exploit historic construction, while the student-rental and Greek-house density brings the same bed bug and cockroach pressure as Collegetown, spread by move-in/move-out turnover.",
      "Multi-tenant houses raise the stakes: a bed bug or roach problem in one room or unit can move through a whole house, and shared responsibility makes prompt, coordinated treatment essential. Under New York's Warranty of Habitability, landlords carry responsibility for infestations.",
      "We serve Cornell Heights landlords, property managers, and Greek organizations with discreet, documented pest control — coordinated across a building, timed around the academic calendar, and built to protect both the historic homes and the students living in them.",
    ],
    faqs: [
      { q: "Do you work with Greek houses and large student rentals in Cornell Heights?", a: "Yes. Large multi-tenant houses need coordinated, whole-building treatment and documentation, which is exactly how we approach bed bugs, roaches, and mice in the neighborhood." },
      { q: "Are the older Cornell Heights homes prone to specific pests?", a: "Yes — the historic housing stock invites mice, carpenter ants, and fall overwintering pests, on top of the bed bug and roach pressure that comes with dense student occupancy." },
      { q: "How quickly can you respond in Cornell Heights?", a: "Cornell Heights is minutes from our core Ithaca service area, so response is fast, with priority for urgent bed-bug and infestation issues." },
    ],
    relatedServices: ["bed-bug", "roach-control", "rodent-control"],
  },
  "fall-creek": {
    slug: "fall-creek",
    intro: [
      "Fall Creek is one of Ithaca's most characterful neighborhoods — a walkable grid of older homes north of downtown, a mix of owner-occupied houses and rentals. Its charming but aging housing stock shapes a familiar set of pest pressures.",
    ],
    local: [
      "Fall Creek's older homes, many pre-war, are prone to mice entering through fieldstone-foundation gaps each fall, and to carpenter ants drawn to moisture-prone wood around porches, sills, and roof edges.",
      "The neighborhood's rental units see the bed bug and roach pressure common to Ithaca's rental market, while the mature trees and older construction bring the fall overwintering-pest invasion — cluster flies and stink bugs on sunny walls.",
      "We help Fall Creek homeowners and landlords with both the reactive problems and the proactive sealing that keeps older homes comfortable, from rodent exclusion to timed fall barriers.",
    ],
    faqs: [
      { q: "Why does my older Fall Creek home get mice every fall?", a: "Pre-war homes have fieldstone foundations and settling gaps that mice exploit as it cools. The lasting fix is rodent exclusion — sealing those entry points — combined with trapping." },
      { q: "Do you treat carpenter ants in Fall Creek?", a: "Yes. The neighborhood's older, moisture-prone wood is classic carpenter-ant territory. We locate the nests and treat the colony, not just the visible ants." },
    ],
    relatedServices: ["rodent-control", "carpenter-ant-control", "bed-bug"],
  },
  "belle-sherman": {
    slug: "belle-sherman",
    intro: [
      "Belle Sherman, on Ithaca's East Hill near campus, is a leafy neighborhood of established homes popular with faculty and families, with a share of student rentals mixed in. Its older housing and mature landscape drive its pest profile.",
    ],
    local: [
      "Established Belle Sherman homes see carpenter ants in moisture-prone older wood and mice pushing indoors each fall, while the mature tree canopy adds squirrel and overwintering-pest pressure.",
      "The rental units near campus carry the usual Ithaca bed bug and roach considerations, and wooded lots on the hill bring occasional wildlife and stinging-insect issues.",
      "We serve Belle Sherman with the full range of residential pest control, emphasizing the sealing and seasonal timing that keep established East Hill homes protected.",
    ],
    faqs: [
      { q: "Do you handle squirrels and wildlife in Belle Sherman?", a: "Yes. The neighborhood's mature tree canopy brings squirrels to attics and soffits. We handle removal plus chew-resistant sealing so they can't return." },
      { q: "What pests are most common on East Hill?", a: "Carpenter ants, fall mice, squirrels, and overwintering pests, alongside the bed bug and roach pressure that comes with nearby student rentals." },
    ],
    relatedServices: ["carpenter-ant-control", "squirrel-removal", "rodent-control"],
  },
  northside: {
    slug: "northside",
    intro: [
      "Northside, between downtown and the waterfront, is a diverse Ithaca neighborhood of older homes, apartments, and mixed housing. Its aging stock and rental density shape everyday pest pressures.",
    ],
    local: [
      "Northside's older homes and apartments see mice each fall and cockroaches in denser multi-unit buildings, along with the bed bug pressure common across Ithaca's rental housing.",
      "Proximity to the waterfront and Cascadilla Creek can add moisture-related pests — occasional invaders like centipedes and silverfish in damp basements.",
      "We help Northside residents and landlords with treatment and the exclusion and moisture guidance that address the neighborhood's older, sometimes damp housing.",
    ],
    faqs: [
      { q: "Do you treat apartment buildings in Northside?", a: "Yes. Multi-unit roach and bed bug work is most effective treated across connected units, and we coordinate with owners and managers to do it right." },
      { q: "My Northside basement gets damp and buggy — can you help?", a: "Yes. Damp basements draw centipedes, silverfish, and other moisture pests. We treat them and point out the moisture conditions to correct." },
    ],
    relatedServices: ["rodent-control", "roach-control", "bed-bug"],
  },
  southside: {
    slug: "southside",
    intro: [
      "Southside is a close-knit Ithaca neighborhood just south of downtown, with older homes and a strong residential character. Its housing age drives typical urban-Ithaca pest pressures.",
    ],
    local: [
      "Southside's older homes see mice entering through foundation gaps each fall and carpenter ants in moisture-prone wood, along with the occasional invaders that come with older basements.",
      "Rental units carry the bed bug and roach considerations common to Ithaca, and the neighborhood's mature trees add overwintering-pest and occasional wildlife pressure.",
      "We serve Southside with residential treatment and the exclusion work that keeps older homes sealed against seasonal invaders.",
    ],
    faqs: [
      { q: "Do you serve the Southside neighborhood?", a: "Yes. Southside is within our core Ithaca service area, with fast response and the full range of residential pest services." },
      { q: "How do I keep mice out of my older Southside home?", a: "Rodent exclusion — sealing the foundation, sill, and utility-line gaps mice use — combined with trapping is the durable fix for older homes." },
    ],
    relatedServices: ["rodent-control", "carpenter-ant-control", "bed-bug"],
  },
  "south-hill": {
    slug: "south-hill",
    intro: [
      "South Hill rises above downtown toward Ithaca College, mixing established homes with a heavy concentration of IC student rentals. That blend gives it a pest profile much like the Cornell neighborhoods.",
    ],
    local: [
      "Ithaca College rentals drive bed bug, cockroach, and mouse pressure on South Hill, spread by the same move-in/move-out turnover that affects Collegetown, and governed by the same New York habitability rules.",
      "The neighborhood's established homes and wooded, hilly lots add carpenter ants, fall mice, squirrels, and overwintering pests.",
      "We serve South Hill landlords, property managers, and homeowners with discreet, coordinated, documented pest control timed around the academic calendar.",
    ],
    faqs: [
      { q: "Do you handle Ithaca College student rentals on South Hill?", a: "Yes. IC off-campus rentals see the same bed bug, roach, and mouse pressure as the Cornell side, and we provide coordinated, documented treatment for landlords and tenants." },
      { q: "When is the best time to treat student rentals?", a: "Around the move-out and move-in windows (May and August), when bed bugs and other pests spread most, plus fall for rodents. We schedule around the academic calendar." },
    ],
    relatedServices: ["bed-bug", "roach-control", "rodent-control"],
  },
  "east-hill": {
    slug: "east-hill",
    intro: [
      "East Hill, climbing from downtown toward Cornell, mixes historic homes, faculty housing, and student rentals. Its established housing and campus proximity shape its pest pressures.",
    ],
    local: [
      "East Hill's older and historic homes are prone to carpenter ants, fall mice, and overwintering pests, while the mature tree canopy adds squirrels and wildlife.",
      "Rentals near campus carry Ithaca's typical bed bug and roach pressure, spread by student turnover.",
      "We serve East Hill with residential and rental pest control, emphasizing exclusion and seasonal timing for the neighborhood's established homes.",
    ],
    faqs: [
      { q: "What pests are common on East Hill?", a: "Carpenter ants, fall mice, squirrels, and overwintering pests in the older homes, plus bed bugs and roaches in the student rentals near campus." },
      { q: "Do you handle wildlife in East Hill attics?", a: "Yes. Mature trees give squirrels and other wildlife roof access. We remove them and seal entries with chew-resistant materials." },
    ],
    relatedServices: ["carpenter-ant-control", "squirrel-removal", "bed-bug"],
  },
  "west-hill": {
    slug: "west-hill",
    intro: [
      "West Hill, rising on the west side of Cayuga Lake's inlet, is a quieter Ithaca neighborhood of established homes and newer development with a more residential, less student-driven character.",
    ],
    local: [
      "West Hill homes see fall mice and carpenter ants like the rest of Ithaca, and the neighborhood's wooded, elevated lots add squirrel, wildlife, and overwintering-pest pressure.",
      "Its more open, greener setting means cluster flies and overwintering invaders can be a notable fall issue, arriving from surrounding fields and woods.",
      "We serve West Hill homeowners with residential treatment, exclusion, and timed fall barriers for the seasonal invaders.",
    ],
    faqs: [
      { q: "Do you serve West Hill?", a: "Yes. West Hill is within our core Ithaca service area, with the full range of residential pest services." },
      { q: "Why do I get cluster flies on West Hill?", a: "The neighborhood's greener, more open setting is prime cluster-fly territory. A timed late-summer exterior barrier stops them before they get inside." },
    ],
    relatedServices: ["rodent-control", "cluster-fly-control", "squirrel-removal"],
  },
  "downtown-commons": {
    slug: "downtown-commons",
    intro: [
      "Downtown Ithaca and The Commons are the city's commercial and residential core — restaurants, shops, offices, and apartments packed into older mixed-use buildings. That density makes pest control here as much a commercial concern as a residential one.",
    ],
    local: [
      "The Commons' restaurants and food-service businesses need discreet, inspection-ready pest control — cockroaches, small flies, and rodents are the pests that threaten health ratings, and the older mixed-use buildings make exclusion and sanitation essential.",
      "Downtown apartments above and around the commercial spaces carry bed bug, roach, and mouse pressure, often connected to the businesses below through shared structures.",
      "We provide both commercial pest control for downtown businesses — scheduled around your hours, documented for inspections — and residential service for the apartments, treating the mixed-use core as the connected environment it is.",
    ],
    faqs: [
      { q: "Do you provide commercial pest control on The Commons?", a: "Yes. We serve downtown restaurants, shops, and offices with discreet, documented service scheduled around business hours and built for health-inspection readiness." },
      { q: "Are pests in a downtown apartment connected to the businesses below?", a: "Often, yes. In mixed-use buildings, roaches and rodents move between commercial and residential spaces, so treating the building as a whole is most effective." },
    ],
    relatedServices: ["commercial-pest-control", "roach-control", "rodent-control"],
  },
  "forest-home": {
    slug: "forest-home",
    intro: [
      "Forest Home is a small, wooded neighborhood tucked along Fall Creek beside the Cornell campus — historic homes in a green, creek-side setting. Its natural surroundings shape a distinctive pest profile.",
    ],
    local: [
      "Forest Home's wooded, creek-side setting brings strong wildlife pressure — squirrels, raccoons, and bats around older homes — plus the fall overwintering-pest invasion from the surrounding greenery.",
      "The historic homes see carpenter ants in moisture-prone wood and fall mice, and the damp, wooded environment adds occasional invaders and moisture pests.",
      "We serve Forest Home with wildlife removal and exclusion, carpenter-ant and rodent work, and the timed fall barriers the wooded setting calls for.",
    ],
    faqs: [
      { q: "Do you handle bats and wildlife in Forest Home?", a: "Yes. The wooded, creek-side setting makes bats, squirrels, and raccoons common in older homes. We handle humane, legal removal and exclusion, including New York's bat-season rules." },
      { q: "Why are overwintering pests bad in Forest Home?", a: "The green, wooded surroundings produce heavy fall cluster-fly and stink-bug pressure. A timed exterior barrier keeps them out of the historic homes." },
    ],
    relatedServices: ["bat-removal-exclusion", "wildlife-removal", "carpenter-ant-control"],
  },
  "coddington-road": {
    slug: "coddington-road",
    intro: [
      "The Coddington Road corridor climbs South Hill toward Ithaca College, mixing student rentals with established and rural-edge homes. Its blend of campus-adjacent rentals and wooded lots shapes its pest pressures.",
    ],
    local: [
      "Coddington Road's IC student rentals carry bed bug, roach, and mouse pressure, while the corridor's wooded and rural-edge homes add carpenter ants, fall mice, squirrels, and overwintering pests.",
      "The greener, hillier setting means cluster flies and wildlife are more prominent than in the city core.",
      "We serve the Coddington Road corridor with rental and residential pest control, exclusion, and seasonal barriers.",
    ],
    faqs: [
      { q: "Do you serve student rentals on Coddington Road?", a: "Yes. The corridor's Ithaca College rentals get the same coordinated, documented bed bug, roach, and rodent service we provide across the student-housing market." },
      { q: "Do wooded Coddington Road homes get more wildlife?", a: "Yes. The wooded, rural-edge setting brings more squirrels, wildlife, and overwintering pests, all of which we handle." },
    ],
    relatedServices: ["bed-bug", "cluster-fly-control", "rodent-control"],
  },
  "danby-road": {
    slug: "danby-road",
    intro: [
      "The Danby Road corridor (Route 96B) runs south from Ithaca College toward Danby, blending campus-adjacent rentals with increasingly rural homes. Its transition from student housing to countryside gives it a mixed pest profile.",
    ],
    local: [
      "Nearer campus, Danby Road's rentals carry the usual Ithaca bed bug, roach, and mouse pressure; farther out, the rural homes see heavy fall cluster-fly, overwintering-pest, and rodent activity from surrounding fields and woods.",
      "Wooded and rural-edge lots along the corridor bring wildlife — squirrels, raccoons, and bats around older structures.",
      "We serve the full Danby Road corridor, from student rentals to rural homes, with the appropriate mix of coordinated rental service, exclusion, and seasonal barriers.",
    ],
    faqs: [
      { q: "Do you serve both the student and rural ends of Danby Road?", a: "Yes. We handle campus-adjacent rentals and the rural homes farther out, matching the service to each — coordinated rental treatment near campus, exclusion and fall barriers in the countryside." },
      { q: "Why do rural Danby Road homes get so many fall invaders?", a: "The surrounding fields and woods produce heavy cluster-fly and overwintering-pest pressure. A timed exterior barrier in late summer is the fix." },
    ],
    relatedServices: ["cluster-fly-control", "bed-bug", "wildlife-removal"],
  },
  "cayuga-heights-village": {
    slug: "cayuga-heights-village",
    intro: [
      "The Village of Cayuga Heights, just north of Ithaca, is an affluent, wooded community of established homes under a mature tree canopy. Its housing and landscape drive a wildlife- and carpenter-ant-heavy pest profile.",
    ],
    local: [
      "Cayuga Heights' large, established homes and dense tree canopy make carpenter ants and squirrels defining pests, with mice and overwintering invaders pushing in each fall.",
      "The village is well known locally for its deer, and the wooded setting brings tick pressure to yards along with bats and other wildlife around older homes.",
      "We serve Cayuga Heights with wildlife removal and exclusion, carpenter-ant control, rodent exclusion, and tick-focused yard programs suited to the wooded, established setting.",
    ],
    faqs: [
      { q: "Do you handle carpenter ants and squirrels in Cayuga Heights?", a: "Yes — both are common given the village's mature trees and established homes. We treat carpenter-ant colonies at the source and handle squirrel removal with chew-resistant sealing." },
      { q: "Is tick treatment worth it in Cayuga Heights?", a: "Often, yes. The wooded setting and local deer bring tick pressure to yards. A seasonal treatment focused on the leaf-litter and tree-line zones reduces Lyme risk where your family spends time." },
    ],
    relatedServices: ["carpenter-ant-control", "squirrel-removal", "mosquito-tick"],
  },
};

export const getNeighborhoodContent = (slug: string) => neighborhoodContent[slug];
export const neighborhoodSlugs = Object.keys(neighborhoodContent);
