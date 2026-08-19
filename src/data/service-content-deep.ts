/**
 * service-content-deep.ts — Phase 6 depth layer for the 8 core services.
 *
 * ADDITIVE by design: it does not touch the existing ~1,500-word content in service-content.ts.
 * The service route renders these three authority blocks (localContext → healthRisks →
 * whyProfessional) plus the extra FAQs, pushing each core page to ~3,000–3,800 words with strong
 * AEO/GEO signals. Copy is hand-written and Central-NY specific (Ithaca/Cornell/IC rentals, Finger
 * Lakes climate, old housing stock, NY-relevant pests and law) — never spun or generic.
 *
 * To extend depth to the remaining 14 services, add entries keyed by slug; the route already
 * renders any present block and merges any present FAQs.
 */

export interface DeepBlock {
  title: string;
  paragraphs: string[];
}

export interface ServiceDeep {
  identification?: DeepBlock; // "how to tell what you're dealing with" — strong AEO/"what does X look like"
  localContext: DeepBlock;
  healthRisks: DeepBlock;
  whyProfessional: DeepBlock;
  faqs: { q: string; a: string }[];
}

export const serviceContentDeep: Record<string, ServiceDeep> = {
  // ============================================================ GENERAL PEST
  "general-pest": {
    identification: {
      title: "Telling the common Central New York invaders apart",
      paragraphs: [
        "Knowing which pest you actually have changes everything about how it's handled, and the clues are usually there if you know where to look. Small, dark, pepper-like droppings along baseboards, in drawers, or under the sink almost always mean mice; you'll often find them concentrated near a food source or in the quiet corners of a basement or pantry. Large black ants indoors — especially in spring, and especially if you find small piles of what looks like sawdust — point toward carpenter ants nesting in damp wood, not the smaller ants that merely trail across the counter.",
        "Seasonal timing is itself a strong identifier here. Clusters of sluggish flies at upstairs windows in fall are cluster flies, not houseflies, and gray-brown shield-shaped bugs on the siding at the same time of year are brown marmorated stink bugs. Orange, dome-shaped 'ladybugs' massing on warm south-facing walls in autumn are Asian lady beetles. All three are overwintering pests doing the same thing — trying to get inside for winter — which is why they show up together and respond to the same fall exterior timing.",
        "Other evidence tells its own story: pencil-width gnaw marks and greasy rub marks along a joist mean rodents are using that route; fine webbing in basement corners means spiders (and, indirectly, the insects feeding them); and tiny, fast trails to a crumb on the counter usually mean odorous house ants or pavement ants rather than anything structural. When you're not sure, that's exactly what the inspection is for — we identify what's actually present before we treat, because the right fix depends entirely on the right ID.",
      ],
    },
    localContext: {
      title: "What preventative pest control looks like in the Finger Lakes",
      paragraphs: [
        "Central New York homes face a specific mix of pressures that a generic, national-franchise plan tends to miss. Much of Ithaca and the surrounding towns — Trumansburg, Newfield, Dryden, Groton — is older housing stock built on fieldstone or block foundations that have settled and cracked over a century of freeze-thaw winters. Every one of those gaps is a doorway, and mice, spiders, ants, and overwintering insects all use them. A preventative program built for this area starts at the foundation line, because that is where the problems actually begin.",
        "The region's geography adds to the pressure. Homes back up to gorges, creeks, woodlots, and farm fields, so there is a constant reservoir of pests just beyond the lawn waiting to move in when the weather turns. Lake-effect moisture and humid summers keep basements damp, which draws moisture pests like centipedes, silverfish, and springtails. And the large rental market around Cornell and Ithaca College means many buildings turn over tenants every summer, giving pests a fresh chance to travel between units and structures.",
        "A recurring plan answers all of that by working with the calendar instead of against it. Rather than waiting for a call after the ants are already in the kitchen or the mice are already in the walls, we treat the perimeter and entry points on a seasonal rhythm — heavier on exclusion and rodent pressure in the fall, heavier on ants and moisture pests in the spring. Over a full year that steady, proactive cadence is what keeps a home quiet, and it is almost always less expensive than a series of reactive emergency visits.",
      ],
    },
    healthRisks: {
      title: "Why a small pest problem rarely stays small",
      paragraphs: [
        "The reason preventative service pays for itself is that most household pests compound. A handful of mice in October becomes a breeding population in the walls by February, chewing wiring and contaminating insulation the whole time. A few carpenter ant scouts in spring mean a parent colony somewhere nearby is sending out satellites, some of which may be excavating structural wood. What looks like a minor nuisance is usually the visible edge of something larger, and the cost of ignoring it climbs quietly.",
        "There is a health dimension too. Rodents contaminate food-storage and prep areas with droppings and urine; cockroaches spread bacteria and are a documented asthma trigger, especially for children; stinging insects nesting near a doorway are a real hazard for anyone with an allergy. None of these are exotic risks — they are the ordinary consequences of common Central New York pests left unmanaged in an occupied home.",
        "Then there is the property itself. Moisture pests signal — and worsen — damp conditions that damage wood and finishes. Rodents and squirrels chewing in an attic are a genuine fire risk that insurers care about. Catching these early, as part of a routine that already has eyes on your foundation, attic, and perimeter every season, is dramatically cheaper than repairing the damage after the fact.",
      ],
    },
    whyProfessional: {
      title: "Why a plan beats the hardware-store aisle",
      paragraphs: [
        "Do-it-yourself products have their place, but they are built around a single assumption: that you already have a specific pest, in a specific spot, right now. They are reactive by design. The store shelf cannot tell you that the ants you are seeing are carpenter ants nesting in a wet windowsill, or that the mouse in the trap is one of a dozen using a gap behind the dishwasher, or that the wasps at the eave are feeding a nest inside the wall. Identification and knowing where to look are most of the job, and they are exactly what a bag of granules cannot provide.",
        "Professionals also work with a different toolkit and a different method. We use targeted, non-repellent products and placements rated for occupied homes, timed to the season and the pest's biology — for example, baiting a colony so foragers carry the active ingredient back to the nest, rather than spraying a repellent that simply scatters it into new areas. That distinction is the difference between knocking down what you can see and actually resolving the source.",
        "Finally, a plan comes with accountability. Our recurring service includes free re-treatment between visits if a covered pest shows up, and the same technician gets to know your home over time instead of a rotating crew starting from scratch each visit. You are not buying a product; you are buying a result and someone who stands behind it.",
      ],
    },
    faqs: [
      { q: "How often does a preventative plan actually treat my home?", a: "Most Central New York homes are on a quarterly schedule — four visits timed to spring, summer, fall, and winter pest pressure — with free re-service in between if a covered pest appears. Homes with heavier pressure (wooded lots, farm-adjacent, older foundations) sometimes benefit from a more frequent exterior cadence, which we'll recommend honestly rather than upsell." },
      { q: "Is recurring service worth it if I only see pests once in a while?", a: "Usually yes, because 'once in a while' in this area typically means a different pest each season rather than none — ants in spring, wasps in summer, mice in fall. A plan prevents those from establishing and costs less per visit than repeated one-off calls. If you truly only have a single, contained issue, we'll tell you a one-time treatment is the better value." },
      { q: "Do I have to sign a long contract?", a: "No. We're a local family business, not a national chain with lock-in contracts and surprise cancellation fees. We earn the next visit by doing the last one right." },
      { q: "Will the treatments harm my kids, pets, or garden?", a: "Applied correctly, no. We use EPA-registered products following the label, with placements designed to keep people and pets away from wet product, and we favor targeted application and exclusion over blanket spraying. Tell us about pollinator gardens, ponds, or sensitivities and we'll tailor the approach." },
    ],
  },

  // ============================================================ ROACH CONTROL
  "roach-control": {
    identification: {
      title: "How to know it's German cockroaches",
      paragraphs: [
        "The German cockroach — the species behind nearly all indoor roach problems in this area — is small, about half an inch long, light tan to brown, with two dark parallel stripes running lengthwise behind the head. They're most active at night, so the classic first sighting is flicking on a kitchen or bathroom light and seeing one or two dash for cover. Seeing them during the day usually isn't good news: because they're nocturnal, daytime activity generally means the population has grown large enough that they're being forced into the open.",
        "The evidence they leave is just as telling as the insects themselves. Look for what resembles finely ground black pepper or coffee grounds — droppings — collecting in the corners of drawers, along the tops of cabinets, behind the stove and refrigerator, and around hinges and cracks. You may also find shed skins and small, brown, capsule-shaped egg cases (oothecae) tucked into cracks. A heavy infestation can produce a distinct musty, oily odor. All of it concentrates where it's warm, humid, and close to food.",
        "It helps to distinguish German cockroaches from the occasional large roaches people also encounter. Big, dark 'water bugs' that wander up from drains or basements are usually Oriental or American cockroaches, which are more of an outdoor/moisture-associated occasional intruder and are handled differently. The small, striped, kitchen-dwelling, fast-breeding roach is the German cockroach, and correctly identifying it is what points treatment toward gel baiting the harborage rather than surface spraying.",
      ],
    },
    localContext: {
      title: "Cockroaches in Ithaca apartments and rentals",
      paragraphs: [
        "The cockroach that matters most in Central New York is the German cockroach, and it is overwhelmingly an indoor, structural problem rather than something that wanders in from the yard. It thrives in warm, humid kitchens and bathrooms, and it spreads through the shared walls, plumbing chases, and utility runs of multi-unit buildings. In a college town with a dense rental market around Cornell and Ithaca College, that means a roach problem in one apartment is very often a building problem — which is exactly why treating a single unit while the one next door is infested tends to 'fail.'",
        "German cockroaches also travel. They hitchhike into clean homes inside grocery bags, secondhand appliances, cardboard boxes, and moving cartons — the last one a real factor during the heavy summer move-in and move-out cycle here. That is why a spotless kitchen can still develop an infestation, and why blaming tenants for 'dirtiness' usually misses the actual mechanism. The pest is following warmth, moisture, and food, and it is very good at finding all three in older buildings.",
        "Because the population lives hidden in cracks, wall voids, and the warm motor compartments of appliances, what you see is a small fraction of what is there. A few roaches visible during the day usually indicates a well-established population, because they are nocturnal and only forage into the open when numbers force them to. That hidden, fast-breeding nature is what makes professional, source-directed treatment so much more effective than surface spraying.",
      ],
    },
    healthRisks: {
      title: "The health case for dealing with roaches quickly",
      paragraphs: [
        "Cockroaches are not just unpleasant; they are a genuine health concern in an occupied home. They travel through drains, garbage, and wall voids and then across food-prep surfaces, mechanically spreading bacteria such as Salmonella and E. coli along the way. In a kitchen, that turns a nuisance into a food-safety issue, which is why they are treated so seriously in restaurants and rental housing.",
        "The most significant risk, though, is respiratory. Cockroach droppings, shed skins, and body fragments are a potent indoor allergen and a well-documented trigger for asthma — a link that is strongest in children living in multi-unit housing. For a family with an asthmatic child, resolving a roach infestation is not cosmetic; it can meaningfully reduce a real, ongoing health burden in the home.",
        "For landlords, there is also a habitability dimension. In New York, significant infestations can bear on a rental's warranty of habitability, so a documented, professional response protects tenants' health and the owner at the same time. Fast, thorough treatment is the cheapest form of that protection.",
      ],
    },
    whyProfessional: {
      title: "Why store-bought sprays make roaches worse",
      paragraphs: [
        "Retail roach sprays and foggers (\"bombs\") are one of the few DIY approaches that can actively backfire. They are repellents: they scatter the population deeper into wall voids and adjacent rooms — or adjacent apartments — without reaching the harborage where the roaches actually live and breed. People often report that after a bomb, roaches appear in new rooms. The visible ones died; the colony relocated and kept reproducing.",
        "Effective control uses professional gel baits and targeted materials placed precisely where the population harbors. Foragers feed on the bait and carry the active ingredient back into the harborage, where it moves through the population — including individuals you will never see. This source-directed approach, combined with correct identification and attention to moisture and sanitation, is what actually collapses an infestation instead of merely thinning the part you can see.",
        "German cockroaches also breed fast enough that timing and follow-up matter. A single treatment rarely finishes the job; a planned sequence with follow-up visits is what breaks the reproductive cycle. In multi-unit buildings, coordinating connected units so the population cannot simply shuttle back and forth is often the difference between resolution and an endless loop.",
      ],
    },
    faqs: [
      { q: "Why do I still see roaches after I sprayed?", a: "Store-bought sprays and foggers are repellents — they scatter roaches deeper into walls and adjacent rooms instead of reaching the harborage, so survivors keep breeding and often show up somewhere new. Professional gel baits work the opposite way: foragers carry the active ingredient back to the nest, collapsing the population at the source." },
      { q: "Does having roaches mean my home is dirty?", a: "No. German cockroaches hitchhike in on groceries, boxes, secondhand appliances, and moving cartons, and they spread through shared walls in multi-unit buildings. Spotless homes get them too. Sanitation helps control them, but it isn't the cause and isn't a moral failing." },
      { q: "How long does it take to get rid of German cockroaches?", a: "An established infestation usually takes a planned series of treatments over several weeks, not a single visit, because you have to break the breeding cycle. We set clear expectations up front and schedule the follow-ups needed to finish the job rather than overpromising a one-visit fix." },
      { q: "I'm in an apartment — will treating just my unit work?", a: "Often not on its own, because roaches move between connected units through shared walls and plumbing. The most reliable results come from coordinating adjoining units so the population can't shuttle back and forth. If you're a tenant, we can provide documentation to bring to your landlord or property manager." },
    ],
  },

  // ============================================================ RODENT CONTROL
  "rodent-control": {
    identification: {
      title: "How to tell what's in your walls",
      paragraphs: [
        "The first question is usually mice or rats, and the droppings answer it quickly. House-mouse droppings are small — about the size of a grain of rice — dark, and scattered wherever the mice travel and feed. Rat droppings are noticeably larger, capsule-shaped, and fewer in number. In Central New York homes, house mice are by far the most common indoor rodent, with the occasional Norway rat closer to farms, older neighborhoods, and areas near water. Deer mice — bicolored, with a white belly and feet — turn up in more rural and wooded settings and are the ones associated with hantavirus.",
        "Beyond droppings, rodents leave a consistent trail of evidence. Gnaw marks on baseboards, food packaging, and wiring; greasy, dark rub marks along the runways they use repeatedly against walls and joists; shredded insulation, paper, or fabric gathered into nests; and the scratching or scampering sounds in walls and ceilings that many homeowners hear first, usually at night. A sudden musky, ammonia-like odor in a concentrated area can indicate an active nest nearby.",
        "Where you find the evidence matters as much as what it is. Activity concentrated in the kitchen and pantry points to a food-driven interior population; evidence along the sill, in the basement, or where an addition meets the original structure points toward the entry route you'll want to seal. Reading that pattern — what kind of rodent, how many, and where they're getting in and traveling — is the difference between setting a few traps and actually closing the problem down.",
      ],
    },
    localContext: {
      title: "The Central New York fall mouse invasion",
      paragraphs: [
        "If there is one predictable pest event in the Finger Lakes calendar, it is the fall push of mice indoors. As soon as night temperatures start dropping in September and October, house mice and deer mice begin testing the outside of every building for a way in, looking for warmth and food to overwinter. Homes near fields, woods, creeks, and farmland feel this hardest, but no house is immune — a mouse can slip through a gap the size of a dime, and older CNY foundations offer plenty of them.",
        "Our housing stock makes the problem worse. Fieldstone and block foundations, stone-walled basements, gaps around sill plates, utility penetrations, and worn door sweeps all give rodents easy access, and a century of freeze-thaw cycles has opened new gaps over time. Attached garages, porches, and additions create even more entry points where two structures meet. Once inside, mice settle into wall voids, insulation, and quiet basement corners, and they stay active there all winter even when the outdoor population goes dormant.",
        "This seasonality is exactly why timing matters so much. A home sealed and treated before the October push is a home that stays quiet through the winter; a home that waits until it hears scratching in January is already hosting a breeding population. Fall exclusion — finding and closing the entry points, not just setting traps — is the single most valuable rodent step for a Central New York property.",
      ],
    },
    healthRisks: {
      title: "Why rodents are more than a nuisance",
      paragraphs: [
        "Mice and rats are a legitimate health and safety issue, not just an unsettling one. They contaminate food-storage and prep areas with droppings and urine as they travel, and their waste can carry pathogens. Deer mice, common in rural and semi-rural CNY, are associated with hantavirus, which is why disturbing droppings in an enclosed space like a basement or crawlspace without proper precautions is genuinely risky. Cleanup should be done carefully, and heavy contamination is a job for professionals.",
        "The property risk is just as real. Rodents gnaw constantly to manage their ever-growing incisors, and wiring is a frequent target — chewed insulation on electrical lines is a documented fire hazard that home insurers take seriously. They also destroy stored belongings, shred insulation for nesting, and their droppings and urine leave lingering odor and staining in walls and attics.",
        "Because rodents breed quickly, the gap between 'a mouse' and 'an infestation' is short. A pair can become a population within a season, which is why the calculation almost always favors dealing with the first signs — droppings, gnaw marks, scratching in the walls at night — rather than waiting to see whether it 'goes away.' It rarely does on its own.",
      ],
    },
    whyProfessional: {
      title: "Why exclusion beats a handful of traps",
      paragraphs: [
        "The reason DIY rodent control so often turns into a recurring winter ritual is that traps and bait address the mice that are already inside, but do nothing about the doorway that let them in. Catch a few, and the open gap simply admits the next few. Effective rodent work is built around exclusion: systematically finding and sealing the entry points — utility penetrations, foundation gaps, sill and door gaps, the seams where additions meet the original structure — so the problem is closed off rather than continuously restocked.",
        "There is also a safety and placement dimension that matters, especially in homes with children and pets. Professional programs use tamper-resistant bait stations and correct placement in the runways rodents actually use, rather than loose bait or randomly set traps. Knowing where rodents travel, harbor, and enter — reading the droppings, rub marks, and gnaw evidence — is most of the skill, and it is what turns a temporary knock-down into a lasting fix.",
        "Finally, rodent work benefits from follow-up. We monitor after the initial treatment to confirm the population is actually down and the entry points are holding, and we address any new activity before it re-establishes. That combination — exclusion first, controlled baiting or trapping second, and monitoring to confirm — is what ends the cycle instead of managing it forever.",
      ],
    },
    faqs: [
      { q: "I only saw one mouse — do I really need to do anything?", a: "Usually yes. Mice are social and breed quickly, so a single visible mouse in fall typically means more are already established in the walls or basement. It's far cheaper and easier to close the entry points and knock the population down early than to wait until you're hearing them in the walls at night." },
      { q: "What's the difference between what you do and just setting traps?", a: "Traps catch the mice already inside; they don't stop new ones from coming in. Our work centers on exclusion — finding and sealing the gaps rodents use to enter — combined with controlled baiting/trapping and follow-up monitoring. Sealing the doorway is what turns a temporary fix into a permanent one." },
      { q: "Is rodent bait safe around my kids and pets?", a: "We use tamper-resistant bait stations and place materials in the runways rodents actually use, away from areas kids and pets can reach, and in many interior situations we rely on trapping instead. Tell us about pets and small children and we'll design the approach around them." },
      { q: "Should I clean up mouse droppings myself?", a: "Small amounts can be cleaned carefully — never dry-sweep or vacuum them, since that can aerosolize particles; dampen with a disinfectant first and wear gloves. Deer mice in our area are associated with hantavirus, so heavy contamination in a basement, attic, or crawlspace is best handled with professional precautions." },
    ],
  },

  // ============================================================ ANT CONTROL
  "ant-control": {
    identification: {
      title: "Is it a carpenter ant — and how can you tell?",
      paragraphs: [
        "Carpenter ants are the large ants — often a quarter to a half inch — that are usually black, sometimes dark red and black, with a single node between thorax and abdomen and an evenly rounded upper thorax. In Central New York they most often reveal themselves by appearing indoors on warm days in late winter and spring. A key sign is frass: small piles of what looks like coarse sawdust mixed with insect parts, pushed out of the galleries they excavate. Finding frass beneath a windowsill, door frame, or baseboard is a strong indication of a nest in the structure.",
        "One identification that genuinely matters is carpenter ant swarmers versus termite swarmers, since both produce winged reproductives. Carpenter ants have bent (elbowed) antennae, a pinched waist, and two pairs of wings of different lengths; termites have straight antennae, a broad waist, and two pairs of equal-length wings. New York is largely outside the zone of heavy termite pressure, so winged ants indoors are far more likely carpenter ants — but the distinction is worth getting right, and it's one we confirm on inspection.",
        "The smaller ants most homeowners see are different animals with different fixes. Odorous house ants form persistent trails to sweets and give off a faint rotten-coconut smell when crushed; pavement ants trail along walkways, driveways, and slab edges and often nest under concrete. Neither damages wood. Because carpenter ants, odorous house ants, and pavement ants call for different strategies, the identification step isn't academic — it's what determines whether we're protecting your structure or just clearing a kitchen trail.",
      ],
    },
    localContext: {
      title: "Carpenter ants: the ant that matters in Central New York",
      paragraphs: [
        "While several ant species turn up in Finger Lakes homes, the one that dominates — and the one that can actually damage a house — is the carpenter ant. Central New York's wooded lots, mature trees, and damp, wood-framed older homes are ideal habitat. Carpenter ants don't eat wood the way termites do; they excavate it to build nests, hollowing out galleries in moist or previously water-damaged wood around roof edges, windows, sills, decks, and anywhere a small leak has softened the framing.",
        "The tell in our area is spring activity indoors. When large black ants — often a quarter to a half inch long — appear inside on warm early-season days, it frequently means a parent colony is nesting in or near the structure and has been active long enough to send out satellites. Because carpenter ants prefer moist wood, they map closely onto exactly the vulnerable spots common in older Ithaca-area homes: around chimneys and skylights, behind gutters, under decks, and near basement windows.",
        "Other species show up too — pavement ants trailing along walks and slab edges, and odorous house ants forming the fast, persistent kitchen trails many homeowners recognize. Each responds to a different approach, which is why identification comes first. But in this region, the carpenter ant is the one where getting it right protects not just your kitchen but your structure.",
      ],
    },
    healthRisks: {
      title: "Property damage and contamination",
      paragraphs: [
        "New York is largely outside the range where aggressive subterranean termites are a constant threat, which means carpenter ants are the region's primary wood-destroying insect concern for many homeowners. Over time, an established colony excavating galleries in structural or trim wood can cause real damage, particularly because the ants are usually exploiting wood that is already moisture-compromised — so their presence often flags a hidden leak or ventilation problem that needs attention on its own.",
        "The other ant species are less about structure and more about contamination and nuisance. Pavement ants and odorous house ants forage across counters, pantries, and pet-food areas, trailing between the outdoors and your food. While they are not major disease vectors, no one wants ants in the sugar or streaming along the backsplash, and a persistent indoor trail signals a nest that will keep resupplying until it's addressed at the source.",
        "Because ants operate as colonies with a queen (or several) hidden away, the visible trail is just the supply line. Damage and contamination both continue as long as the colony is alive, which is why knocking down foragers without reaching the nest gives only temporary relief. The goal is always the colony, not the ants on the counter.",
      ],
    },
    whyProfessional: {
      title: "Why spraying the trail can make ants worse",
      paragraphs: [
        "The instinct with a visible ant trail is to spray it, but with many species — carpenter ants especially — a repellent spray can trigger 'budding,' where a stressed colony splits and relocates into multiple new nests. You kill the ants you can see and end up with two problems where you had one. This is the single most common reason DIY ant control seems to work for a week and then comes back worse.",
        "Professional control uses non-repellent products and targeted baits that foragers carry back to the nest, moving the active ingredient through the colony to the queen. Combined with correct species identification and finding the nest's likely location — reading the trails, the moisture clues, and the structural vulnerabilities — this reaches the source instead of scattering it. For carpenter ants, that often includes locating and addressing the moisture problem that drew them in the first place, so the fix actually holds.",
        "There is also value in a professional simply knowing what they're looking at. Carpenter ants, pavement ants, and odorous house ants look similar to most homeowners but call for different strategies, and treating the wrong way wastes time while the colony grows. Getting the identification and the method right the first time is what separates a lasting result from an endless cycle of trailing ants each spring.",
      ],
    },
    faqs: [
      { q: "How do I know if I have carpenter ants or just regular ants?", a: "Carpenter ants are the large (¼–½ inch) black ants that tend to appear indoors on warm spring days, sometimes with faint rustling in walls or small piles of what looks like sawdust (frass). Smaller ants trailing along counters or walkways are usually odorous house ants or pavement ants. We identify the species on the first visit, because each needs a different approach." },
      { q: "Do carpenter ants cause as much damage as termites?", a: "They work differently — they excavate wood to nest rather than eat it — so damage accumulates more slowly, but an established colony in structural wood can still cause real problems over time. In our part of New York, where aggressive termites are less common, carpenter ants are the wood-destroying insect most homeowners actually need to watch for." },
      { q: "Why do the ants come back a week after I spray them?", a: "Repellent sprays can cause carpenter ant colonies to 'bud' — split and relocate into several new nests — so you end up with more problems, not fewer. Non-repellent baiting reaches the queen and colony at the source, which is why professional treatment holds where spraying the trail doesn't." },
      { q: "Carpenter ants keep showing up near a window/roofline — why there?", a: "Carpenter ants prefer moist or previously water-damaged wood, so recurring activity in one spot usually points to a hidden leak or condensation problem there — around a window, chimney, gutter, or skylight. Part of solving it for good is finding and flagging that moisture source, not just treating the ants." },
    ],
  },

  // ============================================================ SPIDER CONTROL
  "spider-control": {
    identification: {
      title: "Which spider is that?",
      paragraphs: [
        "Most Central New York spiders sort into a few recognizable groups. Cellar spiders are the delicate, long-legged spiders that hang in loose webs in basement and garage corners — harmless, and often mistaken for 'daddy long-legs.' House and cobweb spiders build the tangled webs in ceiling corners and window frames. Wolf spiders are the large, fast, ground-hunting spiders that don't build webs to catch prey and sometimes startle people by darting across a basement floor; they look intimidating but aren't dangerous. Recognizing these as the everyday nuisance species they are takes most of the fear out of the encounter.",
        "The webs themselves help with identification. Loose, messy cobwebs in corners point to house and cobweb spiders; funnel-shaped webs in grass or wood piles point to grass spiders; and no web at all, just a fast-moving hunter, usually means a wolf spider or a similar ground species. Round, papery egg sacs tucked in corners or attached to webbing are a sign of an established breeding presence and are worth removing as part of treatment.",
        "It's worth repeating the reassuring part clearly, because it's the most common question: the brown recluse is not established in New York, so a bite blamed on one here is almost always something else. The black widow exists in the region but is uncommon, shy, and rarely encountered indoors. If you ever do find a glossy black spider with a red hourglass, keep your distance and let us handle it — but in the overwhelming majority of homes, what you're seeing is a harmless species whose only real offense is webs and unease.",
      ],
    },
    localContext: {
      title: "The spiders you actually see in Central New York",
      paragraphs: [
        "Most spiders in Finger Lakes homes are common, harmless species: cellar spiders (the long-legged ones in basement corners), various cobweb and house spiders, and — outdoors and occasionally in — wolf spiders, which are large and fast but not dangerous. They are, in a sense, a symptom rather than the disease: spiders go where their food is, so a home with a lot of spiders usually has a lot of other insects feeding them. Address the insect base and the spider pressure drops with it.",
        "There's a strong seasonal pattern here. Late summer and fall bring the most noticeable spider activity, both because outdoor populations peak and because cooling weather nudges them toward the warmth of the house — the same fall migration that drives ladybugs and stink bugs to the siding. Damp basements, garages, sheds, wood piles, and cluttered storage areas are the classic harborage, and older CNY homes tend to offer all of the above.",
        "It's worth saying plainly, because it's a common worry: the brown recluse is not established in New York, and while the black widow exists in the region it is uncommon and reclusive. The overwhelming majority of spiders our customers encounter are nuisance species whose real cost is the webs, the egg sacs, and the simple unease of sharing space with them — not a medical threat.",
      ],
    },
    healthRisks: {
      title: "Bites, webs, and peace of mind",
      paragraphs: [
        "For most Central New York spiders, the honest health assessment is reassuring: they are not aggressive, most cannot meaningfully bite through skin, and bites are rare and typically minor when they happen. Spiders are actually beneficial in the yard, where they eat pest insects. The problem is less about danger and more about volume and comfort — nobody wants to walk through webs in the garage or find egg sacs in the basement corners.",
        "That said, comfort matters, and for many people arachnophobia is a real quality-of-life issue that makes a spider-heavy basement or bedroom genuinely stressful. There's no reason to dismiss that. Reducing spider pressure so a space feels usable and calm again is a completely legitimate reason to treat, and it's one of the more common requests we get heading into fall.",
        "The practical takeaway is that spider control is mostly about numbers and location. Knocking down webs and egg sacs, treating the harborage, and — crucially — reducing the insect population the spiders are feeding on brings the count down to the occasional harmless visitor rather than a persistent presence. It's a very achievable outcome, not a losing battle.",
      ],
    },
    whyProfessional: {
      title: "Why treating the food source works better than swatting",
      paragraphs: [
        "The reason random spraying and swatting never quite solves a spider problem is that it ignores why the spiders are there in the first place: food. A home with lots of spiders is a home with lots of small insects — flies, gnats, moths, and the other prey spiders hunt. Treat only the spiders and the vacancy fills right back up as long as the buffet is open. Professional control works both sides of that equation.",
        "Our approach combines direct measures — de-webbing, removing egg sacs, and treating the cracks, eaves, and harborage where spiders shelter — with a perimeter program that suppresses the insect base they depend on. Knocking down the prey population is what produces a lasting drop in spider numbers rather than a brief reprieve. We also target the specific entry points and exterior harborage (soffits, foundation gaps, wood piles staged against the house) that funnel spiders indoors in fall.",
        "There's also simple thoroughness and reach. We get to the high corners, the crawlspaces, the garage ceilings, and the exterior eaves that are awkward or unpleasant to reach yourself, and we do it on a schedule timed to the fall push. For a homeowner who dreads the basement in September, that combination — food source, harborage, entry points, and timing — is what makes the space comfortable again and keeps it that way." ,
      ],
    },
    faqs: [
      { q: "Are the spiders in my house dangerous?", a: "Almost certainly not. The brown recluse isn't established in New York, and the black widow — while present in the region — is uncommon and reclusive. The spiders in Central New York homes are overwhelmingly harmless nuisance species like cellar spiders, cobweb spiders, and wolf spiders. Their real cost is webs, egg sacs, and discomfort, not danger." },
      { q: "Why do I suddenly have so many spiders in the fall?", a: "Two reasons stack up in fall: outdoor spider populations peak in late summer, and cooling weather pushes them toward the warmth of the house — the same migration that brings ladybugs and stink bugs to the siding. Treating the harborage and sealing entry points ahead of that push is the most effective timing." },
      { q: "Will you actually reduce the spiders, or just spray and hope?", a: "Both directly and indirectly. We de-web, remove egg sacs, and treat harborage, but the durable win comes from suppressing the insects the spiders feed on — a perimeter program that starves the food source. Fewer prey insects means fewer spiders, for longer." },
      { q: "I'm genuinely afraid of spiders — is it worth treating even if they're harmless?", a: "Absolutely. Arachnophobia is a real quality-of-life issue, and there's nothing unreasonable about wanting a basement or bedroom you can use without dread. Reducing spider pressure to the occasional stray visitor is a very achievable goal, and it's one of our most common fall requests." },
    ],
  },

  // ============================================================ STINGING INSECTS
  "stinging-insects": {
    identification: {
      title: "Paper wasp, yellowjacket, or hornet?",
      paragraphs: [
        "Telling the three main stinging insects apart is easiest by their nests. Paper wasps build small, open, umbrella-shaped combs — you can see the individual cells — hanging under eaves, railings, and porch ceilings, usually with only a modest number of wasps. Bald-faced hornets build the large, enclosed, gray, papery football-shaped nests up in trees, on walls, and under overhangs. Yellowjackets are the ones you often can't see nesting at all: they favor holes in the ground, wall voids, and cavities behind siding, with a steady stream of insects coming and going from a single small opening.",
        "The insects themselves differ too. Paper wasps are slender, with long legs that dangle in flight, typically brownish with yellow markings. Yellowjackets are shorter, stockier, and boldly banded black and yellow — the aggressive ones that crash picnics and hover around garbage and sugary drinks in late summer. Bald-faced hornets are larger and black with a white face and markings. The occasional European hornet is bigger still, brown and yellow, and is unusual in that it may fly at night and bump lit windows.",
        "Behavior is the last clue, and it doubles as a safety warning. Paper wasps are relatively docile unless the nest is disturbed; yellowjackets and bald-faced hornets are far more defensive, especially as colonies peak in late summer. Ground-nesting yellowjackets are the ones people most often provoke by accident while mowing or gardening. Correctly identifying which you're dealing with — and where the nest actually is — shapes how the situation has to be approached, and it's exactly the kind of call that's safer left to someone with the right equipment.",
      ],
    },
    localContext: {
      title: "Wasps and hornets in the Finger Lakes summer",
      paragraphs: [
        "Stinging-insect calls follow a sharp seasonal curve in Central New York, building through summer and peaking in August and September when colonies are largest and most defensive. The main players are yellowjackets, bald-faced hornets, and paper wasps, with the occasional large European hornet. Each nests differently: paper wasps build the familiar open, umbrella-shaped combs under eaves and railings; bald-faced hornets construct the big gray football-shaped aerial nests in trees and on structures; and yellowjackets frequently nest in the ground, in wall voids, and behind siding — the ones people stumble into while mowing.",
        "Our built environment gives them plenty of options. Soffits, eaves, porch ceilings, deck railings, shed corners, and gaps behind siding are all prime real estate, and yellowjackets exploiting a small exterior gap can build a surprisingly large nest inside a wall void where it's neither visible nor easy to reach. Late-season colonies can number in the hundreds to thousands, which is why a nest that seemed minor in June becomes a serious hazard by Labor Day.",
        "Timing shapes the right response. Early-season nests are smaller and easier to handle; late-season nests are larger, more defensive, and more dangerous to disturb. Either way, nests near doors, walkways, play areas, or high-traffic spots are the priority, because that's where the risk of stings to family, guests, and pets is highest.",
      ],
    },
    healthRisks: {
      title: "Why stinging insects are a real hazard, not just a nuisance",
      paragraphs: [
        "Unlike a honeybee, yellowjackets and hornets can sting repeatedly, and a disturbed late-season colony can deliver many stings very quickly. For most people that means significant pain and localized swelling, but for someone with a venom allergy it can mean a life-threatening anaphylactic reaction. That risk is the single biggest reason not to treat a large or hidden nest casually — the stakes around an allergic family member or guest are simply too high.",
        "Even without an allergy, certain situations are genuinely dangerous: a ground nest near where children play, a yellowjacket colony in the wall beside a frequently used door, or a nest disturbed while mowing or trimming. Multiple simultaneous stings are painful and, in volume, medically serious for anyone. Pets are vulnerable too, often provoking a nest out of curiosity.",
        "There's also a structural wrinkle specific to wall-void yellowjacket nests: killing the colony without addressing the nest properly can drive the insects to chew through interior drywall looking for a new exit, bringing them into the living space. That's one of several reasons these situations reward doing it right the first time rather than improvising.",
      ],
    },
    whyProfessional: {
      title: "Why nest removal is a job to leave to a pro",
      paragraphs: [
        "Stinging-insect nests are the one pest situation where the DIY risk is immediate and physical rather than just a matter of effectiveness. Spraying a large yellowjacket or hornet nest — especially one that's partly hidden in a wall or high under an eave — provokes a defensive swarm, and a can of store spray rarely reaches the whole colony before the colony reaches you. Ladders and stings are a bad combination. For a big or awkwardly located nest, the safe move is to call rather than climb.",
        "We treat nests with the proper equipment, protective approach, and materials to reach the colony thoroughly, including the ground and wall-void nests that are hardest and most dangerous for a homeowner to deal with. Reaching the nest itself — not just the insects flying around it — is what actually resolves the problem, and knowing how to approach a defensive late-season colony safely is most of the job.",
        "For wall-void and ground nests in particular, method matters: treating the nest correctly and, where appropriate, handling the void so the colony doesn't redirect into the living space is the difference between a clean resolution and a worse problem. Same-day response on urgent nests near doors and play areas is exactly the kind of situation where a local, family-owned company that answers the phone earns its keep.",
      ],
    },
    faqs: [
      { q: "Is it safe to knock down a wasp nest myself?", a: "A small, exposed paper-wasp nest early in the season is sometimes manageable, but large yellowjacket or hornet nests — and any nest hidden in a wall or high under an eave — are genuinely dangerous to disturb, because these insects sting repeatedly and defend the colony aggressively. If anyone nearby has a venom allergy, or the nest is big or hidden, don't risk it; call us." },
      { q: "Why are wasps worst in late summer?", a: "Colonies grow all season and reach their peak size — often hundreds to thousands of insects — in August and September, right when they're also most defensive. A nest that looked minor in June can be a serious hazard by Labor Day, which is why late-summer nest calls spike." },
      { q: "There are wasps going in and out of my wall — what's happening?", a: "That's usually a yellowjacket colony nesting in the wall void behind a small exterior gap. These need care: treating them incorrectly can drive the insects to chew through interior drywall looking for a new way out, bringing them into your living space. It's a situation to have handled properly rather than sprayed at from outside." },
      { q: "Can you come out the same day for a nest by my door?", a: "We prioritize urgent stinging-insect nests near doors, walkways, and play areas because that's where the sting risk is highest. Call us and we'll get you scheduled as quickly as we can — being local and family-run means you reach a real person, not a national dispatch line." },
    ],
  },

  // ============================================================ MOSQUITO & TICK
  "mosquito-tick": {
    identification: {
      title: "Know your ticks — and where mosquitoes breed",
      paragraphs: [
        "Not all ticks carry the same risk, so identification matters. The blacklegged tick (deer tick) — the Lyme-disease carrier — is small and reddish-brown with black legs; the nymphs, which do much of the transmitting, are roughly the size of a poppy seed and terribly easy to miss. The American dog tick is larger, brown with whitish markings, and more often found on pets and in grassy areas; it doesn't transmit Lyme. The lone star tick, expanding in the region, has a distinctive white dot on the female's back. Because the deer tick is both the smallest and the most medically important, careful checks after time outdoors are essential.",
        "Where you encounter ticks is a clue in itself. Deer ticks 'quest' by climbing to the tips of grass and low brush at the edges of lawns, along trails, and where yard meets woods or field, waiting to grab onto a passing host. They aren't typically out in the sunny middle of a mowed lawn. That habitat preference is why yard treatment focuses on those shaded, brushy transition zones rather than the open turf, and why the wood line is the area to be most careful around.",
        "Mosquitoes are identified less by species than by their breeding sites, and finding those sites is half the battle. Any container or low spot that holds water for more than a few days can produce them: clogged gutters, plant saucers, buckets, tarps, wheelbarrows, old tires, birdbaths, and the corrugated drain extensions off downspouts. During an inspection we point these out, because mosquitoes will keep re-breeding from a single overlooked source no matter how well the resting areas are treated. Eliminating standing water is the most effective thing a homeowner can do between visits.",
      ],
    },
    localContext: {
      title: "Mosquitoes and ticks in the Finger Lakes",
      paragraphs: [
        "The Finger Lakes landscape that makes this such a beautiful place to live — lakes, gorges, creeks, woods, and tall-grass edges — is also ideal habitat for mosquitoes and ticks. Mosquitoes breed in any standing water, and it takes remarkably little: a clogged gutter, a saucer under a planter, a tarp fold, a forgotten bucket, or a low spot that holds rain. Our humid summers keep the pressure up from late spring well into fall, concentrated in the shaded, damp parts of the yard where mosquitoes rest during the day.",
        "Ticks are the more serious story, and the trend in Central New York is the wrong direction. The blacklegged tick (deer tick) — the species that transmits Lyme disease — has expanded across the region, and tick-borne illness is now a genuine year-round concern that's heaviest from spring through fall. Ticks wait in the transition zones: tall grass, leaf litter, and the brushy edges where lawn meets woods or field. Properties that back up to woodlots, trails, or fields see the most pressure.",
        "That geography is why yard treatment here is really about managing the edges and the harborage. The interior lawn is rarely the problem; the shaded perimeter, the leaf litter under shrubs, the tall grass along the tree line, and the standing water are where mosquitoes rest and ticks wait. A program built around those specific zones is far more effective than blanket spraying, and it's tailored to how these pests actually use a Finger Lakes property.",
      ],
    },
    healthRisks: {
      title: "The disease risk that makes this more than comfort",
      paragraphs: [
        "Ticks are the reason this service is about health, not just enjoying the backyard. In New York, the blacklegged tick transmits Lyme disease, and the same species can carry anaplasmosis and babesiosis — sometimes more than one at a time. Lyme in particular can have serious, lasting effects if it isn't caught early, and the region's rising tick numbers mean the exposure is real for anyone spending time in the yard, gardening, or letting kids and pets play near the wood line.",
        "Mosquitoes carry their own risks. In New York, West Nile virus is the most common mosquito-borne illness, and the rarer but far more severe Eastern equine encephalitis (EEE) does appear in the state. The practical risk to any one person on any one evening is low, but reducing the biting population around a home where people spend summer evenings — and where kids are outside — is a meaningful, sensible precaution rather than a luxury.",
        "Pets factor in too. Dogs are highly exposed to ticks and can contract Lyme and other tick-borne diseases, and they often carry ticks into the house. Reducing the tick population in the yard protects the whole household, two-legged and four-legged, and lowers the number of tick checks that end in a tense tweezers-and-flashlight session at the kitchen table.",
      ],
    },
    whyProfessional: {
      title: "Why targeted yard treatment beats a hardware-store fogger",
      paragraphs: [
        "The trouble with DIY mosquito and tick control is that the store-bought approach — a hose-end fogger sprayed broadly over the lawn — mostly misses where these pests actually live. Mosquitoes rest in shaded, humid harborage during the day, and ticks wait low in leaf litter and tall-grass edges. Blanket-spraying the open lawn treats the part of the yard with the fewest of them while missing the perimeter that holds the most. Coverage and knowing the target zones is the whole game.",
        "Our programs focus treatment on those specific harborage and edge zones on a schedule timed to the season's pressure, which is what actually knocks the biting and questing populations down. For ticks, we can also target the transition areas and use approaches suited to the tick life cycle rather than a single broad spray. And because mosquitoes re-breed from any standing water, we identify and flag the breeding sources on your property — the gutter, the saucer, the low spot — so treatment isn't fighting a source that refills every rain.",
        "Consistency and timing are the other half. A one-time spray gives a brief reprieve; a seasonal program timed to Finger Lakes conditions keeps the population suppressed through the months you actually use the yard. Paired with the simple source-reduction steps we'll point out, that targeted, recurring approach is what turns an unusable backyard back into a usable one — and lowers the tick exposure that matters most for your family's health.",
      ],
    },
    faqs: [
      { q: "How worried should I be about ticks in this area?", a: "It's worth taking seriously. The blacklegged (deer) tick that transmits Lyme disease has expanded across Central New York, and the same tick can carry anaplasmosis and babesiosis. That doesn't mean panic — it means sensible precautions, including reducing the tick population in the yard's edges and doing regular tick checks after time outdoors." },
      { q: "Where do the treatments actually focus?", a: "On the zones these pests actually use: the shaded, damp harborage where mosquitoes rest and the tall-grass, leaf-litter, and wood-line edges where ticks wait — not the open middle of the lawn, which is where DIY foggers waste most of their product. We also flag standing-water breeding sources so mosquito treatment isn't fighting a source that refills every rain." },
      { q: "Do I need to treat all season, or just once?", a: "A single treatment gives a short reprieve, but mosquitoes re-breed and ticks stay active across the season, so a recurring program timed to Finger Lakes conditions is what keeps populations suppressed through the months you use the yard. We'll recommend a cadence based on your property's exposure." },
      { q: "Is the yard safe for my kids and pets after treatment?", a: "Yes, when applied correctly — we follow the product label, which includes any short re-entry interval until treated areas are dry, and we target harborage zones rather than blanket-spraying play areas. Reducing ticks in the yard also protects pets, who are highly exposed and often carry ticks indoors." },
    ],
  },

  // ============================================================ BED BUG
  "bed-bug": {
    identification: {
      title: "How to know if it's really bed bugs",
      paragraphs: [
        "Bed bugs are small but visible: adults are about the size and color of an apple seed — flat, oval, and reddish-brown, turning rounder and darker after feeding. They hide during the day and feed at night, so you rarely see them in the open. The most reliable confirmation is physical evidence rather than bites. Check the mattress seams, the box spring, the folds and tufts, behind the headboard, and along baseboards and outlet plates near the bed for live bugs, pale shed skins, and tiny dark spots that look like ink dots — fecal staining — often clustered in the seams. You may also find small blood smears on the sheets and, in heavier infestations, pinhead-sized white eggs.",
        "Bites alone are not a dependable diagnosis, which surprises people. Bed-bug bites often appear as itchy red welts in a line or cluster on skin exposed during sleep, but reactions vary enormously — some people welt up dramatically while others show nothing at all, and the bites look similar to those of many other insects. Because of that unreliability, we and most professionals confirm bed bugs by finding the physical evidence, not by interpreting bites. If you're waking with unexplained bites, inspect the harborage spots before assuming anything.",
        "Knowing where to look is most of the skill, because bed bugs shelter in astonishingly small cracks near where people sleep or sit still for long periods — not just the bed, but nightstands, upholstered chairs, couch seams, and even behind loose wallpaper or picture frames. A thorough inspection follows that logic. If you find the telltale seams-and-spots evidence, avoid disturbing the area further (which can scatter them) and call for a professional inspection, because early, confirmed identification makes the whole process faster and less costly.",
      ],
    },
    localContext: {
      title: "Bed bugs in a college town",
      paragraphs: [
        "Bed bugs are an equal-opportunity pest — they have nothing to do with cleanliness — and Central New York's mix of colleges, travel, and dense rental housing keeps them circulating. They are hitchhikers: they travel in luggage, backpacks, secondhand furniture, and belongings, moving from hotels, dorms, buses, and apartments into new homes. The heavy summer move-in and move-out cycle around Cornell and Ithaca College is a classic vector, as is any household with frequent travelers or students coming and going.",
        "In multi-unit buildings, bed bugs spread the way roaches do — through wall voids, baseboards, and shared spaces — which means an infestation in one apartment can become a building problem, and treating a single unit while the neighbors are infested tends to fail. Ithaca's large stock of older, subdivided rental houses makes this dynamic especially common, and the hospitality and short-term-rental market around the Finger Lakes wine trail adds a steady stream of exposure on the commercial side.",
        "The other defining feature is how hidden and hardy they are. Bed bugs shelter in the tiniest cracks — mattress seams, headboards, box springs, baseboards, outlet plates, furniture joints — and can go months without feeding, which is why they survive when a home sits empty between tenants and why a problem thought to be gone can resurface. That combination of easy travel, hidden harborage, and resilience is exactly what makes them so difficult to eliminate without a thorough, professional approach.",
      ],
    },
    healthRisks: {
      title: "The real toll of bed bugs",
      paragraphs: [
        "Bed bugs are not known to transmit disease to people, which is often the first thing worth saying — but that does not make them harmless. Their bites cause itchy welts that many people react to strongly, and scratching can lead to secondary skin infections. Some people have more significant allergic reactions, and heavy infestations feeding night after night can, over time, contribute to anemia in rare, severe cases.",
        "The larger toll is psychological, and it's real. An active bed-bug infestation disrupts sleep, creates significant anxiety, and carries a stigma that leaves people feeling ashamed and isolated even though infestation has nothing to do with hygiene. The stress of not being able to rest in your own bed — and of worrying about spreading them to others — is often the hardest part, and it's a completely legitimate reason to want fast, discreet, thorough help.",
        "For landlords and hospitality operators, there's a business and habitability dimension as well. A bed-bug complaint can affect a rental's habitability standing and can do real reputational damage to a hotel, B&B, or short-term rental through reviews. In every one of these cases, the cheapest path is a prompt, documented, professional response — both to end the suffering and to keep the problem from spreading.",
      ],
    },
    whyProfessional: {
      title: "Why DIY usually spreads bed bugs instead of ending them",
      paragraphs: [
        "Bed bugs are one of the hardest pests for a homeowner to eliminate, and well-intentioned DIY often makes things worse. Store-bought sprays are repellents that scatter bed bugs into new rooms — and in apartments, into new units — rather than eliminating them, and bug 'bombs' do the same. People also tend to respond by throwing out mattresses and furniture and moving to sleep on the couch or in another room, which is exactly how an infestation contained to a bedroom spreads through the whole home.",
        "Effective control depends on a thorough inspection to find every harborage, a treatment method matched to the situation, and — critically — the required follow-up, because bed bugs and their eggs are resilient and a single pass rarely finishes the job. It also depends on preparation done correctly and, in multi-unit buildings, coordinating adjoining units so the population can't simply move next door and return. This is detailed, methodical work where thoroughness is everything.",
        "That's why professional treatment is worth it here more than almost anywhere else. We inspect, treat, and do the necessary follow-up, give clear prep instructions so the treatment can succeed, and handle the process discreetly — because privacy matters with this pest. Trying to save money with retail sprays usually costs more in the end, in both dollars and weeks of lost sleep, because it spreads the problem instead of solving it." ,
      ],
    },
    faqs: [
      { q: "Does having bed bugs mean my home is dirty?", a: "No — and this is important. Bed bugs have nothing to do with cleanliness; they're hitchhikers that travel in luggage, secondhand furniture, and belongings from hotels, dorms, buses, and other homes. Spotless homes and messy ones get them alike. There's no shame in it, and the sooner it's addressed the easier it is to resolve." },
      { q: "Can't I just spray them myself or throw out the mattress?", a: "Both usually backfire. Store sprays and foggers are repellents that scatter bed bugs into new rooms and — in apartments — new units, and moving to sleep elsewhere spreads an infestation that was contained to one room. Throwing out furniture rarely gets them all because they hide in baseboards, outlets, and cracks too. Thorough professional treatment with follow-up is what actually ends it." },
      { q: "How many treatments does it take?", a: "Bed bugs and their eggs are resilient, so it typically takes a planned sequence with follow-up rather than a single visit. We inspect thoroughly, treat, give you clear prep instructions so the treatment can work, and schedule the follow-up needed to finish the job. We'll set honest expectations up front." },
      { q: "Will people know — can you be discreet?", a: "Yes. We understand the stigma and stress that come with bed bugs, and we handle the work discreetly and without judgment. In multi-unit buildings we also coordinate adjoining units when needed so the problem can't just move next door and come back, and we can provide documentation for tenants or property managers." },
    ],
  },

  // ============================================================ CLUSTER FLY
  "cluster-fly-control": {
    identification: {
      title: "Cluster flies vs. house flies — how to tell",
      paragraphs: [
        "Cluster flies are easy to mistake for ordinary house flies, but a few features give them away. They are slightly larger, darker, and noticeably more sluggish, and they have a faint golden or olive sheen of short hairs on the thorax. The biggest tell is behavior: cluster flies show up in numbers at upstairs windows and in sunny rooms on warm days in fall and again in late winter, crawling slowly on the glass rather than buzzing around the kitchen. When crushed they give off a faintly sweetish, buckwheat-honey odor.",
        "The other diagnostic is timing and location. House flies are a summer, kitchen-and-garbage pest; cluster flies are a fall-and-spring, window-and-attic pest. If you are finding dozens of slow flies at the same south- or west-facing windows every October, or waking them up on the first warm days of March, you are almost certainly dealing with cluster flies that have been overwintering in the walls and attic.",
      ],
    },
    localContext: {
      title: "Why rural Finger Lakes homes get cluster flies",
      paragraphs: [
        "Cluster flies have a life cycle tied to the countryside, which is exactly why they are such a defining pest in the rural parts of Central New York. The larvae develop as parasites of earthworms in the soil, so homes surrounded by lawns, pastures, and farm fields sit right on top of the breeding ground. Come late summer and fall, the emerging adults look for sheltered places to overwinter and are drawn to large, warm, sun-exposed surfaces — which is to say, the south and west walls of your house.",
        "From there they work their way into wall voids, attics, and window frames through the same small gaps that let in every other overwintering pest. They spend the winter dormant in those voids, and on warm days — including the occasional January thaw — they wake up, mistake the warmth for spring, and move toward light, which brings them to the inside of your windows. That is why a home can look fly-free in December and suddenly have flies at the glass during a warm spell.",
      ],
    },
    healthRisks: {
      title: "Mostly a nuisance — with a couple of catches",
      paragraphs: [
        "The reassuring news is that cluster flies are not a disease or contamination threat the way house flies are — they do not breed in garbage or filth and are not a meaningful food-safety concern. Their impact is overwhelmingly about nuisance and numbers: dozens or hundreds of flies at the windows are unpleasant, and the dark spots they can leave on walls and sills near their entry points are a minor staining issue.",
        "There is one secondary catch worth knowing. Accumulations of dead cluster flies inside wall voids and attics can attract other pests — notably larder beetles and other scavengers that feed on the carcasses — which can turn one overwintering problem into two. That is another reason to address the flies at the exterior before large numbers build up inside the structure.",
      ],
    },
    whyProfessional: {
      title: "Why timing the exterior treatment is everything",
      paragraphs: [
        "Cluster flies are one of the clearest cases where timing beats effort. Once they are inside the walls, interior sprays only knock down the fraction that make it to the windows while the bulk of the population sits protected in the voids — which is why swatting and indoor foggers feel like an endless, losing battle. The effective approach is a preventative exterior barrier applied in late summer and early fall, before the flies move in, treating the sunny walls and entry points they use to enter.",
        "Professional treatment pairs that timing with the right coverage and, where possible, sealing the gaps around eaves, soffits, and window frames that funnel the flies inside. Because this is a seasonal, predictable pest, folding it into a fall service visit — the same visit that handles stink bugs, lady beetles, and rodent exclusion — is the efficient way to handle it, rather than reacting each time a warm day wakes them up at the glass.",
      ],
    },
    faqs: [
      { q: "Why do I get flies at my upstairs windows every fall and again in spring?", a: "Those are almost certainly cluster flies. They overwinter in your wall voids and attic after developing in the soil around rural properties, and on warm days — in fall, and again on the first warm days of late winter — they wake up and move toward light, which brings them to the inside of your windows." },
      { q: "Are cluster flies dangerous or dirty?", a: "No. Unlike house flies, they don't breed in garbage and aren't a meaningful disease or food-safety threat. They're a nuisance pest — the issues are the sheer numbers at windows, minor staining, and the fact that dead flies in wall voids can attract other scavenging pests." },
      { q: "Why does spraying inside never seem to fix it?", a: "Because the flies you see at the window are a small fraction of the population sheltering in the walls and attic. Interior sprays can't reach the voids. The fix is a preventative exterior barrier applied in late summer/early fall, before they move in — timing is everything with this pest." },
      { q: "Can you keep them out next year?", a: "Largely, yes — with well-timed fall exterior treatment on the sunny walls they gather on, plus sealing the eave, soffit, and window gaps they use to get inside. It's most efficient handled as part of a fall visit alongside the other overwintering pests." },
    ],
  },

  // ============================================================ CARPENTER ANT
  "carpenter-ant-control": {
    identification: {
      title: "Confirming carpenter ants — and finding the nest",
      paragraphs: [
        "Carpenter ants are the large ants — roughly a quarter to a half inch — usually black or a mix of dark red and black, with a smoothly rounded upper thorax and a single node at the waist. The single most useful sign of an active structural nest is frass: coarse, sawdust-like shavings mixed with bits of dead insects that the ants push out of their galleries. A small cone of frass under a windowsill, door frame, deck ledger, or basement beam is strong evidence that a nest is inside that wood.",
        "Central New York homeowners most often notice carpenter ants indoors on warm days from late winter into spring, and a steady indoor presence in that window usually means an established parent colony nearby, often with satellite nests spread through the structure. Some people also report a faint rustling or crinkling sound inside walls where a large colony is active. Winged reproductives (swarmers) emerging indoors are another sign — and it is worth distinguishing them from termite swarmers, which have straight antennae and equal-length wings, versus the carpenter ant's elbowed antennae and unequal wings.",
      ],
    },
    localContext: {
      title: "Why carpenter ants thrive in CNY homes",
      paragraphs: [
        "Carpenter ants are arguably the defining structural pest of Central New York, and the reason is the combination of mature woods and moisture-prone older housing. They do not eat wood; they excavate it to nest, and they strongly prefer wood that is damp or has been previously water-damaged. Our climate — heavy snow, ice dams, humid summers, and a lot of century-old homes with imperfect flashing and drainage — creates exactly the soft, moist wood they seek out.",
        "That is why activity so often centers on predictable spots: around roof edges and gutters where ice dams back water up, near chimneys and skylights, under decks and porches, around basement windows, and behind bathrooms and kitchens where small leaks go unnoticed. A carpenter ant problem is frequently a moisture problem the ants discovered first, which is why lasting control and finding that hidden dampness go hand in hand.",
      ],
    },
    healthRisks: {
      title: "The structural stakes",
      paragraphs: [
        "In much of New York, where aggressive subterranean termites are less of a constant threat than in the South, carpenter ants are the wood-destroying insect most homeowners actually need to watch. They work more slowly than termites, but an established colony — especially one operating for years with multiple satellite nests — can hollow out significant galleries in structural framing, trim, and decking over time. Because they favor already-compromised wood, their damage often compounds an existing moisture problem.",
        "There is also the early-warning value: a carpenter ant nest is frequently the first visible sign that water is getting somewhere it shouldn't. Treating the ants without finding and fixing that moisture source tends to invite them right back, so the two problems are best addressed together. Catching it early — at the first spring foragers and the first frass — is far cheaper than repairing years of hidden excavation.",
      ],
    },
    whyProfessional: {
      title: "Why reaching the colony matters more than spraying ants",
      paragraphs: [
        "Carpenter ants are a textbook case of why spraying visible ants backfires. A repellent spray can cause a colony to 'bud,' splitting and relocating into several new satellite nests, so a week later you have ants in three rooms instead of one. And because the workers you see foraging are only a small fraction of the colony — the queen and brood stay hidden in the wood — killing foragers does nothing to end the nest. The whole game is reaching the colony.",
        "Professional control uses non-repellent products and targeted baits that foragers carry back into the galleries, moving the active ingredient through the colony to the queen, combined with locating the likely nest by reading the trails, the frass, and the moisture clues. For a lasting fix we also flag the water source that drew them — the leaking gutter, the damp sill, the ice-dam damage — because a carpenter ant program that ignores the moisture is one that gets a repeat call next spring.",
      ],
    },
    faqs: [
      { q: "How is this different from your general ant service?", a: "General ant control handles the smaller trailing ants (odorous house ants, pavement ants) that are mostly a kitchen nuisance. Carpenter ant control is a structural service: it's about locating and eliminating a wood-nesting colony that can damage your home, and addressing the moisture that attracted it. The identification and the stakes are different, so the approach is too." },
      { q: "I see a few big black ants inside every spring — is that a problem?", a: "Potentially, yes. Large black ants appearing indoors on warm spring days often mean a colony is nesting in or near the structure and has been active long enough to forage inside. If you also find frass (coarse sawdust with insect bits) under a sill or beam, that's a strong sign of a nest in the wood, and it's worth an inspection." },
      { q: "Do carpenter ants mean I have a moisture problem?", a: "Very often. Carpenter ants prefer damp or previously water-damaged wood, so a nest frequently points to a hidden leak, condensation issue, or ice-dam damage nearby. Part of solving it for good is finding and flagging that moisture source — treating the ants alone tends to invite them back." },
      { q: "Can I just spray the ants I see?", a: "It usually makes things worse. Repellent sprays can cause the colony to split and relocate into multiple new nests, and the foragers you see are only a fraction of the colony. Non-repellent baiting that reaches the queen is what actually eliminates a carpenter ant nest." },
    ],
  },

  // ============================================================ BAT REMOVAL & EXCLUSION
  "bat-removal-exclusion": {
    identification: {
      title: "Signs bats are roosting in your home",
      paragraphs: [
        "The most common signs of a bat roost are subtle at first: soft scratching or squeaking sounds in the attic or walls around dusk and dawn, dark greasy staining around a gap in the soffit, ridge, or gable where bats squeeze in and out, and — the clearest indicator — accumulations of guano (bat droppings) below the entry point or in the attic. Bat guano looks like dark, elongated pellets that crumble to a powder and often glisten with bits of insect exoskeleton, distinguishing it from mouse droppings.",
        "Homeowners frequently discover a roost by watching the house at dusk and seeing bats emerge from a specific spot along the roofline. In Central New York the two species most often found in buildings are the little brown bat and the big brown bat; big brown bats in particular will overwinter in structures. A single bat that blunders into living space is sometimes a stray, but repeated sightings, emergence at dusk, and guano accumulation point to an established colony that needs proper exclusion.",
      ],
    },
    localContext: {
      title: "New York law, timing, and why it matters",
      paragraphs: [
        "Bats are the one wildlife situation where the calendar is set by law and biology, not convenience. In New York, bat exclusion is restricted during the maternity season — roughly May 1 through August 31 — because during those months flightless pups are in the roost. Sealing the adults out then would trap the pups inside to die, which is both inhumane and creates a far worse problem in your walls. Exclusion is properly done before or after that window, in spring or late summer through fall.",
        "There is a conservation dimension too. Several of our native bat species, including the little brown bat, have been devastated by white-nose syndrome and are of significant conservation concern in New York, which is part of why humane, legal exclusion — rather than extermination — is the required and appropriate approach. Bats are also enormously beneficial, eating vast numbers of mosquitoes and agricultural pests, so the goal is always to get them out and keep them out, not to harm them.",
      ],
    },
    healthRisks: {
      title: "Rabies, histoplasmosis, and guano",
      paragraphs: [
        "Bats warrant genuine caution for two reasons. First is rabies: while only a small percentage of bats carry it, bats are a leading source of human rabies exposure in the U.S., and because their bites can be tiny and painless, any direct contact — especially a bat found in a room with a sleeping person, a child, or someone unable to report contact — should be treated seriously and discussed with a health professional. Never handle a bat with bare hands.",
        "Second is their guano. Accumulated bat droppings in an attic can, over time, support the growth of Histoplasma, a fungus whose spores can cause a respiratory illness (histoplasmosis) when disturbed and inhaled. That's why cleanup of an established roost isn't a bare-hands job — it calls for proper protective equipment and care. Guano accumulations also stain ceilings, produce odor, and can attract other pests.",
      ],
    },
    whyProfessional: {
      title: "Why humane exclusion is a job for a pro",
      paragraphs: [
        "Bat work is defined by doing it correctly, legally, and humanely, and that is genuinely hard to DIY. The method is live exclusion: identifying every entry point, installing one-way devices that let the bats leave to feed but not return, waiting until the roost has cleared, and only then sealing the openings permanently. Sealing too soon — or during maternity season — traps bats inside, where they die in the walls and sometimes end up in living space, turning a manageable situation into a much worse one.",
        "A professional also handles the parts that make the fix last and safe: finding the often-hidden secondary entry points along complex rooflines, sealing to a standard that keeps bats (which need only a small gap) from simply re-entering, and cleaning and decontaminating guano accumulations with proper equipment. Given the rabies caution, the conservation and legal rules, and the need for permanent sealing, this is one of the clearest cases for bringing in someone who does it for a living.",
      ],
    },
    faqs: [
      { q: "There's a bat in my house — what should I do right now?", a: "Don't handle it with bare hands. If it's a single stray, confine it to one room, close interior doors, and open a window to let it leave. Importantly, if a bat is found in a room with a sleeping person, a child, or a pet — or anyone who can't reliably say whether contact occurred — save the bat if you safely can and contact a health professional, because rabies exposure from bats can happen without an obvious bite." },
      { q: "Why can't you remove the bats in June or July?", a: "New York restricts bat exclusion during the maternity season, roughly May 1–August 31, because flightless pups are in the roost. Sealing the adults out then would trap the pups inside to die — inhumane and a much worse problem for you. Proper exclusion is done in spring before, or late summer through fall after, that window." },
      { q: "Can't I just seal the hole I see them using?", a: "That's the most common and most damaging mistake. Bats often use several entry points, and sealing them in traps bats in your walls. The correct method is one-way exclusion devices that let them leave but not return, followed by permanent sealing only once the roost has cleared — and never during maternity season." },
      { q: "Is bat guano in my attic dangerous?", a: "It can be. Accumulated guano can harbor a fungus that causes a respiratory illness (histoplasmosis) when disturbed and inhaled, and it stains and smells. Cleanup should be done with proper protective equipment, not by hand — it's part of a complete exclusion job." },
    ],
  },

  // ============================================================ RODENT EXCLUSION & SEALING
  "rodent-exclusion-sealing": {
    identification: {
      title: "Finding the gaps mice and rats actually use",
      paragraphs: [
        "Effective exclusion starts with reading the evidence rodents leave at their entry points. Greasy, dark rub marks along a foundation edge, sill, or pipe show a route used repeatedly; fresh gnaw marks around a gap indicate active enlargement; and droppings concentrated near a specific opening flag it as a travel route. Following these clues around the perimeter — rather than guessing — is how the real entry points get found.",
        "The gaps themselves are often smaller than people expect. A house mouse can pass through an opening about the size of a dime (roughly a quarter inch), and a rat through a gap the size of a quarter. The usual suspects on a Central New York home are utility penetrations (where pipes, wires, and cables enter), gaps around the sill plate, worn or missing door sweeps, unscreened vents and weep holes, and the seams where a garage, porch, or addition meets the original structure. Older fieldstone and block foundations add plenty of their own cracks.",
      ],
    },
    localContext: {
      title: "Why exclusion is the key step in this region",
      paragraphs: [
        "Central New York's housing stock makes exclusion the single most valuable rodent service. A century of freeze-thaw winters has opened gaps in stone and block foundations, settled sills, and separated additions, and the region's rural and semi-rural setting means there's a constant outdoor rodent population pressing in every fall. Trapping alone, against that backdrop, becomes a permanent chore — you catch this week's mice while the open gaps admit next week's.",
        "Sealing changes the equation from managing rodents to keeping them out. It's the difference between a home that needs traps reset every winter and one that simply stops letting mice in. That's why we treat exclusion not as an add-on but as the core of lasting rodent control — knock down the current population, then close the building so it stays closed.",
      ],
    },
    healthRisks: {
      title: "What sealing protects you from",
      paragraphs: [
        "Closing entry points addresses the whole downstream cost of rodents at the source. Mice and rats contaminate food-storage and prep areas with droppings and urine, and deer mice in our rural areas are associated with hantavirus, so keeping them out of the home is a genuine health measure, not just a comfort one. Sealing also stops the property damage rodents cause once inside — chewed wiring (a documented fire risk insurers care about), shredded insulation, and gnawed stored belongings.",
        "There's a compounding benefit, too: many of the same gaps rodents use are also entry points for insects, drafts, and moisture. A thorough exclusion pass often improves the home's pest resistance and even its energy performance as a side effect, because you're closing the building envelope rodents exploit.",
      ],
    },
    whyProfessional: {
      title: "Why professional sealing lasts",
      paragraphs: [
        "The reason DIY sealing so often fails is a mix of the wrong materials and missed gaps. Rodents chew straight through foam, caulk, and steel wool alone, so durable exclusion uses the right materials for each gap — hardware cloth, copper mesh, sheet metal, and proper sealants — installed where they'll actually hold. And because a house has far more potential entry points than are obvious, the ones that get missed are exactly the ones the next mouse finds. Thoroughness is the whole job.",
        "A professional exclusion service combines a systematic inspection that reads the rub marks and droppings to find the real routes, correct sealing of every accessible gap with materials rodents can't chew through, and follow-up to confirm the building is holding and knock down any population still inside. Done right, it converts a recurring seasonal rodent problem into a solved one — which is why it's the step that turns a temporary fix permanent.",
      ],
    },
    faqs: [
      { q: "How is exclusion different from just having you set traps?", a: "Traps and bait reduce the rodents already inside; exclusion closes the gaps that let them in, so new ones can't keep replacing them. We do both — knock down the current population, then seal the building — but sealing is what ends the cycle instead of managing it every winter." },
      { q: "How small a gap can a mouse get through?", a: "About a quarter inch — roughly the size of a dime. Rats need a gap about the size of a quarter. That's why thorough exclusion matters so much: the small, easy-to-miss openings around pipes, sills, door sweeps, and vents are exactly the ones rodents exploit." },
      { q: "Won't they just chew a new hole?", a: "Rodents gnaw, which is why materials matter. Foam and caulk alone don't stop them, but properly installed hardware cloth, metal, and mesh do. We seal with materials rodents can't chew through, placed where they'll hold — that's what makes exclusion durable rather than temporary." },
      { q: "Does sealing help with anything besides rodents?", a: "Often, yes. Many of the same gaps also let in insects, drafts, and moisture, so a thorough exclusion pass tends to improve your home's overall pest resistance and can even help with energy loss — you're closing the parts of the building envelope that rodents and other pests exploit." },
    ],
  },

  // ============================================================ OVERWINTERING PESTS
  "overwintering-pests": {
    identification: {
      title: "Meet the fall invaders",
      paragraphs: [
        "'Overwintering pests' is the group of insects that spend the cold months sheltering inside the structure of your home, and in Central New York it's a recognizable cast. The brown marmorated stink bug is the gray-brown, shield-shaped bug that clings to siding and window screens and gives off a pungent odor when disturbed. The Asian lady beetle looks like a ladybug but comes in oranges and reds with variable spots and a small 'M' marking behind the head; it masses on warm walls and occasionally nips. Boxelder bugs are black with red-orange markings, and cluster flies and the western conifer seed bug round out the group.",
        "What unites them is behavior, not family: every one of these insects is harmless outdoors all summer and only becomes a household pest in fall, when they gather on warm, sunny exterior walls and work their way into wall voids, attics, and window frames to overwinter. The tell is the season and the location — dozens of them on the south or west side of the house in September and October, then reappearing indoors at windows on warm days through the winter and early spring.",
      ],
    },
    localContext: {
      title: "Why CNY homes are a magnet in fall",
      paragraphs: [
        "Central New York's climate practically scripts the overwintering-pest problem. Our warm, humid summers grow big outdoor populations, and then the first cool nights of fall trigger all of these insects to seek shelter at once. They orient to large, warm, sun-exposed surfaces — the south- and west-facing walls of houses — and older homes with abundant gaps around eaves, soffits, clapboard, and windows give them countless ways in. Rural and wooded settings, and homes near fields, tend to see the heaviest pressure.",
        "Once inside the voids they go dormant, but they don't truly leave until spring. On warm winter days and during the first thaws of late winter, they rouse, mistake the warmth for spring, and move toward light — which is why they turn up at the inside of windows in January and March. A home treated and sealed in early fall stays quiet; one that waits deals with them trickling into living space all winter.",
      ],
    },
    healthRisks: {
      title: "Nuisance, odor, and a couple of minor risks",
      paragraphs: [
        "Overwintering pests are fundamentally a nuisance group rather than a health threat — they don't breed indoors, don't feed on your home, and don't spread disease. Their impact is the sheer numbers, the staining they can leave, and the odors: stink bugs release their characteristic smell when handled or vacuumed, and large numbers of any of these insects dead in wall voids can produce an unpleasant odor and attract secondary scavenger pests like larder beetles.",
        "There are a couple of minor exceptions worth noting. Asian lady beetles can deliver a small defensive nip and, in large indoor numbers, are a recognized allergen and asthma trigger for sensitive individuals; they also exude a yellowish, staining fluid when disturbed. None of this is dangerous for most people, but it's enough that no one wants hundreds of them cycling through the house all winter.",
      ],
    },
    whyProfessional: {
      title: "Why the fall exterior window is the whole ballgame",
      paragraphs: [
        "Overwintering pests reward timing above all else. Once they're settled in the wall voids, interior treatment only catches the stragglers that make it to the windows while the bulk of the population sits protected inside — which is why vacuuming and indoor sprays feel endless. The effective strategy is a preventative exterior barrier applied in late summer and early fall, before the insects move in, concentrated on the warm walls and the eave, soffit, and window gaps they use to enter.",
        "Because all of these insects respond to the same fall timing and the same entry points, they're best handled together in a single well-timed fall program rather than species by species. Professional treatment adds the coverage and, where possible, the exclusion sealing that a homeowner with a can of spray can't match — and it's the same visit that addresses rodents pushing in for winter, making fall the highest-value service window of the year in this region.",
      ],
    },
    faqs: [
      { q: "What exactly are 'overwintering pests'?", a: "It's the group of insects that shelter inside your home's structure for winter — brown marmorated stink bugs, Asian lady beetles, boxelder bugs, cluster flies, and western conifer seed bugs. They're harmless outdoors all summer and only become a household problem in fall, when they mass on warm walls and work their way into wall voids and attics." },
      { q: "Why do they show up inside on warm days in the middle of winter?", a: "They're dormant in your wall voids and attic, and a warm spell or late-winter thaw rouses them. They mistake the warmth for spring and move toward light, which brings them to the inside of your windows. It's a sign they moved in the previous fall." },
      { q: "How do I keep them out?", a: "The key is a preventative exterior treatment in late summer/early fall — before they enter — on the sunny walls where they gather, combined with sealing the eave, soffit, and window gaps they use. Once they're already in the walls, interior sprays only catch the few that reach the windows." },
      { q: "Are they harmful?", a: "Not really — they don't breed indoors, feed on your home, or spread disease. The issues are numbers, staining, and odor (stink bugs especially). Asian lady beetles can give a small nip and, in large indoor numbers, act as an allergen for sensitive people, but they're not dangerous." },
    ],
  },

  // ============================================================ WDI / REAL ESTATE INSPECTION
  "wdi-inspection-real-estate": {
    identification: {
      title: "What a WDI inspection actually covers",
      paragraphs: [
        "A WDI inspection — 'wood-destroying insect' inspection, sometimes called a termite or 'pest' inspection in a real estate context — is a documented evaluation of a property for evidence of the insects that damage structural wood. In the Northeast that primarily means carpenter ants and subterranean termites, along with carpenter bees, wood-boring beetles, and the moisture and wood-decay conditions that invite them. The inspector examines accessible areas of the structure — foundation, sill, crawlspace, basement, and accessible exterior — for active infestation, past evidence, and conducive conditions.",
        "The findings are recorded on a standardized report (commonly the NPMA-33 form) that documents visible evidence of wood-destroying insects, evidence of prior treatment, and conditions conducive to infestation such as wood-to-soil contact, moisture, and poor drainage. This is the document lenders and buyers rely on, so a WDI inspection is as much about clear, defensible documentation as it is about the walk-through itself.",
      ],
    },
    localContext: {
      title: "Where it fits in a Central NY real estate deal",
      paragraphs: [
        "WDI inspections are a real estate transaction service first and foremost. Buyers order them for peace of mind, and many lenders — particularly for certain loan types — require a satisfactory WDI report before closing. In our market that puts the inspection squarely on the critical path of a sale: a clean report keeps a closing on schedule, while findings of active infestation or damage can trigger negotiation, treatment requirements, or repair credits before the deal can proceed.",
        "Central New York's older housing stock and the region's carpenter-ant pressure make these inspections genuinely worthwhile rather than a formality. Many area homes have the exact conditions — damp basements, wood-to-soil contact, deck ledgers, ice-dam-damaged rooflines — that wood-destroying insects exploit, and a century-old home can carry evidence of old activity that a buyer deserves to understand. The inspection turns an unknown into documented fact at the moment it matters most.",
      ],
    },
    healthRisks: {
      title: "Why the report protects your closing and your investment",
      paragraphs: [
        "For a buyer, the stakes of a WDI inspection are financial rather than medical: it's protection against inheriting hidden, expensive structural damage. Wood-destroying insects work quietly, often behind finished surfaces, and by the time damage is obvious it can be significant. A thorough inspection before closing is a small cost that can surface a major issue while there's still leverage to address it — through treatment, repairs, or price — rather than after the keys change hands.",
        "For a seller, a clean or well-documented report keeps a transaction moving and forestalls last-minute surprises that can derail a closing. And for the lender, the report is a condition that protects the collateral securing the loan. In every case, the value is in credible, timely documentation: it lets everyone proceed on facts instead of guesses at the highest-stakes moment of the deal.",
      ],
    },
    whyProfessional: {
      title: "Why a licensed inspector matters here",
      paragraphs: [
        "A WDI inspection is inherently a professional service: it requires trained recognition of subtle evidence — mud tubes, frass, exit holes, blistered wood, swarmer wings, and the difference between old and active infestation — and it produces a document that lenders and attorneys rely on. Distinguishing carpenter ant frass from sawdust, termite swarmers from ant swarmers, and active galleries from long-dead ones is exactly the expertise that determines whether a report is trustworthy.",
        "As a local company, we bring knowledge of the specific wood-destroying insects and conducive conditions common to Central New York homes, and we provide the clear, standardized documentation a real estate transaction requires. Because these inspections sit on a closing timeline, responsiveness matters too — getting the inspection done and the report delivered promptly so a sale stays on track is part of doing the job well.",
      ],
    },
    faqs: [
      { q: "What's a WDI inspection and do I need one to buy a house?", a: "It's a documented inspection for wood-destroying insects — mainly carpenter ants and subterranean termites in our area — recorded on a standardized report (often the NPMA-33). Buyers order them for peace of mind, and some lenders require one before closing. Given Central New York's older homes and carpenter-ant pressure, it's a worthwhile safeguard even when it isn't strictly required." },
      { q: "What does the inspector look for?", a: "Visible evidence of active or past wood-destroying insect activity (mud tubes, frass, damaged wood, swarmer evidence) and conditions that invite it — wood-to-soil contact, moisture, poor drainage — across accessible areas like the foundation, sill, basement, and crawlspace. The findings go on a standardized report for your lender and file." },
      { q: "How fast can you turn the report around?", a: "We know these sit on a closing timeline, so we prioritize scheduling the inspection and delivering the documented report promptly to keep your transaction on track. Reach out with your closing date and we'll work to it." },
      { q: "What happens if the inspection finds a problem?", a: "The report documents active infestation, past evidence, and conducive conditions. Findings typically become part of the negotiation — addressed through treatment, repairs, or a price adjustment before closing. The value of doing it up front is surfacing any issue while there's still leverage to handle it." },
    ],
  },

  // ============================================================ WILDLIFE REMOVAL
  "wildlife-removal": {
    identification: {
      title: "Which animal are you dealing with?",
      paragraphs: [
        "Nuisance wildlife leaves distinct calling cards, and identifying the species drives the whole approach. Daytime scratching and scampering in the attic, with entry through a soffit or roofline gap, usually means squirrels. Heavier, nocturnal thumping — often with an entry torn open at a roof edge or a den in the chimney, and larger droppings — points to raccoons. A sharp, musky odor under a deck, shed, or porch suggests skunks; extensive burrowing and large holes at the foundation or in the yard indicate woodchucks (groundhogs).",
        "The evidence beyond sound and sighting matters too: the size and shape of droppings, the type of damage (torn soffit vs. dug burrow vs. chewed wire), greasy rub marks at an entry, and tracks all help pin down the animal. Because each species has different habits, breeding seasons, and legal handling requirements in New York, correct identification isn't a formality — it determines the timing, the method, and even whether special rules apply.",
      ],
    },
    localContext: {
      title: "Nuisance wildlife in Central New York",
      paragraphs: [
        "Central New York's mix of woods, water, farmland, and older housing puts homes in constant contact with adaptable wildlife. Squirrels, raccoons, skunks, and woodchucks all thrive in this landscape and readily use houses, decks, sheds, and chimneys as den sites — especially in spring, when females are looking for a safe place to raise young, and in fall, when animals seek warm shelter for winter. Attached garages, uncapped chimneys, and the rooflines of century-old homes are frequent points of entry.",
        "New York also regulates how nuisance wildlife may be handled, and several common species — including raccoons and skunks — are rabies-vector species subject to specific rules on handling and relocation. That legal framework is a major reason wildlife work is different from insect pest control: it's not just a question of what's effective, but what's lawful and humane, which varies by species and season.",
      ],
    },
    healthRisks: {
      title: "Disease, damage, and the risks of an occupant",
      paragraphs: [
        "Wildlife in and around a home carries real risks. Raccoons and skunks are rabies-vector species, and raccoon latrines can harbor raccoon roundworm (Baylisascaris), whose eggs are hazardous to people; wildlife also brings in fleas, ticks, mites, and other parasites that don't leave when the animal does. Droppings and urine contaminate insulation and living spaces and produce lasting odor. A cornered or sick animal can be aggressive, and a mother defending young is unpredictable.",
        "The property damage is often substantial as well: torn soffits and shingles, chewed wiring (a fire risk), ripped ductwork and insulation, and burrows that undermine decks, sheds, and foundations. And an animal that dies inside a wall or chimney creates an odor and secondary pest problem of its own. Addressing wildlife promptly, before a den becomes established or young are born, keeps both the health and the repair costs down.",
      ],
    },
    whyProfessional: {
      title: "Why humane, legal removal is a professional job",
      paragraphs: [
        "Wildlife removal combines physical risk, legal complexity, and technical difficulty in a way that makes DIY genuinely unwise. Handling rabies-vector species, dealing with a defensive mother and her young, and navigating New York's rules on trapping and relocation are not weekend-project territory. Done wrong, exclusion can trap dependent young inside to die in the walls, or leave an entry open for the next animal to move in.",
        "A proper wildlife service handles the whole problem: identifying the species and whether young are present, removing the animals humanely and lawfully, sealing the entry points so nothing re-enters, and cleaning and decontaminating the mess left behind — the droppings, the parasites, the damaged insulation. Because the durable fix is exclusion and repair, not just removal, this is work that rewards experience, the right equipment, and knowledge of both the animals and the regulations." ,
      ],
    },
    faqs: [
      { q: "I hear something in my attic — how do you figure out what it is?", a: "We read the signs: the time of day the noise happens (squirrels are active by day, raccoons at night), the type and location of the entry, the droppings, and the damage pattern all point to a species. Correct identification matters because each animal has different habits, breeding seasons, and — in New York — legal handling rules." },
      { q: "Can't I just trap and relocate it myself?", a: "It's riskier and more regulated than it looks. Several common nuisance species (like raccoons and skunks) are rabies-vector animals subject to specific New York rules, defensive mothers with young are unpredictable, and improper exclusion can trap dependent young in your walls. Humane, legal removal plus sealing the entry is a job worth handing to a pro." },
      { q: "Will the animal come back after you remove it?", a: "Not if the entry points are sealed, which is the core of the job. Removal alone leaves the opening for the next animal to move into; durable results come from removing the current occupant, excluding re-entry, and repairing the damage so the house is no longer an available den site." },
      { q: "Do you clean up the mess they leave?", a: "Yes — it's part of a complete job. Wildlife leaves droppings, urine, parasites (fleas, ticks, mites), and damaged insulation behind, some of which carries health risks. We clean and decontaminate the affected areas and address the damage, not just remove the animal." },
    ],
  },

  // ============================================================ SQUIRREL REMOVAL
  "squirrel-removal": {
    identification: {
      title: "Signs of squirrels — and which kind",
      paragraphs: [
        "Squirrels announce themselves with fast, scurrying, scratching sounds in the attic or upper walls, and — tellingly — they're most active in daytime, especially early morning and late afternoon. That daytime activity is the easiest way to distinguish gray squirrels from nocturnal intruders like raccoons or flying squirrels. You'll often find a clean, gnawed entry hole at a soffit, gable vent, roof edge, or where the roofline meets a dormer, along with chewed wood and, sometimes, cached nuts or shredded insulation gathered into a nest.",
        "Central New York has two attic-invading squirrels. The eastern gray squirrel is the common daytime culprit, entering through rooflines and chewing to enlarge gaps. The northern flying squirrel is smaller, strictly nocturnal, and often arrives in groups, so nighttime scampering and gliding sounds — with the animals never seen by day — can point to flying squirrels instead. The distinction matters because their habits, and the timing of exclusion around their young, differ.",
      ],
    },
    localContext: {
      title: "Why CNY attics are prime squirrel real estate",
      paragraphs: [
        "The mature hardwood canopy across so much of Central New York is ideal squirrel habitat, and overhanging limbs give squirrels easy rooftop access to the exact vulnerable points on a house — soffits, fascia, gable vents, and dormer junctions. Older homes with wood trim and existing gaps are especially inviting, and once a squirrel finds a warm, dry attic it will gnaw to enlarge the opening and settle in.",
        "Timing follows the squirrel breeding calendar, which in this region peaks roughly in late winter (February–March) and again in late summer. Females move into attics specifically to nest and raise young, so a chewing sound in March often means a litter is present. That's a critical detail for exclusion: sealing the adult out while dependent young remain inside leaves them to die in the walls, so the young have to be accounted for before the entry is closed.",
      ],
    },
    healthRisks: {
      title: "Chewing, fire risk, and damage",
      paragraphs: [
        "The headline risk with squirrels is fire. Like all rodents, they gnaw continuously to wear down their incisors, and attic wiring is a frequent target — chewed insulation on electrical lines is a well-documented fire hazard that home insurers take seriously. That single risk is reason enough not to let a squirrel problem ride.",
        "Beyond wiring, squirrels shred and foul insulation, gnaw structural wood and stored belongings, and their droppings and urine contaminate the attic and can carry parasites. An animal that dies in an inaccessible wall or soffit creates odor and a secondary pest problem. And because they chew to enlarge entries, a small gap ignored in fall can become a wide-open access point — and an entrenched nesting site — by spring.",
      ],
    },
    whyProfessional: {
      title: "Why eviction, exclusion, and repair go together",
      paragraphs: [
        "Squirrel removal done right is a sequence, not a single act: confirm whether young are present, evict the animals humanely (often using one-way doors that let them out but not back in, timed around the young), seal every entry point to a standard squirrels can't chew through, and repair the damage they caused. Skipping any step invites failure — seal too early and you trap young inside; remove without sealing and the next squirrel moves into the same inviting hole.",
        "This is also work at height and around wiring, which makes it both technical and hazardous for a homeowner. A professional brings the ability to find the real (and often multiple) entry points along a complex roofline, the right exclusion materials and hardware to keep a determined chewer out, and the follow-through to confirm the attic stays empty. That combination — humane eviction, thorough sealing, and damage repair — is what turns a recurring attic problem into a solved one." ,
      ],
    },
    faqs: [
      { q: "How do I know it's squirrels and not something else?", a: "Squirrels are active in the daytime — fast scratching and scurrying in the attic in the early morning and late afternoon — which sets them apart from nocturnal raccoons and flying squirrels. You'll usually also find a gnawed entry hole at a soffit, vent, or roofline. Nighttime-only activity may point to flying squirrels instead, which changes the approach." },
      { q: "Why is it urgent to deal with squirrels?", a: "Mainly fire risk. Squirrels gnaw constantly, and attic wiring is a common target — chewed electrical insulation is a documented fire hazard insurers take seriously. They also shred insulation, damage wood, and, because they chew to enlarge openings, a small gap can become a wide entry and a nesting site quickly." },
      { q: "There's scratching in early spring — could there be babies?", a: "Quite possibly. Squirrel breeding peaks in late winter in our area, and females nest in attics to raise young. That matters a lot for removal: sealing the adult out while dependent young remain would trap them inside. We check for young and time the exclusion so the whole family is out before the entry is closed." },
      { q: "Will they just chew back in after you seal?", a: "Not when it's sealed properly. Squirrels can chew through weak patches, so we exclude with materials and hardware built to keep a determined chewer out, close every entry point (not just the obvious one), and follow up to confirm the attic stays empty. Sealing is what makes the fix last." },
    ],
  },

  // ============================================================ RACCOON REMOVAL
  "raccoon-removal": {
    identification: {
      title: "Signs of a raccoon in the house",
      paragraphs: [
        "Raccoons are large, strong, and nocturnal, and they tend to make their presence obvious. Telltale signs include heavy thumping, rolling, and vocalizations (chittering and growling from young) in the attic or chimney at night, a sizeable torn-open entry at a roof edge, soffit, or vent — raccoons rip rather than gnaw a neat hole — and large, dark droppings often deposited in a latrine area. A raccoon denning in a chimney may be mistaken for a stuck animal; often it's a mother that chose the flue as a nursery.",
        "Because raccoons are so much larger and stronger than squirrels, the scale of the damage and the sound is different: torn shingles and fascia, crushed insulation matted into a den, and the kind of nighttime noise that wakes a household. Spring is peak season for finding raccoons indoors, because females seek out attics and chimneys as safe, warm places to give birth and raise a litter — which means an intruding raccoon very often comes with dependent young.",
      ],
    },
    localContext: {
      title: "Raccoons, dens, and New York rules",
      paragraphs: [
        "Raccoons are thoroughly at home in Central New York's mix of woods, water, and neighborhoods, and they're skilled, dexterous, and persistent about exploiting structures. Uncapped chimneys, weak roof edges, and attic gaps are prime den sites, and the availability of food — gardens, garbage, pet food — keeps local populations high even in town. The overlap of their spring denning season with the region's older housing stock makes attic and chimney raccoon calls a regular spring event here.",
        "Raccoons are also a rabies-vector species in New York, which places specific legal constraints on how they can be handled and relocated. That legal dimension, combined with the near-certainty of young in a spring den and the animal's size and strength, is exactly why raccoon removal is treated differently from ordinary pest control — it has to be both lawful and humane, not merely effective.",
      ],
    },
    healthRisks: {
      title: "Rabies, roundworm, and aggression",
      paragraphs: [
        "Raccoons carry some of the more serious wildlife health risks. As a primary rabies-vector species, a raccoon showing unusual behavior warrants real caution and should never be approached or handled. Raccoon latrines can also harbor raccoon roundworm (Baylisascaris procyonis), whose eggs are hazardous to humans and persist in the environment, so their droppings are not something to clean up casually. They also bring fleas, ticks, and other parasites into the structure.",
        "There's physical risk, too. A cornered raccoon — and especially a mother defending young — is powerful and can be aggressive, which makes DIY confrontation genuinely dangerous. Add the property damage (torn roofs, crushed and fouled insulation, and the odor and secondary pests from a contaminated den or a dead animal in a wall), and a raccoon problem is one to resolve quickly and correctly rather than improvise.",
      ],
    },
    whyProfessional: {
      title: "Why raccoon work belongs with a professional",
      paragraphs: [
        "Raccoon removal sits at the intersection of physical danger, legal regulation, and the high likelihood of young, and all three argue against DIY. Handling a rabies-vector species, safely dealing with an aggressive mother and locating and removing her litter, and complying with New York's rules on trapping and relocation are well beyond a homeowner's tools. Improper exclusion can also trap dependent young to die in the chimney or attic, creating an odor and decontamination problem on top of the original one.",
        "A professional handles the full job humanely and lawfully: confirming and removing the young along with the adult, evicting or trapping as the situation and regulations require, sealing and reinforcing the entry so a powerful animal can't simply re-open it, and cleaning and decontaminating the latrine and den — including the roundworm and parasite hazards — with proper protective equipment. For raccoons especially, that thorough, compliant approach is what keeps both the household and the animals safe.",
      ],
    },
    faqs: [
      { q: "How do I know it's a raccoon and not a squirrel?", a: "Raccoons are nocturnal, large, and loud — heavy thumping and vocalizations at night, a torn-open (not neatly gnawed) entry, and large droppings — while squirrels are smaller and active by day. Raccoons also favor chimneys and torn roof edges as den sites, especially in spring when females are raising young." },
      { q: "It's spring — are there probably babies?", a: "Very likely. Spring is peak denning season, and raccoons choose attics and chimneys specifically to raise litters, so an intruding female usually has dependent young. That's critical for removal: the young must be located and removed with the mother, or sealing the entry would trap them inside. We account for this before closing anything up." },
      { q: "Are raccoons dangerous to have in my house?", a: "They carry real risks: raccoons are a rabies-vector species in New York, their latrines can harbor a roundworm hazardous to humans, and they bring in parasites. A cornered mother is also strong and can be aggressive. Combined with the roof and insulation damage they cause, it's a problem to handle promptly and professionally rather than approach yourself." },
      { q: "Why not just trap it and let it go somewhere?", a: "Because raccoons are a rabies-vector species subject to specific New York handling and relocation rules, and DIY trapping risks leaving young behind to die in your walls. Proper removal is humane and lawful, accounts for the litter, seals the reinforced entry so a strong animal can't re-open it, and decontaminates the den." },
    ],
  },

  // ============================================================ MOLE & VOLE
  "mole-vole-control": {
    identification: {
      title: "Mole or vole? They're easy to confuse",
      paragraphs: [
        "Moles and voles damage lawns in different ways because they're completely different animals, and telling them apart is the first step to controlling either. Moles are insectivores — they eat grubs and earthworms, not plants — and they tunnel, leaving raised ridges of pushed-up soil snaking across the lawn and volcano-shaped mounds of excavated dirt. You almost never see the mole itself; you see its earthworks.",
        "Voles are small rodents — often called meadow or field mice — and they eat plants. Instead of raised tunnels, they create narrow surface runways: worn, inch-wide paths through the grass, often revealed as winding trails when the snow melts in spring. They gnaw on roots, bulbs, and the bark at the base of young trees and shrubs. So: raised ridges and mounds with no plant damage means moles; surface trails with chewed plants and gnawed bark means voles.",
      ],
    },
    localContext: {
      title: "Lawn damage on the Central NY calendar",
      paragraphs: [
        "Both pests follow a seasonal rhythm that's very visible on Central New York properties. Mole activity is most obvious in spring and fall, when soil is moist and their prey is near the surface, and homeowners with rich, well-watered lawns near woods and fields tend to see the most. A single mole can create a surprising amount of tunneling, making a well-kept lawn look ravaged in a matter of weeks.",
        "Voles are the classic 'what happened to my lawn over winter' pest. Under the cover of snow, they travel and feed safely all winter along surface runways, and the damage — those winding trails and gnawed plant bases — is revealed all at once at snowmelt. That winter feeding is also when voles do their most serious harm, girdling the bark of young trees and shrubs, which can kill the plant. Fall is the key window to get ahead of them before snow cover sets in.",
      ],
    },
    healthRisks: {
      title: "Property and landscape damage",
      paragraphs: [
        "Moles and voles aren't a human-health concern — they don't threaten people the way rodents indoors or wildlife do. Their cost is to the landscape, and it can be significant. Mole tunneling disrupts turf and root systems, creates trip hazards and uneven ground, and undermines the appearance of an otherwise healthy lawn; their ridges and mounds can also make mowing difficult.",
        "Voles do the more lasting damage. Beyond the unsightly runways, their winter gnawing on roots and bulbs harms gardens and plantings, and their habit of girdling the bark at the base of young trees and shrubs can outright kill valuable landscape plants — damage that isn't discovered until spring, when it's too late to reverse. For homeowners who've invested in their yard and plantings, that makes proactive control worthwhile.",
      ],
    },
    whyProfessional: {
      title: "Why correct ID and timing win",
      paragraphs: [
        "Mole and vole control is a case where getting the identification and the timing right is most of the battle, and where DIY often misfires by treating the wrong animal the wrong way. Because moles eat insects and voles eat plants, the strategies differ — a grub treatment that reduces a mole's food supply does nothing for voles, and a plant-protection approach for voles doesn't address moles. Misdiagnosing which one you have wastes a season while the damage continues.",
        "A professional program starts by confirming the species from the evidence, then applies control matched to that animal's biology and to the season — getting ahead of vole pressure before snow cover, and targeting mole activity during the moist spring and fall windows when they're near the surface. Paired with habitat guidance (mowing, reducing ground cover and mulch against trunks, protecting vulnerable plantings), that targeted, well-timed approach is what actually protects the lawn and landscape rather than chasing tunnels." ,
      ],
    },
    faqs: [
      { q: "How can I tell if I have moles or voles?", a: "Raised soil ridges and volcano-shaped mounds, with no damage to plants, mean moles (they eat insects, not vegetation). Narrow surface trails worn through the grass, along with gnawed roots and chewed bark at the base of young trees, mean voles (they're plant-eating rodents). The two need different control, so the ID matters." },
      { q: "Why did my lawn look fine in fall but trashed at snowmelt?", a: "That's the signature of voles. Under snow cover they travel and feed safely all winter along surface runways, and the winding trails and plant damage are revealed all at once when the snow melts. Fall is the key window to get ahead of them before snow sets in." },
      { q: "Are moles or voles dangerous?", a: "Not to people — they're a landscape problem, not a health one. The cost is to your yard: mole tunneling disrupts turf and roots, and voles gnaw roots and bulbs and can girdle and kill young trees and shrubs over the winter. For a yard you've invested in, that damage is worth preventing." },
      { q: "Can I just use a product from the store?", a: "The risk is treating the wrong animal. Because moles eat insects and voles eat plants, a grub product aimed at moles won't touch voles, and vice versa — misdiagnosing costs a season while damage continues. Confirming the species and matching control to it and the season is what actually works." },
    ],
  },

  // ============================================================ FLEA CONTROL
  "flea-control": {
    identification: {
      title: "How to confirm a flea problem",
      paragraphs: [
        "Fleas are tiny — about an eighth of an inch — dark, and laterally flattened, and they move by jumping, which is often the first thing people notice: small dark specks that hop off a pet or leap onto ankles. Bites on people typically appear as small, itchy red bumps clustered around the ankles and lower legs. On pets, telltale signs are persistent scratching, biting at the base of the tail and hindquarters, and 'flea dirt' — pepper-like black specks (flea feces) in the coat that turn reddish-brown when dabbed on a wet paper towel, because they're digested blood.",
        "A useful confirmation trick is the white-sock test: walk through a suspected area in white socks and watch for dark specks jumping on. It's also important to understand what you're not seeing — the adult fleas on the pet are only a small fraction of the infestation. The majority exists as eggs, larvae, and pupae in carpets, pet bedding, and floor cracks, which is exactly why fleas are so persistent and why treating only the pet rarely solves it.",
      ],
    },
    localContext: {
      title: "Where CNY flea problems come from",
      paragraphs: [
        "Flea problems in Central New York center on pet households, but the fleas don't always arrive on the family dog or cat. Wildlife is a major reservoir: raccoons, feral cats, squirrels, and other animals denning under decks, in crawlspaces, or in the yard drop flea eggs wherever they travel, seeding an infestation that pets then carry indoors. A wildlife intrusion resolved without addressing fleas can leave the parasites behind to find a new host.",
        "Indoors, our long heating season works in the fleas' favor. Warm, humid interior conditions let the flea life cycle continue through the winter even as outdoor activity drops, so an infestation that starts in late summer or fall can persist for months if it isn't broken. Carpeting, pet bedding, and the cracks along baseboards give the immature stages ideal, protected places to develop right where pets rest.",
      ],
    },
    healthRisks: {
      title: "More than an itch",
      paragraphs: [
        "For pets, fleas are a genuine health issue, not just an annoyance. Many animals develop flea allergy dermatitis, an allergic reaction to flea saliva that causes intense itching, hair loss, and skin infections from scratching. Fleas also transmit tapeworms when a pet swallows an infected flea while grooming, and a heavy infestation on a small or young animal can cause anemia from blood loss.",
        "People aren't immune to the effects either. Flea bites cause itchy welts, scratching can lead to secondary skin infection, and fleas are vectors for a few human illnesses — including the bacteria behind cat-scratch disease and, historically, murine typhus. None of this is cause for panic, but it does mean a flea infestation is worth resolving promptly and thoroughly for the health of both the pets and the household.",
      ],
    },
    whyProfessional: {
      title: "Why breaking the life cycle is the whole job",
      paragraphs: [
        "Fleas defeat DIY efforts because of their life cycle. Treating the visible adult fleas — even bathing and treating the pet — leaves the eggs, larvae, and protected pupae in the carpet and bedding untouched, and those hatch out over days and weeks to reinfest. The pupal stage in particular is resistant and can wait for the right cue to emerge, which is why an infestation seems to 'come back' after it looked handled. Success means treating the environment on a timeline that accounts for every stage.",
        "Professional flea control targets the whole environment — the carpets, bedding, floor cracks, and any wildlife harborage feeding the problem — with products and timing designed to interrupt the life cycle, typically including follow-up to catch newly emerged fleas before they can breed again. Coordinating with the pet's veterinary flea treatment is part of a complete approach, as is addressing any wildlife source under the deck or in the crawlspace. That combination is what actually clears an infestation instead of thinning the adults while the next generation develops underfoot.",
      ],
    },
    faqs: [
      { q: "I treated my pet but still have fleas — why?", a: "Because the fleas on your pet are only a small fraction of the problem. Most of an infestation is eggs, larvae, and pupae developing in carpets, bedding, and floor cracks, and those keep hatching out to reinfest. Clearing fleas means treating the environment on a schedule that accounts for every life stage — not just the pet." },
      { q: "Where did the fleas even come from? My pet stays clean.", a: "Often from wildlife. Raccoons, feral cats, and squirrels denning under decks or in crawlspaces drop flea eggs that pets then pick up, and a wildlife problem resolved without treating fleas can leave them behind. Our warm indoor heating season then lets the infestation continue through winter." },
      { q: "Are fleas actually harmful?", a: "Yes, beyond the itch. Pets can develop flea allergy dermatitis, get tapeworms from swallowing fleas, and — in small animals — anemia from heavy infestations. People get itchy bites that can become infected, and fleas can transmit a few illnesses. It's worth resolving promptly for the whole household." },
      { q: "Do you work with my vet's flea treatment?", a: "Yes — a complete approach coordinates environmental treatment with your pet's veterinary flea control, and addresses any wildlife source feeding the problem. Treating the pet and the environment together, with follow-up to catch newly emerged fleas, is what actually breaks the cycle." },
    ],
  },

  // ============================================================ WASP & HORNET NEST REMOVAL
  "wasp-hornet-nest-removal": {
    identification: {
      title: "Reading the nest before you go near it",
      paragraphs: [
        "The nest itself tells you what you're dealing with and how much caution it demands. Open, umbrella-shaped combs with visible cells under an eave or railing are paper wasps — usually a smaller, more manageable colony. Large, enclosed, gray, papery football-shaped nests in a tree or under an overhang are bald-faced hornets, which are highly defensive. And a steady stream of insects coming and going from a hole in the ground, a wall void, or a gap behind siding — with no visible nest — is the classic signature of yellowjackets, the ones people most often provoke by accident.",
        "Size and location set the risk level. A nest you can see clearly, out in the open and reached from the ground early in the season, is very different from one tucked in a wall, high on the house, or hidden underground at peak season. When a nest is hidden or large, or when you're seeing heavy traffic at a single opening, treat it as a serious situation and keep your distance — that's exactly the kind of nest that turns a casual attempt into an emergency.",
      ],
    },
    localContext: {
      title: "Why late-summer nests are an urgent call",
      paragraphs: [
        "Stinging-insect colonies in Central New York grow all season and reach their maximum size and aggression in August and September, which is when the urgent nest-removal calls spike. A nest that looked minor in June can hold hundreds to thousands of insects by Labor Day, and the colony defends it far more readily as numbers peak. A nest beside a frequently used door, over a deck, or near where kids and pets play becomes a genuine hazard that can't wait for a convenient appointment.",
        "That urgency is why nest removal is often a same-day priority rather than a routine visit. The goal is to neutralize the immediate danger quickly and safely, especially when anyone in the household has a sting allergy. Being local and family-run means you reach a real person who can prioritize a dangerous nest, rather than a national call center scheduling you out a week — which, for a hornet nest by the front step, matters a great deal.",
      ],
    },
    healthRisks: {
      title: "Stings, allergies, and multiple-sting danger",
      paragraphs: [
        "Unlike honeybees, yellowjackets and hornets can sting repeatedly, and a disturbed late-season colony can deliver many stings in seconds. For anyone with a venom allergy, that can mean a life-threatening anaphylactic reaction — the single biggest reason not to gamble on a large or hidden nest. Even without an allergy, a volume of simultaneous stings is painful and, in quantity, medically serious, and pets that investigate a nest are at real risk too.",
        "The dangerous scenarios are predictable: a ground nest hit by a lawnmower, a wall-void yellowjacket colony beside a busy door, a hornet nest knocked from a tree, or a nest disturbed while trimming or cleaning gutters. There's also a structural wrinkle with wall-void nests — treated improperly, the colony can chew through interior drywall seeking a new exit and end up inside the living space. All of it argues for careful, correct handling over improvisation.",
      ],
    },
    whyProfessional: {
      title: "Why nest removal is the pro's job, not the ladder's",
      paragraphs: [
        "Stinging-insect nests are the one pest situation where the DIY risk is immediate and physical. Spraying a large yellowjacket or hornet nest — particularly one that's high, hidden in a wall, or underground — provokes a defensive swarm, and a can of store spray rarely reaches the whole colony before the colony reaches you. Add a ladder and the risk multiplies. For a big or awkwardly placed nest, the safe and effective move is to call rather than climb.",
        "We remove nests with the proper protective equipment, reach, and materials to treat the colony thoroughly — including the ground and wall-void nests that are hardest and most dangerous to handle — and we do it with the method each situation calls for, so a wall-void colony isn't driven into your living space. Reaching the nest itself, not just the insects flying around it, is what actually resolves the problem, and doing that safely at the peak of the season is precisely what a professional is for.",
      ],
    },
    faqs: [
      { q: "Can I knock the nest down myself?", a: "A small, exposed paper-wasp nest early in the season is sometimes manageable, but large yellowjacket or hornet nests — and any nest hidden in a wall, high up, or in the ground — are genuinely dangerous to disturb. These insects sting repeatedly and swarm defensively, and store spray rarely reaches the whole colony first. If it's big, hidden, or anyone nearby has an allergy, call us instead of climbing." },
      { q: "Can you come the same day?", a: "We prioritize urgent nests near doors, decks, and play areas, because that's where the sting risk is highest — and at peak season a large nest is a real hazard. Being local and family-run means you reach a real person who can move quickly, not a national dispatch line. Call and we'll get to you as fast as we can." },
      { q: "There are insects going in and out of my wall — is that a nest?", a: "Usually a yellowjacket colony nesting in the wall void behind a small exterior gap. These need care: treated incorrectly, the colony can chew through interior drywall looking for a new exit and end up inside your living space. It's a situation to have handled properly, not sprayed at from outside." },
      { q: "Why are wasps suddenly so aggressive in late summer?", a: "Colonies reach their maximum size — often hundreds to thousands of insects — and are most defensive in August and September. A nest that seemed minor in June can be a serious hazard by Labor Day, which is why late-summer removal calls spike and why a dangerous nest shouldn't wait." },
    ],
  },

  // ============================================================ TERMITE CONTROL
  "termite-control": {
    identification: {
      title: "Spotting subterranean termites — and telling them from ants",
      paragraphs: [
        "The termite of concern in New York is the eastern subterranean termite, and its signs are specific. The clearest is mud tubes — pencil-width tunnels of soil the termites build up foundation walls, piers, and sill areas to travel between the ground and the wood while staying protected. Other signs include wood that sounds hollow when tapped or crumbles to reveal soil-lined galleries, and, in spring, swarms of winged reproductives (or piles of discarded, equal-length wings) near windows and light sources.",
        "The most important identification is termite swarmers versus carpenter ant swarmers, because both appear in spring and are easy to confuse. Termites have straight (bead-like) antennae, a broad waist with no pinch, and two pairs of wings of equal length; ants have elbowed antennae, a pinched waist, and front wings longer than the back. Termites also consume the wood (leaving soil-lined galleries), whereas carpenter ants only excavate it (leaving clean galleries and frass). Getting this right determines the entire treatment approach.",
      ],
    },
    localContext: {
      title: "Termite pressure in Central New York",
      paragraphs: [
        "Central New York sits toward the cooler end of subterranean termite range, so termite pressure here is genuinely lower and spottier than in the South or the Mid-Atlantic — but 'lower' is not 'none.' Eastern subterranean termites are present in New York, and localized infestations do occur, particularly in and around older structures, in warmer microclimates, and where wood is in contact with soil or persistently damp. Homeowners shouldn't panic about termites here, but they also shouldn't assume immunity.",
        "Because termites are less top-of-mind locally than carpenter ants, they're sometimes overlooked until damage is found — which is part of why WDI inspections at the time of a home sale matter. Conditions that raise risk are the familiar ones: wood-to-soil contact, mulch or soil piled against siding, poor drainage, and chronic moisture around the foundation. Where those conditions exist, the possibility of subterranean termites is worth taking seriously.",
      ],
    },
    healthRisks: {
      title: "Silent structural damage",
      paragraphs: [
        "Termites pose no direct health risk to people — the entire concern is structural, and it's serious precisely because it's silent. Subterranean termites consume wood from the inside out, often leaving a thin intact surface while hollowing the interior, so an active infestation can progress for a long time behind finished walls and beneath floors before any visible sign appears. Left unchecked, that can mean significant, costly damage to structural framing.",
        "The insidious part is the lag between infestation and discovery. Unlike a leak or a visible pest, termite activity gives few day-to-day cues, which is why mud tubes, a spring swarm, or a WDI inspection are so valuable as early warnings. Catching subterranean termites early — and correcting the moisture and wood-to-soil conditions that support them — is dramatically cheaper than repairing structural damage discovered years later.",
      ],
    },
    whyProfessional: {
      title: "Why termite control isn't a DIY project",
      paragraphs: [
        "Subterranean termite control is inherently professional work because the colony lives underground and out of reach, and the effective tools are not retail products. Modern control relies on either a continuous treated soil barrier around and beneath the structure or in-ground bait stations that colony members carry back to eliminate the colony over time — both of which require specialized products, equipment, knowledge of construction and termite biology, and ongoing monitoring to confirm the colony is actually gone.",
        "Correct diagnosis is the first professional value: confirming it's truly subterranean termites (not carpenter ants or old, inactive damage), mapping the conducive conditions, and choosing the right strategy. From there, proper installation and follow-up monitoring are what make the treatment hold. Given the stakes — silent structural damage — and the specialized nature of the remedy, termites are firmly in the category of problems to diagnose and treat professionally rather than experiment on." ,
      ],
    },
    faqs: [
      { q: "Do we even have termites in Central New York?", a: "Yes, though less than warmer regions. Eastern subterranean termites are present in New York, and localized infestations occur — especially around older structures, in warm microclimates, and where wood meets soil or stays damp. Pressure here is lower and spottier than in the South, so it's a matter for reasonable vigilance rather than alarm." },
      { q: "How can I tell termites from carpenter ants?", a: "Termite swarmers have straight antennae, a broad waist, and two pairs of equal-length wings; carpenter ants have elbowed antennae, a pinched waist, and unequal wings. Termites also eat the wood (leaving soil-lined galleries and mud tubes), while carpenter ants only excavate it (clean galleries and sawdust-like frass). The distinction sets the whole treatment approach, so it's worth confirming." },
      { q: "What are the warning signs I should watch for?", a: "Pencil-width mud tubes on foundation walls or piers, wood that sounds hollow or crumbles to reveal soil-lined galleries, and spring swarms of winged insects (or piles of shed, equal-length wings) near windows. Because termites work silently behind surfaces, these signs — or a WDI inspection — are often the first real warning." },
      { q: "Can I treat termites myself?", a: "It isn't practical. The colony lives underground, and effective control requires professional soil-barrier treatments or in-ground bait systems, specialized equipment, and monitoring to confirm the colony is eliminated. Given the risk of silent structural damage, termites are best diagnosed and treated professionally." },
    ],
  },

  // ============================================================ ATTIC RESTORATION & INSULATION
  "attic-restoration-insulation": {
    identification: {
      title: "Signs your attic needs restoration",
      paragraphs: [
        "Attic restoration is the cleanup-and-repair step after rodents, bats, squirrels, or other wildlife have been in the space, and the signs that it's needed are usually plain once you look. Droppings scattered or concentrated across the insulation, strong lingering odors of urine and musk, matted and flattened insulation where animals nested or traveled, shredded insulation pulled into nests, and staining are the common indicators. You may also find chewed wiring, gnawed structural wood, and the tunnels and runways animals wore through the insulation.",
        "The less visible problem is contamination and degraded performance. Insulation fouled with urine and droppings doesn't just smell — it can harbor pathogens and attract secondary pests, and matted or displaced insulation no longer performs its job. If you've recently had a rodent or wildlife problem resolved, or you notice persistent attic odor, uneven heating, or rising energy bills after an infestation, the attic itself is likely part of the leftover problem that removal alone didn't fix.",
      ],
    },
    localContext: {
      title: "Why this step matters after a CNY infestation",
      paragraphs: [
        "In Central New York, the attic does real work: through long, cold winters, attic insulation is a primary defense against heat loss and ice dams, so its condition directly affects comfort and heating costs. When rodents or wildlife have compromised it — compressing it, tunneling through it, or fouling it — the home loses insulating value precisely when it's needed most. Restoration isn't cosmetic; it restores the thermal envelope that our climate demands.",
        "Restoration is also the natural completion of a wildlife or rodent job. Removing the animals and sealing the entry points solves the intrusion, but it leaves behind the contamination, damage, and diminished insulation the infestation caused. Cleaning, decontaminating, and re-insulating closes that loop — removing the health hazards and odor, eliminating the scent trails and nesting material that can draw the next intruder, and bringing the attic back to full function.",
      ],
    },
    healthRisks: {
      title: "Contamination, pathogens, and air quality",
      paragraphs: [
        "A contaminated attic is a genuine indoor-environment concern. Rodent droppings and urine can carry pathogens, and deer-mouse contamination in particular is associated with hantavirus, so disturbing fouled insulation without proper precautions is risky — this is not a bare-hands, weekend cleanup. Bat guano accumulations can harbor the fungus behind histoplasmosis, and wildlife leaves behind fleas, ticks, mites, and other parasites that persist after the animals are gone.",
        "There's an air-quality dimension, too. Attic air and the particulates in it can migrate into living space through gaps, ductwork, and the stack effect, so odors and contaminants overhead don't necessarily stay overhead. Proper restoration — removing contaminated material, decontaminating and deodorizing the space, and replacing insulation — addresses those hazards at the source rather than leaving them to linger above the ceiling.",
      ],
    },
    whyProfessional: {
      title: "Why restoration is a job for trained crews",
      paragraphs: [
        "Attic restoration combines biohazard cleanup, confined and awkward workspace, and construction, which is exactly why it's professional work. Safely removing contaminated insulation and droppings requires proper protective equipment and containment to avoid aerosolizing pathogens like those associated with hantavirus or histoplasmosis — and to avoid tracking contaminants into the living space. It's meticulous, unpleasant work done in a tight, poorly ventilated area, not a typical DIY afternoon.",
        "Done properly, restoration is a complete sequence: remove the contaminated and damaged insulation, clean and decontaminate the space, deodorize to eliminate the scent trails that attract new pests, address any chewed wiring or damaged wood, confirm the entry points are sealed, and install fresh insulation to restore the attic's thermal performance. Pairing it with the exclusion work that ended the infestation is what turns 'the animals are gone' into 'the attic is genuinely restored, safe, and efficient again.'" ,
      ],
    },
    faqs: [
      { q: "Do I really need attic restoration after the animals are gone?", a: "Often, yes. Removal and sealing solve the intrusion, but they leave behind contaminated and damaged insulation, odor, and scent trails that can attract the next intruder. Restoration cleans and decontaminates the space, addresses the damage, and re-insulates — completing the job and removing the health hazards and energy loss the infestation caused." },
      { q: "Is contaminated attic insulation actually a health concern?", a: "It can be. Rodent droppings and urine can carry pathogens — deer-mouse contamination is associated with hantavirus — and bat guano can harbor the fungus behind histoplasmosis, plus wildlife leaves parasites behind. Because attic air can migrate into living space, it's worth addressing properly rather than leaving it overhead. It's not a bare-hands cleanup." },
      { q: "Will restoring the attic help my heating bills?", a: "It can. In our cold climate, attic insulation is a main defense against heat loss and ice dams, and insulation that's been matted, tunneled through, or fouled by animals no longer performs. Removing the damaged material and re-insulating restores the thermal envelope — improving comfort and efficiency that the infestation had eroded." },
      { q: "Why not just clean it out myself?", a: "It's biohazard cleanup in a tight, poorly ventilated space. Removing contaminated insulation and droppings safely requires protective equipment and containment to avoid aerosolizing pathogens and tracking them into your home. Professional restoration does it safely and completely — decontaminating, deodorizing, repairing, and re-insulating — as the proper finish to a wildlife or rodent job." },
    ],
  },
};

/** Helper: pull the deep layer for a service slug (undefined if not yet deepened). */
export const getServiceDeep = (slug: string): ServiceDeep | undefined => serviceContentDeep[slug];
