/**
 * pest-content-deep.ts — depth layer for the 54-entry pest library.
 *
 * ADDITIVE, same contract as the town, neighborhood, county, and service depth layers.
 *
 * The existing pests.ts entries are correct but short — six one-line fields, roughly 250 rendered
 * words. That is a reference card, not a page that earns a ranking, and 54 of them at that length
 * reads as a doorway pattern rather than a library.
 *
 * Two blocks per species, chosen for what people actually search:
 *
 *   tellApart — how to distinguish this species from the one it gets confused with. "Is this a bed
 *               bug or a carpet beetle", "carpenter ant or termite", "gray squirrel or flying
 *               squirrel" are real queries with real consequences, and a correct answer is the most
 *               useful thing this library can offer. It is also the least copyable, because it
 *               requires knowing both species rather than describing one.
 *   inCNY     — what this species actually does in the Finger Lakes and Southern Tier, as opposed
 *               to its generic national description.
 *
 * Accuracy notes: species range and disease-vector claims are kept conservative and regional.
 * Where a species is expanding into the area rather than established, the text says so instead of
 * asserting it. Nothing here claims a job Nolan ran or a result.
 */

export interface PestBlock {
  title: string;
  paragraphs: string[];
}

export interface PestDeep {
  tellApart: PestBlock;
  inCNY: PestBlock;
  faqs: { q: string; a: string }[];
}

const D = (
  tellApartTitle: string,
  tellApart: string[],
  inCNYTitle: string,
  inCNY: string[],
  faqs: { q: string; a: string }[],
): PestDeep => ({
  tellApart: { title: tellApartTitle, paragraphs: tellApart },
  inCNY: { title: inCNYTitle, paragraphs: inCNY },
  faqs,
});

export const pestContentDeep: Record<string, PestDeep> = {
  // ============================================================ RODENTS
  "house-mouse": D(
    "House mouse or deer mouse?",
    [
      "This is the identification that matters most in a Central New York home, because the two species behave differently and one of them carries a health consideration the other does not. A house mouse is uniformly dusty gray-brown, including the belly, with a tail that is roughly as long as the body and nearly hairless. A deer mouse is sharply two-toned — brown above, clean white below, with white feet — and its tail is distinctly bicolored along its length.",
      "The other reliable tell is where you find them. House mice commit to the building: they nest in walls, under appliances, and behind cabinetry, and they stay year-round once established. Deer mice are more often seasonal arrivals from surrounding fields and woods, and they show up more in rural and edge-of-town properties than in a dense city block.",
    ],
    "The house mouse in Central New York",
    [
      "House mice are the single most common pest call across our service area, and old housing is why. Ithaca, Cortland, and Elmira all have large shares of pre-1940 housing with fieldstone foundations, settled sill plates, and century-old utility penetrations, and a house mouse needs an opening about the width of a pencil. The annual push indoors tracks the first sustained nights below roughly 45°F, which in this region usually means late September into October.",
      "Because they breed indoors year-round once established, a house mouse problem does not resolve itself over the winter the way a seasonal field-mouse intrusion sometimes appears to. That is why trapping alone tends to plateau — it removes adults while the population keeps replacing them from inside the walls.",
    ],
    [
      { q: "How small an opening can a mouse get through?", a: "About a quarter inch — roughly the width of a pencil. That is why sealing has to be methodical rather than focused on the obvious hole, especially in the older housing common across Ithaca, Cortland, and Elmira." },
      { q: "I catch mice every fall. Does that mean I have an infestation?", a: "It means you have an opening. A recurring seasonal catch usually indicates entry points that reopen the same problem each year rather than a permanent indoor population. Exclusion is what changes the pattern; trapping only manages it." },
    ],
  ),

  "norway-rat": D(
    "Norway rat or roof rat?",
    [
      "In Central New York this is usually an easy call, because the Norway rat is the one you have. It is heavy-bodied and blunt-nosed with small ears and a thick tail shorter than its body. A roof rat is slimmer, with a pointed muzzle, large ears, and a tail longer than its body. The behavioral difference is even clearer: Norway rats burrow and stay low — basements, crawlspaces, slab edges, and ground burrows — while roof rats climb and prefer attics and upper stories.",
    ],
    "The Norway rat in Central New York",
    [
      "Norway rats concentrate where food waste concentrates: downtown commercial blocks with shared alleys and dumpsters, restaurant loading areas, and older neighborhoods adjacent to them. That is why rat pressure in Ithaca and Elmira follows the commercial cores and the residential streets immediately around them rather than being spread evenly across the city.",
      "Because they burrow, exterior evidence often precedes interior evidence. Smooth, greasy runways along foundations, burrow openings at the base of walls or under slabs and steps, and gnawing at low entry points usually appear before anyone sees a rat indoors. Catching it at that stage is dramatically easier.",
    ],
    [
      { q: "Do we have rats in Ithaca, or just mice?", a: "Both. Norway rats are established here, concentrated around downtown commercial areas, shared alleys, and dumpster corridors, and in the older residential blocks next to them. They are far less widespread than mice but considerably harder to remove once settled." },
      { q: "What is the first sign of a rat problem outdoors?", a: "Burrow openings at the base of a foundation, under steps, or beside a slab, plus smooth darkened runways where they travel repeatedly. Exterior signs typically show up before anything is seen inside." },
    ],
  ),

  "roof-rat": D(
    "Roof rat or Norway rat?",
    [
      "Roof rats are slim and agile with a pointed muzzle, large thin ears, and a tail longer than the head and body combined. Norway rats are stockier, blunt-nosed, small-eared, with a shorter tail. If something is moving overhead in an attic or along rafters, roof rat is worth considering; if the activity is in a basement, crawlspace, or ground burrow, Norway rat is far more likely.",
    ],
    "The roof rat in Central New York",
    [
      "Roof rats are much less established in this region than Norway rats, and are uncommon in the Finger Lakes and Southern Tier. They favor warmer climates and coastal or port areas. Anything reported overhead in a Central New York attic is far more often a squirrel, a flying squirrel, or a bat than a roof rat.",
      "That said, correct identification still matters, because the control approach differs. Roof rats travel high and are best intercepted along overhead routes; Norway rats travel low. Assuming the wrong species means placing everything in the wrong place.",
    ],
    [
      { q: "Something is running in my attic. Is it a roof rat?", a: "In Central New York, almost certainly not. Roof rats are uncommon in this region. Overhead activity here is far more often gray squirrels during daylight, flying squirrels after dark, or bats. Identifying which one matters, because bats have legal timing restrictions on exclusion." },
    ],
  ),

  "deer-mouse": D(
    "Deer mouse or white-footed mouse?",
    [
      "These two are genuinely difficult to tell apart and are frequently treated together, which is reasonable for control purposes. Both are two-toned — brown above, white below, with white feet — and both have bicolored tails, unlike the uniformly gray house mouse. Deer mice tend to have a slightly more sharply demarcated tail with a distinct line between the dark top and pale underside.",
      "The distinction that actually matters for a homeowner is deer mouse versus house mouse, not deer versus white-footed. If the belly and feet are clean white and the tail is two-toned, you are dealing with a field species that came in from outside rather than a population breeding in your walls.",
    ],
    "The deer mouse in Central New York",
    [
      "Deer mice are the rural and edge-of-town counterpart to the house mouse, and they are common wherever buildings meet field, hedgerow, or woodland — which describes a great deal of Tompkins, Cortland, Tioga, and Schuyler County. Seasonal cabins, barns, outbuildings, and homes that sit empty for stretches are particularly attractive.",
      "Deer mice are associated with hantavirus, which is rare in the Northeast but is the reason cleanup of droppings and nesting material in enclosed spaces like attics, crawlspaces, and long-closed cabins should be done with care rather than swept up dry. That is a genuine reason to treat an accumulation in a closed structure as a job worth doing properly.",
    ],
    [
      { q: "Are deer mice more dangerous than house mice?", a: "They carry a health consideration house mice do not — deer mice are the primary hantavirus reservoir, though cases are rare in the Northeast. The practical implication is about cleanup: droppings and nesting material in an enclosed attic, crawlspace, or long-closed cabin should not be swept or vacuumed dry." },
      { q: "Why do I only get these mice at my camp and not at home?", a: "Because they are a field species rather than a building species. They move in from surrounding fields and woods, and a building that sits unoccupied — especially seasonally — offers undisturbed shelter. Sealing before the property sits empty is the highest-value work." },
    ],
  ),

  "white-footed-mouse": D(
    "White-footed mouse or deer mouse?",
    [
      "Practically indistinguishable in the field without close examination, and controlled the same way. Both are brown above with white bellies and feet and bicolored tails. What separates both of them from the house mouse is the clean white underside — a house mouse is dusty gray all the way around.",
    ],
    "The white-footed mouse in Central New York",
    [
      "The white-footed mouse matters in this region for a reason that has nothing to do with buildings: it is one of the most important reservoirs for the bacterium that causes Lyme disease, and blacklegged tick larvae feeding on it are how many ticks become infected in the first place. In a region with substantial Lyme incidence, that connects rodent activity around a property to tick risk on it.",
      "Around structures, they behave like deer mice — coming in from field and woodland edge, favoring outbuildings, and appearing in force in fall. Reducing harborage close to the house, keeping woodpiles and debris away from foundations, and sealing outbuildings all help on both fronts at once.",
    ],
    [
      { q: "Is there a connection between mice and ticks on my property?", a: "Yes, and it is direct. White-footed mice are a primary reservoir for the Lyme bacterium in the Northeast, and immature blacklegged ticks commonly acquire infection by feeding on them. Reducing rodent harborage near the house — woodpiles, debris, dense ground cover against the foundation — helps with both problems." },
    ],
  ),

  "meadow-vole": D(
    "Vole or mouse?",
    [
      "Voles are built for tunneling rather than climbing: stocky bodies, blunt rounded snouts, small eyes, ears nearly buried in fur, and a short tail — noticeably shorter than a mouse's. A mouse looks lean and long-tailed by comparison, with prominent ears and eyes.",
      "The clearest difference is the evidence. Voles leave surface runways — narrow, grass-clipped paths just under or through the turf — and small burrow openings in lawns and garden beds. Mice leave droppings and gnawing indoors. Voles are a landscape problem; mice are a building problem.",
    ],
    "The meadow vole in Central New York",
    [
      "Voles are most visible here in early spring, when snow melts and reveals the winter's work: networks of runways across the lawn and, more damagingly, girdled bark at the base of young trees and shrubs. Snow cover is what makes them destructive in this region — it lets them feed at the base of woody plants all winter, hidden from predators.",
      "They are a lawn, orchard, and ornamental problem far more than a structural one. Voles rarely enter homes. If something is inside the house, it is almost certainly a mouse.",
    ],
    [
      { q: "My lawn is covered in narrow paths after the snow melted. What is it?", a: "Vole runways. They spent the winter feeding under the snow, which is why the damage appears all at once in spring. Check the base of young trees and shrubs for girdled bark — that is the damage that actually matters, since a fully girdled stem will not recover." },
    ],
  ),

  // =============================================================== ANTS
  "carpenter-ant": D(
    "Carpenter ant or termite?",
    [
      "This is the most consequential identification in the library, because the two are treated completely differently and one is far more common here. Look at the waist, the antennae, and the wings. A carpenter ant has a narrow pinched waist, elbowed antennae, and — if winged — two pairs of wings of noticeably different lengths. A termite has a broad, straight-sided waist with no pinch, straight beaded antennae, and two pairs of wings of equal length.",
      "The damage differs too. Carpenter ants excavate galleries that are smooth and clean, and they push out coarse sawdust-like frass containing insect body parts. Termites pack their galleries with mud and soil and leave them rough. Finding clean galleries and a little pile of what looks like pencil shavings under a beam is a carpenter ant sign.",
    ],
    "Carpenter ants in Central New York",
    [
      "Carpenter ants are the region's most important structural insect by a wide margin, and moisture is always the underlying story. They do not eat wood — they excavate it — and they overwhelmingly choose wood that has been softened by water. In the Finger Lakes that means the sill plate and band joist behind a failed gutter, framing near a chronically damp hillside basement wall, window and door frames under a leak, and porch columns and roof edges.",
      "The timing tell is a spring swarm. Winged reproductives appearing indoors in April or May are not ants that wandered in — they indicate a mature colony that has been inside the structure through the winter. That is a meaningfully different situation from foragers crossing a counter in July, and it deserves a proper inspection rather than a spray.",
    ],
    [
      { q: "I found winged ants indoors in April. What does that mean?", a: "Usually that a mature carpenter ant colony has been living inside the structure through the winter, not that ants wandered in from outside. Indoor spring swarmers are a strong indicator of an established interior nest and are worth a full inspection." },
      { q: "Do carpenter ants eat wood like termites?", a: "No. They excavate galleries to nest in and push the debris out — that is the coarse sawdust-like frass you find. Termites actually consume wood and pack their galleries with soil. The distinction matters because carpenter ant control centers on finding the nest and fixing the moisture that attracted it." },
    ],
  ),

  "pavement-ant": D(
    "Pavement ant or odorous house ant?",
    [
      "Crush one and smell it. An odorous house ant gives off a distinctly sweet, musty odor often compared to rotting coconut; a pavement ant does not. Visually, pavement ants are dark brown to black with paler legs and fine parallel grooves on the head and thorax, and they often leave small craters of excavated sand at cracks in pavement and along walkway edges.",
    ],
    "Pavement ants in Central New York",
    [
      "Pavement ants are the default nuisance ant of newer suburban housing in this region — Horseheads, the Lansing subdivisions, and any neighborhood built on slab, walkway, and driveway edges. They nest outside, under concrete and stone, and forage indoors along expansion joints, slab edges, and plumbing penetrations.",
      "Because the colony is outdoors, treating the ants visible on a kitchen counter accomplishes very little. The trail and the nest are what matter, and perimeter work is what resolves it. Spring and early summer are when the foraging pressure peaks.",
    ],
    [
      { q: "Why do ants keep coming back after I spray the counter?", a: "Because the colony is outside, under a slab, walkway, or driveway edge, and you are only killing foragers. The visible ants are a small fraction of the population. Perimeter treatment and following the trail back to the nest is what actually ends it." },
    ],
  ),

  "odorous-house-ant": D(
    "Odorous house ant or pavement ant?",
    [
      "The smell test settles it: crushed odorous house ants smell sweet and musty, like rotting coconut. They are uniformly dark brown to black, move in busy erratic trails, and are strongly attracted to sweets. Pavement ants have paler legs, fine grooves on the head and thorax, and no odor.",
      "Behaviorally, odorous house ants are more willing to nest indoors than pavement ants — in wall voids, under insulation, around water pipes, and near heat sources — which is why they are more persistent once inside.",
    ],
    "Odorous house ants in Central New York",
    [
      "These are among the most common indoor ants in the region and among the most frustrating, because colonies readily split when disturbed. Careless spraying can turn one colony into several — a phenomenon called budding — and homeowners often report that DIY treatment made the problem worse rather than better. That is not imagination; it is a documented response.",
      "They tend to move indoors during wet stretches and again during dry ones, tracking moisture. Kitchens, bathrooms, and anywhere with a slow leak are the usual interior sites.",
    ],
    [
      { q: "I sprayed and now there are ants in more rooms than before. What happened?", a: "You likely caused budding. Odorous house ant colonies can split into multiple satellite colonies when stressed by repellent sprays, which spreads the problem instead of ending it. Baiting and targeted treatment are the right approach for this species." },
    ],
  ),

  "pharaoh-ant": D(
    "Pharaoh ant or another small indoor ant?",
    [
      "Pharaoh ants are very small — roughly a sixteenth of an inch — and pale yellow to light brown, often looking almost translucent, with a darker abdomen tip. That pale coloring separates them from the dark brown and black nuisance ants. They are essentially always indoors in this climate.",
    ],
    "Pharaoh ants in Central New York",
    [
      "Pharaoh ants cannot survive New York winters outdoors, so they exist here only inside heated buildings — and that shapes everything about them. They are most often found in apartment buildings, hospitals, care facilities, and commercial kitchens, where continuous warmth lets them persist year-round.",
      "They are the clearest case in the library where spraying is actively counterproductive. Repellent insecticides cause pharaoh ant colonies to fragment and scatter through a building, turning a contained problem into a building-wide one. Baiting is the only sound approach, and in multi-unit buildings it needs to be coordinated across units.",
    ],
    [
      { q: "Why should pharaoh ants never be sprayed?", a: "Because repellent sprays make them scatter. A stressed pharaoh ant colony fragments into multiple satellite colonies that disperse through the building, converting a localized problem into a far larger one. Baiting is the correct method, and in an apartment building it has to be coordinated across units to work." },
    ],
  ),

  "citronella-ant": D(
    "Citronella ant or a termite swarm?",
    [
      "Citronella ants alarm people because they swarm indoors in large numbers, often from a basement floor or foundation crack, and get mistaken for termites. Check the waist and antennae: pinched waist and elbowed antennae mean ant. Then crush one — citronella ants give off a distinct lemony scent, which is where the name comes from and which no termite does.",
    ],
    "Citronella ants in Central New York",
    [
      "These are subterranean ants that live on honeydew from root-feeding aphids, so they are not after your food and do not damage the structure. They nest in soil against and under foundations, and swarms push up through basement floor cracks and slab joints, usually in spring.",
      "The practical answer is usually reassurance plus sealing. A citronella swarm is startling and harmless, and once correctly identified the job is confirming it is not a termite swarm and closing the routes they are using.",
    ],
    [
      { q: "Hundreds of winged ants came up through my basement floor. Is my house being damaged?", a: "Almost certainly not, if they are citronella ants — crush one and check for a lemony smell, and look for the pinched waist and elbowed antennae that distinguish ants from termites. Citronella ants feed on aphid honeydew underground and do not damage structures. The correct response is identification first, then sealing the cracks they emerged from." },
    ],
  ),

  "field-ant": D(
    "Field ant or carpenter ant?",
    [
      "Field ants are large enough to be mistaken for carpenter ants, and the two are often confused in yards. Carpenter ants have an evenly rounded thorax when viewed from the side; field ants have an uneven, notched thoracic profile. Field ants also build low soil mounds outdoors, which carpenter ants do not.",
      "Location is the practical tell. A large ant coming out of a lawn mound is almost certainly a field ant. A large ant emerging from a window frame, sill, or porch column indoors is far more likely a carpenter ant, and that distinction decides whether you have a landscape nuisance or a structural inspection.",
    ],
    "Field ants in Central New York",
    [
      "Field ants are common in lawns, pastures, and field edges throughout the region, and they are mostly a nuisance rather than a threat — mounds in the lawn, occasional foraging on patios and walkways. They do not nest in structural wood.",
      "They matter mainly because misidentifying one as a carpenter ant causes unnecessary alarm and unnecessary treatment, and misidentifying a carpenter ant as a field ant delays a real structural inspection.",
    ],
    [
      { q: "There are big black ants and mounds in my lawn. Are they in my house too?", a: "Probably not. Large ants coming from soil mounds in a lawn are usually field ants, which nest outdoors and do not damage structures. Carpenter ants nest in wood — often moisture-damaged wood in or against the building. Which one you have determines whether this is a yard nuisance or a structural question." },
    ],
  ),

  // ======================================================== COCKROACHES
  "german-cockroach": D(
    "German cockroach or another roach?",
    [
      "German cockroaches are small — about half an inch — light brown to tan, with two dark parallel stripes running lengthwise behind the head. That stripe pattern is the reliable marker. American cockroaches are much larger and reddish-brown; Oriental cockroaches are dark, almost black, and glossy.",
      "Size and location together are diagnostic. A small striped roach in a kitchen or bathroom, especially near appliances and in cabinetry, is a German cockroach and indicates an indoor breeding population. A large roach in a basement or drain is a different species and usually a different problem.",
    ],
    "German cockroaches in Central New York",
    [
      "This is the cockroach that matters in our service area, and it is a building problem rather than a housekeeping one. German cockroaches breed indoors continuously in heated buildings, which is why they show up as readily in January as in July, and they travel between apartments through shared plumbing chases, wall voids, and utility risers.",
      "That structural spread is why they concentrate in the older multi-unit stock of Elmira, in Collegetown buildings with commercial kitchens on the ground floor, and in subdivided student rentals in Ithaca and Cortland. Treating one unit while connected units go untouched relocates the population and it returns — the standard reason these infestations become permanent.",
    ],
    [
      { q: "Does having cockroaches mean my apartment is dirty?", a: "No. German cockroaches spread through buildings via shared walls, plumbing chases, and utility runs, and they arrive in deliveries, boxes, and used appliances. A spotless apartment in a building with an untreated infestation will still get them. Sanitation helps control the population, but it is not what caused it." },
      { q: "Why do they keep coming back after treatment?", a: "Almost always because the treatment was confined to one unit in a connected building. The population moves along shared walls and chases during treatment and returns afterward. Connected units need to be handled together, and where there is ground-floor commercial kitchen space, that has to be included." },
    ],
  ),

  "american-cockroach": D(
    "American cockroach or German cockroach?",
    [
      "Size settles it immediately. American cockroaches are large — up to about an inch and a half — reddish-brown, with a pale yellowish figure-eight pattern behind the head. German cockroaches are roughly half an inch with two dark lengthwise stripes. If it is big and reddish, it is not a German cockroach.",
    ],
    "American cockroaches in Central New York",
    [
      "In this climate American cockroaches are associated with warm, damp infrastructure rather than kitchens: boiler rooms, steam tunnels, sewer and drain systems, floor drains, and the basements of large older commercial buildings. They are much less common in ordinary homes here than in warmer regions.",
      "When they do appear in a home, the source is usually a drain, sewer connection, or a shared basement in an older multi-unit building rather than an indoor breeding population. Finding and closing the route matters more than treating the individuals you see.",
    ],
    [
      { q: "I saw one huge roach in my basement. Do I have an infestation?", a: "Not necessarily. American cockroaches usually enter from drains, sewer lines, or a warm damp shared basement rather than breeding in the living space. One or two sightings often means a route rather than a population. Finding where it came in is the useful step." },
    ],
  ),

  "oriental-cockroach": D(
    "Oriental cockroach or American cockroach?",
    [
      "Oriental cockroaches are dark brown to nearly black and glossy, about an inch long, and noticeably sluggish compared with other roaches. Females have only stubby wing pads and cannot fly. American cockroaches are larger, reddish-brown, and much faster.",
    ],
    "Oriental cockroaches in Central New York",
    [
      "Often called water bugs locally, Oriental cockroaches favor cool, damp, dark places — exactly what the region's older stone and fieldstone basements provide. They are strongly associated with floor drains, sump areas, crawlspaces, and the ground level of buildings with persistent moisture.",
      "Because moisture is the driver, control that ignores the damp conditions tends to fail. Drainage, ventilation, and sealing at the foundation do a large share of the work.",
    ],
    [
      { q: "What are the slow black bugs in my basement?", a: "Very likely Oriental cockroaches, sometimes called water bugs. They favor cool damp spaces, which the older stone basements common across Ithaca, Cortland, and Elmira provide reliably. Reducing moisture and sealing foundation entry points matters as much as treatment." },
    ],
  ),

  "pennsylvania-wood-roach": D(
    "Wood cockroach or German cockroach?",
    [
      "This distinction saves a great deal of unnecessary alarm. Pennsylvania wood cockroaches are about three quarters of an inch, brown, with pale translucent edges along the front margin of the thorax and forewings. Males have full wings and fly readily toward lights — which is how most people encounter them. They lack the two dark stripes of a German cockroach.",
      "Behavior is the giveaway. Wood roaches appear in ones and twos, usually in late spring and early summer, often near windows and lights, and they do not establish in kitchens or bathrooms. German cockroaches multiply in food areas and are present year-round.",
    ],
    "Wood cockroaches in Central New York",
    [
      "These are outdoor insects that live under loose bark, in woodpiles, and in leaf litter, and they wander or fly indoors accidentally, mostly in May and June. Wooded properties — Forest Home, the gorge edges, Danby, Newfield, and rural parcels generally — see them most.",
      "They cannot establish an indoor population, so the correct response is usually identification and reassurance rather than treatment. Moving firewood away from the house and reducing exterior lighting that draws them helps.",
    ],
    [
      { q: "I keep finding single roaches near my windows in June. Should I be worried?", a: "Usually not. That pattern — individuals, near lights and windows, in late spring on a wooded property — fits Pennsylvania wood cockroaches, which live outdoors under bark and in woodpiles and cannot establish indoors. Check for the pale translucent edging and the absence of the two dark stripes a German cockroach has." },
    ],
  ),

  // ========================================================== STINGING
  yellowjacket: D(
    "Yellowjacket, paper wasp, or hornet?",
    [
      "Yellowjackets are compact and stocky with bright, sharply defined black and yellow banding, and they fly with their legs tucked in. Paper wasps are longer and more slender with noticeably dangling legs in flight, and they build open, uncovered combs that look like an upside-down umbrella. Bald-faced hornets are black and white and build large enclosed football-shaped paper nests.",
      "The nest location is the most useful distinction. Yellowjackets nest hidden — in ground cavities, wall voids, under decking, in soffits — which is exactly why they are dangerous to disturb. If you cannot see the nest but wasps are streaming in and out of a small opening, think yellowjacket.",
    ],
    "Yellowjackets in Central New York",
    [
      "Yellowjackets follow a sharp seasonal curve here. Colonies build quietly through early summer, then peak in late August and September, which is when the colony is largest and, as natural food runs short, when workers turn aggressively toward human food — picnics, garbage, and outdoor dining. Nearly all stings occur in that late-season window.",
      "They are also the most common reason for an urgent call in family neighborhoods. A colony in a wall void or under decking can be disturbed by ordinary activity, and partial DIY treatment is the classic way people get hurt: an agitated colony in a wall can push inward toward living space rather than out.",
    ],
    [
      { q: "Why are yellowjackets suddenly everywhere in September?", a: "Because the colony peaks in size in late summer just as its natural food supply declines, which is when workers shift aggressively to human food sources. It is not that more colonies appeared — the ones that were there all along are now at maximum size and actively foraging where people are." },
      { q: "Can I treat a yellowjacket nest in my wall myself?", a: "We would strongly advise against it. Treating a wall-void colony partially can drive an agitated colony inward toward living space instead of out, and the sting risk during a failed attempt is serious. This is a fast job for someone with the right equipment and protection." },
    ],
  ),

  "bald-faced-hornet": D(
    "Bald-faced hornet or yellowjacket?",
    [
      "Bald-faced hornets are black with striking white markings on the face and abdomen tip — no yellow at all — and they are noticeably larger than yellowjackets. Their nest is the giveaway: a large gray enclosed paper structure, often football or teardrop shaped, hanging visibly from a tree branch, eave, or shrub. Yellowjacket nests are usually concealed.",
      "Despite the name they are a type of yellowjacket rather than a true hornet, but the practical handling is the same and they are notably defensive near the nest.",
    ],
    "Bald-faced hornets in Central New York",
    [
      "Nests become conspicuous here in late summer, when they reach full size, and they are often noticed for the first time in fall when leaves drop and reveal something that has been hanging there for months. A mature nest can hold several hundred workers.",
      "They will defend the nest vigorously within a substantial radius, and they can sting repeatedly. A nest near a door, walkway, play area, or anywhere yard work happens is worth removing rather than tolerating. One over an unused corner of the property may reasonably be left alone until frost ends it.",
    ],
    [
      { q: "There is a big gray paper nest in my tree. Does it need to be removed?", a: "It depends entirely on where it is. Near a door, walkway, play area, or where you mow, yes — they defend the nest aggressively and can sting repeatedly. In a far corner of the property that nobody approaches, it is reasonable to leave it; the colony dies out with hard frost and the nest is not reused." },
    ],
  ),

  "european-hornet": D(
    "European hornet or something else?",
    [
      "European hornets are large — up to about an inch and a half — brown and yellow rather than black and yellow, and they are the only true hornet established in this region. Their size startles people, and they are unusual among local stinging insects in flying at night and being attracted to lights, which is often how they are first noticed.",
      "They are not the giant hornets that periodically make headlines, none of which are established in New York. A large brown-and-yellow hornet bumping a lit window in Central New York is a European hornet.",
    ],
    "European hornets in Central New York",
    [
      "They nest in hollow trees, wall voids, attics, and outbuildings, and they will strip bark from lilac, birch, and ornamental shrubs to build with, which sometimes shows up as unexplained damage to landscaping.",
      "Because they are nocturnal and large, encounters often happen at night around porch lights and windows. Nests in wall voids or attics should be handled professionally — the colony is large, the insects are capable of repeated stings, and disturbing a wall-void nest carries the same risk as with yellowjackets.",
    ],
    [
      { q: "A huge hornet keeps hitting my window at night. What is it?", a: "Most likely a European hornet — the only true hornet established here, brown and yellow, up to about an inch and a half, and unusual in being active at night and drawn to lights. They are not the giant hornets from the news, which are not established in New York." },
    ],
  ),

  "paper-wasp": D(
    "Paper wasp or yellowjacket?",
    [
      "Paper wasps are longer and more slender than yellowjackets, and they fly with their long legs hanging down — a reliable field mark. Their nests are open and uncovered, a single exposed comb of hexagonal cells on a short stalk, typically under eaves, porch ceilings, deck railings, and inside grills and playsets.",
      "They are also considerably less aggressive than yellowjackets and generally only sting when the nest is directly threatened.",
    ],
    "Paper wasps in Central New York",
    [
      "Paper wasps are the most common wasp found around porches and decks in this region, and their nests are usually small and visible. Because they nest in the open on structures people use daily, the conflict is proximity rather than aggression — a nest inside a grill lid or under a porch rail you brush past is a problem regardless of temperament.",
      "They are beneficial predators of caterpillars and other pests, so a nest well away from foot traffic is reasonable to leave. Removal is about location.",
    ],
    [
      { q: "Are paper wasps dangerous?", a: "Much less so than yellowjackets. They are slower to defend and generally sting only when the nest is directly threatened. The problem is usually where they build — inside a grill, under a porch rail, in a playset — rather than how they behave. A nest away from foot traffic can reasonably be left alone." },
    ],
  ),

  "carpenter-bee": D(
    "Carpenter bee or bumble bee?",
    [
      "Look at the abdomen. A carpenter bee has a shiny, bare, black abdomen; a bumble bee's abdomen is densely fuzzy and usually banded. From the front they look similar — both large and robust — but the polished black rear end is unmistakable once you know to check.",
      "Behavior differs sharply too. Carpenter bees hover territorially around eaves, decks, and railings, and males will fly aggressively at people while being completely incapable of stinging. Bumble bees forage on flowers and nest in the ground or in cavities, and are not interested in your soffit.",
    ],
    "Carpenter bees in Central New York",
    [
      "Carpenter bees drill nearly perfect half-inch round entry holes into unfinished or weathered softwood — deck railings, fascia, soffits, porch ceilings, and outbuildings — then tunnel along the grain. A single season's hole is minor; the damage that matters is cumulative, as galleries are reused and extended year after year, and as woodpeckers open the wood up chasing the larvae inside.",
      "Activity peaks in spring, when overwintered adults emerge and begin excavating. Painted and well-sealed wood is markedly less attractive to them than bare or weathered wood, which makes finish maintenance a genuine control measure rather than an afterthought.",
    ],
    [
      { q: "A big bee is hovering at me near my deck. Will it sting?", a: "If it is hovering and darting at you, it is almost certainly a male carpenter bee, and males cannot sting at all. Check the abdomen — shiny and black means carpenter bee, fuzzy means bumble bee. Females can sting but are docile and rarely do." },
      { q: "How much damage do carpenter bees actually do?", a: "One season's tunneling is minor. The problem is accumulation — galleries get reused and extended over years, and woodpeckers frequently tear the wood open to reach the larvae, which does far more visible damage than the bees. Keeping exposed softwood painted or sealed genuinely reduces attack." },
    ],
  ),

  "ground-nesting-bee": D(
    "Ground-nesting bees or yellowjackets in the ground?",
    [
      "Both come out of holes in the ground, and the distinction determines whether you should be concerned. Ground-nesting solitary bees are usually fuzzy, often smaller, and each female has her own separate small hole — you see many individual entrances scattered across an area, with gentle bees coming and going. A yellowjacket ground nest has a single entrance with heavy, fast two-way traffic in and out of one hole.",
      "Temperament confirms it. Solitary ground bees are docile, rarely sting, and will tolerate you standing among them. Yellowjackets defend their nest en masse.",
    ],
    "Ground-nesting bees in Central New York",
    [
      "Solitary ground-nesting bees are most visible in spring, in dry, sparsely vegetated, sandy or well-drained soil — thin lawn patches, bare slopes, and garden edges. They are important early-season pollinators and are active for only a few weeks.",
      "In most cases the honest recommendation is to leave them alone. They do not damage lawns meaningfully, they are gone shortly, and they are valuable. Improving turf density in the area discourages them the following year without any treatment at all.",
    ],
    [
      { q: "There are dozens of small holes with bees in my lawn. Do I need them treated?", a: "Usually not. Many separate small holes with gentle bees indicates solitary ground-nesting bees, which are docile, important early pollinators, and active only a few weeks in spring. A single hole with heavy fast traffic is a different matter — that is likely a yellowjacket nest and worth handling." },
    ],
  ),

  // ===================================================== OVERWINTERING
  "cluster-fly": D(
    "Cluster fly or house fly?",
    [
      "Cluster flies are slightly larger than house flies, darker, and noticeably sluggish — they crawl on windows rather than darting around. The reliable marker is golden or yellowish hairs on the thorax, visible up close, and the way the wings overlap over the back at rest. House flies are quicker, have four dark stripes on the thorax, and hold their wings more spread.",
      "Context is the strongest tell. Large numbers of slow flies at sunny windows in fall or on the first warm days of late winter is a cluster fly pattern. House flies around food and garbage in summer is not.",
    ],
    "Cluster flies in Central New York",
    [
      "Cluster flies are arguably the defining seasonal pest of this region, and they come from the ground rather than the building — the larvae are parasites of earthworms, developing in soil under pasture and lawn. That is why the pressure is worst next to open field and hayland, and why brand-new houses in former farmland get them just as badly as century-old farmhouses. Homeowners in the new Lansing subdivisions are routinely surprised by this.",
      "In late summer, adults move to the warm sunny elevations of buildings and work their way into wall voids and attics to overwinter. They are effectively unreachable once inside, and the ones appearing at windows in February have been in the walls since fall. The whole control window is a timed exterior application to the sunny south and west walls in late summer, before they gather.",
    ],
    [
      { q: "Why do I get flies indoors in February when it is freezing outside?", a: "They did not come in from outside. Cluster flies entered the wall voids and attic last fall to overwinter, and the first warm spell wakes them and draws them toward light and windows. Indoor treatment in February has limited value — the effective work is exterior, the previous August." },
      { q: "My house is brand new. Why do I have thousands of them?", a: "Because cluster flies develop in soil, not buildings. Their larvae parasitize earthworms in pasture and lawn, so a new house built on former farmland sits in prime habitat. A tight modern house has fewer entry points, which helps, but it does not change the surrounding ground." },
    ],
  ),

  "brown-marmorated-stink-bug": D(
    "Brown marmorated stink bug or a native stink bug?",
    [
      "Check the antennae and the shoulders. The brown marmorated stink bug has two distinct white or pale bands on each antenna and smooth, rounded shoulder edges. Native brown stink bugs lack the clean antennal banding and often have toothed or jagged shoulders. Both are shield-shaped and mottled brown, which is why the antennae are the practical check.",
      "It is also worth separating from the western conifer seed bug, which is longer, narrower, and has distinctly flared, leaf-like flattened hind legs that the stink bug does not.",
    ],
    "Brown marmorated stink bugs in Central New York",
    [
      "An invasive species, now well established across the region, and one of the main components of the fall invasion. They gather on sunny south and west walls in September and October and work into wall voids, attics, window frames, and behind siding to overwinter, reappearing indoors on warm days through the winter and again in spring.",
      "Do not crush them indoors — the defensive odor is genuinely persistent, and vacuuming them into a bag that can be removed immediately is the better indoor response. As with cluster flies, real control is exterior and timed for late summer, before they gather.",
    ],
    [
      { q: "Should I squash stink bugs I find indoors?", a: "Better not to. The defensive compound they release is persistent and unpleasant, and crushing them on a windowsill or carpet leaves it there. Vacuum them into a bag you can take straight outside instead." },
      { q: "How do I keep them out next fall?", a: "Exterior treatment on the sunny south and west elevations in late summer, before they gather, combined with sealing around window frames, siding gaps, soffits, and utility penetrations. Once they are inside the wall voids there is no practical way to reach them." },
    ],
  ),

  "asian-lady-beetle": D(
    "Asian lady beetle or native ladybug?",
    [
      "Look just behind the head. The multicolored Asian lady beetle has a white area marked with a black pattern that often reads as an M or W shape; native ladybugs lack that marking. Asian lady beetles also vary enormously in color, from pale orange to deep red, with anywhere from zero to many spots, so spot count tells you nothing.",
      "Behavior separates them decisively: native ladybugs do not invade houses in swarms, do not bite, and do not stain. Asian lady beetles do all three.",
    ],
    "Asian lady beetles in Central New York",
    [
      "They arrive in force on warm sunny afternoons in October, concentrating on light-colored south and west walls, and enter through gaps around windows, siding, and soffits to overwinter in wall voids. They reappear indoors on warm winter days and again in spring.",
      "Two things make them worse than the average overwintering insect: they can deliver a noticeable nip, and when disturbed they release a yellow fluid that stains walls, curtains, and ceilings. Vacuuming rather than crushing avoids the staining. Prevention is the same timed late-summer exterior work and sealing that addresses cluster flies and stink bugs.",
    ],
    [
      { q: "Do ladybugs bite? These seem to.", a: "Native ladybugs do not, but Asian lady beetles can deliver a noticeable nip. Check just behind the head for a white patch with a dark M-shaped marking — that identifies the Asian species. They also stain when crushed, so vacuum rather than squash them." },
    ],
  ),

  "boxelder-bug": D(
    "Boxelder bug or something else?",
    [
      "Boxelder bugs are unmistakable once seen: about half an inch, flat and elongated, black with three bright red-orange lines on the thorax and red edging outlining the wings. Nymphs are bright red. Nothing else in the fall invasion looks like this — stink bugs are shield-shaped and mottled brown, lady beetles are round and orange.",
    ],
    "Boxelder bugs in Central New York",
    [
      "The name is literal and diagnostic: they feed primarily on boxelder trees, along with other maples and ash. If you have a heavy recurring boxelder bug problem, there is very often a female boxelder or maple within a short distance of the house, and identifying that tree explains the pattern.",
      "They gather in large numbers on warm sunny walls in fall — south and west sides again — and slip into wall voids to overwinter, reappearing on warm days. They do not bite, do not damage the structure, and do not breed indoors, but their fecal spots can stain light surfaces.",
    ],
    [
      { q: "Why does my house get boxelder bugs and my neighbor's does not?", a: "Usually a host tree. They feed on boxelder and other maples and ash, so a female boxelder or maple near your house concentrates the population there. Sun exposure matters too — they gather on warm south and west walls, so a sunny elevation collects far more than a shaded one." },
    ],
  ),

  "western-conifer-seed-bug": D(
    "Western conifer seed bug or brown marmorated stink bug?",
    [
      "The hind legs settle it. The western conifer seed bug has conspicuously flattened, leaf-like expansions on its hind legs — a feature nothing else in the fall invasion has. It is also longer and narrower than a stink bug, which is broadly shield-shaped.",
      "Both are brown, both appear indoors in fall, and both release an odor when disturbed, so they are regularly confused. The leg flare is the one-glance check.",
    ],
    "Western conifer seed bugs in Central New York",
    [
      "They feed on the seeds and developing cones of pines and other conifers, so properties with mature pine, spruce, or hemlock nearby see them most — which covers a great deal of wooded Tompkins and Schuyler County. They enter buildings to overwinter in fall, generally as scattered individuals rather than the mass gatherings of cluster flies or lady beetles.",
      "They are harmless: they do not bite, damage the structure, or reproduce indoors. They fly with a noticeable buzz and often startle people more than their numbers warrant.",
    ],
    [
      { q: "A big brown bug with weird flattened legs keeps appearing indoors. Is it dangerous?", a: "No. Those flattened, leaf-like hind legs identify a western conifer seed bug. It feeds on conifer seeds, does not bite, does not damage buildings, and does not breed indoors. It has simply come inside to overwinter." },
    ],
  ),

  "elm-leaf-beetle": D(
    "Elm leaf beetle or Asian lady beetle?",
    [
      "Elm leaf beetles are elongated and oval rather than round-domed, olive to yellowish-green with a dark stripe along each wing cover. Asian lady beetles are distinctly dome-shaped and orange to red. Once you see them side by side the shape difference is obvious.",
    ],
    "Elm leaf beetles in Central New York",
    [
      "They feed on elm foliage through the summer, skeletonizing leaves, then move to buildings in fall to overwinter — the same pattern as the rest of the fall invasion and driven by the same sunny-wall preference. Properties with mature elms nearby see them; properties without them generally do not.",
      "They are harmless indoors and, as with the other overwintering insects, the effective control is exterior and timed for late summer rather than indoor treatment once they have settled into wall voids.",
    ],
    [
      { q: "Why do I suddenly have these beetles every October?", a: "They are overwintering. Elm leaf beetles feed on elm foliage all summer, then move to buildings in fall and enter wall voids through gaps around windows, siding, and soffits. If there is a mature elm near the house, that is the source." },
    ],
  ),

  // ============================================================== FLIES
  "house-fly": D(
    "House fly or cluster fly?",
    [
      "House flies are quick and evasive, about a quarter inch, gray, with four dark lengthwise stripes on the thorax. Cluster flies are larger, darker, distinctly slow, and have golden hairs on the thorax. If the flies are fast and around food or garbage, house fly; if they are sluggish and clustered at sunny windows in fall or late winter, cluster fly.",
      "The distinction matters because the treatments have nothing in common. House flies are a sanitation and source problem; cluster flies are a building-envelope and timing problem.",
    ],
    "House flies in Central New York",
    [
      "House flies breed in decaying organic matter — garbage, manure, compost, and spillage — and develop from egg to adult in about a week in warm weather, which is why a problem can escalate so quickly in summer. Rural and agricultural parts of the region see heavier pressure, as do restaurants and any property with dumpsters.",
      "The controlling factor is almost always the breeding source rather than the adults you see. Finding and eliminating it — a neglected bin, a spill under a dumpster, wet organic debris — accomplishes more than any amount of spraying.",
    ],
    [
      { q: "We keep killing flies but more appear. Why?", a: "Because the adults you see are the symptom and the breeding site is the cause. House flies can go from egg to adult in about a week in warm weather, so an untreated source keeps producing. Finding it — often a bin, a spill, wet organic debris, or something under a dumpster — is what actually ends it." },
    ],
  ),

  "fruit-fly": D(
    "Fruit fly, drain fly, or phorid fly?",
    [
      "These three get lumped together as small flies and they call for genuinely different responses, so identification pays for itself. Fruit flies are tan to brownish, usually with distinctly red eyes, and hover around ripening or fermenting produce. Drain flies are fuzzy and moth-like with broad rounded wings held roof-like over the body, and rest motionless on walls near drains. Phorid flies are small and humpbacked in profile, and they run erratically across surfaces rather than flying immediately.",
      "The rule of thumb: red eyes and fruit means fruit fly; fuzzy and moth-like means drain fly; running rather than flying, with a humped back, means phorid — and phorid flies are the one that can indicate something more serious.",
    ],
    "Fruit flies in Central New York",
    [
      "For the region's restaurants, tasting rooms, breweries, and cideries, fruit flies are a commercial reputation problem rather than a nuisance, and the Seneca and Cayuga wine trails put a lot of that exposure into Schuyler County. Peak season runs through harvest and the summer tourism months, exactly when the business can least afford it.",
      "Almost every persistent fruit fly problem is a breeding site rather than an invasion — a floor drain, a mat, a spill tray, a mop bucket, the underside of equipment, or fermenting residue in a place nobody cleans. Adults live a matter of weeks; a population that persists is being replenished on site. Spraying adults buys a day or two, so the productive work is finding the source.",
    ],
    [
      { q: "I threw out all the fruit and still have fruit flies. Where are they coming from?", a: "A breeding site with fermenting residue — most often a floor drain, the underside of equipment, a mat, a spill tray, or a mop bucket. Fruit is only the most visible source. If a population persists after the obvious food is gone, something on site is still producing them." },
      { q: "How fast can a fruit fly problem develop?", a: "Very fast. They complete development in about a week in warm conditions, so a small unnoticed residue source can produce a visible problem within days — which is why they seem to appear from nowhere in a busy kitchen or tasting room." },
    ],
  ),

  "drain-fly": D(
    "Drain fly or fruit fly?",
    [
      "Drain flies look nothing like fruit flies once you look closely: they are fuzzy and moth-like, with broad rounded wings held roof-like over the body, and they sit motionless on walls and ceilings near drains rather than hovering. Fruit flies are smooth, red-eyed, and hover around food.",
      "Their flight is weak and fluttering, and they tend to be found in bathrooms, basements, and near floor drains rather than in food-prep areas.",
    ],
    "Drain flies in Central New York",
    [
      "Drain flies breed in the gelatinous organic film that accumulates inside drains, traps, and sewer lines, and in the region's older buildings — rarely-used basement floor drains, aging plumbing in century-old housing, and seasonal properties that sit unused — that film has plenty of time to build up.",
      "The test is simple: tape a clear cup or plastic over the suspect drain overnight and see what is caught in the morning. The fix is mechanical cleaning of the drain film with a brush and an enzyme or bacterial drain product. Pouring bleach down the drain does not work, because it runs straight through without removing the film they are breeding in.",
    ],
    [
      { q: "How do I find which drain they are breeding in?", a: "Cover each suspect drain with a clear cup or a piece of tape sticky-side down overnight. Whichever one catches flies by morning is the source. It is a reliable test and it saves treating the whole building." },
      { q: "Will bleach kill drain flies?", a: "Not effectively. Bleach runs straight through and does not remove the organic film lining the pipe, which is what they actually breed in. The film has to be broken up mechanically with a drain brush, then maintained with an enzyme or bacterial product." },
    ],
  ),

  "phorid-fly": D(
    "Phorid fly or fruit fly?",
    [
      "Two things distinguish a phorid fly, and both are easy to check. In profile it has a distinctly humped back — the common name is humpbacked fly. And rather than flying when disturbed, it characteristically runs in short erratic dashes across a surface. Fruit flies hover and have red eyes; phorid flies scurry.",
    ],
    "Phorid flies in Central New York",
    [
      "Phorid flies deserve more attention than their size suggests, because they breed in decaying organic matter that is often somewhere you cannot see — and in older buildings that frequently means a broken or leaking sewer line, a cracked drain under a slab, or organic matter accumulating in a wall or under flooring.",
      "A persistent phorid fly problem in an older Ithaca, Cortland, or Elmira building with century-old plumbing is worth taking seriously as a possible plumbing failure rather than just a fly problem. Identifying the breeding site sometimes means involving a plumber, and finding a broken line early is considerably cheaper than finding it late.",
    ],
    [
      { q: "Why are phorid flies a bigger deal than fruit flies?", a: "Because of where they breed. Phorid flies develop in decaying organic matter that is often concealed — a cracked drain line under a slab, a leaking sewer pipe, or organic buildup in a wall or under flooring. In older buildings a persistent phorid problem can be the first sign of a plumbing failure, so it is worth tracing rather than just treating." },
    ],
  ),

  // ============================================================ VECTORS
  "bed-bug": D(
    "Bed bug or carpet beetle?",
    [
      "This is the most common misidentification in the whole library, and it goes both ways. Adult bed bugs are flat, oval, reddish-brown, about a quarter inch — roughly apple-seed sized — wingless, with no visible hair. Carpet beetle larvae, which are what people usually find, are small, elongated, and distinctly bristly or hairy, and they leave shed skins that look similar enough to cause real confusion.",
      "Bite pattern is suggestive but not proof, since reactions vary enormously and some people show nothing at all. The reliable evidence is physical: live insects, shed skins, and small dark fecal spotting along mattress seams, box spring edges, headboard joints, and the seam where carpet meets baseboard.",
    ],
    "Bed bugs in Central New York",
    [
      "Bed bugs move with people and belongings, which is why this region's calendar is so predictable: the student move cycles in late August and May redistribute them through the off-campus rental stock in Ithaca and Cortland as mattresses, couches, and secondhand furniture change hands and buildings. Hospitality exposure in Watkins Glen and along the wine trail runs on a different clock, peaking with the visitor season.",
      "In connected buildings they travel along shared walls and through outlet and pipe penetrations, so treating a single apartment in isolation commonly fails — the population shifts next door during treatment and returns. That is the single most common reason a bed bug problem in an Elmira or Collegetown building seems never to end.",
      "Nothing about bed bugs correlates with cleanliness. They are a transport problem, and a spotless home receives them exactly as readily as any other.",
    ],
    [
      { q: "How do I know if it is bed bugs or carpet beetles?", a: "Look at the shape and the hair. Bed bugs are flat, oval, reddish-brown, about apple-seed sized, and hairless. Carpet beetle larvae are elongated and visibly bristly. Then check for bed bug evidence specifically — dark fecal spotting and shed skins along mattress seams, box spring edges, and headboard joints." },
      { q: "Does having bed bugs mean my home is dirty?", a: "No. Bed bugs travel on people and belongings — luggage, furniture, boxes — and have nothing to do with cleanliness. A spotless home gets them just as easily. Clutter can make treatment harder by providing more harborage, but it is not the cause." },
      { q: "My neighbor has bed bugs. What should I do?", a: "Ask in writing to have your unit inspected now. They move along shared walls and through outlet and pipe penetrations, so an adjacent unit is the most likely next one. Catching an introduction in its first weeks is a far smaller job than catching it months later." },
    ],
  ),

  "blacklegged-tick": D(
    "Blacklegged tick, dog tick, or lone star tick?",
    [
      "This identification has real health consequences, so it is worth doing carefully. The blacklegged tick — commonly called the deer tick — is small, with an adult female showing a solid dark brown-black shield behind the head and an orange-red body, and legs that are distinctly dark. It has no white markings. Nymphs are roughly poppy-seed sized and are responsible for a large share of Lyme transmission precisely because they are so easily missed.",
      "American dog ticks are noticeably larger with mottled white or silvery patterning on the shield. Lone star tick females have a single conspicuous white dot in the center of the back. Neither of those transmits Lyme.",
    ],
    "Blacklegged ticks in Central New York",
    [
      "The Finger Lakes and Southern Tier sit in a region with substantial Lyme disease incidence, and the blacklegged tick is the vector. Adults are active in spring and again in fall, and will move on any day above freezing — including mild winter days, which surprises people. The nymphs, active in late spring and summer, account for much of the transmission because they are so small.",
      "Exposure concentrates at edges rather than in open lawn: the transition where mown grass meets tall grass, brush, or woodland, and leaf litter under shrubs. That is why maintaining that boundary and treating harborage areas makes a measurable difference, and why properties backing onto woods in Danby, Newfield, Forest Home, or the Danby Road corridor carry more risk than a mown suburban lot.",
      "Prompt removal matters. Transmission generally requires a substantially attached period, so daily checks after time outdoors are among the most effective precautions available.",
    ],
    [
      { q: "How do I tell a deer tick from a dog tick?", a: "Size and markings. Blacklegged (deer) ticks are smaller, with dark legs, a solid dark shield and orange-red body on adult females, and no white markings. American dog ticks are larger with mottled white or silvery patterning. Lone star ticks have a single white dot. Only the blacklegged tick transmits Lyme." },
      { q: "Can a treatment make my property tick-free?", a: "No, and anyone promising that is overselling. Treatment of harborage areas plus maintaining the boundary where lawn meets tall grass and woodland reduces exposure meaningfully around the house. It does not eliminate ticks from a wooded property, so personal checks after time outdoors still matter." },
      { q: "Are ticks only a summer problem here?", a: "No. Adult blacklegged ticks are active in spring and fall and will move on any day above freezing, including mild winter days. The nymphs — the stage responsible for much of the transmission — are active in late spring and summer and are small enough to be missed easily." },
    ],
  ),

  "american-dog-tick": D(
    "Dog tick or blacklegged tick?",
    [
      "American dog ticks are noticeably larger than blacklegged ticks and carry mottled white or silvery markings on the shield behind the head. Blacklegged ticks are smaller, darker-legged, and unmarked. The size difference alone is usually enough once you have seen both.",
    ],
    "American dog ticks in Central New York",
    [
      "Dog ticks favor open, grassy, sunny areas — field edges, trail margins, meadows, and roadsides — rather than the shaded leaf litter and woodland edge where blacklegged ticks concentrate. They are most active in late spring and early summer.",
      "They do not transmit Lyme disease. They are associated with Rocky Mountain spotted fever, which is uncommon in New York, so the practical risk profile is lower than for blacklegged ticks. Correct identification therefore genuinely changes how concerned to be — though prompt removal is good practice regardless.",
    ],
    [
      { q: "I pulled a large tick off my dog. Should I worry about Lyme?", a: "If it was large with mottled white markings, that is an American dog tick, which does not transmit Lyme. Blacklegged ticks — the Lyme vector — are considerably smaller and unmarked. It is still worth removing any tick promptly and keeping an eye on the bite site." },
    ],
  ),

  "lone-star-tick": D(
    "Lone star tick or another tick?",
    [
      "The female is unmistakable: a single bright white or cream dot in the center of the back. Males have fainter white markings around the rear edge of the shield. They are also noticeably aggressive compared with other ticks — they will actively pursue a host rather than waiting.",
    ],
    "Lone star ticks in Central New York",
    [
      "Lone star ticks are far better established in the southern parts of New York — Long Island and the lower Hudson Valley — than in the Finger Lakes and Southern Tier, but their range has been expanding northward. It is reasonable to treat them as present but uncommon here rather than routine.",
      "They are worth knowing about for one unusual reason: their bite is associated with alpha-gal syndrome, a delayed allergic reaction to mammalian meat. They do not transmit Lyme disease. If a tick with a clear white dot is found, that is worth mentioning to a clinician.",
    ],
    [
      { q: "Are lone star ticks in the Finger Lakes?", a: "They are better established in southern New York than here, and remain uncommon in this region, though their range has been moving north. We would describe them as possible rather than routine locally. The female's single white dot makes identification straightforward if one does turn up." },
    ],
  ),

  mosquito: D(
    "Mosquito or crane fly?",
    [
      "Crane flies are the large, gangly, long-legged insects people frequently panic about, calling them giant mosquitoes. They do not bite and do not feed on blood at all. Mosquitoes are much smaller, with a distinct piercing proboscis and scaled wings.",
      "If it is an inch across, wobbling around a porch light, and looks like a mosquito that has been stretched, it is a crane fly and it is harmless.",
    ],
    "Mosquitoes in Central New York",
    [
      "Mosquito pressure in this region is a function of standing water within a surprisingly short distance, and the amount required is small — a clogged gutter, a tarp fold, a saucer under a plant pot, a tire, a bird bath, or a corrugated downspout extension can each produce hundreds. Container breeding around the house typically matters more to what is biting you than the marsh half a mile away.",
      "Low-lying areas carry more pressure: the Ithaca flats near the creeks and the lake, and the Susquehanna floodplain in Owego, particularly in a wet summer. Peak season runs from late spring through early fall.",
      "The honest framing is reduction, not elimination. Removing breeding containers and treating harborage — the shaded, humid vegetation where adults rest during the day — makes a real difference to a yard. No treatment makes a property in a river valley mosquito-free.",
    ],
    [
      { q: "What is the single most effective thing I can do about mosquitoes?", a: "Walk the property and empty every container holding water — gutters, saucers, tarps, tires, toys, buckets, corrugated downspout extensions. It takes very little water to produce hundreds of mosquitoes, and container breeding close to the house usually affects you more than any wetland nearby." },
      { q: "Can you eliminate mosquitoes from my yard?", a: "No, and we will not claim otherwise. Treating resting harborage and removing breeding sites reduces the population using your yard substantially, which is a real improvement you can feel. Elimination is not achievable, especially on low ground near creeks, the lake, or the Susquehanna." },
    ],
  ),

  // ========================================================= OCCASIONAL
  "house-centipede": D(
    "House centipede or something to worry about?",
    [
      "House centipedes are unmistakable and alarming to look at: a flattened grayish-yellow body with dark stripes and fifteen pairs of very long legs, moving in fast bursts. Nothing else in a Central New York home looks like this.",
      "They are predators, not pests in the usual sense — they hunt other insects and spiders, which means a house centipede population indicates a food supply of other arthropods worth paying attention to.",
    ],
    "House centipedes in Central New York",
    [
      "They favor damp environments, which is why they are so common in the region's older stone and fieldstone basements, crawlspaces, and ground-floor bathrooms. Northside Ithaca and other low-lying areas with high water tables see them consistently.",
      "The useful way to think about a centipede problem is as a moisture indicator with a side of information: they are there because it is damp and because there are other insects to eat. Reducing moisture through drainage, ventilation, and dehumidification addresses both at once, and does more than treating the centipedes themselves.",
    ],
    [
      { q: "Are house centipedes dangerous?", a: "Not meaningfully. They can bite if handled but rarely do and it is comparable to a bee sting at worst. They are predators of other household insects. Their presence usually signals dampness and a supply of other insects, both of which are more useful to address than the centipedes." },
    ],
  ),

  silverfish: D(
    "Silverfish or firebrat?",
    [
      "Both are teardrop-shaped, wingless, and fast, with three tail filaments. Silverfish are silvery-gray and prefer cool damp conditions. Firebrats are mottled brown-gray and prefer hot places — near boilers, furnaces, hot water pipes, and ovens. Where you find it is usually the quickest identification.",
    ],
    "Silverfish in Central New York",
    [
      "Silverfish are strongly associated with damp basements, bathrooms, and the undersides of stored cardboard and paper, all of which the region's older housing provides. They feed on starches and cellulose — paper, book bindings, wallpaper paste, cardboard, and natural fabrics — and can damage stored documents and books over time.",
      "They are slow-developing and long-lived, so a population builds gradually and tends to indicate a persistent moisture condition rather than a recent event. Storing paper and textiles in sealed plastic rather than cardboard, and reducing humidity, addresses the conditions directly.",
    ],
    [
      { q: "What are silverfish eating in my house?", a: "Starches and cellulose — paper, cardboard, book bindings, wallpaper paste, and natural fabrics. That is why they turn up in stored boxes, bookshelves, and basements. Moving stored paper and textiles into sealed plastic containers removes the food source and the harborage at once." },
    ],
  ),

  springtail: D(
    "Springtail or flea?",
    [
      "This confusion causes a lot of unnecessary worry, and it is easy to resolve. Both are tiny and both jump. Fleas are laterally flattened, hard-bodied, dark, and bite. Springtails are soft-bodied, often gray, white, or bluish, and do not bite at all — they jump using a spring-loaded appendage under the abdomen.",
      "The decisive question is whether anyone is actually being bitten. Springtails cannot bite. If tiny jumping insects are appearing around damp areas and nobody has bites, springtails are far more likely than fleas.",
    ],
    "Springtails in Central New York",
    [
      "Springtails need moisture constantly and die quickly in dry conditions, which makes them one of the most reliable moisture indicators there is. They appear in damp basements, around sump pits, in overwatered houseplants, in new construction where building materials are still drying, and around plumbing leaks.",
      "Because they are entirely moisture-driven, treating them chemically without fixing the dampness accomplishes very little. Find the water and the springtails resolve themselves.",
    ],
    [
      { q: "Tiny bugs are jumping around my bathroom. Are they fleas?", a: "Probably springtails, especially if nobody is being bitten. Springtails are soft-bodied, often pale or bluish, and cannot bite; fleas are hard-bodied, dark, flattened side-to-side, and do bite. Springtails indicate moisture, so the real question is where the dampness is coming from." },
    ],
  ),

  earwig: D(
    "Earwig — and does it really go in your ear?",
    [
      "Earwigs are easy to identify: elongated, reddish-brown, with prominent forceps-like pincers at the rear. Males have curved pincers, females straighter ones. Nothing else in a local home has that rear-end structure.",
      "The folklore is false. Earwigs do not burrow into ears or brains. The pincers are used for defense and handling prey, and while a large one can deliver a pinch, it is harmless.",
    ],
    "Earwigs in Central New York",
    [
      "Earwigs are moisture-loving and nocturnal, sheltering during the day under mulch, stones, boards, leaf litter, and in the damp gap between siding and foundation. They come indoors mainly during weather extremes — heavy rain driving them out, or a dry spell driving them toward moisture.",
      "Because they are an outdoor insect that wanders in, the effective work is at the perimeter: pulling mulch and leaf litter back from the foundation, improving drainage, and sealing at ground level. They damage seedlings and soft plants in the garden but do not harm structures.",
    ],
    [
      { q: "Do earwigs crawl into your ears?", a: "No. That is folklore with no basis. They shelter in damp dark places outdoors — under mulch, boards, and leaf litter — and wander indoors during very wet or very dry stretches. The pincers are for defense and prey handling; a large one can pinch, but it is harmless." },
    ],
  ),

  "pill-bug": D(
    "Pill bug or sow bug?",
    [
      "Pill bugs roll into a tight ball when disturbed; sow bugs cannot, and have two small tail-like appendages at the rear. Both are gray, segmented, and armored-looking. Neither is an insect — they are terrestrial crustaceans, which is why they need constant moisture.",
    ],
    "Pill bugs in Central New York",
    [
      "Pill bugs live in damp soil, mulch, leaf litter, and under stones and boards, feeding on decaying plant material. They wander into basements, garages, and ground-floor rooms through foundation gaps, and they typically die within a day or two indoors because it is too dry for them.",
      "Finding them indoors is essentially a moisture report on the foundation perimeter. Pulling mulch back from the walls, improving grading and drainage, and sealing at ground level solves it far more reliably than any treatment.",
    ],
    [
      { q: "I keep finding dead pill bugs in my basement. Why?", a: "Because indoors is too dry for them — they are crustaceans and need constant moisture, so they dehydrate within a day or two. Finding them inside means they are getting in at ground level and that the perimeter is damp. Pulling mulch back from the foundation and improving drainage addresses the cause." },
    ],
  ),

  "camel-cricket": D(
    "Camel cricket or spider?",
    [
      "Camel crickets are often called spider crickets or sprickets because of the resemblance — a humpbacked body, very long legs and antennae, and no wings. They are tan to brown, often mottled. Unlike true crickets they do not chirp, having no wings to produce sound with.",
      "The behavior that unnerves people is that they jump toward disturbance rather than away, apparently as a defense. It is startling and entirely harmless.",
    ],
    "Camel crickets in Central New York",
    [
      "They are a fixture of damp basements, crawlspaces, and under-porch spaces throughout the region, and the older housing stock with stone foundations and dirt crawlspaces gives them ideal conditions. They feed on organic debris and fungi and can chew fabric or stored paper when populations are large.",
      "As with most of the occasional-invader group, they are a moisture and access story. Drying the space, sealing at ground level, and reducing debris and cardboard storage in basements does the real work.",
    ],
    [
      { q: "Why do camel crickets jump at me?", a: "It appears to be a defensive response — they jump toward a disturbance rather than away from it, which is startling but entirely harmless. They cannot bite meaningfully and do not chirp. Their presence points to a damp basement or crawlspace." },
    ],
  ),

  "carpet-beetle": D(
    "Carpet beetle or bed bug?",
    [
      "This is the reverse of the most common bed bug misidentification, and worth getting right in both directions. Adult carpet beetles are small, rounded, and mottled — black, white, brown, or orange patterning depending on species. The larvae, which cause the actual damage and are what people usually find, are elongated and distinctly bristly with visible hairs.",
      "Bed bugs are flat, oval, reddish-brown, and completely hairless. Carpet beetle larvae shed skins that superficially resemble bed bug evidence, which is where the confusion arises. Hair is the deciding feature: bristly means carpet beetle.",
    ],
    "Carpet beetles in Central New York",
    [
      "Carpet beetle larvae feed on natural animal fibers — wool, silk, fur, feathers, leather, and felt — as well as accumulated pet hair and lint. They do not touch synthetics. In practice that means damage shows up in stored wool clothing and blankets, wool rugs, taxidermy, felt in piano actions, and undisturbed accumulations under furniture and along baseboard edges.",
      "Older homes with wool carpeting, stored textiles in attics, and long-undisturbed corners are the usual sites, which describes a lot of housing in this region. Damage is often discovered long after it happened, when a stored item is finally unpacked.",
    ],
    [
      { q: "Something is eating holes in my wool sweaters. Moths or carpet beetles?", a: "Either is possible, and the evidence differs. Clothes moths leave silk webbing or cases near the damage; carpet beetle larvae leave bristly shed skins and no webbing. Both feed only on natural animal fibers — wool, silk, fur, feathers — and ignore synthetics." },
      { q: "I found small shed skins near my bed. Is it bed bugs?", a: "Check whether they are bristly. Carpet beetle larval skins are hairy; bed bug skins are smooth, flat, and oval. Also look for dark fecal spotting along mattress seams and box spring edges, which indicates bed bugs and which carpet beetles do not produce." },
    ],
  ),

  // ================================================== WOOD-DESTROYING
  "eastern-subterranean-termite": D(
    "Termite or carpenter ant?",
    [
      "The three checks are waist, antennae, and wings. Termites have a broad straight-sided body with no pinched waist, straight beaded antennae, and — in the winged stage — two pairs of wings of equal length that shed easily, often leaving small piles of discarded wings on windowsills. Carpenter ants have a pinched waist, elbowed antennae, and wings of unequal length.",
      "Damage differs as clearly. Termites pack galleries with soil and mud and build mud tubes up foundation walls to maintain contact with the ground. Carpenter ants keep galleries clean and smooth and push out coarse frass. Mud tubes are essentially diagnostic.",
    ],
    "Eastern subterranean termites in Central New York",
    [
      "Termite pressure in this region is genuinely lower than in much of the country, and activity in the Finger Lakes and Southern Tier is scattered rather than uniform. The overwhelming majority of structural insect damage we see here is carpenter ant, not termite. It is worth saying plainly, because homeowners often assume the worst.",
      "That said, eastern subterranean termites do occur in New York, and they require soil contact and moisture. Where they do turn up it is typically associated with wood-to-soil contact, damp crawlspaces, and buried or ground-contacting structural wood.",
      "This is the insect a WDI inspection for a real estate transaction is primarily looking for, which is when most homeowners in the region encounter the question at all.",
    ],
    [
      { q: "Do we actually have termites in the Finger Lakes?", a: "They occur in New York but are far less prevalent here than in much of the country, and activity locally is scattered. The overwhelming majority of structural insect damage in this region is carpenter ant. If you find damage, carpenter ant is much the more likely cause — but identification should still be done properly." },
      { q: "What is the clearest sign of termites rather than ants?", a: "Mud tubes — pencil-width soil tunnels running up foundation walls or piers — are close to diagnostic, because termites need to maintain contact with soil moisture. Discarded wings of equal length on windowsills after a swarm is the other strong sign. Carpenter ants produce neither." },
    ],
  ),

  "powderpost-beetle": D(
    "Powderpost beetle or old house borer?",
    [
      "Exit hole size separates them at a glance. Powderpost beetles leave small round holes roughly the diameter of a pencil lead — about a sixteenth to an eighth of an inch — with fine, flour-like frass that feels genuinely powdery between the fingers. Old house borers leave much larger oval holes, about a quarter to three eighths of an inch, with coarser, gritty frass.",
      "Wood type is the other clue: powderpost beetles attack hardwoods, so flooring, trim, furniture, and hardwood structural members. Old house borers attack softwood framing.",
    ],
    "Powderpost beetles in Central New York",
    [
      "In this region powderpost beetles turn up most in older homes with hardwood flooring, trim, and exposed hardwood framing, and in antique furniture — all of which the area's housing stock supplies abundantly. They can also arrive in newly milled hardwood or reclaimed lumber that was infested before installation.",
      "The critical question with any hole-in-wood finding is whether the activity is current or historical. Fresh, pale-colored frass that keeps reappearing after you clean it away indicates an active infestation; old holes with darkened edges and no new frass may be decades dead. That distinction determines whether treatment is needed at all, and it is worth having someone look before assuming either way.",
    ],
    [
      { q: "How do I know if the holes in my floor are old or active?", a: "Clean the frass away completely and mark the date. If fresh, pale, powdery frass reappears over the following weeks, the infestation is active. Old holes with darkened edges and no new frass may be long dead. That single test decides whether treatment is warranted." },
    ],
  ),

  "old-house-borer": D(
    "Old house borer or powderpost beetle?",
    [
      "Old house borer exit holes are large and oval — roughly a quarter to three eighths of an inch — while powderpost beetle holes are small and round. The frass is coarse and gritty rather than flour-fine. Old house borers attack softwood framing; powderpost beetles attack hardwoods.",
      "There is one further sign unique to this insect: in a quiet room you can sometimes hear the larvae rasping inside the wood, a faint ticking or scraping. It is unnerving and it is a genuine diagnostic.",
    ],
    "Old house borers in Central New York",
    [
      "Despite the name, old house borers are most often found in relatively new softwood construction — the larvae can develop for years inside framing lumber, so an infestation frequently originates in wood that was already infested when the house was built.",
      "They attack seasoned softwood structural members, particularly in warm areas like attics and framing near heat. Because the larval stage is long, damage accumulates slowly but can become structurally significant in the framing members affected.",
    ],
    [
      { q: "I can hear a faint rasping in the wall. Is that insects?", a: "Possibly old house borer larvae, which can be audible as a faint ticking or scraping as they feed inside softwood framing. It is one of the few wood-destroying insects you can actually hear. Worth an inspection to confirm rather than guess." },
    ],
  ),

  // ============================================================ WILDLIFE
  "little-brown-bat": D(
    "Little brown bat or big brown bat?",
    [
      "Size and roosting behavior separate them. Little brown bats are smaller, with a wingspan around eight to nine inches and glossy brown fur. Big brown bats are noticeably larger, with a wingspan closer to thirteen inches. Big brown bats are the species more commonly found overwintering inside buildings in this region; little brown bats more often use buildings as summer maternity roosts.",
    ],
    "Little brown bats in Central New York",
    [
      "The little brown bat was once the most common bat in New York attics and has been devastated by white-nose syndrome, with populations reduced dramatically. It now carries protected status in New York, which changes the legal picture around exclusion work considerably.",
      "New York restricts bat exclusion during the summer maternity season, and the reason is practical as well as legal: flightless pups sealed inside without the adults will die in the structure, which is both inhumane and creates a far worse problem than the original. Exclusion has to be timed to the permitted window.",
      "Any bat found in a room where someone was sleeping, or with a child or an impaired person, should be captured rather than released so it can be tested, and public health should be consulted. That is standard guidance and it matters.",
    ],
    [
      { q: "When can bats legally be removed from my attic?", a: "Outside the summer maternity season, which New York restricts specifically because flightless pups would be sealed in without the adults. We can inspect at any time and plan the work, but the exclusion itself has to be scheduled for the permitted window. Anyone offering to seal a maternity roost mid-summer is not doing it properly." },
      { q: "A bat got into my bedroom overnight. What should I do?", a: "Do not release it. If a bat is found in a room where someone was sleeping, or with a young child or someone unable to report a bite, it should be safely contained so it can be tested, and you should contact your county health department. Bites from bats can be very hard to detect." },
    ],
  ),

  "big-brown-bat": D(
    "Big brown bat or little brown bat?",
    [
      "Big brown bats are the larger of the two, with a wingspan near thirteen inches and heavier build. Little brown bats are smaller and glossier. For a homeowner the practical difference is seasonal: big brown bats are considerably more tolerant of cold and are the species most often found overwintering inside buildings here, which is why a bat appearing indoors in January is usually this one.",
    ],
    "Big brown bats in Central New York",
    [
      "Big brown bats are now the bat most commonly encountered in buildings in this region, having fared better through white-nose syndrome than little brown bats. They roost in attics, soffits, behind shutters and siding, and in wall voids, and they can overwinter in a heated structure rather than migrating to a hibernaculum.",
      "That overwintering habit is why big brown bats turn up in living space in the middle of winter — a bat roosting in a wall void wakes and moves the wrong direction. Exclusion is still subject to New York's maternity-season timing restrictions.",
      "As with any bat, one found in a bedroom or with a child or impaired person should be contained for testing rather than released.",
    ],
    [
      { q: "Why did a bat appear in my house in the middle of winter?", a: "Most likely a big brown bat overwintering in a wall void or attic that woke and moved into living space instead of out. Unlike little brown bats, they commonly overwinter inside heated structures here rather than migrating. It usually indicates a roost in the building." },
    ],
  ),

  "gray-squirrel": D(
    "Gray squirrel or flying squirrel?",
    [
      "The single most useful diagnostic is time of day. Gray squirrels are strictly daytime animals — if you hear activity in the attic in daylight, particularly early morning, that is a gray squirrel. Flying squirrels are nocturnal, so scurrying that starts at dusk and continues through the night is almost certainly flying squirrels.",
      "Sound differs too. Gray squirrels are heavy enough to sound like something walking or rolling; flying squirrels are lighter and faster, often described as skittering. Gray squirrels are also much larger, with a full bushy tail.",
    ],
    "Gray squirrels in Central New York",
    [
      "Gray squirrels get into attics and soffits primarily via overhanging limbs, and mature tree canopy touching a roofline is the common denominator on nearly every job. That makes Cayuga Heights, Forest Home, Cornell Heights, and the older tree-lined neighborhoods particularly prone.",
      "There are two entry pushes each year, corresponding to the two breeding periods — late winter into spring, and again in late summer. A female looking for a nest site will chew and enlarge existing gaps at roof edges, gable vents, and soffit corners.",
      "Removal without exclusion is the standard failure. Trapping the animal currently in the attic leaves an open, known entry point, and another squirrel finds it — often within the same year. Sealing the entries and cutting back the limbs that provide access is what actually resolves it.",
    ],
    [
      { q: "How do I tell what is in my attic without seeing it?", a: "Note when you hear it. Daytime activity, especially early morning, indicates gray squirrels. Activity that begins at dusk and runs through the night suggests flying squirrels or bats. That single observation narrows it substantially, and with bats it matters legally because exclusion timing is restricted." },
      { q: "We had a squirrel removed and another one came back. Why?", a: "Because the opening is still there. Removal without exclusion leaves an accessible, proven entry point that another squirrel will find, often the same season. Sealing all the entries and trimming back the limbs that give roof access is what makes it stop." },
    ],
  ),

  "flying-squirrel": D(
    "Flying squirrel or gray squirrel?",
    [
      "Flying squirrels are strictly nocturnal, which is the giveaway — attic noise that begins at dusk and continues through the night. They are much smaller than gray squirrels, with very large dark eyes, silky gray-brown fur, and a loose fold of skin between front and hind legs that they use to glide.",
      "They also behave differently in a structure: flying squirrels are social and often present in groups, so what sounds like a large amount of activity for a small animal usually is exactly that.",
    ],
    "Flying squirrels in Central New York",
    [
      "Flying squirrels are far more common in this region than most people realize, precisely because they are nocturnal and rarely seen. Wooded properties with mature trees close to the house — Forest Home, the gorge edges, Cayuga Heights, and rural wooded parcels throughout the five counties — host them regularly.",
      "Because they are colonial, an attic occupancy often involves several animals rather than one, and because they are small they exploit openings a gray squirrel could not use. That makes a thorough inspection more important than usual: sealing the obvious hole while missing three smaller ones accomplishes nothing.",
    ],
    [
      { q: "Something is active in my attic only at night. What is it?", a: "Most likely flying squirrels or bats — both are nocturnal, unlike gray squirrels, which are strictly daytime. Flying squirrels tend to sound like fast skittering and are often present in groups. Identifying which one matters, because bat exclusion is legally restricted by season." },
    ],
  ),

  raccoon: D(
    "Raccoon or something smaller?",
    [
      "Raccoons are heavy, and that is usually the first clue — attic or chimney noise from a raccoon sounds like a person moving around, quite unlike the skittering of squirrels. They are nocturnal, and the vocalizations of a female with young are distinctive: chittering, mewing, and crying sounds that people often mistake for birds or even a cat.",
      "Tracks are diagnostic where visible: the front paw print looks remarkably like a small human hand.",
    ],
    "Raccoons in Central New York",
    [
      "Raccoons commonly den in attics, chimneys, and under decks and porches, and the great majority of building intrusions in spring involve a female seeking a safe place to raise young. That timing matters enormously for how the job has to be handled.",
      "Removing or excluding an adult female while dependent kits remain in the structure leaves the young to die inside — an inhumane outcome and a serious odor and sanitation problem in a wall or attic. Any spring raccoon job needs to establish whether young are present before anything is sealed.",
      "Raccoons are also a rabies vector species in New York, and their droppings can carry raccoon roundworm, so contaminated attic insulation is a genuine health matter rather than just a mess. Cleanup should be handled accordingly.",
    ],
    [
      { q: "There is a raccoon in my attic in the spring. Can it just be removed?", a: "Not without first establishing whether there are young. Most spring attic raccoons are females denning to raise kits, and excluding the mother while the young remain leaves them to die inside the structure — inhumane, and a severe odor and sanitation problem. The young have to be accounted for first." },
      { q: "Is raccoon waste in an attic actually a health issue?", a: "Yes. Raccoon droppings can carry raccoon roundworm, and raccoons are a rabies vector species in New York. Contaminated insulation should be handled as a genuine cleanup job with appropriate protection, not simply swept out." },
    ],
  ),

  skunk: D(
    "Skunk or woodchuck under the deck?",
    [
      "Both dig burrows under decks, sheds, and porches, and the burrow itself often tells you which. Skunk entrances tend to be smaller, roughly six to eight inches, with a low mound of excavated soil and often a faint musky smell even without a spraying event. Woodchuck holes are larger, ten to twelve inches, with a substantial mound of fresh earth.",
      "Timing helps: skunks are nocturnal, woodchucks are active in daylight. Small conical divots across a lawn — the marks of a skunk digging for grubs — are another reliable skunk sign.",
    ],
    "Skunks in Central New York",
    [
      "Skunks den under decks, porches, sheds, and outbuildings throughout the region, and denning season in spring means young are frequently present — the same consideration that applies to raccoons. Sealing an entrance with a female and kits underneath is both inhumane and results in a serious odor problem in a very awkward location.",
      "Lawn damage is often the first complaint rather than the animal itself: skunks dig small conical holes hunting grubs, and heavy grub pressure in a lawn will draw them. Addressing the grubs sometimes addresses the skunk.",
      "Skunks are a rabies vector species in New York, so any skunk showing daytime activity, disorientation, or unusual boldness is worth reporting rather than approaching.",
    ],
    [
      { q: "Something is digging small holes all over my lawn overnight.", a: "That pattern — small conical divots appearing overnight — is characteristic of skunks digging for grubs. The lawn damage is a symptom of a grub population, so dealing with the grubs often reduces the skunk visits along with it." },
      { q: "Can the burrow under my shed just be filled in?", a: "Not without checking first, particularly in spring. Sealing a den with a female and young inside is inhumane and produces a severe odor problem somewhere very hard to reach. The occupancy needs to be confirmed and the animals out before anything is closed." },
    ],
  ),

  woodchuck: D(
    "Woodchuck or skunk burrow?",
    [
      "Woodchuck burrows are large — typically ten to twelve inches across — with a conspicuous mound of excavated soil at the main entrance, and there are usually one or more concealed secondary entrances without mounds. Skunk holes are smaller with less spoil. Woodchucks are also active in daylight, while skunks are nocturnal.",
      "The animal itself is unmistakable: heavy-bodied, grizzled brown, often seen sitting upright near the burrow or feeding in a garden.",
    ],
    "Woodchucks in Central New York",
    [
      "Woodchucks are common throughout the region's agricultural and semi-rural areas, and they burrow beneath sheds, decks, porches, and barn foundations as readily as in open field. The structural concern is real: an extensive burrow system under a slab, shed, or foundation edge can undermine it over time, and burrow entrances near equipment paths are a genuine hazard on farm properties.",
      "Garden damage is the more common complaint. They are strict herbivores and can strip a vegetable garden efficiently.",
      "Exclusion works well for this species when done properly — burying fencing or barrier material below the burrow depth rather than simply blocking the visible entrance, which they will otherwise dig around or reopen.",
    ],
    [
      { q: "Is a woodchuck burrow under my shed actually a problem?", a: "It can be. Woodchuck burrow systems are extensive, and under a shed, slab, deck, or foundation edge they can undermine the structure over time. On farm properties, entrances along equipment routes are also a real hazard. It is worth addressing rather than ignoring." },
      { q: "How do you keep them from just digging back in?", a: "Barrier material has to extend below burrow depth rather than simply covering the opening — an L-shaped buried apron is the usual approach. Blocking the visible entrance alone reliably fails, because they dig around it or open one of the concealed secondary entrances." },
    ],
  ),
};

export const getPestDeep = (slug: string): PestDeep | undefined => pestContentDeep[slug];
