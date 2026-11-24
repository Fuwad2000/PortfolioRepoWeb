export type PricingPackage = {
  id: string;
  name: string;
  developmentFee: number;
  developmentFeeLabel: string;
  feeNote: string;
  hostingFee: number;
  hostingLabel: string;
  tagline: string;
  includesLabel?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export type PricingAddon = {
  name: string;
  price: string;
  quote?: boolean;
};

export const pricingContent = {
  eyebrow: "Pricing",
  heading: "Transparent Pricing. Powerful Solutions.",
  subtitle:
    "Professional websites and digital solutions designed to help your business attract customers, streamline operations and grow with confidence.",
  packages: [
    {
      id: "basic",
      name: "Basic",
      developmentFee: 999,
      developmentFeeLabel: "$999 CAD",
      feeNote: "One-time development fee",
      hostingFee: 49,
      hostingLabel: "$49/month",
      tagline: "Establish your professional online presence.",
      features: [
        "Professional website — up to 5 pages",
        "Mobile-friendly design",
        "Contact form with email notifications",
        "Google Maps integration",
        "Click-to-call functionality",
        "Social media integration",
        "SEO optimization",
        "Custom domain connection",
        "SSL security and spam protection",
        "Google Search Console setup",
      ],
      cta: "Get Started",
    },
    {
      id: "premium",
      name: "Premium",
      developmentFee: 1399,
      developmentFeeLabel: "$1,399 CAD",
      feeNote: "One-time development fee",
      hostingFee: 79,
      hostingLabel: "$79/month",
      tagline: "Attract more customers and grow your business.",
      includesLabel: "Everything in Basic, plus:",
      highlighted: true,
      features: [
        "Up to 8 website pages",
        "Online appointment booking",
        "Automated email confirmations",
        "Professional photo and service gallery",
        "Customer reviews and testimonials",
        "Google Business Profile setup",
        "Website traffic analytics",
        "Enhanced local SEO",
        "First-year standard domain registration",
        "Professional business email setup — 1 mailbox",
      ],
      cta: "Choose Premium",
    },
    {
      id: "exclusive",
      name: "Exclusive",
      developmentFee: 1750,
      developmentFeeLabel: "$1,750 CAD",
      feeNote: "One-time development fee",
      hostingFee: 129,
      hostingLabel: "$129/month",
      tagline: "Streamline your business with connected digital solutions.",
      includesLabel: "Everything in Premium, plus:",
      features: [
        "Up to 12 website pages",
        "Online quote requests with photo uploads",
        "Centralized customer inquiry management",
        "Business management dashboard using existing business tools",
        "Microsoft 365 business setup",
        "Professional email setup — up to 3 mailboxes",
        "Advanced email security",
        "Automated customer review requests",
        "Newsletter signup integration",
        "Online payments and deposits integration",
        "Business technology training",
      ],
      cta: "Choose Exclusive",
    },
  ] satisfies PricingPackage[],
  hostingCare: {
    heading: "Hosting & Care",
    description:
      "Every package includes a monthly Hosting & Care subscription so your site stays online, secure, and looked after.",
    items: [
      "Reliable cloud hosting",
      "Security updates",
      "SSL certificate management",
      "Website backups",
      "Uptime monitoring",
      "Ongoing technical support",
      "Minor website content updates",
    ],
    allowance:
      "Basic includes one minor content update per month, Premium includes two, and Exclusive includes three.",
  },
  addons: {
    heading: "Optional add-ons",
    description:
      "Extend a package when your business needs something more specific.",
    items: [
      { name: "Additional website page", price: "from $99" },
      { name: "Professional business email setup", price: "from $99" },
      { name: "Microsoft 365 setup", price: "from $199" },
      { name: "Email migration", price: "from $75/mailbox" },
      { name: "SharePoint workspace", price: "from $299" },
      { name: "Business automation", price: "from $299" },
      { name: "Local SEO management", price: "from $149/month" },
      {
        name: "Custom software development",
        price: "Request a Quote",
        quote: true,
      },
    ] satisfies PricingAddon[],
  },
  payment: {
    heading: "Flexible payment options",
    message:
      "Flexible payment arrangements are available. Contact us to discuss a solution that fits your business and budget.",
  },
  conditions: {
    heading: "Pricing conditions",
    items: [
      "All prices are in CAD, excluding applicable taxes.",
      "Microsoft 365 licenses, domain renewals, third-party subscriptions and payment processing fees are separate.",
      "Two rounds of design revisions included.",
      "30-day post-launch bug-fix warranty.",
      "50% deposit required before development begins, with the remaining balance due before launch unless otherwise agreed.",
      "Additional custom functionality is quoted separately.",
    ],
  },
};

const selectionNames = new Set<string>([
  ...pricingContent.packages.map((pkg) => pkg.name),
  ...pricingContent.addons.items
    .filter((addon) => addon.quote)
    .map((addon) => addon.name),
]);

export function pricingContactHref(selection: string) {
  return `/contact?package=${encodeURIComponent(selection)}`;
}

export function isKnownPricingSelection(value: string) {
  return selectionNames.has(value);
}
