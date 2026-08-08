# Nolan Pest Control — Master Catalog (Source of Truth)

> **Purpose:** Complete, loss-free extraction of every fact, figure, decision, and page
> from the *Nolan Pest Control Smart Site Analysis & Buildout* (16-page audit, July 2026)
> plus the live-site benchmark of `nolanpestcontrol.com`.
> This file is the canonical reference for the fresh **Vercel Smart Site** build. Nothing
> in the audit should exist only in the PDF — if it matters, it is captured here.

- **Client:** Nolan Pest Control
- **Domain:** nolanpestcontrol.com
- **Phone:** (607) 269-6218
- **Current email:** nolanpest@outlook.com → **migrate to** info@nolanpestcontrol.com
- **Market:** Tompkins / Schuyler / Chemung / Cortland / Tioga + Wayne County (secondary)
- **Operating center:** Ithaca, NY (60-mile radius)
- **Framework:** Smart Site hub-and-spoke architecture (Tier 2.0 target)
- **Current Smart Site readiness score:** 20 / 100 → **Post-build target:** 88 / 100
- **Build stack:** Vercel Smart Site — Next.js (App Router) on Vercel (fresh, no prior repo)
- **Prepared:** July 2026 · Catalog compiled: August 2026

---

## 1. Business Identity & NAP (LOCK THIS)

| Field | Value | Notes |
|---|---|---|
| Legal/brand name | Nolan Pest Control | Facebook titled "Nolan Pest Control \| Ithaca NY" |
| Phone | (607) 269-6218 | 607 = Ithaca/Southern Tier area code (anchors the hub) |
| Current email | nolanpest@outlook.com | **Trust/NAP risk — move to domain mailbox** |
| Target email | info@nolanpestcontrol.com | Phase 0 migration |
| Physical address | **NONE PUBLISHED** | **Critical gap** — no NAP anchor exists. Must publish a real address. |
| Hours (current) | Mon–Fri 8am–5pm; Sat–Sun closed | Contradicts "emergency" CTA; competitors run 24/7 |
| Social | Facebook, Instagram, Google share link | Use as `sameAs` in schema |
| NYSDEC pesticide business registration # | Not published | Must publish (free credibility; NY requires DEC registration to operate) |
| Applicator certification | Not published | Publish |

**NAP rule:** one canonical format, used identically everywhere (site footer, contact page,
schema, GBP, every citation). No variants.

### Brand voice (KEEP — do not rewrite, extend)
- "Family owned, locally operated, and guaranteed."
- "Built by a family that believes hard work, honesty, and results still matter."
- Positioning phrases confirmed live: "Guaranteed Results", "Family Owned & Operated",
  "Prices You Can Afford", "Safe for Your Family & Pets".
- Audit verdict: brand voice is *warm and consistent* and usable as-is. Extend it; don't replace it.

---

## 2. Live-Site Current State (benchmark — what we are replacing)

**Current score: 20 / 100** — "Presentation is ahead of infrastructure. Common for a new build."
Note: 20/100 is *not* a criticism of design or copy (both above Tier-3 average). It measures
**surface area and infrastructure**, and a nine-page site cannot score higher.

### 2.1 Complete current page inventory (9 URLs total)

| URL | Type | Notes |
|---|---|---|
| `/` | Single-page site | Hero, quote form, About block, 4 value props, stat strip, 8-card service grid, service-area map module (interactive), 3 testimonials, footer. Everything else lives behind anchors. |
| `/general-pest` | Service | ~150–250 words body, 2–3 subheads, "Pests We Treat" chip row, CTA block, then the full 8-service grid repeated. No FAQ, no pricing, no process detail, no photos, no geo linking, no internal links beyond sibling grid. ~250–300 words each. |
| `/roach-control` | Service | (same template) |
| `/rodent-control` | Service | (same template) |
| `/ant-control` | Service | (same template) |
| `/spider-control` | Service | (same template) |
| `/stinging-insects` | Service | (same template) |
| `/mosquito-tick` | Service | (same template) |
| `/bed-bug` | Service | (same template) |

**Pages that do NOT exist (and must be built):** About, Contact, Service Areas, any city or
county page, Residential, Commercial, Pest Library, Blog, FAQ, Team, Reviews, Careers,
Privacy Policy, Terms of Service, Accessibility Statement, Warranty/Guarantee, Financing, Pricing.

### 2.2 Live nav (confirmed on site)
Home · General Pest Preventative Service · Roach Control · Rodent Control · Ant Control ·
Spider Control · Stinging Insects · Mosquitoes & Ticks · Bed Bug Control · About · Free Estimate

### 2.3 Homepage content (confirmed live)
- **Hero headline:** "Protect Your Central NY Home from Pests"
- **Hero subhead:** "Nolan Pest Control offers effective, safe, and reliable solutions for all
  your pest control needs. Family owned, locally operated, and guaranteed."
- **Value props:** ✅ Guaranteed Results · 🏡 Family Owned & Operated · 💲 Prices You Can Afford ·
  100% Satisfaction Guaranteed · Safe for Your Family & Pets
- **Stat strip:** 100% Satisfaction Guaranteed · 3+ Counties Served · 8 Pest Services · Family Owned
  (audit: weak/filler — replace with years in business, homes protected, response time, review count once real)

### 2.4 Quote form fields (KEEP — best conversion asset on the site)
First Name · Last Name · Email · Phone · Service Needed (dropdown, pre-populated with all 8) ·
Address · City · Zip · SMS consent checkbox · success state with call fallback.
> Audit: "better conversion plumbing than most Tier 3 competitors and several Tier 2 ones." Retain in rebuild.

### 2.5 The three testimonials (REMOVE IMMEDIATELY — likely fabricated / FTC risk)
Exactly one per named market, generic voice, initials-only attribution, no Google source,
no discoverable third-party review footprint. FTC endorsement rules apply to fictitious testimonials.

1. **Sarah M., Newark NY** — "Nolan Pest Control came out quickly and solved our rodent problem for
   good. Professional, thorough, and very fairly priced. Highly recommend to anyone in the area." ★★★★★
2. **Tom B., Ithaca NY** — "We had a terrible ant problem in our kitchen all summer. One treatment
   from Nolan and they've been gone for months. Great local company that really stands behind their work." ★★★★★
3. **Karen D., Watkins Glen NY** — "Honest pricing, showed up on time, and explained everything they
   were doing. This is exactly the kind of local business you want taking care of your home." ★★★★★

**Action:** delete all three; replace with "Reviews coming soon — be our first" module OR real
Google Business Profile pull-through once real reviews exist. Do **not** apply Review/AggregateRating
schema until real reviews exist.

### 2.6 Current service-area list (as shown live — GEOGRAPHICALLY BROKEN, see Defect #2)
- **"Wayne County":** Newark, Palmyra, Sodus, Macedon, Williamson, Clyde, Wolcott, Marion,
  Pultneyville, **Binghamton, Elmira** ← Binghamton (Broome) and Elmira (Chemung) are 100+ mi
  from Wayne and are NOT in Wayne County. **This corrupts any geo schema built on top of it.**
- **Tompkins County:** Ithaca, Dryden, Trumansburg, Cayuga Heights, Ludlowville
- **Schuyler County:** Watkins Glen, Montour Falls, Beaver Dams, Burdett, Tyrone

> 21 named service areas total across nav + map module; **all resolve to `#areas` anchors, not pages** →
> "21 pieces of local intent captured and thrown away." Largest single addressable gap.

---

## 3. What Is Genuinely Working (preserve in rebuild)
- Quote form (see 2.4) — strong conversion plumbing.
- Click-to-call everywhere — top utility bar, hero, mid-page emergency bars, footer. Correct for mobile-majority pest audience.
- Clean, keyword-appropriate URLs (`/rodent-control`, not `?p=142`). No Phase-1 redirects needed. Advantage over the Sasquatch TX conversion.
- Meta titles/descriptions present and sensible (phone number in description) on homepage and service pages.
- Service selection correct: the eight chosen pests are the right eight for residential Central NY. Problem is depth/breadth, not selection.
- Brand voice warm and consistent (see §1).

---

## 4. Defects — all 17, ranked by severity (fix map)

| # | Defect | Severity | Fix |
|---|---|---|---|
| 1 | Testimonials appear fabricated | **CRITICAL** | Remove immediately; replace with real GBP pull-through. FTC risk. No Review schema until real. |
| 2 | Binghamton & Elmira listed under "Wayne County" | **CRITICAL** | Factually wrong (Broome/Chemung, 100+ mi). Fix before any geo schema. |
| 3 | No physical address published anywhere | **CRITICAL** | No NAP anchor → nothing to attach LocalBusiness graph to. Root blocker for local-SEO layer. |
| 4 | 21 service areas are anchors, not pages | **CRITICAL** | Every town/map link resolves to `#areas`. Zero indexable local surface. Largest addressable gap. |
| 5 | No third-party citation footprint | HIGH | Not in Google Places, BBB, Angi, Yelp, Nextdoor, chambers, NPMA/NYSPMA. Invisible outside own domain + Facebook. |
| 6 | Zero topical authority layer | HIGH | No Pest Library, no blog, no FAQ. Nothing for an answer engine to cite. |
| 7 | @outlook.com contact email | HIGH | Trust signal loss + NAP inconsistency. Move to domain mailbox. |
| 8 | Hours contradict the emergency CTA | HIGH | "Call us now/Got an emergency?" but Mon–Fri 8–5, closed weekends. Competitors run 24/7 or 7-day. Extend coverage / add answering service / reword. |
| 9 | No E-E-A-T layer at all | HIGH | No owner name, bio, photo, **NYSDEC registration #**, certified applicator ID, insurance statement, NPMA/NYSPMA affiliation. DEC registration is free credibility. |
| 10 | No commercial track | HIGH | Copy says "homes and businesses" but every page written to a homeowner. No commercial/compliance vertical. Commercial = recurring contract revenue. |
| 11 | No legal or trust pages | MEDIUM | No privacy, terms, accessibility — and the form collects PII + SMS consent. Sweeney's has all three linked in footer. |
| 12 | Structured data not evident | MEDIUM | No JSON-LD detected in rendered output. Needs raw-source verification; assume full 7-node @graph build required. |
| 13 | Service pages too thin to rank | MEDIUM | ~250–300 words vs competitor pages of 800–1,500. |
| 14 | Missing high-value CNY pests | MEDIUM | No page for cluster flies, carpenter ants, bats, stink bugs, Asian lady beetles, wildlife, moles/voles, fleas, WDI real-estate inspections. Cluster flies + carpenter ants arguably the two highest-volume seasonal searches upstate. |
| 15 | Stat strip is weak | LOW | "3+ Counties / 8 Services / 100% Satisfaction" reads as filler. Replace with years in business, homes protected, response time, review count. |
| 16 | Logo alt/src empty in rendered output | LOW | Verify image assets + alt text on header/footer logo. |
| 17 | Unqualified guarantee language | LOW | "100% Satisfaction Guaranteed" / "if pests return, so do we at no extra charge" have no defined term/scope/exclusions. Convert to a defined-term warranty page. Never open-ended or "lifetime." |

### 4.1 Current scorecard detail (20/100)

| Category | Score | Notes |
|---|---|---|
| Architecture & page surface | 4 / 20 | 9 pages vs 48 for best local independent |
| Service page depth | 5 / 15 | Right services, correct URLs, far too thin |
| Local / geo surface | 1 / 15 | 21 towns named, zero pages, no address |
| Topical authority | 0 / 15 | No library, no blog, nothing |
| Technical SEO & schema | 3 / 10 | Clean URLs and metadata; no structured data |
| E-E-A-T & trust | 1 / 10 | No person, no license, no address, no legal pages, suspect testimonials |
| AEO / answer readiness | 0 / 5 | No direct-answer blocks, no FAQ schema |
| Conversion infrastructure | 6 / 10 | Strongest area. Form and call paths well built. |
| **TOTAL** | **20 / 100** | |

> Fair framing for the client: 20/100 is not about design/copy. Sasquatch WA, with operating history, scored 40. The gap is entirely buildable.

---

## 5. Market Definition & Radius

60-mile radius drawn from **Ithaca** (center). Justification: 607 phone, Facebook titled "Ithaca NY,"
Tompkins/Schuyler the only contiguous defensible cluster. Wayne County = separate, disconnected market island (§7.1 gate).

| Market | Approx. distance | County | Competitive character |
|---|---|---|---|
| **Ithaca** | Center | Tompkins | No dominant independent general-pest brand. Wildlife specialist owns top GBP. **PRIMARY TARGET** |
| Cortland / Homer | ~22 mi NE | Cortland | Sweeney's home turf. Hardest sub-market. |
| Watkins Glen / Montour Falls | ~25 mi SW | Schuyler | Thin. Custom Pest (Dundee) + Outdoor Pest Pros closest. Wine/hospitality vertical. |
| Owego / Waverly | ~30 mi S | Tioga | Very thin. No meaningful local independent. |
| Elmira / Horseheads | ~35 mi SW | Chemung | Weak field. CNY Bed Bug (niche), Critter Chick, All Seasons. **SOFT** |
| Auburn | ~37 mi N | Cayuga | Bee Spider Free (5.0/164), Lakeside. Stinging-insect-skewed. |
| Geneva / Seneca Falls | ~40 mi NW | Ontario/Seneca | EnviroPest Finger Lakes (4.9/647). Strong. |
| Binghamton | ~50 mi SE | Broome | Crowded, mid-quality: Terminix, Ehrlich, Big R&J, Burke, SWAT, Bug Killer. |
| Corning / Painted Post | ~50 mi SW | Steuben | Thin. All Seasons (S. Corning) not accepting new clients per reviews. |
| Syracuse | ~55 mi N | Onondaga | Saturated & strong: Gannon (1,416), Fox (1,175), Bugs Bee Gone (433), Aptive, Pestech. **AVOID** |
| Newark / Palmyra / Sodus | ~55–70 mi NW | Wayne | Edge of radius. Nearly vacant locally (A+ Pest, 1 review) but disconnected from 607 core. |

> **Geography read:** strongest competitors sit at the *edges* (Syracuse N, Geneva/Canandaigua NW,
> Binghamton SE). The **center — Ithaca, Schuyler, Tioga, Chemung — is the softest ground in Central NY.**
> Nolan is sitting on it. Build outward from there. Do not chase Syracuse.

---

## 6. Competitive Landscape (full — every operator named)

### 6.1 Tier 1 — National / regional franchise (win on domain authority; beatable on specificity)

| Company | Base | Rating | Structural note |
|---|---|---|---|
| Terminix | Cortland + Binghamton | 4.9/119; 4.5/509 | Statewide programmatic town pages (every hamlet). Massive surface, zero local voice. |
| Ehrlich (Rentokil) | Binghamton, E. Syracuse, Cortland | 4.3/206; 4.3/370; 3.0/4 | Deep commercial/audit-compliance content. **Model to copy for the commercial vertical.** |
| Fox Pest Control | East Syracuse | 4.6/1,175 | Aggressive door-to-door + 24/7 answering. Highest-velocity review machine in region. |
| Aptive | East Syracuse | 4.8/332 | Door-to-door subscription. 607 number already pushing into Southern Tier. |
| Pestech Pest Solutions | East Syracuse | 5.0/134 | Commercial-led, institutional accounts. |

### 6.2 Tier 2 — Strong regional independents (the real peer ceiling)

| Company | Base | Rating | Why they matter |
|---|---|---|---|
| **Sweeney's Pest Elimination** (sweeneyspest.com) | Homer / Cortland | 4.9/351 | **PRIMARY BENCHMARK.** Founded 1996. 8 counties incl. Tompkins. 27 location pages, 8-category Pest Library, res/commercial split, 12-person named team, blog, careers, treatment-prep resources, product-label library. Open 24h. Only radius competitor running Smart-Site-adjacent architecture. |
| Gannon Pest Control | Solvay / Syracuse | 4.9/**1,416** | Highest review volume in radius. Review moat, not a content moat. |
| EnviroPest — Finger Lakes Pest Control | Geneva | 4.9/647 | 7am–8pm 7 days. Owns "Finger Lakes" brand association. Visible service-consistency complaints (exploitable). |
| Excelsior Pest Group | Canandaigua | 5.0/438 | Perfect rating at high volume. 24/7. Multi-property/commercial. |
| Bugs Bee Gone | Syracuse | 4.7/433 | Stinging-insect specialist positioning. |
| **Wildlife Resolutions** | Ithaca | 4.9/479 | **ITHACA INCUMBENT.** Strongest GBP in Tompkins — but wildlife/exclusion only (bats, raccoons, birds, muskrat). **Do NOT own general pest.** Single most important gap in the market. |
| Custom Pest Control (fingerlakespestcontrol.com) | Dundee (Yates) | 4.9/313 | 24/7. Direct overlap Watkins Glen / Schuyler. Heavy community-sponsorship marketing. |
| Optimum Pest Pros | Canandaigua | 4.9/328 | 24/7, Rochester-facing. Marginal overlap. |

### 6.3 Tier 3 — Nolan's current true peer set (small independents, 5–200 reviews)
Nolan sits at the *bottom* of this group on review count, near the *top* on site presentation.

| Company | Base | Rating | Note |
|---|---|---|---|
| All Pest of Syracuse | East Syracuse | 5.0/182 | Multi-generational family framing |
| Critter Ridders | Lafayette | 4.8/189 | Cluster fly specialist — note the pest choice |
| Bee Spider Free | Auburn | 5.0/164 | Single-vertical name = strong intent match |
| Town & Country Pest Solutions | Syracuse | 4.9/126 | Multi-family / apartment accounts |
| Big R & J Exterminating | Binghamton | 4.5/68 | Legacy local; visible scheduling complaints |
| Burke Pest Control | Binghamton | 4.4/67 | Mole/nuisance-animal work |
| S.W.A.T. Stings Wings & Things | Binghamton | 4.4/32 | Wildlife trapping lean |
| Fingerlakes Pest Solutions | Cayuga | 5.0/32 | Owner-operator |
| CNY Bed Bug Extermination | Elmira | 4.7/27 | **WATCH** — single-pest authority play; exceptional bed-bug depth. Direct threat to Nolan's bed-bug page. |
| Syracuse Pest Control | Syracuse | 5.0/27 | Owner-operator |
| Quality Pest Solutions | Ontario (Wayne) | 4.9/26 | Wayne County — relevant only if Wayne retained |
| Outdoor Pest Pros | Dundee | 5.0/21 | Also trades as Finger Lakes Wildlife Control |
| Noble Pest Solutions | Himrod (Yates) | 5.0/16 | **WATCH** — only 16 reviews but already running programmatic `/location/` pages. Even micro-operators building geo surface. |
| Elite Pest & Wildlife | Binghamton | 4.4/7 | Review text reads templated/AI-generated |
| All Seasons Pest Control | South Corning | 4.3/8 | Not accepting new clients — open lane in Corning |
| Lakeside Pest Control | Auburn | 5.0/8 | Bee/bat owner-operator |
| A+ Pest Control | Newark (Wayne) | 5.0/1 | Only local independent in Wayne County. Market nearly vacant there. |
| The Critter Chick | Elmira | 4.0/4 | Nuisance wildlife, sole operator |
| **Nolan Pest Control** | Ithaca (implied) | **Not indexed** | Not in Google Places index. No BBB/Angi/Yelp/Nextdoor/chamber listing found. |

### 6.4 Structural benchmark — surface area (what the Smart Site competes on)

| Site | Est. pages | Location pages | Pest library | Blog | Named team | Comm. split | Score |
|---|---|---|---|---|---|---|---|
| Terminix (NY) | 1,000+ | All NY towns | Yes | Yes | No | Yes | 78 — national template |
| Ehrlich | 800+ | Yes | Yes | Yes | Partial | Deep | 76 — best commercial content |
| Fox Pest Control | 300+ | Yes | Yes | Yes | No | Light | 68 |
| **Sweeney's** | **~48** | **27** | 8 categories | Yes | 12 people | Yes | **58 — best independent** |
| EnviroPest | ~25 | Some | Partial | Yes | Partial | Yes | 46 |
| Excelsior | ~20 | Few | Partial | Light | No | Yes | 42 |
| Gannon | ~18 | Few | Partial | Light | No | Light | 40 |
| Custom Pest Control | ~12 | No | No | No | Founders | Light | 28 |
| Noble Pest Solutions | ~15 | Programmatic | No | No | No | No | 24 |
| **Nolan Pest Control** | **9** | **0** | **No** | **No** | **No** | **No** | **20** |

> **Headline number:** best independent site in the radius has **48 pages**. Smart Site 2.0 target
> for Nolan is **~250**. No independent competitor has infrastructure to answer that; franchises
> that could will never write Ithaca-specific, Cornell-rental-specific, Seneca-Lake-winery-specific content.

### 6.5 Strategic thesis
Nolan cannot out-*authority* Terminix, Ehrlich, or Fox. It can out-*specify* every one of them.
Franchises rank on domain strength with generic national copy; locals rank on reviews with almost
no content surface. A properly executed Smart Site 2.0 — full Pest Library, county/city/neighborhood
geo tier, NY-specific compliance content, AEO answer layer — becomes the **most architecturally
complete pest-control site in Central New York**, and no independent operator in the radius is
currently positioned to respond.

---

## 7. Market Wedges — where content should attack (6 openings)

1. **Cornell / Ithaca college rental market — HIGHEST VALUE.** ~35,000 students, aging Victorian/pre-war
   rental stock → permanent bed-bug/roach/mice demand. Regulatory hook nobody uses: **NY Real Property
   Law §235-b (Warranty of Habitability)** makes landlords responsible for infestations. Build a
   landlord/tenant compliance hub, student-housing page, property-management page, unit-turnover service page.
2. **Cluster flies, stink bugs & overwintering invaders — HIGH VOLUME.** Cluster flies, brown marmorated
   stink bugs, Asian lady beetles, boxelder bugs, western conifer seed bugs. Sept–Nov search spike.
   Sweeney's + Critter Ridders build for it; **Nolan has no page.** Single easiest high-volume win.
3. **Bats, wildlife & exclusion — HIGH TICKET.** Highest-ticket residential job; Wildlife Resolutions owns
   Ithaca. Add NYSDEC seasonal constraint (bat exclusion restricted during maternity/pup season ~May 1–Aug 31)
   as authority content. Split into its own service tier.
4. **Seneca Lake wine trail, hospitality & short-term rentals — COMMERCIAL.** Watkins Glen, Montour Falls,
   Burdett, Hector, Seneca/Cayuga wine trails: tasting rooms, restaurants, hotels, B&Bs, campgrounds,
   Watkins Glen International, large STR inventory. All inspection- and bed-bug-exposed. Nobody selling vertical content.
5. **NY regulatory content nobody writes — AUTHORITY.** Real citable NY frameworks:
   - NYSDEC pesticide business registration & applicator certification (publish the numbers; explain them)
   - Child Safe Playing Fields Act (school/daycare grounds; schools/daycare vertical)
   - Neighbor Notification Law (48-hour notice for commercial apps in participating counties)
   - NYS Sanitary Code Part 14 (food-service establishment; restaurant vertical)
   - Real Property Law §235-b (landlord habitability)
   > Confirm current text + county participation with counsel/DEC before publishing. Cited as content architecture, not legal advice.
6. **WDI / real-estate transaction inspections — REFERRAL CHANNEL.** Wood-destroying-insect inspections
   for home closings (NPMA-33 report). Low-competition, high-margin, referral-generating. Every realtor/lender
   in Tompkins/Schuyler/Chemung needs a provider; no independent in the radius has a page. Opens a B2B channel.

---

## 8. Smart Site 2.0 Target Architecture (~251 pages)

### 8.1 Decision gate (BLOCKER — resolve before Phase 1)
Wayne County (Newark, Palmyra, Sodus, Macedon, Clyde, Wolcott, Marion, Williamson, Pultneyville) is
55–70 mi from the Tompkins/Schuyler cluster with **no contiguous service corridor**. Cannot build one
coherent geo hierarchy across two disconnected islands with one crew.
- **Option A (RECOMMENDED):** Ithaca/Tompkins is the brand hub. Build Tompkins, Schuyler, Chemung,
  Cortland, Tioga as the county tier. Wayne deferred to a Phase 5 decision; if retained, gets its own
  separate hub cluster with its own GBP + physical presence. Evidence favors this (607 code, FB "Ithaca NY,"
  softest ground). **Everything below is written for Option A.**
- **Option B:** If truck/tech/address are actually in Wayne, invert: Newark = hub, Wayne/Ontario/Seneca =
  county tier, Ithaca/Watkins Glen = deferred second market. Wayne is competitively near-vacant (A+ Pest,
  1 review) — legitimate but smaller market. Structure identical; place names swap.

### 8.2 Target architecture by tier

| Tier | Layer | Pages | Contents |
|---|---|---|---|
| 0 | Foundation & trust | 6 | Privacy, Terms, Accessibility, Warranty/Guarantee, Contact, About |
| 1 | Hubs | 7 | Home, Residential, Commercial, Pest Library hub, Service Areas hub, Team, Blog index |
| 2 | Service spokes | 22 | 8 rebuilt + 14 new |
| 3 | Geo — county | 5 | Tompkins, Schuyler, Chemung, Cortland, Tioga |
| 3 | Geo — city/town | 24 | Primary market towns |
| 3 | Geo — neighborhood | 14 | Ithaca-level granularity |
| 4 | Service × geo money pages | 30 | Selective, hand-written |
| 5 | Pest Library entries | 50 | Species-level, topical-authority backbone |
| 6 | Problem/intent micro-pages | 15 | Problem-aware search capture |
| 7 | Commercial verticals | 10 | Industry + compliance |
| 8 | AEO & conversion layer | 8 | Cost pages, FAQ hub, financing, reviews, careers |
| 9 | Blog | ~60 | Six clusters, ongoing |
| — | **TOTAL** | **~251** | ~5× the largest independent site in the radius |

### 8.3 Tier 2 — Service spokes (8 → 22)

**Rebuild the existing 8** (same URLs, no redirects). Each expands from ~250 to **1,200–1,800 words** on the
standard Smart Site service template: AEO direct-answer lead · signs/identification · treatment process ·
what to expect · seasonality in CNY · pricing guidance · defined-term warranty · named-expert block ·
8-question FAQ · geo-link module · CTA bar.

`/general-pest` · `/roach-control` · `/rodent-control` · `/ant-control` · `/spider-control` ·
`/stinging-insects` · `/mosquito-tick` · `/bed-bug`

**Add 14 new:**

| URL | Priority | Rationale |
|---|---|---|
| `/cluster-fly-control` | **P1** | Defining upstate NY seasonal pest. Sweeney's + Critter Ridders build for it; Nolan has nothing. |
| `/carpenter-ant-control` | **P1** | Carpenter ants are *the* ant in Central NY. Generic ant page can't compete. |
| `/bat-removal-exclusion` | **P1** | Highest residential ticket. Directly contests Wildlife Resolutions. Add DEC pup-season constraint. |
| `/rodent-exclusion-sealing` | **P1** | Splits the differentiator already claimed on the rodent page into its own sellable service. |
| `/overwintering-pests` | **P1** | Stink bugs, Asian lady beetles, boxelder, cluster flies, conifer seed bugs. Fall campaign anchor. |
| `/wildlife-removal` | P2 | Hub for squirrel/raccoon/skunk/woodchuck |
| `/squirrel-removal` | P2 | Attic entry, chew damage, insurance angle |
| `/raccoon-removal` | P2 | Attic/chimney, roundworm health angle |
| `/mole-vole-control` | P2 | Lawn damage, spring/fall demand (Burke actively sells this) |
| `/flea-control` | P2 | Pet households; pairs with the tick page |
| `/wasp-hornet-nest-removal` | P2 | Splits urgent intent out of the general stinging-insects page |
| `/termite-control` | P3 | Lower CNY pressure but high-value search; feeds the WDI page |
| `/wdi-inspection-real-estate` | **P1** | NPMA-33 closings inspection. Realtor/lender referral channel. Zero local competition. |
| `/attic-restoration-insulation` | P3 | Highest-ticket add-on; follows every bat/rodent exclusion job |

### 8.4 Tier 3 — Geo layer (0 → 43)

**County hubs (5):** `/pest-control-tompkins-county-ny` · `/pest-control-schuyler-county-ny` ·
`/pest-control-chemung-county-ny` · `/pest-control-cortland-county-ny` · `/pest-control-tioga-county-ny`
— each ~900–1,200 words: county pest pressure, housing stock, service coverage list linking down to town
pages, county FAQ, LocalBusiness + Place schema with GeoCircle service area.

**City / town pages (24):** each 700–1,000 unique words, no spun templates — ≥3 genuinely local specifics
(housing age/type, known pest pressure, landmark/neighborhood, response-time claim).

| County | Towns |
|---|---|
| Tompkins | Ithaca, Lansing, Dryden, Trumansburg, Newfield, Groton, Freeville, Cayuga Heights, Danby, Enfield |
| Schuyler | Watkins Glen, Montour Falls, Odessa, Burdett, Tyrone, Beaver Dams |
| Chemung | Elmira, Horseheads, Big Flats |
| Cortland | Cortland, Homer, Dryden line / McGraw |
| Tioga | Owego, Waverly, Candor, Spencer |

**Ithaca neighborhood tier (14)** — NYE hyperlocal tactic scaled to a small city. Nobody in CNY is doing this:
Collegetown · Fall Creek · Belle Sherman · Northside · Southside · South Hill · East Hill · West Hill ·
Cornell Heights · Downtown / The Commons · Forest Home · Coddington Road corridor · Danby Road corridor ·
Cayuga Heights village.
> Collegetown and Cornell Heights carry the highest commercial value in the entire geo tier (dense student rentals, bed bugs, roaches, mice, landlord decision-makers).

### 8.5 Tier 4 — Service × geo money pages (30)
Six services against five priority markets. Hand-written only. Build **after** parent service + geo pages are live.

| | Ithaca | Watkins Glen | Elmira | Cortland | Owego |
|---|---|---|---|---|---|
| Bed bug | P1 | P1 (hospitality) | P1 | P2 | P3 |
| Rodent | P1 | P2 | P2 | P2 | P3 |
| Carpenter ant | P1 | P2 | P2 | P2 | P3 |
| Cluster fly | P2 | P1 | P2 | P1 | P2 |
| Bat exclusion | P1 | P1 | P2 | P2 | P3 |
| Roach | P1 | P3 | P1 | P2 | P3 |

### 8.6 Tier 5 — Pest Library (50 entries)
Portfolio-standard topical-authority backbone, scoped to species that actually occur in Central NY.
Each entry: identification, lifecycle, seasonality in CNY, damage/health risk, DIY limits, professional
treatment, link up to parent service page + out to relevant geo pages.

| Cluster | Entries |
|---|---|
| Rodents (6) | Norway rat, roof rat, house mouse, deer mouse, white-footed mouse, meadow vole |
| Ants (6) | Carpenter ant, pavement ant, odorous house ant, pharaoh ant, citronella ant, field ant |
| Cockroaches (4) | German, American, Oriental, Pennsylvania wood roach |
| Stinging insects (6) | Yellowjacket, bald-faced hornet, European hornet, paper wasp, carpenter bee, ground-nesting bee |
| Overwintering (6) | Cluster fly, brown marmorated stink bug, Asian lady beetle, boxelder bug, western conifer seed bug, elm leaf beetle |
| Flies & small flying (4) | House fly, fruit fly, drain fly, phorid fly |
| Biting/vectors (5) | Bed bug, blacklegged (deer) tick, American dog tick, lone star tick, mosquito |
| Occasional invaders (7) | House centipede, silverfish, springtail, earwig, pill bug, camel cricket, carpet beetle |
| Wood-destroying (3) | Eastern subterranean termite, powderpost beetle, old house borer |
| Wildlife (7) | Little brown bat, big brown bat, gray squirrel, flying squirrel, raccoon, skunk, woodchuck |

> Sweeney's Pest Library has 8 category pages. 50 species entries is a 6× authority differential in the same market.

### 8.7 Tier 6 — Problem-aware micro-pages (15)
Capture searchers describing a symptom, not naming a pest. High AEO capture, low competition, cheap to write:
- Scratching in the walls at night — mice or something bigger?
- There's a bat in my house — what to do right now
- Bed bugs in a Collegetown apartment — renter's guide
- My landlord won't deal with the pest problem — New York renter's rights
- Carpenter ants or termites? How to tell the difference
- Hundreds of flies on the upstairs windows every fall
- Yellowjackets going into the siding
- Mouse droppings in the silverware drawer — is it a health risk?
- Something died in the wall — odor removal
- Found a tick on my dog — Lyme risk in the Finger Lakes
- Sawdust piles near the windowsill
- Squirrels in the attic in spring
- Do I need a pest inspection before closing on a house?
- Bought a used couch — how to check for bed bugs
- Skunk under the deck or shed

### 8.8 Tier 7 — Commercial verticals & compliance (10)
Revenue-repositioning layer, modeled on Ehrlich/Rentokil "pass inspections and stay open" framing.

| Page | Angle |
|---|---|
| `/commercial-pest-control` | Vertical hub |
| `/landlord-rental-property-pest-control` | **P1** — RPL §235-b habitability, unit turnover, multi-unit protocol |
| `/student-housing-pest-control` | **P1** — Cornell/Ithaca College off-campus, move-in/move-out cycles |
| `/property-management-pest-control` | **P1** — portfolio contracts, per-door pricing, reporting |
| `/restaurant-food-service-pest-control` | NYS Sanitary Code Part 14, health inspection readiness |
| `/winery-brewery-pest-control` | Seneca/Cayuga wine trails, tasting rooms, fruit flies, stored product |
| `/hotel-bnb-short-term-rental` | Bed bug protocol, guest incident response, review protection |
| `/schools-daycare-pest-control` | Child Safe Playing Fields Act, IPM plans, notification |
| `/healthcare-senior-living-pest-control` | Sensitive-population IPM, documentation |
| `/ny-pest-control-compliance` | Compliance hub — DEC registration, notification law, habitability, IPM |

### 8.9 Tier 8 — AEO, trust & conversion layer (8)
- `/pest-control-cost-ithaca-ny` — transparent pricing ranges by service. Highest AEO capture page; nobody in radius publishes pricing.
- `/faq` — consolidated FAQ hub with FAQPage schema
- `/our-guarantee` — defined-term warranty (service-period retreat coverage; multi-year on sealed/repaired exclusion areas). Never "lifetime," never unqualified.
- `/financing` — BNPL for exclusion + bat/attic jobs where ticket justifies it
- `/reviews` — real GBP pull-through only
- `/about` /team — named people, photos, DEC certification numbers, years of service
- `/careers` — Sweeney's runs one; hiring is a bottleneck in this market
- `/service-areas` — geo hub with a real map + links to all 43 geo pages

### 8.10 Blog (~60, six clusters, ongoing)
Seasonal CNY pest calendar · rentals & landlord issues · exclusion & home sealing · wildlife ·
commercial/compliance · Finger Lakes regional.

---

## 9. Schema Graph (7-node @graph, shared root entity)

Root entity: `https://nolanpestcontrol.com/#localbusiness`

1. **Organization** — brand entity, logo, `sameAs` to Facebook/Instagram/GBP
2. **LocalBusiness / PestControlService** — NAP, hours, price range, `areaServed` as GeoCircle + explicit Place list
3. **WebSite** — with SearchAction
4. **WebPage** — per URL
5. **Service** — per service page, linked to `provider` + `areaServed`
6. **FAQPage** — every service, geo, library, and vertical page
7. **BreadcrumbList** — enforces hub-and-spoke hierarchy to crawlers

Plus **Person** for the named expert (owner), and **Place** nodes for each county and town.
**Review / AggregateRating only once real reviews exist — do NOT mark up the current testimonials.**

---

## 10. Execution Phasing (from audit)

**Phase 0 — Foundation & trust (Week 1).** *"Nothing else starts until these are done. Most cost nothing but a decision."*
1. Answer the Wayne County decision gate (§8.1)
2. Remove the three testimonials → "Reviews coming soon — be our first" or real GBP reviews
3. Fix the Binghamton/Elmira county miscategorization
4. Publish a real physical address; lock NAP format and use it identically everywhere
5. Claim, verify, fully build the Google Business Profile (categories, services, area, hours, photos, Q&A, description)
6. Move email to info@nolanpestcontrol.com
7. Publish the NYSDEC pesticide business registration number + applicator certification
8. Resolve the hours/emergency contradiction
9. Publish Privacy Policy, Terms, Accessibility Statement
10. Stand up the review-generation engine — post-service SMS/email ask (GorillaDesk automation if that's the field software)

**Phase 1 — Hub layer & service rebuild (Weeks 2–4, ~18 pages):** homepage restructured as true Ithaca-anchored
hub (keep the form); real About/Contact/Service Areas/Residential/Commercial/Team; all 8 service pages rebuilt to
full template (same URLs); full 7-node schema deployed sitewide; named-expert E-E-A-T block deployed; guarantee page.

**Phase 2 — Service expansion & county/city geo (Weeks 5–9, ~31 pages):** 14 new service pages (P1 first: cluster fly,
carpenter ant, bat exclusion, rodent exclusion, overwintering, WDI); 5 county hubs; 12 highest-priority town pages
(Ithaca, Lansing, Dryden, Trumansburg, Newfield, Groton, Watkins Glen, Montour Falls, Elmira, Horseheads, Cortland, Owego).

**Phase 3 — Pest Library & blog launch (Weeks 10–15, ~62 pages):** Pest Library hub + 50 species (batched 10 per cycle);
blog launch, first 12 posts across six clusters.

**Phase 4 — Hyperlocal & intent capture (Weeks 16–21, ~59 pages):** 14 Ithaca neighborhood pages (Collegetown +
Cornell Heights first); remaining 12 town pages; 15 problem-aware micro-pages; first 18 service×geo money pages.

**Phase 5 — Commercial & AEO layer (Weeks 22–28, ~30 pages):** 10 commercial vertical + compliance pages;
cost/pricing, FAQ hub, financing, careers, reviews; remaining 12 money pages; Wayne County decision executed.

> **Sequencing logic:** trust + NAP before content (unindexed pages on a nonexistent entity do nothing);
> service depth before geo (geo pages need real parents to link to); library before neighborhoods (library
> makes neighborhood pages substantive); commercial last (needs the credibility the first four phases build).

---

## 11. What the Site Alone Will NOT Fix (calibrate expectations)

| Gap | Nolan today | Market benchmark | Requirement |
|---|---|---|---|
| Google reviews | Not indexed | Sweeney's 351 · Gannon 1,416 · EnviroPest 647 | **#1 PRIORITY.** Target 50 reviews in 6 mo, 150 in 18. Not a website task. |
| Citations / directories | None found | Competitors on BBB, Angi, Yelp, Nextdoor, chamber, Birdeye | 30–40 consistent NAP citations. Prioritize BBB, Angi, Yelp, Nextdoor, Tompkins/Cortland chambers, NYSPMA, NPMA. |
| Operating hours | M–F 8–5 | Five competitors run 24/7 | Answering service minimum; emergency response is a primary pest differentiator. |
| Backlinks | ~Zero | Chamber, sponsorships, local press | Chamber memberships, little-league/community sponsorship (Custom Pest runs this hard), local news, Cornell/IC off-campus housing resource lists. |
| Photography | None on site | Sweeney's has truck/team/tech photos | Real truck, team, job-site photos. Stock undercuts "family owned." |
| Commercial sales motion | None | Ehrlich, Pestech, Town & Country | Content opens the door; someone still walks through with property managers + restaurant GMs. |

---

## 12. Projected End State (20 → 88)

| Category | Now | After | Basis |
|---|---|---|---|
| Architecture & page surface | 4/20 | 19/20 | ~251 pages vs 48 for best independent |
| Service page depth | 5/15 | 14/15 | 22 services at 1,200–1,800 words w/ FAQ + schema |
| Local / geo surface | 1/15 | 14/15 | 5 counties, 24 towns, 14 neighborhoods, 30 money pages |
| Topical authority | 0/15 | 13/15 | 50-entry Pest Library + ongoing blog (6× Sweeney's) |
| Technical SEO & schema | 3/10 | 9/10 | Full 7-node graph, breadcrumbs, geo entities |
| E-E-A-T & trust | 1/10 | 8/10 | Named expert, DEC credentials, real reviews, legal pages, team (capped at 8 until review volume matures) |
| AEO / answer readiness | 0/5 | 5/5 | Direct-answer blocks, FAQ schema, cost transparency, problem-aware pages |
| Conversion infrastructure | 6/10 | 9/10 | Existing form retained; financing, booking, review widget added |
| **TOTAL** | **20** | **88** | Most architecturally complete pest-control site in Central NY |

**Competitive position after buildout:** Nolan 88 (#1 independent in radius) · Terminix 78 (loses long-tail/
neighborhood/NY-compliance/problem-aware) · Ehrlich 76 (no Ithaca specificity/local voice) · Fox 68 (wins on
review velocity + ad spend, not content) · Sweeney's 58 (overtaken structurally; still wins on 351 reviews +
tenure + 24/7 + Cortland home field — expect them to hold Cortland/Homer) · EnviroPest 46 · Excelsior/Gannon/
Optimum 40–42 · all Tier 3 locals 12–28 (structurally out of the conversation).

**What the buildout reliably produces:** dominance of long-tail informational + problem-aware search across
Tompkins/Schuyler/Chemung/Tioga; strong answer-engine citation share for CNY pest questions; a credible commercial
pitch deck in web form; a durable content moat no independent can replicate.

**What it will NOT produce on its own:** local-pack (3-pack) position — won on proximity, review volume, GBP
completeness. Run the review engine in parallel from Week 1 or the content investment underperforms its ceiling.

**Sequenced priority — short version:**
1. Answer the Wayne County question
2. Pull the fake testimonials + fix the county error
3. Publish an address, verify the GBP, start the review engine
4. Rebuild the eight service pages + ship the schema graph
5. Build cluster fly, carpenter ant, bat exclusion, rodent exclusion, WDI
6. Ship the county hubs + first 12 town pages
7. Ship the Pest Library
8. Take Collegetown + the student rental market
9. Open the commercial vertical

---

## 13. Sources & Method (from audit)
Competitor set assembled from Google Places data across ten market-level queries within the 60-mile radius
(Ithaca, Cortland, Elmira, Binghamton, Syracuse, Auburn, Corning, Geneva, Watkins Glen, Newark NY), supplemented
by direct site retrieval of nolanpestcontrol.com + sweeneyspest.com, and public directory records. Review counts/
ratings point-in-time as of July 2026 and will drift. Structural scores assessed against the Smart Site framework,
not a third-party index. Page-count estimates for competitors derived from published navigation/location indexes,
not crawl data. **Nolan's schema status requires raw-source verification** — no JSON-LD detected in rendered output,
but rendered extraction can miss it. NY regulatory references cited as content architecture; verify against current
statute before publication.

### Open decisions carried into the build
1. **Wayne County gate (§8.1)** — Option A assumed (Ithaca hub). Confirm truck/address location with client.
2. **Physical address** — required for NAP/schema. Must be supplied by client.
3. **NYSDEC registration # + applicator cert #** — supplied by client; placeholders until then.
4. **Owner/expert name + bio + photo** — required for E-E-A-T Person node.
5. **Field software** (GorillaDesk?) — determines review-engine automation path.
6. **NY statute text/county participation** — verify with counsel/DEC before publishing compliance pages.
