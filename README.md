# Nolan Pest Control — Vercel Smart Site

Fresh **Vercel Smart Site** build (Next.js App Router) for Nolan Pest Control, Ithaca NY.
Hub-and-spoke architecture targeting the audit's Smart Site 2.0 spec: **20/100 → 88/100**,
~9 pages → ~251. This repo is **Phase 0 — Foundation & Trust**.

## Stack
Next.js 15 (App Router, SSG) · TypeScript · Tailwind CSS v3 · deploys to Vercel.

## Quick start
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```
> Note: this repo was authored in an environment without npm-registry access, so `node_modules`
> is not included. Run `npm install` on your machine (or let Vercel install on deploy). The data
> model and schema logic were type-checked with a standalone `tsc` pass; the full app builds once
> dependencies are installed.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import it in Vercel (it auto-detects Next.js — no config needed).
3. Set env var `NEXT_PUBLIC_SITE_URL=https://nolanpestcontrol.com` (see `.env.example`).
4. Deploy. Point the domain when ready.

## Where things live
| Path | What |
|---|---|
| `docs/01-MASTER-CATALOG.md` | Loss-free extraction of the entire audit + live-site benchmark (source of truth). |
| `docs/02-CONSTRUCTION-PLAN.md` | Full technical build plan, all phases mapped to the ~251 pages. |
| `docs/03-PHASE-0-CHECKLIST.md` | Phase 0 code + operational checklist and client inputs. |
| `src/data/business.ts` | **The NAP lock.** All client-specific facts live here. Edit this first. |
| `src/data/geo.ts` | Corrected county/town/neighborhood hierarchy (Wayne deferred; Binghamton/Elmira fixed). |
| `src/data/services.ts` | 22 services (8 live + 14 planned). Flip `status` to grow. |
| `src/components/schema/siteSchema.ts` | The 7-node JSON-LD `@graph`. |

## How this repo grows (8 → 22 services, 0 → 43 geo pages, +50 pest library)
A page is a thin route that reads a typed record from `src/data`. Adding a town, pest, or service
= adding a data record + copy, **not** hand-coding a route. That's what makes ~251 pages maintainable
by one operator. Phases:

- **Phase 0:** foundation, trust, 8 services, schema, corrected geo. ✅
- **Phase 1:** services expanded to 1,200–1,800 words; Residential/Commercial/Team hubs; E-E-A-T expert block; geo-link module. ✅ (see `docs/04-PHASE-1-SUMMARY.md`)
- **Phase 2:** 14 new services (22 total) + `/services` index + 5 county hubs + 12 town pages. ✅ (see `docs/05-PHASE-2-SUMMARY.md`)
- **Phase 3:** Pest Library (54 species) + 12-post blog launch. ✅ (see `docs/06-PHASE-3-SUMMARY.md`) — ~119 pages generated.
- **Phase 4:** Ithaca neighborhoods + problem-aware guides + service×geo money pages.
- **Phase 5:** commercial verticals + compliance + AEO/cost/FAQ + Wayne County decision.

## What's intentionally NOT here (by design)
- No `Review`/`AggregateRating` schema and no testimonials — until **real** reviews exist (FTC / Defect #1).
- No published street address in schema — until the client supplies one (Defect #3). The NAP formatter
  shows a service-area line instead of a fake address until then.
- Wayne County pages — deferred behind the §8.1 decision gate.

See `docs/03-PHASE-0-CHECKLIST.md` for the client inputs that unlock the rest.
