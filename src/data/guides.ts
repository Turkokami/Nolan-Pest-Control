/**
 * guides.ts — Tier 6 problem-aware micro-pages (audit §8.7).
 * Capture searchers who describe a symptom rather than name a pest. High AEO capture, low
 * competition. Each guide leads with a direct answer, then a few short sections, and links to
 * the relevant service. Rendered through /guides/[slug].
 */

export interface GuideSection {
  heading?: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  question: string; // the searcher's question, verbatim-ish (used for FAQ schema)
  answerLead: string; // direct answer up top
  sections: GuideSection[];
  relatedServices: string[];
}

export const guides: Guide[] = [
  {
    slug: "scratching-in-the-walls-at-night",
    title: "Scratching in the Walls at Night: Mice or Something Bigger?",
    question: "What's scratching in my walls at night?",
    answerLead:
      "Light, fast scratching and scurrying inside walls or ceilings — especially at dusk and after dark — is most often mice. Slower, heavier thumping or scratching, particularly in the attic or at dawn, points to something bigger like squirrels, and loud movement can mean raccoons. The timing and weight of the sound are the biggest clues.",
    sections: [
      {
        heading: "Mice: light, fast, and in the walls",
        paragraphs: [
          "Mice are the most common cause of nighttime wall noise in Central New York, especially in fall and winter. You'll hear quick scratching and scurrying inside walls and above ceilings, often accompanied by droppings in cabinets or along baseboards. Mice are nocturnal, so the noise picks up after dark.",
        ],
      },
      {
        heading: "Squirrels: heavier, and usually in the attic",
        paragraphs: [
          "If the sound is louder, comes from the attic, and is most active at dawn and dusk, squirrels are likely. Gray squirrels are day-active; flying squirrels are nocturnal and often mistaken for mice until you notice the heavier movement. Squirrels chew, which makes them a wiring and fire risk.",
        ],
      },
      {
        heading: "Raccoons: loud and heavy",
        paragraphs: [
          "Distinct thumping, heavy movement, or vocal sounds — especially in spring — can mean a raccoon denning in the attic or chimney, often a female with young. Raccoons cause significant damage and carry health risks, so this one is firmly a call-a-professional situation.",
        ],
      },
      {
        heading: "What to do",
        paragraphs: [
          "Don't wait — whatever it is, it's easier to resolve early. We inspect to identify the animal, find how it's getting in, remove it, and seal the entry points so it can't return. The right approach depends entirely on the species, which is why identification comes first.",
        ],
      },
    ],
    relatedServices: ["rodent-control", "squirrel-removal", "wildlife-removal"],
  },
  {
    slug: "bat-in-my-house-what-to-do",
    title: "There's a Bat in My House: What to Do Right Now",
    question: "There's a bat in my house — what should I do?",
    answerLead:
      "Stay calm, keep pets and children out of the room, and close interior doors to confine the bat to one space. Open an exterior window or door so it can leave on its own. Do not release it outside if anyone may have been bitten or exposed while sleeping — in that case the bat must be safely captured for rabies testing. When in doubt, call a professional.",
    sections: [
      {
        heading: "First steps",
        paragraphs: [
          "Confine the bat by closing doors to other rooms, and give it a way out by opening a window or exterior door. Most single bats will leave on their own once the room is quiet and dark and there's an exit. Don't swat at it — that risks injuring the bat and getting bitten.",
        ],
      },
      {
        heading: "The rabies question matters",
        paragraphs: [
          "This is important: if a bat is found in a room where someone was sleeping, or with a child or someone unable to report a bite, public-health guidance is not to release it, because a bite can be tiny and unnoticed. The bat should be safely captured so it can be tested for rabies. If there's any chance of exposure, contact your doctor or local health department and don't let the bat go.",
        ],
      },
      {
        heading: "One bat often means more",
        paragraphs: [
          "A single bat in the living space, especially in summer, can be a sign of a colony roosting in your attic. If you're finding bats repeatedly, you likely have a roost that needs humane exclusion — sealing them out legally and at the right time of year.",
        ],
      },
      {
        heading: "How we help",
        paragraphs: [
          "We safely remove bats from living spaces, assess whether there's a roost, and perform humane, legal exclusion — working within New York's maternity-season restriction so flightless pups are never trapped. If a bat needs to be retained for testing, we can handle it safely.",
        ],
      },
    ],
    relatedServices: ["bat-removal-exclusion"],
  },
  {
    slug: "bed-bugs-collegetown-apartment-renters-guide",
    title: "Bed Bugs in a Collegetown Apartment: A Renter's Guide",
    question: "I found bed bugs in my Collegetown apartment — what do I do?",
    answerLead:
      "Report it to your landlord or property manager in writing immediately, don't try to treat it yourself with store sprays (they scatter bed bugs and make it worse), and don't move belongings to another unit or a friend's place, which spreads them. In New York, landlords are generally responsible for treating infestations under the Warranty of Habitability.",
    sections: [
      {
        heading: "Confirm and report",
        paragraphs: [
          "Look for small reddish-brown bugs the size of an apple seed in mattress seams and furniture joints, dark fecal spotting, and itchy bites in rows. Once you're fairly sure, report it to your landlord in writing right away and keep a copy. Early reporting matters because bed bugs spread quickly between units in dense Collegetown buildings.",
        ],
      },
      {
        heading: "Know your rights",
        paragraphs: [
          "Under New York Real Property Law §235-b, the Warranty of Habitability, landlords are generally responsible for addressing pest infestations, including bed bugs. That usually means your landlord — not you — is responsible for arranging and paying for professional treatment. (This is general information, not legal advice; a tenant-rights resource can help with specific disputes.)",
        ],
      },
      {
        heading: "Don't make it worse",
        paragraphs: [
          "Store-bought sprays and foggers tend to scatter bed bugs deeper into cracks and rarely reach the eggs, often making an infestation harder to eliminate. Moving your mattress to the curb or your things to a friend's apartment just spreads the problem. Bag and hot-dry your bedding and clothing, reduce clutter, and wait for professional treatment.",
        ],
      },
      {
        heading: "How treatment works",
        paragraphs: [
          "Professional treatment inspects all the harborage, treats it thoroughly, and includes a required follow-up to catch the eggs that hatch after the first visit. In a building, connected units should be treated together. We work with Collegetown landlords and tenants to coordinate exactly this.",
        ],
      },
    ],
    relatedServices: ["bed-bug"],
  },
  {
    slug: "landlord-wont-deal-with-pests-ny-renters-rights",
    title: "My Landlord Won't Deal With the Pest Problem: New York Renter's Rights",
    question: "My landlord won't deal with a pest problem — what are my rights in New York?",
    answerLead:
      "In New York, significant pest infestations can breach the Warranty of Habitability (Real Property Law §235-b), which generally makes landlords responsible for keeping rental units livable — including addressing rodents, cockroaches, and bed bugs. Put your request in writing, keep records, and if the landlord doesn't act, a tenant-rights organization or attorney can advise on next steps.",
    sections: [
      {
        heading: "What the law generally requires",
        paragraphs: [
          "The Warranty of Habitability entitles residential tenants in New York to a livable, safe, and sanitary home. Courts have generally treated serious infestations as conditions that can breach this warranty when a landlord fails to address them, placing primary responsibility on the landlord rather than the tenant. (This is general information, not legal advice.)",
        ],
      },
      {
        heading: "Document everything",
        paragraphs: [
          "Report the problem to your landlord in writing (email or letter), describe it clearly, and keep copies of everything, including dates. Photos of the pests or evidence help. A written record is what protects you if the issue escalates.",
        ],
      },
      {
        heading: "If the landlord still won't act",
        paragraphs: [
          "Tenants have options that can include contacting a local code-enforcement or health department, reaching out to a tenant-rights organization, or consulting an attorney about remedies. The right path depends on your situation, so getting advice specific to your circumstances is worthwhile.",
        ],
      },
      {
        heading: "Our role",
        paragraphs: [
          "We work with both tenants and landlords across Tompkins, Cortland, and Chemung counties and can document infestations and treatment professionally — the kind of record that helps resolve these situations. If your landlord is ready to act, we can be scheduled quickly.",
        ],
      },
    ],
    relatedServices: ["bed-bug", "roach-control", "rodent-control"],
  },
  {
    slug: "carpenter-ants-or-termites-how-to-tell",
    title: "Carpenter Ants or Termites? How to Tell the Difference",
    question: "How do I tell carpenter ants from termites?",
    answerLead:
      "Carpenter ants have a pinched waist, bent antennae, and (when winged) two pairs of different-sized wings; they leave clean galleries and sawdust-like shavings. Termites have a straight, broad waist, straight antennae, and equal-length wings; they eat the wood and leave mud tubes and soil-flecked galleries. In Central New York, carpenter ants are far more common than termites.",
    sections: [
      {
        heading: "Look at the body and wings",
        paragraphs: [
          "The clearest tell is the waist: carpenter ants have the classic narrow, pinched ant waist, while termite bodies are broad and straight-sided. Carpenter ant antennae are bent (elbowed); termite antennae are straight. If they're swarming, carpenter ants have two pairs of wings of different sizes, while termite swarmers have four wings all the same length that break off easily.",
        ],
      },
      {
        heading: "Look at the damage",
        paragraphs: [
          "Carpenter ants don't eat wood — they excavate smooth, clean galleries to nest and push out sawdust-like frass, which you'll find near woodwork. Termites eat the wood and leave galleries flecked with soil and mud, plus the telltale mud tubes running from the ground to the wood.",
        ],
      },
      {
        heading: "Why it matters in CNY",
        paragraphs: [
          "In Central New York, the large black ants in your home are almost always carpenter ants, which thrive in our older, moisture-prone wood. Termites do occur here but are far less common. The two need different treatment, so correct identification is the first step — and if you're buying or selling a home, a WDI inspection covers both.",
        ],
      },
    ],
    relatedServices: ["carpenter-ant-control", "termite-control", "wdi-inspection-real-estate"],
  },
  {
    slug: "flies-on-upstairs-windows-every-fall",
    title: "Hundreds of Flies on the Upstairs Windows Every Fall",
    question: "Why do I get hundreds of flies on my upstairs windows every fall?",
    answerLead:
      "Those are almost certainly cluster flies — slow, dark flies that gather on warm upstairs windows in fall and again on warm days in late winter. They come from the soil and fields around your home and enter your walls and attic to overwinter. You can't spray them out once they're inside; the fix is a timed exterior barrier before they get in.",
    sections: [
      {
        heading: "Why upstairs, why fall",
        paragraphs: [
          "Cluster flies enter the structure in fall to overwinter in wall voids and attics, drawn to the warm, sunny sides of the house. When the warmth of the house or a mild winter day wakes them, they move toward light — which means upstairs windows. That's why you see dozens or hundreds of slow flies on the glass while the rest of the house seems fine.",
        ],
      },
      {
        heading: "They're not a hygiene problem",
        paragraphs: [
          "Cluster flies don't come from garbage or anything inside your home — their larvae develop in earthworms in the soil, so they're a feature of rural and suburban properties with lawns and fields nearby. A spotless country home can be full of them.",
        ],
      },
      {
        heading: "The fix is timing",
        paragraphs: [
          "Once they're overwintering in your walls, interior spraying only addresses the few that emerge. The effective solution is a timed exterior barrier applied in late summer to early fall, before they move in, plus sealing entry points. It's one of the easiest fall pest problems to get ahead of.",
        ],
      },
    ],
    relatedServices: ["cluster-fly-control", "overwintering-pests"],
  },
  {
    slug: "yellowjackets-going-into-the-siding",
    title: "Yellowjackets Going Into the Siding: What It Means",
    question: "There are yellowjackets going in and out of my siding — what do I do?",
    answerLead:
      "Steady yellowjacket traffic in and out of a gap in your siding means there's a nest inside the wall void. Do not seal the opening — trapped yellowjackets often chew through into the living space. This is a hidden nest that should be treated professionally, especially in late summer when colonies are large and aggressive.",
    sections: [
      {
        heading: "Why you shouldn't seal it",
        paragraphs: [
          "It's tempting to caulk or stuff the entry hole, but that's the worst move. Blocked yellowjackets will look for another way out — and that often means chewing through the interior wall into your home. The nest has to be treated first; sealing comes after the colony is dead.",
        ],
      },
      {
        heading: "Why late summer is dangerous",
        paragraphs: [
          "Yellowjacket colonies grow all season and peak in late summer and early fall, when they can number in the thousands and turn highly defensive. A wall-void nest disturbed at that point can produce a lot of stings fast — a serious risk, especially for anyone with a sting allergy.",
        ],
      },
      {
        heading: "How we handle it",
        paragraphs: [
          "We treat the void so the whole colony is eliminated, using protective equipment and the right timing, then address the entry point. Wall and ground yellowjacket nests are exactly the ones you shouldn't tackle yourself, and we prioritize these calls.",
        ],
      },
    ],
    relatedServices: ["stinging-insects", "wasp-hornet-nest-removal"],
  },
  {
    slug: "mouse-droppings-in-drawer-health-risk",
    title: "Mouse Droppings in the Silverware Drawer: Is It a Health Risk?",
    question: "I found mouse droppings in my drawer — is it a health risk?",
    answerLead:
      "Yes, mouse droppings and urine can carry bacteria and viruses and should be cleaned up carefully — but don't sweep or vacuum them dry, which can send particles into the air. Disinfect, wet-wipe, and dispose of them with gloves, then wash any affected items. Finding droppings in a drawer also means mice are active inside and it's time to address the infestation.",
    sections: [
      {
        heading: "Clean up safely",
        paragraphs: [
          "Ventilate the area, put on disposable gloves, and dampen the droppings with a disinfectant or diluted bleach solution before wiping them up — never sweep or vacuum dry droppings, which can aerosolize particles. Bag and dispose of them, wash any contaminated silverware and surfaces in hot soapy water, and wash your hands thoroughly afterward.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Rodent droppings and urine can carry disease and trigger allergies, and contamination in a food-contact area like a silverware drawer is worth taking seriously. In rural areas, deer mice add a hantavirus concern, which is another reason not to disturb droppings dry.",
        ],
      },
      {
        heading: "Deal with the source",
        paragraphs: [
          "Droppings in a drawer mean mice are traveling through your kitchen. Cleaning up is only half the job — you need to remove the mice and seal the entry points so they don't return. We handle both, plus guidance on safe cleanup.",
        ],
      },
    ],
    relatedServices: ["rodent-control", "rodent-exclusion-sealing"],
  },
  {
    slug: "something-died-in-the-wall-odor-removal",
    title: "Something Died in the Wall: Dealing With the Odor",
    question: "Something died in my wall and it smells — what can I do?",
    answerLead:
      "The strong, sickly odor of a dead animal in a wall usually means a mouse, rat, or other small animal died in a void, and unfortunately the only real fix is removal — odor products and air fresheners only mask it. The smell typically peaks over one to two weeks and fades as the carcass dries, but locating and removing it is the fastest resolution.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Animals that get into walls and attics — often mice or rats, sometimes a bird or squirrel — can die in inaccessible voids, especially after they've been poisoned or become trapped. As they decompose, the odor permeates the room, and it can be surprisingly strong for a small animal.",
        ],
      },
      {
        heading: "What actually works",
        paragraphs: [
          "Masking products and ozone treatments provide only temporary relief; the durable fix is finding and removing the carcass. That sometimes means locating the spot by smell and access and, occasionally, opening a small section of wall. Once removed and the area is cleaned, the odor resolves.",
        ],
      },
      {
        heading: "Prevent the next one",
        paragraphs: [
          "A dead-animal-in-the-wall problem is a sign that animals are getting into your structure. After removal, exclusion sealing keeps the next mouse or rat from getting in — and from dying somewhere you can't reach. We handle removal, cleanup, and sealing.",
        ],
      },
    ],
    relatedServices: ["rodent-control", "rodent-exclusion-sealing", "wildlife-removal"],
  },
  {
    slug: "tick-on-my-dog-lyme-risk-finger-lakes",
    title: "Found a Tick on My Dog: Lyme Risk in the Finger Lakes",
    question: "I found a tick on my dog — should I worry about Lyme in the Finger Lakes?",
    answerLead:
      "Ticks on pets are common in the Finger Lakes, where blacklegged (deer) ticks carry Lyme disease. Remove the tick promptly with fine tweezers, grasping close to the skin and pulling straight out, then clean the area. Watch your dog for symptoms and talk to your vet about testing and prevention. Reducing tick habitat in your yard lowers the risk for both pets and people.",
    sections: [
      {
        heading: "Remove the tick properly",
        paragraphs: [
          "Use fine-tipped tweezers to grasp the tick as close to your dog's skin as possible and pull straight out with steady pressure — don't twist or squeeze the body. Clean the bite area, and consider saving the tick in case identification is useful. The sooner a tick is removed, the lower the disease-transmission risk.",
        ],
      },
      {
        heading: "Lyme in the Finger Lakes is real",
        paragraphs: [
          "Blacklegged ticks that carry Lyme disease are well established across the Finger Lakes and Central New York, and both dogs and people are at risk. Talk to your veterinarian about tick prevention and, if warranted, Lyme testing and vaccination for your dog.",
        ],
      },
      {
        heading: "Reduce ticks where your pet plays",
        paragraphs: [
          "Ticks concentrate in shaded leaf litter, tall grass, and the edge where your lawn meets the woods — exactly where dogs roam. Keeping grass short, creating a barrier between lawn and woods, and a seasonal yard treatment focused on those zones meaningfully reduces tick pressure at home.",
        ],
      },
    ],
    relatedServices: ["mosquito-tick"],
  },
  {
    slug: "sawdust-piles-near-the-windowsill",
    title: "Sawdust Piles Near the Windowsill: What Causes It",
    question: "Why are there little piles of sawdust near my windowsill?",
    answerLead:
      "Small piles of what looks like sawdust near woodwork, windowsills, or in the basement are usually frass — the debris carpenter ants push out of the galleries they excavate in wood. It can also indicate other wood-boring insects. Either way, it's a sign of insects nesting in or damaging the wood, and worth identifying promptly.",
    sections: [
      {
        heading: "Most likely: carpenter ants",
        paragraphs: [
          "Carpenter ants excavate smooth galleries in wood to nest and push the debris out of small slits, leaving little piles of sawdust-like frass — often mixed with insect parts — near baseboards, windowsills, and in the basement. Seeing frass, especially with large black ants or faint rustling in the walls, points strongly to a carpenter ant nest.",
        ],
      },
      {
        heading: "Other possibilities",
        paragraphs: [
          "Very fine, flour-like powder with tiny round holes in hardwood can indicate powderpost beetles, and perfectly round holes in bare exterior wood suggest carpenter bees. The type of frass and the wood involved help identify which insect you're dealing with.",
        ],
      },
      {
        heading: "Why to act",
        paragraphs: [
          "Frass means insects are actively nesting in or tunneling through your wood, and carpenter ant colonies can weaken structural wood over years. We identify the source, treat the colony or infestation, and point out the moisture conditions that often invite carpenter ants in the first place.",
        ],
      },
    ],
    relatedServices: ["carpenter-ant-control", "wdi-inspection-real-estate"],
  },
  {
    slug: "squirrels-in-the-attic-in-spring",
    title: "Squirrels in the Attic in Spring: Why Now, and What to Do",
    question: "There are squirrels in my attic in spring — what should I do?",
    answerLead:
      "Squirrels denning in your attic in spring are almost always a female raising a litter, which means there are likely babies present. That changes the approach: you can't just seal the entry, or you'll trap the young inside. The right method is humane removal that accounts for the litter, followed by sealing the chewed entry points so they can't return.",
    sections: [
      {
        heading: "Why spring",
        paragraphs: [
          "Gray squirrels have a late-winter and a midsummer breeding season, and attics make warm, safe den sites for raising young. If you're hearing scampering and scratching in the attic in spring, especially near a chewed entry hole, it's very likely a mother with a litter.",
        ],
      },
      {
        heading: "Don't just seal them out",
        paragraphs: [
          "Sealing the entry while young are inside traps them, which is inhumane and leads to odor and further damage as they try to escape. Removal has to account for the babies — getting the whole family out before the entries are closed.",
        ],
      },
      {
        heading: "Then seal, because they chew",
        paragraphs: [
          "Squirrels gnaw, and chewed wiring in an attic is a documented fire risk, so removal alone isn't enough. We remove the squirrels, seal the roofline and vent entries with chew-resistant materials, and can clean up nesting material and droppings. Timing around the litter is part of doing it right.",
        ],
      },
    ],
    relatedServices: ["squirrel-removal", "attic-restoration-insulation"],
  },
  {
    slug: "pest-inspection-before-closing-on-a-house",
    title: "Do I Need a Pest Inspection Before Closing on a House?",
    question: "Do I need a pest inspection before buying a house?",
    answerLead:
      "Often, yes — many lenders require a wood-destroying-insect (WDI) inspection, documented on the NPMA-33 form, before closing, and even when it's optional it's smart protection against inheriting hidden termite or carpenter-ant damage. In Central New York, carpenter ants and moisture-related wood damage are the most common findings, more so than termites.",
    sections: [
      {
        heading: "What a WDI inspection covers",
        paragraphs: [
          "A wood-destroying-insect inspection checks the accessible areas of a home for evidence of termites, carpenter ants, powderpost beetles, and other wood-destroying insects, and documents the findings on the industry-standard NPMA-33 form that lenders and buyers rely on. It's focused specifically on insect activity and damage, separate from a general home inspection.",
        ],
      },
      {
        heading: "Why it's worth it in CNY",
        paragraphs: [
          "Buying a home is a major investment, and wood-destroying-insect damage is often hidden until it's serious. A local inspection also brings useful context: in Central New York, an inspector who knows the region will pay close attention to carpenter ants and moisture damage, which are more common here than termites.",
        ],
      },
      {
        heading: "How we help",
        paragraphs: [
          "We provide WDI inspections with clear NPMA-33 documentation on your closing timeline, and because we also treat these pests, we can handle any needed work directly to keep your closing on track. We're glad to coordinate with your agent or lender.",
        ],
      },
    ],
    relatedServices: ["wdi-inspection-real-estate", "carpenter-ant-control", "termite-control"],
  },
  {
    slug: "used-couch-how-to-check-for-bed-bugs",
    title: "Bought a Used Couch: How to Check for Bed Bugs",
    question: "I bought a used couch — how do I check it for bed bugs?",
    answerLead:
      "Before bringing any used furniture inside, inspect it thoroughly in good light: check the seams, folds, tufts, and underside for live bugs (flat, reddish-brown, apple-seed sized), tiny dark fecal spots, shed skins, or pale eggs. Pay special attention to seams and the frame underneath. If you see any signs, don't bring it in — used furniture is a leading way bed bugs enter a home.",
    sections: [
      {
        heading: "Where to look",
        paragraphs: [
          "Bed bugs hide in tight, dark spaces. On a couch, that means the seams and piping, under and around the cushions, in the folds and tufts, along the frame, and underneath. Use a flashlight and, if you have one, a thin card to run along seams. Look for the bugs themselves, dark pepper-like fecal spotting, translucent shed skins, and small pale eggs.",
        ],
      },
      {
        heading: "If you find signs",
        paragraphs: [
          "Don't bring it inside — it's far easier to skip an infested piece than to eliminate bed bugs from your home afterward. This is exactly how bed bugs spread through college towns like Ithaca, where used furniture changes hands constantly, especially around move-in season.",
        ],
      },
      {
        heading: "If you already brought it in",
        paragraphs: [
          "If you suspect a piece you've already moved in is infested, don't move it around the house (that spreads bugs) and don't rely on store sprays. A professional inspection and treatment, with the necessary follow-up, is the reliable way to handle it. We can confirm whether you have an infestation and treat it.",
        ],
      },
    ],
    relatedServices: ["bed-bug"],
  },
  {
    slug: "skunk-under-the-deck-or-shed",
    title: "Skunk Under the Deck or Shed: What to Do",
    question: "There's a skunk living under my deck — how do I get rid of it?",
    answerLead:
      "A skunk denning under a deck, shed, or porch is common in spring, and it's often a female with young. Don't try to force it out or seal the opening while it's inside — you risk getting sprayed, bitten, or trapping babies. The right approach is humane removal that accounts for a possible litter, followed by exclusion so nothing dens there again.",
    sections: [
      {
        heading: "Why skunks pick your deck",
        paragraphs: [
          "Skunks look for sheltered, enclosed ground spaces to den and raise young, and the space under a deck, shed, or porch is ideal. Spring is peak denning season, so a spring skunk very often means a mother with a litter underneath.",
        ],
      },
      {
        heading: "Don't corner it",
        paragraphs: [
          "Skunks spray when threatened, and they can carry rabies, so cornering or trying to force one out is a bad idea. Sealing the opening while the skunk (or its young) is inside creates a worse problem — trapped animals, odor, and damage.",
        ],
      },
      {
        heading: "Removal plus exclusion",
        paragraphs: [
          "We remove the skunk humanely, accounting for any young, then exclude the under-structure space so skunks and other wildlife can't den there again. Addressing the den site is what keeps it from becoming a recurring spring problem.",
        ],
      },
    ],
    relatedServices: ["wildlife-removal"],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const guideSlugs = guides.map((g) => g.slug);
