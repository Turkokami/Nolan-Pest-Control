# Phase 0 — Foundation & Trust Checklist

> Audit §10 / §8. *"Nothing else starts until these are done. Most cost nothing but a decision."*
> Two tracks: **CODE** (done in this repo) and **OPERATIONAL** (client actions, off-site).
> The build cannot reach its ceiling until the operational items run in parallel from Week 1.

## Track A — CODE (in this repo) ✅ built in this Phase 0 scaffold

- [x] Fresh Next.js (App Router) + TypeScript + Tailwind repo, Vercel-ready.
- [x] Locked NAP in one place (`src/data/business.ts`) + single formatter (`src/lib/nap.ts`).
- [x] **Defect #2 fixed at the source:** Binghamton removed; Elmira correctly under Chemung; Wayne County deferred (`src/data/geo.ts`).
- [x] **Defect #1 fixed:** three fabricated testimonials gone → compliant "Be Our First Review" module. No Review/AggregateRating schema anywhere.
- [x] Ithaca-anchored homepage hub; working quote form + SMS consent **retained** (best conversion asset).
- [x] 8 existing service pages rebuilt on the new template (URLs preserved — no redirects) with AEO answer lead, FAQ + schema, defined-term guarantee.
- [x] Tier 0 trust pages: **Privacy, Terms, Accessibility, Contact, About, Our Guarantee.**
- [x] 7-node JSON-LD `@graph` (Organization + LocalBusiness/PestControlService + WebSite + WebPage + Service + FAQPage + BreadcrumbList); Person node auto-activates when owner name is set.
- [x] Corrected Service Areas page + sitemap.ts + robots.ts.
- [x] Defined-term warranty language (Defect #17) — never "lifetime," scoped with exclusions.

**Client inputs that unlock the remaining code (drop into `src/data/business.ts`):**
- [ ] Real physical address (Defect #3) → completes LocalBusiness `address` + NAP.
- [ ] NYSDEC pesticide business registration # + applicator cert # (Defect #9) → renders on About.
- [ ] Owner name, bio, photo → activates Person schema + Team content.
- [ ] Exact Facebook/Instagram/GBP URLs → schema `sameAs`.
- [ ] Confirmed guarantee term lengths → Our Guarantee page.

## Track B — OPERATIONAL (client actions — not a website task)

1. [ ] **Answer the Wayne County decision gate (§8.1).** Where is the truck/address actually based? Option A (Ithaca hub) is assumed and coded. Confirm or switch to Option B. **Blocks the final geo tree.**
2. [ ] **Publish a real physical address** and lock the NAP format; use it identically on the site, GBP, and every citation.
3. [ ] **Claim, verify & fully build the Google Business Profile** — primary category (Pest Control Service), services, service area, hours, real photos (truck/team/job-site), Q&A, description. *Nolan is not in the Places index today.*
4. [ ] **Migrate email** to info@nolanpestcontrol.com (retire nolanpest@outlook.com) — Defect #7.
5. [ ] **Publish the NYSDEC registration # + applicator certification** (Defect #9) — free credibility NY requires anyway.
6. [ ] **Resolve the hours/emergency contradiction** (Defect #8) — add an answering/emergency line or reword the emergency CTAs. Set `business.emergencyLine`/`hours` accordingly.
7. [ ] **Stand up the review-generation engine** — post-service SMS/email ask (GorillaDesk automation if that's the field software). **#1 highest-leverage action in the entire program** (§11). Target 50 reviews in 6 months, 150 in 18.
8. [ ] **Wire the quote form** delivery (Phase 1) — Resend/Formspree/CRM webhook (see `.env.example`).
9. [ ] **Start citations/directories** in parallel — BBB, Angi, Yelp, Nextdoor, Tompkins/Cortland chambers, NYSPMA, NPMA (§11). Consistent NAP everywhere.

## Legal note
Privacy/Terms/Accessibility and the guarantee page are provided as working starting points and
should be reviewed by counsel before launch. NY regulatory/compliance content (RPL §235-b, Sanitary
Code Part 14, Child Safe Playing Fields Act, Neighbor Notification Law) is content architecture, not
legal advice — verify current statute text and county participation with counsel/DEC before publishing
those pages in Phase 5.
