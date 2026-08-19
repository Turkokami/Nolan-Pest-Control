/**
 * geo-content.ts — Phase 2 long-form content for county hubs (5) and priority town pages (12).
 * Audit §8.4: "no spun templates — every page needs at least three genuinely local specifics."
 * County pages target ~900+ words; town pages ~700+. Content is specific to each place.
 */

export interface CountyContent {
  slug: string; // matches geo.ts county slug
  intro: string[];
  pressure: string[];
  housing: string[];
  seasonal: string;
  faqs: { q: string; a: string }[];
}

export interface TownContent {
  slug: string; // matches geo.ts town slug
  intro: string[];
  local: string[]; // ≥3 genuinely local specifics, as prose
  faqs: { q: string; a: string }[];
  relatedServices?: string[]; // optional service slugs for cross-linking
}

// County URL helper — audit slug pattern: /pest-control-<county>-county-ny
export const countyUrl = (countySlug: string) => `/pest-control-${countySlug}-county-ny`;
export const countySlugFromParam = (param: string) =>
  param.replace(/^pest-control-/, "").replace(/-county-ny$/, "");
export const townUrl = (townSlug: string) => `/areas/${townSlug}`;

export const countyContent: Record<string, CountyContent> = {
  tompkins: {
    slug: "tompkins",
    intro: [
      "Tompkins County is home base for Nolan Pest Control. Centered on Ithaca and shaped by Cornell University and Ithaca College, it has one of the highest concentrations of rental housing in upstate New York, wrapped around a core of aging Victorian and pre-war homes. That combination — dense rentals, old housing stock, and a steady churn of students and tenants — makes it the most pest-active market in our service area, and the one we know best.",
      "We provide residential and commercial pest control across the whole county, from the student neighborhoods of Collegetown and Cornell Heights to the lakefront homes of Lansing and the rural farmhouses of Dryden, Newfield, and Enfield.",
    ],
    pressure: [
      "The defining pest pressures in Tompkins County follow its housing. Bed bugs and cockroaches concentrate in the dense off-campus rentals, spreading through multi-unit buildings and the heavy August and May move cycles. Mice push into the older housing stock every fall through fieldstone foundations and gaps that decades-old homes are full of. Carpenter ants thrive in the county's wet springs and moisture-prone older wood.",
      "In the rural and lakefront parts of the county, the pressure shifts to cluster flies and overwintering pests — stink bugs and lady beetles massing on sunny walls each fall — plus the wildlife and bat issues that come with wooded lots and older barns and outbuildings.",
    ],
    housing: [
      "Tompkins housing runs from pre-war and Victorian homes near downtown and the campuses, to mid-century and newer subdivisions in Lansing and Cayuga Heights, to rural farmhouses on the county's edges. Older homes mean more entry points and more moisture-related pests; rentals mean recurring, documented service and landlord habitability obligations under New York's Real Property Law §235-b.",
      "As the county where we're based, Tompkins is where our local knowledge runs deepest. We know which Ithaca neighborhoods see the worst bed-bug pressure, why the older homes on the hills get carpenter ants, and how the fall overwintering invasion moves through the rural towns. That block-by-block familiarity is the practical difference between us and a national outfit dispatching from out of the area: we already know what your house is likely doing before we get there, and we can usually get there today.",
    ],
    seasonal:
      "Fall is the pivotal season here: rodents and overwintering pests move indoors, and it's the best time to seal and treat. Spring brings carpenter ants and the student move-out bed-bug spread; summer brings wasps, mosquitoes, and ticks.",
    faqs: [
      { q: "Do you serve all of Tompkins County?", a: "Yes — Ithaca and every surrounding town including Lansing, Dryden, Trumansburg, Newfield, Groton, Freeville, Cayuga Heights, Danby, and Enfield, plus the Ithaca neighborhoods block by block." },
      { q: "I own rental property near the colleges — can you help?", a: "Absolutely. Off-campus rentals around Cornell and Ithaca College are a core part of our work. We handle bed bugs, roaches, and mice with discreet, coordinated, documented service, and help landlords meet their habitability obligations." },
      { q: "Why are pests such a problem in Ithaca's older homes?", a: "Pre-war and Victorian homes have fieldstone foundations, settling gaps, and moisture-prone wood — ideal for mice, carpenter ants, and overwintering pests. Sealing and seasonal treatment are the answer, and both are very doable." },
      { q: "Do you handle bats and wildlife in Tompkins County?", a: "Yes. Wooded lots and older structures make bats, squirrels, and raccoons common here. We handle humane, legal removal and exclusion, including New York's bat maternity-season rules." },
      { q: "How fast can you get to my home?", a: "Tompkins County is our home base, so response times here are our fastest. Call us and we'll get you scheduled quickly, with priority for urgent issues like stinging insects or a bat in the house." },
    ],
  },

  schuyler: {
    slug: "schuyler",
    intro: [
      "Schuyler County, anchored by Watkins Glen at the south end of Seneca Lake, blends small-town and rural residential with one of the densest hospitality corridors in the Finger Lakes. The wine trail, tasting rooms, restaurants, hotels, campgrounds, and a large short-term-rental inventory all create pest-control needs that most companies in the region don't specialize in — and that we do.",
      "We serve homes and businesses across the county, from Watkins Glen and Montour Falls to the rural hamlets of Odessa, Burdett, Tyrone, and Beaver Dams.",
    ],
    pressure: [
      "Schuyler's residential pressure is classic Finger Lakes: cluster flies and overwintering pests invading rural and village homes each fall, mice pushing indoors as it cools, and carpenter ants in older and moisture-prone wood. Lakefront and wooded properties add wildlife and bat concerns.",
      "The county's hospitality sector faces a different set of risks — bed bugs moving through guest lodging and short-term rentals, fruit flies and stored-product pests in tasting rooms and kitchens, and the inspection exposure that comes with serving the public. Getting ahead of those protects both guests and reputations.",
    ],
    housing: [
      "Housing ranges from village homes in Watkins Glen and Montour Falls to lakefront properties and rural farmhouses. The hospitality real estate — tasting rooms, B&Bs, hotels, and STRs — sits alongside the residential stock and shares much of the same seasonal pest pressure.",
      "What sets Schuyler County apart is the hospitality overlay, and it's where our approach really fits. A winery, restaurant, or short-term rental can't afford a pest incident during peak season, and it can't afford disruptive, obvious treatment either. We provide discreet, documented, scheduled service that protects both the guest experience and the health rating — the kind of specialized commercial work most residential-only companies in the radius simply don't offer.",
    ],
    seasonal:
      "Fall drives the cluster-fly and overwintering invasion and rodent entry. The tourism season (late spring through fall) raises bed-bug and food-pest exposure across hospitality properties.",
    faqs: [
      { q: "Do you serve the Seneca Lake wine trail?", a: "Yes. Tasting rooms, wineries, restaurants, hotels, B&Bs, and short-term rentals along the Seneca and Cayuga wine trails are a focus for us — bed bug protection, fruit-fly and stored-product control, and inspection readiness." },
      { q: "What towns in Schuyler County do you cover?", a: "Watkins Glen, Montour Falls, Odessa, Burdett, Tyrone, and Beaver Dams, plus the surrounding rural areas and lakefront properties." },
      { q: "I run a short-term rental near Watkins Glen — can you protect it?", a: "Yes. STRs are bed-bug exposed through guest turnover, and a single incident can wreck your reviews. We provide protection, fast response, and documentation to keep your listing safe." },
      { q: "Why do I get so many flies in the fall out here?", a: "Rural and lakefront Schuyler homes are prime cluster-fly territory — the flies come from the surrounding fields and lawns and overwinter in your walls. A timed exterior barrier in late summer is the fix." },
      { q: "Do you handle wildlife on lakefront properties?", a: "Yes. Wooded and lakefront lots bring squirrels, raccoons, and bats. We handle humane removal and exclusion, including New York's bat-season restrictions." },
    ],
  },

  chemung: {
    slug: "chemung",
    intro: [
      "Chemung County, centered on Elmira with suburban Horseheads and the airport corridor of Big Flats, sits in a competitively weak part of the Finger Lakes — which means residents here have fewer strong local options than they should. Nolan serves the county's homes and businesses with the same depth of service we bring to Ithaca.",
      "Our coverage spans Elmira's older urban neighborhoods, the suburban subdivisions of Horseheads, and the commercial and residential mix of Big Flats.",
    ],
    pressure: [
      "Elmira's older, denser housing carries strong bed-bug and cockroach pressure, especially in multi-unit rentals, along with the mice that move into aging urban homes each fall. Horseheads' suburban housing sees more ants, wasps, and seasonal invaders, while the rural edges of the county bring cluster flies and overwintering pests.",
      "Across the county, the same Finger Lakes fundamentals apply: cold winters that drive rodents and overwintering insects indoors, wet springs that fuel carpenter ants, and wooded areas that bring wildlife and bat issues.",
    ],
    housing: [
      "Chemung housing ranges from older urban homes and multi-unit rentals in Elmira to suburban subdivisions in Horseheads and newer commercial-adjacent development in Big Flats. The older Elmira stock drives the county's bed-bug and rodent demand; the suburbs bring the standard household mix.",
      "Because the Elmira area has had fewer strong independent pest-control options than a city its size warrants, Chemung County residents often settle for national franchises with generic service or small operators with no real depth. We bring something different: full treatment plans, dedicated services for the pests that actually matter here, schema-backed guarantees, and honest, responsive, family-owned service — the same standard we hold in our home county.",
    ],
    seasonal:
      "Fall rodent and overwintering-pest entry is the big seasonal driver, with bed bugs active year-round in Elmira's rental housing and the usual summer wasp and mosquito pressure countywide.",
    faqs: [
      { q: "What areas of Chemung County do you serve?", a: "Elmira, Horseheads, and Big Flats, along with the surrounding neighborhoods and rural areas." },
      { q: "I have bed bugs in an Elmira rental — can you help?", a: "Yes. Elmira's older, denser rental housing sees steady bed-bug activity. We provide discreet, thorough treatment with the required follow-up, and can document it for landlord and habitability purposes under New York law." },
      { q: "Do you treat homes in Horseheads and Big Flats?", a: "Yes — the suburban housing there sees plenty of ants, wasps, mice, and seasonal invaders, and we cover all of it with residential service and preventative plans." },
      { q: "Is there good local pest control in the Elmira area?", a: "The Elmira market has fewer strong independent options than it should, which is exactly why we serve it. You get the same depth of service — full treatment plans, schema-backed guarantees, and specialized services — that we bring to Ithaca." },
      { q: "Do you handle cluster flies in rural Chemung County?", a: "Yes. The county's rural edges get the same fall cluster-fly and overwintering-pest invasion as the rest of the Finger Lakes, and a timed exterior barrier is the effective fix." },
    ],
  },

  cortland: {
    slug: "cortland",
    intro: [
      "Cortland County combines a college town — SUNY Cortland — with historic villages and dairy-country farmland, and the pest work changes completely as you move between them. The city runs on old housing and student rentals; a few miles out it is cluster flies off the hayfields and mice moving in from the barn. We work both, and we treat them as the different jobs they are.",
      "We serve Cortland, the historic village of Homer, McGraw, and the surrounding rural areas with full residential and commercial pest control.",
    ],
    pressure: [
      "Cortland's college rentals drive mouse, cockroach, and cluster-fly activity, much like Ithaca's student housing, with the same move-cycle turnover. The county's older village homes and farmhouses bring carpenter ants, rodents, and heavy fall overwintering-pest pressure from the surrounding fields.",
      "Dairy-country and rural properties add their own mix — rodents around outbuildings, wildlife on wooded lots, and cluster flies in force each September and October.",
    ],
    housing: [
      "Housing spans SUNY Cortland rentals and older city homes, the historic housing stock of Homer, small-village homes in McGraw, and rural farmhouses across the county. College rentals mean turnover and recurring service; rural and older homes mean rodents, carpenter ants, and overwintering pests.",
      "Cortland County has good pest control companies in it, and we are glad to be judged alongside them. What we offer is a family-owned operation that tells you plainly what is wrong, what it will cost, and what will actually fix it — including when the answer is a repair rather than a treatment. We know the county's two distinct halves well: the college rentals and century-old housing in the city, and the dairy-country farms and cluster fly pressure that start a few miles outside it.",
    ],
    seasonal:
      "Fall is dominant — cluster flies and overwintering pests pour in from the farmland, and rodents seek warmth. Spring brings carpenter ants and college move-out turnover.",
    faqs: [
      { q: "What towns in Cortland County do you serve?", a: "Cortland, Homer, and McGraw, plus the surrounding rural and dairy-country areas." },
      { q: "Do you work with SUNY Cortland rentals?", a: "Yes. College rentals see the same mouse, roach, and cluster-fly pressure and turnover as Ithaca's student housing. We provide coordinated, documented service for landlords and property managers." },
      { q: "Why are cluster flies so bad in Cortland County?", a: "The county's dairy-country fields and rural lawns are prime cluster-fly habitat — the flies develop in the soil and overwinter in nearby homes. A late-summer exterior barrier stops them before they get inside." },
      { q: "There's already a big pest company based in Cortland — why choose you?", a: "We compete on depth and specialization: full-length service information, dedicated pages for the pests that actually matter here, schema-backed guarantees, and local knowledge — plus honest, family-owned service." },
      { q: "Do you treat rural farmhouses and outbuildings?", a: "Yes. Rural and dairy-country properties get heavy rodent, wildlife, and overwintering-pest pressure, and we handle all of it, including exclusion sealing for older structures." },
    ],
  },

  tioga: {
    slug: "tioga",
    intro: [
      "Tioga County, centered on the historic river town of Owego along the Susquehanna, is one of the least-served pest-control markets in our area — there's no meaningful local independent here — which makes it a place where reliable, knowledgeable service really stands out. Nolan covers the county's homes and businesses with the full range of Finger Lakes pest services.",
      "We serve Owego, Waverly on the Pennsylvania border, and the rural hamlets of Candor and Spencer.",
    ],
    pressure: [
      "Owego's historic downtown and riverfront homes bring carpenter ants and moisture-related pests, along with the mice and cluster flies common to older river-valley housing. Flood-prone basements in the Susquehanna corridor can add moisture-pest pressure.",
      "The county's rural hamlets and farmland see strong fall cluster-fly and overwintering-pest invasions and steady rodent pressure, plus wildlife on the wooded lots that define much of the county.",
    ],
    housing: [
      "Tioga housing runs from historic homes in Owego and border-town housing in Waverly to rural farmhouses in Candor and Spencer. Older and riverfront homes bring moisture pests and carpenter ants; rural properties bring rodents, wildlife, and overwintering invaders.",
      "Tioga County has almost no established independent pest-control presence, which means residents here have often had to rely on companies based an hour away or on national call centers with no local knowledge. We treat Tioga as a genuine part of our service area, not an afterthought — bringing the same full range of services, seasonal timing, and family-owned responsiveness to Owego and the surrounding towns that we bring to Ithaca.",
    ],
    seasonal:
      "Fall cluster-fly and overwintering-pest invasion and rodent entry dominate, with carpenter ants active in Owego's older and riverfront wood through spring and summer.",
    faqs: [
      { q: "What areas of Tioga County do you serve?", a: "Owego, Waverly, Candor, and Spencer, along with the surrounding rural areas and the Susquehanna river corridor." },
      { q: "Is there local pest control in the Owego area?", a: "There's very little independent competition in Tioga County, which is why we serve it. You get full-depth service — treatment plans, specialized pest services, and schema-backed guarantees — rather than a distant call center." },
      { q: "My Owego home is near the river and has a damp basement — does that matter?", a: "Yes. Moisture draws carpenter ants, mice, and occasional invaders, and flood-prone basements in the river corridor add pressure. We treat the pests and point out the moisture conditions fueling them." },
      { q: "Do you handle cluster flies and fall invaders in rural Tioga?", a: "Yes. The county's farmland and rural lawns produce heavy fall cluster-fly and overwintering-pest activity. A timed late-summer exterior barrier is the effective solution." },
      { q: "Do you serve Waverly on the NY/PA border?", a: "Yes. Waverly and the southern edge of the county are within our service area, with the same full range of residential and commercial pest services." },
    ],
  },
};

export const getCountyContent = (slug: string) => countyContent[slug];

export const townContent: Record<string, TownContent> = {
  ithaca: {
    slug: "ithaca",
    intro: [
      "Ithaca is the heart of our service area, and it's one of the most pest-active small cities in upstate New York. Between Cornell University, Ithaca College, a dense stock of pre-war and Victorian rentals, and a lively downtown restaurant scene, the city concentrates nearly every residential and commercial pest challenge the Finger Lakes has to offer — and Nolan handles all of them, block by block.",
    ],
    local: [
      "The off-campus rental market around Cornell and Ithaca College — Collegetown, Cornell Heights, South Hill, and Fall Creek — drives Ithaca's biggest pest problems. Bed bugs and cockroaches move through multi-unit buildings and the heavy August and May move cycles, and mice pour into the aging housing stock every fall. For landlords, New York's Warranty of Habitability (RPL §235-b) makes prompt, documented treatment a legal necessity, not just a courtesy.",
      "Ithaca's pre-war and Victorian homes are beautiful and pest-prone in equal measure. Fieldstone foundations, settling gaps, and moisture-softened wood invite mice, carpenter ants, and the overwintering pests — cluster flies, stink bugs, lady beetles — that mass on sunny walls each fall. Sealing and seasonal treatment are what keep these older homes comfortable.",
      "Downtown and The Commons add a commercial dimension: restaurants and food-service businesses that need discreet, inspection-ready pest management to protect their health ratings and reputations. We serve that side of Ithaca too, with documentation and scheduling built around business hours.",
    ],
    faqs: [
      { q: "Do you handle bed bugs in Ithaca student rentals?", a: "Yes — it's one of our most common Ithaca jobs. We treat discreetly, coordinate across units and with landlords, and provide the follow-up and documentation that bed bugs and New York habitability law require." },
      { q: "My Ithaca home is old and gets mice every fall — can you fix it for good?", a: "Yes. The lasting fix for older Ithaca homes is rodent exclusion — sealing the foundation, sill, and roofline gaps mice use — combined with trapping. That's what ends the annual reinfestation." },
      { q: "Do you serve Ithaca restaurants and downtown businesses?", a: "Yes. We provide discreet, documented commercial pest control for restaurants and food-service businesses on The Commons and throughout downtown, scheduled around your hours and inspection needs." },
    ],
  },

  lansing: {
    slug: "lansing",
    intro: [
      "Lansing, stretching along the east shore of Cayuga Lake north of Ithaca, mixes lakefront homes, newer subdivisions, and rural properties. Its lakeside setting and open surroundings give it a distinctly different pest profile than downtown Ithaca — and Nolan serves all of it.",
    ],
    local: [
      "Lansing's lakefront and open, field-adjacent properties are prime cluster-fly and overwintering-pest territory. Each fall, cluster flies, stink bugs, and lady beetles mass on the warm, sunny walls of lakeside homes and work their way inside to overwinter — a problem best solved with a timed late-summer exterior barrier.",
      "The town's newer subdivisions bring the standard household mix — ants, wasps, spiders, and the mice that seek warmth every fall — while wooded and lakeside lots add wildlife and bat concerns. Lake-adjacent homes with docks, boathouses, and outbuildings offer plenty of harborage for rodents and stinging insects.",
      "Because many Lansing properties back onto fields, woods, or the lake, pest pressure here is constant and comes from the surrounding landscape as much as the house itself — which is why a seasonal preventative approach tends to work best.",
    ],
    faqs: [
      { q: "Why do I get so many flies on my Lansing windows in fall?", a: "Those are cluster flies, and Lansing's lakefront and field-adjacent setting is ideal for them. They come from the surrounding soil and overwinter in your walls. A timed exterior barrier in late summer stops them before they get in." },
      { q: "Do you treat lakefront homes and boathouses?", a: "Yes. Lakeside properties, docks, and outbuildings bring rodents, stinging insects, and wildlife, and we cover all of it — including exclusion for older structures." },
      { q: "Is a preventative plan worth it in Lansing?", a: "Often, yes. Properties backing onto fields, woods, or the lake face constant pest pressure from the landscape, so a seasonal plan usually costs less than reacting to each problem." },
    ],
  },

  dryden: {
    slug: "dryden",
    intro: [
      "Dryden, east of Ithaca, is a rural Tompkins County town of farmhouses, wooded lots, and small-village housing. Its country setting shapes its pest pressures, which lean heavily toward the seasonal invaders and rodents that come with open land and older wood.",
    ],
    local: [
      "Dryden's rural farmhouses and wooded properties see some of the heaviest cluster-fly and overwintering-pest pressure in the county. The surrounding fields and lawns produce cluster flies in force each fall, and older farmhouse construction gives them and overwintering stink bugs and lady beetles easy access to wall voids and attics.",
      "Carpenter ants are a defining Dryden problem, drawn to the moisture-prone wood of older rural homes, decks, and outbuildings. Left alone in damp framing, a colony can do real structural damage — which is why we trace and treat the nests rather than just the trails.",
      "Rural and wooded lots also bring steady rodent pressure and wildlife concerns, from mice seeking warmth each fall to squirrels, raccoons, and bats in older barns, sheds, and farmhouse attics.",
    ],
    faqs: [
      { q: "Do you treat rural farmhouses in Dryden?", a: "Yes. Older rural homes get heavy rodent, carpenter-ant, and overwintering-pest pressure, and we handle all of it — including exclusion sealing that keeps mice and invaders out of aging farmhouse construction." },
      { q: "I have big black ants in my Dryden home — are they carpenter ants?", a: "Very likely. Carpenter ants thrive in the moisture-prone wood of older rural homes and are common in Dryden. We locate the parent and satellite nests and treat the colony, not just the ants you see." },
      { q: "Can you handle bats or squirrels in a farmhouse attic?", a: "Yes. Older barns, sheds, and farmhouse attics are common wildlife and bat sites. We provide humane, legal removal and exclusion, including New York's bat maternity-season rules." },
    ],
  },

  trumansburg: {
    slug: "trumansburg",
    intro: [
      "Trumansburg, northwest of Ithaca near Taughannock Falls and the west side of Cayuga Lake, is a village community surrounded by rural and lakeside country. Its older village homes and open surroundings give it a classic Finger Lakes pest profile.",
    ],
    local: [
      "The village's older homes bring carpenter ants and the mice that push indoors each fall through the gaps common to aging construction. Sealing and seasonal treatment keep these homes comfortable without recurring infestations.",
      "Trumansburg's rural and lakeside surroundings make cluster flies and overwintering pests a defining fall problem — they arrive from the fields and lawns and overwinter in village and country homes alike. A timed late-summer exterior barrier is the effective fix.",
      "Proximity to Taughannock, the lake, and wooded areas adds wildlife and stinging-insect pressure, from wasps nesting in eaves to squirrels and bats in older attics and outbuildings.",
    ],
    faqs: [
      { q: "Do you serve Trumansburg and the west side of Cayuga Lake?", a: "Yes. Trumansburg and the surrounding rural and lakeside areas are within our core Tompkins County service area, with the full range of residential pest services." },
      { q: "Why do cluster flies invade my Trumansburg home every fall?", a: "The village's rural and lakeside setting is prime cluster-fly habitat. They develop in the surrounding soil and overwinter in homes. Treating the exterior in late summer stops them before they get inside." },
      { q: "Can you handle wasps and stinging insects around my home?", a: "Yes. We remove wasp, hornet, and yellowjacket nests — including hidden wall-void and ground nests — with priority scheduling for anything near a doorway or where someone has a sting allergy." },
    ],
  },

  newfield: {
    slug: "newfield",
    intro: [
      "Newfield, southwest of Ithaca, is a rural Tompkins County town of wooded lots, farmland, and country homes. Its heavily rural character makes seasonal invaders, rodents, and wildlife its primary pest concerns.",
    ],
    local: [
      "Newfield's wooded and field-adjacent properties face strong fall cluster-fly and overwintering-pest pressure. Cluster flies, stink bugs, lady beetles, and conifer seed bugs — the last especially near Newfield's evergreens — arrive from the surrounding land and overwinter in country homes each autumn.",
      "Carpenter ants find plenty of moisture-prone wood in older rural homes, decks, and outbuildings, and rodents push indoors every fall through the gaps typical of country construction. Exclusion sealing is the durable fix for both the mice and the invaders.",
      "The town's woods and open land bring steady wildlife pressure — squirrels, raccoons, skunks, and bats around older structures — which we handle with humane removal and exclusion.",
    ],
    faqs: [
      { q: "Do you serve rural Newfield?", a: "Yes. Newfield's rural and wooded properties are within our Tompkins County service area, and rural homes are a big part of what we do — rodents, carpenter ants, overwintering pests, and wildlife." },
      { q: "I get all kinds of bugs on my walls in fall — what are they?", a: "Those are overwintering pests — cluster flies, stink bugs, lady beetles, and, near evergreens, western conifer seed bugs. They invade rural Newfield homes each fall, and a timed exterior barrier keeps them out." },
      { q: "Can you deal with wildlife around my property?", a: "Yes. Wooded rural lots bring squirrels, raccoons, skunks, and bats, especially around older sheds, barns, and attics. We provide humane, legal removal and exclusion." },
    ],
  },

  groton: {
    slug: "groton",
    intro: [
      "Groton, in the northeast corner of Tompkins County, is a small-town and farm community where rural pest pressures dominate. Nolan serves its village homes and surrounding farm properties with the full range of Finger Lakes pest services.",
    ],
    local: [
      "Groton's farm properties and rural homes see heavy rodent pressure, especially each fall as mice move indoors from fields and outbuildings. Exclusion sealing — closing the gaps in older foundations and farm structures — is what turns a seasonal mouse problem into a solved one.",
      "Cluster flies and overwintering pests are a defining fall issue in and around Groton, arriving from the surrounding farmland and lawns to overwinter in homes. A timed late-summer exterior barrier addresses them before they get inside.",
      "Older village and farmhouse construction brings carpenter ants in moisture-prone wood, and the town's farms and wooded areas add wildlife concerns around barns, sheds, and attics.",
    ],
    faqs: [
      { q: "Do you serve Groton and its farm properties?", a: "Yes. Groton and the surrounding rural and farm areas are within our Tompkins County service area, and rural and farm properties are a core part of our work." },
      { q: "How do I stop mice from getting into my farmhouse every fall?", a: "Rodent exclusion — systematically sealing the foundation, sill, and structural gaps mice use — combined with trapping. On farm properties with constant pressure, we can add seasonal monitoring." },
      { q: "Do you treat cluster flies in the Groton area?", a: "Yes. The farmland around Groton produces heavy fall cluster-fly activity, and a timed exterior barrier in late summer is the effective solution." },
    ],
  },

  "watkins-glen": {
    slug: "watkins-glen",
    intro: [
      "Watkins Glen, at the south end of Seneca Lake, is the hub of Schuyler County and one of the Finger Lakes' busiest hospitality destinations — home to the state park, the racetrack, and a dense concentration of tasting rooms, restaurants, hotels, and short-term rentals. That mix of residential and hospitality gives Watkins Glen a distinctive pest profile, and Nolan serves both sides.",
    ],
    local: [
      "Watkins Glen's hospitality sector — tasting rooms, restaurants, hotels, B&Bs, and the large short-term-rental inventory around the wine trail — faces real bed-bug and food-pest exposure. Guest turnover moves bed bugs, and kitchens and tasting rooms draw fruit flies and stored-product pests. A single incident can damage reviews and ratings, so protection and fast response matter here more than almost anywhere.",
      "The town's village homes and lakeside properties see the classic Finger Lakes residential pressures: cluster flies and overwintering pests massing each fall, mice pushing indoors as it cools, and carpenter ants in older, moisture-prone wood.",
      "Seasonal tourism concentrates activity from late spring through fall, raising hospitality pest exposure exactly when the residential overwintering invasion begins — which makes late-summer scheduling especially valuable in Watkins Glen.",
    ],
    faqs: [
      { q: "Do you protect Watkins Glen wineries, restaurants, and short-term rentals?", a: "Yes — it's a specialty. We provide discreet, documented commercial and hospitality pest control: bed-bug protection for lodging and STRs, fruit-fly and stored-product control for tasting rooms and kitchens, and inspection readiness for restaurants." },
      { q: "I run an STR near Watkins Glen — what if a guest reports bed bugs?", a: "We provide fast response, thorough treatment with the required follow-up, and documentation to protect your listing. Ongoing protection is the best insurance against a review-damaging incident." },
      { q: "Do you treat homes in Watkins Glen too?", a: "Yes. Village and lakeside homes get the full range of residential service — cluster flies and overwintering pests, rodents, carpenter ants, wasps, and wildlife." },
    ],
  },

  "montour-falls": {
    slug: "montour-falls",
    intro: [
      "Montour Falls, just south of Watkins Glen in Schuyler County, is a historic village known for its namesake waterfall and its close-knit residential character. Its older village homes and rural surroundings shape a familiar Finger Lakes pest profile that Nolan handles in full.",
    ],
    local: [
      "The village's older homes bring carpenter ants in moisture-prone wood and mice that push indoors each fall through the gaps common to aging construction — both solved lastingly with treatment plus exclusion sealing.",
      "Montour Falls' rural surroundings make cluster flies and overwintering pests a defining fall issue, arriving from the fields and lawns to overwinter in village homes. A timed late-summer exterior barrier keeps them out.",
      "Proximity to Watkins Glen's hospitality corridor means some Montour Falls properties share the area's bed-bug and food-pest exposure, and the village's wooded surroundings add wildlife and stinging-insect concerns.",
    ],
    faqs: [
      { q: "Do you serve Montour Falls?", a: "Yes. Montour Falls and the surrounding Schuyler County area are within our service area, with the full range of residential and commercial pest services." },
      { q: "Why do I get cluster flies and stink bugs every fall?", a: "Montour Falls' rural setting produces heavy overwintering-pest pressure — cluster flies, stink bugs, and lady beetles arrive from the surrounding land and overwinter in homes. Treating the exterior in late summer stops them." },
      { q: "Can you help with carpenter ants in an older village home?", a: "Yes. Carpenter ants thrive in the moisture-prone wood of Montour Falls' older homes. We locate and treat the nests and point out the moisture conditions drawing them." },
    ],
  },

  elmira: {
    slug: "elmira",
    intro: [
      "Elmira, the seat of Chemung County, is an older, denser city where pest pressures run higher than the surrounding countryside — and where strong local pest-control options have been scarce. Nolan serves Elmira's neighborhoods and businesses with full-depth service.",
    ],
    local: [
      "Elmira's older, denser housing — including a substantial stock of multi-unit rentals — carries strong bed-bug and cockroach pressure. Both spread through shared walls and tenant turnover, and both need thorough, follow-up-based treatment rather than a single visit. For renters, New York's Warranty of Habitability (RPL §235-b) puts responsibility for infestations on landlords.",
      "The city's aging urban homes see mice pushing indoors every fall through the gaps and fieldstone foundations typical of older construction, along with the occasional invaders — centipedes, silverfish — that come with damp basements. Exclusion sealing is the durable fix for the rodents.",
      "Elmira's mix of older wood-framed homes and moisture-prone construction also brings carpenter ants, and the surrounding areas add the standard Finger Lakes fall overwintering-pest invasion.",
    ],
    faqs: [
      { q: "Do you treat bed bugs in Elmira?", a: "Yes — it's one of our most common Elmira jobs. Older, denser rental housing sees steady bed-bug activity. We treat discreetly with the required follow-up, coordinate across units, and document the work for landlord and habitability purposes." },
      { q: "I rent in Elmira and have roaches — whose responsibility is it?", a: "In New York, landlords are generally responsible for infestations under the Warranty of Habitability (RPL §235-b). We can work with your landlord, coordinate across units, and document the treatment." },
      { q: "Is there good pest control serving Elmira?", a: "Elmira has had fewer strong local options than it should, which is why we serve it — bringing the same full-depth treatment plans, specialized services, and guarantees we provide in Ithaca." },
    ],
  },

  horseheads: {
    slug: "horseheads",
    intro: [
      "Horseheads, just north of Elmira in Chemung County, is a suburban community of subdivisions and retail corridors with a more typical suburban pest profile than the older city to its south. Nolan covers its homes and businesses in full.",
    ],
    local: [
      "Horseheads' suburban subdivisions bring the standard household pest mix — ants, wasps, spiders, and the mice that seek warmth each fall — along with the seasonal invaders common across the Finger Lakes. Preventative service handles this mix efficiently across the seasons.",
      "The town's retail and commercial corridors add commercial pest-control needs, from restaurants requiring inspection-ready service to offices and shops wanting clean, low-disruption treatment on a schedule.",
      "Newer suburban construction has fewer entry gaps than Elmira's older stock, but Horseheads still sees the fall rodent push and the cluster-fly and overwintering-pest invasion from surrounding open land, especially on subdivision edges backing onto fields.",
    ],
    faqs: [
      { q: "Do you serve Horseheads?", a: "Yes. Horseheads' suburban neighborhoods and commercial corridors are within our Chemung County service area, with both residential and commercial pest services." },
      { q: "What pests are most common in Horseheads?", a: "The typical suburban mix — ants, wasps, spiders, and fall mice — plus cluster flies and overwintering pests on subdivision edges near open fields. A seasonal preventative plan covers the range." },
      { q: "Do you offer commercial service for Horseheads businesses?", a: "Yes. We provide discreet, documented commercial pest control for restaurants, offices, and retail along the Horseheads corridors, scheduled around your hours." },
    ],
  },

  owego: {
    slug: "owego",
    intro: [
      "Owego, the historic seat of Tioga County, sits along the Susquehanna River with a walkable downtown and a stock of older riverfront and village homes. As one of the least-served pest-control markets in our area, it's a place where reliable local service is genuinely needed — and Nolan provides it.",
    ],
    local: [
      "Owego's historic downtown and riverfront homes bring carpenter ants and moisture-related pests, drawn to older, sometimes damp wood — a pressure heightened by the flood-prone basements common in the Susquehanna corridor. We treat the pests and flag the moisture conditions behind them.",
      "The town's older housing stock sees mice pushing indoors every fall through the gaps typical of aging construction, along with occasional invaders like centipedes and silverfish in damp basements. Exclusion sealing is the durable fix.",
      "Owego's rural surroundings and riverfront setting bring strong fall cluster-fly and overwintering-pest activity and wildlife concerns around older structures — all part of the full service we bring to a county with little local competition.",
    ],
    faqs: [
      { q: "Is there local pest control in Owego?", a: "Tioga County has very little independent pest-control presence, which is exactly why we serve Owego — with full-depth treatment plans, specialized services, and guarantees, rather than a distant call center." },
      { q: "My historic Owego home near the river has a damp basement — does that attract pests?", a: "Yes. Moisture draws carpenter ants, mice, and occasional invaders, and flood-prone river-corridor basements add pressure. We treat the pests and point out the moisture conditions fueling them." },
      { q: "Do you handle fall invaders and wildlife in the Owego area?", a: "Yes. Owego's rural and riverfront surroundings bring heavy cluster-fly and overwintering-pest activity and wildlife around older structures. We cover the full range, including exclusion sealing." },
    ],
  },

  // ---- Remaining towns (Phase 4) — compact, genuine local content ----
  freeville: {
    slug: "freeville",
    intro: [
      "Freeville is a small Tompkins County village surrounded by rural countryside northeast of Ithaca. Its village homes and farm surroundings shape a rodent- and fall-invader-heavy pest profile.",
    ],
    local: [
      "Freeville's village and rural homes see mice pushing indoors each fall through the gaps common to older construction, and heavy cluster-fly and overwintering-pest pressure from the surrounding fields.",
      "Wooded and farm properties around the village add wildlife and carpenter-ant concerns. Exclusion sealing and timed fall barriers are the durable fixes for the seasonal invaders.",
    ],
    faqs: [
      { q: "Do you serve Freeville?", a: "Yes. Freeville and the surrounding rural Tompkins County area are within our service area, with the full range of residential pest control." },
      { q: "Why do I get so many flies and mice in the fall?", a: "The surrounding farmland drives cluster flies and fall rodents into village and country homes. Exclusion sealing plus a timed exterior barrier is the fix." },
    ],
    relatedServices: ["rodent-control", "cluster-fly-control"],
  },
  "cayuga-heights": {
    slug: "cayuga-heights",
    intro: [
      "Cayuga Heights is an affluent, wooded village just north of Ithaca, known for established homes under a mature tree canopy. Its landscape drives a carpenter-ant-, squirrel-, and tick-heavy pest profile.",
    ],
    local: [
      "The village's large, established homes and dense tree cover make carpenter ants and squirrels defining pests, with mice and overwintering invaders pushing in each fall.",
      "The wooded setting and local deer bring tick pressure to yards, along with bats and other wildlife around older homes. We handle wildlife removal and exclusion, carpenter-ant control, and tick-focused yard programs.",
    ],
    faqs: [
      { q: "Do you handle squirrels and carpenter ants in Cayuga Heights?", a: "Yes — both are common given the mature trees and established homes. We treat carpenter-ant colonies at the source and handle squirrel removal with chew-resistant sealing." },
      { q: "Is tick treatment worth it here?", a: "Often, yes. The wooded setting and local deer bring tick pressure to yards; a seasonal treatment focused on leaf litter and tree lines reduces Lyme risk." },
    ],
    relatedServices: ["carpenter-ant-control", "squirrel-removal", "mosquito-tick"],
  },
  danby: {
    slug: "danby",
    intro: [
      "Danby is a rural Tompkins County town south of Ithaca, bordering state forest land. Its wooded, country character makes wildlife and seasonal invaders its primary pest concerns.",
    ],
    local: [
      "Danby's wooded and state-forest-edge properties bring strong wildlife pressure — squirrels, raccoons, skunks, and bats around older homes and outbuildings — plus heavy fall cluster-fly and overwintering-pest activity.",
      "Rural homes see mice each fall and carpenter ants in moisture-prone wood. Exclusion sealing and wildlife exclusion are the durable fixes here.",
    ],
    faqs: [
      { q: "Do you handle wildlife in rural Danby?", a: "Yes. The wooded, forest-edge setting brings squirrels, raccoons, skunks, and bats. We provide humane, legal removal and exclusion, including New York's bat-season rules." },
      { q: "Do you serve Danby?", a: "Yes. Danby's rural properties are within our Tompkins County service area, with the full range of pest and wildlife services." },
    ],
    relatedServices: ["wildlife-removal", "cluster-fly-control", "rodent-control"],
  },
  enfield: {
    slug: "enfield",
    intro: [
      "Enfield is a rural Tompkins County town west of Ithaca, near Robert H. Treman State Park. Its wooded, country setting shapes a rodent-, wildlife-, and fall-invader-heavy pest profile.",
    ],
    local: [
      "Enfield's rural homes see mice pushing indoors each fall and carpenter ants in older, moisture-prone wood, while wooded lots bring squirrels, bats, and other wildlife.",
      "The surrounding fields and woods produce heavy cluster-fly and overwintering-pest pressure each fall, best handled with a timed exterior barrier.",
    ],
    faqs: [
      { q: "Do you serve Enfield?", a: "Yes. Enfield's rural properties are within our Tompkins County service area, with residential, exclusion, and wildlife services." },
      { q: "How do I stop fall mice in a rural Enfield home?", a: "Rodent exclusion — sealing the foundation and structural gaps mice use — combined with trapping is the durable fix for rural homes with constant pressure." },
    ],
    relatedServices: ["rodent-control", "wildlife-removal", "cluster-fly-control"],
  },
  odessa: {
    slug: "odessa",
    intro: [
      "Odessa is a small rural village in Schuyler County, surrounded by farmland and woods. Its country setting makes rodents and fall invaders its defining pests.",
    ],
    local: [
      "Odessa's village and rural homes see mice each fall and heavy cluster-fly and overwintering-pest pressure from the surrounding fields, plus carpenter ants in older wood.",
      "Wooded properties add wildlife concerns. Exclusion sealing and timed fall barriers keep country homes protected.",
    ],
    faqs: [
      { q: "Do you serve Odessa?", a: "Yes. Odessa and the surrounding rural Schuyler County area are within our service area." },
      { q: "Why so many cluster flies out here?", a: "Odessa's farmland and rural lawns are prime cluster-fly habitat. A timed late-summer exterior barrier stops them before they get inside." },
    ],
    relatedServices: ["cluster-fly-control", "rodent-control"],
  },
  burdett: {
    slug: "burdett",
    intro: [
      "Burdett is a small Schuyler County village on the east side of Seneca Lake, in the heart of wine country. Its rural and wine-trail setting shapes its pest concerns.",
    ],
    local: [
      "Burdett's rural homes see mice and heavy fall cluster-fly and overwintering-pest pressure, while the surrounding wine-trail businesses face fruit-fly, stored-product, and rodent concerns.",
      "We serve both the residential and the winery/tasting-room side of Burdett, with exclusion, timed barriers, and discreet commercial service.",
    ],
    faqs: [
      { q: "Do you serve wineries and tasting rooms near Burdett?", a: "Yes. Seneca Lake wine-trail businesses face fruit-fly, stored-product, and rodent pressure, and we provide discreet, documented commercial pest control." },
      { q: "Do you serve Burdett homes?", a: "Yes — the village and surrounding rural area are within our Schuyler County service area." },
    ],
    relatedServices: ["cluster-fly-control", "commercial-pest-control", "rodent-control"],
  },
  tyrone: {
    slug: "tyrone",
    intro: [
      "Tyrone is a rural Schuyler County town of farms, woods, and scattered homes. Its country character makes rodents, wildlife, and fall invaders its main pest concerns.",
    ],
    local: [
      "Tyrone's rural and farm homes see mice each fall and heavy cluster-fly and overwintering-pest pressure, and wooded lots bring squirrels, bats, and other wildlife.",
      "Exclusion sealing for older farm structures and timed fall barriers are the durable solutions.",
    ],
    faqs: [
      { q: "Do you serve rural Tyrone?", a: "Yes. Tyrone's farm and rural properties are within our Schuyler County service area, including exclusion and wildlife services." },
      { q: "Can you seal an old farmhouse against mice?", a: "Yes. Rodent exclusion of older farm structures — sealing the many gaps mice use — is one of the most effective things we do for rural homes." },
    ],
    relatedServices: ["rodent-control", "wildlife-removal", "cluster-fly-control"],
  },
  "beaver-dams": {
    slug: "beaver-dams",
    intro: [
      "Beaver Dams is a small rural hamlet in Schuyler County, surrounded by farmland and woods. Its country setting drives a rodent- and fall-invader-heavy pest profile.",
    ],
    local: [
      "Beaver Dams' rural homes see mice pushing indoors each fall and strong cluster-fly and overwintering-pest pressure from the surrounding fields, plus carpenter ants in older wood.",
      "Wooded properties add wildlife concerns. Exclusion and timed fall barriers keep country homes comfortable.",
    ],
    faqs: [
      { q: "Do you serve Beaver Dams?", a: "Yes. Beaver Dams and the surrounding rural Schuyler County area are within our service area." },
      { q: "Why do fall pests invade my home here?", a: "The surrounding farmland drives cluster flies, overwintering pests, and mice indoors each fall. A timed exterior barrier and exclusion sealing keep them out." },
    ],
    relatedServices: ["cluster-fly-control", "rodent-control"],
  },
  "big-flats": {
    slug: "big-flats",
    intro: [
      "Big Flats is a suburban and commercial Chemung County town along the airport corridor near Horseheads. Its mix of subdivisions and commercial development shapes a broad pest profile.",
    ],
    local: [
      "Big Flats' suburban homes see the standard household mix — ants, wasps, spiders, and fall mice — while subdivision edges near open land bring cluster flies and overwintering pests.",
      "The town's commercial and retail corridor adds business pest-control needs, from restaurants requiring inspection readiness to offices wanting clean, scheduled service.",
    ],
    faqs: [
      { q: "Do you serve Big Flats?", a: "Yes. Big Flats' suburban neighborhoods and commercial corridor are within our Chemung County service area, with residential and commercial services." },
      { q: "Do you offer commercial pest control in Big Flats?", a: "Yes. We provide discreet, documented commercial service for restaurants, offices, and retail along the Big Flats corridor." },
    ],
    relatedServices: ["general-pest", "commercial-pest-control", "rodent-control"],
  },
  cortland: {
    slug: "cortland",
    intro: [
      "Cortland is the seat of Cortland County and, after Ithaca, the most pest-active small city in our service area. SUNY Cortland puts several thousand students into off-campus rentals within walking distance of campus and downtown, and the housing they rent is genuinely old — 61% of the city's homes were built before 1939, and roughly three quarters date from the 1950s or earlier. Dense rentals inside century-old wood-frame houses is the exact combination that keeps a pest company busy.",
    ],
    local: [
      "The student rental market drives the city's hardest problems. Late-19th and early-20th-century two-story wood-frame houses — the typical Cortland house — get carved into multi-bedroom rentals, and once bed bugs, roaches, or mice are in one unit of a shared-wall building they rarely stay there. The August and May move cycles move infested furniture in and out on a schedule you can set a calendar by. For landlords, New York's Warranty of Habitability (RPL §235-b) makes prompt, documented treatment an obligation rather than a favor.",
      "Housing that old comes with fieldstone and rubble foundations, balloon framing, and decades of settling, and every one of those is a rodent highway. Mice do not chew their way into a Cortland house so much as walk in through gaps that have been there since before anyone living owned the place. That is why trapping alone tends to fail here and exclusion — actually sealing the sill, foundation, and roofline — is what ends the yearly reinfestation.",
      "Outside the city line, Cortland County is dairy and field country, and that changes the pest mix within a few miles. Cluster flies come off the surrounding pasture and lawn every late summer to overwinter in wall voids, and stink bugs and lady beetles mass on south-facing walls each October. A timed exterior barrier in late summer is worth more here than any amount of treatment once they are already inside the walls.",
    ],
    faqs: [
      { q: "Do you serve SUNY Cortland off-campus rentals?", a: "Yes. Student rentals near campus and downtown are a core part of our Cortland work. We treat bed bugs, roaches, and mice discreetly, coordinate across connected units so the problem does not simply move next door, and provide the documentation landlords and tenants need." },
      { q: "Why does my Cortland house get mice every single fall?", a: "Because of its age. Most of the city's housing predates 1939, and those fieldstone foundations and settled sills are full of gaps a mouse can use. Trapping clears the ones inside; exclusion — sealing the entry points — is what stops next year's batch." },
      { q: "What are the small flies covering my windows in October?", a: "Almost certainly cluster flies. They breed in the soil of the surrounding fields, then move to the sunny side of the house in late summer to overwinter in the wall voids. The fix is a timed exterior treatment before they get in, not a spray once they are indoors." },
      { q: "I am a landlord with several Cortland properties. Can you handle all of them?", a: "Yes. We work with landlords across the city on scheduled service and turnover treatment, with records you can keep on file. Coordinated treatment across a portfolio is far cheaper than chasing the same infestation from unit to unit." },
    ],
    relatedServices: ["bed-bug", "rodent-control", "rodent-exclusion-sealing", "cluster-fly-control"],
  },
  homer: {
    slug: "homer",
    intro: [
      "Homer is a historic Cortland County village just north of Cortland, known for its handsome older homes and village green. Its historic housing stock shapes its pest profile.",
    ],
    local: [
      "Homer's historic homes bring carpenter ants in moisture-prone older wood and mice pushing indoors each fall, plus heavy overwintering-pest pressure from surrounding dairy country.",
      "Homer sits in the middle of Cortland County's dairy and field country, which is why cluster flies and fall rodent pressure are the village's two most reliable problems. Both are very manageable when the timing is right — the exterior work that stops cluster flies has to happen in late summer, before they reach the walls.",
    ],
    faqs: [
      { q: "Do you serve Homer?", a: "Yes. Homer and the surrounding Cortland County area are within our service area, with the full range of residential and commercial pest services." },
      { q: "Are carpenter ants common in Homer's older homes?", a: "Yes. The village's historic, moisture-prone wood is classic carpenter-ant territory. We locate and treat the nests at the source." },
    ],
    relatedServices: ["carpenter-ant-control", "rodent-control", "cluster-fly-control"],
  },
  mcgraw: {
    slug: "mcgraw",
    intro: [
      "McGraw is a small Cortland County village east of Cortland, surrounded by dairy-country farmland. Its rural setting makes rodents and fall invaders its defining pests.",
    ],
    local: [
      "McGraw's village and farm homes see mice each fall and heavy cluster-fly and overwintering-pest pressure from the surrounding fields, plus carpenter ants in older wood.",
      "Exclusion sealing and timed fall barriers keep country homes protected against the seasonal invaders.",
    ],
    faqs: [
      { q: "Do you serve McGraw?", a: "Yes. McGraw and the surrounding rural Cortland County area are within our service area." },
      { q: "Why do cluster flies invade my McGraw home?", a: "The surrounding dairy-country fields are prime cluster-fly habitat. A timed late-summer exterior barrier is the effective fix." },
    ],
    relatedServices: ["cluster-fly-control", "rodent-control"],
  },
  waverly: {
    slug: "waverly",
    intro: [
      "Waverly is a Tioga County village on the New York–Pennsylvania border, near the Susquehanna River. Its older village housing shapes a rodent- and moisture-pest-heavy profile.",
    ],
    local: [
      "Waverly's older village homes see mice pushing indoors each fall and cockroaches in denser rental housing, plus carpenter ants and occasional invaders in damp, older basements.",
      "The river-corridor setting can add moisture pests. Exclusion sealing and treatment with moisture guidance are the durable fixes.",
    ],
    faqs: [
      { q: "Do you serve Waverly on the NY/PA border?", a: "Yes. Waverly and the southern edge of Tioga County are within our service area, with the full range of residential services." },
      { q: "My older Waverly home gets mice and damp-basement bugs — can you help?", a: "Yes. We handle rodent exclusion and the moisture pests that come with older, river-corridor basements, and point out the conditions to correct." },
    ],
    relatedServices: ["rodent-control", "roach-control", "carpenter-ant-control"],
  },
  candor: {
    slug: "candor",
    intro: [
      "Candor is a rural Tioga County town of farms, woods, and scattered homes south of Ithaca. Its country character makes rodents, wildlife, and fall invaders its main concerns.",
    ],
    local: [
      "Candor's rural and farm homes see mice each fall and heavy cluster-fly and overwintering-pest pressure, while wooded lots bring squirrels, bats, and other wildlife.",
      "Exclusion sealing for older structures and timed fall barriers keep rural homes protected.",
    ],
    faqs: [
      { q: "Do you serve rural Candor?", a: "Yes. Candor's farm and rural properties are within our Tioga County service area, including exclusion and wildlife services." },
      { q: "Do you handle wildlife around Candor homes?", a: "Yes. The wooded, rural setting brings squirrels, bats, and other wildlife around older structures, which we remove and exclude." },
    ],
    relatedServices: ["rodent-control", "wildlife-removal", "cluster-fly-control"],
  },
  spencer: {
    slug: "spencer",
    intro: [
      "Spencer is a small rural Tioga County hamlet surrounded by farmland and woods. Its country setting drives a rodent- and fall-invader-heavy pest profile.",
    ],
    local: [
      "Spencer's rural homes see mice pushing indoors each fall and strong cluster-fly and overwintering-pest pressure from surrounding fields, plus carpenter ants in older wood.",
      "Wooded properties add wildlife concerns. Exclusion and timed fall barriers are the durable solutions.",
    ],
    faqs: [
      { q: "Do you serve Spencer?", a: "Yes. Spencer and the surrounding rural Tioga County area are within our service area." },
      { q: "Why do fall pests get into my Spencer home?", a: "The surrounding farmland drives cluster flies, overwintering pests, and mice indoors each fall. A timed exterior barrier and exclusion sealing keep them out." },
    ],
    relatedServices: ["cluster-fly-control", "rodent-control"],
  },
};

export const getTownContent = (slug: string) => townContent[slug];
export const priorityTownSlugs = Object.keys(townContent);
