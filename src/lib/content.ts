// WealthShield Partnership LP — source of truth for all page content.
// Atlas task: 05852365-7ed7-4ccc-80e0-0370d6810f14 (full rebrand 2026-05-18)
// (prior refresh: abeadf6b-d742-4cac-883d-f11a8efce8ca, 2026-05-15)
// Customer: WealthShield Partnership (e3bc7ed4-c985-4878-ab92-a511892808b6)
//
// BRAND-SCRUB DOCTRINE (per Lindsay 2026-05-15, reinforced Peter 2026-05-18):
//   - Page is for W. Doug Vincent / Greater Washington Retirement Income Solutions
//   - ZERO references to Greater Washington Financial Services, greaterwfs.com,
//     or any associated phone numbers or email addresses.
//   - Pitch repositioned: CPAs become licensed referral partners and earn
//     $40k–$50k per qualifying tax case. WealthShield handles planning, licensing
//     onboarding, compliance, and delivery.
//   - 31 years in financial services + real case-study figures called out.
//
// REBRAND NOTES (2026-05-18):
//   - Assets pulled from NEW Drive folder 1GQFy7DyyEWKz0DpnjoT_FheS0XQVGF5G.
//   - Logo: navy crown emblem (no gold). Direction shifted from warm-paper +
//     gold editorial (May-15 build, commit 0db9765) to cool slate-blue + navy
//     institutional. Headshots replaced with new pack.

export type ServicePillar = {
  slug: string;
  anchorId: string;
  label: string;
  heading: string;
  body: string;
  image: string;
  outcomes: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  org: string;
  quote: string;
};

export const BRAND = {
  name: "WealthShield Partnership",
  fullName: "WealthShield Partnership",
  operatingEntity: "Greater Washington Retirement Income Solutions",
  tagline:
    "Earn $40,000–$50,000 per qualifying tax case as a licensed referral partner.",
  heroHook:
    "Add a recurring planning revenue line to your CPA firm without hiring planners — refer your high-tax clients into the Executive Partnership Program and book $40k–$50k per qualifying case.",
  positioning:
    "The Executive Partnership Program — by Greater Washington Retirement Income Solutions — turns the CPAs you already employ into licensed referral partners. You get licensed; our planning team runs the engagement. Every qualifying client your firm refers through the system pays your firm $40,000–$50,000 per tax case — without hiring planners, building a wealth arm, or disrupting tax season.",
  shortPositioning:
    "Get licensed. Refer your high-tax clients. Earn $40k–$50k per case. We handle everything else.",
  phone: "301-704-0133",
  phoneDisplay: "(301) 704-0133",
  phoneHref: "tel:+13017040133",
  email: "info@greaterris.com",
  address: {
    street: "6411 Ivy Lane, Suite 602",
    city: "Greenbelt",
    state: "MD",
    zip: "20770",
  },
  calendlyUrl: "https://calendly.com/wdvince/new-meeting",
  primaryCtaLabel: "Schedule a Strategy Call",
  primaryCtaShort: "Schedule My Call",
  ctaSubLabel: "30-min briefing with W. Doug Vincent · No obligation",
} as const;

export const STATS: { value: string; label: string }[] = [
  { value: "$40k–$50k", label: "Revenue per qualifying tax case" },
  { value: "31 yrs", label: "In financial services, led by W. Doug Vincent" },
  { value: "$26k–$312k", label: "Documented annual tax savings per client*" },
  { value: "5-phase", label: "Turnkey system: Identify → Qualify → Onboard → Execute → Scale" },
];

export const PAIN_POINTS: {
  title: string;
  body: string;
}[] = [
  {
    title: "Wealth-management dollars leaving your firm",
    body:
      "Most CPA firms have clients who need retirement income, tax-efficient wealth, and risk-management advice. Those dollars are usually leaving — to outside advisors, insurance brokers, and wirehouses. Every one of those conversations you don't own is $40,000–$50,000 in planning revenue walking out the door.",
  },
  {
    title: "No bandwidth to build a planning arm in-house",
    body:
      "Hiring a CFP team, getting your partners licensed, standing up compliance, running new client workflows — it's a two-to-three-year distraction from the work that already pays your bills. Most firms never get past the first 90 days. The Executive Partnership Program collapses that entire build into a single licensing step.",
  },
  {
    title: "A succession problem hiding in plain sight",
    body:
      "75% of CPAs are at or near retirement. Firm valuations hinge on recurring advisory revenue, not one-time tax filings. Without a planning line, partners exit at a discount — and the next generation walks into a firm that looks exactly like yesterday's.",
  },
];

// Real client case-results pulled from documented partner data
// (raw_research/20250417-100600-team_credentials_research.md)
export const CASE_RESULTS: {
  client: string;
  result: string;
  body: string;
}[] = [
  {
    client: "Multi-state business owner",
    result: "$312,000 annual tax savings",
    body:
      "Owner of a 3-entity operating group with $4.8M in taxable income. Restructured compensation, layered a defined-benefit + cash-balance pairing, and shifted retained-earnings allocations. Result: $312,000 in documented annual tax savings, recurring planning revenue to the partnering CPA firm.",
  },
  {
    client: "Pre-retiree professional couple",
    result: "$98,000 annual tax savings",
    body:
      "Dual-income couple, age 58/61, $1.6M taxable income, equity-comp heavy. Built a Roth conversion ladder, charitable-trust structure, and withdrawal-sequencing plan. Result: $98,000 annual tax savings plus a retirement readiness plan their CPA delivers under co-brand.",
  },
  {
    client: "Established medical practice",
    result: "$26,000 annual tax savings",
    body:
      "Single-shareholder S-corp practice, $850k taxable income. Reset reasonable compensation, added a Solo 401(k) with after-tax contributions, and re-titled investment property. Result: $26,000 annual tax savings and a deepened relationship between the CPA and a flagship client.",
  },
];

// Per-offering sections (Google Quality Score — each service gets its own anchor + section)
export const SERVICES: ServicePillar[] = [
  {
    slug: "retirement-planning",
    anchorId: "retirement-planning",
    label: "Retirement Planning",
    heading: "Retirement & Income Planning",
    body:
      "Your pre-retiree clients (typically 50–65, $1M+ taxable income) need a real retirement income strategy — not a 401(k) rollover quote. Our planning team builds full retirement-readiness plans: withdrawal sequencing, Social Security optimization, Roth conversion ladders, pension elections, and long-term wealth preservation. Every plan is co-branded with your firm and delivered through the relationship your firm already owns. You stay the trusted advisor; we run the file behind you.",
    image: "/images/service-1.png",
    outcomes: [
      "Full retirement income plans per client",
      "Roth conversion + withdrawal sequencing",
      "Co-branded with your firm",
    ],
  },
  {
    slug: "tax-strategy",
    anchorId: "tax-strategy",
    label: "Tax Strategy",
    heading: "Advanced Tax Strategy & Planning",
    body:
      "Your clients already trust you with compliance. We layer on the planning side — the strategies that move the needle when $1M+ of income is in play. Our tax-strategy team builds entity restructurings, retirement-plan design (cash balance, defined benefit, Solo 401(k)), Qualified Opportunity Zone placements, charitable structures, and owner-compensation optimization. Documented results in our partner book run from $26,000 to $312,000 in annual tax savings per client. Everything runs through your firm under co-brand.",
    image: "/images/service-2.png",
    outcomes: [
      "Entity + comp restructuring",
      "Cash Balance / DB plan design",
      "QOZ, charitable, and estate structures",
    ],
  },
  {
    slug: "life-protection",
    anchorId: "life-protection",
    label: "Life & Protection",
    heading: "Life Insurance & Protection Strategies",
    body:
      "For business-owner clients, life insurance is rarely about a death benefit — it's about buy-sell funding, key-person protection, tax-advantaged cash accumulation, and estate-liquidity planning. We design and implement insurance-integrated strategies, structured and illustrated, delivered through your firm by our team. No pressure products, no commission-driven pitches. Your clients get strategy first; the policy is the instrument, not the goal.",
    image: "/images/service-3.png",
    outcomes: [
      "Buy-sell + key-person funding",
      "Tax-advantaged cash accumulation",
      "Estate-liquidity design",
    ],
  },
  {
    slug: "estate-wealth",
    anchorId: "estate-wealth",
    label: "Estate & Wealth",
    heading: "Estate & Generational Wealth Planning",
    body:
      "For the clients who moved from high-income to high-net-worth, the next question is preservation and transfer. We coordinate with your firm and the client's attorney to design generational wealth structures — irrevocable trusts, SLATs, grantor-trust strategies, charitable lead and remainder trusts, gifting ladders, and asset-titling reviews. Everything is modeled against the client's full tax picture (because your firm sees it) and executed without handing the relationship off to an outside wealth shop.",
    image: "/images/service-4.png",
    outcomes: [
      "Trust + gifting strategy",
      "Coordinated with the client's attorney",
      "Client stays with your firm",
    ],
  },
];

// "Who it's for" ICP data
export const ICP_POINTS: { title: string; body: string }[] = [
  {
    title: "CPA and financial-services firms",
    body: "$2M–$10M revenue, 15–50 professionals, 3–8 equity partners, 200–1,000 active business clients. The program is built for firms ready to deepen client relationships and stand up a recurring planning revenue line without hiring planners.",
  },
  {
    title: "A client base of high-income earners",
    body: "Clients with $1M+ taxable income, business owners with complex returns, pre-retirees 50–65 seeking comprehensive solutions. If your clients routinely pay $50k–$150k+ in annual tax, you're in the fairway — and each qualifying case is worth $40,000–$50,000 in planning revenue.",
  },
  {
    title: "Managing partners thinking about the next decade",
    body: "Firms preparing for succession, needing to enhance valuation 20–30% via recurring revenue, or losing clients to full-service competitors. If you've thought about adding planning but don't want to hire a team to do it, this is the program.",
  },
];

// 5-phase process
export const PROCESS_STEPS: { step: number; title: string; body: string }[] = [
  {
    step: 1,
    title: "IDENTIFY",
    body:
      "We map your client book against partnership-fit criteria — client count, income profile, service gaps. Outcome: a shortlist of clients for whom planning would be clearly additive, no guesswork.",
  },
  {
    step: 2,
    title: "QUALIFY",
    body:
      "A structured due-diligence conversation — mutual. You evaluate our process, team, and compliance posture. We evaluate fit, timing, and shared values. Most conversations end here if it isn't the right fit. That's the point.",
  },
  {
    step: 3,
    title: "ONBOARD",
    body:
      "Partnership terms, role mapping, the licensing path for your partners (we walk you through it), co-branded materials, client-intake workflows, KPI dashboard. Typically 30–60 days, structured so tax season is never disrupted.",
  },
  {
    step: 4,
    title: "EXECUTE",
    body:
      "Co-selling and delivery. Your firm makes the warm introduction. Our planners run the engagement — retirement, tax strategy, protection, estate. Every qualifying case pays the firm $40,000–$50,000 in planning revenue. The client experience is seamless.",
  },
  {
    step: 5,
    title: "SCALE",
    body:
      "Quarterly KPI reviews, revenue-share reconciliation, client-cohort expansion, and continuous improvement. Firms in the program typically see a recurring planning line worth 20–30% of firm value within 24 months.",
  },
];

export const TEAM: {
  name: string;
  title: string;
  creds: string;
  body: string;
  image: string;
}[] = [
  {
    name: "W. Doug Vincent",
    title: "President & CEO",
    creds: "Greater Washington Retirement Income Solutions",
    body: "31 years guiding pre-retirees, business owners, and high-income professionals toward long-term wealth preservation and impact. Architect of the Executive Partnership Program.",
    image: "/images/team-doug-vincent.jpg",
  },
  {
    name: "Michael Epps",
    title: "Managing Partner, M.A. Epps & Associates",
    creds: "",
    body: "Expert in retirement income, estate preservation, and tax efficiency with 25 years in finance and executive leadership.",
    image: "/images/team-michael-epps.jpg",
  },
  {
    name: "Kalif Gallego",
    title: "Managing Partner, KG Financial",
    creds: "",
    body: "Specialist in tax reduction, retirement readiness, and estate coordination for business owners and high earners.",
    image: "/images/team-kalif-gallego.jpg",
  },
  {
    name: "La-Deidra Blake",
    title: "Operations Specialist",
    creds: "",
    body: "Ensures partnership engagements are executed with precision — supporting team operations and the partner-firm client experience from intake through delivery.",
    image: "/images/team-la-deidra-blake.jpg",
  },
  {
    name: "Shona Bell, CPA",
    title: "Founder, Beyond Freedom Financial",
    creds: "",
    body: "Empowers small business owners with strategic, growth-focused tax planning built on 20+ years in corporate accounting.",
    image: "/images/team-shona-bell.jpg",
  },
  {
    name: "Jay Moore, CPA",
    title: "Co-Founder, Beyond Freedom Financial",
    creds: "",
    body: "Helps clients align financial freedom with purpose, fulfillment, and long-term stability — with 29+ years in accounting and tax strategy.",
    image: "/images/team-jay-moore.jpg",
  },
];

// TESTIMONIALS removed 2026-05-15 by QA rework: composite/illustrative quotes
// are not authorized for live use until the client provides real attributed
// testimonials. Live wealthshieldpartnership.com displays NO client
// testimonials (KB 05_brand_authority.md). Social proof on this LP comes from
// #case-results (documented partner-book outcomes) and #team (real credentials).
// Type kept exported for future use; the array is intentionally empty.
export const TESTIMONIALS: Testimonial[] = [];

export const FAQS: FAQ[] = [
  {
    question: "What's actually required from our partners — do they have to get licensed?",
    answer:
      "Yes. Partners who want to personally share in planning revenue go through a defined licensing path (typically Series 6 or 7 plus state insurance licenses) during onboarding. We walk you through every step. Most firms structure it so one or two partners get licensed and become the named referral partner for the firm; everyone else continues to do compliance work. Both structures are supported and fully compliant.",
  },
  {
    question: "How does the $40,000–$50,000 per case actually work?",
    answer:
      "A qualifying tax case is typically a high-income client (~$1M+ taxable income, business-owner or pre-retiree profile) where the planning engagement covers retirement income, tax strategy, insurance, and/or estate work. Across a typical engagement, planning, advisory, and product revenue lands in the $40,000–$50,000 range, shared with your firm via a structured revenue-share agreement defined during onboarding.",
  },
  {
    question: "How is the economics structured?",
    answer:
      "Every partnership is custom, based on your firm's client mix and preferred role in the engagement. Typical structures involve a revenue share on planning, insurance, and advisory revenue generated from your client base. We walk through specifics during the strategy call; there's no standard price sheet because every firm is different.",
  },
  {
    question: "Will this disrupt tax season?",
    answer:
      "No. Onboarding is structured to finish before January 1 or start in mid-April. Our planning team handles scheduling and intake. Your partners are never pulled into a client meeting during tax season because of a WealthShield engagement.",
  },
  {
    question: "Who owns the client relationship?",
    answer:
      "You do. Every engagement is co-branded. Your firm is the point of trust; we're the planning engine behind you. Client communications reference your firm first. Contracts, custody, and statements flow through the proper regulated channels, but the relationship stays with your practice.",
  },
  {
    question: "What does compliance look like?",
    answer:
      "We operate within a fully regulated financial-services compliance framework, with documented supervision, books and records, and a designated compliance contact for each partner firm.",
  },
  {
    question: "How long before we see revenue?",
    answer:
      "Most firms have their first qualified client engagement inside 60–90 days of signing. Year-one revenue depends on your client mix; firms with 50+ high-income clients typically see six-figure planning revenue in year one and a compounding recurring line starting in year two.",
  },
];

// Form options — EXACT per task spec. Do NOT reword.
export const CLIENT_COUNT_OPTIONS = [
  "0–10 clients",
  "11–25 clients",
  "26–50 clients",
  "50+ clients",
] as const;

export const FREQUENCY_OPTIONS = [
  { value: "rarely", label: "Rarely" },
  { value: "occasionally", label: "Occasionally" },
  { value: "frequently", label: "Frequently" },
  { value: "very-frequently", label: "Very frequently" },
] as const;

export const CURRENT_HANDLING_OPTIONS = [
  { value: "refer-out", label: "We refer them to another advisor" },
  { value: "basic-in-house", label: "We provide basic advice in-house" },
  { value: "comprehensive-in-house", label: "We provide comprehensive planning" },
  { value: "rarely-asked", label: "Clients don't typically ask" },
] as const;

export const EXPLORE_OPTIONS = [
  { value: "definitely-yes", label: "Definitely yes", qualifies: true },
  { value: "maybe", label: "Maybe", qualifies: true },
  { value: "probably-not", label: "Probably not", qualifies: false },
  { value: "definitely-not", label: "Definitely not", qualifies: false },
] as const;

export type FrequencyValue = (typeof FREQUENCY_OPTIONS)[number]["value"];
export type CurrentHandlingValue = (typeof CURRENT_HANDLING_OPTIONS)[number]["value"];
export type ExploreValue = (typeof EXPLORE_OPTIONS)[number]["value"];
export type ClientCountValue = (typeof CLIENT_COUNT_OPTIONS)[number];

export function qualifies(explore: ExploreValue, clientCount: ClientCountValue | ""): boolean {
  const exploreOk =
    EXPLORE_OPTIONS.find((o) => o.value === explore)?.qualifies ?? false;
  // Disqualify only if they explicitly said no. Any client-count value picked is fine.
  return exploreOk && clientCount !== "";
}
