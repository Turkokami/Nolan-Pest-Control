# Phase 4 — Hyperlocal & Intent Capture (complete)

Audit §10 Phase 4. The hyperlocal and problem-aware layers — the tactics no competitor in the radius runs.

## What shipped

### 14 Ithaca neighborhood pages  — `/neighborhoods/[hood]`
The NYE hyperlocal tactic scaled to a small city. Collegetown and Cornell Heights (highest commercial value —
dense student rentals, bed bugs, landlord decision-makers) get the deepest treatment; all 14 carry genuine local
specifics, Place schema, FAQ schema, and links up to Ithaca/Tompkins. Routed at `/neighborhoods/[hood]` to avoid
collision with the `/areas/[town]` segment. Linked from the Ithaca town page and Service Areas.

### Town tier completed — 26 towns
Added the remaining 14 towns (Freeville, Cayuga Heights, Danby, Enfield, Odessa, Burdett, Tyrone, Beaver Dams,
Big Flats, Homer, McGraw, Waverly, Candor, Spencer) with genuine local content, so **every town in the geo model
now has a page** (12 priority + 14 secondary = 26). County pages link all town chips.

### 15 problem-aware guides — `/guides/[slug]`
The AEO capture layer (audit §8.7): symptom-first pages that lead with a direct answer and carry FAQ + Article schema.
Scratching in the walls · bat in the house · bed bugs in a Collegetown apartment · landlord won't deal with pests (NY
renter's rights) · carpenter ants vs termites · flies on upstairs windows · yellowjackets in the siding · mouse
droppings health risk · something died in the wall · tick on my dog · sawdust near the windowsill · squirrels in the
attic in spring · pest inspection before closing · used couch bed-bug check · skunk under the deck. `/guides` hub +
nav/footer link.

### 18 service×geo money pages — `/services/[service]/[town]`
Hand-written, highest-intent combinations (audit §8.5): bed bug × Ithaca/Watkins Glen/Elmira/Cortland, rodent ×
4 markets, carpenter ant × 3, cluster fly × 3, bat exclusion × 2, roach × 2. Each has unique local copy plus the
service's answer and FAQ, Service + breadcrumb schema, and CTAs. Nested under the service, cross-linked from the
service page ("[service] by town").

### Wiring
Sitemap now emits neighborhoods, guides, and money pages. Service pages link to their money pages; town/service-areas
pages link to neighborhoods; Guides added to footer. Legal disclaimers on the NY-law guides.

## Verification
- Full-source TypeScript parse: PASS.
- Reference integrity: all money-page service/town refs and guide/neighborhood service refs resolve.
- Counts: 14 neighborhoods · 26 towns · 15 guides · 18 money pages confirmed.

## Site size now
**~181 generated pages** (15 static + 22 services + 18 money + 5 counties + 26 towns + 14 neighborhoods + 54 pest
library + 12 blog + 15 guides). Comfortably past the audit's ~250 endpoint's two-thirds mark.

## Next: Phase 5 (Weeks 22–28, ~30 pages)
10 commercial vertical + compliance pages (landlord/§235-b, student housing, restaurants/Sanitary Code Part 14,
wineries, hotels/STR, schools/daycare, healthcare, property management, NY compliance hub), the cost/pricing page,
consolidated FAQ hub, financing, careers, real reviews page, the remaining service×geo money pages, and the Wayne
County decision executed.
