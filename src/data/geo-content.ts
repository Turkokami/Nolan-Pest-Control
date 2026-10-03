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
      "Tompkins County is where Nolan Pest Control spends most of its time. Centered on Ithaca and shaped by Cornell University and Ithaca College, it has one of the highest concentrations of rental housing in upstate New York, wrapped around a core of aging Victorian and pre-war homes. That combination — dense rentals, old housing stock, and a steady churn of students and tenants — makes it the most pest-active market in our service area, and the one we know best.",
      "We provide residential and commercial pest control across the whole county, from the student neighborhoods of Collegetown and Cornell Heights to the lakefront homes of Lansing and the rural farmhouses of Dryden, Newfield, and Enfield.",
    ],
    pressure: [
      "The defining pest pressures in Tompkins County follow its housing. Bed bugs and cockroaches concentrate in the dense off-campus rentals, spreading through multi-unit buildings and the heavy August and May move cycles. Mice push into the older housing stock every fall through fieldstone foundations and gaps that decades-old homes are full of. Carpenter ants thrive in the county's wet springs and moisture-prone older wood.",
      "In the rural and lakefront parts of the county, the pressure shifts to cluster flies and overwintering pests — stink bugs and lady beetles massing on sunny walls each fall — plus the wildlife and bat issues that come with wooded lots and older barns and outbuildings.",
    ],
    housing: [
      "Tompkins housing runs from pre-war and Victorian homes near downtown and the campuses, to mid-century and newer subdivisions in Lansing and Cayuga Heights, to rural farmhouses on the county's edges. Older homes mean more entry points and more moisture-related pests; rentals mean recurring, documented service and landlord habitability obligations under New York's Real Property Law §235-b.",
      "Tompkins is the county we work in most, and it is where our local knowledge runs deepest. We know which Ithaca neighborhoods see the worst bed-bug pressure, why the older homes on the hills get carpenter ants, and how the fall overwintering invasion moves through the rural towns. That block-by-block familiarity is the practical difference between us and a national outfit dispatching from out of the area: we already know what your house is likely doing before we get there, and we can usually get there today.",
    ],
    seasonal:
      "Fall is the pivotal season here: rodents and overwintering pests move indoors, and it's the best time to seal and treat. Spring brings carpenter ants and the student move-out bed-bug spread; summer brings wasps, mosquitoes, and ticks.",
    faqs: [
      { q: "Do you serve all of Tompkins County?", a: "Yes — Ithaca and every surrounding town including Lansing, Dryden, Trumansburg, Newfield, Groton, Freeville, Cayuga Heights, Danby, and Enfield, plus the Ithaca neighborhoods block by block." },
      { q: "I own rental property near the colleges — can you help?", a: "Absolutely. Off-campus rentals around Cornell and Ithaca College are a core part of our work. We handle bed bugs, roaches, and mice with discreet, coordinated, documented service, and help landlords meet their habitability obligations." },
      { q: "Why are pests such a problem in Ithaca's older homes?", a: "Pre-war and Victorian homes have fieldstone foundations, settling gaps, and moisture-prone wood — ideal for mice, carpenter ants, and overwintering pests. Sealing and seasonal treatment are the answer, and both are very doable." },
      { q: "Do you handle bats and wildlife in Tompkins County?", a: "Yes. Wooded lots and older structures make bats, squirrels, and raccoons common here. We handle humane, legal removal and exclusion, including New York's bat maternity-season rules." },
      { q: "How fast can you get to my home?", a: "Tompkins County is where we work most days, so response times here are our fastest. Call us and we'll get you scheduled quickly, with priority for urgent issues like stinging insects or a bat in the house." },
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

  wayne: {
    slug: "wayne",
    intro: [
      "Wayne County is fruit country, and that single fact shapes nearly everything about pest work here. It is the largest apple-producing county in New York and the third largest in the United States, with roughly 23,700 acres of orchard and something in the order of five million apple trees between the Erie Canal and the Lake Ontario shore. A county that is mostly orchard, farm, canal village and lakefront behaves nothing like the college-town market two counties south.",
      "Nolan Pest Control is based in Lyons, so this is the county we can reach fastest. We serve homes, farms, orchards and businesses from Macedon in the west through Newark, Lyons and Palmyra along the canal, out to Wolcott in the east, and north to the lakefront at Sodus Point and Pultneyville.",
    ],
    pressure: [
      "Orchards drive the pest calendar here in a way they do not anywhere else in our service area. Voles are the headline problem: they tunnel under snow cover all winter and girdle the bark at the base of young fruit trees, and a fully girdled tree does not recover. Cluster flies develop in the soil beneath orchard and pasture ground and move onto buildings in enormous numbers in late summer. Harvest brings yellowjackets to anything sweet, which in September means the fruit itself, the bins, and the people handling them.",
      "The villages are a different problem again. Newark, Lyons, Palmyra, Clyde and Macedon are Erie Canal towns built in the 1800s, and that housing comes with fieldstone foundations, settled sills, and low ground near the water. Mice get into those buildings easily and carpenter ants find the damp wood that canal-side ground reliably produces.",
      "The lakefront adds the third pattern. Sodus Point and Pultneyville swell with summer residents and empty out again, and a cottage that sits unheated and unvisited from October to April is the easiest building in the county for rodents to take over.",
    ],
    housing: [
      "The building stock splits four ways: 19th-century village housing along the canal, farmhouses and outbuildings on orchard land, seasonal cottages on the Lake Ontario shore, and newer subdivisions at the Macedon end where Rochester commuters have built on what used to be fruit ground. Each of those wants a different approach, and treating them the same is how a pest company gets it wrong here.",
      "Being based in Lyons means Wayne County gets our fastest response times. It also means we know which parts of the county are orchard, which are canal village, and which are lakefront — and that those are three different jobs rather than one.",
    ],
    seasonal:
      "Late summer is the heavy stretch: cluster flies off the orchard ground and yellowjackets at harvest. October and November push rodents indoors. Winter is when voles do their damage under the snow, out of sight until the thaw. Spring reveals it.",
    faqs: [
      { q: "Do you serve Wayne County?", a: "Yes, and it is the county we reach fastest — we are based in Lyons. We cover Newark, Palmyra, Sodus and Sodus Point, Macedon, Williamson, Marion, Clyde, Wolcott and Pultneyville, plus the farms and orchards between them." },
      { q: "Can you help with voles in an orchard or on a fruit farm?", a: "Yes. Voles girdling the bark at the base of young trees under winter snow cover is the damage that matters, and by the time you see it in spring the tree is often already lost. The work is preventative — guards, habitat reduction around the trunks, and baiting ahead of snow." },
      { q: "Why does my house fill with flies every September?", a: "Cluster flies, and in this county they come off the orchard and pasture ground around you rather than from anything in the house. They gather on warm south and west walls in late summer and work into the wall voids. The treatment is exterior and has to happen before they gather." },
      { q: "I only use my Sodus Point cottage in the summer. When should it be serviced?", a: "At close-up in the fall, not at open-up in the spring. Most of what owners find in April happened in an empty unheated building over the winter with nobody there to catch it. Sealing before it sits is worth more than any spring treatment." },
      { q: "Do you handle commercial work for orchards and packing houses?", a: "Yes. Storage and packing buildings bring their own problems — rodents in bulk storage, stored-product pests, and the documentation that comes with handling food. We schedule around harvest rather than through it." },
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

  lyons: {
    slug: "lyons",
    intro: [
      "Lyons is the Wayne County seat, an Erie Canal village of 19th-century housing, and the village Nolan Pest Control works out of. It is the fastest address in our whole service area for us to reach, and the one where we know the housing stock street by street.",
    ],
    local: [
      "The village grew up on the canal and the building stock shows it. Houses here are largely 19th century, on fieldstone and rubble foundations, with the settled sills and accumulated utility penetrations that a century and a half of weather produces. Mice do not have to work hard to get into a Lyons house, which is why exclusion matters more here than treatment.",
      "Low ground near the canal keeps basements damp through spring, and damp basements bring the whole moisture-driven group — carpenter ants in softened sill plate and band joist, plus centipedes, silverfish and camel crickets that are really a humidity report rather than an infestation.",
      "Lyons was the peppermint capital of the world in the 1800s, when H.G. Hotchkiss shipped oil from a building that still stands fifteen feet from the canal bank, and canallers said they could smell the mint before they reached the village. The farm ground that grew it is still farm ground, and that is where the cluster flies come from every August.",
    ],
    faqs: [
      { q: "How fast can you get to a job in Lyons?", a: "Faster than anywhere else we serve — the truck is based here. Lyons and the surrounding villages get our quickest response, which matters most for stinging insects and anything urgent." },
      { q: "Why is my Lyons basement always damp?", a: "Low ground near the canal and a high water table. That dampness is what brings centipedes, silverfish and camel crickets, and it softens the wood carpenter ants prefer. Drainage and ventilation do more than any treatment here." },
      { q: "My house is from the 1800s. Can it actually be sealed against mice?", a: "Yes, though it takes a methodical pass rather than one repair. Village housing of that age has many small openings at the foundation, sill and old utility runs instead of one obvious hole. Done properly it holds for years." },
    ],
    relatedServices: ["rodent-control", "rodent-exclusion-sealing", "carpenter-ant-control", "cluster-fly-control"],
  },

  newark: {
    slug: "newark",
    intro: [
      "Newark is the largest village in Wayne County and its densest housing, built along the Erie Canal and shaped by the industry the canal brought. Village-scale density plus 19th-century building stock produces the most concentrated pest pressure in the county.",
    ],
    local: [
      "Houses in the village core stand close together, which means rodent pressure belongs to the street rather than to any one building. A well-sealed house on a Newark block still sits next to whatever the neighbors have not sealed, and the population is shared.",
      "A good deal of the older stock has been divided into apartments over the years. That matters because cockroaches and bed bugs travel shared walls and utility chases regardless of how any single tenant keeps their unit, and treating one apartment while the ones beside, above and below go untouched relocates the problem rather than ending it.",
      "The commercial and former industrial buildings along the canal bring their own work: larger structures, shared service areas, and the refuse handling that supports rodent populations no amount of interior cleaning reaches.",
    ],
    faqs: [
      { q: "I treated my apartment and the roaches came back.", a: "In a divided older building the population very likely moved to a neighboring unit during treatment and returned afterward. The units beside, above and below need handling at the same time. If you rent, put the request to your landlord in writing — New York's habitability rules support you." },
      { q: "Do you work with landlords on multiple Newark properties?", a: "Yes. Coordinated service across a portfolio is both cheaper and more effective than chasing the same infestation from one address to the next, and it gives you documentation to keep on file." },
    ],
    relatedServices: ["roach-control", "bed-bug", "rodent-control"],
  },

  palmyra: {
    slug: "palmyra",
    intro: [
      "Palmyra is a historic canal village that receives visitors year-round from across the country, drawn to the church history sites just outside it. That steady visitor traffic gives the village a lodging and short-term rental sector far larger than its population would suggest, and that changes what pest control here has to handle.",
    ],
    local: [
      "Anywhere people sleep in rotation carries bed bug exposure, because bed bugs travel in luggage rather than arriving from outside. A guest room, inn or short-term rental turning over through the visitor season has an exposure profile a private house simply does not, and it is a function of how many parties stay rather than how clean the property is kept.",
      "The village itself is 19th-century canal housing — fieldstone foundations, settled sills, damp low ground near the water — with the mouse and carpenter ant pressure that comes with building stock of that age.",
      "Outside the village it is orchard and farm ground in every direction, which means the late-summer cluster fly invasion arrives here in force and the fall rodent push starts early.",
    ],
    faqs: [
      { q: "I run a guest room or short-term rental in Palmyra. How often should it be inspected?", a: "At a frequency that tracks your turnover through the visitor season. Bed bugs arrive in luggage, so exposure follows how many parties stay rather than how clean the property is. Catching an introduction early is the difference between one room handled quietly and a review that stays up permanently." },
      { q: "Can you treat without disrupting guests?", a: "Yes. We schedule around occupancy rather than around our own convenience, and we can arrive discreetly where that is what a property needs." },
    ],
    relatedServices: ["bed-bug", "rodent-control", "cluster-fly-control"],
  },

  sodus: {
    slug: "sodus",
    intro: [
      "Sodus runs from farm and orchard country up to the Lake Ontario shore at Sodus Point, the busiest resort spot in Wayne County. The village population swells every summer with cottage owners and visitors around Great Sodus Bay, then empties again — and that swing is the single most useful thing to know about pest work here.",
    ],
    local: [
      "A cottage that is lived in from May to September and stands unheated and unvisited from October to April is the easiest building in the county for rodents to occupy. There is nobody there to notice the first signs, and six months is long enough for a small problem to become a serious one. Most of the damage owners discover in April happened in February.",
      "Lakefront building stock adds its own difficulties: older cottages on modest foundations, built close to the water, often modified over decades. Seams between original construction and later additions are where the openings usually turn out to be.",
      "Inland, Sodus is orchard and farm country like the rest of the county, which brings heavy cluster fly pressure onto buildings in late summer and yellowjackets around anything sweet at harvest.",
    ],
    faqs: [
      { q: "My Sodus Point cottage is closed all winter. When should it be serviced?", a: "In the fall, at close-up. Sealing entry points before the building sits empty is worth considerably more than any treatment done in spring, because by April the work is cleanup rather than prevention." },
      { q: "Why are there so many wasps around the bay in late summer?", a: "Yellowjacket colonies peak in size in August and September just as their natural food runs short, which turns them aggressively toward human food — picnics, bins, outdoor dining. Nearly all stings happen in that window, and a nest near a deck or dock is worth dealing with rather than tolerating." },
    ],
    relatedServices: ["rodent-exclusion-sealing", "rodent-control", "stinging-insects", "cluster-fly-control"],
  },

  macedon: {
    slug: "macedon",
    intro: [
      "Macedon sits at the western edge of Wayne County, close enough to Rochester that a good deal of its newer housing is commuter-built. Those subdivisions have gone up on ground that was orchard and farmland, and the insects that lived on that ground did not leave when the houses arrived.",
    ],
    local: [
      "New homeowners here are regularly surprised to find thousands of cluster flies on a south-facing wall in September, having assumed a modern house would not have an old-house problem. Cluster flies develop in the soil of surrounding fields and orchards rather than in buildings, so a tight new house on former fruit ground sits in prime habitat. The construction helps — fewer entry points — but it does not change what is underneath.",
      "Suburban housing also brings suburban ants: pavement and odorous house ants nesting under slabs, walkways and driveway edges and foraging indoors, which is why treating the ones on the counter accomplishes so little.",
      "The older part of Macedon is canal village like the rest of the corridor, with the mouse and moisture pressure that 19th-century building stock produces.",
    ],
    faqs: [
      { q: "My house is only ten years old. Why do I have thousands of flies?", a: "Because cluster flies come from the ground around the house rather than from the house itself. Macedon's newer subdivisions sit on former orchard and farm ground, which is exactly where they develop. A timed exterior treatment on the sunny walls in late summer is what changes it." },
      { q: "Why do ants keep coming back after I spray the kitchen?", a: "Because the colony is outside — under a slab, walkway or driveway edge — and you are only killing the foragers you can see. Perimeter treatment and following the trail back is what actually ends it." },
    ],
    relatedServices: ["cluster-fly-control", "ant-control", "rodent-control"],
  },

  williamson: {
    slug: "williamson",
    intro: [
      "Williamson is orchard country in the middle of the most productive apple ground in New York State, between the canal corridor and the Lake Ontario shore. Fruit farms set the pest calendar here more than anything else.",
    ],
    local: [
      "Voles are the problem that costs money. They tunnel under snow cover through the winter and girdle the bark at the base of young fruit trees, and a tree girdled all the way round does not recover. The damage is invisible until the thaw, which is why the work is preventative rather than reactive.",
      "Cluster flies come off the orchard floor in enormous numbers in August and September and move onto the warm side of farmhouses and outbuildings. Harvest brings yellowjackets to the fruit, the bins and the people handling them.",
      "Farm properties are whole sites rather than single buildings. A barn or storage building holding a rodent population will keep resupplying the house no matter how carefully the house is sealed.",
    ],
    faqs: [
      { q: "Something is stripping the bark off my young apple trees over winter.", a: "Voles, almost certainly. They work under snow cover where nothing can see them, and a fully girdled trunk will not recover. Trunk guards, keeping the ground clear around the base, and baiting ahead of snow are what prevent it — by the time you see the damage the tree is usually lost." },
      { q: "Do you treat farm outbuildings as well as the house?", a: "Yes, and on a farm property that is usually the point. If the barn or storage building is holding the population, the house will keep getting visitors regardless of how well it is sealed." },
    ],
    relatedServices: ["mole-vole-control", "cluster-fly-control", "rodent-control", "stinging-insects"],
  },

  marion: {
    slug: "marion",
    intro: [
      "Marion is a small farming town in the orchard belt between the canal and the lake, with fruit ground and farm properties in every direction and a compact village core.",
    ],
    local: [
      "The pest year here is agricultural and predictable: voles girdling young trees under winter snow, cluster flies off the orchard ground in August and September, rodents moving toward buildings from October, and yellowjackets around the fruit at harvest.",
      "Farmhouses and their outbuildings need handling as one site. The barn is very often the reason a well-sealed house still gets mice.",
    ],
    faqs: [
      { q: "What is the single most useful thing for a farm property here?", a: "A timed exterior treatment on the sunny walls in late summer, before cluster flies gather, paired with sealing the house and dealing with whatever is holding a rodent population in the outbuildings. Those two things cover most of what a Marion property sees in a year." },
    ],
    relatedServices: ["cluster-fly-control", "mole-vole-control", "rodent-control"],
  },

  clyde: {
    slug: "clyde",
    intro: [
      "Clyde is an Erie Canal village at the eastern end of the Wayne County corridor, with older village housing and farm country immediately around it.",
    ],
    local: [
      "Village housing here is 19th century, which means fieldstone foundations, settled sills and the many small openings that let mice in every October. Exclusion is detailed work on buildings of this age, and it is what ends the annual cycle rather than managing it.",
      "Low ground near the canal keeps basements damp, bringing carpenter ants into softened wood and the usual moisture-seeking insects into the basement itself.",
      "The surrounding farm ground delivers the late-summer cluster fly invasion onto sunny walls.",
    ],
    faqs: [
      { q: "Do you come out as far as Clyde?", a: "Yes. Clyde is a short run from our base in Lyons, so response times here are among our fastest." },
    ],
    relatedServices: ["rodent-control", "cluster-fly-control", "carpenter-ant-control"],
  },

  wolcott: {
    slug: "wolcott",
    intro: [
      "Wolcott sits at the eastern end of Wayne County, rural and agricultural, with farm properties, older village housing and open country toward the lake plain.",
    ],
    local: [
      "The pattern out here is the rural one: heavy cluster fly pressure off the surrounding fields in late summer, rodents moving toward buildings from October, and carpenter ants wherever moisture has softened wood in the older housing.",
      "Outbuildings matter as much as the house. A barn or shed supporting a rodent population will keep the house supplied no matter how well the house itself is sealed.",
    ],
    faqs: [
      { q: "Is it worth treating for cluster flies if we are surrounded by farmland?", a: "Yes, and the difference is substantial. Next to open ground you will not get to zero, and anyone promising that is overselling — but a timed exterior treatment on the sunny walls before they gather is the difference between a normal house and an unlivable one in September." },
    ],
    relatedServices: ["cluster-fly-control", "rodent-control", "carpenter-ant-control"],
  },

  pultneyville: {
    slug: "pultneyville",
    intro: [
      "Pultneyville is a small historic hamlet on the Lake Ontario shore, with 19th-century houses, seasonal shoreline homes and orchard ground immediately inland.",
    ],
    local: [
      "Seasonal occupancy is the defining feature. A shoreline house that stands unheated and unvisited from October to April is an open invitation to rodents, and nobody is there to catch the first signs. Sealing before the building sits empty is worth far more than anything done in spring.",
      "The historic housing brings the usual problems of age — fieldstone foundations, settled sills, modifications layered over a century — and the orchard ground inland delivers cluster flies onto the sunny walls each August.",
    ],
    faqs: [
      { q: "Our shoreline place is empty most of the year. What should we do?", a: "Have it sealed and checked at close-up in the fall. Most of the damage seasonal owners find in spring happened over the winter in an empty building. Prevention before it sits beats treatment after." },
    ],
    relatedServices: ["rodent-exclusion-sealing", "rodent-control", "cluster-fly-control"],
  },
};

export const getTownContent = (slug: string) => townContent[slug];
export const priorityTownSlugs = Object.keys(townContent);
