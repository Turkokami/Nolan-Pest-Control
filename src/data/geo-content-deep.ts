/**
 * geo-content-deep.ts — Phase 6 depth layer for the 5 county hubs.
 *
 * ADDITIVE: layers two authority blocks (knownFor → landscape) plus extra FAQs onto the existing
 * county content, rendered by the [county] route when a deep entry exists. Content is specific to
 * each county's real geography, communities, and economy (Cornell/IC rentals, Seneca wine trail,
 * Elmira's older housing, SUNY Cortland and dairy country, the Susquehanna valley) — never generic.
 */

export interface GeoBlock {
  title: string;
  paragraphs: string[];
}

export interface CountyDeep {
  knownFor: GeoBlock;
  landscape: GeoBlock;
  faqs: { q: string; a: string }[];
}

export const countyContentDeep: Record<string, CountyDeep> = {
  // ---------------------------------------------------------------- TOMPKINS
  tompkins: {
    knownFor: {
      title: "What drives pest pressure in Tompkins County",
      paragraphs: [
        "Tompkins County is defined by Ithaca, Cornell University, and Ithaca College, and that university footprint shapes the pest landscape more than anything else. The dense off-campus rental market in Collegetown, Fall Creek, and the surrounding neighborhoods turns over tenants every summer, and that constant churn — with belongings, furniture, and people moving in and out — is a textbook driver of bed bugs, cockroaches, and mice spreading between units and buildings. Multi-unit, shared-wall housing means pest problems here are frequently building problems, not single-unit ones.",
        "The county's dramatic geography adds its own pressures. Homes perched on Ithaca's steep hills and along the gorges, and the older housing stock throughout the city, offer countless entry points for rodents and overwintering insects, while proximity to Cayuga Lake, creeks, and wooded slopes keeps outdoor pest reservoirs close. The rural towns that ring the city — Dryden, Newfield, Enfield, Danby — bring the farm-and-field pressures of mice, cluster flies, and wildlife right up to the doorstep.",
      ],
    },
    landscape: {
      title: "Serving the whole county — city, campus, and countryside",
      paragraphs: [
        "As the county where we're based, Tompkins is where our local knowledge runs deepest, and the range of property types we serve reflects it. We work on Collegetown rentals and Cornell Heights apartments, the lakefront homes of Lansing, the historic houses on Ithaca's hills, and the rural farmhouses of Dryden and Enfield — each with a different pest profile and a different right answer. That block-by-block familiarity is exactly what a national franchise's one-size location page can't match.",
        "The heavy rental and student-housing concentration also means documentation and discretion matter here. Landlords carry habitability responsibility in New York, and coordinated, well-documented treatment across connected units is often what actually resolves a problem rather than pushing it next door. For homeowners and businesses alike, being local means fast response and a real person who knows the neighborhood — not a call center scheduling a visit for next week.",
      ],
    },
    faqs: [
      { q: "Do you handle off-campus student rentals near Cornell and IC?", a: "Yes — it's a big part of what we do in Tompkins County. The summer turnover in Collegetown and the surrounding neighborhoods spreads bed bugs, roaches, and mice between units, so we provide coordinated, documented, discreet treatment across connected apartments, with records landlords and tenants can rely on for habitability purposes." },
      { q: "Why do the older homes on Ithaca's hills get so many pests?", a: "Age and terrain. Ithaca's older housing stock has settled foundations, stone basements, and countless gaps that let in rodents and overwintering insects, and homes on the wooded, gorge-cut hillsides sit right against the outdoor pest reservoirs. Exclusion — sealing those entry points — is especially valuable on these properties." },
      { q: "Do you serve the rural towns, not just the city?", a: "Absolutely — Dryden, Newfield, Enfield, Danby, Groton, Lansing, Trumansburg, and the rest, plus every Ithaca neighborhood. The rural towns bring their own pressures (field mice, cluster flies, wildlife), and we tailor the approach to each property rather than treating a farmhouse like a Collegetown apartment." },
    ],
  },

  // ---------------------------------------------------------------- SCHUYLER
  schuyler: {
    knownFor: {
      title: "Pest pressure around Watkins Glen and Seneca Lake",
      paragraphs: [
        "Schuyler County sits at the south end of Seneca Lake, and its economy and pest landscape are shaped by tourism and the Finger Lakes wine trail. Watkins Glen — with its state park, the racetrack, and a dense concentration of tasting rooms, restaurants, hotels, B&Bs, and short-term rentals — draws visitors from everywhere, and that steady flow of travelers and their luggage is precisely how bed bugs move into hospitality properties and rentals. For a business here, a single pest incident can turn into damaging reviews and lost bookings, so protection and discreet, fast response are essential.",
        "Away from the lakefront, Schuyler is rural and rugged: farms, woods, gorges, and scattered small communities like Montour Falls, Odessa, and Burdett. That countryside brings the classic Central New York pressures — mice and wildlife pushing into homes each fall, cluster flies and overwintering insects massing on rural houses, and carpenter ants in the damp, wooded settings. The mix of a tourism core and a rural surround means the county needs both hospitality-grade discretion and country-home practicality.",
      ],
    },
    landscape: {
      title: "Hospitality, homes, and the wine-trail economy",
      paragraphs: [
        "The wine-trail and tourism economy makes commercial pest work especially important in Schuyler County. Tasting rooms and restaurants have health-inspection stakes, and hotels, inns, and the large short-term-rental inventory around Seneca Lake are highly bed-bug-exposed and reputation-sensitive. Discreet, documented service that protects the guest experience — and the reviews — is often the difference between a minor issue and a costly one for these businesses.",
        "For the county's homeowners, the priorities are more familiar: keeping mice and wildlife out through the long winters, managing the fall overwintering invasion on rural properties, and protecting older and seasonal homes. As a local, family-owned company we serve both sides — the wineries and inns that can't afford a bad review, and the farmhouses and lake homes that just want the problem solved right and guaranteed.",
      ],
    },
    faqs: [
      { q: "Do you work with wineries, restaurants, and B&Bs around Watkins Glen?", a: "Yes. The wine-trail and tourism economy means health-inspection readiness for tasting rooms and restaurants, and discreet, documented bed-bug protection for hotels, inns, and short-term rentals around Seneca Lake. A pest incident here can cost bookings and reviews, so we focus on protection and fast, low-profile response." },
      { q: "I have a short-term rental near Seneca Lake — can you help protect it?", a: "Definitely. STRs are among the most bed-bug-exposed properties because of constant guest turnover, and one incident can sink your reviews. We provide discreet inspection and treatment, plus preventative options between guests, with documentation you can keep on file." },
      { q: "Do you serve the rural parts of Schuyler, like Montour Falls and Burdett?", a: "Yes — the whole county, not just Watkins Glen. The rural communities face the standard Central New York pressures of fall rodents, wildlife, cluster flies, and carpenter ants in wooded, damp settings, and we tailor the work to country and seasonal homes as readily as to lakefront businesses." },
    ],
  },

  // ---------------------------------------------------------------- CHEMUNG
  chemung: {
    knownFor: {
      title: "Pest pressure in Elmira and Chemung County",
      paragraphs: [
        "Chemung County centers on Elmira, one of the region's older small cities, and that urban core with its aging housing stock shapes the local pest picture. Densely built older neighborhoods, rental housing, and a long industrial history mean the classic urban pests — mice, rats, cockroaches, and bed bugs — have plenty of the shared-wall, older-building conditions they exploit. As in any older city, multi-unit buildings can let infestations move between units, making coordinated treatment and documentation especially valuable.",
        "The Chemung River runs through the county and the region has a history of flooding, which adds moisture pressure that favors pests like cockroaches, moisture-loving invaders, and carpenter ants in damp, water-affected wood. Beyond Elmira and Horseheads, the county opens into agricultural land and small communities like Big Flats and Van Etten, where rural pressures — fall rodents, wildlife, and overwintering insects — take over. It's a county with both true urban and true rural pest dynamics.",
      ],
    },
    landscape: {
      title: "Older homes, rentals, and rural edges",
      paragraphs: [
        "Elmira's older and rental housing makes exclusion and documented service central to pest work in Chemung County. Century-old homes with stone foundations and settled framing give rodents and insects easy access, and the rental market brings the same habitability and coordination needs found in any older city — landlords responsible for infestations, and problems that require treating connected units together rather than one at a time.",
        "Toward Horseheads, Big Flats, and the county's rural edges, the work shifts to keeping mice and wildlife out of homes through the winter and managing the fall overwintering invasion. Across all of it, being a local, family-owned company means we know the difference between an Elmira row-house rodent problem and a Van Etten farmhouse one, and we price and treat accordingly instead of running a franchise script.",
      ],
    },
    faqs: [
      { q: "Do you serve Elmira, Horseheads, and the surrounding towns?", a: "Yes — Elmira, Horseheads, Big Flats, Van Etten, and the rest of Chemung County. Elmira's older urban and rental housing has different needs (rodents, roaches, bed bugs, exclusion, documentation) than the rural edges (fall rodents, wildlife, overwintering insects), and we tailor the approach to each." },
      { q: "Why does Elmira's older housing get so many pests?", a: "Age and density. Older neighborhoods have settled stone foundations, shared walls, and countless gaps that rodents and insects exploit, and the long industrial history and flood-prone river valley add moisture that favors roaches and carpenter ants. Sealing entry points (exclusion) is one of the highest-value steps on these homes." },
      { q: "I'm a landlord in Elmira — can you provide documentation?", a: "Yes. In New York, landlords generally carry responsibility for infestations under the warranty of habitability, so we provide dated service records and coordinate connected units when needed, giving you the paper trail habitability situations require and treatment that actually resolves the problem rather than moving it next door." },
    ],
  },

  // ---------------------------------------------------------------- CORTLAND
  cortland: {
    knownFor: {
      title: "Pest pressure in Cortland County",
      paragraphs: [
        "Cortland County pairs the small city of Cortland — home to SUNY Cortland — with a broad expanse of dairy country and rolling rural farmland. The university brings a rental and student-housing component to the city, with the familiar turnover-driven spread of bed bugs, mice, and roaches through off-campus apartments and shared houses. The city's older housing stock offers the same easy access to rodents and overwintering insects found across the region's established neighborhoods.",
        "Surrounding the city, Cortland is farm country in one of the snowier parts of Central New York, and that shapes its pest calendar. Long, hard winters push a strong fall migration of mice and wildlife indoors, barns and outbuildings support rural rodent populations, and the wooded, damp settings favor carpenter ants. Homes near fields and farmland feel the overwintering-insect invasion — cluster flies especially, given the agricultural surroundings — as sharply as anywhere in the region.",
      ],
    },
    landscape: {
      title: "Campus rentals and dairy-country homes",
      paragraphs: [
        "Serving Cortland County well means handling two distinct worlds. In and around the city and SUNY Cortland, the work centers on rental and student housing — coordinated, discreet, documented treatment for the bed bugs, roaches, and mice that move through turnover-heavy off-campus properties, with the habitability documentation landlords need. The older city homes benefit heavily from exclusion against the region's rodent pressure.",
        "Out in the dairy-country towns — Homer, Marathon, McGraw, and the rural stretches — the priorities are keeping mice and wildlife out of farmhouses and homes through severe winters, managing barn-adjacent rodent pressure, and getting ahead of the heavy fall cluster-fly and overwintering-pest invasion that agricultural surroundings intensify. As a local family business, we treat a farmhouse near the fields and a student rental in the city as the different jobs they are.",
      ],
    },
    faqs: [
      { q: "Do you handle student rentals near SUNY Cortland?", a: "Yes. Off-campus student housing sees heavy turnover that spreads bed bugs, mice, and roaches between units, so we provide coordinated, discreet, documented treatment across connected apartments and houses, with records landlords can rely on for habitability purposes." },
      { q: "Why are cluster flies and fall invaders so bad in rural Cortland County?", a: "Because cluster flies develop in the soil around fields and pastures, the agricultural countryside is their breeding ground, so farmhouses and rural homes see especially heavy fall invasions. The fix is a well-timed exterior barrier in late summer/early fall, before they move into the walls — best handled alongside fall rodent exclusion." },
      { q: "Do you serve the rural towns like Homer, Marathon, and McGraw?", a: "Yes — the whole county, city and countryside alike. The rural dairy-country homes face hard-winter rodent pressure, barn-adjacent populations, wildlife, and heavy overwintering-insect invasions, and we tailor the work to farm and country properties as readily as to city rentals." },
    ],
  },

  // ---------------------------------------------------------------- TIOGA
  tioga: {
    knownFor: {
      title: "Pest pressure in the Susquehanna valley",
      paragraphs: [
        "Tioga County runs along the Susquehanna River, and the river valley defines its character — Owego, Waverly, Nichols, and Newark Valley are river-and-valley communities set among farmland and wooded hills. The river valley setting brings moisture and a history of flooding, which raises pressure from moisture-loving pests, cockroaches, and carpenter ants in damp or water-affected wood, while the surrounding farmland and woods keep rodent and wildlife reservoirs close to every home.",
        "This is a predominantly rural, agricultural county, so its pest calendar follows the countryside rhythm strongly: a heavy fall push of mice and wildlife seeking shelter for winter, big overwintering-insect invasions (cluster flies, stink bugs, lady beetles) on homes near fields, and carpenter ant pressure in the region's older and wood-framed houses. Owego's historic downtown and older residential neighborhoods add the established-housing dynamics — settled foundations and entry points — found across the region's older communities.",
      ],
    },
    landscape: {
      title: "River towns, farmland, and older homes",
      paragraphs: [
        "Across Tioga County the work is largely about protecting homes against rural and river-valley pressures: sealing older houses against the fall rodent invasion, managing the overwintering-insect masses that agricultural surroundings intensify, and handling wildlife that dens in and around country properties. The flood-prone valley and its moisture make exclusion and attention to damp, carpenter-ant-friendly wood especially worthwhile here.",
        "The county's communities — Owego and Waverly's older neighborhoods, the farms and homes of Nichols, Candor, Newark Valley, and Spencer — each get an approach matched to the property rather than a franchise script. As a local, family-owned company, we bring the responsiveness and block-by-block familiarity that a national provider writing one page for every county simply can't, whether it's a historic Owego home or a farmhouse out along the river.",
      ],
    },
    faqs: [
      { q: "Do you serve Owego, Waverly, and the rest of Tioga County?", a: "Yes — Owego, Waverly, Nichols, Candor, Newark Valley, Spencer, and the surrounding farmland and river communities. The valley's older homes and rural surroundings mean rodent exclusion, wildlife, carpenter ants, and heavy fall overwintering invasions are the common needs, and we tailor the work to each property." },
      { q: "Does living near the Susquehanna affect pest problems?", a: "It can. The river valley brings moisture and a history of flooding, which raises pressure from moisture-loving pests, cockroaches, and carpenter ants in damp or water-affected wood. Managing moisture conditions and sealing entry points are especially valuable for homes in the valley." },
      { q: "Why are fall invaders and rodents such a big deal in rural Tioga?", a: "Because farmland and woods surround most homes, the outdoor rodent and insect reservoirs are always close. Fall brings a strong migration of mice and wildlife indoors and heavy overwintering-insect masses (cluster flies, stink bugs, lady beetles), especially near fields. Well-timed fall exclusion and exterior treatment is the key to staying ahead of it." },
    ],
  },
};

/** Helper: pull the county deep layer (undefined if not yet deepened). */
export const getCountyDeep = (slug: string): CountyDeep | undefined => countyContentDeep[slug];
