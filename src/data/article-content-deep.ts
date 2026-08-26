/**
 * article-content-deep.ts — depth layer for the 15 guides and 12 blog posts.
 *
 * ADDITIVE, same contract as the other depth layers. Keyed by slug across both content types,
 * since the shape is identical and splitting it into two files would duplicate the plumbing.
 *
 * Guides are symptom-first ("something is scratching in my wall"), so the depth added to them is
 * almost always procedural: how to narrow it down before anyone arrives, and what to do — or
 * specifically not do — in the meantime. Several of the most useful entries here exist to stop a
 * common and costly mistake: plugging a yellowjacket entry hole, dry-sweeping mouse droppings,
 * releasing a bat that was in a bedroom, sealing a den with young inside.
 *
 * Blog posts are topic-first, so the depth added is the detail the original post summarizes.
 *
 * Scope limits observed throughout: New York habitability material describes the general shape of
 * the law and points to written notice and local code enforcement rather than giving legal advice;
 * health material (hantavirus, rabies, Lyme) points to the county health department or a clinician
 * rather than substituting for one. Nothing here claims a job Nolan ran or a result.
 */

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface ArticleDeep {
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
}

const A = (sections: ArticleSection[], faqs: { q: string; a: string }[]): ArticleDeep => ({
  sections,
  faqs,
});

export const articleContentDeep: Record<string, ArticleDeep> = {
  // =============================================================== GUIDES
  "scratching-in-the-walls-at-night": A(
    [
      {
        heading: "Narrow it down before anyone arrives",
        paragraphs: [
          "Three observations will get you most of the way to an identification, and all three are free. First, the time: strictly daytime activity, especially early morning, points to gray squirrels. Activity that starts at dusk and runs through the night points to mice, flying squirrels, or bats. Heavy movement around dawn and dusk suggests raccoons.",
          "Second, the weight. Mice sound light and fast — scurrying, scratching, a sense of something small moving in bursts. Squirrels sound like something rolling or dragging. Raccoons sound like a person moving around, and people are usually surprised by how loud they are.",
          "Third, the location. Inside a wall cavity at floor or mid-height is most often mice. In the attic overhead is squirrels, raccoons, or bats. If you can note those three things before the inspection, you have narrowed a broad problem to a specific one.",
        ],
      },
      {
        heading: "Why identification has to come before sealing",
        paragraphs: [
          "It is tempting to find the hole and close it. With wildlife that can be the worst available option. Sealing a bat roost during the summer maternity season traps flightless pups inside, which New York restricts for exactly that reason. Sealing a spring raccoon or squirrel den leaves dependent young in the structure. Both outcomes mean an animal dying inside a wall or attic, which turns a manageable problem into a serious odor and sanitation job in a place that is hard to reach.",
          "That is the whole argument for identifying the species and the season before touching the entry point. It is also why a competent inspection asks when you hear it, not just where.",
        ],
      },
    ],
    [
      { q: "How do I tell mice from squirrels by sound alone?", a: "Weight and timing. Mice are light and fast — scurrying in short bursts, usually after dark, often inside a wall rather than overhead. Squirrels are heavier, sound like something rolling or dragging, and are active in daylight, especially early morning. Raccoons sound like a person moving around." },
      { q: "Should I plug the hole myself?", a: "Not until the species and season are known. Sealing a bat roost in summer or a spring den traps young inside, which is inhumane, restricted in the case of bats, and leaves you with an animal dead inside a wall. Identification first, then sealing." },
    ],
  ),

  "bat-in-my-house-what-to-do": A(
    [
      {
        heading: "Containing a bat safely",
        paragraphs: [
          "If the bat is flying in a room, do not chase it. Close the interior doors so it stays in one room, open an exterior window or door if one is available, turn the lights down, and give it a few minutes — most will find their way out on their own. Chasing exhausts the animal and makes everything harder.",
          "If it lands and you need to contain it, wear thick leather gloves — never bare hands. Place a rigid container such as a plastic tub or coffee can over it, slide stiff cardboard underneath to trap it, and tape the cardboard in place. Keep the container.",
        ],
      },
      {
        heading: "When the bat must not be released",
        paragraphs: [
          "This is the part that matters most, and it runs against instinct. If a bat is found in a room where someone was sleeping, or in a room with a young child, someone intoxicated, or anyone else who could not reliably report being bitten, the bat should be contained rather than released so it can be tested, and your county health department should be contacted.",
          "The reason is that bat bites and scratches can be extremely small and easy to miss entirely — a person can be bitten in their sleep without knowing. Testing the animal resolves the question quickly. Releasing it removes that option permanently, and the alternative is a decision made without information.",
          "A single bat in the house is also worth treating as a question about the building. One that came down a chimney is a one-off; one that emerged from a wall or attic usually means a roost, and that is a separate job with its own legal timing.",
        ],
      },
    ],
    [
      { q: "A bat was in our bedroom while we slept. What now?", a: "Contain it rather than release it, and call your county health department. Bat bites can be too small to notice, so someone can be bitten while asleep without knowing, and testing the bat answers the question quickly. Once it is released that option is gone." },
      { q: "Does one bat mean there are more?", a: "Not always, but it is worth finding out. A bat that came down a chimney or through an open door is often a one-off. One that emerged from a wall void or attic usually indicates a roost, which is a separate job — and one whose timing New York restricts during the summer maternity season." },
    ],
  ),

  "bed-bugs-collegetown-apartment-renters-guide": A(
    [
      {
        heading: "Document before you do anything else",
        paragraphs: [
          "Before you move furniture, bag clothing, or clean, take clear photographs of what you have found — live insects, shed skins, dark fecal spotting along mattress seams and box spring edges — and note the date. Then report it to your landlord or property manager in writing. Not a phone call, not a text you might lose: something dated that you keep a copy of.",
          "That written, dated record is what makes a landlord's responsibility concrete under New York's warranty of habitability, and it is what protects you if the matter is disputed later. It costs nothing and takes ten minutes.",
        ],
      },
      {
        heading: "The things that make it worse",
        paragraphs: [
          "Moving to another room or sleeping on the couch is the most common instinct and one of the most damaging. Bed bugs follow the sleeper, so relocating spreads the infestation to a second room rather than escaping it.",
          "Throwing out the mattress usually does not help either, and it can spread the problem through the building on the way out the door. So can bug bombs and foggers, which mostly drive bed bugs deeper into wall voids and into neighboring units without reaching the population.",
          "In a Collegetown building, the other thing worth understanding is that your unit may not be where it started. Bed bugs travel along shared walls and through outlet and pipe penetrations, so a whole-building response is normally what resolves it — which is a conversation for the landlord, backed by that written report.",
        ],
      },
    ],
    [
      { q: "Should I move to another room until it is treated?", a: "No. Bed bugs follow the sleeper, so moving to the couch or a spare room typically establishes a second infestation instead of escaping the first. Stay put, report it in writing, and let treatment be planned around where the population actually is." },
      { q: "Can I be charged for the treatment?", a: "That depends on your lease and the circumstances, and it is worth getting advice rather than assuming. What helps in every case is early written notice with dated photographs — it establishes when the problem was reported, which is usually the fact everything else turns on." },
    ],
  ),

  "landlord-wont-deal-with-pests-ny-renters-rights": A(
    [
      {
        heading: "Build the record first",
        paragraphs: [
          "Almost every path forward depends on documentation, so create it before escalating. Put your request in writing with the date, describe the problem specifically, and keep a copy. Photograph what you are seeing. Keep a simple log of each report and any response. If you have already been reporting by phone or text, send one written summary that restates the history and dates.",
          "This is unglamorous and it is the single most useful thing a tenant can do. A landlord who has received dated written notice is in a materially different position from one who says they were never told.",
        ],
      },
      {
        heading: "Where to escalate",
        paragraphs: [
          "If written notice does not produce action, most municipalities in this region have a code enforcement or building department that handles habitability complaints, and county health departments handle certain conditions. Those offices can inspect and, where warranted, issue orders — and that is often what moves a stalled situation.",
          "There are further remedies available to tenants in New York, including repair-and-deduct and rent-withholding approaches, but these carry real risk if done incorrectly and the specifics matter. Before going down that road it is worth speaking to a local tenant advocacy organization or a lawyer. We are a pest control company, not your legal advisor, and the honest answer is that this is where you want someone who does this for a living.",
        ],
      },
    ],
    [
      { q: "What is the first step if my landlord ignores a pest problem?", a: "Written, dated notice with photographs, and keep a copy. Verbal reports and texts are easy to dispute or lose. Almost every escalation route afterward depends on being able to show what you reported and when." },
      { q: "Can I withhold rent?", a: "There are remedies in New York that can involve withholding or repair-and-deduct, but they carry real risk if handled incorrectly and the details matter a great deal. Talk to a local tenant advocacy organization or a lawyer before doing it. Code enforcement or the county health department is usually the better first escalation." },
    ],
  ),

  "carpenter-ants-or-termites-how-to-tell": A(
    [
      {
        heading: "Read the debris, not just the insect",
        paragraphs: [
          "You will often find the evidence before you find a specimen, and the debris is diagnostic. Carpenter ants push out coarse frass that looks like pencil shavings or sawdust, and it characteristically contains insect body parts — legs, wing fragments, bits of dead ants — because they are housekeeping, not eating. The galleries they leave behind are smooth and clean, almost sanded.",
          "Termites do the opposite. They consume the wood and pack their galleries with soil and mud, so the tunnels look rough and dirty rather than clean, and there is no frass pile. Instead they build mud tubes — pencil-width soil tunnels running up foundation walls, piers, and joists to maintain contact with ground moisture. Mud tubes are close to conclusive.",
        ],
      },
      {
        heading: "What to photograph before you call",
        paragraphs: [
          "If you can, photograph three things: the insect itself from the side, so the waist and antennae are visible; the debris, with something for scale; and the location, showing where in the structure it is. A side view is far more useful than a top view, because the pinched versus straight waist is the fastest identification there is.",
          "If you find discarded wings on windowsills — a small pile of them, all roughly equal length — save a few. Equal-length wings indicate a termite swarm and unequal ones indicate ants, and that single detail can settle the question before anyone arrives.",
        ],
      },
    ],
    [
      { q: "I found sawdust but no insects. What does that tell me?", a: "Look closely at the sawdust. Carpenter ant frass is coarse and contains insect body parts — legs and wing fragments — because they are clearing the gallery rather than eating. Fine flour-like powder suggests powderpost beetles instead. Termites produce no frass pile at all; they leave mud." },
      { q: "How likely are termites in the Finger Lakes?", a: "Much less likely than carpenter ants. Termites occur in New York but are scattered in this region, and the great majority of structural insect damage here is carpenter ant. Mud tubes on a foundation would change that assessment, which is why they are worth looking for specifically." },
    ],
  ),

  "flies-on-upstairs-windows-every-fall": A(
    [
      {
        heading: "Why upstairs, and why the same windows",
        paragraphs: [
          "The pattern is not random and it tells you what you are dealing with. Cluster flies gather on the warm, sunny elevations of a building in late summer — south and west — and work their way into the wall voids and attic. Upper floors and attic-adjacent rooms are simply closest to where they settled, and warm air rising through the structure concentrates them there.",
          "The same windows recur year after year because the entry points and the roosting voids do not move. Once you know which side of the house they favor, you know where the exterior work needs to happen.",
        ],
      },
      {
        heading: "The window that actually matters",
        paragraphs: [
          "Almost everyone calls in February, when the first warm day wakes them and they appear at the glass. By then they have been in the walls since fall, and there is no practical way to reach them there. Indoor treatment at that point kills what emerges and does not touch the population.",
          "The effective work is exterior, on the sunny elevations, in late summer before they gather — roughly the second half of August into September in this region. Sealing helps as well: gaps around window frames, siding, soffits, and utility penetrations are the routes in. If you are reading this in February, the honest advice is to note which walls they favor and book the treatment for August.",
        ],
      },
    ],
    [
      { q: "Can anything be done in the middle of winter?", a: "You can reduce what reaches living space — vacuuming them up, sealing interior gaps around window frames and trim — but nothing reaches the population in the wall voids. It is genuinely a timing problem, and the treatment that works happens the previous August." },
      { q: "Will sealing the house stop them?", a: "It helps substantially and it is worth doing, but on its own it rarely finishes the job — older houses have too many small openings to close every one. Sealing plus a timed exterior application on the sunny walls is what gets a house from unlivable to normal." },
    ],
  ),

  "yellowjackets-going-into-the-siding": A(
    [
      {
        heading: "Do not plug the hole",
        paragraphs: [
          "This is the single most important thing on this page. Watching wasps disappear into a gap in the siding, the natural response is to seal it — and it is close to the worst thing you can do. A yellowjacket colony sealed out of its normal entrance does not give up. It looks for another way out, and the other way is frequently inward, through the wall cavity and into the living space.",
          "People have discovered this the hard way by finding wasps coming through ceiling light fixtures, outlet boxes, and gaps in trim. A colony that was contained in a wall void becomes a colony in the house.",
        ],
      },
      {
        heading: "What to do instead",
        paragraphs: [
          "Keep people and pets away from the entrance, especially in late summer when the colony is at its largest and most defensive. Note where the traffic is going in and roughly how heavy it is. Then have it treated properly — the colony has to be dealt with before the entrance is closed, not after.",
          "Once the colony is confirmed dead, sealing the opening is worthwhile, because an accessible cavity tends to attract future colonies. The sequence is what matters: treat, confirm, then seal.",
          "Aerosol wasp sprays from a hardware store are designed for visible open nests and generally do not reach a colony inside a wall void. A partial knockdown mostly produces an agitated colony, which is the condition you least want in a wall you are standing next to.",
        ],
      },
    ],
    [
      { q: "Why is sealing the entrance so dangerous?", a: "Because the colony does not simply die — it looks for another exit, and inside a wall the alternative route is often into the house through light fixtures, outlets, or trim gaps. A contained problem becomes an indoor one. The colony must be treated first and the opening sealed afterward." },
      { q: "Can I use a can of wasp spray on it?", a: "Those products are made for visible open nests and generally will not reach a colony inside a wall void. The likely result is an agitated colony behind the siding rather than a dead one, which is worse than leaving it alone until it can be treated properly." },
    ],
  ),

  "mouse-droppings-in-drawer-health-risk": A(
    [
      {
        heading: "Do not sweep or vacuum them dry",
        paragraphs: [
          "This is the part most people get wrong, and it is the part that matters. Dry sweeping or vacuuming rodent droppings and nesting material aerosolizes particles, and in enclosed spaces that is the route by which the health risk actually arises. It is the opposite of what feels natural.",
          "The standard public health approach is to ventilate the area first, then wear gloves, then dampen the droppings and surrounding surface with a disinfectant and let it sit before wiping up with a paper towel, disposing of it in a sealed bag. Wash your hands thoroughly afterward. Wetting first is the key step.",
        ],
      },
      {
        heading: "Where the real risk lives",
        paragraphs: [
          "A few droppings in a kitchen drawer are a contamination and cleanup matter but a modest one — clean it properly, discard anything food-related that was exposed, and address how the mouse got in. The situations that call for more caution are enclosed, poorly ventilated spaces with substantial accumulation: attics, crawlspaces, sheds, and buildings that have been closed up for a long stretch, particularly in the rural parts of the region where deer mice rather than house mice are involved.",
          "Deer mice are the primary hantavirus reservoir in North America. Cases are rare in the Northeast, but the accumulation-in-a-closed-space scenario is precisely the one worth handling carefully rather than casually. If you are facing a heavy accumulation in a confined space, it is reasonable to have it handled rather than doing it yourself, and your county health department can advise.",
        ],
      },
    ],
    [
      { q: "What is the safe way to clean up mouse droppings?", a: "Ventilate the space, put on gloves, dampen the droppings and surface with disinfectant and let it sit, then wipe up with paper towel and dispose of it in a sealed bag. Do not dry-sweep or vacuum — that puts particles into the air, which is the actual risk." },
      { q: "How worried should I be about a few droppings in a drawer?", a: "Not very, provided you clean it properly and discard exposed food items. The situations warranting more care are large accumulations in enclosed, poorly ventilated spaces like attics, crawlspaces, and long-closed cabins, especially in rural areas where deer mice are involved." },
    ],
  ),

  "something-died-in-the-wall-odor-removal": A(
    [
      {
        heading: "What to expect on timing",
        paragraphs: [
          "The honest answer is that this resolves with time and that the time depends on size and temperature. A mouse in a wall is typically a matter of one to a few weeks. A squirrel or raccoon is considerably longer, and in a warm space with the heat running it gets worse before it gets better. Cold weather slows the whole process down.",
          "That matters because it sets expectations. Nobody wants to be told to wait, but knowing whether you are looking at ten days or two months changes whether it is worth opening a wall.",
        ],
      },
      {
        heading: "Finding it, and what actually helps",
        paragraphs: [
          "Odor is strongest nearest the source, and flies are the best indicator available — blow flies and cluster-type flies concentrating in one room, or small flies appearing at a particular spot, generally point to within a few feet of it. Following that concentration is more reliable than following your nose alone, since odor travels through cavities.",
          "Deodorizers, ozone treatments, and air fresheners mask rather than remove, and they do not shorten the process. Ventilation genuinely helps. Removing the carcass is the only thing that ends it outright, and whether that is worth cutting into a wall depends on the size of the animal, where it is, and how long you would otherwise be waiting.",
          "The more useful conversation is usually about how the animal got in, because whatever route it used is still open.",
        ],
      },
    ],
    [
      { q: "How long will the smell last?", a: "A mouse is usually one to a few weeks; a squirrel or raccoon is considerably longer. Heat accelerates it and cold slows it, so the same animal in an unheated attic in January behaves very differently from one in a heated wall in July." },
      { q: "Do odor removal products work?", a: "They mask rather than remove, and they do not shorten the process. Ventilation helps genuinely. Only removing the source ends it, and whether opening a wall is justified depends on the animal's size and location and how long you would otherwise wait." },
    ],
  ),

  "tick-on-my-dog-lyme-risk-finger-lakes": A(
    [
      {
        heading: "Removing it properly",
        paragraphs: [
          "Use fine-tipped tweezers, grasp the tick as close to the skin as you can, and pull straight up with steady, even pressure. Do not twist or jerk, which can leave mouthparts behind. Then clean the bite area and your hands.",
          "Ignore the folk remedies. Burning the tick with a match, smothering it in petroleum jelly, or painting it with nail polish are all counterproductive — they delay removal and may increase what the tick regurgitates into the bite. Prompt mechanical removal is the whole objective.",
        ],
      },
      {
        heading: "What to save and who to call",
        paragraphs: [
          "Consider keeping the tick in a sealed bag or container with the date and where it was found. Identification matters — only the blacklegged tick transmits Lyme, and the American dog tick and lone star tick do not — and a vet or clinician may find it useful.",
          "For a dog, contact your veterinarian for guidance, particularly about whether testing is warranted and about preventives going forward. For a person, contact a clinician, especially if a rash or flu-like symptoms develop in the following weeks. We are not able to advise on either, and would rather say so than guess.",
          "On the property side, the useful work is at the edges. Blacklegged ticks concentrate where mown lawn meets tall grass, brush, and leaf litter, not in the middle of open turf. Maintaining that boundary and treating harborage reduces exposure around the house measurably, without pretending a wooded Finger Lakes property can be made tick-free.",
        ],
      },
    ],
    [
      { q: "What is the correct way to remove a tick?", a: "Fine-tipped tweezers, grasp as close to the skin as possible, pull straight up with steady pressure — no twisting. Then clean the area. Avoid matches, petroleum jelly, and nail polish; they delay removal, which is the opposite of what helps." },
      { q: "Should I keep the tick?", a: "It is often worth it. Put it in a sealed bag with the date and where it was found. Only the blacklegged tick transmits Lyme, so identification genuinely changes the picture, and a vet or clinician may want to see it." },
    ],
  ),

  "sawdust-piles-near-the-windowsill": A(
    [
      {
        heading: "Three kinds of sawdust, three different problems",
        paragraphs: [
          "What the debris looks like tells you a great deal. Coarse material like pencil shavings, containing insect body parts — legs, wing fragments — is carpenter ant frass, cleared out of galleries as they excavate. Fine, flour-like powder that feels genuinely powdery between the fingers points to powderpost beetles in hardwood. Coarse, gritty frass with large oval exit holes suggests old house borer in softwood framing.",
          "A fourth possibility worth ruling out is carpenter bees, which leave coarse shavings below a nearly perfect half-inch round hole, usually in exposed softwood outdoors — deck rails, fascia, soffits.",
        ],
      },
      {
        heading: "The test that tells you whether it is active",
        paragraphs: [
          "This applies to any hole-in-wood finding and it costs nothing. Clean the debris away completely, note the date, and watch for a few weeks. If fresh, pale-colored frass reappears, the infestation is active and needs attention. If nothing returns and the holes have darkened edges, the activity may be long finished — old houses in this region carry plenty of decades-dead beetle damage that requires no treatment at all.",
          "That single observation frequently determines whether treatment is warranted, which is why it is worth doing before assuming the worst or dismissing it.",
        ],
      },
    ],
    [
      { q: "How do I know if the damage is old or active?", a: "Clean away all the frass, note the date, and check over the following weeks. Fresh pale frass reappearing means active. Nothing new, with darkened hole edges, often means activity that finished years or decades ago and needs no treatment." },
      { q: "Does sawdust always mean a serious problem?", a: "No. It could be carpenter bees in exterior softwood, long-dead powderpost beetle damage, or an active carpenter ant colony — which is the one that matters most. What the debris looks like and whether it returns after cleaning tells you which." },
    ],
  ),

  "squirrels-in-the-attic-in-spring": A(
    [
      {
        heading: "Spring means young",
        paragraphs: [
          "Gray squirrels have two breeding periods, and the late winter into spring one is why attic intrusions cluster then. A female looking for a nest site chews and enlarges existing gaps at roof edges, gable vents, and soffit corners, and she is looking for somewhere safe and undisturbed — which describes an attic exactly.",
          "That means a spring attic squirrel is very often a mother with dependent young, and it changes the job completely. Excluding the adult while nestlings remain leaves them to die in the structure, which is both inhumane and produces a serious odor and sanitation problem inside a ceiling or wall. Any spring job needs to establish whether young are present before anything is closed.",
        ],
      },
      {
        heading: "Exclusion, not just removal",
        paragraphs: [
          "The recurring failure with attic squirrels is treating removal as the whole job. Trapping the animal currently present leaves a proven, accessible entry point, and another squirrel finds it — often within the same year. Homeowners who have had squirrels removed three years running usually have one unsealed hole, not bad luck.",
          "The durable solution is sealing every entry point and cutting back the limbs that give roof access, since overhanging canopy is the route in on nearly every job. On a large or complex roofline, that means a proper inspection rather than closing the obvious hole — sealing three of four entries accomplishes very little.",
        ],
      },
    ],
    [
      { q: "Can the squirrel just be trapped and taken away?", a: "That handles the animal, not the opening. An accessible entry point that has already worked will be used again, frequently within the same year. Sealing all the entries and trimming back the limbs that give roof access is what actually ends it." },
      { q: "Why does spring matter?", a: "Because most spring attic squirrels are females with dependent young. Excluding the mother while nestlings remain leaves them to die inside the structure — inhumane, and a severe odor problem in a ceiling or wall. The young have to be accounted for before anything is sealed." },
    ],
  ),

  "pest-inspection-before-closing-on-a-house": A(
    [
      {
        heading: "What the inspection is and is not",
        paragraphs: [
          "A wood-destroying insect inspection is usually documented on the industry-standard NPMA-33 form, and it is a focused inspection for evidence of wood-destroying insects — carpenter ants, termites, powderpost beetles, old house borers — in the visible and accessible areas of the structure. Lenders frequently require it, particularly on certain loan types.",
          "It is important to understand the boundaries. It covers what can be seen and reached, so finished basements, insulated walls, and inaccessible crawlspaces limit what any inspector can report. It is also not a general home inspection and not a structural engineering assessment — it addresses insects and the conditions that favor them, not the building overall.",
        ],
      },
      {
        heading: "Timing it within the transaction",
        paragraphs: [
          "Schedule it early enough that findings can still affect the deal. An inspection that comes back with active carpenter ant activity, or with conditions conducive to it, is information you want while there is still time to negotiate a repair, a credit, or a walk-away — not the week of closing.",
          "In this region, the finding most likely to come up is carpenter ant activity or moisture conditions favorable to it, rather than termites. That distinction is worth knowing before you read the report, because seeing wood-destroying insect on a form tends to be alarming out of proportion to what is usually behind it here.",
        ],
      },
    ],
    [
      { q: "What does a WDI inspection actually cover?", a: "Evidence of wood-destroying insects in the visible and accessible areas of the structure, documented on the NPMA-33 form. It does not cover concealed areas behind finished walls or inaccessible crawlspaces, and it is not a general home inspection." },
      { q: "Is a finding on the report a deal-breaker?", a: "Usually not by itself. In this region the most common findings are carpenter ant activity or conditions conducive to it — moisture, wood-to-soil contact, poor drainage — which are addressable. Getting the inspection early enough that you can still negotiate is what matters most." },
    ],
  ),

  "used-couch-how-to-check-for-bed-bugs": A(
    [
      {
        heading: "Where to actually look",
        paragraphs: [
          "Work in good light and take your time — a proper check is ten minutes, not thirty seconds. Start with the seams, piping, and welting, which are where bed bugs harbor by preference. Then the underside of cushions and the fabric where they meet the frame. Then tip the piece over and check the underside of the deck, the frame joints, the staples, and any dust cover — the underside is where they hide and the place people skip.",
          "You are looking for four things: live insects, flat oval and reddish-brown, roughly apple-seed sized; shed skins, which look like translucent empty bed bugs; small dark fecal spots that look like marker dots and often appear in clusters along seams; and, in heavier cases, tiny pale eggs in crevices.",
        ],
      },
      {
        heading: "If you are not sure",
        paragraphs: [
          "Do not bring it inside to inspect it further. That is the mistake that turns a maybe into an infestation, and once a piece of furniture is in a bedroom the question stops being academic.",
          "Curbside furniture in a college town deserves particular caution. In Ithaca and Cortland, the couches that appear on curbs in late May and late August are being discarded during exactly the move cycles that spread bed bugs, and some of them are being discarded for that reason. Free furniture in those weeks is the highest-risk furniture of the year.",
          "If you are unsure and still want the piece, inspect it outdoors thoroughly, and if any doubt remains, let it go. Treating an apartment costs far more than a couch.",
        ],
      },
    ],
    [
      { q: "What exactly am I looking for?", a: "Four things: live bed bugs — flat, oval, reddish-brown, apple-seed sized; translucent shed skins; small dark fecal spots clustered along seams; and pale eggs in crevices. Check seams, piping, cushion undersides, the frame, and especially the underside of the deck." },
      { q: "Is curbside furniture in Collegetown risky?", a: "In late May and late August especially, yes. Those are the move-out weeks, and some of what appears on curbs is being discarded because of bed bugs. Inspect outdoors, thoroughly, and let it go if there is any doubt — treatment costs far more than the furniture is worth." },
    ],
  ),

  "skunk-under-the-deck-or-shed": A(
    [
      {
        heading: "Confirm it is empty before you close anything",
        paragraphs: [
          "The instinct is to fill the hole, and in spring that is how you end up with a far worse problem. Denning season means young are frequently present, and sealing a female and her kits under a deck leaves them to die in a location that is both inaccessible and directly beneath where you sit.",
          "The standard way to confirm occupancy without guessing is to loosely fill the entrance with crumpled newspaper or straw and check it over several nights. If it is pushed out repeatedly, the den is in use. If it stays undisturbed for several consecutive nights outside of denning season, the den is likely empty and can be closed.",
        ],
      },
      {
        heading: "Keeping them from coming back",
        paragraphs: [
          "Once the den is genuinely empty, exclusion has to go below grade. Skunks and woodchucks dig, so simply covering the opening reliably fails — barrier material needs to extend down and outward in an L-shaped buried apron so an animal digging at the edge meets it.",
          "It is also worth asking what drew them. Skunks dig small conical divots in lawns hunting grubs, so a heavy grub population is an ongoing invitation, and dealing with it removes part of the reason they are there. Securing garbage and pet food outdoors matters too.",
          "One health note: skunks are a rabies vector species in New York. A skunk that is active in daylight, disoriented, unusually bold, or behaving strangely should not be approached, and is worth reporting to your county health department.",
        ],
      },
    ],
    [
      { q: "How do I know if the den is still in use?", a: "Loosely pack the entrance with crumpled newspaper or straw and check it for several nights. Repeatedly pushed out means occupied. Undisturbed for several consecutive nights, outside of spring denning season, suggests it is empty and can be sealed." },
      { q: "Why does simply filling the hole not work?", a: "Because skunks dig. Barrier material has to extend below grade in an L-shaped buried apron so an animal digging at the edge runs into it. Covering the visible opening alone gets dug around, usually within a night or two." },
    ],
  ),

  // ============================================================= BLOG POSTS
  "central-new-york-pest-calendar": A(
    [
      {
        heading: "The two clocks this region runs on",
        paragraphs: [
          "Most pest calendars track temperature alone. In our service area two schedules matter, and the second one is what makes this region distinctive. The weather drives the rodent, overwintering, and stinging insect cycles. The academic year drives the bed bug cycle, because the late-August and May move periods in Ithaca and Cortland redistribute furniture, mattresses, and everything living in them across the rental stock on a fixed schedule.",
          "If you own or manage rental property, those two move windows deserve more attention than any other point in the year. If you do not, they are irrelevant to you and the weather calendar is the one that matters.",
        ],
      },
      {
        heading: "Booking ahead of the season instead of during it",
        paragraphs: [
          "The single most common scheduling mistake is calling when the problem appears. For the two largest seasonal events in this region, that is a season late by definition. Cluster flies and overwintering insects have to be treated on the exterior in late summer, before they gather on the walls — treating in October or February reaches almost nothing. Rodent exclusion is most valuable done before the October push rather than after mice are already inside.",
          "Conversely, some things genuinely are reactive. Stinging insects are an urgent call whenever a nest is discovered near people. A bat in a bedroom is same-day. Carpenter ant swarmers indoors in spring warrant a prompt inspection because they indicate an established interior colony.",
        ],
      },
    ],
    [
      { q: "When should I book if I only do one service a year?", a: "Late summer, on the exterior. That single timed application on the sunny south and west walls addresses cluster flies and the whole overwintering group together, and it is the one window where timing changes the outcome dramatically. Pair it with sealing before the October rodent push." },
      { q: "What is the busiest pest season here?", a: "Late August through October by a wide margin — cluster flies and overwintering insects gathering on walls, rodents moving indoors, and yellowjacket colonies at peak size and aggression all overlap in that stretch." },
    ],
  ),

  "fall-pest-proofing-central-new-york": A(
    [
      {
        heading: "In priority order, not checklist order",
        paragraphs: [
          "Most pest-proofing lists are long and undifferentiated, which makes them easy to abandon. In this region the order that returns the most is fairly consistent. First, the exterior application on sunny south and west elevations in late summer, because it is the only intervention that addresses cluster flies, stink bugs, lady beetles, and boxelder bugs at the one moment they are reachable. Second, sealing the foundation, sill plate, and utility penetrations, which is what ends the annual mouse cycle rather than managing it. Third, the roofline — soffits, gable vents, roof edges — plus cutting back limbs that touch the roof, which is wildlife access.",
          "Everything after that is genuinely worthwhile but secondary: door sweeps, window screens, chimney caps, dryer vent covers, and clearing debris and woodpiles away from the foundation.",
        ],
      },
      {
        heading: "Materials that hold and materials that do not",
        paragraphs: [
          "Expanding foam alone does not stop rodents — they chew through it readily, and a foamed gap frequently reopens within a season. Foam is a sealant, not a barrier. The same goes for caulk on its own at any opening a mouse could work at.",
          "What holds is a physical barrier the animal cannot chew through, backed by sealant: copper mesh or stainless wool packed into the gap, hardware cloth over larger openings, sheet metal at chewed edges, then foam or caulk to finish and weatherproof. On older homes with fieldstone foundations, mortar repair is often part of it.",
          "This is the difference between a house that gets mice every October and one that does not, and it is mostly about materials rather than effort.",
        ],
      },
    ],
    [
      { q: "Does expanding foam keep mice out?", a: "Not on its own. Mice chew through foam without much difficulty, so a foamed gap often reopens within a season. Foam seals and weatherproofs; it does not exclude. Pack the opening with copper mesh, stainless wool, hardware cloth, or sheet metal first, then finish with foam." },
      { q: "If I do only one thing this fall, what should it be?", a: "The exterior treatment on the sunny south and west walls in late summer, before cluster flies and overwintering insects gather. It is the single intervention with the narrowest window and the largest effect, because once they are in the wall voids nothing reaches them." },
    ],
  ),

  "bed-bugs-college-rental-ny-law": A(
    [
      {
        heading: "What the warranty of habitability actually does",
        paragraphs: [
          "New York's warranty of habitability, at Real Property Law section 235-b, is implied in residential leases and cannot be waived by a lease clause. In broad terms it requires that a rented dwelling be fit for human habitation and free from conditions that are dangerous to life, health, or safety. Pest infestations generally fall within that.",
          "In practice this means a landlord is normally responsible for addressing an infestation, and a lease term purporting to shift that responsibility entirely to the tenant is on shaky ground. The specifics of who pays in a given situation can be more complicated, which is why documentation matters and why genuinely contested cases want a lawyer rather than a pest control company.",
        ],
      },
      {
        heading: "What documentation is worth to each side",
        paragraphs: [
          "For a tenant, dated written notice with photographs establishes when the problem was reported, which is usually the fact everything turns on. Verbal reports are easy to dispute.",
          "For a landlord, a file showing prompt response, professional treatment, follow-up visits, and coordinated work across affected units is the demonstration that the obligation was met. In a building where an infestation moved between apartments, that record is worth considerably more than the treatment invoices suggest.",
          "For both, the practical reality in a connected building is that unit-by-unit response tends to fail and coordinated treatment tends to work. That is not a legal point, it is an entomological one, but it shapes the outcome either side ends up with.",
        ],
      },
    ],
    [
      { q: "Can a lease make bed bugs the tenant's responsibility?", a: "A lease clause attempting to waive the warranty of habitability is generally unenforceable in New York, since the warranty is implied by statute and cannot be waived. Who bears cost in a specific dispute can still be complicated, so genuinely contested situations warrant legal advice." },
      { q: "What should a landlord keep on file?", a: "Dates of reports and responses, the treatment performed, follow-up visits, and evidence that connected units were inspected and handled together. That record is what demonstrates the obligation was met, and it is far more useful than invoices alone." },
    ],
  ),

  "new-york-habitability-pests-renters-landlords": A(
    [
      {
        heading: "Written notice is the hinge",
        paragraphs: [
          "Almost every habitability question turns on what was reported and when. For tenants, that means putting requests in writing with the date, keeping a copy, and photographing the conditions. For landlords, it means responding in writing and keeping a record of what was done.",
          "This sounds bureaucratic for what is often a simple problem, and it is — right up until the moment it is not, at which point it is the only thing that matters. Ten minutes at the outset is disproportionately valuable.",
        ],
      },
      {
        heading: "Escalation, in order",
        paragraphs: [
          "If written notice does not produce action, the usual next step in this region is the municipality's code enforcement or building department, which handles habitability complaints and can inspect and issue orders. County health departments handle certain conditions. Those offices frequently move situations that have stalled.",
          "Further tenant remedies exist in New York, including approaches involving repair-and-deduct or rent withholding, but they carry real risk if executed incorrectly. A local tenant advocacy organization or a lawyer is the right source for that, and we would rather say so plainly than offer confident guidance we are not qualified to give.",
        ],
      },
    ],
    [
      { q: "Who do I contact if written notice does not work?", a: "Usually your municipality's code enforcement or building department, which handles habitability complaints and can inspect and issue orders. County health departments cover certain conditions. That step frequently unsticks a stalled situation without going further." },
    ],
  ),

  "how-mice-get-in-sealing-guide": A(
    [
      {
        heading: "The openings people miss",
        paragraphs: [
          "The obvious gaps get found. The ones that keep a house on an annual mouse cycle are usually less visible: the gap where the sill plate meets the foundation, especially on fieldstone; utility penetrations for water, gas, electric, cable, and dryer vents; the junction where an enclosed porch or addition ties into original construction; garage door corners and the bottom seal; and where siding terminates at grade.",
          "On the older housing common in Ithaca, Cortland, and Elmira, there is rarely one hole. There are a dozen small ones, which is why a methodical pass around the building outperforms fixing whatever was found first.",
        ],
      },
      {
        heading: "Doing it in the right order",
        paragraphs: [
          "Sealing a building that already has mice inside without trapping first can leave animals shut in, which is unpleasant in the obvious way. The usual sequence is to trap down the interior population first, then seal, then verify.",
          "Verification is worth naming as a step. Fresh droppings, gnawing at a sealed point, or continued activity after sealing generally means an opening was missed, not that sealing does not work. On an old house, one follow-up pass a few weeks later is normal and is part of doing the job properly rather than a sign it failed.",
        ],
      },
    ],
    [
      { q: "Should I seal first or trap first?", a: "Trap first, then seal. Sealing a building with an active interior population can shut animals in, which creates an odor problem in a wall. Clear the inside, close the openings, then verify a few weeks later that nothing was missed." },
      { q: "How do I know if I missed a hole?", a: "Fresh droppings, new gnawing at or near a sealed point, or continued activity a few weeks after sealing. On an older house one follow-up pass is normal — there are usually many small openings rather than a single obvious one." },
    ],
  ),

  "why-trapping-alone-never-ends-mouse-problem": A(
    [
      {
        heading: "The arithmetic",
        paragraphs: [
          "House mice reproduce quickly and continuously in a heated building. A single female can produce multiple litters a year, and offspring reach breeding age in a matter of weeks. That means a population indoors can replace removed individuals faster than casual trapping removes them, which is why a few traps often produce a steady trickle of catches for months without the problem ever ending.",
          "It also explains a pattern people find confusing: catching mice consistently is not evidence that trapping is working. It can equally be evidence that a population is sustaining itself and you are harvesting the surplus.",
        ],
      },
      {
        heading: "What trapping is actually for",
        paragraphs: [
          "Trapping has a real and necessary role — it removes the animals currently inside, and no exclusion work should be done without it. What it cannot do is change the reason they are there.",
          "A house that gets mice every October does not have a mouse problem so much as an opening problem, and the opening is indifferent to how many mice you catch. The combination that ends it is trapping to clear the interior, exclusion to close the routes, and verification to catch what was missed. Any one of the three on its own underperforms.",
        ],
      },
    ],
    [
      { q: "I catch mice constantly. Is that good or bad?", a: "It is ambiguous, and that is the point. Steady catches can mean you are removing a population — or that a breeding population indoors is replacing them as fast as you remove them. What distinguishes the two is whether the catches taper off. If they do not, sealing is the missing piece." },
    ],
  ),

  "bats-in-the-attic-new-york-rules": A(
    [
      {
        heading: "Why the timing restriction exists",
        paragraphs: [
          "New York restricts bat exclusion during the summer maternity season, and the reason is concrete rather than bureaucratic. Females gather in maternity colonies to raise young, and the pups are flightless for several weeks. Sealing the adults out during that window leaves the pups inside to die — inhumane, and in practice it produces a serious odor and cleanup problem inside a wall or attic, which is a far worse situation than the one being solved.",
          "It is also why an operator willing to seal a maternity roost mid-summer is not offering you a favor. Inspection can happen at any time; the exclusion itself has to be scheduled for the permitted window.",
        ],
      },
      {
        heading: "How exclusion is actually done",
        paragraphs: [
          "Bat exclusion is not trapping and it is not treatment. The method is to identify every access point, seal all of them except the active ones, and fit one-way devices at those so bats can leave but cannot re-enter. After enough time has passed to be confident the roost is empty, the last openings are closed.",
          "The reason a complete inspection matters so much is that partial sealing is worse than none: closing most access points while leaving animals inside traps them. On a large or complex roofline that inspection takes real time, and it is the part of the job that determines whether the rest works.",
          "Cleanup is a separate consideration. Accumulated guano in an attic warrants proper handling rather than casual removal.",
        ],
      },
    ],
    [
      { q: "Can bats be removed in the summer?", a: "Not during the maternity season, when flightless pups would be sealed in without the adults. New York restricts it for that reason. Inspection and planning can happen any time; the exclusion is scheduled for the permitted window." },
      { q: "Is bat exclusion the same as extermination?", a: "No. Bats are not killed or trapped. Every access point is identified, all but the active ones are sealed, and one-way devices at the remaining openings let bats leave without returning. Once the roost is confirmed empty, the last openings are closed." },
    ],
  ),

  "squirrels-raccoons-attic-damage": A(
    [
      {
        heading: "What the damage actually consists of",
        paragraphs: [
          "The noise is what people call about; the damage is usually what costs. Compressed and soiled insulation loses much of its R-value, which shows up as a heating bill in a climate like ours. Gnawed electrical wiring is a genuine fire risk and is common with squirrels, which gnaw continuously. Torn ductwork, damaged vent screens, and enlarged entry points let in weather as well as the next animal.",
          "Contamination is the other half. Accumulated urine and droppings soak into insulation and framing, and raccoon droppings can carry raccoon roundworm, which makes contaminated attic material a health matter rather than just a mess.",
        ],
      },
      {
        heading: "Deciding what to replace",
        paragraphs: [
          "Not every occupied attic needs its insulation removed. A brief intrusion caught early may need very little. A long-established raccoon latrine or a heavily used squirrel nest area is different, and the useful questions are how contaminated the material is, whether it has lost its function through compression, and whether odor is drawing further animals in — scent from a previous occupancy genuinely attracts new ones.",
          "The sequence that avoids wasted money is: get the animals out, seal every entry, then assess cleanup. Replacing insulation before the building is closed means doing it twice.",
        ],
      },
    ],
    [
      { q: "Does the insulation always have to be replaced?", a: "No. A short intrusion caught early often needs little. Heavy contamination, compressed insulation that has lost its R-value, or a raccoon latrine is a different matter. Assess after the animals are out and the building is sealed — doing it before means doing it twice." },
      { q: "Why is raccoon waste treated more seriously?", a: "Raccoon droppings can carry raccoon roundworm, and raccoons are a rabies vector species in New York. Contaminated attic material warrants proper handling and protection rather than being swept out casually." },
    ],
  ),

  "finger-lakes-winery-tasting-room-pest-control": A(
    [
      {
        heading: "Fruit flies are a source problem, always",
        paragraphs: [
          "In a tasting room the reflex is to treat the air. It buys a day or two. Fruit flies complete development in about a week in warm conditions, so a population that persists is being produced on site, and the productive work is finding where.",
          "The usual sites are unglamorous and consistent: floor drains and the film inside them, rubber mats, spill trays, the underside and interior of equipment, mop buckets and mop heads, cracks under bar mats, and any container of fruit or residue somewhere warm. Bar drains in particular are the most commonly overlooked source in the industry.",
          "Correct identification helps too. Fruit flies have red eyes and hover; drain flies are fuzzy and moth-like and rest on walls; phorid flies run rather than fly and can indicate a broken drain line under a slab — which is a plumbing problem wearing an insect costume.",
        ],
      },
      {
        heading: "Working around a season you cannot pause",
        paragraphs: [
          "The wine trail's pest risk peaks with its revenue, from late spring through fall, which means service has to fit the operation rather than the other way around. Before opening or after close during the season, discreet arrival where the property wants it, and treatment planned around events and tastings rather than dropped into the middle of them.",
          "Documentation matters as much as treatment. A current, organized file of scheduled service is what stands up at inspection, and for lodging and short-term rental operators it is also what demonstrates diligence if a guest ever raises a bed bug complaint.",
        ],
      },
    ],
    [
      { q: "We cleaned everything and still have fruit flies. Where are they?", a: "Almost certainly a breeding site rather than an invasion — most often a floor or bar drain, a mat, a spill tray, a mop bucket, or residue inside equipment. Adults live weeks; a persistent population is being replenished somewhere on the premises." },
      { q: "Can you service us without guests noticing?", a: "Yes. Hospitality work is scheduled around your operation — before opening or after close during the season — and we can arrive discreetly where that is what the property needs. Documentation for your inspection file comes with it." },
    ],
  ),

  "restaurant-pest-control-nys-sanitary-code": A(
    [
      {
        heading: "The exterior does most of the work",
        paragraphs: [
          "The most common frustration in restaurant pest control is a spotless kitchen that still has rodents. The explanation is almost always outside the back door: shared alleys, loading areas, and dumpster corrals support populations that no amount of interior cleaning affects.",
          "That means dumpster placement and condition, lid discipline, grease containment, drain maintenance, and the exterior perimeter are where the leverage is. It also means that in a downtown block where buildings share a service alley, the effective solution frequently involves a neighboring business — a conversation worth having early and neighborly, because the alternative is both parties paying for treatment indefinitely.",
        ],
      },
      {
        heading: "Documentation as an operational asset",
        paragraphs: [
          "For a food service operation, a current and organized pest management file is not paperwork for its own sake. It demonstrates an active program, which is materially different from demonstrating an absence of pests, and it is what an inspector can actually evaluate.",
          "A useful file shows scheduled service dates, what was found, what was done, corrective recommendations, and evidence that recommendations were acted on. The last item is the one most often missing and the one that carries the most weight — a report noting a gap under a back door six months running, with no repair, reads exactly as badly as it sounds.",
        ],
      },
    ],
    [
      { q: "Our kitchen is immaculate but we still see mice. Why?", a: "The source is usually exterior — shared alleys, loading areas, and dumpsters support rodent populations that interior cleaning does not touch. Exterior management and refuse handling do most of the work, and where a neighboring property is the source, that is worth addressing directly." },
      { q: "What should our pest file contain?", a: "Scheduled service dates, findings, actions taken, corrective recommendations, and evidence those recommendations were acted on. That last part matters most — a recurring unaddressed recommendation in a file is worse than no note at all." },
    ],
  ),

  "ticks-lyme-disease-finger-lakes-yard": A(
    [
      {
        heading: "Exposure happens at edges",
        paragraphs: [
          "Blacklegged ticks do not distribute evenly across a property. They concentrate in leaf litter, tall grass, brush, and the shaded transition where mown lawn meets woodland — because that is where humidity and hosts are. Open sunny turf in the middle of a lawn is comparatively low risk.",
          "That geography is what makes yard management effective. Keeping the lawn-to-woodland transition maintained, clearing leaf litter and brush near the house, moving play areas and seating away from the tree line, and keeping woodpiles and ground cover off the foundation all reduce the zone where exposure actually happens.",
        ],
      },
      {
        heading: "What treatment can and cannot do",
        paragraphs: [
          "Treating harborage areas reduces tick numbers in the treated zone meaningfully. It does not sterilize a property, and on a wooded Finger Lakes lot it never will. Anyone offering a tick-free yard is overselling, and we would rather set the expectation correctly at the estimate than have you discover it in July.",
          "The measures that matter most alongside treatment are behavioral and cheap: checking yourself, children, and pets after time outdoors, showering after yard work, and knowing that adult blacklegged ticks are active in spring and fall and will move on any day above freezing — including mild winter days. The nymphs active in late spring and summer are poppy-seed sized, which is why daily checks matter more than they seem like they should.",
        ],
      },
    ],
    [
      { q: "Can my yard be made tick-free?", a: "No, and we will not claim it. Treating harborage and managing the lawn-to-woodland edge reduces the population in the areas you use, which is a real and worthwhile improvement. Elimination is not achievable on a wooded property in this region." },
      { q: "Where in the yard is the risk actually concentrated?", a: "At the edges — leaf litter, tall grass, brush, and the shaded transition where mown lawn meets woodland. Open sunny turf is comparatively low risk, which is why moving play and seating areas away from the tree line makes a genuine difference." },
    ],
  ),

  "cluster-flies-upstate-new-york-autumn": A(
    [
      {
        heading: "They come from the ground, not the building",
        paragraphs: [
          "The most useful fact about cluster flies is that their larvae are parasites of earthworms, developing in soil under pasture and lawn. They are not breeding in your walls, they are not coming from your garbage, and the condition of your house has almost nothing to do with how many arrive.",
          "That is why houses next to open field and hayland get the worst of it regardless of age, and why brand-new homes in former farmland — the newer Lansing subdivisions are the standing example — get them as heavily as century-old farmhouses. Homeowners who assumed a new house would not have old-house problems are routinely surprised.",
        ],
      },
      {
        heading: "One window, and it is in August",
        paragraphs: [
          "Adults move to warm sunny building elevations in late summer and work into wall voids and attics to overwinter. Once they are inside the wall cavity there is no practical way to reach them, which is the entire reason timing dominates this problem.",
          "The effective treatment is exterior, applied to south and west elevations in the weeks before they gather — roughly the second half of August into September here. Sealing helps as a companion measure: gaps around window frames, siding, soffits, and utility penetrations are the routes in.",
          "If you are calling in February with flies at the windows, the honest answer is that this season is largely already decided, and the useful thing to do is note which walls they favor and book for August. We would rather say that than sell a treatment that will not do much.",
        ],
      },
    ],
    [
      { q: "Why does my brand-new house have cluster flies?", a: "Because they develop in the soil around it rather than in the building. Their larvae parasitize earthworms in pasture and lawn, so a new house built on former farmland sits in prime habitat. Tighter construction means fewer entry points, which helps, but it does not change the ground." },
      { q: "Is there any point treating in winter?", a: "Very little. Once they are in the wall voids nothing reaches them, and indoor treatment only affects the few that emerge. This is a timing problem: the treatment that works goes on the sunny exterior walls in late summer, before they gather." },
    ],
  ),
};

export const getArticleDeep = (slug: string): ArticleDeep | undefined => articleContentDeep[slug];
