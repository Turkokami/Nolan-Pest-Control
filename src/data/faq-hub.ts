/**
 * faq-hub.ts — curated, site-wide FAQ set for the /faq hub (audit Phase 5).
 * Grouped for humans; flattened for a single FAQPage node (AEO/rich-result eligible).
 * Kept honest and Central-NY-specific. Pricing answers are general guidance, not a quote.
 */

export interface FaqGroup {
  title: string;
  intro: string;
  faqs: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Getting started",
    intro: "How service works, from the first call to the first treatment.",
    faqs: [
      {
        q: "How do I get a quote?",
        a: "Call (607) 269-6218 or use the free-estimate form on our site. We'll ask a few questions about the pest, your property, and what you're seeing, then give you honest pricing — usually on the spot for common jobs, or after a quick inspection for larger or wildlife work.",
      },
      {
        q: "Do you charge for an estimate?",
        a: "No. Estimates are free. For most residential pest problems we can quote right over the phone; for exclusion, wildlife, or commercial work we may schedule a short inspection first so the price we give you is the price you pay.",
      },
      {
        q: "What areas do you serve?",
        a: "We're based in Ithaca and serve Tompkins, Schuyler, Chemung, Cortland, and Tioga counties — the towns, villages, and rural roads across Central New York within about 60 miles of Ithaca. If you're near the edge of that, just ask.",
      },
      {
        q: "How soon can you come out?",
        a: "For most common pests we schedule within a few business days, and we prioritize urgent problems like stinging-insect nests near doorways. We're a local family business, so when you call, you reach the people who actually do the work — not a national call center.",
      },
    ],
  },
  {
    title: "Pricing & plans",
    intro: "What drives cost, and how our plans are structured.",
    faqs: [
      {
        q: "How much does pest control cost?",
        a: "It depends on the pest, the size and construction of your property, how established the infestation is, and whether you choose a one-time treatment or ongoing protection. Recurring plans cost less per visit than one-off calls. We give honest, itemized pricing before any work begins — see our Ithaca pest control cost guide for how it breaks down, and call for a free quote.",
      },
      {
        q: "Is a recurring plan or a one-time treatment better?",
        a: "A one-time treatment makes sense for a specific, contained problem. A recurring quarterly plan is better value if you want to prevent seasonal invaders — ants and carpenter ants in spring, wasps in summer, mice and overwintering pests in fall — because it costs less per visit and keeps problems from coming back. We'll tell you honestly which fits your situation.",
      },
      {
        q: "Are there any hidden fees or long-term traps?",
        a: "No. We quote the job before we do it, and we don't lock you into contracts with surprise cancellation penalties. If our pricing changes for added scope, you hear about it first.",
      },
      {
        q: "Do you offer payment plans for larger jobs?",
        a: "For bigger exclusion, wildlife, or whole-home jobs we can talk through options so the cost is manageable — see our financing page. We'd rather help you protect your home than have cost stop you from fixing a real problem.",
      },
    ],
  },
  {
    title: "Safety",
    intro: "Kids, pets, and the products we use.",
    faqs: [
      {
        q: "Are your treatments safe for my family and pets?",
        a: "Yes, when applied correctly. We use EPA-registered products and apply them following the label — the label is the law — with placement and timing designed to keep people and pets away from wet product. We'll tell you exactly what to do (for example, staying off a treated area until it's dry) so treatment is both effective and safe.",
      },
      {
        q: "Do I need to leave my home during treatment?",
        a: "For most routine exterior and targeted interior treatments, no. Some jobs — like a full bed bug treatment — have specific prep and re-entry instructions we'll give you in advance. We never leave you guessing.",
      },
      {
        q: "Do you offer pet-safe or low-impact options?",
        a: "We practice integrated pest management (IPM): we start with inspection, exclusion, and targeted treatment rather than blanket spraying, which reduces product use. If you have specific sensitivities, pollinator concerns, or pets, tell us and we'll tailor the approach.",
      },
    ],
  },
  {
    title: "Guarantee & results",
    intro: "What happens if pests come back.",
    faqs: [
      {
        q: "Do you guarantee your work?",
        a: "Yes. If a pest covered by your service plan returns during your active service period, we re-treat the affected area at no additional charge. Exclusion and sealing work carries a defined multi-year workmanship guarantee on the areas we seal. See our guarantee page for the specifics — no vague 'lifetime' promises.",
      },
      {
        q: "What if the pests come back after treatment?",
        a: "Call us. If you're on a covered plan and a covered pest returns during the service period, we come back and re-treat at no extra charge. Pest control is often a process, not a single event, and we stand behind ours.",
      },
      {
        q: "How many visits will it take?",
        a: "Simple problems are often resolved in one or two visits; established infestations like German cockroaches or bed bugs typically need a planned series of treatments with follow-ups. We'll set clear expectations up front rather than overpromising.",
      },
    ],
  },
  {
    title: "Common pests in Central NY",
    intro: "The problems we see most across the region.",
    faqs: [
      {
        q: "What pests are most common in the Ithaca area?",
        a: "Carpenter ants, mice, cluster flies and overwintering pests (stink bugs, Asian lady beetles, boxelder bugs), wasps and hornets, spiders, and — increasingly — bed bugs. Our older housing stock, wooded lots, and cold winters that drive pests indoors all shape what we treat.",
      },
      {
        q: "Do you handle wildlife like bats, squirrels, and raccoons?",
        a: "Yes. We remove nuisance wildlife and seal them out. For bats, we follow New York's DEC restriction on exclusion during the maternity/pup season (roughly May 1–August 31), doing it humanely and legally so they can't get back in.",
      },
      {
        q: "Can you handle bed bugs?",
        a: "Yes. We inspect, treat, and do the required follow-up, and in multi-unit buildings we coordinate connected units so the infestation can't just shift next door and return. Discreet scheduling is part of the service.",
      },
      {
        q: "Do you treat for mosquitoes and ticks?",
        a: "Yes — seasonal yard programs that reduce mosquito and tick pressure around your home, which matters in our area given tick-borne illness. We time treatments to the season and target the shaded, humid harborage where they breed.",
      },
    ],
  },
  {
    title: "Commercial & rentals",
    intro: "Landlords, restaurants, and other businesses.",
    faqs: [
      {
        q: "Do you work with landlords and rental properties?",
        a: "Yes, and it's a big part of what we do. In New York, landlords generally carry responsibility for infestations under the Warranty of Habitability (Real Property Law §235-b). We provide documented, coordinated, multi-unit treatment that resolves the problem and gives owners the paper trail habitability situations require. See our landlord page. (General information, not legal advice.)",
      },
      {
        q: "Do you provide documentation for inspections and compliance?",
        a: "Yes. Commercial and rental work comes with dated service records suitable for health inspectors, property managers, or your files. Food-service programs are built around NYS Sanitary Code Part 14; see our commercial pages for the framework that fits your business.",
      },
      {
        q: "Are you licensed and registered in New York?",
        a: "We operate as a NYSDEC-registered pest control business with certified applicators, fully insured. We publish our registration and certification details as they're finalized — and we think you should always ask any provider to show theirs.",
      },
    ],
  },
];

/** Flattened list for the FAQPage schema node. */
export const allFaqs = faqGroups.flatMap((g) => g.faqs);
