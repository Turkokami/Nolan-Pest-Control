/**
 * verticals.ts — Tier 7 commercial verticals (audit §8.8), rebuilt as deep standalone pages.
 * Each renders at /commercial/[vertical] with AEO answer lead, NY-compliance content, our approach,
 * pest profile, pricing model, and an 8-question FAQ, plus Service + FAQPage + speakable schema.
 *
 * NY regulatory references are content architecture, NOT legal advice — the pages themselves note
 * that current statute text and county participation should be confirmed with counsel/NYSDEC.
 * Grounded in: NYS Sanitary Code Part 14 (Subpart 14-1, §14-1.160 Insect & Rodent Control);
 * NY Neighbor Notification Law (ECL Art. 33 / DOH — Tompkins County participates); Child Safe
 * Playing Fields Act (2010); Real Property Law §235-b (Warranty of Habitability); NYSDEC pesticide
 * business registration + certified applicator requirements.
 */

export interface VerticalSection {
  title: string;
  body: string[];
}

export interface Vertical {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  answerLead: string; // AEO / speakable direct answer (1–3 sentences)
  intro: string[];
  whyItMatters: VerticalSection;
  compliance: VerticalSection;
  ourApproach: string[];
  whatsCovered: string[];
  pests: string[];
  pricingModel: string[];
  faqs: { q: string; a: string }[];
}

export const verticals: Vertical[] = [
  {
    slug: "landlord-rental-property-pest-control",
    name: "Landlord & Rental Property Pest Control",
    shortName: "Landlord & Rentals",
    metaTitle: "Landlord & Rental Property Pest Control in Central NY",
    metaDescription:
      "Documented, coordinated pest control for Central New York landlords and rental properties — bed bugs, roaches, mice — with the habitability compliance (NY RPL §235-b) owners need. Call (607) 269-6218.",
    answerLead:
      "In New York, landlords are generally responsible for pest infestations in rental units under the Warranty of Habitability (Real Property Law §235-b). Nolan Pest Control provides documented, coordinated, multi-unit treatment that resolves the problem and gives owners the paper trail habitability situations require.",
    intro: [
      "For a rental-property owner in Central New York, a pest problem is never just a pest problem — it is a legal obligation, a tenant-relations issue, and a threat to the value of the unit, all at once. An infestation ignored in one apartment becomes an infestation in three, and a tenant who feels unheard becomes a complaint to code enforcement. Handled well, though, pest control is simply routine, documented maintenance that protects the asset and keeps tenants housed and satisfied.",
      "We work with landlords across Tompkins, Cortland, Chemung, Schuyler, and Tioga counties — from single-unit owners to small portfolios — providing the discreet, coordinated, well-documented service that rental housing actually needs. That means treating connected units together so pests can't just migrate and return, scheduling around tenants, and giving you records you can rely on.",
    ],
    whyItMatters: {
      title: "Why rental pest control is different",
      body: [
        "Rental buildings share walls, plumbing chases, and utility runs, which means pests share them too. German cockroaches and mice move between units through the same gaps that carry pipes and wiring; bed bugs travel in belongings and through baseboards. Treating a single unit while the one next door is infested simply pushes the population back and forth — which is why single-unit treatment so often 'fails.' Effective rental pest control is building-level, not unit-level.",
        "There's also a documentation dimension unique to rentals. When a habitability question arises, what protects an owner is a clear record: the report of the infestation, the treatment performed, the follow-up, and the tenant communication around it. We build that record as part of the service, so you're never reconstructing events after the fact.",
      ],
    },
    compliance: {
      title: "New York habitability & your obligations",
      body: [
        "New York's Warranty of Habitability (Real Property Law §235-b) entitles residential tenants to a livable, safe, and sanitary home, and courts have generally treated significant infestations — rodents, cockroaches, bed bugs — as conditions that can breach that warranty when a landlord fails to address them. In practice, that places primary responsibility for infestations on the owner, not the tenant.",
        "Prompt, professional, documented treatment is how you meet that obligation and limit exposure. We provide dated service records, treatment descriptions, and follow-up confirmation suitable for your files, your management company, or a habitability discussion. (This is general information, not legal advice; specific situations vary and should be reviewed with counsel.)",
      ],
    },
    ourApproach: [
      "Building-level treatment: we inspect and treat connected units together so pests can't shift and return, rather than chasing one apartment at a time.",
      "Discreet, tenant-friendly scheduling: low-profile visits timed around tenants, with clear prep instructions communicated in advance.",
      "Documented service: dated records of the infestation, treatment, and follow-up you can keep on file for habitability and management purposes.",
      "Recurring protection: optional scheduled service between turnovers so problems are prevented, not just reacted to.",
      "Turnover treatments: pre-move-in inspection and treatment so a new tenant doesn't inherit the last one's problem.",
    ],
    whatsCovered: [
      "Bed bug inspection, treatment, and required follow-up (with unit coordination)",
      "German cockroach elimination via source baiting across connected units",
      "Rodent control plus exclusion sealing of shared entry points",
      "Documented reporting for owners and property managers",
      "Unit-turnover inspections and preventative treatment",
    ],
    pests: ["bed bugs", "German cockroaches", "mice", "rats", "ants", "occasional invaders"],
    pricingModel: [
      "Rental work is priced by unit count, building size, and the pests involved, and is most cost-effective on a recurring or per-building basis rather than one-off calls. Portfolio owners can arrange standing pricing.",
      "Because bed bugs and roaches almost always require a follow-up, we quote those as short programs — the price you're given actually resolves the problem, not just the first visit.",
    ],
    faqs: [
      { q: "In New York, is the landlord or tenant responsible for pest control?", a: "Generally the landlord. Under the Warranty of Habitability (RPL §235-b), significant infestations can breach a landlord's obligation to keep a unit livable, so responsibility for treatment usually falls on the owner. We document the work for your files. (General information, not legal advice.)" },
      { q: "Why do bed bugs or roaches keep coming back after treating one unit?", a: "Because they migrate between connected units through shared walls and plumbing. Treating one apartment while an adjoining one is infested just moves them back and forth. We treat connected units together, which is what actually ends it." },
      { q: "Do you provide documentation for habitability or code purposes?", a: "Yes. We give you dated records of the infestation, treatment performed, and follow-up — the kind of paper trail owners and managers rely on in habitability discussions and inspections." },
      { q: "Can you coordinate with my tenants and property manager?", a: "Yes. We schedule discreetly around tenants, provide prep instructions in advance, and work directly with your management company on access and reporting." },
      { q: "Do you offer recurring service for rental buildings?", a: "Yes. Many owners do best with scheduled recurring service that prevents problems between turnovers, plus turnover inspections so new tenants don't inherit an old issue." },
      { q: "How fast can you respond to a tenant complaint?", a: "We prioritize active infestations, especially bed bugs and roaches that spread quickly in multi-unit buildings. Call us and we'll get you scheduled promptly." },
      { q: "Do you serve student rentals near Cornell and Ithaca College?", a: "Yes — extensively. Student housing has its own move-cycle dynamics; see our student-housing page for how we handle the August and May turnover." },
      { q: "What areas do you cover for landlords?", a: "Tompkins, Cortland, Chemung, Schuyler, and Tioga counties, including Ithaca, Cortland, Elmira, and the surrounding towns." },
    ],
  },

  {
    slug: "student-housing-pest-control",
    name: "Student Housing Pest Control",
    shortName: "Student Housing",
    metaTitle: "Student Housing Pest Control — Cornell & Ithaca College Rentals",
    metaDescription:
      "Coordinated, discreet pest control for off-campus student housing around Cornell and Ithaca College — bed bugs, roaches, mice — timed to the August and May move cycles. Call (607) 269-6218.",
    answerLead:
      "Off-campus student housing around Cornell and Ithaca College faces heavy bed bug, cockroach, and rodent pressure driven by dense occupancy, secondhand furniture, and the August and May move cycles. Nolan Pest Control provides coordinated, documented, discreet treatment timed to the academic calendar — and helps landlords meet their New York habitability obligations.",
    intro: [
      "Ithaca's off-campus rental market is one of the most pest-active environments in upstate New York, and student housing is its epicenter. Collegetown, Cornell Heights, South Hill, and the Coddington and Danby corridors pack aging housing, shared-wall apartments, Greek houses, and constant tenant turnover into a few square miles. The result is a self-renewing demand for exactly the pests that spread fastest — bed bugs, German cockroaches, and mice.",
      "We serve landlords, property managers, and Greek organizations across Ithaca's student neighborhoods with treatment built around how student housing actually works: whole-building coordination, discreet visits, and scheduling that anticipates the move cycles when infestations spread.",
    ],
    whyItMatters: {
      title: "Why the move cycle drives everything",
      body: [
        "Student housing turns over almost entirely twice a year — a wave of move-outs and move-ins in August, and again around May. During those windows, mattresses, couches, and boxes change hands and travel between buildings, which is precisely how bed bugs and roaches spread across a neighborhood. A unit that was clean in July can be infested by September without anyone doing anything 'wrong.'",
        "That predictability is an advantage if you use it. Pre-move-in inspections and treatments, turnover protocols, and building-level coordination during the move windows prevent the neighborhood-wide spread that reactive, one-unit-at-a-time treatment can't keep up with. Getting ahead of the calendar is the whole game in student housing.",
      ],
    },
    compliance: {
      title: "Habitability in student rentals",
      body: [
        "Student tenants have the same protections as any residential tenant in New York. Under the Warranty of Habitability (RPL §235-b), landlords are generally responsible for addressing infestations, and bed bugs in particular are a frequent source of tenant complaints and disputes in college housing. Prompt, documented treatment protects both the students and the owner.",
        "We provide the dated documentation landlords and management companies need, and we coordinate across the connected units and buildings that student portfolios often involve. (General information, not legal advice.)",
      ],
    },
    ourApproach: [
      "Move-cycle scheduling: turnover inspections and treatments timed to August and May, when spread is highest.",
      "Whole-building and multi-property coordination for landlords and Greek houses with many connected units.",
      "Discreet service that respects student tenants and keeps units rentable.",
      "Documented treatment for owners, managers, and habitability purposes.",
      "Clear, simple prep instructions students will actually follow.",
    ],
    whatsCovered: [
      "Bed bug inspection, treatment, and follow-up across units and buildings",
      "German cockroach elimination in kitchens and shared spaces",
      "Rodent control and exclusion in older student housing",
      "Pre-move-in turnover inspections and treatment",
      "Greek house and multi-tenant coordination",
    ],
    pests: ["bed bugs", "German cockroaches", "mice", "ants", "fruit flies"],
    pricingModel: [
      "Student-housing work is priced by unit and building count and the pest involved, and is best arranged on a per-building or portfolio basis with turnover treatments built in.",
      "Bed bug and roach jobs are quoted as programs including the required follow-up, since a single visit doesn't end them.",
    ],
    faqs: [
      { q: "Why is student housing so prone to bed bugs?", a: "Dense occupancy, secondhand furniture, frequent travel, and the twice-a-year move cycle all move bed bugs between units and buildings. It's about exposure and turnover, not cleanliness — spotless units get them too." },
      { q: "When should student rentals be treated?", a: "Around the August and May move windows, when spread is highest, plus fall for rodents. Pre-move-in inspections and turnover treatments prevent a new tenant from inheriting a problem." },
      { q: "Do you work with Greek houses and large multi-tenant houses?", a: "Yes. Large houses need whole-building, coordinated treatment and documentation, which is exactly how we approach bed bugs, roaches, and mice in Cornell Heights, Collegetown, and South Hill." },
      { q: "As a landlord, am I responsible for bed bugs in a student rental?", a: "Generally yes, under New York's Warranty of Habitability (RPL §235-b). We document the infestation and treatment and coordinate across units. (General information, not legal advice.)" },
      { q: "Can you keep treatment discreet?", a: "Yes. Discretion matters in shared student housing; we keep visits and vehicles low-profile and provide simple prep instructions." },
      { q: "Do you coordinate across multiple properties?", a: "Yes. For landlords and managers with several student properties, we coordinate scheduling and reporting across the whole portfolio, especially during the move windows." },
      { q: "What neighborhoods do you cover?", a: "All of Ithaca's student areas — Collegetown, Cornell Heights, South Hill, Fall Creek, and the Coddington and Danby Road corridors — plus Cortland's SUNY rentals." },
      { q: "How fast can you respond during move-in week?", a: "We plan capacity around the August and May windows and prioritize infestation calls. Book early for turnover work, and we'll fit urgent issues in quickly." },
    ],
  },

  {
    slug: "property-management-pest-control",
    name: "Property Management Pest Control",
    shortName: "Property Management",
    metaTitle: "Property Management Pest Control in Central NY",
    metaDescription:
      "Portfolio pest control for Central New York property managers — per-door pricing, consolidated reporting, coordinated multi-unit treatment, and habitability documentation. Call (607) 269-6218.",
    answerLead:
      "Nolan Pest Control provides property managers across Central New York with portfolio-level pest control: per-door pricing, consolidated reporting, coordinated multi-building treatment, and the documentation habitability and owner-reporting require — one local partner instead of a patchwork of one-off calls.",
    intro: [
      "Property managers carry a specific burden: they answer to owners on cost and reporting, to tenants on responsiveness, and to the law on habitability — often across dozens or hundreds of doors in different buildings. A reliable, documented pest-control partner turns one of the most complaint-prone parts of the job into predictable, scheduled maintenance.",
      "We work with management companies across Tompkins, Cortland, Chemung, Schuyler, and Tioga counties to provide consistent, portfolio-wide service: scheduled preventative visits, fast response to unit complaints, coordinated treatment across connected units, and consolidated records you can hand straight to ownership.",
    ],
    whyItMatters: {
      title: "Why portfolios need a single partner",
      body: [
        "When pest control is handled ad hoc — a different call for every complaint — costs are unpredictable, reporting is scattered, and problems recur because nobody is treating buildings as connected systems. A portfolio relationship replaces that with scheduled service, per-door budgeting, and a single point of contact who knows your properties.",
        "The reporting side matters as much as the treatment. Owners want to see what was done and what it cost; habitability discussions require dated records; and a manager's own defensibility depends on documentation. Consolidated, consistent reporting across the portfolio is a core deliverable, not an afterthought.",
      ],
    },
    compliance: {
      title: "Habitability & documentation across the portfolio",
      body: [
        "Every residential unit in a managed portfolio carries the same Warranty of Habitability obligation (RPL §235-b): infestations must be addressed to keep units livable. For a manager, meeting that obligation consistently across many doors is a documentation problem as much as a treatment one.",
        "We standardize the record: dated service reports per unit, treatment and follow-up confirmation, and portfolio-level summaries suitable for owners and, if needed, habitability or code discussions. (General information, not legal advice.)",
      ],
    },
    ourApproach: [
      "Per-door and per-building pricing for predictable budgeting across the portfolio.",
      "Consolidated reporting — per-unit records plus portfolio summaries for ownership.",
      "Scheduled preventative service plus prioritized response to unit complaints.",
      "Coordinated multi-unit treatment so pests can't shift between connected units.",
      "A single local point of contact who knows your buildings.",
    ],
    whatsCovered: [
      "Recurring preventative programs across the portfolio",
      "Rapid response to individual unit complaints",
      "Bed bug, roach, and rodent programs with unit coordination",
      "Exclusion sealing for buildings with chronic rodent entry",
      "Consolidated documentation and owner reporting",
    ],
    pests: ["bed bugs", "cockroaches", "mice", "rats", "ants", "occasional invaders"],
    pricingModel: [
      "Portfolio work is typically priced per door or per building on a recurring contract, which makes budgeting predictable and lowers per-visit cost versus one-off calls.",
      "Complaint-driven and specialty work (bed bugs, exclusion) can be folded into the contract or quoted per event, with reporting rolled up to the portfolio level.",
    ],
    faqs: [
      { q: "Do you offer per-door pricing for managed portfolios?", a: "Yes. Portfolio pest control is usually priced per door or per building on a recurring contract, which gives you predictable budgeting and lower per-visit cost than ad hoc calls." },
      { q: "Can you provide consolidated reporting for owners?", a: "Yes. You get per-unit dated records plus portfolio-level summaries suitable for ownership reporting and habitability documentation." },
      { q: "How do you handle individual tenant complaints?", a: "We prioritize active infestations and fold complaint response into your program, coordinating access with your team and documenting each visit." },
      { q: "Do you coordinate treatment across connected units?", a: "Always. Treating buildings as connected systems — not one unit at a time — is what prevents pests from shifting and returning across a portfolio." },
      { q: "Can we standardize service across all our buildings?", a: "Yes. A single portfolio relationship gives you consistent scheduling, pricing, reporting, and a local point of contact who knows your properties." },
      { q: "Do you help with habitability documentation?", a: "Yes. Standardized, dated records per unit are a core deliverable, exactly for habitability and owner-reporting needs. (General information, not legal advice.)" },
      { q: "What size portfolios do you serve?", a: "From a handful of units to large multi-building portfolios across Central New York and the Finger Lakes." },
      { q: "Which counties do you cover?", a: "Tompkins, Cortland, Chemung, Schuyler, and Tioga — Ithaca, Cortland, Elmira, Watkins Glen, Owego, and the towns around them." },
    ],
  },

  {
    slug: "restaurant-food-service-pest-control",
    name: "Restaurant & Food Service Pest Control",
    shortName: "Restaurants",
    metaTitle: "Restaurant Pest Control in Central NY — Sanitary Code Part 14 Ready",
    metaDescription:
      "Discreet, documented restaurant and food-service pest control in Central New York — inspection-ready under NYS Sanitary Code Part 14. Roaches, flies, rodents. Call (607) 269-6218.",
    answerLead:
      "New York food-service establishments must be kept free of insects and rodents under the State Sanitary Code (Part 14, §14-1.160). Nolan Pest Control provides discreet, documented, inspection-ready pest management for Central New York restaurants — controlling roaches, small flies, and rodents and correcting the conditions that draw them, scheduled around your hours.",
    intro: [
      "For a restaurant, a pest problem is an inspection problem, a reputation problem, and a revenue problem simultaneously. Evidence of pests in a prep, storage, or service area is a serious health-inspection finding, and in a bad case it can close your doors. The restaurants that pass inspections cleanly treat pest control as ongoing, documented maintenance — not an emergency call after something is spotted.",
      "We provide discreet, scheduled commercial service for restaurants, cafés, bars, and food-service operations across Central New York, built around health-inspection readiness: controlling the pests that threaten kitchens, correcting the conducive conditions inspectors look for, and giving you the documentation that demonstrates diligence.",
    ],
    whyItMatters: {
      title: "What inspectors actually look for",
      body: [
        "Health inspections don't just look for live pests; they look for evidence (droppings, gnaw marks, dead insects) and for the conditions that invite pests — gaps that allow entry, standing water and organic buildup that support breeding, and improper food storage. A finding in any of these areas can affect your rating or, at the extreme, your ability to operate.",
        "That's why effective restaurant pest control is as much about exclusion and sanitation as it is about treatment. Sealing entry points, eliminating small-fly breeding sources in drains, and fixing moisture and storage issues remove the reasons pests are there in the first place — which is exactly what turns a risky inspection into a clean one.",
      ],
    },
    compliance: {
      title: "NYS Sanitary Code Part 14 & inspection readiness",
      body: [
        "New York food-service establishments are regulated under the State Sanitary Code, Part 14 (Subpart 14-1), which includes insect and rodent control requirements (§14-1.160): establishments must be kept free of vermin, and effective measures must be used to control their entry and presence. Pest management is therefore part of maintaining a compliant, permitted operation, not an optional add-on.",
        "We help you stay inspection-ready with regular documented service, sanitation and exclusion guidance, and clear records that demonstrate an active pest-management program — the kind of diligence that supports a clean inspection. (This references the Code as content architecture; confirm current requirements with your local health department.)",
      ],
    },
    ourApproach: [
      "Discreet service scheduled around your hours — before opening, after close, or during slow periods.",
      "Source-based fly control: finding and eliminating drain and organic breeding sources, not just fogging the dining room.",
      "German cockroach programs targeting kitchen harborage, with monitoring and follow-up.",
      "Rodent control plus exclusion sealing of the gaps rodents use to enter.",
      "Documented service records and sanitation guidance that support inspection readiness.",
    ],
    whatsCovered: [
      "German cockroach elimination in kitchens and equipment",
      "Small-fly control (fruit, drain, and phorid flies) at the breeding source",
      "Rodent control and exclusion",
      "Stored-product pest management for dry goods",
      "Documented service and sanitation/exclusion guidance for inspections",
    ],
    pests: ["German cockroaches", "fruit flies", "drain flies", "phorid flies", "mice", "rats", "stored-product pests", "ants"],
    pricingModel: [
      "Restaurant service is priced by facility size and service frequency, and is sold as a recurring program because inspection readiness depends on consistent, documented maintenance rather than one-time treatment.",
      "Specialty problems — a persistent small-fly source, a roach infestation — may involve added investigative and follow-up work, quoted transparently.",
    ],
    faqs: [
      { q: "Does New York require pest control for restaurants?", a: "Effectively, yes. Under the State Sanitary Code Part 14 (§14-1.160), food-service establishments must be kept free of insects and rodents and use effective control measures, so pest management is part of operating a compliant, permitted establishment." },
      { q: "Can you service my restaurant without disrupting business?", a: "Yes. We schedule discreetly around your hours — before opening, after close, or during slow periods — so service never interferes with guests." },
      { q: "Why do I keep getting small flies in the kitchen?", a: "Fruit, drain, and phorid flies breed in drains, spills, and organic buildup — often a hidden source. Killing adults doesn't help while the source remains; we find and eliminate the breeding site, which is the real fix." },
      { q: "Will regular service help me pass health inspections?", a: "It's the biggest factor. Consistent, documented service plus exclusion and sanitation guidance removes the pests and the conditions inspectors flag, and the records demonstrate an active program." },
      { q: "Do you provide documentation for inspectors?", a: "Yes. We keep dated service records and provide sanitation and exclusion guidance you can show a health inspector as evidence of a diligent pest-management program." },
      { q: "How do you handle cockroaches in a commercial kitchen?", a: "With professional gel baiting targeted at harborage in and around equipment, plus monitoring and a follow-up to break the breeding cycle — not sprays that scatter them." },
      { q: "Do you serve bars, cafés, and food trucks too?", a: "Yes — any food-service operation. The Sanitary Code and the pest pressures are similar across restaurants, bars, cafés, and mobile units." },
      { q: "What areas do you cover?", a: "Restaurants across Ithaca, Cortland, Elmira, Watkins Glen, Owego, and the surrounding Central New York and Finger Lakes towns." },
    ],
  },

  {
    slug: "winery-brewery-pest-control",
    name: "Winery, Brewery & Tasting Room Pest Control",
    shortName: "Wineries & Breweries",
    metaTitle: "Winery & Brewery Pest Control — Seneca & Cayuga Wine Trails",
    metaDescription:
      "Discreet pest control for Finger Lakes wineries, breweries, and tasting rooms — fruit flies, stored-product pests, rodents, and overwintering invaders — that protects the guest experience. Call (607) 269-6218.",
    answerLead:
      "Finger Lakes wineries, breweries, and tasting rooms face pest pressures most companies don't specialize in — fruit flies drawn to fermentation, stored-product pests in ingredients, rodents in older buildings, and overwintering invaders in fall. Nolan Pest Control protects both the product and the guest experience with discreet, source-based, documented service along the Seneca and Cayuga wine trails.",
    intro: [
      "The Seneca and Cayuga wine trails are one of the Finger Lakes' great assets — and one of its more demanding pest-control environments. A winery or brewery combines a production facility, a food-and-beverage operation, and a public-facing hospitality space, each with its own pest challenges, often in one older building. And it all runs on reputation: a fruit fly in a guest's glass or a review mentioning pests costs future bookings.",
      "We provide discreet, specialized service for wineries, breweries, cideries, and tasting rooms across Schuyler, Tompkins, and the surrounding wine country — controlling the pests that threaten product and guest experience alike, at the source, on a schedule that respects your tasting-room hours.",
    ],
    whyItMatters: {
      title: "The pests that threaten product and guests",
      body: [
        "Fruit flies are the signature challenge. Drawn to fermentation, ripe fruit, spills, and drains, they can appear in numbers right in the guest-facing tasting room — and because they breed in hidden organic sources, killing the adults you see accomplishes nothing while the source remains. Stored-product pests threaten grains, fruit, and packaging in production and storage. Rodents push into older winery buildings, and each fall the overwintering invaders — cluster flies, stink bugs, lady beetles — mass on sun-warmed walls and work inside.",
        "The stakes are unusual here because the pest and the product occupy the same space. Control has to be effective and discreet, source-based rather than reactive, and mindful of a working food-and-beverage operation. That's a different job than spraying a warehouse, and it's the job we're built for.",
      ],
    },
    compliance: {
      title: "Food-safety & hospitality considerations",
      body: [
        "Tasting rooms and production areas that serve or handle food and beverage fall under food-safety expectations, and the same Sanitary Code principles that govern restaurants apply to the hospitality side of a winery or brewery: the space must be kept free of vermin, with effective, documented control. Wineries also carry stored-product and sanitation considerations on the production side.",
        "We provide documented, discreet service and sanitation guidance appropriate to a working food-and-beverage operation, and we time and place treatment to respect both the product and the guests. (General information; confirm specific requirements with your local health department and any licensing authority.)",
      ],
    },
    ourApproach: [
      "Source-based fruit-fly control: locating and eliminating drain, spill, and fermentation-adjacent breeding sources rather than fogging the tasting room.",
      "Stored-product pest management for grains, fruit, and packaging in production and storage.",
      "Rodent control and exclusion for older winery and barn buildings.",
      "Timed fall exterior treatment for overwintering invaders on sun-warmed walls.",
      "Discreet scheduling around tasting-room hours and events, with documentation.",
    ],
    whatsCovered: [
      "Fruit fly and small-fly control at the breeding source",
      "Stored-product pest management (production and storage)",
      "Rodent control and building exclusion",
      "Overwintering-pest exterior barrier (cluster flies, stink bugs, lady beetles)",
      "Discreet, documented hospitality-facing service",
    ],
    pests: ["fruit flies", "drain flies", "stored-product pests", "mice", "rats", "cluster flies", "brown marmorated stink bugs", "Asian lady beetles", "wasps"],
    pricingModel: [
      "Winery and brewery service is priced by facility size, the mix of production and hospitality space, and frequency, and is sold as a recurring program because both fruit-fly control and overwintering-pest prevention depend on timing and consistency.",
      "Seasonal work (the fall overwintering barrier) and specialty investigations (a hidden fruit-fly source) are scoped as needed and quoted transparently.",
    ],
    faqs: [
      { q: "Why does my tasting room get fruit flies even when it's clean?", a: "Fruit flies breed in hidden organic sources — drains, spill lines, fermentation-adjacent residue, recycling — not open surfaces. A spotless room can still have them. We find and eliminate the breeding source, which is the only durable fix." },
      { q: "Can you service us without disturbing guests or events?", a: "Yes. We schedule discreetly around tasting-room hours and events, and place treatment to respect both guests and product." },
      { q: "Do you handle the production side and the tasting room?", a: "Yes — both. We manage stored-product and rodent pressure on the production and storage side and fruit-fly and hospitality pests on the guest-facing side." },
      { q: "What about the flies and bugs that swarm the building every fall?", a: "Those are overwintering invaders — cluster flies, stink bugs, lady beetles. A timed late-summer exterior barrier on sun-warmed walls stops them before they get inside, which matters for a guest-facing building." },
      { q: "Is pest control required for a winery or brewery?", a: "The hospitality and food-handling side is subject to the same Sanitary Code principles as restaurants — the space must be kept free of vermin with effective, documented control. We keep you covered and documented." },
      { q: "Do you protect against a review-damaging pest incident?", a: "That's much of the point. Ongoing, discreet protection is inexpensive insurance against a fruit-fly or pest incident in front of guests that shows up in reviews and costs bookings." },
      { q: "Which wine-trail areas do you serve?", a: "The Seneca and Cayuga wine trails — Watkins Glen, Burdett, Hector, Montour Falls, and the surrounding Schuyler and Tompkins county wine country." },
      { q: "Do you serve cideries and distilleries too?", a: "Yes. The fermentation-driven fly pressure and stored-product concerns are similar across wineries, breweries, cideries, and distilleries." },
    ],
  },

  {
    slug: "hotel-bnb-short-term-rental-pest-control",
    name: "Hotel, B&B & Short-Term Rental Pest Control",
    shortName: "Hotels & STRs",
    metaTitle: "Hotel, B&B & Short-Term Rental Pest Control in the Finger Lakes",
    metaDescription:
      "Bed bug protection and discreet pest control for Finger Lakes hotels, B&Bs, and short-term rentals — fast response, guest-incident protocols, and review protection. Call (607) 269-6218.",
    answerLead:
      "For Finger Lakes lodging — hotels, B&Bs, and short-term rentals — a single bed bug incident can end a booking stream through reviews. Nolan Pest Control provides discreet, fast-response bed bug protection and pest control for guest lodging, with documented treatment, follow-up, and guest-incident protocols that protect both guests and your reputation.",
    intro: [
      "Lodging lives and dies on reviews, and no pest threatens a review like a bed bug. Guest turnover is constant, belongings travel in and out daily, and a single infested room can spread and generate the kind of public complaint that costs far more than the treatment. For hotels, B&Bs, inns, and the large short-term-rental inventory around Seneca Lake and Watkins Glen, proactive protection is simply cheaper than a damaged reputation.",
      "We provide discreet, responsive service for Finger Lakes lodging — routine inspection and monitoring, fast response to a suspected incident, thorough treatment with the required follow-up, and documentation you can rely on. The goal is simple: protect the guest experience and keep the listing earning.",
    ],
    whyItMatters: {
      title: "Why bed bugs are the lodging pest",
      body: [
        "Bed bugs travel in luggage and belongings, which means every guest is a potential introduction — through no fault of the property. Once in a room, they hide in mattress seams, headboards, and baseboards and can spread to adjacent rooms. Because their eggs resist many treatments, a single spray fails; real elimination requires thorough treatment and a follow-up. And because a guest who encounters one will often say so publicly, the reputational cost dwarfs the treatment cost.",
        "The other lodging pests — mice pushing in each fall, wasps near entrances in summer, small flies in kitchen and breakfast areas — matter too, but bed bugs are the one that demands a protocol: monitoring to catch introductions early, fast discreet response, thorough treatment, and documentation for the incident file.",
      ],
    },
    compliance: {
      title: "Guest safety, food service & documentation",
      body: [
        "Lodging with any food service — a B&B breakfast, a hotel restaurant or breakfast bar — falls under the same Sanitary Code food-service principles as restaurants: the space must be kept free of vermin with effective, documented control. And any guest-facing operation benefits from a documented pest-management program in the event of a guest incident or claim.",
        "We provide the documentation, monitoring records, and treatment history that support both food-service compliance and guest-incident response. (General information; confirm specific requirements with your local health department.)",
      ],
    },
    ourApproach: [
      "Bed bug monitoring and routine inspection to catch introductions before they spread.",
      "Fast, discreet response to a suspected guest incident, with thorough treatment and the required follow-up.",
      "Adjacent-room inspection and treatment so an incident doesn't spread through the property.",
      "Documented treatment history for your incident file and any guest claim.",
      "Control of the other lodging pests — mice, wasps, small flies — on a discreet schedule.",
    ],
    whatsCovered: [
      "Bed bug inspection, monitoring, treatment, and follow-up",
      "Guest-incident rapid response and adjacent-room protocols",
      "Rodent control and exclusion",
      "Small-fly and stinging-insect control for kitchen and entrance areas",
      "Documented service history for incident files and food-service compliance",
    ],
    pests: ["bed bugs", "mice", "wasps", "fruit flies", "cockroaches", "ants"],
    pricingModel: [
      "Lodging service is priced by property size and room count and is best arranged as a recurring monitoring and protection program, with bed bug incident response either included or quoted per event.",
      "Bed bug treatment is always quoted as a program including the required follow-up, because a single visit doesn't end an infestation.",
    ],
    faqs: [
      { q: "How do I protect my hotel or STR from bed bug reviews?", a: "Proactive monitoring plus fast, discreet incident response. Catching introductions early and treating thoroughly (with follow-up) before they spread is far cheaper than the reviews a visible incident generates." },
      { q: "A guest reported bed bugs — what happens?", a: "We respond fast and discreetly, inspect and treat the room and adjacent rooms, complete the required follow-up, and document everything for your incident file. Speed and documentation both matter." },
      { q: "Can service stay completely discreet?", a: "Yes. We keep vehicles and visits low-profile — essential for lodging, where the appearance of a pest problem is itself the problem." },
      { q: "Do bed bugs mean my property is dirty?", a: "No. Bed bugs travel in on guests' belongings and infest even spotless, high-end properties. It's about exposure and turnover, not cleanliness — which is why monitoring matters." },
      { q: "Do you cover the breakfast or restaurant area too?", a: "Yes. Food-service areas fall under Sanitary Code principles and get the same roach, fly, and rodent control and documentation as a restaurant." },
      { q: "Do you serve short-term rentals, not just hotels?", a: "Yes. The large STR inventory around Watkins Glen and Seneca Lake is bed-bug exposed through guest turnover, and we protect listings the same way we protect hotels." },
      { q: "How often should lodging be inspected?", a: "A recurring monitoring schedule fits most properties, with frequency set by room count and turnover. High-turnover STRs and hotels benefit from more frequent inspection." },
      { q: "What areas do you serve?", a: "Finger Lakes lodging around Watkins Glen, Montour Falls, Ithaca, and the Seneca and Cayuga lakes, plus the surrounding towns." },
    ],
  },

  {
    slug: "schools-daycare-pest-control",
    name: "School & Daycare Pest Control",
    shortName: "Schools & Daycare",
    metaTitle: "School & Daycare Pest Control in Central NY — IPM & Child-Safe",
    metaDescription:
      "Integrated Pest Management for Central New York schools and daycares — compliant with New York's Child Safe Playing Fields Act, low-toxicity, documented, and scheduled around children. Call (607) 269-6218.",
    answerLead:
      "New York's Child Safe Playing Fields Act prohibits applying most pesticides on school and daycare grounds and playing fields, which makes Integrated Pest Management (IPM) — exclusion, sanitation, monitoring, and targeted low-risk treatment — the standard for these facilities. Nolan Pest Control provides documented, child-safe IPM for Central New York schools and daycares.",
    intro: [
      "Nowhere is pest control more sensitive than where children spend their days. Schools and daycares need effective control — pests are a genuine health and sanitation concern in these settings — delivered in a way that puts child safety first and complies with New York's specific rules for these facilities. That means an Integrated Pest Management approach: prevention and exclusion first, monitoring, and treatment reserved for when it's needed and done with the lowest-risk effective method.",
      "We provide documented, IPM-based service for schools, daycares, and childcare facilities across Central New York — scheduled around the children, focused on the exclusion and sanitation that prevent problems, and mindful of the Child Safe Playing Fields Act and the notification expectations that govern pesticide use in these settings.",
    ],
    whyItMatters: {
      title: "Why IPM is the standard for children's facilities",
      body: [
        "Integrated Pest Management flips the usual order: instead of routine spraying, it prevents pests by sealing entry points, correcting the moisture and sanitation conditions that attract them, and monitoring so problems are caught early. Treatment is targeted and reserved for actual need, using the lowest-risk effective method. In a setting full of children, that approach isn't just best practice — in New York it's effectively required by law for grounds, and it's the responsible standard for indoor spaces too.",
        "IPM also produces exactly the documentation these facilities need: monitoring records, an inspection history, and a defensible account of what was done and why. For an administrator, that record is as valuable as the pest control itself.",
      ],
    },
    compliance: {
      title: "Child Safe Playing Fields Act & notification",
      body: [
        "New York's Child Safe Playing Fields Act generally prohibits the application of pesticides on the grounds and playing fields of schools and daycare centers, with limited exceptions (such as certain emergency or specifically allowed low-risk products). That makes non-chemical, IPM-based management the default for outdoor areas at these facilities. Indoor pest management is likewise expected to follow IPM principles and any applicable notification requirements.",
        "We deliver service designed around these rules — prevention and exclusion first, targeted low-risk treatment only where permitted and necessary, and documentation that reflects an IPM program. (This references the law as content architecture; schools and daycares should confirm current requirements and any notification obligations with NYSDEC and their district or licensing authority.)",
      ],
    },
    ourApproach: [
      "IPM-first: exclusion, sanitation, and monitoring to prevent pests before any treatment.",
      "Child-safe scheduling around school and daycare hours and calendars.",
      "Compliance-minded practice under the Child Safe Playing Fields Act for grounds and playing fields.",
      "Targeted, lowest-risk treatment only where needed and permitted, with documentation.",
      "Monitoring records and inspection history for administrators.",
    ],
    whatsCovered: [
      "IPM programs for schools, daycares, and childcare facilities",
      "Exclusion and sanitation to prevent rodents and insects",
      "Monitoring and documented inspection history",
      "Targeted low-risk treatment where needed and permitted",
      "Compliance-minded grounds management under the Child Safe Playing Fields Act",
    ],
    pests: ["mice", "rats", "cockroaches", "ants", "stinging insects", "flies", "occasional invaders"],
    pricingModel: [
      "School and daycare service is priced by facility size and program scope and is delivered as a recurring IPM program, since prevention, monitoring, and documentation are ongoing by design.",
      "Specific remediation (a rodent exclusion project, a targeted treatment) is scoped within the IPM framework and quoted transparently.",
    ],
    faqs: [
      { q: "Can you spray pesticides at a school or daycare in New York?", a: "Generally not on the grounds or playing fields — the Child Safe Playing Fields Act prohibits most pesticide applications there, with limited exceptions. That's why IPM (prevention, exclusion, monitoring, targeted low-risk treatment) is the standard for these facilities." },
      { q: "What is Integrated Pest Management (IPM)?", a: "An approach that prevents pests through exclusion, sanitation, and monitoring, and reserves treatment for actual need using the lowest-risk effective method. It's the responsible standard for children's facilities and produces strong documentation." },
      { q: "Do you work around school and daycare schedules?", a: "Yes. Service is scheduled around the children — off-hours, breaks, and calendars — with child safety as the first priority." },
      { q: "Do you provide documentation for administrators?", a: "Yes. IPM produces monitoring records and an inspection history — exactly the documentation administrators need for compliance and defensibility." },
      { q: "How do you handle rodents without spraying?", a: "Rodents are controlled primarily through trapping and exclusion — sealing entry points — which fits IPM perfectly and avoids unnecessary chemical use in a children's facility." },
      { q: "Are there notification requirements we should know about?", a: "New York has pesticide notification expectations, and schools/daycares have specific rules. We practice within these; confirm current notification obligations with NYSDEC and your district. (General information, not legal advice.)" },
      { q: "Do you serve both public and private facilities?", a: "Yes — public schools, private schools, preschools, and licensed daycare and childcare facilities across Central New York." },
      { q: "Which areas do you cover?", a: "Schools and daycares across Tompkins, Cortland, Chemung, Schuyler, and Tioga counties, including Ithaca, Cortland, and Elmira." },
    ],
  },

  {
    slug: "healthcare-senior-living-pest-control",
    name: "Healthcare & Senior Living Pest Control",
    shortName: "Healthcare & Senior Living",
    metaTitle: "Healthcare & Senior Living Pest Control in Central NY",
    metaDescription:
      "Sensitive-population IPM for Central New York medical offices, senior living, and care facilities — low-risk, documented, discreet, and compliance-minded. Call (607) 269-6218.",
    answerLead:
      "Healthcare and senior-living facilities require pest control built for sensitive populations: Integrated Pest Management with low-risk methods, rigorous documentation, and discreet scheduling. Nolan Pest Control provides compliance-minded IPM for Central New York medical offices, senior living, and care facilities.",
    intro: [
      "In a medical office, senior-living community, or care facility, pest control carries stakes beyond nuisance. Residents and patients may be medically vulnerable; sanitation is a clinical concern; and regulators and accreditation bodies expect a documented, low-risk pest-management program. This is not a setting for routine spraying — it calls for careful Integrated Pest Management, meticulous records, and service that respects both the people and the environment.",
      "We provide sensitive-population IPM for healthcare and senior-living facilities across Central New York — prevention and exclusion first, low-risk targeted treatment where needed, discreet scheduling that respects residents and patients, and the documentation these facilities are expected to maintain.",
    ],
    whyItMatters: {
      title: "Why sensitive populations change the approach",
      body: [
        "Vulnerable residents and patients mean the margin for error is small: pests are a real sanitation and health risk, but so is careless treatment. IPM resolves the tension by preventing pests through exclusion and sanitation, monitoring closely, and treating only where necessary with the lowest-risk effective methods — keeping both the pests and unnecessary chemical exposure away from the people who can least tolerate either.",
        "Documentation is not optional in these settings. Facilities are expected to maintain records of their pest-management program for regulators, surveyors, and accreditation. An IPM program produces that record naturally — monitoring logs, inspection history, and a clear account of any treatment.",
      ],
    },
    compliance: {
      title: "Documentation & sensitive-environment practice",
      body: [
        "Healthcare and senior-living facilities operate under health-department oversight and, often, accreditation standards that expect a documented, proactive pest-management program. Any food-service component (a dining hall, a kitchen) additionally falls under the same Sanitary Code food-service principles as a restaurant.",
        "We deliver documented, low-risk IPM appropriate to sensitive environments, with monitoring records and treatment history suitable for surveyors and administrators. (General information; confirm specific requirements with your facility's regulatory and accreditation authorities.)",
      ],
    },
    ourApproach: [
      "Sensitive-population IPM: prevention, exclusion, and monitoring first, low-risk targeted treatment only where needed.",
      "Discreet scheduling that respects patients, residents, and clinical operations.",
      "Rigorous documentation — monitoring logs, inspection history, treatment records — for regulators and accreditation.",
      "Food-service-area control (dining halls, kitchens) to the same standard as a restaurant.",
      "Coordination with facilities and clinical staff on access and protocols.",
    ],
    whatsCovered: [
      "IPM programs for medical offices, senior living, and care facilities",
      "Low-risk, targeted treatment for sensitive environments",
      "Exclusion and sanitation to prevent rodents and insects",
      "Dining-hall and kitchen pest control to food-service standards",
      "Comprehensive documentation for regulators and accreditation",
    ],
    pests: ["mice", "rats", "cockroaches", "ants", "flies", "bed bugs", "occasional invaders"],
    pricingModel: [
      "Healthcare and senior-living service is priced by facility size and program scope and delivered as a recurring documented IPM program, given the ongoing monitoring and record-keeping these settings require.",
      "Specialty needs (bed bug response in senior living, a dining-hall issue) are scoped within the program and quoted transparently.",
    ],
    faqs: [
      { q: "Do you provide low-risk pest control for medical and senior facilities?", a: "Yes. We use Integrated Pest Management built for sensitive populations — prevention, exclusion, and monitoring first, with low-risk targeted treatment only where needed — to keep both pests and unnecessary exposure away from vulnerable residents and patients." },
      { q: "Can you provide documentation for regulators and accreditation?", a: "Yes. Our IPM program produces monitoring logs, inspection history, and treatment records suitable for health-department oversight and accreditation surveys." },
      { q: "How do you handle bed bugs in senior living?", a: "Discreetly and thoroughly, with inspection of the affected and adjacent rooms, treatment, and the required follow-up, plus documentation — all mindful of vulnerable residents." },
      { q: "Do you cover the dining hall and kitchen?", a: "Yes. Food-service areas get the same roach, fly, and rodent control and documentation as a restaurant, under Sanitary Code food-service principles." },
      { q: "Will service disrupt patients or residents?", a: "No. We schedule discreetly around clinical operations and resident routines and coordinate access with your facilities and clinical staff." },
      { q: "How do you control rodents without heavy chemical use?", a: "Primarily through trapping and exclusion — sealing entry points — which fits sensitive-environment IPM and minimizes chemical use around vulnerable populations." },
      { q: "What types of facilities do you serve?", a: "Medical and dental offices, senior-living and assisted-living communities, nursing and care facilities, and clinics across Central New York." },
      { q: "Which areas do you cover?", a: "Healthcare and senior-living facilities across Tompkins, Cortland, Chemung, Schuyler, and Tioga counties." },
    ],
  },

  {
    slug: "office-retail-pest-control",
    name: "Office & Retail Pest Control",
    shortName: "Office & Retail",
    metaTitle: "Office & Retail Pest Control in Central NY",
    metaDescription:
      "Clean, low-disruption commercial pest control for Central New York offices, shops, and retail — scheduled around your hours, with reporting for ownership. Call (607) 269-6218.",
    answerLead:
      "Nolan Pest Control provides clean, low-disruption pest control for Central New York offices, shops, and retail spaces — scheduled around your business hours, focused on exclusion and prevention, with documentation you can hand to ownership or corporate.",
    intro: [
      "Offices and retail spaces don't have a restaurant's fly pressure or a warehouse's rodent load, but they have their own needs: a clean, professional environment for customers and staff, discreet service that never disrupts business, and — for multi-location or corporate operators — consistent reporting. A visible pest in a shop or lobby is a small problem that reads as a big one to customers.",
      "We provide scheduled, low-profile commercial service for offices, shops, showrooms, and retail across Central New York — preventing the ants, rodents, and seasonal invaders that turn up in commercial buildings, and giving you clean documentation for ownership, a landlord, or corporate.",
    ],
    whyItMatters: {
      title: "Why prevention beats reaction in commercial space",
      body: [
        "In an office or store, the goal is that pests never become visible to customers or staff in the first place. That makes exclusion and prevention — sealing entry points, managing the exterior perimeter, controlling seasonal invaders before they get in — more valuable than reactive treatment. A scheduled program keeps the space consistently clean rather than lurching from one sighting to the next.",
        "For operators with multiple locations, consistency and reporting are the other half of the value: the same standard of service and the same documentation across every site, handed up to ownership or corporate in a form they can use.",
      ],
    },
    compliance: {
      title: "Clean documentation & any food component",
      body: [
        "Standard offices and retail don't carry the Sanitary Code food-service obligations of a restaurant, but any space with a break room, café, or food handling should be managed to the same vermin-free standard, and a documented pest-management program supports leases, ownership reporting, and any customer or landlord concern.",
        "We provide dated service records and reporting suitable for ownership, a landlord, or corporate, and we manage any food-handling component to food-service standards. (General information; confirm requirements for any food component with your local health department.)",
      ],
    },
    ourApproach: [
      "Scheduled, low-profile service around your business hours — customers never see it.",
      "Exclusion and perimeter management to keep pests from ever getting in.",
      "Seasonal invader control (ants in spring, rodents and overwintering pests in fall).",
      "Consistent service and reporting across multiple locations for corporate operators.",
      "Clean documentation for ownership, landlords, and leases.",
    ],
    whatsCovered: [
      "Recurring preventative service for offices, shops, and retail",
      "Exclusion and exterior perimeter management",
      "Ant, rodent, spider, and seasonal-invader control",
      "Break-room and any food-area management to food-service standards",
      "Documentation and multi-location reporting",
    ],
    pests: ["ants", "mice", "spiders", "cluster flies", "stink bugs", "wasps", "occasional invaders"],
    pricingModel: [
      "Office and retail service is priced by square footage and service frequency and sold as a recurring preventative program, which keeps the space consistently clean and costs less than reacting to sightings.",
      "Multi-location operators can arrange standard per-site pricing with consolidated reporting.",
    ],
    faqs: [
      { q: "Can you service our office or store without disrupting business?", a: "Yes. We schedule discreetly around your hours — before opening, after close, or during quiet periods — so customers and staff never see it." },
      { q: "What pests are common in offices and retail?", a: "Ants in spring, mice and overwintering invaders (cluster flies, stink bugs) in fall, spiders and the occasional wasp. Prevention and exclusion keep them from ever becoming visible." },
      { q: "Do you provide reporting for ownership or corporate?", a: "Yes. You get dated service records and, for multi-location operators, consistent reporting across every site in a form ownership or corporate can use." },
      { q: "Can you service multiple locations consistently?", a: "Yes. We provide the same standard of service and documentation across every location, with consolidated reporting." },
      { q: "What about our break room or café area?", a: "Any food-handling area is managed to the same vermin-free, food-service standard as a restaurant, with appropriate documentation." },
      { q: "Is a recurring plan worth it for a small office?", a: "Usually yes. A scheduled preventative program keeps the space consistently clean and costs less overall than reacting to each sighting." },
      { q: "Do you handle exterior and perimeter treatment?", a: "Yes. Exterior exclusion and perimeter management are the core of commercial prevention — stopping pests before they reach the interior." },
      { q: "Which areas do you serve?", a: "Offices, shops, and retail across Ithaca, Cortland, Elmira, Watkins Glen, Owego, and the surrounding Central New York towns." },
    ],
  },

  {
    slug: "ny-pest-control-compliance",
    name: "New York Pest Control Compliance Hub",
    shortName: "NY Compliance",
    metaTitle: "New York Commercial Pest Control Compliance — DEC, Habitability, IPM",
    metaDescription:
      "A plain-language guide to New York commercial pest-control compliance — NYSDEC registration, the Neighbor Notification Law, Sanitary Code Part 14, the Child Safe Playing Fields Act, and habitability. Call (607) 269-6218.",
    answerLead:
      "Commercial pest control in New York touches several regulatory frameworks: NYSDEC pesticide business registration and applicator certification, the Neighbor Notification Law, the State Sanitary Code (Part 14) for food service, the Child Safe Playing Fields Act for schools and daycares, and the Warranty of Habitability (RPL §235-b) for rentals. Nolan Pest Control operates within all of them and helps commercial clients stay compliant and documented.",
    intro: [
      "New York regulates pest control more than most states, and for a commercial operator that's actually reassuring: it means a properly registered, certified provider is doing things the right way, and it means there's a clear standard to meet. This hub lays out, in plain language, the frameworks that touch commercial pest control in New York — what each one is and where it applies — so you understand what compliance looks like for your kind of business.",
      "We provide this as content architecture and a service overview, not legal advice. For any specific obligation, confirm the current statute or code and your local requirements with NYSDEC, your county health department, or counsel. Where a framework applies to your business, our dedicated vertical pages go deeper.",
    ],
    whyItMatters: {
      title: "Why registration and certification come first",
      body: [
        "Before any other framework, New York requires the basics: a business that applies pesticides commercially must hold NYSDEC pesticide business registration, and the people applying must be certified applicators (or trained technicians under certified supervision). This is the floor — and publishing those credentials is free credibility that most operators don't bother to surface. A provider who can't show registration and certification is a compliance risk to you.",
        "From there, the framework that applies depends on your setting: food service, children's facilities, rentals, or lawn/exterior application near neighbors. The sections below map each one.",
      ],
    },
    compliance: {
      title: "The frameworks, in plain language",
      body: [
        "NYSDEC pesticide business registration & applicator certification — the baseline: commercial applicators must be registered and certified. Ask any provider to show theirs.",
        "Neighbor Notification Law — in participating counties (Tompkins County participates), commercial lawn/ornamental applicators must give 48-hour prior written notice to neighbors of adjacent properties before certain outdoor applications, and post visual markers. It's aimed at exterior lawn and landscape work.",
        "State Sanitary Code, Part 14 (§14-1.160) — food-service establishments must be kept free of insects and rodents with effective, documented control. This governs restaurants and any food-service component of another business.",
        "Child Safe Playing Fields Act — generally prohibits pesticide application on school and daycare grounds and playing fields, making IPM the standard for those facilities.",
        "Warranty of Habitability (RPL §235-b) — makes landlords generally responsible for addressing infestations in residential rentals, driving documented treatment in rental and student housing.",
      ],
    },
    ourApproach: [
      "We operate as a NYSDEC-registered business with certified applicators, and publish those credentials once finalized.",
      "We practice within the Neighbor Notification Law where it applies to exterior commercial work.",
      "We deliver food-service programs to Sanitary Code Part 14 standards with documentation.",
      "We use IPM for schools and daycares, mindful of the Child Safe Playing Fields Act.",
      "We provide the documentation rental owners need for habitability under RPL §235-b.",
    ],
    whatsCovered: [
      "NYSDEC-registered, certified commercial pest management",
      "Neighbor Notification Law–compliant exterior application where applicable",
      "Sanitary Code Part 14 food-service programs",
      "Child Safe Playing Fields Act–minded IPM for children's facilities",
      "Habitability documentation for rental owners and managers",
    ],
    pests: ["all commercial pests"],
    pricingModel: [
      "Compliance is built into every commercial program at no separate charge — registration, certification, documentation, and appropriate practice are simply how we operate.",
      "Program pricing depends on your setting and the applicable framework; see the dedicated vertical page for your business type.",
    ],
    faqs: [
      { q: "Is a pest-control business required to be registered in New York?", a: "Yes. Commercial pesticide applicators must hold NYSDEC business registration, and applicators must be certified (or trained technicians under certified supervision). Always ask a provider to show theirs — it's the compliance floor." },
      { q: "What is the Neighbor Notification Law?", a: "In participating counties (Tompkins County participates), commercial lawn and ornamental applicators must give 48-hour prior written notice to neighbors of adjacent properties before certain outdoor applications, and post markers. It targets exterior lawn and landscape work." },
      { q: "Does the Sanitary Code require pest control for restaurants?", a: "Effectively yes. Part 14 (§14-1.160) requires food-service establishments to be kept free of insects and rodents with effective, documented control. See our restaurant page for detail." },
      { q: "Can pesticides be used at schools and daycares?", a: "Generally not on grounds and playing fields — the Child Safe Playing Fields Act prohibits most such applications, making IPM the standard. See our schools & daycare page." },
      { q: "Who is responsible for pests in a New York rental?", a: "Generally the landlord, under the Warranty of Habitability (RPL §235-b). See our landlord and student-housing pages. (General information, not legal advice.)" },
      { q: "Do you publish your DEC registration and certification?", a: "We operate as a registered business with certified applicators and publish those numbers as they're finalized — publishing them is free credibility and a sign of a compliant provider." },
      { q: "Is this legal advice?", a: "No. This is a plain-language overview provided as content architecture. Confirm any specific obligation with NYSDEC, your county health department, or counsel." },
      { q: "Which framework applies to my business?", a: "It depends on your setting — food service, children's facility, rental housing, or exterior application near neighbors. Tell us your business type and we'll point you to the right program and the applicable rules." },
    ],
  },
];

// Helpers
export const getVertical = (slug: string) => verticals.find((v) => v.slug === slug);
export const verticalSlugs = verticals.map((v) => v.slug);

