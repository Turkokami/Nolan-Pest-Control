/**
 * town-content-deep.ts — depth layer for the priority town pages.
 *
 * ADDITIVE, same contract as geo-content-deep.ts and service-content-deep.ts: the [town] route
 * renders these blocks only when an entry exists, and merges the extra FAQs into both the
 * accordion and the FAQPage schema. A town with no entry here renders exactly as it did before.
 *
 * Deliberately does NOT repeat what geo-content.ts already says about a town. That file covers who
 * lives there and what the headline pest problems are. This one covers three things it doesn't:
 *
 *   structure — what the buildings are physically made of, because construction era decides which
 *               pests get in and how. This is the least copyable material on the site.
 *   calendar  — the pest year in that specific place, month by month.
 *   approach  — what actually resolves it there, as opposed to what merely treats it.
 *
 * Sourcing rule: every load-bearing number here is public record (census housing characteristics,
 * USGS/NWS flood crests) and is stated plainly enough that a reader could check it. Where we don't
 * have a verified figure we describe the pattern instead of inventing a statistic. Nothing in this
 * file asserts a job Nolan ran, a customer, or a result — that material has to come from the
 * client, and until it does these pages stay factual rather than anecdotal.
 */

export interface TownBlock {
  title: string;
  paragraphs: string[];
}

export interface TownDeep {
  structure: TownBlock;
  /** Optional: the priority towns carry a full seasonal block. The smaller villages do not,
   *  because padding a short entry to match a long one is exactly how a page becomes spun. */
  calendar?: TownBlock;
  approach: TownBlock;
  faqs: { q: string; a: string }[];
}

export const townContentDeep: Record<string, TownDeep> = {
  // ==================================================================== ITHACA
  ithaca: {
    structure: {
      title: "Why Ithaca's buildings decide its pest problems",
      paragraphs: [
        "About 43% of Ithaca's housing was built before 1940, and just over 70% of the city's occupied units are rented rather than owned. Those two numbers together explain most of what we deal with here. A pre-war house was not built airtight, and a house that changes tenants every twelve months does not get the slow, attentive maintenance that keeps an old building sealed. Gaps a long-term owner would have closed up a decade ago stay open for years in a rental.",
        "The construction itself matters more than most people expect. Houses of that era sit on fieldstone or rubble foundations with mortar that has been giving up for a century, and many were balloon-framed, meaning the wall cavities run uninterrupted from the sill all the way to the attic. A mouse that gets under the front porch has a clear vertical route to the third floor without ever crossing an open room. That is why people hear scratching overhead and cannot work out how anything got up there.",
        "Ithaca's terrain adds a second layer. The city is built on hillsides cut by gorges, so a great many homes have one wall dug into a slope and a basement that is below grade on the uphill side and exposed on the downhill side. That geometry traps moisture against the structure, and moisture-softened sill plate and band joist is exactly what carpenter ants excavate. When we find carpenter ants in an Ithaca house, the nest is very often within a few feet of a grade line or a downspout that has been dumping against the foundation.",
      ],
    },
    calendar: {
      title: "The pest year in Ithaca",
      paragraphs: [
        "The calendar here is unusually predictable because it runs on two clocks at once — the weather and the academic year. Late August brings the largest single move-in of the year, and with it the annual redistribution of bed bugs through the off-campus rental stock as mattresses, couches, and secondhand furniture change hands and buildings. May does the same thing in reverse. If you own or manage rental property, the two weeks on either side of those moves are worth more attention than the rest of the year combined.",
        "September through early November is rodent and overwintering season, and it starts earlier here than people expect — the first hard push indoors usually tracks the first sustained night below about 45°F rather than the first frost. Cluster flies, stink bugs, and lady beetles gather on south and west-facing walls through October looking for a way into the wall voids. Once they are in the walls they are effectively out of reach until they wake on the first warm day in February and appear at the windows, which is when most people call.",
        "Spring belongs to carpenter ants. Winged reproductives swarming indoors in April or May are not ants that wandered in — they are a mature nest that has been inside the structure through the winter, and they mean the colony is established in wood that is already damp. Summer is stinging insects, mosquitoes in the low wet ground near the creeks and the lake flats, and ticks anywhere the mown lawn meets the tree line.",
      ],
    },
    approach: {
      title: "What actually resolves it in an Ithaca house",
      paragraphs: [
        "For rodents in old housing, exclusion is the entire game and treatment is the cleanup. Trapping removes the mice presently in the building; sealing the sill, the foundation gaps, the utility penetrations, and the roofline is what stops the ones arriving next October. A house that gets mice every fall does not have a mouse problem, it has an opening problem, and it will keep producing mice for as long as the opening is there. This is the single most common thing we correct in Ithaca — people have been trapping the same house annually for years.",
        "For bed bugs in multi-unit buildings, treating one apartment in isolation usually fails, and it fails in a specific and expensive way: the population moves along the shared wall into the neighboring unit and comes back three months later. Connected units need to be inspected and handled together, on a schedule, with documentation. Under New York's Warranty of Habitability that documentation is also what protects a landlord if the matter ever becomes a dispute.",
        "For carpenter ants, killing foragers accomplishes very little, because what you see crossing the counter is a small fraction of the colony. The nest has to be located and treated at the source, and then the moisture that made the wood attractive has to be fixed — the gutter, the grade, the downspout, the leaking sill. Without that last step the same house gets re-colonized, sometimes within the same season.",
      ],
    },
    faqs: [
      { q: "Why do I keep getting mice every fall even though I trap them?", a: "Because trapping removes the mice already inside and does nothing about how they got in. Ithaca's pre-war houses sit on fieldstone foundations with gaps that have been open for decades, and many are balloon-framed, so a mouse entering at the sill can travel inside the wall to the attic. Sealing those entry points is what ends the annual cycle." },
      { q: "When is the worst time of year for bed bugs in Ithaca?", a: "Late August and again in May, tracking the student move cycle. Furniture and mattresses changing hands and buildings is the main way bed bugs travel here. If you manage rental property, inspecting at turnover is far cheaper than treating an established infestation in the middle of a semester." },
      { q: "There are flies at my windows in February. Where are they coming from?", a: "Cluster flies that entered the wall voids last October and have been overwintering there. The first warm stretch wakes them and they move toward the light. Treating indoors in February has limited effect — the lasting fix is an exterior application in late summer, before they get in." },
      { q: "My basement is damp on the uphill side and I have big black ants. Related?", a: "Almost certainly. Ithaca's hillside lots leave many basements below grade on one side, which holds moisture against the sill and band joist, and carpenter ants excavate wood that has been softened by moisture. We locate and treat the nest, but the repair that keeps them from returning is usually drainage — grade, gutters, and downspouts." },
    ],
  },

  // ================================================================== CORTLAND
  cortland: {
    structure: {
      title: "A city of century-old wood-frame houses",
      paragraphs: [
        "Cortland has some of the oldest housing of any city in our service area: 61% of the city's homes were built before 1939, and roughly 77% date from the 1950s or earlier. The typical Cortland house is a late-19th or early-20th-century two-story wood frame — handsome, solid, and full of the entry points that a century of settling produces. When most of the housing in a city shares a construction era, the pest problems share a pattern too, and here that pattern is rodents and moisture pests.",
        "Many of the houses nearest SUNY Cortland were built as single-family homes and later subdivided into multi-bedroom student rentals. That conversion matters: it multiplies the occupancy and the amount of food waste inside a building that was never designed for it, and it usually adds shared walls and connected utility runs without adding the sealing that would keep pests from using them. A building like that behaves less like a house and more like a small apartment block, and it has to be treated as one.",
      ],
    },
    calendar: {
      title: "The pest year in Cortland",
      paragraphs: [
        "Late summer is cluster fly season and it is the defining seasonal event here. Cortland County is dairy and field country, and cluster flies develop in the soil of pasture and lawn before moving to buildings in August and September to overwinter. They orient to the warm, sunny side, so south and west-facing walls take the pressure. Homes at the edge of the city with open field behind them get it worst.",
        "October and November push mice indoors, and in housing this old that push succeeds easily. December through February is generally quiet apart from what is already inside the walls. Late February and March bring the overwintering insects back to the windows as the sun angle changes. April and May are carpenter ant swarms and the student move-out, which redistributes furniture and whatever is living in it.",
      ],
    },
    approach: {
      title: "What actually resolves it in Cortland",
      paragraphs: [
        "Cluster flies have to be dealt with on the outside of the building in late summer, before they enter the wall voids. A timed exterior barrier applied to the sunny elevations in the weeks before they gather is worth more than any amount of indoor treatment afterward, because once they are inside the walls there is no practical way to reach them. Homeowners who call in February are usually a season late, and the honest answer is to book the treatment for August.",
        "For rodents in pre-1939 housing, the work is exclusion — sealing fieldstone foundation gaps, sill plate voids, and utility penetrations — paired with trapping to clear what is already in. In a subdivided student rental, treating one unit rarely holds; the building needs to be handled as a single structure, which is also the cheaper answer for a landlord over a full lease cycle.",
      ],
    },
    faqs: [
      { q: "Why is Cortland so bad for mice?", a: "Housing age. About 61% of the city's homes predate 1939, and those fieldstone foundations, settled sills, and old utility penetrations give mice easy entry. It is not a matter of cleanliness — it is a matter of openings, which is why sealing the building is what actually fixes it." },
      { q: "What are the sluggish flies filling my windows every fall?", a: "Cluster flies. They develop in the soil of the surrounding fields and move to buildings in August and September to overwinter in the wall voids, concentrating on the sunny south and west walls. The effective treatment is exterior and timed for late summer." },
      { q: "I rent to SUNY Cortland students. What should I be doing between leases?", a: "Inspect at every turnover, especially for bed bugs, and treat the building as one unit rather than apartment by apartment. Most of these houses were subdivided from single-family homes and have connected walls and utility runs, so an infestation in one bedroom is a building issue. Documented service between leases also protects you under New York habitability law." },
    ],
  },

  // ==================================================================== ELMIRA
  elmira: {
    structure: {
      title: "Among the oldest housing stock in the country",
      paragraphs: [
        "Elmira's median home was built in 1938, and depending on which census tabulation you use, somewhere between 57% and 62% of the city's housing predates 1940. That places Elmira among the oldest housing stock of any city in America. It is a genuinely historic city — a rail and manufacturing center through the 1800s and early 1900s — and the housing reflects the era it was built in: wood frame, stone and brick foundations, deep basements, and a great many multi-unit conversions.",
        "The 1972 Agnes flood is still visible in the building stock if you know what you are looking at. On June 23 of that year the Chemung River put several feet of water through large parts of the city, and much of the Water Street business district was demolished afterward rather than rebuilt. Buildings that survived were dried out and repaired to the standards of the time, and half-century-old flood repair frequently means replaced sill plates, patched foundations, and interstitial spaces that were closed up without being sealed. Those are exactly the voids rodents and overwintering insects use.",
        "Elmira also has a high share of older multi-unit rental conversions, which is the structural reason bed bug and cockroach pressure runs higher here than in the surrounding suburban towns. Shared walls, shared utility chases, and shared trash handling turn an individual unit's problem into a building's problem quickly.",
      ],
    },
    calendar: {
      title: "The pest year in Elmira",
      paragraphs: [
        "Cockroaches and bed bugs in the multi-unit stock do not have much of a season — a heated building is a year-round environment, which is why these are the calls that come in January as readily as July. What does change seasonally is how fast they spread, since winter concentrates everyone indoors and heating runs keep wall voids warm.",
        "Rodent pressure builds sharply from late September through November, and the older the building the earlier it starts. Spring brings carpenter ants in structures with lingering moisture problems, which in Elmira frequently traces back to basements that have taken water repeatedly over decades. Summer is stinging insects in soffits and porch roofs, which the city's older housing has in abundance.",
      ],
    },
    approach: {
      title: "What actually resolves it in Elmira",
      paragraphs: [
        "In multi-unit buildings, the unit-by-unit approach is the most common reason an infestation never quite ends. Cockroaches and bed bugs travel shared walls and utility chases, so treating 3B while 3A and 2B go untouched relocates the population rather than eliminating it. Buildings need coordinated treatment with follow-up, and landlords need the documentation both for their own protection and for New York habitability obligations.",
        "In houses this old, moisture is usually the underlying condition rather than the pest itself. A basement that has taken water repeatedly since the seventies has soft wood somewhere, and soft wood is what carpenter ants and, eventually, wood-destroying organisms exploit. We treat the pest, but the durable fix is drainage and ventilation, and we would rather tell you that than sell you a recurring treatment for a problem that repairs would end.",
      ],
    },
    faqs: [
      { q: "Why does Elmira have such persistent roach and bed bug problems?", a: "Building stock. The median Elmira home dates to 1938 and much of the rental inventory is older multi-unit conversion, so apartments share walls, utility chases, and trash handling. That gives both pests easy routes between units, which is why treating a single apartment usually does not hold." },
      { q: "I treated my apartment and they came back. What went wrong?", a: "Most likely nothing you did — the population moved to a neighboring unit during treatment and returned afterward. In connected buildings, the units on either side and above and below need to be inspected and handled at the same time. That is a conversation with the landlord or property manager, and we can help you have it." },
      { q: "My basement has flooded on and off for decades and now I have large black ants. Connected?", a: "Yes, very likely. Repeated water leaves softened sill plate and joists, and carpenter ants excavate damp wood by preference. We find and treat the nest, but the lasting repair is drainage and ventilation — otherwise the same conditions attract the next colony." },
    ],
  },

  // ===================================================================== OWEGO
  owego: {
    structure: {
      title: "A historic village that has been underwater",
      paragraphs: [
        "Owego's pest profile cannot be explained without the flood. On September 8, 2011, the remnants of Tropical Storm Lee sent the Susquehanna to a record crest of 39.62 feet at Owego, and an estimated 90% of the buildings in the village took water. The historic River Row business district was largely destroyed. The village had also flooded in 2006. What that means, more than a decade on, is that a very large share of Owego's building stock has been gutted, dried, and rebuilt at least once in living memory.",
        "Flood rebuild is a mixed blessing structurally. Much of it was done well, but rebuilding after a disaster happens fast and under insurance timelines, and the recurring pattern we see is new finished surfaces over old bones — fresh drywall and flooring above foundations, sills, and framing that took prolonged saturation. Sealed-up voids that never fully dried are where you get chronic moisture, and chronic moisture is what carpenter ants and wood-destroying organisms are looking for.",
        "The village itself is genuinely historic, with a dense downtown of 19th-century commercial buildings, and the surrounding town runs quickly to farmland and wooded hillside above the river. So a single small municipality contains an old commercial core, a flood-rebuilt residential belt, and rural properties, and those three want different things from a pest control company.",
      ],
    },
    calendar: {
      title: "The pest year in Owego",
      paragraphs: [
        "Spring is the moisture season and the one that reveals structural problems. Snowmelt and spring rain raise the water table along the river flats, and basements that were dry all winter get damp again. Carpenter ant swarms in April and May in a riverside Owego home are worth taking seriously, because they usually indicate wood that has stayed wet since the last high water.",
        "Late summer and fall bring cluster flies from the surrounding farmland and the annual rodent move indoors, both of which arrive earlier on the hillside properties above the village than in the downtown core. Summer adds mosquitoes, which have obvious and abundant breeding habitat in a village built on a river floodplain, and stinging insects in the eaves of the older downtown buildings.",
      ],
    },
    approach: {
      title: "What actually resolves it in Owego",
      paragraphs: [
        "In a flood-rebuilt building, the first job is finding the moisture, not spraying the pest. Carpenter ants and wood-destroying organisms in Owego are almost always a symptom of wood that never fully dried or that gets wet again seasonally, and treatment without addressing that is a subscription rather than a solution. We would rather identify the source and tell you what needs drying or repairing.",
        "For the downtown commercial buildings, the shared-wall problem is the same one Elmira has: nineteenth-century commercial structures are connected in ways that are not obvious from inside, and rodents in particular treat a row of buildings as one. Coordinated treatment along a block is far more effective than one storefront acting alone, and for restaurants it is also inspection protection.",
        "For homes on the flats, exclusion has to account for water. Sealing a foundation is normal work anywhere; here it is worth doing with the knowledge that the building may take water again, so the materials and the approach should be chosen accordingly rather than installed and forgotten.",
      ],
    },
    faqs: [
      { q: "My house was rebuilt after the 2011 flood and I have carpenter ants. Why?", a: "This is one of the most common patterns in Owego. Flood rebuilds put new finished surfaces over framing, sills, and subfloor that took prolonged saturation, and any of that which never fully dried stays attractive to carpenter ants. We locate the nest, but the real question is where the moisture still is, and that is what we look for first." },
      { q: "Do you handle the historic downtown commercial buildings?", a: "Yes. The 19th-century buildings along the village core are connected in ways that let rodents and roaches move between addresses, so we prefer to work with neighboring businesses where we can. For restaurants we schedule around service hours and provide inspection-ready documentation." },
      { q: "Are mosquitoes worse here than elsewhere in the region?", a: "In the low-lying parts of the village, generally yes — a floodplain provides a great deal of standing water in a wet summer. Reducing breeding sites on your own property makes a real difference, and we can treat harborage areas, though a river valley will never be mosquito-free." },
    ],
  },

  // ============================================================= WATKINS GLEN
  "watkins-glen": {
    structure: {
      title: "A small village with a very large seasonal population",
      paragraphs: [
        "Watkins Glen's permanent population is small, and its summer population is not. The state park gorge, the south end of Seneca Lake, the wine trail, and the racing calendar at Watkins Glen International bring in visitor volume out of all proportion to the year-round village, and the building stock reflects that: hotels, inns, restaurants, tasting rooms, campgrounds, and a large short-term rental inventory sitting alongside ordinary village houses.",
        "That mix creates a pest situation you do not find elsewhere in our area. A property that hosts a different set of travelers every two or three nights, all summer, has a bed bug exposure that a private residence simply does not, because bed bugs arrive in luggage. Meanwhile a lakefront place that sits closed from November to April is a rodent invitation for six months a year with nobody there to notice.",
        "The commercial side runs on hospitality margins and reputation. A tasting room or restaurant with a fruit fly problem in August is not merely inconvenienced — it is being reviewed in public, in real time, in its highest-revenue weeks.",
      ],
    },
    calendar: {
      title: "The pest year in Watkins Glen",
      paragraphs: [
        "The season inverts the usual pattern. Peak pest risk here is May through October, which is peak business, and the pressure is guest-driven rather than weather-driven — bed bugs arriving with luggage, fruit flies and stored-product pests in kitchens and tasting rooms working through fruit and sugar, and stinging insects around outdoor seating exactly when outdoor seating is the whole point.",
        "November through April flips it. Properties close, heat comes down, and rodents move into buildings that nobody enters for weeks. A great deal of the damage we find in the spring happened in an empty building in February. Cluster flies also gather in the fall on the sunny elevations of village and lakefront homes alike.",
      ],
    },
    approach: {
      title: "What actually works for a hospitality property",
      paragraphs: [
        "For anything with guests, prevention on a schedule beats response, because response is already a review. That means proactive inspection of rooms and units at the intervals that match turnover, treatment scheduled around occupancy rather than around our convenience, and discretion as a working requirement rather than a courtesy — arriving unmarked and working without a scene, where that is what the property needs.",
        "For seasonal and closed properties, the work should happen at close-up and at open-up rather than in the middle. Sealing a building before it sits empty for five months is the single highest-value thing an owner of a lakefront or seasonal property can do, and it costs a fraction of dealing with what a winter's worth of undisturbed rodent occupancy leaves behind.",
        "For food and beverage operations, documentation matters as much as treatment. Scheduled service with records is what stands up at inspection, and fruit fly control in particular is usually a sanitation-and-drain question as much as a pesticide question — we would rather show you the breeding site than keep coming back.",
      ],
    },
    faqs: [
      { q: "I run a short-term rental near Watkins Glen. How often should it be inspected?", a: "At a frequency that matches your turnover through the season, and at minimum before and after peak. Bed bugs arrive in guest luggage, so exposure is a function of how many parties stay, not how clean the property is. Catching an introduction early is the difference between one room treated quietly and a listing with a review that stays up permanently." },
      { q: "My lakefront house sits empty all winter and I find damage every spring.", a: "That is the standard pattern here. An unoccupied, unheated building is ideal for rodents and nobody is there to catch the first signs. The fix is exclusion done at close-up — sealing entry points before the property sits — rather than treatment in the spring after the fact." },
      { q: "Can you treat my restaurant without disrupting service?", a: "Yes. We schedule hospitality work around your hours rather than ours, and we can work before opening or after close during the season. We also provide the documentation you need for inspection." },
      { q: "Why do I have fruit flies in my tasting room and how do I stop them?", a: "Almost always a breeding site rather than an invasion — drains, mats, spill trays, a mop bucket, or fruit residue somewhere warm. Spraying adults gets you a day or two. We find the source and address it, and then it stays gone." },
    ],
  },

  // =================================================================== LANSING
  lansing: {
    structure: {
      title: "Lakefront camps and new subdivisions in the same town",
      paragraphs: [
        "Lansing is really two building stocks sharing a name. Along the Cayuga Lake shore there are older cottages and converted seasonal camps, many of them built close to the water on modest foundations and a good number still used seasonally. Inland, Lansing has some of the newest residential construction in Tompkins County — subdivisions built in recent decades on former farmland, well sealed by comparison, with full basements and modern construction.",
        "Those two stocks have almost opposite pest profiles, which is why generic advice serves Lansing badly. The shoreline properties have entry points, moisture, and long unoccupied stretches. The newer inland homes are tight buildings, but they sit on ground that was field a short time ago, and the wildlife and insects that lived on that field did not leave when the houses arrived — they adapted to them.",
      ],
    },
    calendar: {
      title: "The pest year in Lansing",
      paragraphs: [
        "Late summer into fall is the heaviest stretch on both sides of town. New subdivisions built on former agricultural land get substantial cluster fly and overwintering-insect pressure, because the surrounding open ground is exactly where those insects develop — newer homeowners are often surprised, having assumed a new house would not have old-house problems. Along the lake, fall is when rodents move into cottages as the temperature drops and occupancy falls off.",
        "Spring brings the seasonal properties back into use and reveals what happened over the winter. Summer along the shoreline is stinging insects and mosquitoes, with the lake and its low ground providing plenty of both, plus wildlife pressure on wooded lots.",
      ],
    },
    approach: {
      title: "What actually works in Lansing",
      paragraphs: [
        "For a new home with a fall cluster fly problem, the answer is a timed exterior treatment on the sunny elevations in late summer, not indoor spraying in October. The tightness of a modern house works in your favor here — there are fewer ways in — but it does not help at all once they are in the wall voids, so timing is everything.",
        "For seasonal lakefront property, treat close-up as the important appointment. Sealing before the building sits empty, and having someone check it, prevents most of what owners otherwise discover in April. It is also far easier to seal a small older cottage properly than a large modern house, so the work is usually proportionate.",
        "For wildlife on wooded and shoreline lots — squirrels, raccoons, bats — removal alone is temporary. Exclusion is what keeps the next animal from using the same opening, and in the case of bats New York's maternity-season restrictions mean the timing is legally constrained, which is worth planning around rather than discovering.",
      ],
    },
    faqs: [
      { q: "My house is only fifteen years old. Why do I have thousands of flies in the fall?", a: "Because cluster flies come from the ground around the house, not from the house itself. Lansing's newer subdivisions sit on former farmland, which is prime habitat, and the flies move to the warm sunny walls in late summer. A modern home has fewer entry points, which helps, but the fix is still a timed exterior treatment before they gather." },
      { q: "I only use my lake place in the summer. When should I have it serviced?", a: "At close-up in the fall, above all. Most of the damage seasonal owners find in spring happened in an empty building over the winter. Sealing entry points before it sits unoccupied is worth more than any treatment you can do in April." },
      { q: "Do you handle bats in Lansing?", a: "Yes, including exclusion work. Be aware that New York restricts bat exclusion during the summer maternity season, when flightless pups would be trapped inside if the adults were sealed out. That means timing matters, and it is better to plan the work than to be told in July that it has to wait." },
    ],
  },

  // ================================================================ HORSEHEADS
  horseheads: {
    structure: {
      title: "Suburban stock with a commercial corridor running through it",
      paragraphs: [
        "Horseheads is markedly different from neighboring Elmira in ways that show up directly in pest work. Its housing skews substantially newer — postwar and later subdivisions rather than pre-1940 city stock — which means tighter buildings, poured foundations, and fewer of the structural entry points that define Elmira's rodent problems. What Horseheads has instead is suburban landscape pressure and a large retail and commercial corridor.",
        "That corridor changes the picture. Retail, restaurants, and the properties around them concentrate food waste, dumpsters, and loading areas, and those are rodent and fly resources on a scale a residential street does not produce. Homes backing onto commercial parcels or sharing a boundary with them consistently see more pressure than homes a few streets away, and that is a real, specific, local pattern rather than a general statement.",
      ],
    },
    calendar: {
      title: "The pest year in Horseheads",
      paragraphs: [
        "Spring and early summer are ant season, and in newer suburban housing that mostly means pavement ants and odorous house ants working in from slabs, walkways, and foundation edges rather than carpenter ants in structural wood. Summer brings stinging insects — yellowjackets and paper wasps in soffits, decks, and playsets — which in a family suburb is the call that has to be answered quickly.",
        "Fall pushes rodents indoors, though generally less severely than in older Elmira housing, and brings the usual overwintering insects to sunny walls. Commercial properties along the retail corridor run at more or less constant pressure year-round, since a heated building with a steady food stream does not have a slow season.",
      ],
    },
    approach: {
      title: "What actually works in Horseheads",
      paragraphs: [
        "For suburban ant problems, the durable answer is usually exterior and perimeter work plus removing what is attracting them, rather than treating indoors where you see them. Ants at the kitchen counter are foragers from a colony outside the building, and the trail matters more than the individuals.",
        "For stinging insects around a family home, the priority is safe and complete nest removal rather than knockdown, particularly with yellowjackets in wall voids or under decking, where a partial treatment can drive an aggressive colony into the living space. This is genuinely a call to make rather than a store-bought project.",
        "For businesses along the commercial corridor, exterior rodent management and dumpster-area sanitation do most of the work. A restaurant can keep an immaculate kitchen and still have a rodent problem if the loading area behind it is feeding the population — and often the effective fix involves a neighboring property, which is a conversation worth having early.",
      ],
    },
    faqs: [
      { q: "Why do I have ants every spring even though my house is newer?", a: "In newer suburban housing they are usually pavement or odorous house ants nesting outside — under slabs, walkways, and the foundation edge — and coming in to forage. That is why treating the ones on the counter accomplishes little. Perimeter treatment and dealing with the trail is what works." },
      { q: "There is a wasp nest in my soffit. Can I handle it myself?", a: "We would rather you did not, particularly with yellowjackets in a wall void or under decking. Partial treatment can push an agitated colony inward toward the living space, and the sting risk during removal is real. It is a quick job for someone with the equipment for it." },
      { q: "My house backs onto the commercial corridor and I see more mice than my neighbors. Is that connected?", a: "Very likely. Dumpsters, loading areas, and food-service waste support a larger rodent population than a residential street does, and properties on that boundary absorb the overflow. Exclusion on your home matters, but the sustainable fix often involves the commercial neighbor's exterior program too." },
    ],
  },

  // ==================================================================== DRYDEN
  dryden: {
    structure: {
      title: "Village, campus, and working farmland in one town",
      paragraphs: [
        "The town of Dryden covers a lot of ground and several distinct kinds of property: the village itself, the hamlet of Freeville, the Tompkins Cortland Community College campus and the rentals that serve it, and a great deal of genuinely rural land — working farms, wooded lots, and old farmhouses on large parcels. It is one of the more agricultural parts of Tompkins County, and that is the single most useful thing to know about its pest pressure.",
        "Old farmhouses are their own category of building. Fieldstone foundations, additions built across a century, outbuildings, barns, and equipment sheds create far more structure per property than a village lot does, and every outbuilding is both a rodent reservoir and a wildlife harborage feeding the main house. Treating the house while ignoring the barn forty feet away is a recognizable way to fail on a rural property.",
      ],
    },
    calendar: {
      title: "The pest year in Dryden",
      paragraphs: [
        "Late summer through fall is the dominant season, and it is more intense here than in town. Cluster flies come off pasture and hayfield in enormous numbers in August and September. Field mice and deer mice move toward buildings from October, and on a farm property they have been living close by all along rather than traveling in. Harvest activity also displaces rodents from fields into whatever structures are nearby, so the timing is not purely about temperature.",
        "Spring brings carpenter ants in old farmhouse wood and the wildlife breeding season — squirrels, raccoons, and bats looking for a place to raise young, which in practice means an attic, a soffit, or a barn loft. Summer is stinging insects, which on rural properties tend to be found the hard way during mowing or outbuilding work, plus ticks in any tall grass and woodland edge.",
      ],
    },
    approach: {
      title: "What actually works on a rural Dryden property",
      paragraphs: [
        "Rural properties need to be handled as a whole site rather than a single building. If the barn and the equipment shed are supporting a rodent population, the house will keep receiving them no matter how well the house itself is sealed. That does not mean treating everything — it means knowing where the reservoir is and dealing with it there, which is usually cheaper than repeatedly servicing the house.",
        "Cluster flies on a farm property are unavoidable to some degree, but they are very manageable with an exterior application timed to late summer on the sunny elevations. Expecting zero is unrealistic next to a hayfield; expecting a normal, livable house is entirely reasonable.",
        "For wildlife in an old farmhouse or barn, exclusion is the durable answer and it needs to be done properly on structures with a lot of openings. With bats, New York's maternity-season restrictions apply, so the work has to be timed — sealing at the wrong point in the summer traps flightless pups inside, which is both inhumane and a much worse problem than the one you started with.",
      ],
    },
    faqs: [
      { q: "I live on a farm. Is it realistic to keep mice out of the house?", a: "Yes, though the work is site-wide rather than house-only. If the barn or equipment shed is holding a population, the house will keep getting visitors regardless of how well it is sealed. Sealing the house properly and reducing the reservoir in the outbuildings is what makes the difference." },
      { q: "The cluster flies here are unbelievable in September. Can anything actually help?", a: "Yes — a timed exterior treatment on the sunny walls in late summer, before they gather. Next to open hayfield you will not get to zero, and anyone promising that is overselling, but the difference between treated and untreated on a rural Dryden property is dramatic." },
      { q: "There are bats in my barn. When can they be removed?", a: "Not during the summer maternity season, when flightless young would be sealed in if the adults were excluded. New York restricts the work for that reason. We can inspect any time and plan the exclusion for the window when it is both legal and humane." },
    ],
  },
  // ============================================================== TRUMANSBURG
  trumansburg: {
    structure: {
      title: "A compact village on the high ground above the lake",
      paragraphs: [
        "Trumansburg is a walkable village of older homes on the high ground west of Cayuga Lake, with a genuine village center rather than a strip, and it drops quickly into rural farmland and the wooded ravines around Taughannock Falls in every direction. That combination — dense village core, deep gorge, open farmland — puts three different pest environments within about a mile of each other.",
        "The village housing runs to older wood-frame homes on small lots, close enough together that rodent pressure is shared along a street rather than isolated to a house. Outside the village line, properties get larger, older, and more likely to include a barn or outbuilding.",
      ],
    },
    approach: {
      title: "Which Trumansburg are you in?",
      paragraphs: [
        "It genuinely matters. A village house needs methodical exclusion at the foundation, sill, and porch junctions, and benefits from neighbors doing the same. A property out toward the gorge or the farmland needs the rural approach: exterior treatment timed to late summer for cluster flies coming off the fields, wildlife exclusion where mature canopy reaches the roof, and attention to outbuildings that can hold a rodent population indefinitely.",
        "The ravines around Taughannock bring wildlife right up against residential property, so squirrels and bats reaching a roofline from overhanging limbs is a routine rather than unusual event on the wooded edges.",
      ],
    },
    faqs: [
      { q: "I am in the village, not out in the country. Do I still get cluster flies?", a: "Less than a house against open hayfield, but yes — Trumansburg's village core is close enough to farmland that the pressure carries. The treatment is the same either way: exterior, on the sunny south and west walls, timed for late summer before they gather." },
      { q: "We back onto the woods near the gorge. What should we watch for?", a: "Wildlife reaching the roof. Where mature canopy overhangs a roofline, squirrels and bats have direct access to soffits and attics. Trimming those limbs back and sealing the roof edge does more than anything done after something is already inside." },
    ],
  },

  // ================================================================= NEWFIELD
  newfield: {
    structure: {
      title: "Rural, wooded, and up against a lot of state land",
      paragraphs: [
        "Newfield is one of the more rural towns in Tompkins County, with old farmhouses, wooded lots, and a village core built around the historic covered bridge. What shapes its pest work more than anything is how much undeveloped land it sits against — Connecticut Hill and the surrounding state land put a very large block of forest and field on the town's doorstep.",
        "Old farmhouse construction dominates outside the village: fieldstone foundations, additions built across generations, and outbuildings that add more structure per property than any village lot has. Each barn, shed, and garage is a potential rodent reservoir feeding the house.",
      ],
    },
    approach: {
      title: "Treat the property, not just the house",
      paragraphs: [
        "On a Newfield property the house is rarely the whole job. If a barn or equipment shed is supporting a rodent population, the house will keep receiving visitors no matter how carefully it is sealed. Knowing where the reservoir is and dealing with it there is usually cheaper than servicing the house over and over.",
        "The forest edge raises two things worth planning for rather than reacting to: wildlife — squirrels, raccoons, and bats using overhanging limbs and old outbuildings — and ticks, which concentrate where mown grass meets tall grass and woodland rather than out in open lawn. Maintaining that boundary makes a measurable difference to exposure around the house.",
      ],
    },
    faqs: [
      { q: "We are surrounded by woods and fields. Is keeping mice out realistic?", a: "Yes, but it has to be a whole-property approach. Sealing the house properly is the core of it, and reducing what is holding a population in the barn or shed is what stops the resupply. Expecting zero pressure next to state land is not realistic; expecting a mouse-free house is." },
      { q: "How worried should we be about ticks out here?", a: "Enough to manage the edges. Exposure concentrates where lawn meets tall grass, brush, and leaf litter, not in the middle of a mown yard. Keeping that transition maintained and treating harborage reduces risk around the house meaningfully — but no treatment makes a property against state forest tick-free, and daily checks still matter." },
    ],
  },

  // =================================================================== GROTON
  groton: {
    structure: {
      title: "A small manufacturing village in dairy country",
      paragraphs: [
        "Groton has the bones of a working village — a compact core of older homes and commercial buildings built around a manufacturing history, surrounded quickly by working farmland in the northeast corner of Tompkins County. The housing in the village is largely older wood frame; outside it, farm properties with substantial outbuildings.",
        "That places most of the town within a short distance of pasture and hayfield, which is the single most useful fact about its pest pressure.",
      ],
    },
    approach: {
      title: "Field pressure is the whole story here",
      paragraphs: [
        "Cluster flies come off the surrounding agricultural ground in large numbers in August and September and orient to the warm sunny elevations of buildings. Nothing done indoors in October reaches them once they are in the wall voids, so the productive window is a timed exterior application on the south and west walls in late summer.",
        "Field and deer mice move toward buildings from October, and harvest activity displaces them from fields earlier than temperature alone would. On farm properties, sealing the house while ignoring the barn is the standard way the problem persists.",
      ],
    },
    faqs: [
      { q: "The flies on my south wall every September are unbelievable. Is that normal here?", a: "For Groton, yes. Cluster flies develop in the soil of surrounding pasture and lawn and move to sunny walls in late summer. It is a function of the farmland around the village, not of your house. Timed exterior treatment before they gather is what changes it." },
    ],
  },

  // ============================================================ MONTOUR FALLS
  "montour-falls": {
    structure: {
      title: "A village built on low ground with a waterfall in the middle of it",
      paragraphs: [
        "Montour Falls sits on the flats just south of Watkins Glen at the head of Seneca Lake, with Shequaga Falls dropping into the village itself and Catharine Creek running through the valley. It is a genuinely low-lying village, and water is the defining feature of both the setting and the pest work.",
        "The housing is largely older village stock — wood frame, stone and block foundations, full basements — on ground with a high water table. Damp basements are common enough here that they should be assumed rather than discovered.",
      ],
    },
    approach: {
      title: "Deal with the water first",
      paragraphs: [
        "A large share of what gets called a pest problem in Montour Falls is a moisture problem with insects attached. Carpenter ants in softened sill plate and band joist, silverfish and centipedes and camel crickets in damp basements, and the general attractiveness of a humid structure to overwintering rodents all trace back to the same underlying condition.",
        "That means drainage, grading, gutters, downspout extensions, ventilation, and in a dirt crawlspace a vapor barrier, frequently accomplish more than any treatment. We will treat the pest, but on this ground we would rather tell you where the water is.",
        "The village also shares Watkins Glen's hospitality overlay on a smaller scale, so short-term rentals and lodging here carry the same guest-driven bed bug exposure through the visitor season.",
      ],
    },
    faqs: [
      { q: "My basement is always damp and full of crawling insects. What is the actual fix?", a: "Usually the water rather than the insects. Centipedes, silverfish, camel crickets, and springtails are all moisture-driven, and on low ground like Montour Falls the dampness is the condition keeping them there. Drainage, ventilation, dehumidification, and a vapor barrier over dirt do the durable work." },
      { q: "Do you handle short-term rentals here as well as in Watkins Glen?", a: "Yes, and with the same approach. Guest turnover is what drives bed bug exposure, so inspection frequency should track how many parties stay rather than how clean the property is. Catching an introduction early is the difference between one room handled quietly and a permanent review." },
    ],
  },

  // ================================================================ FREEVILLE
  freeville: {
    structure: {
      title: "A creekside village surrounded by farmland",
      paragraphs: [
        "Freeville is a small village on Fall Creek within the town of Dryden, with a compact core of older homes and rural, largely agricultural land in every direction. Being on the creek puts a good deal of the village on low ground, so damp basements are more common here than the surrounding higher farmland.",
      ],
    },
    approach: {
      title: "Village core, farm surroundings",
      paragraphs: [
        "The two pressures stack. From the farmland comes the late-summer cluster fly invasion and the October rodent push, both of which want an exterior, timed response on the sunny elevations before anything gets into the walls. From the creek comes moisture, which brings carpenter ants into softened sill and band joist and the usual damp-basement insects.",
        "On the smaller village lots, exclusion at the foundation, sill, and porch junctions is straightforward and holds well once done. Properties out toward the farms need the outbuildings considered as part of the job.",
      ],
    },
    faqs: [
      { q: "Why is my basement damp when my neighbor up the hill has a dry one?", a: "Elevation relative to the creek. Freeville's lower ground carries a higher water table, and that shows up as persistent basement dampness — which in turn brings carpenter ants into softened wood and the moisture-seeking insects like centipedes and camel crickets. Drainage work is the durable answer." },
    ],
  },

  // =========================================================== CAYUGA HEIGHTS
  "cayuga-heights": {
    structure: {
      title: "An incorporated village under a very old tree canopy",
      paragraphs: [
        "Cayuga Heights is its own village rather than part of Ithaca, immediately north of the city and adjacent to Cornell. It is characterized by substantial homes on generous lots beneath an unusually mature tree canopy, with stable long-term occupancy and well-maintained housing.",
        "The buildings are large and architecturally complex — multi-plane rooflines, dormers, deep eaves, and substantial attics — which means far more roof edge to inspect and far more places for something to settle in without being noticed for a while.",
      ],
    },
    approach: {
      title: "Canopy management is pest control here",
      paragraphs: [
        "The dominant work in this village is wildlife exclusion, and the dominant cause is the canopy. Limbs overhanging or touching a roof are the access route for squirrels, raccoons, and bats, and cutting them back prevents recurrence more reliably than anything done inside an attic.",
        "Removal without exclusion is the recurring mistake. Trapping the animal in the attic leaves a proven, open entry point, and something else finds it — frequently within the same year. Sealing every entry is what ends it, and on a large complicated roofline that requires a proper inspection rather than closing the obvious hole.",
        "With bats, New York's maternity-season restrictions apply, and on a big house with multiple access points a partial seal is worse than none — it traps animals inside. Finding the full picture before sealing is not thoroughness for its own sake.",
      ],
    },
    faqs: [
      { q: "We keep getting squirrels in the attic year after year. Why does it not stop?", a: "Because the entry point survives each removal. Trapping addresses the animal, not the opening, and an accessible known entry gets reused. Sealing all the entries and trimming the limbs that give roof access is what breaks the cycle." },
      { q: "Is a preventive inspection worth it if nothing is wrong?", a: "In this village, more than most. These are large houses with complex rooflines where an animal can be established for a while before anyone notices, and finding an entry point before it is in use costs very little compared with dealing with an occupied attic." },
    ],
  },

  // ==================================================================== DANBY
  danby: {
    structure: {
      title: "Hill country against the state forest",
      paragraphs: [
        "Danby runs south from Ithaca into genuinely hilly, heavily wooded country, with Danby State Forest occupying a substantial part of the town. Properties are large, often on slopes, frequently against woodland, and the housing runs from old farmhouses to homes built on wooded acreage.",
        "Forest edge is the defining condition. It puts wildlife, ticks, and overwintering insects close to structures year-round rather than seasonally, and hillside sites bring the drainage problems that come with building on a slope.",
      ],
    },
    approach: {
      title: "Forest edge, hillside water",
      paragraphs: [
        "Wildlife exclusion done properly is the core structural work — squirrels, raccoons, and bats using canopy access and the many openings that old rural buildings accumulate. Bat work has to respect New York's maternity-season timing, which is worth planning around rather than discovering in July.",
        "On sloped sites, water moving downhill toward a foundation is what softens sill plate and band joist and brings carpenter ants. Grading, gutters, and downspout extensions frequently do more than treatment.",
        "Ticks deserve honest framing here. Managing the boundary where lawn meets tall grass and woodland and treating harborage reduces exposure around the house meaningfully. It does not make a property against state forest tick-free, and we will not tell you otherwise.",
      ],
    },
    faqs: [
      { q: "Living against the state forest, what is realistic for ticks?", a: "Meaningful reduction around the house, not elimination. Exposure concentrates at the edge where mown lawn meets tall grass and leaf litter, so maintaining that transition and treating harborage genuinely helps. Personal checks after time outdoors remain the most effective single precaution." },
      { q: "Our house is on a slope and we keep getting large black ants. Connected?", a: "Very likely. Water moving downhill toward the foundation keeps sill plate and framing damp, and carpenter ants excavate moisture-softened wood by preference. We find and treat the nest, but moving the water away is what stops the next colony." },
    ],
  },

  // =================================================================== ENFIELD
  enfield: {
    structure: {
      title: "Rural Tompkins County around a gorge",
      paragraphs: [
        "Enfield is rural and wooded, with Robert H. Treman State Park and Enfield Glen cutting through it, and a housing mix of old farmhouses, homes on acreage, and scattered newer builds. Like Newfield and Danby, it is a town where most properties are closer to woodland or field than to a neighbor.",
        "Old rural construction dominates — fieldstone foundations, generational additions, and outbuildings that hold populations the house then receives.",
      ],
    },
    approach: {
      title: "Whole-site work, timed to the season",
      paragraphs: [
        "Cluster flies off the surrounding fields in late summer and the October rodent push are the two predictable annual events, and both respond to exterior work done before they arrive rather than treatment afterward. On the sunny south and west walls, timing is most of the effect.",
        "Wildlife pressure from the gorge and woodland means canopy contact with rooflines is worth checking and correcting. Outbuildings need to be part of the plan rather than an afterthought — the barn is very often the reason the house keeps getting mice.",
      ],
    },
    faqs: [
      { q: "Do we need to treat the barn too, or just the house?", a: "Usually the barn matters. A building holding a rodent population keeps resupplying the house regardless of how well the house is sealed. That does not mean treating everything — it means identifying where the reservoir actually is and dealing with it there." },
    ],
  },

  // =================================================================== ODESSA
  odessa: {
    structure: {
      title: "A small village in the Catharine valley",
      paragraphs: [
        "Odessa is a rural Schuyler County village of older homes surrounded by farmland and wooded hillside, in the valley running south from Montour Falls. The housing is largely older wood frame with the foundations and entry points that come with age, on properties where field and woodland are close.",
      ],
    },
    approach: {
      title: "The rural annual cycle, handled on schedule",
      paragraphs: [
        "The pattern here is consistent and predictable, which is genuinely good news: cluster flies off the surrounding ground in August and September, rodents moving in from October, overwintering insects on the sunny walls through fall, and carpenter ants where moisture has softened wood. None of it is unusual and all of it responds to timing.",
        "A timed exterior treatment in late summer plus proper exclusion at the foundation and sill covers most of what an Odessa property needs in a year. Where there are outbuildings, they belong in the plan.",
      ],
    },
    faqs: [
      { q: "What is the one thing most worth doing for a rural house like ours?", a: "Exterior treatment on the sunny walls in late summer, before cluster flies and overwintering insects gather, combined with sealing the foundation and sill. Those two things address the large majority of what a property here sees in a year, and both have to happen before the problem rather than after." },
    ],
  },

  // ================================================================== BURDETT
  burdett: {
    structure: {
      title: "Wine country on the east side of Seneca Lake",
      paragraphs: [
        "Burdett sits above the east shore of Seneca Lake in the middle of the wine trail, so the building stock is a mix of village and rural homes alongside genuine hospitality property — tasting rooms, small lodging, and short-term rentals working the visitor season.",
        "Vineyard and open agricultural ground surrounds much of it, and lake-influenced slopes put a good deal of property on a grade.",
      ],
    },
    approach: {
      title: "Two customers, two calendars",
      paragraphs: [
        "For homes, the rural pattern applies: cluster flies off the surrounding ground in late summer, rodents from October, and moisture-related carpenter ant risk on sloped sites where water runs toward a foundation.",
        "For anything with guests or a tasting room, the calendar inverts — peak risk arrives with peak business from late spring through fall. That means bed bug exposure through guest turnover, and fruit flies and stored-product pests in any space handling fruit, sugar, and fermentation. Fruit fly problems in tasting rooms are almost always a breeding site rather than an invasion, so finding the drain, mat, or spill tray beats spraying adults.",
      ],
    },
    faqs: [
      { q: "We have fruit flies in the tasting room in August. What actually stops it?", a: "Finding where they are breeding. It is nearly always a site rather than an invasion — a floor drain, a mat, a spill tray, a mop bucket, or fermenting residue somewhere warm. Treating adults buys a day or two; removing the source ends it." },
      { q: "Do you work around our tasting room hours?", a: "Yes. Hospitality work gets scheduled around your operation rather than ours, before opening or after close during the season, with documentation for your file." },
    ],
  },

  // =================================================================== TYRONE
  tyrone: {
    structure: {
      title: "Rural Schuyler County near the small lakes",
      paragraphs: [
        "Tyrone is rural and wooded, in the part of Schuyler County near Lamoka and Waneta Lakes, and its building stock includes a meaningful share of seasonal camps and cottages alongside year-round rural homes and farm properties.",
        "Seasonal occupancy is the distinguishing feature. A building that sits unheated and unvisited from November to April is a fundamentally different pest proposition from one that is lived in.",
      ],
    },
    approach: {
      title: "Close-up is the appointment that matters",
      paragraphs: [
        "For a seasonal property, most of the damage owners find in spring happened in an empty building over the winter, with nobody there to notice the first signs. Sealing entry points before the building sits — at close-up, not at open-up — is worth more than any treatment done in April.",
        "For year-round rural homes, the standard pattern applies: exterior treatment timed to late summer for cluster flies and overwintering insects, exclusion ahead of the October rodent push, and outbuildings treated as part of the site rather than separate from it.",
      ],
    },
    faqs: [
      { q: "Our camp is closed all winter. When should it be serviced?", a: "In the fall, at close-up. An unoccupied, unheated building is ideal for rodents and there is nobody there to catch it early, so sealing before it sits is the single highest-value thing an owner can do. Spring service is cleanup; fall service is prevention." },
    ],
  },

  // ============================================================== BEAVER DAMS
  "beaver-dams": {
    structure: {
      title: "A rural hamlet between Schuyler and Chemung",
      paragraphs: [
        "Beaver Dams is a small rural hamlet in open country toward the Chemung County line, with older homes, farm properties, and a good deal of field and woodland in every direction. The housing is older and rural in character, with the foundations, outbuildings, and entry points that go with it.",
      ],
    },
    approach: {
      title: "Predictable pressure, predictable timing",
      paragraphs: [
        "The pest year out here is agricultural and seasonal: heavy cluster fly pressure off the surrounding ground in August and September, rodents moving toward buildings from October, and overwintering insects gathering on the sunny elevations through fall.",
        "All three respond to the same thing — a timed exterior application on the south and west walls in late summer, plus methodical exclusion at the foundation and sill. Where there are barns or sheds, they are part of the job rather than separate from it.",
      ],
    },
    faqs: [
      { q: "Is there any point treating for cluster flies if we are surrounded by fields?", a: "Yes, and the difference is substantial. You will not get to zero next to open hayfield, and anyone promising that is overselling — but a timed exterior treatment on the sunny walls before they gather is the difference between a normal house and an unlivable one in September." },
    ],
  },

  // ================================================================ BIG FLATS
  "big-flats": {
    structure: {
      title: "Flat river land, an airport, and a retail corridor",
      paragraphs: [
        "The name is literal: Big Flats occupies the broad flat land along the Chemung River, and that low, level ground gives it a high water table and damp basements as a matter of course. The town also holds the regional airport and a substantial commercial and retail corridor alongside its residential neighborhoods.",
        "Housing skews newer than Elmira's — postwar and later subdivisions with poured foundations rather than pre-1940 city stock — so the structural rodent entry problems are less severe. What replaces them is commercial pressure and moisture.",
      ],
    },
    approach: {
      title: "Commercial neighbors and a high water table",
      paragraphs: [
        "Properties bordering the commercial and retail corridor absorb rodent pressure that residential streets do not generate on their own. Dumpsters, loading areas, and food service support populations at a scale a neighborhood cannot, and homes on that boundary consistently see more activity than homes a few streets away. Exclusion on your own building is fully within your control; the surrounding population often is not.",
        "For the businesses themselves, exterior management and refuse handling do most of the work — a spotless kitchen with a poorly managed loading area behind it will still have rodents.",
        "On the residential side, the flat low ground means damp basements and the moisture-driven insects that come with them, so drainage and ventilation matter more here than the newer housing would suggest.",
      ],
    },
    faqs: [
      { q: "My house backs onto the commercial area and I see more mice than my neighbors. Coincidence?", a: "Almost certainly not. Dumpsters, loading docks, and food-service waste support far larger rodent populations than a residential street, and properties on that boundary absorb the overflow. Sealing your home matters, and where a commercial neighbor is the source it is worth raising with them." },
      { q: "Our house is only twenty years old but the basement is always damp. Why?", a: "The ground rather than the house. Big Flats sits on flat low river land with a high water table, so basement dampness is common regardless of construction age. That dampness is what brings centipedes, silverfish, camel crickets, and carpenter ants, so drainage and ventilation are the durable fix." },
    ],
  },

  // ==================================================================== HOMER
  homer: {
    structure: {
      title: "A historic village green surrounded by dairy country",
      paragraphs: [
        "Homer is a handsome historic village just north of Cortland, built around its village green, with a concentration of well-preserved older homes and a walkable core. Step outside the village and it is dairy and field country almost immediately.",
        "The village housing is old, which means fieldstone foundations, settled sills, generational additions, and the moisture-prone wood that comes with a century of weather. Homes are also close enough together in the core that rodent pressure is shared along a street.",
      ],
    },
    approach: {
      title: "Old wood, open fields",
      paragraphs: [
        "Two things dominate. From the housing: carpenter ants in moisture-softened sill plate, band joist, porch columns, and roof edges, almost always traceable to a gutter, a grade, or a downspout putting water where it should not be. Treating the colony without correcting the water simply schedules the next one.",
        "From the surrounding farmland: heavy cluster fly pressure in August and September and the October rodent push. Both are exterior, timed problems — the sunny south and west walls in late summer is where the work happens.",
        "On historic homes, exclusion should be done with some care for the building. Sealing a century-old house well is entirely achievable without doing anything crude to it.",
      ],
    },
    faqs: [
      { q: "Our village home is over a hundred years old. Can it actually be sealed?", a: "Yes. It takes a methodical pass rather than one repair — older homes have many small openings at the foundation, sill, and utility penetrations instead of one obvious gap — but done properly it holds for years, and it can be done without anything crude or conspicuous on a historic house." },
      { q: "Why do we get carpenter ants when the house is well maintained?", a: "Almost always a localized water problem rather than general neglect — a failed gutter section, a downspout dumping at the foundation, a grade that slopes the wrong way, or a leak at a sill. Carpenter ants excavate wood that moisture has already softened. Finding that spot is what stops it recurring." },
    ],
  },

  // =================================================================== MCGRAW
  mcgraw: {
    structure: {
      title: "A small village in Cortland County farm country",
      paragraphs: [
        "McGraw is a compact rural village east of Cortland, with older village housing and working farmland close on every side. It is small enough that the whole village is effectively at the field edge, which sets its pest profile without much complication.",
      ],
    },
    approach: {
      title: "Straightforward, seasonal, exterior",
      paragraphs: [
        "The annual cycle is agricultural: cluster flies off the surrounding ground in late summer, rodents from October, overwintering insects on sunny walls, and carpenter ants anywhere water has softened wood in the older housing.",
        "The good news is that a predictable problem is a manageable one. A timed exterior treatment in late summer and proper exclusion at the foundation and sill handle most of what a McGraw property faces, and neither is complicated — they simply have to happen before the season rather than during it.",
      ],
    },
    faqs: [
      { q: "When should we schedule if we only do one treatment a year?", a: "Late summer, before the cluster flies and overwintering insects gather on the walls. That single timed exterior application, paired with sealing the foundation and sill, addresses the largest share of what a property here sees. Calling in October is a season late." },
    ],
  },

  // ================================================================== WAVERLY
  waverly: {
    structure: {
      title: "A border village in the Susquehanna valley",
      paragraphs: [
        "Waverly sits on the New York side of the Pennsylvania line in the Susquehanna valley, effectively continuous with the communities across the border. It is a village of older homes on valley floor ground, with the low elevation, high water table, and damp basements that come with a river valley.",
        "The housing is older village stock — wood frame, stone and block foundations, a meaningful share divided into apartments — and the density is closer to a small town than to the rural country around it.",
      ],
    },
    approach: {
      title: "Valley moisture and shared walls",
      paragraphs: [
        "Two things drive the work. Moisture, from the valley floor: damp basements bringing carpenter ants into softened framing, plus the moisture-seeking insects — centipedes, silverfish, camel crickets — that indicate a humidity problem rather than an infestation. Drainage and ventilation do the durable work there.",
        "And connected buildings: where older housing has been divided into apartments, cockroaches and bed bugs move through shared walls and utility chases, and treating one unit while the others go untouched relocates the population instead of removing it. Buildings need handling as buildings.",
        "The river valley also means real mosquito habitat in a wet summer, where reduction is achievable and elimination is not.",
      ],
    },
    faqs: [
      { q: "I treated my apartment and they came back. Why?", a: "In a divided older building, the population very likely moved to a neighboring unit during treatment and returned after. Connected units — beside, above, and below — need to be inspected and handled together. If you rent, that is a written request to your landlord, and New York's habitability rules support it." },
      { q: "Our basement is damp every spring. Is that why we get insects?", a: "Usually, yes. Waverly's valley-floor ground carries a high water table, and seasonal dampness brings the moisture-seeking insects and softens the wood carpenter ants prefer. Treating them without addressing the water means treating them again next spring." },
    ],
  },

  // =================================================================== CANDOR
  candor: {
    structure: {
      title: "Hills, hollows, and old farmhouses",
      paragraphs: [
        "Candor is rural Tioga County — hill and hollow country along Catatonk Creek, with old farmhouses, wooded lots, and working agricultural land. Properties are large, often with barns and outbuildings, and the terrain means many homes sit on a grade with water moving past them.",
        "Old rural construction dominates: fieldstone foundations, additions built across generations, and more structure per property than any village lot has.",
      ],
    },
    approach: {
      title: "Site-wide, with attention to the slope",
      paragraphs: [
        "Outbuildings matter as much as the house. A barn or shed holding a rodent population keeps the house supplied indefinitely, so knowing where the reservoir is beats servicing the house repeatedly.",
        "On sloped sites, water moving toward a foundation is the usual root cause behind carpenter ants in sill plate and band joist. Grading, gutters, and downspout extensions frequently accomplish more than treatment does.",
        "Cluster flies off the surrounding fields and the October rodent push are the predictable seasonal events, both handled on the exterior and timed for late summer.",
      ],
    },
    faqs: [
      { q: "We are on a hillside and the uphill side of the house is always wet. Is that a pest issue?", a: "It becomes one. Persistent moisture against a foundation softens the sill plate and band joist, and carpenter ants excavate exactly that kind of wood. The colony can be treated, but the durable fix is moving the water — grading, gutters, and downspout extensions." },
    ],
  },

  // ================================================================== SPENCER
  spencer: {
    structure: {
      title: "A rural hamlet at the western edge of Tioga County",
      paragraphs: [
        "Spencer is small and rural, in the hill country at the western end of Tioga County toward the Tompkins line, with older homes, farm properties, and woodland close at hand. The building stock is rural in character — older construction, outbuildings, and lots large enough that field and forest edge are part of most properties.",
      ],
    },
    approach: {
      title: "The rural essentials, done on time",
      paragraphs: [
        "Three things cover most of what a Spencer property needs. A timed exterior treatment on the sunny south and west walls in late summer, which handles cluster flies and the overwintering insects together. Methodical exclusion at the foundation, sill, and utility penetrations before the October rodent push. And attention to outbuildings, which are usually the reason a well-sealed house still gets mice.",
        "Where woodland meets the property, wildlife exclusion at the roofline and tick management at the lawn edge are worth planning rather than reacting to. Bat work is timing-restricted in New York, so it needs scheduling rather than improvising.",
      ],
    },
    faqs: [
      { q: "What does a rural property here actually need in a year?", a: "Realistically three things: an exterior treatment on the sunny walls in late summer, exclusion at the foundation and sill before fall, and the outbuildings kept from holding a population. That covers the large majority of what properties in this area see, and none of it is complicated — it just has to be done ahead of the season." },
    ],
  },
};

export const getTownDeep = (slug: string): TownDeep | undefined => townContentDeep[slug];
