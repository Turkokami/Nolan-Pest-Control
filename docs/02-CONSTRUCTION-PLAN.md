# Nolan Pest Control — Vercel Smart Site Construction Plan

> Translates the audit's Smart Site 2.0 roadmap (`01-MASTER-CATALOG.md` §8–§12) into a concrete
> technical build on a fresh **Vercel Smart Site** (Next.js App Router). This is the engineering
> counterpart to the audit's editorial roadmap: same phases, same ~251 pages, expressed as a
> repo, a data model, a component system, and a build/deploy pipeline.

---

## 1. Stack & Platform Decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Vercel-native; file-based routing maps cleanly to hub-and-spoke; RSC keeps ~251 pages fast. |
| Language | **TypeScript** | Data-driven page generation needs typed content models; prevents geo/service data drift. |
| Styling | **Tailwind CSS v4** | Fast, consistent design system; small CSS payload for mobile-majority pest audience. |
| Rendering | **SSG** via `generateStaticParams` | Every service/geo/library page is static → fast, cheap, perfect for crawlers/AEO. |
| Content model | **Typed TS data modules** (`/src/data`) | Single source of truth for NAP, services, geo, pests. Schema + pages + sitemap all read from it. No CMS in Phase 0; can layer MDX/CMS later for blog. |
| Schema/JSON-LD | **Reusable `<JsonLd>` components** reading the data modules | Guarantees NAP consistency across the 7-node graph. |
| Forms | **Retain existing quote form**; wire to a route handler / form provider | Best existing conversion asset. Keep field set + SMS consent. |
| Sitemap/robots | `next-sitemap` or App Router `sitemap.ts` | Auto-includes every programmatic page. |
| Deploy | **Vercel** (preview per PR, prod on main) | The "Vercel Smart Site" target. |
| Analytics | Vercel Analytics + GA4 + call tracking (later phase) | Measure conversion + review-engine impact. |

**Design system:** warm, family-owned, trustworthy. Central NY green/earth palette. Mobile-first.
Click-to-call must be persistent (utility bar + sticky mobile CTA). Retain the site's current warm voice.

---

## 2. Repository Structure

```
nolan-pest-control/
├── docs/
│   ├── 01-MASTER-CATALOG.md        # loss-free audit extraction (source of truth)
│   ├── 02-CONSTRUCTION-PLAN.md     # this file
│   └── 03-PHASE-0-CHECKLIST.md     # operational (non-code) Phase 0 items
├── src/
│   ├── app/
│   │   ├── layout.tsx              # root: header, footer, sticky CTA, Org+WebSite JSON-LD
│   │   ├── page.tsx                # homepage hub (Ithaca-anchored)
│   │   ├── (legal)/
│   │   │   ├── privacy/            # Tier 0
│   │   │   ├── terms/
│   │   │   └── accessibility/
│   │   ├── about/                  # Tier 0/1
│   │   ├── contact/
│   │   ├── our-guarantee/          # defined-term warranty
│   │   ├── services/[service]/     # Tier 2 — 22 pages via generateStaticParams
│   │   ├── pest-control-[county]-county-ny/  # Tier 3 county hubs (or /areas/[county])
│   │   ├── areas/[town]/           # Tier 3 town pages (24)
│   │   ├── areas/ithaca/[hood]/    # Tier 3 neighborhood pages (14)
│   │   ├── pest-library/[species]/ # Tier 5 — 50 pages
│   │   ├── commercial/[vertical]/  # Tier 7 — 10 pages
│   │   ├── guides/[slug]/          # Tier 6 problem-aware micro-pages (15)
│   │   ├── faq/  reviews/  financing/  careers/  service-areas/  # Tier 8
│   │   ├── blog/[slug]/            # Tier 9
│   │   ├── sitemap.ts  robots.ts
│   ├── data/
│   │   ├── business.ts             # LOCKED NAP, hours, social, credentials, brand voice
│   │   ├── services.ts             # 22 service definitions (8 current + 14 new)
│   │   ├── geo.ts                  # counties, towns, neighborhoods (CORRECTED — no Binghamton/Elmira in Wayne)
│   │   ├── pests.ts                # 50-entry Pest Library taxonomy
│   │   ├── verticals.ts            # 10 commercial verticals
│   │   └── faqs.ts                 # reusable FAQ sets
│   ├── components/
│   │   ├── layout/ (Header, Footer, UtilityBar, StickyCallCTA)
│   │   ├── sections/ (Hero, ValueProps, ServiceGrid, ServiceAreaModule, QuoteForm, ReviewsComingSoon)
│   │   ├── schema/ (JsonLd, LocalBusinessSchema, ServiceSchema, FaqSchema, BreadcrumbSchema, PersonSchema)
│   │   └── ui/ (Button, Card, Section, Prose, Breadcrumbs, FaqAccordion)
│   └── lib/ (seo.ts metadata helpers, nap.ts formatter, cn.ts)
├── public/ (logo, images — real truck/team photos when supplied)
├── tailwind.config / next.config / tsconfig / package.json
```

**Page-generation principle:** a page is a *thin route file* that pulls a typed record from `/src/data`,
renders shared section components, and emits its schema node. Adding a town/pest/service = adding one data
record, not hand-coding a route. This is what makes 251 pages maintainable by one operator.

---

## 3. Data Model (drives pages + schema + sitemap)

```ts
// business.ts — the LOCK. Every schema node + footer + contact reads from here.
Business = { name, phone, emailCurrent, emailTarget, url, address?, hours,
             social{facebook,instagram,gbp}, credentials{ nysdecReg?, applicatorCert?,
             insurance? }, brandVoice[], serviceRadiusMiles: 60, hubCity: "Ithaca, NY" }

// services.ts
Service = { slug, name, shortName, category, priority: P1|P2|P3, status: existing|new,
            oneLineAnswer, signs[], process[], seasonalityCNY, pricingGuidance,
            warrantyNote, faqs[], relatedPests[], relatedTowns[] }

// geo.ts — CORRECTED hierarchy (Option A: Ithaca hub)
County = { slug, name, seat, towns[], pestPressure, housingStock, faqs[] }
Town   = { slug, name, county, localSpecifics[≥3], knownPests[], landmark }
Neighborhood = { slug, name, city: "Ithaca", commercialValue, notes }
// Wayne County held in a separate `deferredMarkets` array — NOT in the live county tier.

// pests.ts
Pest = { slug, commonName, scientificName, cluster, identification, lifecycle,
         seasonalityCNY, riskDamage, diyLimits, proTreatment, parentServiceSlug }

// verticals.ts
Vertical = { slug, name, industry, complianceHooks[], angle }
```

**Correctness guarantees baked into the data layer:**
- Binghamton (Broome) and Elmira (Chemung) are **not** children of Wayne County (Defect #2 fixed at the source).
- Wayne towns live in `deferredMarkets`, excluded from nav/schema/sitemap until the §8.1 gate is decided.
- No `Review`/`AggregateRating` node exists until a `reviews` data source is populated with real reviews (Defect #1).
- NAP has exactly one formatter (`lib/nap.ts`); footer, contact, and schema all call it.

---

## 4. Schema Strategy (7-node @graph)

Single shared `@graph` rooted at `https://nolanpestcontrol.com/#localbusiness`, assembled from `business.ts`:

| Node | Emitted where | Source |
|---|---|---|
| Organization | root layout (site-wide) | business.ts (name, logo, sameAs) |
| LocalBusiness / PestControlService | root layout | business.ts NAP, hours, priceRange, areaServed = GeoCircle(60mi, Ithaca) + Place list from geo.ts |
| WebSite (+ SearchAction) | root layout | business.ts url |
| WebPage | per route | seo.ts helper |
| Service | each `/services/[service]` | services.ts, linked to provider + areaServed |
| FAQPage | each page with FAQs | faqs.ts / per-record faqs |
| BreadcrumbList | every non-home page | route hierarchy |
| Person | About/Team + service expert block | business.ts owner (pending name) |
| Place | county + town pages | geo.ts |

> `Review`/`AggregateRating`: **intentionally absent until real reviews exist.** Enforced by the data layer.

---

## 5. Build Sequence (maps 1:1 to audit phases)

### Phase 0 — Foundation & trust (Week 1) — *this build starts here*
**In-repo (code):**
- Scaffold Next.js + TS + Tailwind; commit clean baseline.
- `data/business.ts` with LOCKED NAP + brand voice; `lib/nap.ts` formatter.
- `data/geo.ts` with CORRECTED county tier (Wayne deferred; Binghamton/Elmira removed).
- `data/services.ts` seeded with the 8 existing services (correct URLs preserved).
- Root layout: Header + UtilityBar (click-to-call) + Footer (NAP, legal links, social) + sticky mobile CTA.
- 7-node schema components; Organization + LocalBusiness + WebSite live site-wide.
- Homepage rebuilt as **Ithaca-anchored hub**, retaining the working quote form + service grid + value props.
- **Testimonials removed** → `ReviewsComingSoon` module ("Be our first review").
- Tier 0 pages: Privacy, Terms, Accessibility, Contact, About (stub w/ E-E-A-T scaffold), Our Guarantee (defined-term).
- Corrected service-area module (accurate counties; towns will become real pages in Phase 2).
- `sitemap.ts` + `robots.ts`.
- Verify `next build` passes; deploy preview to Vercel.

**Operational (non-code — see `03-PHASE-0-CHECKLIST.md`):** Wayne gate decision · publish address · claim/build GBP ·
migrate email · publish NYSDEC reg # · resolve hours/emergency · stand up review engine.

### Phase 1 — Hub layer & service rebuild (Weeks 2–4, ~18 pages)
Service template component (AEO answer lead → signs → process → what to expect → seasonality → pricing →
warranty → named-expert block → 8-Q FAQ → geo-link module → CTA). Rebuild all 8 services to 1,200–1,800 words.
Real About/Contact/Service Areas/Residential/Commercial/Team. Full schema graph sitewide. Guarantee page.

### Phase 2 — Service expansion & county/city geo (Weeks 5–9, ~31 pages)
14 new service records (P1 first: cluster-fly, carpenter-ant, bat-removal-exclusion, rodent-exclusion-sealing,
overwintering-pests, wdi-inspection-real-estate). 5 county hubs. 12 priority town pages. County/Town/Place schema.

### Phase 3 — Pest Library & blog (Weeks 10–15, ~62 pages)
`data/pests.ts` → 50 species routes (batched 10 per cycle). Pest Library hub. Blog (MDX) launch, 12 posts.

### Phase 4 — Hyperlocal & intent (Weeks 16–21, ~59 pages)
14 Ithaca neighborhood pages (Collegetown + Cornell Heights first). Remaining 12 towns. 15 problem-aware
`/guides` micro-pages. First 18 service×geo money pages (hand-written; built only after parents are live).

### Phase 5 — Commercial & AEO (Weeks 22–28, ~30 pages)
10 commercial verticals + compliance hub. `/pest-control-cost-ithaca-ny`, `/faq` hub, `/financing`, `/careers`,
`/reviews` (real GBP). Remaining 12 money pages. Execute Wayne County decision (separate hub cluster or drop).

---

## 6. Quality Gates (per phase)
- `next build` + `tsc --noEmit` pass; zero broken internal links (link-check script over the sitemap).
- Every new page emits valid JSON-LD (Rich Results test on a sample per type).
- No page under its word-count floor (services ≥1,200; towns ≥700; library ≥ standard).
- NAP identical across footer/contact/schema (assert in a test reading `nap.ts`).
- No Review schema present while `reviews` data is empty (assert).
- Lighthouse mobile ≥90 perf/SEO on representative pages.
- Geo integrity test: no town assigned to the wrong county; Wayne excluded from live tier.

## 7. Risk / Dependency Register (blocks content, not scaffold)
1. **Wayne County gate** → blocks final geo tree (Phase 2). Option A assumed to proceed.
2. **Physical address** → blocks LocalBusiness schema completion + NAP. Placeholder until supplied.
3. **NYSDEC reg # / applicator cert** → blocks E-E-A-T/compliance credibility. Placeholder.
4. **Owner name/bio/photo** → blocks Person node + team page.
5. **Real reviews** → blocks Review schema + `/reviews`. Review engine (operational) is the gate.
6. **NY statute verification** → blocks publishing compliance pages (legal review).
7. **Real photography** → blocks "family owned" authenticity; stock undercuts positioning.

> None of these block the Phase 0 scaffold. They are content/trust inputs the client supplies as the build proceeds.
