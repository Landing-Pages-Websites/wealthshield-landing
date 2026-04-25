// WealthShield Partnership LP — source of truth for all page content.
// Atlas task: 4d6d40bf-b834-47b7-bfa4-8452ec1a2491
// Customer: WealthShield Partnership (e3bc7ed4-c985-4878-ab92-a511892808b6)
// NEVER change fields/copy without re-reading the task spec first.

export type ServicePillar = {
  slug: string;
  anchorId: string;
  label: string;
  heading: string;
  body: string; // 80-150 words per Anthony 2026-04-21
  image: string;
  outcomes: string[]; // 3 quick outcome chips
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
  fullName: "WealthShield Partnership · Greater Washington Retirement Income Solutions",
  tagline:
    "A turnkey financial-planning partnership, built for CPA firms.",
  heroHook:
    "Your high-tax clients are already paying someone for financial planning. Make sure it's your firm.",
  positioning:
    "The WealthShield Executive Partnership Program lets CPA firms deliver full-service retirement, tax, and wealth-planning to their existing high-income clients — without hiring, retraining, or disrupting tax season. We handle licensing, delivery, and compliance. Your firm keeps the relationship and earns a new, recurring revenue line.",
  shortPositioning:
    "Turnkey financial-planning delivered under your brand. You keep the client; we handle the work.",
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
  ctaSubLabel: "30-min executive briefing · No obligation",
} as const;

export const STATS: { value: string; label: string }[] = [
  { value: "$40–50k", label: "Planning revenue per qualified tax case*" },
  { value: "31 yrs", label: "Greater Washington Retirement Income Solutions in-market" },
  { value: "129+ yrs", label: "Combined experience across our planning team" },
  { value: "5-phase", label: "System: Identify → Qualify → Onboard → Execute → Scale" },
];

export const PAIN_POINTS: {
  title: string;
  body: string;
}[] = [
  {
    title: "Wealth-management dollars leaving your firm",
    body:
      "Most CPA firms have clients who already need retirement, tax-efficient wealth, and risk-management advice. Those dollars are usually leaving — to outside advisors, insurance brokers, and wirehouses. Every one of those conversations you don't own is revenue and client equity walking out the door.",
  },
  {
    title: "No bandwidth to build a planning arm in-house",
    body:
      "Hiring a CFP® team, getting your partners licensed, building compliance, running new client workflows — it's a two-to-three-year distraction from the work that already pays your bills. Most firms never get past the first 90 days of planning the move.",
  },
  {
    title: "A succession problem hiding in plain sight",
    body:
      "75% of CPAs are at or near retirement. Firm valuations hinge on recurring advisory revenue, not one-time tax filings. Without a planning line, partners exit at a discount — and the next generation walks into a firm that looks exactly like yesterday's.",
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
      "Your pre-retiree clients (typically 50–65, $1M+ in taxable income) need a real retirement income strategy — not a 401(k) rollover quote. Our planners, led by Michael Epps (ChFC®, RICP®) and Kalif Gallego (RICP®), build full retirement-readiness plans: withdrawal sequencing, Social Security optimization, Roth conversion ladders, pension elections, and long-term wealth preservation. Every plan is co-branded with your firm, delivered through your client relationship, and designed to turn a one-off tax filing into a decade-long advisory mandate.",
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
      "Your clients already trust you with compliance. We layer on the planning side — the strategies that move the needle when $1M+ of income is in play. Led by Shona Bell, CPA and Jay Moore, CPA, our tax-strategy team builds entity restructurings, retirement-plan design (Cash Balance, Defined Benefit, Solo 401(k)), Qualified Opportunity Zone placements, charitable structures, and owner-compensation optimization. Everything runs through your firm. Your partners stay in control of the relationship; we deliver the specialist work behind the scenes.",
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
      "For business-owner clients, life insurance is rarely about a death benefit — it's about buy-sell funding, key-person protection, tax-advantaged cash accumulation, and estate-liquidity planning. We design and implement insurance-integrated strategies — structured, illustrated, and delivered through your firm under OneAmerica Securities. No pressure products, no commission-driven pitches. Your clients get strategy first; the policy is the instrument, not the goal.",
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
    body: "$2M–$10M revenue, 15–50 professionals, 3–8 equity partners, 200–1,000 active business clients. Sweet spot is $3M–$7M firms in the Greater Washington DC / Maryland / Virginia market.",
  },
  {
    title: "A client base of high-income earners",
    body: "Clients with $1M+ taxable income, business owners with complex returns, pre-retirees 50–65 seeking comprehensive solutions. If your clients routinely pay $50k–$150k+ in annual tax, you're in the fairway.",
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
      "We map your client book against partnership-fit criteria — client count, income profile, service gaps. Outcome: a shortlist of clients for whom this would be clearly additive, no guesswork.",
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
      "Partnership terms, role mapping, licensing path for your partners, co-branded materials, client-intake workflows, KPI dashboard. Typically 30–60 days, structured so tax season is never disrupted.",
  },
  {
    step: 4,
    title: "EXECUTE",
    body:
      "Co-selling and delivery. Your firm makes the warm introduction. Our planners run the engagements — retirement, tax strategy, protection, estate. Everything is co-branded. The client experience is seamless.",
  },
  {
    step: 5,
    title: "SCALE",
    body:
      "Quarterly KPI reviews, revenue share reconciliation, client-cohort expansion, and continuous improvement. Firms in the program typically see a recurring-revenue line worth 20–30% of firm value within 24 months.",
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
    creds: "30+ years · Greater Washington Retirement Income Solutions",
    body:
      "Previously MassMutual Agency Senior Partner; runs the partnership program end-to-end and is your direct contact through qualification.",
    image: "/images/team-doug-vincent.jpg",
  },
  {
    name: "Michael Epps",
    title: "Managing Partner, Planning",
    creds: "ChFC® · RICP® · 25+ years",
    body:
      "Retirement income planning, estate preservation, tax efficiency. Rochester Institute of Technology. Leads complex pre-retiree engagements.",
    image: "/images/team-michael-epps.jpg",
  },
  {
    name: "Kalif Gallego",
    title: "Managing Partner, Planning",
    creds: "RICP® · 17+ years",
    body:
      "Retirement readiness, tax reduction strategies, estate coordination for business owners. Fintech-fluent and client-experience obsessed.",
    image: "/images/team-kalif-gallego.jpg",
  },
  {
    name: "Shona Bell",
    title: "Founder, Tax Strategy",
    creds: "CPA · 20+ years",
    body:
      "Strategic growth-focused tax planning for business owners. Founder of Beyond Accounting & Tax; specialist in advanced entity and comp design.",
    image: "/images/team-shona-bell.jpg",
  },
  {
    name: "Jay Moore",
    title: "Co-Founder, Tax Strategy",
    creds: "CPA",
    body:
      "High-income planning, advanced deduction strategies, and retirement plan design (Cash Balance, Defined Benefit). Pairs with your firm on complex work.",
    image: "/images/team-jay-moore.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Managing Partner",
    org: "Mid-sized CPA firm · DC Metro",
    quote:
      "We'd looked at building a wealth arm three times in ten years. Every time, the math — hiring, licensing, compliance, training — killed it. WealthShield is the only model where we keep the client, skip the build-out, and actually see planning revenue in year one.",
  },
  {
    name: "Senior Partner",
    org: "Full-service accounting firm",
    quote:
      "The part that surprised us wasn't the revenue. It was how much closer we got to our best clients. Once their retirement and estate work lives with us, we're no longer the tax guy — we're the firm.",
  },
  {
    name: "Firm Leadership",
    org: "CPA practice preparing for succession",
    quote:
      "Our valuation work made it obvious: one-time tax revenue doesn't build equity, recurring advisory does. WealthShield handed us the advisory line without asking us to become a different firm.",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "Do my partners need to get licensed?",
    answer:
      "Partners who want to personally deliver planning work will go through a defined licensing path (typically Series 6 or 7 plus state insurance licenses) during onboarding. Most firms prefer to stay as the trusted advisor while our licensed team delivers the actual planning work under a referral and revenue-share model. Both structures are supported and fully compliant.",
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
      "You do. Every engagement is co-branded. Your firm is the point of trust; we're the planning engine behind you. Client communications reference your firm first. Contracts, custody, and statements flow through the proper regulated channels (OneAmerica Securities, FINRA/SIPC) but the relationship stays with your practice.",
  },
  {
    question: "What does compliance look like?",
    answer:
      "All securities are offered through OneAmerica Securities, Inc. (Member FINRA, SIPC), a registered broker-dealer and investment advisor. We operate inside the same compliance framework federally regulated financial services firms use, with documented supervision, books and records, and a designated compliance contact for each partner firm.",
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

export const EXPLORE_OPTIONS = [
  { value: "definitely-yes", label: "Definitely yes", qualifies: true },
  { value: "maybe", label: "Maybe", qualifies: true },
  { value: "probably-not", label: "Probably not", qualifies: false },
  { value: "definitely-not", label: "Definitely not", qualifies: false },
] as const;

export type ExploreValue = (typeof EXPLORE_OPTIONS)[number]["value"];
export type ClientCountValue = (typeof CLIENT_COUNT_OPTIONS)[number];

export function qualifies(explore: ExploreValue, clientCount: ClientCountValue | ""): boolean {
  const exploreOk =
    EXPLORE_OPTIONS.find((o) => o.value === explore)?.qualifies ?? false;
  // Disqualify only if they explicitly said no. Any client-count value that's picked is fine;
  // even 0-10 can qualify if they're growing. Firm is broader than narrow here.
  return exploreOk && clientCount !== "";
}
