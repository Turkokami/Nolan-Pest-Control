# Phase 1 — Hub Layer & Service Rebuild (complete)

Audit §10 Phase 1 / Construction Plan §5. Built on top of the Phase 0 foundation.

## What shipped
- **All 8 service pages rebuilt to full template** (~1,230–1,330 words each, verified), same URLs — no redirects:
  AEO answer lead → intro → service-specific deep-dive → signs/identification → treatment process →
  what to expect → CNY seasonality → pricing guidance → prevention → 8-question FAQ (with FAQPage schema) →
  named-expert block → geo-link module → CTA bar → sibling services.
  Content is hand-written and Central-NY specific (Cornell/IC rentals, Finger Lakes ticks & Lyme, cold-winter
  overwintering, older housing stock, carpenter-ant biology, German-roach spread in multi-unit buildings).
- **Named-expert E-E-A-T block** (`ExpertBlock`) — written once, deployed across service/residential/
  commercial/team pages. Renders real owner + NYSDEC credentials the moment they're added to `business.ts`;
  degrades gracefully until then.
- **Geo-link module** — internally links every service page into the five-county tier (real hub-and-spoke for crawlers).
- **Residential hub** (`/residential`) — home-services hub linking all 8 services + preventative plan.
- **Commercial hub** (`/commercial`) — commercial repositioning: rentals/property management, student housing,
  restaurants (Sanitary Code Part 14), wineries/hospitality, offices, portfolios. Tees up the Phase 5 vertical pages.
- **Team page** (`/team`) — E-E-A-T; renders owner bio + credentials when supplied.
- Nav, footer, and sitemap updated for all new pages.

## New files
- `src/data/service-content.ts` — long-form content for the 8 services (the Phase 1 content backbone).
- `src/components/sections/ExpertBlock.tsx`, `GeoLinkModule.tsx`
- `src/app/residential/page.tsx`, `src/app/commercial/page.tsx`, `src/app/team/page.tsx`

## Verification
- Full-source TypeScript parse: PASS (React/Next stubbed; installs normally on Vercel).
- Rendered word count per service page confirmed in the 1,200–1,800 target band.
- FAQ sets expanded to 8 per service; FAQPage schema now emits the full set.

## Client inputs still pending (unlock deeper credibility)
Same list as Phase 0 (`docs/03-PHASE-0-CHECKLIST.md`): owner name/bio/photo, NYSDEC registration + applicator
cert, real address, confirmed guarantee terms, real pricing numbers (for the Phase 5 cost page), and the
Wayne County decision. The pages render cleanly today and light up automatically as these arrive.

## Next: Phase 2 (Weeks 5–9, ~31 pages)
14 new service pages (P1 first: cluster fly, carpenter ant, bat exclusion, rodent exclusion, overwintering, WDI),
5 county hubs, and 12 priority town pages — mostly a data + copy task on the models already built.
