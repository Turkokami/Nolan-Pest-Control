/**
 * service-content-phase2.ts — long-form content for the 14 NEW services (audit §8.3 "add fourteen").
 * P1 services get full treatment; P2/P3 get solid, publishable medium-length pages flagged for
 * later expansion. Same ServiceContent shape as the base 8, so the service template renders them
 * identically. Merged into the getter alongside the base content.
 */
import type { ServiceContent } from "./service-content";

export const serviceContentPhase2: Record<string, ServiceContent> = {
  // ---------------- P1 ----------------
  "cluster-fly-control": {
    slug: "cluster-fly-control",
    deepDive: {
      title: "The pest that owns September in upstate New York",
      paragraphs: [
        "Cluster flies are the defining fall pest of the Finger Lakes, and almost every rural and suburban home here deals with them. They are slightly larger and slower than a house fly, with a faint golden sheen, and they get their name from the way they gather in clusters on warm, sunny walls — usually the south- and west-facing sides — on the first cool days of autumn. Unlike house flies, they are not tied to garbage or filth; their life cycle is tied to earthworms in the soil, which is why they are worst around lawns, fields, and open country rather than dense city blocks.",
        "The trouble starts when they look for a place to overwinter. Cluster flies work their way into wall voids, attics, and window frames through the smallest gaps, then spend the winter dormant in the structure. On warm winter and early-spring days, the heat of the house wakes them, and they emerge on the inside — which is why people find dozens of sluggish flies on upstairs windows in October and again in March. Once they are inside the walls, there is no spraying them out; the fix is a properly timed exterior barrier that stops them before they enter.",
        "That timing is everything. An exterior treatment applied in late summer to early fall, before the flies move in, is dramatically more effective than anything done once they are already overwintering in the structure. It is one of the easiest high-value pest problems to get ahead of in Central New York — and one Nolan builds a dedicated fall service around.",
      ],
    },
    intro: [
      "If you find clusters of slow, dark flies on your upstairs windows and sunny walls every fall — and again on the first warm days of spring — you have cluster flies. They are the most common fall invader in the Finger Lakes, and they come from the fields and lawns around your home, not from anything inside it.",
      "We treat cluster flies with a timed exterior barrier that stops them before they get into your walls and attic for the winter. Because they are impossible to spray out once they are inside the structure, the whole strategy is about sealing and treating the exterior at the right moment in late summer and early fall.",
    ],
    signsTitle: "Signs of cluster flies",
    signs: [
      "Dozens of slow, dark flies on upstairs windows in fall and again on warm days in late winter or spring.",
      "Clusters of flies on sunny, south- or west-facing exterior walls in September and October.",
      "Flies appearing indoors in cold months with no obvious food source.",
      "A faint sweet, buckwheat-honey odor where large numbers overwinter in a wall void.",
      "The problem returning to the same rooms year after year.",
    ],
    process: [
      { step: "Inspection", detail: "We identify the sun-exposed walls and entry points — gaps around windows, eaves, soffits, and utility lines — that cluster flies use to get inside." },
      { step: "Timed exterior barrier", detail: "We apply an exterior treatment to the walls, eaves, and entry points in the late-summer-to-fall window, before the flies move in — the timing that makes it work." },
      { step: "Entry-point attention", detail: "We note and, where included, seal the gaps around windows, soffits, and penetrations that let them into the wall voids." },
      { step: "Interior knockdown if needed", detail: "For flies already emerging indoors, we can reduce the active population, though the lasting fix is the exterior barrier for next season." },
      { step: "Fall program", detail: "Because it is a yearly, seasonal problem, cluster flies are best handled as a recurring fall service timed to CNY's calendar." },
    ],
    whatToExpect: [
      "The exterior barrier is most effective applied in late summer to early fall, ahead of the invasion.",
      "If flies are already in the walls, expect some to still emerge on warm days this season; the treatment sets up a much quieter next year.",
      "This pairs naturally with overwintering-pest service, since stink bugs and lady beetles invade on the same schedule.",
      "It is a recurring seasonal service — one fall treatment, timed right, does the heavy lifting.",
    ],
    seasonality: [
      "Late summer to early fall (late Aug–Sep): the critical treatment window, before flies move into the structure.",
      "Fall (Sep–Oct): peak invasion. Flies mass on warm walls and work into wall voids and attics.",
      "Winter and early spring (Jan–Apr): overwintering flies wake on warm days and emerge indoors on windows — the second wave people notice.",
    ],
    pricing: [
      "Cluster fly service is priced by home size and the amount of sun-exposed wall and entry-point area involved. It is sold as a timed seasonal treatment rather than an emergency call, because timing is what determines the result.",
      "Bundling cluster flies with overwintering-pest service (stink bugs, lady beetles, boxelder bugs) is usually the best value, since they invade together and are treated together.",
    ],
    prevention: [
      "Seal gaps around windows, soffits, eaves, and utility penetrations before late summer.",
      "Repair torn window and attic-vent screens.",
      "Ensure attic and gable vents are properly screened.",
      "Schedule the exterior barrier in the late-summer window rather than waiting for the flies to appear.",
    ],
    faqs: [
      { q: "Where do cluster flies come from?", a: "From the soil around your home. Their larvae develop as parasites of earthworms in lawns and fields, so cluster flies are worst around rural and suburban properties with open ground — not from garbage or anything inside your house." },
      { q: "Why can't I just spray the flies inside?", a: "Once cluster flies are overwintering in your wall voids and attic, spraying the ones you see does nothing about the rest. The effective approach is a timed exterior barrier that stops them from entering in the first place." },
      { q: "When should cluster fly treatment be done?", a: "Late summer to early fall, before the flies move into the structure. Treating the exterior at that moment is far more effective than anything done once they're already inside for the winter." },
      { q: "Why do they come back every spring?", a: "The flies that entered your walls in fall stay dormant through winter and wake on warm days, emerging indoors on windows in late winter and spring. Sealing and treating the exterior is what breaks the cycle." },
      { q: "Are cluster flies dangerous or dirty?", a: "No. They don't bite, breed in your home, or spread disease the way house flies can. They're a serious nuisance — sometimes by the hundreds — but not a health hazard." },
      { q: "Will one treatment get rid of them for good?", a: "Cluster flies are a yearly, seasonal problem driven by the fields around you, so they're best managed with a recurring fall treatment. One well-timed application dramatically reduces each season's invasion." },
      { q: "Do you treat the attic too?", a: "We focus on the exterior barrier and entry points, which is what keeps them out. For attics with heavy overwintering activity we address the entry gaps so they can't accumulate there." },
      { q: "Are cluster flies and house flies the same?", a: "No. Cluster flies are larger, slower, darker, and tied to overwintering in structures, while house flies breed in filth and are active in warm months. The treatment is completely different." },
    ],
  },

  "carpenter-ant-control": {
    slug: "carpenter-ant-control",
    deepDive: {
      title: "Why carpenter ants are the ant that matters in Central NY",
      paragraphs: [
        "Ask any pest professional in the Finger Lakes what the number-one ant is, and the answer is carpenter ants. Our cool, wet climate and older, wood-framed housing stock give them exactly what they want: wood that has been softened by moisture. They don't eat the wood the way termites do — they excavate smooth galleries in it to build their nests, hollowing out damp framing around leaky roofs, windows, sills, decks, and bathrooms over months and years.",
        "A carpenter ant infestation is really a network, not a single nest. There is a parent colony, usually outdoors in a stump, woodpile, or tree, and one or more satellite nests that workers set up in nearby structures — including inside your walls. The queen may never be in the part you can see. That is why spraying a trail of ants on the counter accomplishes nothing lasting, and why repellent sprays can actually make things worse by causing the colony to split into more satellite nests.",
        "Effective carpenter ant control means finding the nests, using non-repellent products and baits that workers carry back to share through the colony, and correcting the moisture that drew them in the first place. Left alone for years, an established colony can genuinely weaken structural wood, which is why this is a service worth doing properly rather than a can-of-spray afterthought.",
      ],
    },
    intro: [
      "Carpenter ants are the large black ants you see in Central New York homes, often at night or in early spring, and they're the ant most likely to cause real damage. They tunnel into damp or damaged wood to nest — around leaky sills, roof edges, decks, and bathrooms — and a generic ant spray does nothing about the colony producing them.",
      "We locate the parent and satellite nests, treat with products the colony carries back to the source, and point out the moisture conditions fueling the problem. This is a dedicated service because carpenter ants need a different, more thorough approach than nuisance ants.",
    ],
    signsTitle: "Signs of carpenter ants",
    signs: [
      "Large black ants (¼ to ½ inch) indoors, especially at night or on warm spring days.",
      "Small piles of sawdust-like shavings (frass) near woodwork, windowsills, or in the basement.",
      "A faint rustling sound inside walls or wood trim in a quiet room.",
      "Winged ants emerging indoors in spring, a sign of a mature nest nearby.",
      "Foraging trails to moisture or food sources in kitchens and bathrooms.",
    ],
    process: [
      { step: "Identification & inspection", detail: "We confirm carpenter ants and look for the structural nesting and moisture conditions that come with them." },
      { step: "Nest location", detail: "We trace trails and moisture to the parent nest and any satellite nests, indoors and out — the step that makes treatment last." },
      { step: "Non-repellent treatment & baiting", detail: "We treat voids, entry points, and the exterior perimeter with products and baits that workers carry back to affect the whole colony, not just foragers." },
      { step: "Moisture correction guidance", detail: "We point out the leaks, gutter problems, and wood-to-soil contact drawing them, so the conditions don't invite a new colony." },
      { step: "Follow-up", detail: "We confirm the colony is knocked down and re-treat if foragers persist." },
    ],
    whatToExpect: [
      "Results build over a couple of weeks as bait moves through the colony, rather than an instant kill of the visible ants.",
      "We'll flag any wood that looks damaged enough to warrant a closer structural look.",
      "Exterior perimeter treatment helps stop new colonies moving in from nearby trees and woodpiles.",
      "Covered under the guarantee — if the same nest keeps producing, we come back.",
    ],
    seasonality: [
      "Spring (Apr–Jun): prime season. Colonies wake, foragers appear, and winged reproductives may swarm — the best time to treat before satellites establish.",
      "Summer: peak activity, most visible at dusk. Storm moisture can expand nesting sites.",
      "Fall and winter: activity slows; ants overwinter in wall voids and sometimes appear on warm winter days, a sign of an indoor nest.",
    ],
    pricing: [
      "Carpenter ant treatment is priced by the extent of the infestation and whether structural nesting is involved — a single satellite nest is a smaller job than a colony spread through a moisture-damaged wall.",
      "We quote honestly after locating the nests, and if carpenter ants have caused damage that needs a carpenter, we'll tell you straight rather than paint over it.",
    ],
    prevention: [
      "Fix roof, gutter, and plumbing leaks promptly — carpenter ants need moisture-softened wood.",
      "Keep firewood off the ground and away from the house; trim branches touching the roof.",
      "Correct wood-to-soil contact on decks, porches, and siding.",
      "Seal gaps around windows, sills, and utility lines.",
    ],
    faqs: [
      { q: "How do I know these are carpenter ants and not regular ants?", a: "Carpenter ants are large — ¼ to ½ inch — and usually black. Sawdust-like frass near woodwork, activity at night, and winged ants indoors in spring all point to a carpenter ant colony nesting in the structure." },
      { q: "Do carpenter ants really damage a house?", a: "They can. They don't eat wood, but they excavate galleries in damp or damaged wood to nest, and an established colony left alone for years can weaken structural members. Moisture is always the common thread." },
      { q: "Why didn't the ant spray from the store work?", a: "Repellent sprays kill visible foragers and can split the colony into more satellite nests. We use non-repellent products and baits carried back to the nest, treating the source instead of the symptom." },
      { q: "What's the difference between carpenter ants and termites?", a: "Both damage wood, but carpenter ants leave clean galleries and sawdust-like frass, while termites eat wood and leave mud tubes. If you're buying or selling, our WDI inspection covers both." },
      { q: "Where are the ants nesting?", a: "Usually in moisture-damaged wood — around leaky roofs, gutters, window and door frames, decks, and bathroom or kitchen walls — with a parent nest often outdoors and satellites inside. We trace them to the source." },
      { q: "How long until they're gone?", a: "Trails thin within days, but fully affecting the colony through bait takes a couple of weeks. We follow up to confirm the nest is knocked down, not just the ants you were seeing." },
      { q: "Will they come back next year?", a: "Not if the nest is eliminated and the moisture that drew them is corrected. We treat the source and point out the leaks and wood-to-soil contact behind the problem." },
      { q: "Should I wait to see if they go away in winter?", a: "No. Carpenter ants overwinter inside heated walls and resume in spring, and the longer a colony works in damp framing, the more damage it does. Early treatment is cheaper and protects the wood." },
    ],
  },

  "bat-removal-exclusion": {
    slug: "bat-removal-exclusion",
    deepDive: {
      title: "Bats, New York law, and why timing matters",
      paragraphs: [
        "Bat work is the highest-value wildlife job in this region, and it is also the most regulated — for good reason. New York's bat species are beneficial, insect-eating animals, and several are protected. The little brown bat and big brown bat are the two you're most likely to find roosting in a Finger Lakes attic, entering through gaps at the roofline, ridge, gable vents, or where additions meet the original structure. A single gap the width of your thumb is enough.",
        "The legally and ethically correct way to remove bats is exclusion, not extermination. That means installing one-way devices that let bats leave to feed but not return, then sealing the entry points once the roost is empty. Critically, New York restricts bat exclusion during the maternity season — roughly May 1 through August 15 — because flightless pups in the roost would be trapped and die if the adults were excluded. Reputable operators respect that window; it's both the law and the humane approach.",
        "Because bats can carry rabies and their guano poses a health risk (histoplasmosis) when it accumulates, bat removal is not a DIY job. Done right, it combines humane one-way exclusion, thorough sealing of every secondary entry point, and — where droppings have built up — attic cleanup and decontamination. It's meticulous work, which is exactly why it commands the ticket it does and why it's worth hiring someone who does it correctly.",
      ],
    },
    intro: [
      "A bat in the house is alarming, and a colony roosting in your attic is a genuine health and structural concern. In Central New York, little brown and big brown bats commonly enter through gaps at the roofline, gable vents, and where additions meet the house. We remove them humanely and legally — and we work within New York's DEC restriction on exclusion during the maternity/pup season (roughly May 1–August 15).",
      "The right method is exclusion: one-way devices that let bats out to feed but not back in, followed by sealing every entry point once the roost is empty. Where guano has accumulated, we handle cleanup and decontamination. It's careful work, done to protect both your home and a protected, beneficial animal.",
    ],
    signsTitle: "Signs of a bat problem",
    signs: [
      "Bats seen flying out from the roofline, gable, or eaves at dusk.",
      "Dark, greasy staining around a gap where bats squeeze in and out.",
      "Piles of dark droppings (guano) in the attic or on the ground below an entry point.",
      "A bat that has gotten into the living space, especially in summer.",
      "Scratching or squeaking sounds in the attic or wall at dusk and dawn.",
    ],
    process: [
      { step: "Inspection", detail: "We identify the species, find the primary and secondary entry points, and assess the roost and any guano accumulation." },
      { step: "One-way exclusion", detail: "We install one-way devices at the active entries so bats can leave to feed but cannot get back in — the humane, legal method." },
      { step: "Sealing", detail: "Once the roost is confirmed empty, we seal all entry points with durable, bat-proof materials so they cannot return." },
      { step: "Cleanup & decontamination", detail: "Where guano has accumulated, we clean and decontaminate the affected area and can address soiled insulation (attic restoration)." },
      { step: "Timing to DEC rules", detail: "We schedule exclusion outside the maternity-season restriction (roughly May 1–Aug 15) so flightless pups are never trapped." },
    ],
    whatToExpect: [
      "Exclusion takes place over several days, since the one-way devices need time to let the whole colony out.",
      "We schedule around New York's maternity-season restriction; emergency single-bat removal from living space can be handled anytime.",
      "If a bat is in your living space and contact can't be ruled out, we advise on rabies-exposure safety and capture for testing.",
      "Sealing is comprehensive — bats exploit any missed gap, so thoroughness is the whole job.",
    ],
    seasonality: [
      "Spring (Apr): bats return to summer roosts; the pre-maternity window is a good time for exclusion.",
      "Maternity season (~May 1–Aug 15): exclusion is restricted because flightless pups would be trapped. We handle emergencies but schedule full exclusion around this window.",
      "Late summer to fall (mid-Aug–Oct): prime exclusion season, after pups can fly and before bats leave for winter — the ideal time to seal them out for good.",
    ],
    pricing: [
      "Bat exclusion is priced by the size of the structure, the number of entry points, and the extent of any cleanup. It's a meticulous job — thorough sealing is what prevents return — so it's a real investment rather than a quick treatment.",
      "Attic cleanup, decontamination, and insulation restoration are quoted based on guano accumulation and can be bundled with the exclusion when needed.",
    ],
    prevention: [
      "Seal roofline, ridge, gable-vent, and soffit gaps before and after the roosting season.",
      "Screen gable and attic vents with bat-proof mesh.",
      "Address gaps where additions, dormers, and chimneys meet the main structure.",
      "Have exclusion done in the fall window so the house is sealed before next spring.",
    ],
    faqs: [
      { q: "Is it legal to just kill or trap bats in New York?", a: "No. New York's bats are beneficial and several are protected, and killing or improperly excluding them is not permitted. The correct method is humane one-way exclusion, and it's restricted during the maternity season when flightless pups are present." },
      { q: "When can bat exclusion be done?", a: "Outside the maternity-season restriction — roughly May 1 through mid-August — when pups can't yet fly. The ideal window is late summer into fall. Emergency removal of a single bat from living space can be handled any time." },
      { q: "Are bats in the attic actually dangerous?", a: "They can carry rabies, and accumulated guano can pose a respiratory health risk (histoplasmosis). That, plus the difficulty of doing exclusion correctly, is why it's not a DIY job." },
      { q: "What if a bat is flying around inside my house?", a: "Don't release it outside if anyone may have been bitten or exposed while sleeping — capture is needed for rabies testing. Call us and we'll walk you through safe handling and come remove it." },
      { q: "How do bats get into the attic?", a: "Through surprisingly small gaps — at the roofline, ridge, gable vents, soffits, and where dormers, chimneys, and additions meet the house. A thumb-width opening is enough, which is why thorough sealing matters." },
      { q: "Will they come back after exclusion?", a: "Not if every entry point is sealed. Bats are persistent and exploit any missed gap, so comprehensive sealing — not just the main entry — is the core of the job and what the guarantee covers." },
      { q: "Do you clean up the droppings?", a: "Yes. Where guano has accumulated we clean and decontaminate the area and can restore soiled insulation as an add-on. It's both a health and an odor issue." },
      { q: "How long does the whole process take?", a: "Exclusion runs over several days so the one-way devices can let the entire colony out before sealing. We confirm the roost is empty before closing the final entries." },
    ],
  },

  "rodent-exclusion-sealing": {
    slug: "rodent-exclusion-sealing",
    deepDive: {
      title: "Sealing is what makes rodent control last",
      paragraphs: [
        "Most people who call about mice have already tried traps, and the traps worked — for a while. Then the following fall, the mice were back. That cycle is the single most common rodent story in Central New York, and it has one cause: the entry points were never sealed. Trapping clears the population that's inside today; exclusion sealing closes the doors so the next wave can't replace them when cold weather pushes rodents toward the warmth.",
        "A house mouse can pass through a gap about a quarter-inch wide, and our older homes are full of them: the seam where wood framing meets a stone or block foundation, the holes drilled for water, gas, electric, and cable, worn door sweeps, unscreened crawlspace and gable vents, and the rooflines where dormers and additions meet the original structure. Effective exclusion is a systematic hunt for every one of these, sealed with materials rodents can't chew through — hardware cloth, sealed metal, and appropriate sealants.",
        "There's a bonus most homeowners don't expect: the same gaps that let mice in let heated air out. A thorough exclusion job measurably tightens the house, which is why we treat it as core infrastructure rather than an upsell. It's the difference between paying for mouse control once and paying for it every single fall.",
      ],
    },
    intro: [
      "If you trap mice every fall and they keep coming back, the problem isn't the traps — it's the open entry points. Rodent exclusion is the sealing work that turns a temporary fix into a permanent one, closing the gaps mice and rats use to get into your home.",
      "We systematically find and seal every entry point with rodent-proof materials, from the foundation sill to the roofline. It's offered as its own service because for many older Central New York homes, sealing — not trapping — is what actually ends the problem.",
    ],
    signsTitle: "Signs you need exclusion, not just traps",
    signs: [
      "Mice return every fall no matter how many you trap.",
      "You have an older home with a stone or block foundation and visible gaps at the sill.",
      "You can see or feel drafts around utility penetrations, vents, or the garage.",
      "Droppings appear in new areas even after trapping knocks the numbers down.",
      "You back up to fields, woods, or outbuildings that constantly resupply rodents.",
    ],
    process: [
      { step: "Full exclusion inspection", detail: "We inspect the entire building envelope — foundation, sill, penetrations, doors, vents, and roofline — and map every potential entry point." },
      { step: "Population clearing", detail: "We trap and remove the rodents currently inside so we're not sealing them in." },
      { step: "Sealing", detail: "We seal each entry with rodent-proof materials — hardware cloth, sealed metal, and durable sealants — installed to withstand gnawing and weather." },
      { step: "Verification", detail: "We confirm activity has stopped and the seals are holding, and note any areas to monitor." },
      { step: "Optional monitoring", detail: "For high-pressure rural and lake properties, we can fold ongoing monitoring into a preventative plan." },
    ],
    whatToExpect: [
      "Exclusion is often scheduled after an initial trapping visit so the interior population is cleared first.",
      "We'll show you the entry points we find and seal, so you can see exactly what you're paying for.",
      "A thorough job also tightens the home against drafts — a real energy side benefit.",
      "Done properly, it ends the annual fall reinfestation rather than just pausing it.",
    ],
    seasonality: [
      "Late summer to early fall: the best time to seal, before the cold pushes rodents indoors.",
      "Fall (Sep–Nov): peak rodent entry — sealing now prevents the winter problem.",
      "Any season: exclusion is effective year-round, but doing it before winter delivers the most immediate relief.",
    ],
    pricing: [
      "Exclusion is priced by the size of the home and the number and difficulty of entry points — an older house with a fieldstone foundation and many penetrations is a larger job than a tight modern build.",
      "We'll tell you honestly whether trapping alone will hold or whether sealing is needed to actually end the problem. We don't sell exclusion you don't need.",
    ],
    prevention: [
      "Seal utility penetrations, dryer vents, and foundation gaps before fall.",
      "Install and maintain tight door sweeps on entry and garage doors.",
      "Screen crawlspace, gable, and chimney vents.",
      "Keep firewood, brush, and bird seed away from the foundation.",
    ],
    faqs: [
      { q: "Why do the mice keep coming back every year?", a: "Because the entry points are still open. Trapping clears the current mice, but each fall the cold pushes a new group toward the warmth, and if the gaps remain, they simply move in. Sealing breaks that cycle." },
      { q: "How small a gap can a mouse use?", a: "About a quarter inch — roughly the width of a pencil. In older CNY homes that means the foundation sill, utility-line holes, worn door sweeps, and roofline gaps. We find and seal each one." },
      { q: "Is exclusion better than an ongoing bait plan?", a: "For a lasting fix, yes. Baiting manages numbers but doesn't stop entry; exclusion physically closes the doors. Many homes do best with exclusion as the foundation and light monitoring on top." },
      { q: "Do you clear the mice first or just seal?", a: "We clear the interior population first, then seal — so we're never trapping rodents inside the walls. Sealing an occupied home without removal can cause odor and die-off problems." },
      { q: "Will sealing really help with drafts and heating?", a: "Often noticeably. The same gaps rodents use let conditioned air escape, so thorough exclusion tightens the envelope. It's a genuine side benefit of doing the job well." },
      { q: "What materials do you use?", a: "Rodent-proof materials that stand up to gnawing and weather — hardware cloth, sealed metal flashing, and appropriate sealants — rather than steel wool or foam alone, which rodents can defeat." },
      { q: "Can you exclude an attached garage or crawlspace?", a: "Yes. Garages, crawlspaces, and additions are common entry routes and are included in a full exclusion inspection and sealing." },
      { q: "How long does exclusion last?", a: "Properly installed seals last for years. On high-pressure rural and lake properties we recommend occasional monitoring to catch any new gaps from settling or weather, which the guarantee supports." },
    ],
  },

  "overwintering-pests": {
    slug: "overwintering-pests",
    deepDive: {
      title: "The fall invasion: stink bugs, lady beetles, and friends",
      paragraphs: [
        "Every September and October, Central New York homes face a coordinated invasion. Brown marmorated stink bugs, Asian lady beetles, boxelder bugs, western conifer seed bugs, and cluster flies all do the same thing at the same time: as nights cool, they gather on warm, sunny exterior walls and work their way into wall voids, attics, and window frames to spend the winter dormant inside the structure. They don't feed or breed indoors — they're just using your house as a warm cave — but on warm winter and spring days they wake and emerge inside, sometimes by the dozens.",
        "These pests share a life cycle, an entry strategy, and a treatment, which is why it makes sense to handle them as one service rather than chasing each species separately. The brown marmorated stink bug is the most notorious — a shield-shaped invasive that releases an odor when disturbed — but the Asian lady beetle (which can bite and stain, unlike native ladybugs) and the boxelder bug are just as common on CNY siding in fall. Western conifer seed bugs round out the group in areas with evergreens.",
        "As with cluster flies, the winning move is timing. A properly timed exterior barrier applied in late summer to early fall, combined with sealing the gaps around windows, soffits, and utility lines, stops the invasion before it starts. Once they're in the walls, you can't spray them out — you can only reduce the ones that emerge and set up a better barrier for next year. Getting ahead of it is one of the highest-value fall services in the region.",
      ],
    },
    intro: [
      "Brown marmorated stink bugs, Asian lady beetles, boxelder bugs, western conifer seed bugs, and cluster flies invade Central New York homes together every fall — massing on warm siding and slipping into wall voids and attics to overwinter. Then they reappear indoors on warm winter and spring days.",
      "Our overwintering-pest service treats all of them as one problem, because they share a schedule and a solution: a timed exterior barrier plus sealing, applied before they get inside. It's the single easiest high-volume pest win to get ahead of each fall.",
    ],
    signsTitle: "Signs of overwintering pests",
    signs: [
      "Shield-shaped stink bugs or orange Asian lady beetles clustering on sunny exterior walls in fall.",
      "Bugs appearing indoors on warm days in winter and early spring.",
      "Boxelder bugs (black with red markings) massing on the south side of the house.",
      "A distinct odor when stink bugs or lady beetles are disturbed or vacuumed.",
      "The same rooms and windows affected year after year.",
    ],
    process: [
      { step: "Inspection", detail: "We identify the sun-exposed walls and the gaps around windows, soffits, eaves, and utility lines these pests use to get inside." },
      { step: "Timed exterior barrier", detail: "We treat the exterior walls, eaves, and entry points in the late-summer-to-fall window, before the invasion — the timing that makes it effective." },
      { step: "Sealing", detail: "We note and, where included, seal the entry gaps that let them into wall voids and attics." },
      { step: "Interior reduction if needed", detail: "For pests already emerging indoors, we can reduce the active population, with the exterior barrier setting up a quieter next season." },
      { step: "Fall program", detail: "Handled as a recurring seasonal service timed to the CNY calendar, often bundled with cluster fly service." },
    ],
    whatToExpect: [
      "The exterior barrier works best applied in late summer to early fall, ahead of the invasion.",
      "If they're already in the walls, some will still emerge on warm days this season; treatment sets up a much quieter next year.",
      "Vacuuming (not crushing) is the best way to handle the few that get inside — crushing stink bugs and lady beetles releases odor and stains.",
      "A recurring service — one well-timed fall treatment carries the season.",
    ],
    seasonality: [
      "Late summer to early fall (late Aug–Sep): the critical treatment window, before pests move into the structure.",
      "Fall (Sep–Oct): peak invasion on warm, sunny walls.",
      "Winter and early spring: overwintering pests wake on warm days and emerge indoors — the second wave people notice.",
    ],
    pricing: [
      "Overwintering-pest service is priced by home size and the amount of sun-exposed wall and entry area involved, and is sold as a timed seasonal treatment because timing determines the result.",
      "It's most cost-effective bundled with cluster fly service, since they invade together and share the same treatment.",
    ],
    prevention: [
      "Seal gaps around windows, soffits, eaves, and utility penetrations before late summer.",
      "Repair torn window and vent screens.",
      "Screen attic and gable vents.",
      "Schedule the exterior barrier in the late-summer window rather than waiting for the bugs to appear.",
    ],
    faqs: [
      { q: "What are all these bugs that show up in fall and spring?", a: "They're overwintering pests — brown marmorated stink bugs, Asian lady beetles, boxelder bugs, western conifer seed bugs, and cluster flies. They enter in fall to spend winter dormant in your walls and attic, then emerge indoors on warm days." },
      { q: "Can I just spray them when I see them inside?", a: "Once they're overwintering in the wall voids, spraying the ones you see doesn't reach the rest. The effective approach is a timed exterior barrier that stops them before they get in." },
      { q: "When should overwintering-pest treatment be done?", a: "Late summer to early fall, before the pests move into the structure. That timing is far more effective than anything done after they're already inside for the winter." },
      { q: "Are stink bugs and lady beetles harmful?", a: "They don't damage the house or breed indoors, but Asian lady beetles can bite and stain surfaces, and stink bugs release an odor when crushed. They're mainly a large-scale nuisance." },
      { q: "Should I vacuum or crush them?", a: "Vacuum them — crushing stink bugs and lady beetles releases odor and can stain. Empty the vacuum promptly so the smell doesn't linger." },
      { q: "Why does this happen every year?", a: "The pests that entered your walls in fall wake and emerge on warm days, and each fall a new wave arrives from outside. Sealing and treating the exterior at the right time breaks the cycle." },
      { q: "Is this the same as cluster fly service?", a: "It's closely related — cluster flies are one of the overwintering pests, and they invade on the same schedule. We usually treat them together for the best value." },
      { q: "Will one treatment solve it?", a: "It's a yearly seasonal problem, so it's best handled with a recurring fall treatment. One well-timed application dramatically reduces each season's invasion." },
    ],
  },

  "wdi-inspection-real-estate": {
    slug: "wdi-inspection-real-estate",
    deepDive: {
      title: "The NPMA-33 inspection nobody local is selling",
      paragraphs: [
        "When a home changes hands, lenders and buyers often require a wood-destroying-insect (WDI) inspection — documented on the industry-standard NPMA-33 form. It's a focused inspection for evidence of termites, carpenter ants, powderpost beetles, and other wood-destroying insects, and it protects the buyer from inheriting a hidden structural problem and the lender from financing a compromised asset. In much of the country it's routine; in the Finger Lakes it's underserved, because no independent operator in the radius markets it as a dedicated service.",
        "That gap is an opportunity for everyone involved. Real estate agents and mortgage lenders need a reliable, responsive provider who can turn around a clean, professional NPMA-33 on a closing timeline. Buyers need someone who actually knows the local pressures — carpenter ants are far more likely than termites in most CNY homes, and an inspector who understands that difference gives a more useful report. Sellers benefit from getting ahead of issues before they derail a deal.",
        "Nolan offers WDI/real-estate inspections as a distinct service with fast scheduling and clear documentation. It's a low-competition, high-margin service that also opens a durable referral channel: an agent or lender who trusts your reports sends every client your way. It's one page on the website that can open a whole B2B pipeline.",
      ],
    },
    intro: [
      "Buying or selling a home in the Finger Lakes? A wood-destroying-insect (WDI) inspection — documented on the standard NPMA-33 form — is often required by lenders and smart for buyers. It checks for evidence of termites, carpenter ants, powderpost beetles, and other wood-destroyers, and it's the report your agent or lender is asking for.",
      "We provide fast, professional WDI inspections with clear NPMA-33 documentation on your closing timeline. It's a dedicated service because real-estate transactions run on deadlines — and because knowing local pressure (carpenter ants far more than termites in most CNY homes) makes for a more useful report.",
    ],
    signsTitle: "When you need a WDI inspection",
    signs: [
      "Your lender or mortgage program requires a WDI/termite inspection to close.",
      "You're buying a home and want to rule out hidden wood-destroying-insect damage.",
      "You're selling and want to get ahead of any issues before they threaten the deal.",
      "An older or wood-framed property with a history of moisture or carpenter ants.",
      "A real estate agent or lender needs a reliable inspection provider on a timeline.",
    ],
    process: [
      { step: "Scheduling", detail: "We book quickly around your closing date — timelines are the whole point of this service." },
      { step: "Inspection", detail: "We inspect accessible areas for evidence of termites, carpenter ants, powderpost beetles, and other wood-destroying insects, inside and out." },
      { step: "NPMA-33 report", detail: "We document findings on the industry-standard NPMA-33 form your lender and agent expect." },
      { step: "Findings review", detail: "If we find evidence of activity or damage, we explain it clearly and outline treatment options." },
      { step: "Treatment coordination", detail: "Where treatment is needed, we can handle it directly — carpenter ant, termite, or beetle service — so the deal stays on track." },
    ],
    whatToExpect: [
      "Fast turnaround on the NPMA-33 form to fit closing deadlines.",
      "A clear report that distinguishes old, inactive evidence from active infestation.",
      "Honest local context — in most CNY homes, carpenter ants and moisture are the real risk, not termites.",
      "A single provider who can both inspect and, if needed, treat, so you're not chasing two companies.",
    ],
    seasonality: [
      "WDI inspections run year-round on the real-estate calendar — closings don't wait for a season.",
      "Spring and summer bring the busiest real-estate activity and the most visible insect evidence.",
      "Winter inspections rely on physical evidence (galleries, frass, damage) rather than active foraging, which is a normal part of the report.",
    ],
    pricing: [
      "WDI/real-estate inspections are a flat professional service priced for the property, with clear NPMA-33 documentation included. Agents and lenders who refer regularly can arrange a standing relationship.",
      "If the inspection turns up activity, we quote any needed treatment separately and transparently so you can make an informed decision before closing.",
    ],
    prevention: [
      "For sellers: address known moisture and carpenter-ant issues before listing.",
      "Keep firewood and mulch away from the foundation and correct wood-to-soil contact.",
      "Fix roof, gutter, and plumbing leaks that soften wood and attract insects.",
      "Keep documentation of any prior treatments to share with buyers.",
    ],
    faqs: [
      { q: "What is an NPMA-33 form?", a: "It's the industry-standard wood-destroying-insect inspection report used nationwide for real-estate transactions. Lenders and buyers rely on it to document whether there's evidence of termites, carpenter ants, or other wood-destroying insects." },
      { q: "Do I really need a WDI inspection to buy a home?", a: "Many lenders and loan programs require one, and even when it's optional it's smart protection against inheriting hidden structural damage. Your agent or lender will tell you if it's required for your closing." },
      { q: "How fast can you turn it around?", a: "We schedule around your closing timeline and deliver the NPMA-33 promptly — fast, reliable turnaround is the core of this service." },
      { q: "Are termites even a problem in Central New York?", a: "Less than in the South, but eastern subterranean termites do occur here. In most CNY homes, carpenter ants and moisture-related wood damage are the more common findings — which is why local knowledge matters in the report." },
      { q: "What if you find something?", a: "We document it clearly, distinguish old evidence from active infestation, and outline options. Because we also treat these pests, we can handle any needed work directly to keep your closing on schedule." },
      { q: "Can you work with my real estate agent or lender?", a: "Yes. We regularly coordinate with agents and lenders and can become a standing referral provider, delivering consistent, professional reports on their clients' timelines." },
      { q: "Does the inspection cover the whole house?", a: "It covers the readily accessible areas where wood-destroying-insect evidence appears, inside and out, as defined by the NPMA-33 standard. We note any areas that were inaccessible." },
      { q: "Is the inspection the same as a home inspection?", a: "No. A WDI inspection is a focused wood-destroying-insect inspection documented on the NPMA-33 form. It's separate from a general home inspection and specifically addresses insect activity and damage." },
    ],
  },

  // ---------------- P2 / P3 (solid medium pages; expand as demand warrants) ----------------
  "wildlife-removal": {
    slug: "wildlife-removal",
    deepDive: {
      title: "Humane, legal nuisance-wildlife control in Central NY",
      paragraphs: [
        "Squirrels, raccoons, skunks, and woodchucks are the nuisance wildlife Central New York homeowners deal with most, and each brings its own risks — attic and chimney intrusion, chewed wiring, digging under decks and sheds, and, with raccoons and skunks, disease and odor concerns. New York regulates how wildlife may be handled, so the right approach combines humane removal with the exclusion and repairs that keep animals from simply returning.",
        "Our wildlife service focuses on getting the animal out, sealing the entry or den it was using, and cleaning up the mess it left. Trapping alone rarely solves a wildlife problem for long — like rodents, wildlife exploit the same access points season after season, so the durable fix is removal plus exclusion. For attic intrusions, we can also handle the insulation cleanup that follows.",
      ],
    },
    intro: [
      "From squirrels in the attic to a skunk under the deck, nuisance wildlife is disruptive, destructive, and sometimes a health risk. We remove the animal humanely and legally, then seal the entry points and dens so it can't come back.",
      "This is the hub for our wildlife services — squirrels, raccoons, skunks, and woodchucks — each of which also has its own dedicated approach. The common thread is removal plus exclusion, because getting the animal out only lasts if the way back in is closed.",
    ],
    signsTitle: "Signs of a wildlife problem",
    signs: [
      "Scratching, thumping, or scurrying in the attic, walls, or chimney.",
      "Chewed entry holes at the roofline, soffit, or gable vent.",
      "Digging or burrows under a deck, shed, porch, or foundation.",
      "Overturned trash, damaged gardens, or torn soffits and screens.",
      "Odor, droppings, or nesting material in an attic or crawlspace.",
    ],
    process: [
      { step: "Inspection", detail: "We identify the species, locate the entry point or den, and assess the damage and any cleanup needed." },
      { step: "Humane removal", detail: "We remove the animal using methods appropriate and legal for the species in New York." },
      { step: "Exclusion & repair", detail: "We seal the entry point or secure the den area so the animal — and others — can't return." },
      { step: "Cleanup", detail: "We address droppings, nesting material, and soiled insulation where needed (attic restoration)." },
      { step: "Prevention advice", detail: "We point out the conditions attracting wildlife so the problem doesn't recur." },
    ],
    whatToExpect: [
      "Approach and timing depend on the species and where it's denning — we'll explain the plan up front.",
      "Exclusion and repair are what make removal last; trapping alone usually isn't enough.",
      "For attic intrusions, cleanup and insulation restoration can be handled as an add-on.",
      "We handle the animal humanely and within New York's wildlife regulations.",
    ],
    seasonality: [
      "Spring: denning and birthing season — animals seek attics and sheltered spaces to raise young.",
      "Summer and fall: active foraging and, for squirrels, a second push toward attic denning.",
      "Winter: animals seek warm shelter indoors and under structures, and activity concentrates in occupied dens.",
    ],
    pricing: [
      "Wildlife jobs are priced by species, the difficulty of removal, and how much exclusion, repair, and cleanup is involved. A single squirrel entry is a smaller job than a raccoon den with attic contamination.",
      "We quote clearly after inspection and prioritize the exclusion work that keeps the problem from returning.",
    ],
    prevention: [
      "Seal roofline, soffit, and vent gaps and cap the chimney.",
      "Screen or close off spaces under decks, sheds, and porches.",
      "Secure trash and remove outdoor food sources, including fallen bird seed.",
      "Trim branches that give roof access to squirrels and raccoons.",
    ],
    faqs: [
      { q: "Do you remove the animal humanely?", a: "Yes. We handle nuisance wildlife using methods appropriate and legal for each species in New York, and we focus on removal plus sealing the entry so it doesn't return." },
      { q: "Will trapping alone fix the problem?", a: "Rarely for long. Wildlife reuses the same entry points and dens, so the durable fix is removal combined with exclusion and repair of the access points." },
      { q: "Can you clean up after the animal?", a: "Yes. We address droppings, nesting material, and contaminated insulation, and can restore attic insulation as an add-on where needed." },
      { q: "There's an animal in my chimney — can you help?", a: "Yes. Chimneys are a common den site for raccoons and squirrels. We remove the animal, then cap and secure the chimney so it can't be used again." },
      { q: "Is wildlife in the attic a health risk?", a: "It can be — droppings and parasites carry health concerns, and chewed wiring is a fire risk. Prompt removal and cleanup reduce both." },
      { q: "How do I keep wildlife from coming back?", a: "Seal roof and vent gaps, cap the chimney, close off spaces under decks and sheds, secure trash, and trim overhanging branches. We handle the sealing and advise on the rest." },
    ],
  },

  "squirrel-removal": {
    slug: "squirrel-removal",
    deepDive: {
      title: "Squirrels in the attic: chew damage and insurance risk",
      paragraphs: [
        "Gray squirrels are the most common attic invader in Central New York, and flying squirrels — smaller, nocturnal, and often unnoticed for months — are a close second in wooded areas. They enter through roofline gaps, gable vents, and chewed soffits, frequently using overhanging branches as a highway. Once inside, they nest, and they gnaw — and squirrel-chewed wiring is a documented cause of house fires, which is why an attic squirrel problem is more than a noise nuisance.",
        "The fix is removal followed by exclusion: getting the squirrels out, then sealing every entry with materials they can't chew through. Because squirrels are active climbers and persistent chewers, sealing has to be thorough and durable. Where they've nested and left droppings, insulation cleanup restores the attic and removes the scent that can draw the next animal.",
      ],
    },
    intro: [
      "Squirrels in the attic mean nesting, noise, and — most seriously — chewed wiring that poses a fire risk insurers take seriously. In Central New York, gray and flying squirrels enter through roofline gaps, vents, and chewed soffits, often via overhanging branches.",
      "We remove the squirrels and seal the entry points with materials they can't chew, then address any chew damage and nesting mess. Removal without sealing just invites the next squirrel, so exclusion is the core of the job.",
    ],
    signsTitle: "Signs of squirrels in the attic",
    signs: [
      "Scampering and scratching in the attic or upper walls, usually at dawn and dusk.",
      "Chewed entry holes at the roofline, soffit, or gable vent.",
      "Nesting material and droppings in the attic.",
      "Chewed wiring, insulation, or stored items.",
      "Squirrels seen entering the roofline or running along branches to the roof.",
    ],
    process: [
      { step: "Inspection", detail: "We confirm squirrels, locate all entry points, and assess chew damage and nesting." },
      { step: "Removal", detail: "We remove the squirrels using one-way exclusion or trapping appropriate to the situation and the season." },
      { step: "Sealing", detail: "We seal roofline, soffit, and vent entries with durable, chew-resistant materials." },
      { step: "Damage & cleanup", detail: "We note chewed wiring for repair and clean nesting material and droppings, restoring insulation where needed." },
      { step: "Prevention", detail: "We trim-advise and secure vulnerable points so squirrels can't regain access." },
    ],
    whatToExpect: [
      "We time removal around denning season so young aren't trapped inside.",
      "Sealing must be thorough — squirrels chew, so any weak point gets tested.",
      "Chewed wiring should be inspected by an electrician; we flag what we find.",
      "Attic cleanup and insulation restoration are available as add-ons.",
    ],
    seasonality: [
      "Late winter to spring: primary denning/birthing season; squirrels seek attics for nests.",
      "Late summer to fall: a second denning push as a new generation looks for winter shelter.",
      "Winter: squirrels shelter in occupied attic nests, staying active in cold weather.",
    ],
    pricing: [
      "Squirrel jobs are priced by the number of entry points, the difficulty of access, and any cleanup and restoration. Sealing a single chewed vent is smaller than securing a whole compromised roofline.",
      "We prioritize durable sealing, since that's what prevents the far more expensive outcome of chewed wiring and repeat intrusions.",
    ],
    prevention: [
      "Trim branches back from the roof to remove the squirrels' highway.",
      "Screen gable and soffit vents with chew-resistant mesh.",
      "Seal roofline and fascia gaps before denning season.",
      "Cap the chimney and secure any attic penetrations.",
    ],
    faqs: [
      { q: "Are squirrels in the attic really a fire risk?", a: "Yes. Squirrels gnaw constantly, and chewed wiring is a documented cause of house fires. That's the main reason not to ignore attic squirrels, beyond the noise and mess." },
      { q: "How are they getting in?", a: "Through roofline gaps, gable and soffit vents, and chewed fascia — often reached by branches overhanging the roof. We locate every entry and seal it." },
      { q: "Will they come back after removal?", a: "Not if the entries are sealed with chew-resistant materials. Squirrels test weak points, so thorough, durable sealing is what makes removal last." },
      { q: "Do you handle flying squirrels?", a: "Yes. Flying squirrels are smaller, nocturnal, and often go unnoticed, but the approach is the same — removal plus thorough exclusion." },
      { q: "Can you clean up the attic afterward?", a: "Yes. We remove nesting material and droppings and can restore soiled insulation as an add-on, which also removes scent that attracts new animals." },
      { q: "What about chewed wires?", a: "We flag any chewed wiring we find so you can have an electrician assess and repair it. Sealing the squirrels out prevents further damage." },
    ],
  },

  "raccoon-removal": {
    slug: "raccoon-removal",
    deepDive: {
      title: "Raccoons in the attic or chimney: strength, mess, and health risk",
      paragraphs: [
        "Raccoons are strong, clever, and destructive, and in Central New York they commonly den in attics and chimneys — especially females looking for a safe place to raise a litter in spring. They can tear open soffits, vents, and roof edges, and once inside they leave substantial droppings that carry a specific health concern: raccoon roundworm, whose eggs can be hazardous to humans and require careful cleanup.",
        "Because of their strength and the health considerations, raccoon removal is not a DIY job. The correct approach is removal — accounting for the strong likelihood of young in spring and summer — followed by heavy-duty sealing and repair of the damage they caused, and proper cleanup and decontamination of the den. Raccoons return to reliable den sites, so securing the structure is essential.",
      ],
    },
    intro: [
      "Raccoons denning in an attic or chimney bring real destruction and a genuine health risk — including raccoon roundworm in their droppings. In Central New York they often move into attics and chimneys in spring to raise young, tearing open soffits, vents, and roof edges to get in.",
      "We remove raccoons safely, account for the likelihood of young, then repair and seal the entry with heavy-duty materials and clean and decontaminate the den. Their strength and the health concerns make this a job for professionals.",
    ],
    signsTitle: "Signs of a raccoon",
    signs: [
      "Heavy thumping and movement in the attic or chimney, usually at night.",
      "Large torn openings at the soffit, vent, or roof edge.",
      "Substantial droppings in the attic (a health hazard — don't disturb them).",
      "Chittering or the sounds of young in spring and summer.",
      "Overturned trash and damaged gardens outside.",
    ],
    process: [
      { step: "Inspection", detail: "We confirm raccoons, locate the den and entry, and check for young, which is common in spring and summer." },
      { step: "Removal", detail: "We remove the raccoon(s) using humane, legal methods, ensuring any young are accounted for." },
      { step: "Heavy-duty sealing & repair", detail: "We repair the torn entry and secure it with materials strong enough to keep raccoons out." },
      { step: "Cleanup & decontamination", detail: "We remove droppings and nesting material and decontaminate the den, addressing the roundworm health risk." },
      { step: "Chimney capping", detail: "For chimney dens, we install a proper cap so it can't be reused." },
    ],
    whatToExpect: [
      "In spring and summer we plan for the near-certainty of young in the den.",
      "Sealing must be heavy-duty — raccoons are strong enough to defeat light repairs.",
      "Droppings require careful, protected cleanup due to roundworm; don't attempt it yourself.",
      "Attic cleanup and insulation restoration are available where contamination is heavy.",
    ],
    seasonality: [
      "Spring (Mar–Jun): peak denning and birthing — females seek attics and chimneys for litters.",
      "Summer: young grow in the den; removal must account for them.",
      "Fall and winter: raccoons seek warm shelter, and attic and chimney dens stay in use.",
    ],
    pricing: [
      "Raccoon jobs are priced by the difficulty of removal, the presence of young, the repair required, and the cleanup involved — often a larger job than other wildlife because of their strength and mess.",
      "We quote clearly after inspection and prioritize secure repair and safe decontamination.",
    ],
    prevention: [
      "Cap the chimney with a sturdy, animal-proof cap.",
      "Repair and reinforce soffits, vents, and roof edges.",
      "Secure trash cans and remove outdoor food sources.",
      "Close off access under decks and porches.",
    ],
    faqs: [
      { q: "Why are raccoons so hard to remove myself?", a: "They're strong, clever, and often have young in the den, and their droppings carry raccoon roundworm, which requires careful cleanup. Between the strength and the health risk, it's a job for professionals." },
      { q: "Is raccoon droppings really a health hazard?", a: "Yes. Raccoon roundworm eggs in droppings can be hazardous to humans, so the den needs protected cleanup and decontamination rather than ordinary sweeping." },
      { q: "There are babies in my attic — what happens?", a: "In spring and summer that's common. We account for the young during removal and handle the situation humanely rather than sealing the mother out and leaving them behind." },
      { q: "Will they come back?", a: "Raccoons return to reliable dens, so secure, heavy-duty repair and chimney capping are essential. Done properly, sealing keeps them out." },
      { q: "Can you cap my chimney?", a: "Yes. Chimneys are a favorite raccoon den, and a proper cap both removes the den site and prevents future use — plus it keeps other wildlife out." },
      { q: "Do you clean up the mess?", a: "Yes. We remove droppings and nesting material, decontaminate the den, and can restore contaminated insulation as an add-on." },
    ],
  },

  "mole-vole-control": {
    slug: "mole-vole-control",
    deepDive: {
      title: "Moles and voles: two different lawn problems",
      paragraphs: [
        "Moles and voles are often blamed for each other's damage, but they're different animals with different fixes. Moles are insectivores that tunnel underground in search of grubs and earthworms, pushing up the raised ridges and volcano-shaped mounds that disfigure Central New York lawns. Voles are small rodents that feed on plants, creating surface runways in the grass and gnawing on roots, bulbs, and the bark of young trees and shrubs — damage that shows up especially after snow melts in spring.",
        "Because their biology differs, so does control. Mole management targets the tunneling animals and, where appropriate, the grub food source; vole management focuses on the rodents, their runways, and protecting plantings. Both have strong spring and fall demand in CNY, and both are frustrating to chase with home remedies, which is why a targeted professional approach saves a lot of trial and error.",
      ],
    },
    intro: [
      "Torn-up lawns, raised tunnels, surface runways, and damaged plantings usually mean moles or voles — two different pests often confused for one another. Moles tunnel for grubs and worms; voles are small rodents that eat plants and gnaw roots and bark.",
      "We identify which one you have and treat accordingly, with programs timed to their strong spring and fall activity in Central New York. Getting the identification right is half the battle, and it's where home remedies usually go wrong.",
    ],
    signsTitle: "Signs of moles or voles",
    signs: [
      "Raised tunnel ridges and volcano-shaped soil mounds across the lawn (moles).",
      "Narrow surface runways in the grass, visible especially after snowmelt (voles).",
      "Gnawing damage on the roots, bulbs, and lower bark of young plants and shrubs (voles).",
      "Spongy, uneven turf that gives underfoot (mole tunneling).",
      "Damage that worsens in spring and fall.",
    ],
    process: [
      { step: "Identification", detail: "We determine whether it's moles, voles, or both, since the treatment differs." },
      { step: "Targeted control", detail: "We deploy the appropriate control for the species — targeting tunneling moles, or the vole population and their runways." },
      { step: "Food-source guidance", detail: "For moles, we advise on the grub population that draws them; for voles, on protecting vulnerable plantings." },
      { step: "Monitoring", detail: "We monitor activity and adjust, since lawn pests can shift and rebuild." },
      { step: "Seasonal timing", detail: "We time treatment to spring and fall peaks for the best results." },
    ],
    whatToExpect: [
      "Correct identification comes first — moles and voles need different approaches.",
      "Results build as the population is reduced; lawns recover over the following weeks.",
      "Ongoing pressure from surrounding fields may call for seasonal maintenance.",
      "We'll advise on lawn and planting practices that make your property less inviting.",
    ],
    seasonality: [
      "Spring: damage becomes obvious as snow melts and animals resume active feeding and tunneling.",
      "Summer: mole activity follows soil moisture and grub availability.",
      "Fall: a second activity peak as animals prepare for winter — a key treatment window.",
    ],
    pricing: [
      "Mole and vole control is priced by property size and severity, and is often handled as a seasonal program because pressure from surrounding land can rebuild.",
      "We quote after identifying the species and assessing the property, and focus the program where the damage is happening.",
    ],
    prevention: [
      "Reduce lawn grubs, which draw moles.",
      "Keep mulch pulled back from tree and shrub bases to reduce vole cover and gnawing.",
      "Mow and manage tall grass near the lawn edge where voles shelter.",
      "Protect young trees with guards against vole bark damage over winter.",
    ],
    faqs: [
      { q: "How do I tell moles and voles apart?", a: "Moles push up raised tunnels and volcano-shaped mounds while hunting grubs and worms underground. Voles are small rodents that make narrow surface runways in the grass and gnaw roots, bulbs, and bark. The fixes differ, so identification matters." },
      { q: "Do moles eat my plants?", a: "No — moles eat insects like grubs and earthworms. The plant and root damage people blame on moles is usually voles, which are plant-eating rodents using the runways." },
      { q: "When is treatment most effective?", a: "Spring and fall, when both animals are most active. Fall treatment also protects plantings heading into winter, when voles gnaw bark under the snow." },
      { q: "Will they come back?", a: "Pressure from surrounding lawns and fields can bring new animals, so properties with ongoing exposure often do best with seasonal maintenance." },
      { q: "Can I just use a home remedy?", a: "Home remedies rarely work reliably and often target the wrong animal. A targeted professional approach based on correct identification saves a lot of frustration." },
      { q: "Is my lawn damage permanent?", a: "No. Once the population is controlled, lawns recover, and we advise on practices — grub reduction, mulch and grass management — that keep the property less inviting." },
    ],
  },

  "flea-control": {
    slug: "flea-control",
    deepDive: {
      title: "Breaking the flea life cycle",
      paragraphs: [
        "Fleas are frustrating because treating the adults you see is only a fraction of the problem. At any moment, the visible adult fleas are a small share of the population — the rest are eggs, larvae, and pupae developing in carpet, bedding, and the cracks where pets rest. The pupae in particular can lie dormant and resist treatment, then emerge days or weeks later, which is why a single spray so often seems to work and then fails.",
        "Effective flea control targets the whole cycle: treating the environment where the immature stages develop, timing to catch newly emerged adults, and coordinating with your pet's veterinary flea treatment. In Central New York, fleas are mainly a warm-season and pet-household problem, and they pair naturally with tick concerns — which is why we often address them alongside our tick service.",
      ],
    },
    intro: [
      "Fleas turn a pet household upside down, and treating the adults you see rarely ends it — most of the population is eggs, larvae, and pupae hidden in carpet and bedding. We break the whole life cycle with treatment timed to catch the stages a single spray misses.",
      "Flea control works best coordinated with your pet's veterinary treatment, and it pairs naturally with tick service for households spending time outdoors. We focus on the environment where fleas actually develop, not just the ones jumping now.",
    ],
    signsTitle: "Signs of fleas",
    signs: [
      "Pets scratching, biting, or licking excessively.",
      "Tiny dark specks (flea dirt) in pet bedding and fur.",
      "Small, fast-moving insects in carpet, rugs, and along baseboards.",
      "Bites around the ankles and lower legs on people.",
      "Flea activity concentrated where pets rest and sleep.",
    ],
    process: [
      { step: "Inspection", detail: "We confirm fleas and identify the areas where pets rest and the population is developing." },
      { step: "Environmental treatment", detail: "We treat carpet, bedding areas, and harborage where eggs, larvae, and pupae develop — the bulk of the population." },
      { step: "Timing for emergence", detail: "We plan for the pupae that emerge after the first treatment, which is why a follow-up is often needed." },
      { step: "Pet-treatment coordination", detail: "We advise coordinating with your veterinarian's flea treatment so pets don't reintroduce fleas." },
      { step: "Prevention guidance", detail: "We recommend laundering, vacuuming, and ongoing pet treatment to keep fleas from returning." },
    ],
    whatToExpect: [
      "Plan for a follow-up — pupae emerging after the first treatment need to be caught.",
      "Vacuuming and laundering pet bedding before and after treatment significantly improves results.",
      "Pets should be treated by your vet in parallel, or they'll reintroduce fleas.",
      "You'll get simple prep steps that make the treatment far more effective.",
    ],
    seasonality: [
      "Warm months (late spring–fall): peak flea activity in Central New York.",
      "Fall: fleas often surge indoors as outdoor activity moves inside with cooling weather.",
      "Winter: heated homes can sustain indoor infestations year-round once established.",
    ],
    pricing: [
      "Flea treatment is priced by home size and severity and is usually quoted as a short program including a follow-up, because the life cycle can't be broken in a single visit.",
      "Coordinating with your pet's veterinary treatment is part of a successful plan, and we'll advise on the timing.",
    ],
    prevention: [
      "Keep pets on year-round veterinary flea prevention.",
      "Vacuum carpets and pet areas frequently and empty the vacuum outside.",
      "Wash pet bedding regularly on hot cycles.",
      "Treat tick and flea pressure together for outdoor pets.",
    ],
    faqs: [
      { q: "Why do fleas come back after I treat?", a: "Because most of the population is eggs, larvae, and pupae hidden in carpet and bedding, and pupae can emerge days or weeks later. Ending an infestation means treating the environment and following up, plus treating your pet." },
      { q: "Do I need to treat my pet too?", a: "Yes. Pets reintroduce fleas continuously, so veterinary flea treatment on the animal must run in parallel with treating the home. One without the other usually fails." },
      { q: "How should I prepare for treatment?", a: "Vacuum thoroughly, launder pet bedding on hot, and clear the floor of clutter in pet areas. We'll give you a specific checklist — prep has a big effect on results." },
      { q: "Is flea treatment safe for my pets?", a: "Yes, when done properly. We use products and methods rated for homes with pets and advise on any brief re-entry timing for treated areas." },
      { q: "When are fleas worst in Central NY?", a: "Warm months, with a common surge in fall as activity moves indoors. Heated homes can sustain infestations into winter once fleas are established." },
      { q: "Can you treat fleas and ticks together?", a: "Yes. For pet households that spend time outdoors, we often address fleas alongside our mosquito and tick service, since the pressures overlap." },
    ],
  },

  "wasp-hornet-nest-removal": {
    slug: "wasp-hornet-nest-removal",
    deepDive: {
      title: "Fast, safe nest removal — including the hidden ones",
      paragraphs: [
        "When there's a wasp or hornet nest by a door, deck, or playset, the priority is fast, safe removal — and the nests that most need a professional are exactly the ones people are tempted to tackle themselves: yellowjacket nests in the ground or a wall void, and big, defended bald-faced hornet nests. A disturbed colony can deliver dozens of stings in seconds, a serious danger for anyone with an allergy.",
        "We remove wasp and hornet nests using proper protective equipment and timing, treating wall-void and ground nests so the whole colony is eliminated rather than just the visible entrance. This dedicated service exists because urgent stinging-insect calls need priority scheduling and the right gear — it's not a job for a ladder and a can of spray when the nest is large, hidden, or near people.",
      ],
    },
    intro: [
      "A wasp or hornet nest near where your family goes is an urgent problem, and the riskiest nests — yellowjackets in the ground or a wall, big bald-faced hornet nests — are the ones you shouldn't touch yourself. We remove them fast and safely, including the hidden wall-void and ground nests.",
      "We come with proper protective equipment and treat the nest so the colony is eliminated, not just the wasps at the entrance. Stinging-insect calls get priority scheduling, especially when there's an allergy risk in the household.",
    ],
    signsTitle: "When to call for nest removal",
    signs: [
      "A visible paper nest under an eave, on a branch, or in a shed or attic.",
      "Steady wasp or hornet traffic in and out of a soffit, wall gap, or ground hole.",
      "Yellowjackets around a specific spot in the yard, turning aggressive.",
      "Buzzing or vibration inside a wall, suggesting a hidden void nest.",
      "Any nest near a doorway, deck, playset, or a household member with a sting allergy.",
    ],
    process: [
      { step: "Identification", detail: "We identify the species and locate the nest, including hidden wall-void and ground nests." },
      { step: "Protective removal", detail: "We treat and remove the nest with proper protective equipment, timed to when the colony is least active." },
      { step: "Void treatment", detail: "For wall and ground nests, we treat the void so the whole colony is eliminated, not just the visible entrance." },
      { step: "Nest disposal", detail: "Where safe and accessible, we remove the physical nest so it isn't reused or scavenged." },
      { step: "Prevention advice", detail: "We point out the eaves and gaps to seal so nesting doesn't recur next season." },
    ],
    whatToExpect: [
      "Many nests are handled in a single visit; large or hidden ones may need a short follow-up.",
      "We time treatment to reduce activity and keep people and pets clear during and just after.",
      "Ground and wall-void nests are the riskiest and the ones you shouldn't try yourself.",
      "Households with a sting allergy get priority scheduling.",
    ],
    seasonality: [
      "Spring: queens start small, easy-to-remove nests — an ideal but often unnoticed window.",
      "Summer: colonies grow and nests become visible.",
      "Late summer to early fall: peak size and peak aggression, especially for yellowjackets — the busiest season for removal.",
    ],
    pricing: [
      "Nest removal is priced by species, nest location, and risk — an accessible paper-wasp nest is straightforward, while a yellowjacket nest deep in a wall void takes more work and care.",
      "We give clear pricing before we start, and we'd always rather you call than risk a reaction removing an aggressive nest yourself.",
    ],
    prevention: [
      "Seal soffit, eave, and siding gaps in spring before queens nest.",
      "Check sheds, playsets, and grills for early nests through summer.",
      "Keep outdoor trash covered and clean up food and sweet drinks.",
      "Don't seal an active wall-void entrance yourself — trapped wasps often chew into living space.",
    ],
    faqs: [
      { q: "Can you remove a nest in the wall or ground?", a: "Yes — and those are exactly the ones you shouldn't attempt yourself. We treat the void or ground nest so the whole colony is eliminated, with protective equipment and safe timing." },
      { q: "How fast can you come out?", a: "We prioritize stinging-insect calls, especially near doorways or where someone has a sting allergy. Call and we'll get you scheduled quickly." },
      { q: "Is it safe to spray a nest myself?", a: "For a small, exposed paper-wasp nest, sometimes — but ground and wall nests can produce dozens of stings when disturbed, and store spray often just angers a large colony. If there's allergy risk or the nest is hidden, call a professional." },
      { q: "Do you remove the nest or just kill it?", a: "Where it's safe and accessible, we remove the physical nest after treatment so it isn't reused or scavenged. Some wall-void nests are treated in place because opening the wall isn't warranted." },
      { q: "What about honeybees?", a: "We don't exterminate honeybees — they're beneficial. If you have a honeybee swarm, we'll point you to a beekeeper for relocation. We handle wasps, hornets, and yellowjackets." },
      { q: "Will they come back to the same spot?", a: "A removed nest isn't reused, but a good nesting location can attract new queens next spring. We point out the gaps to seal so it doesn't become a recurring spot." },
    ],
  },

  "termite-control": {
    slug: "termite-control",
    deepDive: {
      title: "Termites in Central New York: lower pressure, real risk",
      paragraphs: [
        "Termite pressure in the Finger Lakes is lower than in the South, but eastern subterranean termites do occur in Central New York, and where they're active they cause serious, hidden structural damage. They live in the soil and build mud tubes to reach wood, eating it from the inside out, so an infestation can progress for a long time before it's obvious. That combination — real but uncommon — means termites are worth checking for, especially during a home purchase, without the alarmism common in high-pressure regions.",
        "Because termites are frequently confused with carpenter ants here (which are far more common), correct identification matters. Termites eat wood and leave mud tubes and hollowed, soil-flecked galleries; carpenter ants excavate clean galleries and leave sawdust-like frass. We identify which you have, treat subterranean termites with appropriate soil and baiting methods, and provide the WDI inspection that real-estate transactions require.",
      ],
    },
    intro: [
      "Termite pressure is lower in Central New York than in the South, but eastern subterranean termites do occur here — and where they're active, the hidden structural damage is serious. They live in soil, build mud tubes to reach wood, and eat it from the inside out.",
      "We inspect for and treat subterranean termites with appropriate methods, and because termites are often confused with the far more common carpenter ant, we identify which you actually have. This service also feeds our WDI inspections for home closings.",
    ],
    signsTitle: "Signs of termites",
    signs: [
      "Mud tubes on foundation walls, piers, or crawlspace surfaces.",
      "Wood that sounds hollow or crumbles, with soil-flecked galleries inside.",
      "Discarded wings near windows or light sources after a spring swarm.",
      "Swarming insects in spring (termite swarmers vs. winged ants — we can tell them apart).",
      "Damage discovered during a renovation or home inspection.",
    ],
    process: [
      { step: "Inspection & identification", detail: "We confirm termites (vs. carpenter ants) and determine the extent of activity and damage." },
      { step: "Treatment", detail: "We treat subterranean termites with appropriate soil-treatment and/or baiting methods for the situation." },
      { step: "Conducive-condition guidance", detail: "We point out the moisture and wood-to-soil contact that support termite activity." },
      { step: "Documentation", detail: "For real-estate needs, we document findings on the NPMA-33 WDI form." },
      { step: "Follow-up/monitoring", detail: "We monitor to confirm the colony is controlled, since subterranean termites work out of sight." },
    ],
    whatToExpect: [
      "Correct identification comes first — most 'termite' calls in CNY turn out to be carpenter ants.",
      "Treatment targets the soil-dwelling colony, not just the wood you can see.",
      "For home purchases, we provide the NPMA-33 documentation lenders require.",
      "We give honest local context rather than high-pressure regional alarmism.",
    ],
    seasonality: [
      "Spring: termite swarms are most likely, the season you're most apt to see evidence.",
      "Summer and fall: activity continues underground and within wood, out of sight.",
      "Winter: activity slows but doesn't stop in heated structures; evidence-based inspection still applies.",
    ],
    pricing: [
      "Termite treatment is priced by the size of the structure and the treatment method required. Because CNY pressure is lower, we assess honestly rather than defaulting to the most expensive option.",
      "WDI inspections for real-estate transactions are a separate flat service; if an inspection finds activity, we quote treatment transparently.",
    ],
    prevention: [
      "Eliminate wood-to-soil contact around the foundation, deck, and porch.",
      "Keep firewood and mulch away from the structure.",
      "Correct moisture problems and ensure good drainage away from the foundation.",
      "Have a WDI inspection when buying an older or wood-framed home.",
    ],
    faqs: [
      { q: "Do we even have termites in Central New York?", a: "Yes, though less than the South. Eastern subterranean termites occur here and cause serious damage where active — but many 'termite' calls in CNY turn out to be the far more common carpenter ant, which is why identification matters." },
      { q: "How do I tell termites from carpenter ants?", a: "Termites eat wood and leave mud tubes and soil-flecked galleries; carpenter ants excavate clean galleries and leave sawdust-like frass. We can identify which you have quickly and accurately." },
      { q: "How do termites damage a house?", a: "They live in the soil, build mud tubes to reach wood, and eat it from the inside out, so damage progresses hidden from view — sometimes for a long time before it's noticed." },
      { q: "Do I need a termite inspection to buy a home?", a: "Many lenders require a WDI inspection, documented on the NPMA-33 form, which covers termites and other wood-destroying insects. We provide that as a dedicated service." },
      { q: "When do termites swarm?", a: "Usually spring. Discarded wings near windows and light sources after a swarm are a common sign, though swarmers are easily confused with winged ants — we can distinguish them." },
      { q: "Is treatment as aggressive as in the South?", a: "We match treatment to actual local pressure and the specific situation rather than defaulting to the heaviest option. Honest assessment first, appropriate treatment second." },
    ],
  },

  "attic-restoration-insulation": {
    slug: "attic-restoration-insulation",
    deepDive: {
      title: "The finish every exclusion job needs",
      paragraphs: [
        "After bats, squirrels, raccoons, or mice have been living in an attic, removal and sealing are only part of the job. What they leave behind — droppings, urine-soaked and matted insulation, nesting material, and scent — is both a health concern and a beacon that draws the next animal to the same spot. Contaminated insulation also loses its R-value, quietly costing you on heating in a climate where that adds up.",
        "Attic restoration closes the loop: we clean and decontaminate the space, remove the soiled insulation, and restore it to proper levels. It's the highest-ticket add-on in wildlife and rodent work because it delivers real value on three fronts — health, odor, and energy efficiency — and because a freshly cleaned, properly sealed, re-insulated attic is one that stays pest-free.",
      ],
    },
    intro: [
      "After wildlife or rodents have been in an attic, what they leave behind is a health hazard, an odor problem, and an energy drain — contaminated, matted insulation that also draws the next animal to the same spot. Attic restoration cleans, decontaminates, and re-insulates the space.",
      "It's the finish that makes exclusion complete, and it follows naturally from any bat, squirrel, raccoon, or rodent job. Beyond health and odor, restoring proper insulation recovers the R-value lost to contamination — a real benefit in Central New York winters.",
    ],
    signsTitle: "When attic restoration is needed",
    signs: [
      "Droppings, urine staining, and matted insulation after a wildlife or rodent infestation.",
      "Lingering odor from an attic that had animals in it.",
      "Nesting material and debris left in the insulation.",
      "Higher heating bills from insulation degraded by contamination.",
      "You've had exclusion done and want the attic properly cleaned and restored.",
    ],
    process: [
      { step: "Assessment", detail: "We evaluate the contamination and insulation condition after removal and sealing are complete." },
      { step: "Cleanup & decontamination", detail: "We remove droppings and nesting material and decontaminate the space to address health and odor concerns." },
      { step: "Insulation removal", detail: "We remove soiled, matted, or degraded insulation that has lost its effectiveness." },
      { step: "Re-insulation", detail: "We restore insulation to proper levels, recovering lost R-value and energy efficiency." },
      { step: "Final seal check", detail: "We confirm entry points are sealed so the restored attic stays pest-free." },
    ],
    whatToExpect: [
      "Restoration follows removal and sealing — it's the last step, not the first.",
      "Decontamination addresses both the health risk and the scent that attracts new animals.",
      "Re-insulation recovers heating efficiency lost to contamination.",
      "The result is a clean, sealed, properly insulated attic that stays pest-free.",
    ],
    seasonality: [
      "Any season — restoration follows whenever an infestation is cleared.",
      "Fall and winter: the energy benefit of restored insulation is most noticeable in heating season.",
      "Spring and summer: common after wildlife denning is resolved.",
    ],
    pricing: [
      "Attic restoration is priced by the extent of contamination, the amount of insulation to remove and replace, and attic access. It's typically the largest add-on in a wildlife or rodent job because of the labor and materials involved.",
      "We assess after removal and sealing and give a clear quote for the cleanup and re-insulation scope.",
    ],
    prevention: [
      "Ensure all entry points are sealed before restoring — sealing first prevents recontamination.",
      "Address roof and attic moisture that degrades insulation.",
      "Schedule restoration promptly after removal so odor and scent don't linger and attract animals.",
      "Maintain vent screening to keep the restored attic secure.",
    ],
    faqs: [
      { q: "Why do I need attic restoration after removal?", a: "Removal and sealing get the animals out, but their droppings, soiled insulation, and scent remain — a health and odor problem that also attracts the next animal. Restoration cleans, decontaminates, and re-insulates to close the loop." },
      { q: "Is contaminated insulation really a problem?", a: "Yes. It's a health concern, it holds odor, and it loses its R-value, so it costs you on heating. Removing and replacing it restores both a healthy attic and energy efficiency." },
      { q: "Does this help with heating bills?", a: "Often, yes. Insulation degraded by contamination doesn't perform, so restoring it to proper levels recovers lost efficiency — a real benefit in CNY winters." },
      { q: "Do you seal the entry points too?", a: "Sealing is done as part of the exclusion before restoration, and we confirm it's complete so the freshly restored attic stays pest-free." },
      { q: "Is the cleanup safe?", a: "We handle droppings and contamination with proper decontamination procedures, which is important because wildlife waste can carry health risks that ordinary cleaning doesn't address." },
      { q: "When should restoration be done?", a: "After removal and sealing are complete. Doing it promptly also prevents lingering scent from drawing new animals back to the same attic." },
    ],
  },
};

