/**
 * Supplier homepage copy, from the build specification (§6, "Supplier homepage",
 * "Supplier expertise" and "Supplier model"). Moves into Prismic in the next build step.
 */
export const partnerContactCta = { label: "Contact Us", href: "/partners/contact" };

export const partners = {
  seo: {
    title: "Partner with EEP",
    description:
      "Bring your energy technology, funding or delivery expertise to UK schools, trusts and colleges, with a coordinated route to projects.",
  },

  hero: {
    eyebrow: "For funding, technology and delivery partners",
    heading: "Your Gateway to the UK Education Energy Market",
    body: "Bring your energy technology, funding or delivery expertise to the education sector. EEP provides specialist market understanding, commercial relationships and a coordinated route to projects.",
    primary: partnerContactCta,
    secondary: { label: "See the Partnership Model", href: "/partners/partnership-model" },
  },

  model: {
    customer: "Schools, trusts and colleges",
    eep: "Coordinates the education relationship",
    partners: [
      { name: "Funding", role: "Capital, PPAs and finance" },
      { name: "Technology", role: "Solar, storage and monitoring" },
      { name: "Delivery", role: "Survey, install and maintain" },
    ],
    note: "Partners remain accountable for their agreed funding, technical, installation and service obligations.",
  },

  opportunity: {
    eyebrow: "The opportunity",
    lead: {
      heading: "A distinctive route to market",
      body: "UK education is a substantial but complex market. Schools and trusts need clear funding, procurement confidence and reliable delivery. EEP helps bridge the gap between specialist providers and education decision-makers.",
    },
    support: {
      heading: "One coherent customer experience",
      body: "EEP coordinates the education relationship. Partners remain accountable for their agreed funding, technical, installation and service obligations.",
    },
  },

  expertise: {
    eyebrow: "Education expertise",
    heading: "More than lead generation",
    intro:
      "We bring education-market insight, proposition development, campaigns, opportunity qualification, bid support, procurement navigation and ongoing customer coordination.",
    items: [
      {
        title: "Sector insight",
        body: "Understand the distinct decision-makers, buying cycles, governance arrangements and priorities across schools, MATs and FE.",
      },
      {
        title: "Positioning and marketing",
        body: "Translate technical capability into credible education propositions, campaigns and practical sales materials.",
      },
      {
        title: "Bids and commercial support",
        body: "Support opportunity qualification, bid preparation, evidence requirements, procurement navigation and contract readiness.",
      },
      {
        title: "Long-term customer relationships",
        body: "Coordinate the education relationship beyond an initial introduction, with clear responsibilities and expectations.",
        link: { label: "Our education expertise", href: "/partners/education-market" },
      },
    ],
  },

  funding: {
    eyebrow: "Partnership model",
    heading: "Funding at the heart of the model",
    intro:
      "No-upfront-investment solutions are central to our education proposition. We welcome integrated funded solutions and partnerships combining capital providers, technology businesses and delivery specialists.",
    items: [
      {
        kicker: "Funding partners",
        title: "Capital and commercial structures",
        body: "Provide capital and appropriate commercial structures, including PPAs and other financing models where suitable.",
      },
      {
        kicker: "Technology partners",
        title: "Proven systems",
        body: "Supply proven solar, battery and management technologies with appropriate product support, warranties and technical documentation.",
      },
      {
        kicker: "Delivery partners",
        title: "Survey to maintenance",
        body: "Provide surveys, design, installation, commissioning, maintenance and relevant compliance capability.",
        link: { label: "The partnership model", href: "/partners/partnership-model" },
      },
    ],
  },

  network: {
    eyebrow: "Start a conversation",
    heading: "A carefully selected network",
    body: "We seek partners with appropriate technical standards, financial capability, warranties, compliance and long-term support. We are building the network and do not imply appointments that have not been made.",
    note: "We welcome enquiries from funding providers, technology manufacturers, installers and specialist delivery organisations.",
    cta: partnerContactCta,
  },
};
