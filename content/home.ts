/**
 * Education homepage copy, from the build specification (§6, "Education homepage").
 * Temporary home for this content: it moves into Prismic in the next build step,
 * with the same shape, so the section components do not change.
 */
import type { FundingRoute } from "@/components/sections/FundingMatrix";
import type { PortfolioSite } from "@/components/sections/TrustPortfolio";
import type { Step } from "@/components/sections/ProcessSteps";
import type { Citation } from "@/components/sections/CitationCard";

export const assessmentCta = { label: "Discover Your Potential Savings", href: "/energy-assessment" };

export const home = {
  seo: {
    title: "Solar, storage and energy management for schools",
    description:
      "Explore solar, battery storage and intelligent energy management for your school or trust, with funding options that may avoid upfront capital investment.",
  },

  hero: {
    heading: "Transform Your School’s Energy Costs",
    body: "Explore solar, battery storage and intelligent energy management, with funding options that may allow your school to get started without upfront capital investment.",
    primary: assessmentCta,
    secondary: { label: "How It Works", href: "/how-it-works" },
    qualifier:
      "Funding availability depends on eligibility and provider terms. Your report identifies areas to explore. It is not a quote or a savings forecast.",
    photoBrief:
      "1960s–70s flat-roofed secondary school, low angle across the playground, soft overcast light. Roofline prominent. No identifiable pupils.",
  },

  intro: {
    lead: {
      heading: "Make more of your education budget",
      body: "Energy is a major operating cost. EEP helps schools and trusts explore ways to reduce their dependence on purchased electricity, understand the financial opportunity and plan projects around their buildings, budgets and priorities.",
    },
    support: {
      heading: "Smarter energy, managed from start to finish",
      body: "We combine education-sector knowledge with specialist energy and funding partners. From your first assessment to procurement, installation coordination and ongoing support, you have a clear point of contact and a practical route forward.",
    },
  },

  solutions: {
    eyebrow: "Solutions",
    heading: "Three connected solutions",
    intro:
      "Solar generation, battery storage and intelligent management work best when considered together, alongside the buildings, consumption patterns and funding arrangements that shape your project. The right combination depends on each site.",
    items: [
      {
        kicker: "Generate",
        title: "Solar PV",
        body: "Generate electricity at your site and potentially reduce the volume purchased from the grid. Suitability depends on roof condition, shading, orientation, available space and electrical infrastructure.",
        link: { label: "Explore solar PV", href: "/solutions/solar" },
      },
      {
        kicker: "Store",
        title: "Battery storage",
        body: "Store some electricity for use later and potentially manage peaks in demand. The business case depends on usage patterns, tariff structures, system design and operating strategy.",
        link: { label: "Explore battery storage", href: "/solutions/battery-storage" },
      },
      {
        kicker: "Understand",
        title: "Intelligent energy management",
        body: "Understand when, where and how electricity is used. Better information can support operational decisions, system optimisation and reporting.",
        link: { label: "Explore energy management", href: "/solutions/energy-management" },
      },
    ],
  },

  funding: {
    eyebrow: "Funding",
    heading: "Explore funding without upfront capital",
    body: "A power purchase agreement may allow a third party to fund, install and maintain solar equipment while the school purchases the electricity generated under agreed terms. Other financing and ownership routes may be suitable. We help you compare the options.",
    cta: { label: "Compare Funding Options", href: "/funding/compare" },
    routes: [
      {
        name: "Power purchase agreement",
        upfront: "Typically none for the installation",
        ownership: "Commonly the provider",
        maintenance: "Commonly the provider",
        review: "Review contracted price, indexation, term and land arrangements.",
      },
      {
        name: "Lease or finance",
        upfront: "Payments spread over an agreed term",
        ownership: "Depends on the contract",
        maintenance: "Depends on the contract",
        review: "Review interest, security, residual value and total repayment.",
      },
      {
        name: "Outright purchase",
        upfront: "Funded by the school or responsible body",
        ownership: "Usually the school or responsible body",
        maintenance: "The owner",
        review: "Review capital availability, maintenance, generation risk and lifecycle replacements.",
      },
    ] satisfies FundingRoute[],
    footnote:
      "A simplified summary. Terms vary by contract and provider, and no route suits every site. No upfront installation payment does not mean no ongoing cost.",
  },

  trusts: {
    eyebrow: "Academy trusts",
    heading: "A different approach for academy trusts",
    body: "For multi-academy trusts, the opportunity is not simply one roof at a time. Assess a portfolio, identify suitable sites, prioritise investment and plan delivery in phases.",
    points: [
      "See the whole portfolio",
      "Prioritise the right schools",
      "Plan funding and procurement",
      "Deliver in sensible phases",
    ],
    cta: { label: "Assess Your Trust’s Energy Potential", href: "/academy-trusts" },
    sites: [
      { name: "Primary academy A", phase: "Phase 1", status: "Roof survey", selected: true },
      { name: "Secondary academy B", phase: "Phase 1", status: "Consumption data", selected: true },
      { name: "Primary academy C", phase: "Phase 2", status: "Lease and ownership check", selected: true },
      { name: "Primary academy D", phase: "Not yet", status: "Roof due for replacement", selected: false },
      { name: "Special school E", phase: "Not yet", status: "Review after estate works", selected: false },
    ] satisfies PortfolioSite[],
  },

  process: {
    eyebrow: "How it works",
    heading: "One clear route from opportunity to delivery",
    intro:
      "Energy projects involve financial, technical and operational decisions. EEP brings those conversations together so education leaders can move forward with confidence.",
    cta: { label: "How It Works", href: "/how-it-works" },
    steps: [
      { title: "Understand", body: "Tell us about your organisation, buildings, energy priorities and current expenditure." },
      { title: "Assess", body: "Review the likely opportunity and identify what additional technical and commercial evidence is needed." },
      { title: "Explore funding", body: "Compare PPA, finance and purchase options in the context of your governance and procurement requirements." },
      { title: "Coordinate specialists", body: "EEP helps bring together suitable funding, technology and delivery partners, with clear responsibilities." },
      { title: "Plan and deliver", body: "Support a structured route through surveys, approvals, procurement, mobilisation and installation." },
      { title: "Stay supported", body: "Maintain a clear EEP relationship for questions, coordination and the agreed ongoing support model." },
    ] satisfies Step[],
  },

  expertise: {
    eyebrow: "About EEP",
    heading: "Education expertise at the centre",
    body: "Our team brings experience from education-sector advisory work and procurement. We understand why financial assurance, safeguarding, estate condition and clear accountability matter to school leaders.",
    link: { label: "About EEP", href: "/about" },
    citation: {
      publisher: "Department for Education · GOV.UK",
      title: "Funding for installing solar photovoltaic panels on schools and colleges",
      url: "https://www.gov.uk/government/publications/power-purchase-agreement-pilot/funding-for-installing-solar-photovoltaic-panels-on-schools-and-colleges",
      published: "16 July 2026",
      checked: "22 November 2026",
      appliesTo: "Schools and colleges in England",
      summary:
        "A pilot involving up to 150 schools and colleges in Yorkshire and Humber, the East Midlands and the South East. DfE selects eligible sites. It is not an open grant application.",
      disclaimer: "EEP is not a DfE programme administrator or a government-endorsed provider.",
    } satisfies Citation,
  },

  start: {
    eyebrow: "Energy Opportunity Assessment",
    heading: "Start with your school",
    body: "Find your school or trust, tell us a little about its energy needs and receive a personalised Energy Opportunity Report.",
    note: "Your report will identify areas to explore. It is not a binding quote or verified savings forecast.",
    cta: assessmentCta,
  },
};
