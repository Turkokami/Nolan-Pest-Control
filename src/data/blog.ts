/**
 * blog.ts — Tier 9 blog launch (audit §8.10). First 12 posts across six clusters.
 * Data-driven (no MDX tooling) so posts render through one /blog/[slug] template.
 * Dates are fixed literals (Date.now() is unavailable at authoring time); update on real publish.
 */

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  topic: string; // topic key
  date: string; // ISO
  readMins: number;
  excerpt: string;
  sections: BlogSection[];
  relatedServices?: string[]; // service slugs
}

export interface BlogTopic {
  key: string;
  label: string;
}

export const blogTopics: BlogTopic[] = [
  { key: "seasonal", label: "Seasonal pest calendar" },
  { key: "rentals", label: "Rentals & landlord issues" },
  { key: "exclusion", label: "Exclusion & home sealing" },
  { key: "wildlife", label: "Wildlife" },
  { key: "commercial", label: "Commercial & compliance" },
  { key: "regional", label: "Finger Lakes regional" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "central-new-york-pest-calendar",
    title: "The Central New York Pest Calendar: What to Expect Each Season",
    topic: "seasonal",
    date: "2026-01-14",
    readMins: 6,
    excerpt:
      "Pest problems in the Finger Lakes are seasonal and predictable. Here's what shows up when — and what to do about it before it becomes an infestation.",
    sections: [
      {
        paragraphs: [
          "One of the most useful things to understand about pest control in Central New York is that it runs on a calendar. Our long, cold winters and warm, humid summers create a distinct rhythm, and almost every pest problem arrives in its own predictable window. Homeowners who learn that rhythm rarely deal with a full-blown infestation, because they get ahead of each pest before it establishes.",
          "Here's how the year tends to unfold across Tompkins, Schuyler, Chemung, Cortland, and Tioga counties — and what's worth doing in each season.",
        ],
      },
      {
        heading: "Spring: ants and moisture pests wake up",
        paragraphs: [
          "As the snow melts and the ground warms, carpenter ants and other ants become active and send out foragers, often the first pests people notice indoors. Spring is the ideal time to treat ant colonies, before they establish satellite nests inside walls. Moisture pests — silverfish, springtails, centipedes — emerge from damp basements, and overwintering insects that spent the winter in your walls wake on warm days and drift toward windows.",
          "Spring is also when carpenter bees begin drilling into decks and fascia, and when the first ticks become active in the yard, earlier than most people expect.",
        ],
      },
      {
        heading: "Summer: stinging insects, mosquitoes, and ticks peak",
        paragraphs: [
          "Summer is yard season for pests as much as for people. Wasp and hornet colonies expand and their nests become visible; mosquitoes breed in any standing water; and both deer ticks and dog ticks are active in the grass and woods. This is the season for exterior barrier work, nest attention, and a mosquito-and-tick program if you want to actually use your yard in the evenings.",
        ],
      },
      {
        heading: "Fall: the pivotal season",
        paragraphs: [
          "Fall is the single most important pest-control season in Central New York. As soon as night temperatures drop, mice and rats start testing your foundation for a way in, and the overwintering pests — cluster flies, stink bugs, Asian lady beetles, boxelder bugs — mass on warm, sunny walls looking to get inside for the winter. A home that's sealed and treated before October is a home that stays quiet through the winter. If you do one proactive thing all year, make it fall pest-proofing.",
        ],
      },
      {
        heading: "Winter: quieter, but not silent",
        paragraphs: [
          "Outdoor activity drops, but the mice that already got in stay busy, breeding in warm wall voids and basements. Cockroaches and bed bugs, which live entirely indoors, don't slow down at all. Winter is a good time for interior monitoring and for dealing with any rodents that made it inside before the freeze.",
          "The takeaway: pest pressure never really stops in CNY — it just changes shape. A seasonal, proactive approach beats reacting to each problem as it appears, and usually costs less over the year.",
        ],
      },
    ],
    relatedServices: ["general-pest", "rodent-control", "overwintering-pests"],
  },

  {
    slug: "fall-pest-proofing-central-new-york",
    title: "Fall Pest-Proofing: Getting Your CNY Home Ready Before the First Freeze",
    topic: "seasonal",
    date: "2026-08-05",
    readMins: 6,
    excerpt:
      "The weeks before the first hard freeze are the highest-leverage time of year for pest control in the Finger Lakes. Here's your checklist.",
    sections: [
      {
        paragraphs: [
          "If there's one season where a little effort pays off all winter, it's fall. In Central New York, the weeks from late August through October are when mice, rats, and a whole crew of overwintering insects try to move into your home for the cold months. Seal and treat before they get in, and you avoid the problem entirely. Wait until you're hearing scratching in the walls in December, and you're now dealing with an established population.",
        ],
      },
      {
        heading: "Seal the gaps mice use",
        paragraphs: [
          "A house mouse can squeeze through a gap about a quarter inch wide — the width of a pencil. Walk your foundation and look at the seam where the framing meets the stone or block, the holes drilled for water, gas, electric, and cable lines, worn door sweeps, and the roofline where dormers and additions meet the house. These are the classic entry points in older CNY homes. Sealing them with materials mice can't chew through is what turns a recurring fall mouse problem into a solved one.",
        ],
      },
      {
        heading: "Time your exterior barrier for the overwintering invasion",
        paragraphs: [
          "Cluster flies, stink bugs, Asian lady beetles, and boxelder bugs all do the same thing every fall: gather on warm, sunny walls and work their way into wall voids and attics. Once they're inside, you can't spray them out — they'll just reappear indoors on warm winter days. The fix is a timed exterior barrier applied in late summer to early fall, before they move in. That timing is everything, which is why this is worth scheduling rather than reacting to.",
        ],
      },
      {
        heading: "Clean up the perimeter",
        paragraphs: [
          "Move firewood, brush, and bird seed away from the foundation — they're rodent highways and harborage. Trim branches that give squirrels roof access. Clean gutters so cluster flies and moisture pests have fewer entry points, and make sure gable and crawlspace vents are properly screened.",
        ],
      },
      {
        heading: "When to call a professional",
        paragraphs: [
          "Fall pest-proofing is partly DIY and partly not. Sealing a whole older home's worth of entry points, and timing an exterior barrier correctly, is where a professional earns their keep — and it's far cheaper than dealing with an infestation once it's inside. If your home has a history of fall mice or a yearly cluster-fly invasion, get on the schedule before the first freeze.",
        ],
      },
    ],
    relatedServices: ["rodent-exclusion-sealing", "cluster-fly-control", "overwintering-pests"],
  },

  {
    slug: "bed-bugs-college-rental-ny-law",
    title: "Bed Bugs in a College Rental: A Tenant's and Landlord's Guide to New York Law",
    topic: "rentals",
    date: "2026-02-18",
    readMins: 7,
    excerpt:
      "Bed bugs spread fast in student housing around Cornell and Ithaca College. Here's who's responsible under New York law — and how to handle it.",
    sections: [
      {
        paragraphs: [
          "Few pest problems cause more stress in a college town than bed bugs, and few are more common in dense off-campus rentals. Around Cornell and Ithaca College, the mix of shared walls, frequent move-in and move-out cycles, and a steady flow of travelers and used furniture makes bed bugs a recurring reality. When they show up, the first questions are usually about responsibility: who has to deal with this, and who pays?",
        ],
      },
      {
        heading: "New York's Warranty of Habitability",
        paragraphs: [
          "Under New York Real Property Law §235-b, the Warranty of Habitability, landlords are generally responsible for keeping rental units fit to live in — and that includes addressing pest infestations like bed bugs. In practice, this means a landlord usually can't simply tell a tenant to handle a bed bug problem themselves. (This is general information, not legal advice; specific situations can vary, and tenants with disputes should consult a tenant-rights resource or attorney.)",
          "The practical upshot is that landlords have both a legal reason and a business reason to treat bed bugs promptly and properly: an untreated infestation spreads to other units and gets far more expensive.",
        ],
      },
      {
        heading: "Why bed bugs need a professional and a follow-up",
        paragraphs: [
          "Bed bugs are beatable, but they're not a one-spray fix. Their eggs are cemented into cracks and resist many treatments, so an initial treatment must be followed by a second visit to catch the nymphs that hatch afterward. Store-bought sprays tend to scatter bed bugs and miss the eggs, often making an infestation harder to eliminate. Thorough inspection, treatment of all the harborage points, and a required follow-up are what actually end it.",
        ],
      },
      {
        heading: "For tenants",
        paragraphs: [
          "Report a suspected infestation to your landlord or property manager in writing as early as possible — the longer bed bugs go untreated, the further they spread. Follow the preparation checklist the pest professional provides (laundering and drying bedding and clothing on high heat, reducing clutter); prep has a big effect on whether treatment succeeds. Keep documentation of the infestation and your reports.",
        ],
      },
      {
        heading: "For landlords",
        paragraphs: [
          "Act quickly, use a professional, and in multi-unit buildings treat adjacent units so bed bugs don't just migrate and return. Discreet, documented service protects both your tenants and your property. We regularly work with Ithaca-area landlords and property managers to coordinate treatment across units and provide the documentation that habitability situations call for.",
        ],
      },
    ],
    relatedServices: ["bed-bug"],
  },

  {
    slug: "new-york-habitability-pests-renters-landlords",
    title: "New York's Warranty of Habitability and Pests: What Renters and Landlords Should Know",
    topic: "rentals",
    date: "2026-03-24",
    readMins: 6,
    excerpt:
      "Pest infestations in a rental aren't just a nuisance — in New York they're often a habitability issue. Here's the framework in plain language.",
    sections: [
      {
        paragraphs: [
          "Pest problems in rental housing sit at the intersection of pest control and law, and in New York that intersection has a name: the Warranty of Habitability. For both renters and landlords across the Finger Lakes, understanding the basics prevents a lot of conflict and gets problems solved faster.",
        ],
      },
      {
        heading: "What the law says, in plain terms",
        paragraphs: [
          "New York Real Property Law §235-b establishes that residential tenants are entitled to a livable, safe, and sanitary home. Courts have generally treated significant pest infestations — rodents, cockroaches, bed bugs — as conditions that can breach this warranty when a landlord fails to address them. That places primary responsibility for infestations on landlords rather than tenants in most cases. (This is general information, not legal advice.)",
        ],
      },
      {
        heading: "Why this matters for both sides",
        paragraphs: [
          "For tenants, it means you generally shouldn't have to live with an untreated infestation or pay to fix a building-wide problem yourself. For landlords, it means prompt, professional pest control isn't just good service — it's part of meeting your obligations, and it protects you from bigger costs and disputes down the line. An infestation ignored in one unit becomes an infestation in three.",
        ],
      },
      {
        heading: "How to handle it well",
        paragraphs: [
          "Communication and documentation are everything. Tenants should report problems in writing and early. Landlords should respond quickly, bring in a professional, and — in multi-unit buildings — treat connected units together. Keeping records of reports, treatments, and follow-ups protects everyone.",
          "We work with property owners and managers throughout Tompkins, Cortland, and Chemung counties to provide documented, coordinated pest control that meets these needs — from single units to whole portfolios.",
        ],
      },
    ],
    relatedServices: ["bed-bug", "roach-control", "rodent-control"],
  },

  {
    slug: "how-mice-get-in-sealing-guide",
    title: "How Mice Get In: A Room-by-Room Guide to Sealing Your CNY Home",
    topic: "exclusion",
    date: "2026-04-15",
    readMins: 6,
    excerpt:
      "Mice need a gap the width of a pencil. Here's where to find those gaps in an older Central New York home — and why sealing beats trapping.",
    sections: [
      {
        paragraphs: [
          "If you trap mice every fall and they keep coming back, the traps aren't the problem — the open entry points are. Trapping clears the mice inside today; sealing the gaps is what keeps the next wave out when cold weather pushes rodents toward your home's warmth. In Central New York's older housing stock, those gaps are everywhere if you know where to look.",
        ],
      },
      {
        heading: "The basement and foundation",
        paragraphs: [
          "Start here — it's where most mice enter. Look at the sill plate, the seam where the wooden framing sits on the stone or block foundation; decades-old homes often have gaps along its length. Check every utility penetration: water lines, gas lines, electrical conduit, and cable all pass through holes that are rarely sealed tightly. Fieldstone foundations, common in the region, are especially leaky.",
        ],
      },
      {
        heading: "Doors, garage, and ground level",
        paragraphs: [
          "Worn or missing door sweeps are an open invitation, especially on garage and basement doors. The gap under an overhead garage door is a frequent entry point, and the garage then connects to the house. Check where the garage meets the foundation and where any additions join the original structure.",
        ],
      },
      {
        heading: "The roofline and attic",
        paragraphs: [
          "Mice (and squirrels) climb. Gaps at the roofline, unscreened gable and soffit vents, and the junctions where dormers and additions meet the roof all provide access to the attic, which then connects down into the walls. Overhanging branches give rodents a highway to the roof.",
        ],
      },
      {
        heading: "Why professional exclusion lasts",
        paragraphs: [
          "Sealing mouse entry points properly isn't a matter of stuffing steel wool in a hole — mice defeat that. Durable exclusion uses materials like hardware cloth and sealed metal that stand up to gnawing and weather, installed across the whole building envelope. There's a bonus, too: the same gaps that let mice in let heated air out, so a thorough job tightens the house. Done right, exclusion ends the annual reinfestation instead of just pausing it.",
        ],
      },
    ],
    relatedServices: ["rodent-exclusion-sealing", "rodent-control"],
  },

  {
    slug: "why-trapping-alone-never-ends-mouse-problem",
    title: "Why Trapping Alone Never Ends a Mouse Problem",
    topic: "exclusion",
    date: "2026-05-20",
    readMins: 5,
    excerpt:
      "Traps work — until next fall. Here's the reason mice keep coming back, and what actually breaks the cycle.",
    sections: [
      {
        paragraphs: [
          "It's the most common rodent story we hear in Central New York: 'I trap them every year, but they always come back.' The traps aren't failing. They're doing exactly what traps do — removing the mice that are currently inside. What they can't do is stop the next group from moving in, and that's the part that matters.",
        ],
      },
      {
        heading: "The annual cycle",
        paragraphs: [
          "Every fall, as night temperatures drop, mice and rats move toward the warmth of buildings. If your home has open entry points — and older CNY homes almost always do — a fresh group simply replaces the ones you trapped last year. Trapping without sealing is a treadmill: real effort, no lasting progress. Add in that mice breed year-round indoors, and a few that get in during October can become many by February.",
        ],
      },
      {
        heading: "Exclusion breaks the cycle",
        paragraphs: [
          "The durable fix is exclusion: systematically finding and sealing the gaps mice use, with materials they can't chew through. Clear the current population by trapping, seal the doors behind them, and there's nothing for next fall's mice to move into. It's the difference between paying for mouse control once and paying for it every single year.",
        ],
      },
      {
        heading: "What a professional adds",
        paragraphs: [
          "Finding every entry point in an older home takes experience — mice exploit gaps most people never think to check, from the sill plate to the roofline. Sealing them durably takes the right materials and methods. That's why exclusion is the core of professional rodent work, not an afterthought. If you're tired of the yearly mouse battle, sealing is how you actually win it.",
        ],
      },
    ],
    relatedServices: ["rodent-exclusion-sealing", "rodent-control"],
  },

  {
    slug: "bats-in-the-attic-new-york-rules",
    title: "Bats in the Attic: New York's Rules and the Right Way to Get Them Out",
    topic: "wildlife",
    date: "2026-06-10",
    readMins: 6,
    excerpt:
      "Bat removal is the highest-value wildlife job in the Finger Lakes — and the most regulated. Here's how it's done legally and humanely.",
    sections: [
      {
        paragraphs: [
          "A colony of bats in your attic is a real health and structural concern, but it's also a job with rules — New York's bats are beneficial, insect-eating animals, and several are protected. That means the way you get them out matters, both legally and ethically. Done wrong, bat 'removal' can be inhumane, illegal, and ineffective. Done right, it solves the problem for good.",
        ],
      },
      {
        heading: "Exclusion, not extermination",
        paragraphs: [
          "The correct method for bats is exclusion, not killing. That means installing one-way devices at the entry points that let bats leave to feed but not return, then sealing every gap once the roost is empty. In Central New York, little brown and big brown bats typically enter through gaps at the roofline, ridge, gable vents, and where additions meet the house — openings as small as a thumb-width.",
        ],
      },
      {
        heading: "The maternity-season restriction",
        paragraphs: [
          "This is the part homeowners often don't know: New York restricts bat exclusion during the maternity season, roughly May through mid-August, because flightless pups in the roost would be trapped and die if the adults were excluded. Reputable operators respect that window. The ideal time for exclusion is late summer into fall, after pups can fly and before bats leave for winter. A single bat that gets into living space can be removed anytime — but full colony exclusion is scheduled around the season.",
        ],
      },
      {
        heading: "Health, cleanup, and doing it once",
        paragraphs: [
          "Bats can carry rabies, and accumulated guano poses a respiratory health risk, so bat work isn't a DIY project. A proper job combines humane one-way exclusion, thorough sealing of every secondary entry point (bats exploit any gap you miss), and cleanup and decontamination where droppings have built up. The thoroughness of the sealing is what determines whether it's a permanent fix — which is exactly why it's worth hiring someone who does it correctly the first time.",
        ],
      },
    ],
    relatedServices: ["bat-removal-exclusion", "attic-restoration-insulation"],
  },

  {
    slug: "squirrels-raccoons-attic-damage",
    title: "Squirrels, Raccoons, and Your Attic: When Noise Means Damage",
    topic: "wildlife",
    date: "2026-07-08",
    readMins: 6,
    excerpt:
      "Scratching in the attic is more than a nuisance. Here's what squirrels and raccoons actually do up there — and why sealing is the real fix.",
    sections: [
      {
        paragraphs: [
          "That scratching or thumping overhead is worth paying attention to. In Central New York, squirrels and raccoons are the most common attic invaders, and both do real damage — not just noise, but chewed wiring, torn insulation, and health hazards. Knowing what you're likely dealing with, and why removal alone isn't enough, saves a lot of money and worry.",
        ],
      },
      {
        heading: "Squirrels: the fire-risk you can hear",
        paragraphs: [
          "Gray squirrels are the classic attic invader, entering through roofline gaps and chewed soffits, often using overhanging branches as a highway. Flying squirrels — smaller and nocturnal — are a close second in wooded areas and often go unnoticed for months. The serious concern with squirrels is gnawing: chewed wiring is a documented cause of house fires, which is why an attic squirrel problem is more than an annoyance. You'll usually hear them most at dawn and dusk.",
        ],
      },
      {
        heading: "Raccoons: strength and health risks",
        paragraphs: [
          "Raccoons are stronger and messier. Females den in attics and chimneys in spring to raise litters, tearing open soffits, vents, and roof edges to get in. Their droppings carry raccoon roundworm, a genuine health hazard that requires careful cleanup. Between their strength and the health risk, raccoon removal is firmly a job for professionals — and in spring and summer, it usually means accounting for young in the den.",
        ],
      },
      {
        heading: "Why removal without sealing fails",
        paragraphs: [
          "Wildlife returns to reliable den sites, and a gap that let one animal in will let the next one in too. That's why the durable fix is always removal plus exclusion: getting the animal out, then sealing the entry with materials strong enough to keep it out — chew-resistant for squirrels, heavy-duty for raccoons. Where droppings and soiled insulation remain, cleanup and attic restoration close the loop, removing both the health hazard and the scent that draws the next animal.",
        ],
      },
    ],
    relatedServices: ["squirrel-removal", "raccoon-removal", "wildlife-removal"],
  },

  {
    slug: "finger-lakes-winery-tasting-room-pest-control",
    title: "Pest Control for Finger Lakes Wineries and Tasting Rooms",
    topic: "commercial",
    date: "2026-05-06",
    readMins: 6,
    excerpt:
      "Seneca and Cayuga wine-trail businesses face pest risks most companies don't specialize in. Here's what protecting a tasting room actually takes.",
    sections: [
      {
        paragraphs: [
          "The Seneca and Cayuga wine trails are one of the Finger Lakes' great assets — and one of its more demanding pest-control environments. Tasting rooms, wineries, breweries, restaurants, and the hotels and short-term rentals around them all serve the public, handle food and beverage, and live and die on reviews. That combination creates pest risks that a residential-only company isn't built to handle.",
        ],
      },
      {
        heading: "The pests that matter here",
        paragraphs: [
          "Fruit flies and other small flies are the signature challenge — drawn to fermentation, ripe fruit, and drains, they can turn up in numbers right in the guest-facing space. Stored-product pests threaten grains, ingredients, and packaging. Mice and overwintering insects push into older winery buildings each fall. And for any business with lodging attached, bed bugs are a review-ending risk that travels in with guests.",
        ],
      },
      {
        heading: "Discreet, documented, scheduled",
        paragraphs: [
          "Commercial pest control for hospitality isn't about spraying and leaving. It's about discreet service scheduled around your hours, documentation you can show an inspector or an owner, and a focus on the sanitation and exclusion issues that prevent problems rather than just reacting to them. A fruit-fly problem in a tasting room, for instance, is usually solved by finding and eliminating the breeding source — a drain, a spill line, a recycling area — not by fogging the room.",
        ],
      },
      {
        heading: "Protecting the experience",
        paragraphs: [
          "For a wine-trail business, a pest incident in front of guests isn't just unpleasant — it shows up in reviews and costs future bookings. Ongoing protection is inexpensive insurance against that. As a local company, we can respond fast, learn your property, and provide the specialized, discreet service the hospitality side of the Finger Lakes needs.",
        ],
      },
    ],
    relatedServices: ["commercial-pest-control", "cluster-fly-control"],
  },

  {
    slug: "restaurant-pest-control-nys-sanitary-code",
    title: "Restaurant Pest Control and NYS Sanitary Code Part 14: Staying Inspection-Ready",
    topic: "commercial",
    date: "2026-06-24",
    readMins: 6,
    excerpt:
      "For a restaurant, a pest problem is an inspection problem. Here's how proactive pest management keeps a CNY kitchen open and compliant.",
    sections: [
      {
        paragraphs: [
          "In the restaurant business, pests aren't just unpleasant — they're a compliance risk that can affect your health-inspection results and, in a bad case, your ability to stay open. New York's food-service establishments are regulated under the State Sanitary Code, and pest control is part of maintaining a compliant, sanitary operation. Getting ahead of it protects your rating, your reputation, and your revenue.",
        ],
      },
      {
        heading: "What inspectors look for",
        paragraphs: [
          "Evidence of pests — droppings, live insects, gnaw marks — in food-prep, storage, or service areas is a serious finding. Inspectors also look for the conditions that invite pests: gaps that allow entry, standing water and organic buildup that support breeding, and improper storage. The goal of a good pest program is to eliminate both the pests and those conducive conditions before an inspection ever happens.",
        ],
      },
      {
        heading: "The pests that threaten kitchens",
        paragraphs: [
          "Cockroaches are the classic restaurant pest, spreading through warm kitchens and equipment. Small flies — fruit flies, drain flies, and phorid flies — breed in drains and organic residue and are a frequent inspection issue; a persistent small-fly problem usually points to a hidden breeding source that has to be found and eliminated. Rodents push in from outside, especially in fall, and stored-product pests threaten dry goods.",
        ],
      },
      {
        heading: "Proactive beats reactive",
        paragraphs: [
          "The restaurants that pass inspections cleanly treat pest control as ongoing, documented maintenance, not an emergency call after a problem appears. Regular service, sanitation guidance, exclusion, and clear records give you both fewer pests and the documentation to show diligence. We provide discreet commercial service scheduled around your hours for restaurants and food-service businesses across Central New York.",
        ],
      },
    ],
    relatedServices: ["commercial-pest-control", "roach-control", "rodent-control"],
  },

  {
    slug: "ticks-lyme-disease-finger-lakes-yard",
    title: "Ticks and Lyme Disease in the Finger Lakes: Protecting Your Yard",
    topic: "regional",
    date: "2026-04-29",
    readMins: 6,
    excerpt:
      "Deer ticks and Lyme disease are established across the Finger Lakes. Here's how tick pressure works — and how to reduce it around your home.",
    sections: [
      {
        paragraphs: [
          "In the Finger Lakes, ticks are a health issue, not just a nuisance. The blacklegged tick — the deer tick — is established throughout Central New York and carries Lyme disease, along with anaplasmosis and babesiosis. Tick populations and associated infections have risen across the region over the past decade. The good news is that ticks are a yard problem before they're a people problem, which is exactly where they can be managed.",
        ],
      },
      {
        heading: "Why the Finger Lakes has so many ticks",
        paragraphs: [
          "Tick pressure is driven by habitat and hosts. Our wooded and brushy property edges, abundant white-footed mice (which host immature ticks and carry the Lyme bacterium), and healthy deer populations create ideal conditions. That's why the highest-risk zones on any property are the shaded leaf litter, tall grass, and the transition line where a lawn meets the woods.",
        ],
      },
      {
        heading: "Tick season is longer than you think",
        paragraphs: [
          "Deer ticks have a two-year life cycle, and both the tiny nymphs of early summer and the adults of fall can transmit disease. Nymphs are active and easy to miss in June and July; adult ticks stay out through fall, even after the first frosts. So tick risk isn't a few weeks in midsummer — it runs from spring well into late fall.",
        ],
      },
      {
        heading: "Reducing risk around your home",
        paragraphs: [
          "You can meaningfully lower tick pressure with a combination of habitat management and treatment: keep grass short, create a mulch or gravel barrier between lawn and woods, move woodpiles and bird feeders (which draw tick-carrying wildlife) away from where people spend time, and do tick checks after being outside. A seasonal yard treatment focused on the leaf-litter and tree-line zones where ticks concentrate adds another layer, reducing the population where your family actually spends time.",
        ],
      },
    ],
    relatedServices: ["mosquito-tick"],
  },

  {
    slug: "cluster-flies-upstate-new-york-autumn",
    title: "Cluster Flies: Why They Own Upstate New York Autumns",
    topic: "regional",
    date: "2026-08-01",
    readMins: 5,
    excerpt:
      "If your upstairs windows fill with slow, dark flies every fall, you've met the cluster fly. Here's where they come from and how to stop them.",
    sections: [
      {
        paragraphs: [
          "Almost every rural and suburban home in the Finger Lakes knows the cluster fly, even if they don't know the name. They're the slow, dark flies that gather on sunny walls in September and appear on upstairs windows through the fall — and again on the first warm days of spring. They're the defining fall pest of upstate New York, and they behave differently from any fly you can swat away.",
        ],
      },
      {
        heading: "Where they come from",
        paragraphs: [
          "Here's the surprising part: cluster flies don't come from garbage or anything inside your house. Their larvae develop as parasites of earthworms in the soil, so cluster flies are worst around lawns, fields, and open country — which describes most of the rural Finger Lakes. That's why a spotless home in the country can be full of them while a city apartment never sees one.",
        ],
      },
      {
        heading: "Why they get inside",
        paragraphs: [
          "As the weather cools, cluster flies look for a warm place to spend the winter, and your walls and attic fit the bill. They work in through the smallest gaps around windows, eaves, and utility lines, then go dormant. When the heat of the house or a warm winter day wakes them, they emerge on the inside — which is why you find dozens of them on upstairs windows in October and again in March.",
        ],
      },
      {
        heading: "The one thing that actually works",
        paragraphs: [
          "Once cluster flies are in your walls, you can't spray them out — you can only reduce the few that emerge. The effective approach is timing: a well-timed exterior barrier applied in late summer to early fall, before the flies move in, combined with sealing entry points. It's one of the easiest high-volume pest problems to get ahead of in Central New York, and it's exactly why we build a dedicated fall service around it.",
        ],
      },
    ],
    relatedServices: ["cluster-fly-control", "overwintering-pests"],
  },
];

// Helpers
export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const postSlugs = blogPosts.map((p) => p.slug);
export const postsByTopic = (topicKey: string) =>
  blogPosts.filter((p) => p.topic === topicKey);
// Newest first, by ISO date string (safe lexicographic sort).
export const postsNewestFirst = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getTopicLabel = (key: string) =>
  blogTopics.find((t) => t.key === key)?.label ?? key;
