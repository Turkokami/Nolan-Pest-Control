/**
 * service-content.ts — Phase 1 long-form content for the 8 existing services (audit §8.3).
 *
 * Each record renders into the full service template: intro → signs → process → what to expect →
 * CNY seasonality → pricing guidance → prevention → 8 FAQs. Combined with the AEO answer lead in
 * services.ts, each page lands at ~1,200–1,800 words. Copy is hand-written and Central-NY specific
 * (Ithaca/Cornell rentals, Finger Lakes, cold winters, old housing stock) — never spun.
 *
 * Pricing note: ranges and drivers only — no fabricated exact prices. Confirm real numbers with the
 * owner and move to /pest-control-cost-ithaca-ny in Phase 5.
 */

export interface ProcessStep {
  step: string;
  detail: string;
}

export interface DeepDive {
  title: string;
  paragraphs: string[];
}

export interface ServiceContent {
  slug: string;
  intro: string[];
  deepDive: DeepDive;
  signsTitle: string;
  signs: string[];
  process: ProcessStep[];
  whatToExpect: string[];
  seasonality: string[];
  pricing: string[];
  prevention: string[];
  faqs: { q: string; a: string }[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "general-pest": {
    slug: "general-pest",
    deepDive: {
      title: "The Central New York pest calendar",
      paragraphs: [
        "Pest control in the Finger Lakes is really about timing. Our long, cold winters and warm, humid summers create a distinct seasonal rhythm, and the homeowners who stay ahead of it rarely deal with a full-blown infestation. In late winter and early spring, overwintering pests that have been dormant in wall voids — cluster flies, stink bugs, and lady beetles — become active again and drift toward windows on the first warm days. Right behind them, ants wake up and send out foragers, and moisture pests emerge from damp basements after snowmelt.",
        "By midsummer the yard pests dominate: wasps and hornets build out their nests, mosquitoes breed in any standing water, and spiders multiply alongside the insects they hunt. Then comes fall — the pivotal season. As soon as night temperatures drop, mice and rats begin testing the foundation for a way in, and the overwintering insects mass on warm south- and west-facing walls looking to get inside for the winter. A home sealed and treated before October is a home that stays quiet through the winter.",
        "That is the logic behind a recurring program: instead of fighting whatever pest happens to appear, each visit is timed to the pressure that season actually brings. It is proactive rather than reactive, and over a full year it almost always costs less than a string of emergency treatments — with a lot less stress along the way.",
      ],
    },
    intro: [
      "Most pest problems in Central New York are seasonal and predictable. Mice push indoors when the first cold nights arrive in October. Ants wake up and forage in April. Cluster flies and stink bugs mass on warm siding in September. Wasps peak in August. A one-time treatment fixes the pest you can see today; a preventative program keeps the next four from ever getting a foothold — which is almost always cheaper, and far less stressful, than reacting to each infestation as it happens.",
      "Our general preventative service is a year-round program built around the CNY pest calendar. We treat the exterior perimeter, entry points, and interior harborage areas on a recurring schedule, and we adjust each visit to the season — a heavier rodent-exclusion focus in fall, an ant and moisture-pest focus in spring. It covers the common household invaders in one plan: ants, spiders, mice, roaches, wasps, and the occasional invaders (centipedes, silverfish, earwigs, boxelder bugs) that show up in older Finger Lakes homes.",
    ],
    signsTitle: "Signs it's time for a preventative plan",
    signs: [
      "You've had more than one different pest in the last year (ants in spring, mice in fall, wasps in summer).",
      "You live in an older home with a stone foundation, fieldstone basement, or gaps around the sill — common across Ithaca, Trumansburg, and the rural towns.",
      "You back up to woods, a field, a creek, or farmland, where pest pressure is constant.",
      "You've treated a problem yourself and it keeps coming back within a few weeks.",
      "You're a landlord or manage a rental and want documented, recurring protection between tenants.",
    ],
    process: [
      { step: "Inspection", detail: "We walk the interior and exterior, identify current activity, and map the entry points and conducive conditions specific to your home." },
      { step: "Interior treatment", detail: "Targeted treatment of kitchens, bathrooms, basements, and any active areas — using products and methods rated for occupied homes." },
      { step: "Exterior barrier", detail: "A perimeter barrier around the foundation, eaves, and entry points to stop pests before they get inside — the step that does most of the work." },
      { step: "Entry-point attention", detail: "We note and, where included, seal or treat the gaps pests use: utility penetrations, door sweeps, weep holes, foundation cracks." },
      { step: "Recurring visits", detail: "Scheduled seasonal service (typically quarterly) that shifts focus with the calendar, plus free re-treatment between visits if a covered pest shows up." },
    ],
    whatToExpect: [
      "Most homes are on a quarterly schedule, timed to spring, summer, fall, and winter pest pressure.",
      "You do not need to leave for routine exterior service; interior treatment is scheduled when convenient.",
      "If a covered pest appears between visits, we come back and re-treat at no additional charge.",
      "You get the same technician relationship over time — someone who knows your home, not a rotating crew.",
    ],
    seasonality: [
      "Spring (Apr–May): ants become active and moisture pests emerge after snowmelt. This is the best window to knock down colonies before they establish satellite nests indoors.",
      "Summer (Jun–Aug): wasps, hornets, spiders, and mosquitoes peak. Exterior barrier work and nest attention carry the season.",
      "Fall (Sep–Nov): the most important season in CNY. Mice and rats seek warmth, and overwintering pests — cluster flies, stink bugs, Asian lady beetles, boxelder bugs — mass on the outside of the house looking for a way in. Fall exclusion and barrier timing is what keeps them out all winter.",
      "Winter (Dec–Mar): activity drops, but mice already inside stay active in walls and basements. Winter visits focus on interior monitoring and rodent control.",
    ],
    pricing: [
      "Preventative plans are priced by home size, the pests covered, and how much exterior and exclusion work is involved. Recurring quarterly programs cost less per visit than one-off treatments, and the free re-service between visits is included in the plan.",
      "We give honest, upfront pricing after a quick look at your home — no high-pressure contracts, and no surprise fees. Ask about bundling exclusion (rodent or bat sealing) into your plan if your home has ongoing entry issues.",
    ],
    prevention: [
      "Keep firewood, mulch, and brush away from the foundation.",
      "Seal gaps around utility lines, dryer vents, and door sweeps before fall.",
      "Fix moisture problems — damp basements and leaky sills draw a long list of pests.",
      "Store food in sealed containers and keep pet food off the floor overnight.",
    ],
    faqs: [
      { q: "How often should preventative pest service be done?", a: "Most Central New York homes do best on a quarterly program timed to seasonal pest cycles, with extra attention in spring (ants, moisture pests) and fall (rodents, overwintering pests)." },
      { q: "Is the treatment safe for kids and pets?", a: "Yes. We use products and application methods rated for use in occupied homes and follow all New York State application requirements. We're happy to explain what we're using and why." },
      { q: "Do I have to sign a long contract?", a: "No. We offer recurring plans because they work better and cost less per visit, but we keep terms simple and honest. You're not locked into anything with hidden fees." },
      { q: "What pests does the general plan cover?", a: "The common household pests: ants, spiders, mice, roaches, wasps, and occasional invaders like centipedes, silverfish, and boxelder bugs. Specialized issues (bed bugs, bats, termites) are handled as their own services." },
      { q: "What if pests come back between visits?", a: "Call us. Re-treatment for covered pests between scheduled visits is included in your plan at no extra charge — that's the point of a guarantee." },
      { q: "Do you treat inside, outside, or both?", a: "Both, but the exterior barrier does most of the work by stopping pests before they enter. Interior treatment targets any active areas and is scheduled at your convenience." },
      { q: "I only have one pest right now — do I need a whole plan?", a: "Not necessarily. We're glad to do a one-time treatment. But if you've had different pests through the year, a plan usually costs less overall and saves the hassle of reacting each time." },
      { q: "Do you serve rural homes and camps outside the city?", a: "Yes. We cover Tompkins, Schuyler, Chemung, Cortland, and Tioga counties, including rural homes, lake properties, and seasonal camps where pest pressure is often higher." },
    ],
  },

  "roach-control": {
    slug: "roach-control",
    deepDive: {
      title: "Why German roaches spread so fast — and how buildings help them",
      paragraphs: [
        "The reason roaches feel impossible to beat with store products comes down to biology. A single female German cockroach produces an egg case holding 30 to 40 nymphs, and she carries it until just before it hatches, which protects the eggs from most sprays. Under warm indoor conditions a population can double in a matter of weeks. By the time you see roaches during the day, the harborage — usually inside cabinets, behind the refrigerator, or in the motor compartment of the dishwasher — already holds many times what is visible.",
        "In multi-unit buildings, which describes a large share of Ithaca's rental and student housing, the problem compounds. Roaches travel through the shared plumbing chases and wall voids that connect apartments, so treating one unit while an adjoining unit is infested simply pushes the population back and forth. This is why professional roach work emphasizes gel bait placed in the harborage — bait is carried back and shared through the colony, reaching the insects you never see — and why treating connected units together matters so much.",
        "It is also why cleanliness alone does not solve a roach problem, and why blaming a tenant rarely helps. Roaches need moisture more than food, so a small plumbing leak under a sink can sustain a population in an otherwise spotless kitchen. The durable fix is baiting the source, reducing moisture and clutter, and following up to catch the next generation as the remaining eggs hatch.",
      ],
    },
    intro: [
      "Cockroaches are one of the few pests where speed genuinely matters. A German cockroach — the small tan species behind most home and apartment infestations — can go from a few hitchhikers to hundreds in a matter of weeks, because a single female's egg case carries 30 to 40 nymphs. They spread through shared walls and plumbing chases, which is why roaches are especially common in Ithaca's older multi-unit rentals and student housing near Cornell and Ithaca College.",
      "Roaches are more than a nuisance. They contaminate food surfaces, trigger asthma and allergies, and carry bacteria through the spaces they travel. We eliminate infestations at the source with targeted baiting and treatment, then seal and monitor so they don't return — and we handle the multi-unit coordination that a rental situation often needs.",
    ],
    signsTitle: "Signs you have a roach problem",
    signs: [
      "Live roaches during the day — a strong sign of a heavy infestation, since roaches are normally nocturnal.",
      "Small dark droppings that look like coffee grounds or pepper, especially in cabinets and drawers.",
      "A musty, oily odor in the kitchen when the population is large.",
      "Egg cases (small brown capsules) tucked into cracks, behind appliances, or under the sink.",
      "Smear marks along baseboards and shelf edges in damp areas.",
    ],
    process: [
      { step: "Inspection & identification", detail: "We confirm the species (German roaches need a different approach than the larger American or Oriental roaches) and locate the harborage — usually the kitchen and bathroom." },
      { step: "Targeted baiting", detail: "We place professional gel bait where roaches actually travel and feed. Bait beats spray for German roaches because it's carried back to the harborage and reaches the ones you never see." },
      { step: "Crack-and-crevice treatment", detail: "We treat the voids behind appliances, cabinets, and plumbing where roaches hide and breed." },
      { step: "Monitoring", detail: "We place monitors to measure knockdown and catch any rebound early." },
      { step: "Follow-up", detail: "Roach control almost always needs a follow-up visit to break the breeding cycle. We schedule it and adjust based on what the monitors show." },
    ],
    whatToExpect: [
      "Plan on at least two visits — the follow-up is what breaks the egg-hatch cycle.",
      "We'll give you simple prep steps (clearing under the sink, reducing clutter) that make treatment far more effective.",
      "You should see a sharp drop within one to two weeks; full elimination usually takes a few weeks as remaining eggs hatch and contact the bait.",
      "For rentals, we can coordinate treatment across adjoining units so roaches don't just move next door and come back.",
    ],
    seasonality: [
      "Roaches live indoors and are active year-round in Central New York — they don't die off in winter the way outdoor pests do.",
      "Infestations often become obvious in fall and winter, when tenants spend more time inside and heating keeps kitchens warm.",
      "Move-in and move-out season around Cornell and IC (August and May) is a common time for roaches to spread between units as belongings change hands.",
    ],
    pricing: [
      "Roach treatment is priced by the size of the space and the severity of the infestation. A single studio or apartment is straightforward; a heavily infested multi-unit building takes more visits and coordination.",
      "Because roaches almost always require a follow-up, we quote the treatment as a short program rather than a single visit, so the price you're given actually solves the problem.",
    ],
    prevention: [
      "Fix leaks and reduce moisture under sinks — roaches need water more than food.",
      "Store food and pet food in sealed containers; wipe up crumbs and grease nightly.",
      "Reduce cardboard and clutter, which roaches use as harborage.",
      "Inspect used furniture and appliances before bringing them in — a common way roaches enter a rental.",
    ],
    faqs: [
      { q: "Why do roaches keep coming back after I spray?", a: "Store sprays scatter roaches and miss the hidden breeding population. German roaches are controlled with gel bait that's carried back to the harborage, plus a follow-up to catch newly hatched nymphs. Spraying alone rarely ends an infestation." },
      { q: "How long does it take to get rid of roaches?", a: "You'll usually see a steep drop within one to two weeks. Full elimination takes a few weeks because eggs already laid need to hatch and contact the bait — which is why the follow-up visit matters." },
      { q: "I rent — whose responsibility is roach treatment?", a: "In New York, landlords are generally responsible for pest infestations under the Warranty of Habitability (Real Property Law §235-b). We can work directly with your landlord or property manager and coordinate across units." },
      { q: "Are roaches a health risk?", a: "Yes. They contaminate food surfaces and are a well-documented trigger for asthma and allergies, especially in children. That's a big reason not to wait on treatment." },
      { q: "Do I need to leave during treatment?", a: "Usually not for routine gel baiting and crack-and-crevice work. We'll tell you if any area needs to be vacated briefly and give you clear prep steps beforehand." },
      { q: "Will one treatment be enough?", a: "For light, early infestations sometimes — but German roach jobs almost always need at least one follow-up to break the breeding cycle. We build that into the plan." },
      { q: "How did roaches get into my clean home?", a: "Roaches hitchhike in on groceries, cardboard, used furniture, appliances, and through shared walls in multi-unit buildings. It's not about cleanliness — though clutter and moisture help them thrive." },
      { q: "Can you treat a whole apartment building?", a: "Yes. Multi-unit roach control works best when adjoining units are treated together so the population can't shift and return. We coordinate the schedule with owners and managers." },
    ],
  },

  "rodent-control": {
    slug: "rodent-control",
    deepDive: {
      title: "What exclusion actually involves",
      paragraphs: [
        "Exclusion is the part of rodent work most companies skip, and it is the part that makes results last. It means finding and sealing every gap a rodent can use — and a house mouse can compress through an opening about a quarter inch wide, roughly the diameter of a pencil. In Central New York's older homes, the usual suspects are the gaps where the wood framing meets the stone or block foundation, the holes drilled for water, gas, electric, and cable lines, worn door sweeps, unscreened crawlspace and gable vents, and the roofline where dormers and additions meet the original structure.",
        "Sealing these properly is not a matter of stuffing steel wool in a hole. Durable exclusion uses rodent-proof materials — hardware cloth, sealed metal flashing, and appropriate sealants — installed so they hold up to gnawing and weather. Done well, it also improves the home's energy efficiency, because the same gaps that let mice in let heat out. That is why we treat sealing as the core of the job rather than an upsell, and offer full exclusion as its own service for homes with widespread entry issues.",
        "The alternative — trapping alone — is a treadmill. Every fall, cold weather pushes a new group of rodents toward the warmth, and if the openings are still there, they simply replace the ones you removed. Clearing the current population buys relief; sealing the entries is what ends the annual cycle for good.",
      ],
    },
    intro: [
      "When the nights turn cold in Central New York — usually starting in October — mice and rats move toward the warmth of your home, and they only need a gap the width of a pencil to get in. Our older housing stock makes it easy: fieldstone foundations, gaps around sills and utility lines, and unsealed crawlspaces are standard across Ithaca, the rural towns, and lake properties. Once inside, mice breed quickly and chew through insulation, stored goods, and wiring, which is both a fire risk and an expensive one.",
      "The difference between a temporary fix and a permanent one is exclusion. Trapping clears the mice that are already inside; sealing the entry points is what keeps the next wave out. Most companies stop at trapping — we treat sealing as the core of the job, and we offer full exclusion as its own service for homes with ongoing entry problems.",
    ],
    signsTitle: "Signs of a rodent problem",
    signs: [
      "Droppings along walls, in cabinets, in drawers, or in the silverware — small and dark for mice, larger for rats.",
      "Scratching or scurrying sounds in walls and ceilings at night.",
      "Gnaw marks on food packaging, baseboards, or wiring.",
      "Nests of shredded paper, insulation, or fabric in attics, basements, or behind appliances.",
      "A musky ammonia odor in an enclosed space with heavy activity.",
    ],
    process: [
      { step: "Inspection", detail: "We find how they're getting in — the entry points matter more than where you're seeing droppings. We check the foundation, sill, utility penetrations, roofline, and attic." },
      { step: "Trapping & removal", detail: "We set a professional trapping program to clear the active population quickly, placed where rodents actually travel." },
      { step: "Exclusion sealing", detail: "We seal entry points with rodent-proof materials — the step that turns a temporary fix into a lasting one. This is available as its own service for larger jobs." },
      { step: "Sanitation guidance", detail: "We advise on cleanup of droppings and nesting material, which carry health risks and also leave scent trails that attract more rodents." },
      { step: "Follow-up & monitoring", detail: "We return to remove trapped rodents, confirm the entry points are holding, and monitor for any new activity." },
    ],
    whatToExpect: [
      "The first visit focuses on trapping and identifying entry points; sealing may be scheduled as follow-up depending on scope.",
      "Activity should drop noticeably within the first week or two as the resident population is cleared.",
      "We'll show you the entry points we find so you understand what's being sealed and why.",
      "For recurring rodent pressure — common in rural and lake homes — we can fold monitoring into a preventative plan.",
    ],
    seasonality: [
      "Fall (Sep–Nov) is peak season: the first cold snaps drive mice and rats indoors across CNY. Sealing before winter is the single most effective thing you can do.",
      "Winter (Dec–Mar): rodents already inside stay active in walls, attics, and basements, breeding in the warmth even when it's freezing outside.",
      "Spring and summer: outdoor populations rebuild in fields, woodpiles, and outbuildings, setting up the next fall push. Exclusion done now prevents the fall problem.",
    ],
    pricing: [
      "Rodent jobs are priced by the size of the home, the severity of the infestation, and how much exclusion sealing is involved. A straightforward trapping visit is one price; full exclusion of an older home with many entry points is a larger, longer-lasting investment.",
      "We'll always tell you honestly whether trapping alone will hold or whether sealing is needed to actually end the problem — we don't sell exclusion you don't need, and we don't pretend traps alone will fix a home full of gaps.",
    ],
    prevention: [
      "Seal gaps around utility penetrations, dryer vents, and the foundation sill before fall.",
      "Keep firewood, brush, and bird seed away from the house.",
      "Store pantry and pet food in sealed metal or glass containers.",
      "Trim back branches that give roof and attic access, and screen chimney and gable vents.",
    ],
    faqs: [
      { q: "Do you seal entry points or just set traps?", a: "Both — and sealing is the part that lasts. Trapping clears the current population; exclusion sealing keeps new rodents out. For homes with many gaps we offer full exclusion as its own service." },
      { q: "How are mice getting into my house?", a: "Mice fit through a gap the size of a pencil. In Central New York's older homes that usually means the foundation sill, utility line penetrations, gaps under doors, and roofline or gable-vent openings. We find and show you the specific entries." },
      { q: "How long does it take to get rid of mice?", a: "You'll usually see activity drop within the first week or two of trapping. Ending it for good depends on sealing the entry points so the next wave can't replace the ones you removed." },
      { q: "Is rodent contamination dangerous?", a: "Yes. Droppings and urine can carry disease and trigger allergies, and rodents gnaw wiring, which is a fire risk. We advise on safe cleanup and never recommend vacuuming or sweeping dry droppings." },
      { q: "Why do the mice keep coming back every fall?", a: "Because the entry points are still open. Trapping without sealing just clears space for the next group when cold weather pushes them in. Exclusion is what breaks the annual cycle." },
      { q: "Do you handle rats as well as mice?", a: "Yes. Rats are less common than mice in most of CNY but do occur, especially near water, farms, and older urban areas. The approach is similar — remove, then seal — with heavier-duty materials." },
      { q: "Can you get rodents out of the attic?", a: "Yes. We trap and remove attic rodents, seal the roofline and vent entries they're using, and can address contaminated insulation as an add-on (attic restoration)." },
      { q: "Are the traps safe around pets and kids?", a: "We place traps in areas rodents travel but people and pets don't reach, and we can use tamper-resistant stations where needed. We'll talk through placement so everyone's comfortable." },
    ],
  },

  "ant-control": {
    slug: "ant-control",
    deepDive: {
      title: "Carpenter ants, parent nests, and satellite nests",
      paragraphs: [
        "Carpenter ants are the ant that matters most in Central New York, and understanding how they nest explains why spraying a trail never works. A carpenter ant colony has a parent nest — typically outdoors in a tree stump, woodpile, or moisture-damaged wood — where the queen lives, plus one or more satellite nests that workers establish in nearby structures. Those satellite nests are often what ends up inside your walls: in the damp wood around a leaky window, a poorly flashed roof edge, a bathroom wall, or a porch column with wood-to-soil contact.",
        "Because the colony is spread across multiple sites and the queen may never be in the part you can see, killing visible foragers accomplishes nothing lasting — and repellent sprays can actually make it worse by causing the colony to bud into additional satellite nests. Effective treatment uses non-repellent products and baits that workers unknowingly carry back and share, reaching the nests and the queen. It also means correcting the moisture that drew them, because carpenter ants seek out wood that has already been softened by water.",
        "Unlike termites, carpenter ants do not eat wood; they excavate smooth galleries to nest, pushing out the shavings and insulation as the sawdust-like frass you find on sills and in the basement. The damage is slower than termite damage but real over years, which is why an established colony is worth treating properly rather than swatting the ones on the counter.",
      ],
    },
    intro: [
      "Not all ants are the same problem. The little ants trailing across a kitchen counter are a nuisance; carpenter ants — the large black ants common throughout Central New York — tunnel into damp or damaged wood and can cause real structural damage over time. Telling them apart, and finding the nest, is most of the battle. A spray on the trail kills the ants you see and does nothing about the colony producing them.",
      "We treat the ant species that actually invade CNY homes, with special attention to carpenter ants because they're the ant that matters most here. Our older housing stock and wet springs give them plenty of the moisture-damaged wood they favor — around leaky sills, roof edges, decks, and bathrooms. We locate the parent and satellite nests and treat so the whole colony is affected, not just the foragers.",
    ],
    signsTitle: "Signs of an ant problem",
    signs: [
      "Large black ants indoors, especially at night or in spring — a classic sign of carpenter ants.",
      "Small piles of what looks like sawdust (frass) near woodwork, windowsills, or the basement — carpenter ants pushing debris out of their galleries.",
      "Faint rustling sounds inside walls or trim in a quiet room.",
      "Steady trails of small ants to a food or moisture source in the kitchen or bathroom.",
      "Winged ants indoors in spring, which often means a mature nest is nearby.",
    ],
    process: [
      { step: "Identification", detail: "We identify the species — carpenter ants, pavement ants, odorous house ants, and others each call for a different strategy — and look for signs of structural nesting." },
      { step: "Nest location", detail: "We trace trails and moisture to find the parent nest and any satellite nests, indoors and out. This is what makes treatment stick." },
      { step: "Targeted treatment", detail: "We use non-repellent products and baits that ants carry back to the colony, treating voids, entry points, and the exterior perimeter." },
      { step: "Moisture & conducive-condition notes", detail: "Carpenter ants follow moisture. We point out the leaks, gutters, and wood-to-soil contact fueling the problem so it doesn't recur." },
      { step: "Follow-up", detail: "We confirm the colony is knocked down and re-treat if foragers persist." },
    ],
    whatToExpect: [
      "We aim to treat the colony, not just the trail, so results build over a couple of weeks as bait moves through the nest.",
      "For carpenter ants, we'll assess whether any wood needs a closer look for damage and moisture repair.",
      "Exterior perimeter treatment helps keep new colonies from moving in from nearby trees and woodpiles.",
      "If the same nest keeps producing, we go back and address it — that's covered under the guarantee.",
    ],
    seasonality: [
      "Spring (Apr–Jun) is prime ant season in CNY. Colonies wake up, foragers appear, and winged reproductives may swarm — the best time to treat before satellite nests establish.",
      "Summer: activity continues, with carpenter ants most visible at dusk. Moisture from summer storms can expand nesting sites.",
      "Fall: activity tapers as ants prepare to overwinter, often inside wall voids in heated homes — which is why you sometimes see them on a warm winter day.",
    ],
    pricing: [
      "Ant treatment is priced by the species, the extent of the infestation, and whether structural nesting is involved. A pavement-ant trail is a simpler job than a carpenter-ant colony nesting in a moisture-damaged wall.",
      "We quote honestly after identifying what you actually have — and if carpenter ants have caused damage that needs a carpenter's attention, we'll tell you rather than paper over it.",
    ],
    prevention: [
      "Fix roof, gutter, and plumbing leaks — carpenter ants need moisture-softened wood.",
      "Keep firewood off the ground and away from the house; trim branches touching the roof.",
      "Seal gaps around windows, sills, and utility lines.",
      "Address wood-to-soil contact on decks, porches, and siding.",
    ],
    faqs: [
      { q: "How do I know if these are carpenter ants?", a: "Carpenter ants are large (about ¼ to ½ inch) and usually black. Frass that looks like sawdust near woodwork, activity at night, and winged ants indoors in spring all point to carpenter ants nesting in the structure." },
      { q: "Do carpenter ants actually damage the house?", a: "They can. Unlike termites they don't eat wood, but they excavate galleries in damp or damaged wood to nest, and an established colony left alone for years can weaken structural members. Moisture is the common thread." },
      { q: "Why didn't store-bought spray work?", a: "Repellent sprays kill foragers and can actually split the colony into more satellite nests. We use non-repellent products and baits that ants carry back to the nest, treating the source instead of the symptom." },
      { q: "Where do carpenter ants nest?", a: "In moisture-damaged wood: around leaky roofs and gutters, window and door frames, decks, porch columns, and bathroom or kitchen walls. There's often a parent nest outdoors and satellite nests inside." },
      { q: "What's the difference between carpenter ants and termites?", a: "Both damage wood, but carpenter ants leave clean galleries and sawdust-like frass, while termites eat the wood and leave mud tubes. If you're unsure, we can identify it — and we offer WDI inspections for real-estate purposes." },
      { q: "How long until the ants are gone?", a: "Trails usually thin out within days, but fully affecting the colony through bait takes a couple of weeks. We follow up to make sure the nest is knocked down, not just the visible ants." },
      { q: "Will they come back next spring?", a: "Not if the nest is eliminated and the moisture conditions that drew them are corrected. We treat the source and point out the leaks and wood-to-soil contact fueling the problem." },
      { q: "Do you treat other ants besides carpenter ants?", a: "Yes — pavement ants, odorous house ants, and the other nuisance species that trail through CNY kitchens. Each has a different treatment, which is why identification comes first." },
    ],
  },

  "spider-control": {
    slug: "spider-control",
    deepDive: {
      title: "The spiders you actually find in Central NY homes",
      paragraphs: [
        "Most of the spiders people encounter indoors in the Finger Lakes fall into a few harmless groups. Cellar spiders — the long, delicate 'daddy longlegs' type — hang in loose webs in basements and corners and are completely harmless. Common house spiders build the tangled webs you clear from ceiling corners and window frames. Wolf spiders are the large, fast, ground-hunting spiders that startle people but do not build webs indoors; they wander in from the yard and are simply looking for prey. Grass and funnel-web spiders show up around foundations and shrubs.",
        "The spiders people fear most — those capable of a medically significant bite — are not established in Central New York's climate, and verified encounters are extremely rare. That matters, because it means honest spider control here is about nuisance reduction, not danger, and any company selling you urgent treatment for 'dangerous spiders' in Ithaca is overselling. If you ever do find a spider you are unsure about, a clear photo is usually enough for us to identify it.",
        "The practical takeaway is that spiders are a downstream problem: they are in your home because there is something for them to eat. A persistent spider issue almost always traces back to a supply of small insects, often drawn to exterior lighting near doors and windows. That is why lasting control combines web and egg-sac removal with reducing the insect population — treating the cause rather than endlessly clearing webs.",
      ],
    },
    intro: [
      "Spiders are the pest people most want gone and least need to fear. In Central New York, the spiders you find in the house — cellar spiders, house spiders, and the occasional wolf spider that wandered in — are essentially harmless. The medically significant species people worry about are rare here and not established in our climate. That said, webbing, egg sacs, and the constant reappearance of spiders in corners and basements are a real nuisance, and a house with a lot of spiders usually has something else going on.",
      "The key to spider control is that spiders follow their food. Where there are spiders, there are the small insects they eat — which often means the real fix is reducing the insect population and the conditions that draw it. We treat harborage areas and webbing directly, knock down the insects spiders feed on, and identify anything you're genuinely concerned about.",
    ],
    signsTitle: "Signs of a spider problem",
    signs: [
      "Webs reappearing in the same corners, ceilings, basements, and window frames after you clear them.",
      "Egg sacs — small silk spheres — tucked into corners and under furniture.",
      "Spiders concentrated around exterior lights, which attract the insects they hunt.",
      "A lot of other small insects present, which is what's feeding the spiders.",
      "Activity in damp, undisturbed spaces like basements, crawlspaces, and garages.",
    ],
    process: [
      { step: "Inspection", detail: "We identify the species present, locate harborage and egg sacs, and note the insect activity that's feeding the spider population." },
      { step: "Web & egg-sac removal", detail: "We remove accessible webs and egg sacs so the visible problem drops immediately and treatment isn't just covering old webbing." },
      { step: "Targeted treatment", detail: "We treat harborage areas, corners, eaves, and entry points, and address the insects spiders feed on so the food source shrinks." },
      { step: "Exterior perimeter", detail: "We treat the foundation, eaves, and around exterior lights and doors where spiders enter and hunt." },
      { step: "Follow-up", detail: "For heavier problems we return to confirm knockdown and remove new webbing." },
    ],
    whatToExpect: [
      "Removing webs and egg sacs gives an immediate visible improvement; reducing the insect food source is what keeps them from rebuilding.",
      "Exterior lighting and landscaping drive a lot of spider activity — we'll point out simple changes that help.",
      "If you've found a spider you're worried about, bring it to us or photograph it and we'll identify it honestly.",
      "Spider control pairs naturally with a general preventative plan, since it depends on keeping other insects down.",
    ],
    seasonality: [
      "Late summer and fall (Aug–Oct) is when spiders are most noticeable indoors in CNY — they're mature, larger, and moving inside as it cools.",
      "Spring and summer: outdoor populations build alongside the insects they eat; exterior treatment keeps them off the house.",
      "Winter: most outdoor spiders die off or go dormant, but basement and crawlspace species persist year-round in the warmth.",
    ],
    pricing: [
      "Spider treatment is priced by home size and severity, and it's often most cost-effective as part of a general preventative plan, since controlling spiders means controlling the insects they feed on.",
      "We'll give you a straight quote and won't upsell you on treatments for dangerous spiders you don't have — in CNY, that's almost always the honest answer. If webbing keeps returning in the same basement corners or around exterior lights, we'll focus the treatment there and address the insect activity feeding it, so you're paying to solve the actual cause rather than to repeat the same visit.",
    ],
    prevention: [
      "Switch exterior lights to warmer, less insect-attracting bulbs, or move them away from doors.",
      "Reduce clutter in basements, garages, and closets where spiders harbor.",
      "Seal gaps around windows, doors, and the foundation.",
      "Keep the general insect population down — fewer bugs means fewer spiders.",
    ],
    faqs: [
      { q: "Are there dangerous spiders in Central New York?", a: "Medically significant spiders are rare in CNY and not established here. The spiders in your home — cellar, house, and wolf spiders — are essentially harmless nuisances. We're glad to identify anything you're concerned about." },
      { q: "Why do I keep getting spiders no matter how much I clean?", a: "Spiders follow their food. A persistent spider problem usually means there's a supply of small insects to eat. The lasting fix is reducing that insect population, not just clearing webs." },
      { q: "Will you remove the webs and egg sacs?", a: "Yes. We remove accessible webs and egg sacs as part of treatment, which gives an immediate visible improvement and prevents the next generation from hatching in place." },
      { q: "Do exterior lights really cause spiders?", a: "Indirectly, yes. Lights attract the insects spiders eat, so doorways and porches with bright lighting become hunting grounds. Warmer bulbs or relocated fixtures noticeably reduce activity." },
      { q: "Is spider treatment safe for my family and pets?", a: "Yes. We use products and methods rated for occupied homes and focus treatment on harborage areas and the exterior, away from living spaces." },
      { q: "Should I get a dedicated spider treatment or a general plan?", a: "Because spider control depends on managing the insects they feed on, most homes get the best value folding it into a general preventative plan rather than treating spiders in isolation." },
      { q: "Where are spiders getting in?", a: "Through gaps around windows, doors, the foundation, and utility penetrations — and they concentrate near exterior lights. We treat and note these entry and hunting points." },
      { q: "When are spiders worst in CNY?", a: "Late summer into fall, when spiders are mature and moving indoors as temperatures drop. That's the most common time people notice a jump in activity." },
    ],
  },

  "stinging-insects": {
    slug: "stinging-insects",
    deepDive: {
      title: "Know what's stinging you: the common CNY species",
      paragraphs: [
        "Not every stinging insect is a 'bee,' and the differences change how a nest should be handled. Yellowjackets are the aggressive, ground- and void-nesting wasps responsible for most late-summer stings; they nest in the soil, in wall voids, and under decks, and a disturbed colony can deliver many stings quickly. Bald-faced hornets — actually a type of yellowjacket — build the large gray, football-shaped paper nests you see hanging in trees and under eaves, and they defend them fiercely. Paper wasps build the smaller, open, umbrella-shaped combs under railings, eaves, and grill lids, and are the least aggressive of the group.",
        "European hornets are large brown-and-yellow hornets, active even at night, that nest in hollow trees and wall voids and can strip bark from shrubs. Because each of these nests in a different place and reacts differently to disturbance, correct identification is the first step to removing one safely. A ground yellowjacket nest and an exposed paper-wasp comb are very different jobs, and treating them the same way is how people get hurt.",
        "One important exception: honeybees are beneficial pollinators and are not exterminated. If you have a swarm or an established honeybee colony, the right move is a beekeeper who can relocate them, and we will point you in that direction rather than treat them. Our stinging-insect service covers the wasps and hornets — yellowjackets, bald-faced and European hornets, and paper wasps — that pose a genuine hazard around the home.",
      ],
    },
    intro: [
      "A wasp or hornet nest near a doorway, deck, or playset is one of the few pest problems that can send someone to the emergency room, and it's not a job to tackle from a ladder with a can of spray. Yellowjackets in particular turn aggressive in late summer, and a disturbed ground or wall nest can produce dozens of stings in seconds — a serious danger for anyone with an allergy. In Central New York, calls peak from August into early fall, when colonies are at their largest and most defensive.",
      "We safely remove yellowjacket, hornet, and wasp nests — including the risky ones in wall voids and underground — and treat the stinging insects active around your home. We come with the right protective equipment and the experience to handle a nest without turning a manageable situation into a swarm.",
    ],
    signsTitle: "Signs of a stinging-insect problem",
    signs: [
      "Steady wasp or hornet traffic in and out of one spot — a soffit, wall gap, ground hole, or shrub.",
      "A visible paper nest under eaves, on branches, or in a shed or attic.",
      "Yellowjackets around trash, food, or sweet drinks outdoors in late summer.",
      "A buzzing or vibration inside a wall, which can mean a hidden nest in the void.",
      "Increased aggression near a specific area of the yard, especially in August and September.",
    ],
    process: [
      { step: "Identification & locating the nest", detail: "We identify the species (yellowjacket, bald-faced hornet, paper wasp, or European hornet) and locate the nest, including hidden wall-void and ground nests." },
      { step: "Protective removal", detail: "We treat and remove the nest using proper protective equipment, timed to when the colony is least active to reduce risk." },
      { step: "Void & entry treatment", detail: "For wall and ground nests, we treat the void so the colony is eliminated rather than just the visible entrance." },
      { step: "Nest disposal", detail: "Where accessible and safe, we remove the physical nest so it doesn't attract scavengers or get reused." },
      { step: "Prevention advice", detail: "We point out the eaves, gaps, and conditions that invite nesting so next season is quieter." },
    ],
    whatToExpect: [
      "Many nests can be handled in a single visit; large or hidden nests may need a short follow-up to confirm the colony is dead.",
      "We time treatment to reduce activity and keep your family and pets clear of the area during and shortly after.",
      "Ground and wall-void nests are riskier and are exactly the ones you shouldn't try yourself.",
      "For anyone in the household with a sting allergy, we treat these as priority calls.",
    ],
    seasonality: [
      "Spring: queens start small nests. These are easy to remove early, before the colony grows — an ideal but often unnoticed window.",
      "Summer (Jun–Aug): colonies expand rapidly and nests become visible.",
      "Late summer to early fall (Aug–Oct): peak season and peak danger. Yellowjacket colonies are largest and most aggressive, and food-foraging brings them into contact with people at cookouts and trash areas.",
      "First hard frost ends most colonies, but nests should still be removed so they aren't reused or scavenged.",
    ],
    pricing: [
      "Nest removal is priced by the species, the nest's location, and the risk involved. An accessible paper-wasp nest under an eave is straightforward; a yellowjacket nest deep in a wall void takes more work and care.",
      "We give clear pricing before we start, and we'd always rather you call us than risk a reaction trying to remove an aggressive nest yourself.",
    ],
    prevention: [
      "Seal gaps in soffits, eaves, and siding in spring before queens start nesting.",
      "Keep outdoor trash covered and clean up food and sweet drinks at gatherings.",
      "Check sheds, playsets, and grills for early-stage nests through the summer.",
      "Don't seal an active wall-void entrance yourself — trapped wasps often chew into the living space.",
    ],
    faqs: [
      { q: "Can you remove a nest inside a wall or in the ground?", a: "Yes — and those are exactly the nests you shouldn't try yourself. We treat the void or ground nest so the whole colony is eliminated, using protective equipment and the right timing to keep everyone safe." },
      { q: "How fast can you come out for a wasp nest?", a: "We prioritize stinging-insect calls, especially where there's a nest near a doorway or a household member with an allergy. Call us and we'll get you scheduled quickly." },
      { q: "Why are yellowjackets so aggressive in late summer?", a: "By August and September the colony is at its largest and food is scarcer, so yellowjackets forage aggressively and defend the nest fiercely. That's when most stings and calls happen." },
      { q: "Is it safe to spray a nest myself?", a: "For a small, exposed paper-wasp nest, sometimes — but ground and wall nests can produce dozens of stings when disturbed, and store spray often just angers a large colony. If there's any allergy risk or the nest is hidden, call a professional." },
      { q: "Will the wasps come back to the same spot?", a: "A removed nest isn't reused, but a good nesting location can attract new queens next spring. We point out the eaves and gaps to seal so it doesn't become a recurring spot." },
      { q: "Do you remove the physical nest or just kill it?", a: "Where it's accessible and safe, we remove the nest after treatment so it doesn't attract scavengers or get reused. Some wall-void nests are treated in place because opening the wall isn't warranted." },
      { q: "Are honeybees treated the same way?", a: "No. Honeybees are beneficial and we don't exterminate them — if you have a honeybee swarm we'll point you toward a local beekeeper for removal. We handle wasps, hornets, and yellowjackets." },
      { q: "What time of year should I deal with nests?", a: "Early is easier and cheaper — a spring nest is small. But most people notice nests in late summer at peak size, and those still need prompt, careful removal." },
    ],
  },

  "mosquito-tick": {
    slug: "mosquito-tick",
    deepDive: {
      title: "Ticks, Lyme, and the Finger Lakes",
      paragraphs: [
        "Tick-borne disease is the reason mosquito and tick service in this region is a health matter, not just a comfort one. The blacklegged tick — the deer tick — is well established throughout Central New York and the Finger Lakes, and it is the vector for Lyme disease as well as anaplasmosis and babesiosis. The Finger Lakes region has seen tick populations and associated infections rise over the past decade, driven by expanding deer and white-footed mouse populations and the wooded, brushy edges that define so many properties here.",
        "Deer ticks have a two-year, multi-stage life cycle, and both the tiny nymphs of early summer and the adults of fall can transmit disease. That is why tick risk is not confined to a few weeks: nymphs are active and easy to miss in June and July, and adult ticks stay out through the fall, even after the first frosts. The highest-risk zones on a property are the shaded leaf litter, tall grass, and the transition line where lawn meets woods — exactly where treatment should be concentrated.",
        "Mosquitoes are a separate but overlapping problem. They breed in any standing water — clogged gutters, low spots, buckets, tarps, old tires, even a saucer under a plant — and can go from egg to adult in about a week in warm weather. Because both pests reproduce continuously through the season, the effective approach is a recurring program that treats resting and breeding zones and reduces the standing-water sources feeding the next generation, rather than a single spray that wears off.",
      ],
    },
    intro: [
      "In the Finger Lakes, mosquitoes and ticks aren't just an itchy nuisance — they're a health issue. Blacklegged (deer) ticks are established throughout Central New York and carry Lyme disease, and cases have climbed across the region. Mosquitoes breed in any standing water and make a yard unusable on summer evenings. Both are yard problems before they're people problems, which is exactly where they can be managed.",
      "Our seasonal program reduces mosquito and tick pressure around your property by treating the shaded, humid, and brushy areas where they live and breed — tree lines, leaf litter, tall grass, and standing water. It's designed to give you your yard back through the season and to lower the risk of a tick bite for your family and pets.",
    ],
    signsTitle: "Signs you need mosquito & tick service",
    signs: [
      "You can't use the yard at dusk without getting bitten.",
      "You back up to woods, a field, a creek, or tall grass — prime tick and mosquito habitat.",
      "You've found ticks on family members or pets after being in the yard.",
      "Standing water collects somewhere on the property — gutters, low spots, containers, or old tires.",
      "You have kids or pets who spend time outdoors through the summer.",
    ],
    process: [
      { step: "Property inspection", detail: "We identify breeding and harborage areas — standing water for mosquitoes, and shaded leaf litter, tall grass, and tree lines for ticks." },
      { step: "Targeted treatment", detail: "We treat the resting and breeding zones where these pests actually live, focusing on the yard perimeter, plantings, and damp shade rather than blanketing open lawn." },
      { step: "Source reduction guidance", detail: "We point out the standing-water sources and landscaping conditions feeding the problem so treatment lasts longer." },
      { step: "Recurring seasonal visits", detail: "Because both pests reproduce all season, ongoing treatments through the warm months keep pressure down as new generations emerge." },
      { step: "Tick-focus options", detail: "For properties with heavy tick pressure, we focus treatment on the wooded edges and leaf litter where deer ticks concentrate." },
    ],
    whatToExpect: [
      "This is a seasonal program, typically running spring through fall with treatments every few weeks as populations rebuild.",
      "You'll notice the biggest difference in the evening-use areas of the yard — patios, play areas, and near the tree line.",
      "No treatment eliminates every mosquito or tick, but a good program dramatically reduces pressure and bite risk.",
      "We combine treatment with simple source-reduction steps that multiply the results.",
    ],
    seasonality: [
      "Spring (Apr–May): ticks become active early — often before people expect them — and overwintered mosquito eggs begin hatching. Starting treatment early sets the tone for the season.",
      "Summer (Jun–Aug): mosquito peak. Warm, wet weather drives rapid breeding in any standing water.",
      "Fall (Sep–Nov): a second tick-activity peak. Adult deer ticks are active into late fall, even after the first frosts, so tick risk doesn't end with summer.",
    ],
    pricing: [
      "Mosquito and tick service is priced by property size and habitat — a small in-town lot is different from an acre backing onto woods. It's sold as a seasonal program rather than a one-time spray, because the pests keep reproducing all season.",
      "We'll give you honest pricing based on your actual property and pressure, and focus the program where it does the most good.",
    ],
    prevention: [
      "Eliminate standing water — empty containers, clean gutters, change birdbath water weekly.",
      "Keep grass short and create a mulch or gravel barrier between lawn and woods to reduce tick migration.",
      "Move woodpiles and bird feeders (which draw tick-carrying rodents and deer) away from play areas.",
      "Do tick checks on people and pets after time outdoors, especially at the wooded edge.",
    ],
    faqs: [
      { q: "When should mosquito and tick treatment start?", a: "Start in spring and continue through fall. Ticks are active earlier than most people expect — often by April — and mosquitoes ramp up as the weather warms. Early treatment sets up the whole season." },
      { q: "How serious is the Lyme disease risk here?", a: "Blacklegged (deer) ticks that carry Lyme are established throughout the Finger Lakes and Central New York, and cases have risen regionally. Reducing tick habitat in your yard is a meaningful way to lower your family's exposure." },
      { q: "Does one treatment last all summer?", a: "No. Mosquitoes and ticks keep reproducing all season, so the program uses treatments every few weeks. A single application would wear off and let populations rebuild." },
      { q: "Will this get rid of every mosquito and tick?", a: "No honest program eliminates every one — they move in from neighboring properties and wildlife. But treating the breeding and resting zones dramatically reduces pressure and makes the yard usable again." },
      { q: "Is the treatment safe for kids and pets?", a: "Yes. We use products and methods rated for residential yards and focus on the habitat areas — leaf litter, brush, standing water — rather than the open lawn where kids and pets play. We'll advise on brief re-entry timing." },
      { q: "What can I do myself to help?", a: "Eliminate standing water, keep grass short, put a barrier between lawn and woods, and move woodpiles and feeders away from living areas. These steps make professional treatment noticeably more effective." },
      { q: "Do ticks really stay active in the fall?", a: "Yes. Adult deer ticks have a second activity peak in fall and stay out even after the first frosts, so tick checks and treatment matter well past summer." },
      { q: "I only get bitten near the woods — can you just treat there?", a: "Absolutely. For properties with a wooded or brushy edge, we concentrate treatment on those tree lines and leaf-litter zones where ticks and mosquitoes actually concentrate." },
    ],
  },

  "bed-bug": {
    slug: "bed-bug",
    deepDive: {
      title: "Why bed bugs take more than one visit",
      paragraphs: [
        "Bed bugs are beatable, but they demand a methodical approach because of how they live and reproduce. Adults are flat and about the size of an apple seed, which lets them tuck into seams, cracks, screw holes, and the gaps behind baseboards and outlet covers — not just the mattress. They can go weeks between blood meals, so simply leaving a room empty does not starve them out on any practical timeline. And critically, their eggs are cemented in place and resist many treatments, which is the single biggest reason a one-and-done visit fails.",
        "A proper plan accounts for that egg stage. The initial service treats all the harborage points, and a follow-up visit catches the nymphs that hatch afterward, before they mature and lay eggs of their own. Preparation by the resident — laundering and drying bedding and clothing on high heat, reducing clutter, and giving access to the harborage areas — has an outsized effect on whether treatment succeeds, which is why we provide a clear checklist rather than leaving it to guesswork.",
        "The Ithaca area sees bed bugs regularly because of the ingredients that spread them: dense off-campus student housing around Cornell and Ithaca College, frequent move-in and move-out cycles in August and May, a steady flow of travelers, and the used furniture that circulates through a college town. None of that reflects on cleanliness — bed bugs infest spotless homes and hotels alike — but it does mean early action and, in apartments, coordinating with the landlord and adjacent units are what keep a small problem from becoming a building-wide one.",
      ],
    },
    intro: [
      "Bed bugs are the pest most likely to cost you sleep — literally and figuratively. They're not a sign of a dirty home; they're hitchhikers that travel in on luggage, used furniture, and belongings, and they spread easily between units in apartment buildings. In Ithaca, the combination of dense student housing, frequent move-in/move-out cycles around Cornell and Ithaca College, and a steady flow of travelers makes bed bugs a recurring reality — and one where discretion and speed both matter.",
      "We find and eliminate bed bug infestations with thorough inspection, treatment, and follow-up, and we know how to work within a rental situation — including the tenant and landlord responsibilities New York law spells out. Because bed bugs hide in tiny cracks and their eggs resist many treatments, real elimination takes a methodical approach and at least one follow-up, not a single spray.",
    ],
    signsTitle: "Signs of bed bugs",
    signs: [
      "Rows or clusters of small, itchy bites, often on skin exposed while sleeping.",
      "Small rust or blood-colored spots on sheets, mattress seams, or the box spring.",
      "Tiny dark fecal spots along mattress seams, headboards, and baseboards.",
      "Shed skins (casings) or actual bugs — flat, reddish-brown, apple-seed sized — in mattress seams and cracks.",
      "A sweet, musty odor in heavily infested rooms.",
    ],
    process: [
      { step: "Inspection", detail: "We thoroughly inspect the bedroom and adjacent areas — mattress and box spring seams, headboard, furniture joints, baseboards, and outlets — to confirm bed bugs and map the extent." },
      { step: "Treatment plan & prep", detail: "We give you a clear preparation checklist (laundering, decluttering) that makes treatment far more effective, and choose a treatment approach matched to the infestation." },
      { step: "Targeted treatment", detail: "We treat all harborage points — where they hide, not just where you were bitten — because bed bugs tuck into the smallest cracks." },
      { step: "Follow-up", detail: "Bed bug eggs resist many treatments, so a follow-up visit is essential to catch newly hatched bugs and confirm elimination." },
      { step: "Verification", detail: "We confirm the infestation is cleared and advise on protecting against reintroduction, including mattress encasements and inspection habits." },
    ],
    whatToExpect: [
      "Plan on at least two visits — the follow-up is not optional with bed bugs, because eggs hatch after the first treatment.",
      "Preparation matters: following the prep checklist directly affects whether treatment succeeds.",
      "We can keep service discreet, which matters for renters and multi-unit buildings.",
      "For apartments, treating adjoining units and coordinating with the landlord prevents bugs from simply migrating back.",
    ],
    seasonality: [
      "Bed bugs live indoors and are active year-round in Central New York — they don't have a season the way outdoor pests do.",
      "Travel-heavy periods (holidays, summer trips) and the August/May move cycles around Cornell and IC are common times for infestations to start and spread.",
      "Because they don't die off in winter, an untreated infestation only grows — waiting never helps with bed bugs.",
    ],
    pricing: [
      "Bed bug treatment is priced by the number of rooms and the severity of the infestation, and it's quoted as a program including the required follow-up rather than a single visit — because one visit doesn't end a bed bug problem.",
      "We give you a clear, honest quote after inspection. For renters, we can document the infestation and treatment, which is often needed for landlord and habitability purposes.",
    ],
    prevention: [
      "Inspect used furniture and mattresses before bringing them in — a leading source in student rentals.",
      "Use mattress and box-spring encasements to eliminate hiding spots and make monitoring easy.",
      "When traveling, keep luggage off beds and floors and inspect it before unpacking at home.",
      "In apartments, report suspected bed bugs early — they spread between units the longer they're ignored.",
    ],
    faqs: [
      { q: "I rent — who is responsible for bed bug treatment?", a: "In New York, landlords are generally responsible for pest infestations, including bed bugs, under the Warranty of Habitability (Real Property Law §235-b). We can document the infestation and treatment and work with your landlord or property manager." },
      { q: "Does bed bug treatment really need a follow-up visit?", a: "Yes. Bed bug eggs resist many treatments and hatch after the initial service, so a follow-up is essential to catch the new bugs and confirm elimination. Any honest treatment plan includes it." },
      { q: "Are bed bugs a sign that my home is dirty?", a: "No. Bed bugs are hitchhikers that travel in on luggage, used furniture, and belongings, and they infest spotless homes and hotels alike. It's about exposure, not cleanliness." },
      { q: "Can you keep the service discreet?", a: "Yes. We understand discretion matters, especially in rentals and multi-unit buildings, and we can keep visits and vehicles low-profile." },
      { q: "How do I prepare for treatment?", a: "We give you a specific prep checklist — typically laundering bedding and clothing on high heat, reducing clutter, and providing access to harborage areas. Following it closely is one of the biggest factors in success." },
      { q: "How did I get bed bugs?", a: "Common sources in the Ithaca area are used furniture and mattresses, travel, and spread between apartment units. In student housing, move-in/move-out season is a frequent starting point." },
      { q: "Will one room's treatment fix the whole apartment?", a: "Not always. Bed bugs migrate, especially in multi-unit buildings, so we inspect adjacent areas and recommend treating connected units and coordinating with the landlord to prevent reintroduction." },
      { q: "Do I have to throw out my mattress?", a: "Usually not. Treatment plus a mattress encasement typically saves the mattress and turns it into a monitored, bug-free surface. We'll tell you honestly if something is too infested to keep." },
    ],
  },
};

export const getServiceContent = (slug: string): ServiceContent | undefined =>
  serviceContent[slug];
