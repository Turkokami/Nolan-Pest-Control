/**
 * neighborhood-content-deep.ts — depth layer for the 14 Ithaca neighborhood pages.
 *
 * ADDITIVE, same contract as the town, county, and service depth layers.
 *
 * The point of this file is differentiation. The existing neighborhood-content.ts is accurate but
 * several of its entries would read the same with the name swapped — "older homes, mice in the fall,
 * carpenter ants in damp wood" is true of most of Ithaca and therefore distinguishes none of it.
 * Every entry here has to name something structural that is true of THAT neighborhood and not of the
 * one next to it: how close the houses stand, what the roofline is like, whether there is commercial
 * kitchen space under the apartments, whether a historic district restricts what can be altered.
 *
 * Two blocks per entry rather than the towns' three — these are smaller pages and padding them to
 * match would defeat the purpose.
 *
 * Sourcing: Cornell Heights district figures (175 acres, 208 contributing buildings, 1898-1942) and
 * the Henry St. John district (80 primary structures) are from the public historic-district records.
 * Nothing here claims a specific job, customer, or result.
 */

export interface HoodBlock {
  title: string;
  paragraphs: string[];
}

export interface NeighborhoodDeep {
  stock: HoodBlock;
  approach: HoodBlock;
  faqs: { q: string; a: string }[];
}

export const neighborhoodContentDeep: Record<string, NeighborhoodDeep> = {
  // =============================================================== COLLEGETOWN
  collegetown: {
    stock: {
      title: "The densest building stock in the county",
      paragraphs: [
        "Collegetown is the one part of our service area where the buildings stack. Purpose-built apartment blocks sit alongside century-old houses that were subdivided into six and eight bedrooms, and a good number of them have commercial space on the ground floor with apartments directly above. That vertical mix is the single most important thing to understand about pests here, and it is why Collegetown behaves differently from every other Ithaca neighborhood.",
        "A restaurant kitchen underneath an apartment is a permanent, heated, well-fed cockroach reservoir with a direct structural connection to the units above it. Plumbing chases, shared walls, and utility risers run continuously through these buildings, and German cockroaches use all of them. A tenant on the third floor can have a roach problem that originates two floors down in a business they have never been inside.",
        "Density also compresses the distances. Buildings stand close enough that rodents move between addresses without crossing open ground, and shared dumpster and refuse areas serve multiple buildings at once. That means the effective unit of a pest problem in Collegetown is frequently the block, not the apartment.",
      ],
    },
    approach: {
      title: "What that means for treatment here",
      paragraphs: [
        "Treating a single Collegetown apartment in isolation is close to pointless when the building is connected the way these are. The units on either side, above, and below need to be inspected, and where there is ground-floor commercial space it has to be part of the conversation. This is not upselling — it is the difference between resolving a problem and relocating it for three months.",
        "For property managers, the economics favor scheduled service over emergency response by a wide margin. A building on a regular program catches an introduction at one unit; a building without one finds out when four tenants complain in the same week, usually mid-semester when access is hardest and vacancies cost the most.",
        "For tenants, the practical advice is to report in writing and report early. Under New York's Warranty of Habitability the landlord is generally responsible, and a dated written report is what makes that responsibility concrete. Early also matters physically — a two-week-old bed bug introduction is a far smaller job than a two-month-old one.",
      ],
    },
    faqs: [
      { q: "There is a restaurant below my apartment and I have roaches. Is that related?", a: "Very likely. Ground-floor commercial kitchens are heated year-round with a constant food source, and the plumbing chases and utility risers connect them directly to the apartments above. German cockroaches travel those routes. Resolving it usually requires the commercial space to be treated as well, which is a landlord and property-manager conversation." },
      { q: "My neighbor has bed bugs. Should I do anything if my unit seems fine?", a: "Yes — ask to have your unit inspected now, in writing. Bed bugs move along shared walls and through outlet and pipe penetrations, and an adjacent unit is the most likely next one. An inspection costs very little compared to catching it late." },
      { q: "Can you service a whole Collegetown building rather than one apartment?", a: "Yes, and for buildings like these that is usually the only approach that holds. We work with property managers on scheduled, documented service across units and buildings, including turnover inspections timed to the August and May move cycles." },
    ],
  },

  // ============================================================ CORNELL HEIGHTS
  "cornell-heights": {
    stock: {
      title: "A planned faculty suburb, now a historic district",
      paragraphs: [
        "Cornell Heights was laid out as an exclusive residential development for Cornell faculty and built out between 1898 and 1942. It is now a designated historic district of roughly 175 acres containing over 200 contributing buildings — stone and brick houses, Tudors, and Craftsman homes on winding, tree-lined streets just north of the Fall Creek gorge. Almost nothing about that description is ordinary, and neither are the pest problems it produces.",
        "These are large, architecturally complicated houses. Steep and multi-planed rooflines, dormers, turrets, deep eaves, and substantial attics give bats, squirrels, and birds far more opportunity than a simple gabled house does, and they give a technician far more surface to inspect. Many of these homes have since been converted into Greek houses, apartments, and multi-tenant student rentals, so a building designed for one family now runs at several times that occupancy, with the food waste and turnover to match.",
        "The historic district designation matters practically, not just aesthetically. Exterior alterations in the district are regulated, which constrains how exclusion work can be done — you cannot simply screen and seal an elevation the way you would on an ordinary house. Work has to be planned to be effective and appropriate at the same time.",
      ],
    },
    approach: {
      title: "Exclusion in a regulated historic district",
      paragraphs: [
        "Wildlife exclusion is the main event in Cornell Heights, and it has to be done with the district in mind. That means materials and methods chosen to be unobtrusive and reversible where possible, and it means planning the work rather than improvising it on the day. A contractor who treats a district home like any other house can create a compliance problem on top of the pest problem.",
        "Bats deserve particular attention here, because these attics are exactly what a maternity colony wants and New York restricts exclusion during the summer maternity season. Sealing at the wrong time traps flightless pups inside, which is inhumane and produces a far worse situation than the one you started with. Inspect any time; schedule the exclusion for the legal window.",
        "On the occupancy side, the Greek houses and multi-tenant conversions carry the same bed bug and cockroach pressure as Collegetown, driven by the same move cycles. A grand old house does not confer any protection — if anything the volume of shared, soft, upholstered furniture in a chapter house raises the exposure.",
      ],
    },
    faqs: [
      { q: "Can you do exclusion work on a home in the historic district?", a: "Yes, and we plan it with the district's restrictions in mind. Exterior alterations here are regulated, so the work needs materials and methods that are effective without being conspicuous, and it needs to be thought through in advance rather than improvised. We would rather raise that with you at the estimate than surprise you later." },
      { q: "I hear scratching in the attic of my Cornell Heights house. What is it likely to be?", a: "In this neighborhood, most often squirrels or bats, occasionally raccoons. The rooflines here — dormers, turrets, deep eaves, big attics — offer a great deal of access. Identifying the species matters before anything is sealed, because with bats there are legal timing restrictions and with raccoons there may be young present." },
      { q: "Our chapter house has a bed bug problem. Can you handle a building that size discreetly?", a: "Yes. Large multi-tenant houses need a coordinated approach across rooms and common areas rather than room-by-room treatment, since upholstered common-area furniture is usually part of how it spreads. We schedule around the house's calendar and provide documentation." },
    ],
  },

  // ================================================================= FALL CREEK
  "fall-creek": {
    stock: {
      title: "A tight grid of small nineteenth-century houses",
      paragraphs: [
        "Fall Creek's defining physical feature is how close together everything is. It is a dense walkable grid of modest older houses on small lots, much of it built as workers' housing in the late 1800s, with buildings standing near enough to one another that a rodent can move down an entire street without ever being exposed in the open. That proximity is the neighborhood's real pest characteristic, and it is not true of Belle Sherman or Cayuga Heights a mile away.",
        "The houses themselves are small, old, and much modified — porches enclosed, kitchens extended, additions added over a century — and every junction between old construction and newer work is a potential gap. Add fieldstone foundations and the usual pre-war balloon framing and you have buildings that are easy to get into and hard to fully seal.",
        "The neighborhood also runs up against the gorge and Ithaca Falls at its edge, which puts a genuine wildlife corridor within a couple of blocks of a dense residential grid. Wooded gorge edge feeding directly into tightly packed housing is an unusual combination.",
      ],
    },
    approach: {
      title: "Why sealing one house only half works here",
      paragraphs: [
        "In a neighborhood this tight, an individual house can be sealed well and still see steady rodent pressure, because the population is supported by the block rather than the building. That does not make exclusion pointless — it is still what keeps them out of your house specifically — but it does mean expectations should be set honestly. A neighbor's open crawlspace or an uncontained refuse area two doors down will keep producing.",
        "The highest-value work on these houses is usually at the junctions: where the enclosed porch meets the original foundation, where an addition ties into the old sill, where a century of utility runs have been punched through. Those are the places we look first, and they are where the openings almost always turn out to be.",
        "For homes near the gorge edge, wildlife exclusion is worth doing properly and proactively. Squirrels and bats entering an attic from a mature tree canopy that connects to the gorge is a predictable annual event, not bad luck.",
      ],
    },
    faqs: [
      { q: "I sealed my house and still get mice. Why?", a: "In Fall Creek the houses stand close enough that the rodent population belongs to the block rather than any one building. Sealing keeps them out of your house, which is the goal, but it does not reduce the population next door. If a neighboring property has an open crawlspace or uncontained trash, pressure stays high and your seal has to hold." },
      { q: "Where do mice usually get into a Fall Creek house?", a: "Most often at the junctions — where an enclosed porch meets the original foundation, where an addition ties into the old sill plate, and at old utility penetrations. These houses have been modified repeatedly over a century, and the seams between eras are where the gaps are." },
      { q: "We back onto the gorge. Does that change anything?", a: "It raises wildlife pressure specifically. A mature canopy connecting to the gorge gives squirrels and bats a route straight to your roofline, so attic and soffit exclusion matters more here than it would a few streets inland." },
    ],
  },

  // ============================================================== BELLE SHERMAN
  "belle-sherman": {
    stock: {
      title: "Owner-occupied family housing on East Hill",
      paragraphs: [
        "Belle Sherman is one of the more settled parts of Ithaca — early-twentieth-century family homes around the elementary school, with a much higher share of long-term owner-occupancy than the student neighborhoods that surround it on the same hill. That single fact changes the pest profile substantially, because owner-occupied houses get maintained continuously rather than between leases.",
        "What these houses have instead is yard and tree. Established plantings, mature trees close to the structure, decks, sheds, and play equipment are the neighborhood's characteristic features, and they are also where its characteristic pest problems live: yellowjackets and paper wasps in soffits, under decking, and in playsets; ants nesting under walkways and patios and foraging inside; and squirrels using overhanging limbs as a bridge to the roof.",
      ],
    },
    approach: {
      title: "Prevention is actually worth it here",
      paragraphs: [
        "In a neighborhood of long-term owners, preventive work pays back in a way it does not in high-turnover rentals. Sealing a house properly once, keeping trees cut back off the roofline, and staying ahead of nesting season is genuinely cheaper over a decade than reacting each time something appears — and unlike a landlord, an owner here captures that benefit directly.",
        "Stinging insects are the priority call. Around family homes with kids and pets, yellowjackets in a wall void or under a deck are a safety issue rather than an inconvenience, and partial DIY treatment is the common way people get hurt, because an agitated colony in a wall can push inward toward living space. It is a fast job for someone equipped for it.",
        "For ants, the useful thing to know is that what you see indoors is a foraging trail from a colony outside. Treating the counter accomplishes nothing durable. Perimeter work and finding the nest is what ends it.",
      ],
    },
    faqs: [
      { q: "There is a wasp nest under my deck and we have young kids. How fast can you come?", a: "Stinging insect calls around family homes get priority scheduling. Please do not treat it yourself — a partial knockdown of a yellowjacket colony under decking or in a wall void can drive the colony inward toward the living space, which is a much worse problem than the one you have now." },
      { q: "Squirrels keep getting on my roof. What actually stops them?", a: "Cutting back the limbs that bridge to the roofline, then sealing the entry points they have been using. Removal alone is temporary — another squirrel will use the same opening within a season, because the opening is what makes the roof attractive." },
      { q: "Is a preventive plan worth it for an owner-occupied home?", a: "In this neighborhood, generally yes. Long-term owners capture the benefit of proper sealing and seasonal timing directly, and staying ahead of nesting and overwintering season costs less over years than reacting to each problem as it appears." },
    ],
  },

  // =================================================================== NORTHSIDE
  northside: {
    stock: {
      title: "Low ground near the creeks",
      paragraphs: [
        "Northside sits on the flats rather than the hills, and elevation is the thing that makes it different. Being on low ground near the creeks and the lake plain means a higher water table and damper basements than anywhere on East or South Hill, and moisture is the underlying condition behind a whole category of pest problems.",
        "The housing is mixed — older single-family homes alongside multi-family buildings and apartment stock — so the neighborhood carries both the structural problems of age and the shared-wall problems of density, without the extreme concentration of Collegetown. Basements here are the part of the building that most often needs attention.",
      ],
    },
    approach: {
      title: "Deal with the water and you deal with most of it",
      paragraphs: [
        "Damp basements support the pests that most people find worst: carpenter ants excavating softened sill plate and joists, silverfish and centipedes and other moisture-seeking insects, and the general conditions that make a building attractive to rodents looking for somewhere stable to overwinter. Treating those pests without addressing the moisture means treating them again.",
        "The honest advice in this neighborhood is frequently drainage and ventilation before pesticide — grading, gutters, downspout extensions, a dehumidifier, a vapor barrier in a dirt crawlspace. We will treat the pest, but we would rather tell you that the recurring problem has a plumbing or drainage answer than sell you a recurring treatment.",
        "In the multi-family stock, the usual shared-building rules apply: connected units need to be handled together, and a landlord's documented, scheduled service is both cheaper and safer than responding unit by unit.",
      ],
    },
    faqs: [
      { q: "Why is my basement full of centipedes and silverfish?", a: "Both are moisture-seeking insects, and Northside's low ground and higher water table make damp basements common here. They are a symptom rather than the problem. Reducing the moisture — drainage, ventilation, a dehumidifier, a vapor barrier over dirt — does more than any spray." },
      { q: "I have large black ants in the basement. Is that serious?", a: "It is worth taking seriously, because carpenter ants excavate wood that has been softened by moisture, and in a damp Northside basement there is usually somewhere for them to work. We find and treat the nest, then look at why the wood is wet." },
    ],
  },

  // =================================================================== SOUTHSIDE
  southside: {
    stock: {
      title: "Nineteenth-century housing just south of the Commons",
      paragraphs: [
        "The area south of the Commons contains some of the oldest residential building stock in the city, dense and close-set, and part of it falls within the city-designated Henry St. John historic district, which covers roughly 80 primary structures dating largely to the nineteenth century. Housing of that age, at that density, this close to downtown, produces a predictable set of structural pest problems.",
        "These are buildings with fieldstone and rubble foundations, balloon framing, deep basements, and a great deal of accumulated modification. Many have been divided into apartments at some point in their history, which adds shared walls and connected utility runs to the list. Proximity to the downtown commercial core also means proximity to commercial refuse handling, which supports rodent populations at a scale residential blocks do not.",
      ],
    },
    approach: {
      title: "Old buildings, close together, near commercial refuse",
      paragraphs: [
        "Rodent exclusion on housing this old is detailed work. There is no single gap to close — there are dozens of small ones at the foundation, sill, and utility penetrations, and doing it properly means going around the building methodically rather than plugging the obvious hole. That is also why it lasts when it is done right.",
        "Where a house has been divided into units, the building has to be treated as one structure. Bed bugs and cockroaches move between apartments through shared walls and chases regardless of how well any individual tenant keeps their unit, and unit-by-unit treatment is the standard way these problems become permanent.",
        "Because the commercial core is close, exterior rodent pressure here is partly a function of how nearby refuse is handled. Sealing your building is entirely within your control and worth doing; the surrounding population often is not, which is worth knowing when setting expectations.",
      ],
    },
    faqs: [
      { q: "My building is over a century old. Is it even possible to keep mice out?", a: "Yes, but it takes a methodical pass rather than one repair. Buildings of this era have many small openings at the foundation, sill, and utility penetrations rather than one obvious entry. Done properly, exclusion on an old house holds for years." },
      { q: "I keep treating my apartment and the roaches come back.", a: "In a divided older house, cockroaches move between units through shared walls and plumbing chases, so treating one apartment moves the population rather than removing it. The building needs to be handled together. If you rent, that is a written request to your landlord, and New York's habitability rules are on your side." },
    ],
  },

  // ================================================================== SOUTH HILL
  "south-hill": {
    stock: {
      title: "Ithaca College rentals on a steep grade",
      paragraphs: [
        "South Hill is the Ithaca College counterpart to Collegetown, and while the rental dynamic is similar the buildings are not. This is largely older single-family housing converted to student rentals rather than purpose-built apartment blocks, spread over a steep grade, with houses stepped into the hillside so that a basement or lower level is below grade on the uphill side and fully exposed on the downhill side.",
        "That hillside geometry is the neighborhood's structural signature. It holds moisture against the uphill foundation wall, which softens sill plate and framing, and it creates walk-out lower levels with doors and windows at grade — convenient entry at ground level for rodents on one side of the house while the other side is buried.",
        "The IC academic calendar drives the same August and May turnover as Cornell's, so the furniture churn and the bed bug redistribution that comes with it apply here in full.",
      ],
    },
    approach: {
      title: "Work the uphill wall",
      paragraphs: [
        "On a stepped hillside house the uphill foundation wall is where a disproportionate share of problems originate, and it is the first place worth looking. Persistent damp there means carpenter ant risk in the sill and band joist, and the fix is usually drainage — regrading, extending downspouts, keeping water moving away — rather than repeated treatment.",
        "The exposed downhill side needs different attention: doors, walk-out slider thresholds, and utility penetrations at grade are straightforward rodent entries and are straightforward to seal, which makes them high-value work.",
        "For landlords with converted houses, the turnover window is the cheapest time to do anything. An empty unit between leases is when inspection, treatment, and sealing are easiest, and it is far less disruptive than doing the same work around occupied bedrooms in October.",
      ],
    },
    faqs: [
      { q: "My rental is built into the hill and the uphill wall is always damp. Is that causing my ant problem?", a: "Very likely. Moisture held against the uphill foundation softens the sill plate and band joist, and carpenter ants excavate exactly that. We treat the colony, but the durable fix is moving water away from that wall — grading, gutters, and downspout extensions." },
      { q: "When should a South Hill student rental be serviced?", a: "At turnover, in the weeks between leases. The unit is empty, access is easy, and it is the point in the year when bed bugs are most likely to have been introduced or removed with furniture. Doing the same work mid-semester costs more and disrupts tenants." },
    ],
  },

  // =================================================================== EAST HILL
  "east-hill": {
    stock: {
      title: "Mixed occupancy on the steepest ground in the city",
      paragraphs: [
        "East Hill runs from the edge of downtown up to Cornell, and it holds a genuine mix — faculty and staff households, long-term owners, and student rentals, often on the same street. It is also the steepest sustained residential ground in Ithaca, cut by gorges, which means retaining walls, stepped foundations, and a great many houses where the relationship between the building and the slope is complicated.",
        "That mix of occupancy is worth naming, because it means the neighborhood generates two different kinds of call. An owner-occupied house here has the problems of a well-maintained old building on difficult ground: moisture, wildlife, overwintering insects. A student rental two doors down has the problems of Collegetown. They need different answers.",
      ],
    },
    approach: {
      title: "Slope, water, and two kinds of building",
      paragraphs: [
        "On steep ground, water is the variable that decides most outcomes. Roof runoff and surface water heading downhill toward a foundation, retaining walls holding damp soil against a wall, and stepped foundations with multiple grade lines all create the moisture conditions that carpenter ants and wood-destroying organisms need. Inspecting the grade is genuinely part of inspecting for pests here.",
        "The gorge edges bring wildlife right into the neighborhood, so attic and soffit exclusion carries more weight on East Hill than in flatter parts of the city. Mature canopy touching a roofline is an invitation, and trimming it back is cheap compared with what follows.",
        "For rentals, the shared-building rules apply exactly as they do in Collegetown, and the same turnover timing makes sense.",
      ],
    },
    faqs: [
      { q: "There is a retaining wall against my foundation and I have carpenter ants. Connected?", a: "Frequently, yes. Retaining walls hold damp soil against the structure, and persistently wet sill plate or framing behind them is prime carpenter ant habitat. We locate the nest, but improving drainage behind the wall is what stops it recurring." },
      { q: "Do you handle both owner-occupied homes and student rentals on East Hill?", a: "Yes, and they genuinely are different jobs. An owner's house usually wants preventive sealing, wildlife exclusion, and moisture work. A rental usually wants turnover inspection, coordinated treatment across units, and documentation. We would rather do the right one than the same one." },
    ],
  },

  // =================================================================== WEST HILL
  "west-hill": {
    stock: {
      title: "Where the city runs out into open ground",
      paragraphs: [
        "West Hill climbs away from the flats on the other side of the city and reaches open country faster than the other hills do. Housing is a mix of older homes and newer construction, on generally larger lots, and the neighborhood's real distinguishing feature is its edge — fields, hedgerow, and woodland begin within a short distance of houses.",
        "That edge condition sets the pest profile. Proximity to open field means substantially more cluster fly pressure in late summer than the dense inner neighborhoods get, because cluster flies develop in the soil of fields and lawns rather than in buildings. It also means more wildlife traffic, more overwintering insects massing on sunny walls, and more ticks where mown grass meets the tree line.",
      ],
    },
    approach: {
      title: "Treat the outside of the building, before the fall",
      paragraphs: [
        "For cluster flies and overwintering insects, the whole game is timing and exterior work. An application to the sunny south and west elevations in late summer, before they gather, is worth far more than anything done indoors in October — once they are in the wall voids there is no practical way to reach them, and the flies at your windows in February have been in the walls since fall.",
        "Newer construction on this side of the city is tighter than the old housing downtown, which helps, but it does not exempt a house from field pressure. Homeowners in the newer developments are often surprised to have an enormous fly problem in a modern house; the flies come from the ground around it, not from its age.",
        "Where lots back onto woodland, wildlife exclusion and tick management around the lawn edge are worth planning rather than reacting to.",
      ],
    },
    faqs: [
      { q: "My house is new. Why do I have thousands of flies on the south wall in September?", a: "Because cluster flies come from the surrounding fields, not from the house. West Hill reaches open ground quickly, and the flies move to warm sunny walls in late summer looking for a way into the wall voids. A tight modern house has fewer entries, but the fix is still a timed exterior treatment before they gather." },
      { q: "We back onto woods. What should we be doing about ticks?", a: "Focus on the edge where mown lawn meets tall grass and tree line, since that transition is where exposure concentrates. Keeping that boundary maintained helps materially, and we can treat the harborage areas. Personal checks after yard work still matter — no treatment makes a wooded property tick-free." },
    ],
  },

  // ========================================================= DOWNTOWN / COMMONS
  "downtown-commons": {
    stock: {
      title: "Mixed-use buildings sharing walls, alleys, and refuse",
      paragraphs: [
        "The Commons and the surrounding downtown blocks are commercial ground floors with apartments and offices above, in buildings that share party walls and back onto shared service alleys. It is the most structurally interconnected part of the city, and pest problems here follow the connections rather than the property lines.",
        "Restaurants and food service concentrate the two things that sustain pest populations — warmth and a reliable food stream — and the shared refuse and loading areas behind the buildings concentrate them further. A single poorly managed dumpster area can support a rodent population that services an entire block, including the residential units upstairs.",
      ],
    },
    approach: {
      title: "Block-level problems need block-level thinking",
      paragraphs: [
        "For a downtown business, the exterior and the refuse area do most of the work. A kitchen can be immaculate and still have rodents if what is behind the building is feeding them, and the honest answer is frequently that the effective fix involves a neighboring property. That is a conversation worth having early and neighborly, because the alternative is both businesses paying for treatment indefinitely.",
        "Documentation is the other half of commercial work here. Scheduled service with records is what stands up at inspection, and for food service the value of a clean, current file is hard to overstate.",
        "For residents in apartments above commercial space, the important thing to know is that your problem may not originate in your unit. Roaches and rodents travel from the commercial floor through shared chases and risers. Reporting in writing to the building's management is the route to an actual fix.",
      ],
    },
    faqs: [
      { q: "My restaurant kitchen is spotless but we still see mice. How?", a: "Almost always the exterior. Shared alleys, loading areas, and dumpsters behind downtown buildings support rodent populations that no amount of interior cleaning affects. Exterior management and refuse handling do most of the work, and where a neighboring property is the source it is worth raising with them directly." },
      { q: "Can you work around our service hours?", a: "Yes. We schedule downtown commercial work before opening or after close, and provide inspection-ready documentation for your file." },
      { q: "I live above a downtown business and have roaches. Whose problem is it?", a: "Structurally it is usually the building's, since roaches move up from commercial space through shared plumbing chases and risers. Report it in writing to management — under New York habitability rules the landlord is generally responsible, and a documented report is what starts the process." },
    ],
  },

  // ================================================================ FOREST HOME
  "forest-home": {
    stock: {
      title: "A wooded hamlet in a gorge",
      paragraphs: [
        "Forest Home is unlike anywhere else on this list — a small, old, tightly held community set right along Fall Creek in the gorge, heavily wooded, with historic houses on irregular lots and water running through the middle of it. It reads more like a village dropped into a ravine than a city neighborhood, and its pest profile follows the setting rather than any urban pattern.",
        "Dense mature canopy directly over rooflines, a permanent watercourse, and old houses in a damp, shaded, low-lying setting add up to sustained pressure from exactly three directions: wildlife with easy roof access, moisture in structures that do not get much sun to dry them, and the insects that both of those conditions favor.",
      ],
    },
    approach: {
      title: "Canopy, water, and old wood",
      paragraphs: [
        "Wildlife exclusion is the core work here. Squirrels, raccoons, and bats all have straightforward access where limbs overhang roofs, and in a setting this wooded that is most houses. Trimming back the canopy where it touches the structure and sealing the roofline properly is the durable answer; trapping alone simply creates a vacancy.",
        "Moisture is the second front. Shaded, damp, older houses near a creek hold water in ways a sunny hillside house does not, and softened wood invites carpenter ants and, over time, wood-destroying organisms. Ventilation, drainage, and keeping vegetation off the siding matter more here than almost anywhere else in Ithaca.",
        "With bats specifically, remember New York's maternity-season restrictions. In a neighborhood with this many good bat roosts, planning the exclusion for the legal window is not a formality — doing it at the wrong time seals flightless young inside.",
      ],
    },
    faqs: [
      { q: "Something is living in my roof and we are surrounded by trees. What now?", a: "First, identify the species, because it decides both the method and the timing. Squirrels, raccoons, and bats all use overhanging limbs to reach roofs here. With bats there are legal seasonal restrictions on exclusion, and with raccoons there may be dependent young, so sealing before identification can go badly wrong." },
      { q: "Everything here is damp and shaded. Does that make pest problems worse?", a: "It makes moisture-related ones worse, yes. Houses that do not get sun to dry them hold water in siding, sills, and framing, and softened wood is what carpenter ants and wood-destroying organisms look for. Ventilation, drainage, and keeping vegetation cut back off the structure all help materially." },
    ],
  },

  // =========================================================== CODDINGTON ROAD
  "coddington-road": {
    stock: {
      title: "Student rentals thinning into countryside",
      paragraphs: [
        "The Coddington Road corridor runs out from Ithaca College along South Hill and changes character as it goes. The end nearest campus is student rental housing with all the density and turnover that implies; a mile or two out, the same road is rural — larger lots, woodland, fields, and old houses that have nothing to do with the college at all.",
        "That gradient is the useful thing to know, because it means two genuinely different pest situations exist on one road. Near campus the problems are bed bugs, roaches, mice, and turnover. Further out they are cluster flies off the fields, wildlife from the woodland, and rodents moving in from open ground each fall.",
      ],
    },
    approach: {
      title: "Where you are on the road decides the job",
      paragraphs: [
        "For the rental end, the same logic as South Hill and Collegetown applies: treat connected units together, use the turnover window for inspection and sealing, and keep documentation for habitability purposes.",
        "For the rural end, the work is exterior and seasonal. A timed late-summer application on sunny elevations for cluster flies and overwintering insects, exclusion before fall for rodents coming off the fields, and attention to outbuildings, which on a rural property are frequently the reservoir that keeps re-supplying the house.",
        "The honest version of this is that a company treating the whole corridor the same way is getting it wrong at one end or the other.",
      ],
    },
    faqs: [
      { q: "I am out past the student housing on Coddington. Are my problems the same?", a: "Generally not. Out that way the pressure is rural — cluster flies from the surrounding fields in late summer, rodents moving in from open ground in fall, and wildlife from the woodland. The rental-driven problems nearer campus are a different job with different timing." },
      { q: "Do outbuildings matter?", a: "On the rural end, a great deal. A barn, shed, or garage holding a rodent population will keep re-supplying the house no matter how well the house itself is sealed. Dealing with the reservoir is usually cheaper than servicing the house repeatedly." },
    ],
  },

  // =============================================================== DANBY ROAD
  "danby-road": {
    stock: {
      title: "The 96B corridor, campus to state forest",
      paragraphs: [
        "The Danby Road corridor runs south from Ithaca College along Route 96B and, like Coddington, transitions from campus-adjacent rental housing into genuinely rural country — in this direction toward Danby and the state forest land beyond it. Within a few miles the housing goes from student rentals to farmhouses and homes on wooded acreage.",
        "The rural end of this corridor has more woodland and state forest influence than most of our Ithaca service area, which means more consistent wildlife pressure — squirrels, raccoons, bats — and the tick exposure that comes with living against forest edge.",
      ],
    },
    approach: {
      title: "Two jobs on one road",
      paragraphs: [
        "Near campus, rental logic applies: coordinated treatment across connected units, turnover-timed inspection and sealing, documentation for the landlord's file.",
        "Toward Danby, the work is wildlife exclusion done properly on older houses with a lot of openings, seasonal exterior treatment for cluster flies and overwintering insects, and rodent exclusion that accounts for outbuildings as well as the house. Bat work anywhere along here has to respect New York's maternity-season timing.",
        "Tick management at the lawn-and-woodland boundary is worth taking seriously on the rural end, with the caveat that no treatment makes a forest-edge property tick-free and anyone claiming otherwise is overselling.",
      ],
    },
    faqs: [
      { q: "We are out toward Danby against the forest. What is realistic for ticks?", a: "Meaningful reduction, not elimination. Treating the harborage and maintaining the boundary where mown lawn meets tall grass and tree line makes a real difference to exposure around the house. Personal checks after time outdoors still matter — a property against state forest will never be tick-free." },
      { q: "There are bats in my old farmhouse. When can they be excluded?", a: "Not during the summer maternity season, when flightless pups would be sealed in without the adults. New York restricts the work for that reason. We can inspect at any time and schedule the exclusion for the window when it is both legal and humane." },
    ],
  },

  // ====================================================== CAYUGA HEIGHTS VILLAGE
  "cayuga-heights-village": {
    stock: {
      title: "Large homes under a mature canopy",
      paragraphs: [
        "Cayuga Heights is a separate incorporated village rather than part of the city, and it looks it: substantial homes on generous lots under an unusually mature tree canopy, quiet streets, and very little of the rental turnover that drives pest work elsewhere around Ithaca. Occupancy is stable and the housing is well maintained.",
        "What defines pest pressure here is the canopy and the lot size. Old, large trees with limbs reaching over roofs give squirrels, raccoons, and bats direct access to soffits, dormers, and attics, and large wooded lots put wildlife close to the house year-round. These are also big houses with complex rooflines and substantial attics, which means more to inspect and more places for something to settle in unnoticed.",
      ],
    },
    approach: {
      title: "Wildlife exclusion, done once and done right",
      paragraphs: [
        "The characteristic Cayuga Heights job is wildlife in the attic or soffit, and the characteristic mistake is removal without exclusion. Trapping the squirrel currently in the attic creates a vacancy at an opening that is still there, and something else will find it, usually within the same year. Sealing the entry points is what actually ends it.",
        "Canopy management is the other half. Limbs overhanging or touching the roof are the access route, and cutting them back does more to prevent recurrence than anything done inside the attic. On lots with trees this size that is real tree work, but it is a one-time cost against an annual problem.",
        "Bats are common in housing like this and are subject to New York's maternity-season restrictions, so exclusion has to be timed. In a large house with a complicated roofline, a proper inspection to find every access point before sealing is worth the time — sealing most of the openings on a bat roost is worse than sealing none.",
      ],
    },
    faqs: [
      { q: "We had a squirrel removed last year and now there is another one. Why?", a: "Because the opening it used is still open. Removal without exclusion leaves a known, accessible entry point, and wildlife finds it again — often within the same year. Sealing the entries, and cutting back the limbs that give access to the roof, is what makes it stop." },
      { q: "How do you handle bats in a large house with a complicated roof?", a: "With a thorough inspection first, to find every access point before anything is sealed. Partially sealing a bat roost traps animals inside, which is worse than leaving it alone. Once we know the full picture we schedule the exclusion for the window New York allows, outside the maternity season." },
      { q: "Do we need service if we do not have a problem right now?", a: "Not necessarily, but a preventive inspection is worth more here than in most neighborhoods, because these are large houses with complex rooflines where something can be established for a while before you notice. Catching an entry point before it is in use is inexpensive." },
    ],
  },
};

export const getNeighborhoodDeep = (slug: string): NeighborhoodDeep | undefined =>
  neighborhoodContentDeep[slug];
