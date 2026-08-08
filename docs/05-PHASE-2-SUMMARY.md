# Phase 2 — Service Expansion & County/City Geo (complete)

Audit §10 Phase 2 / Construction Plan §5. ~31 new pages built on the Phase 0/1 models.

## What shipped

### 14 new service pages (8 → 22 total)
All routed at `/services/[slug]`, activated in `services.ts`, with full content in `service-content-phase2.ts`.
- **P1 (full length, ~1,075–1,250 words):** cluster-fly-control, carpenter-ant-control, bat-removal-exclusion,
  rodent-exclusion-sealing, overwintering-pests, wdi-inspection-real-estate.
- **P2/P3 (solid medium, ~800–900 words, flagged for later expansion):** wildlife-removal, squirrel-removal,
  raccoon-removal, mole-vole-control, flea-control, wasp-hornet-nest-removal, termite-control, attic-restoration-insulation.
- New **`/services` index** groups all 22 by category. Header/footer/homepage now show a curated **core 8**
  plus an "all 22 services" link, so nav stays clean while every service is one click away.

### 5 county hub pages
At the audit's exact SEO slugs: `/pest-control-tompkins-county-ny`, `-schuyler-`, `-chemung-`, `-cortland-`, `-tioga-`.
Root dynamic segment scoped by `generateStaticParams` + `dynamicParams=false` (only these 5 build; static routes
still win; everything else 404s). Each has intro, pest-pressure detail, housing & seasonality, a linked town list,
service cards, county FAQ (FAQPage schema), and an `AdministrativeArea` Place node.

### 12 priority town pages
At `/areas/[town]`: Ithaca, Lansing, Dryden, Trumansburg, Newfield, Groton, Watkins Glen, Montour Falls, Elmira,
Horseheads, Cortland, Owego. Each carries the audit-required **≥3 genuinely local specifics** (Cornell/IC rentals,
Seneca wine-trail hospitality, Susquehanna flood-prone basements, dairy-country cluster flies, etc.), known-pest
list, service cards, town FAQ (FAQPage schema), a `Place` node, and breadcrumbs up to the county hub.

### Wiring
Sitemap now emits all 22 services + 5 counties + 12 towns. Footer counties link to hubs. Service Areas page links
county headings and priority-town chips to their pages. Full breadcrumb hierarchy: Home → Service Areas → County → Town.

## Verification
- Full-source TypeScript parse: PASS.
- P1 services confirmed in the 1,075–1,250-word band; P2/P3 at ~800–900 (intentional, flagged).
- County hubs ~700–800 words of unique content + page chrome; towns carry the required 3 local specifics each.

## Known depth notes (next refinement, not blockers)
- **P2/P3 service pages** are medium-length by design — expand toward 1,200+ as demand warrants.
- **Town pages** meet the "≥3 local specifics / no spun template" bar but sit at the shorter end of the audit's
  700–1,000-word town target; a content-deepening pass (a 4th local specific + more FAQs each) is the natural next increment.
- Same client inputs still pending (owner/credentials/address/pricing/Wayne gate) — see `docs/03-PHASE-0-CHECKLIST.md`.

## Route count now
~40 route patterns; ~50+ generated pages (22 services + 5 counties + 12 towns + hubs + legal + home).

## Next: Phase 3 (Weeks 10–15, ~62 pages)
Pest Library hub + 50 species entries (data-driven from a `pests.ts` taxonomy) and the blog launch.
