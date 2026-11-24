import { useState } from "react";
import { Link } from "react-router";
import { Check } from "lucide-react";
import {
  pricingContactHref,
  pricingContent,
  type PricingPackage,
} from "~/data/pricing";

const MOBILE_FEATURE_COUNT = 5;

export function meta() {
  return [
    { title: "Pricing | DegazTech Solutions" },
    {
      name: "description",
      content:
        "Transparent pricing for DegazTech Solutions. Professional websites and digital solutions from $999 CAD, with monthly Hosting & Care.",
    },
    {
      property: "og:title",
      content: "Transparent Pricing. Powerful Solutions. | DegazTech Solutions",
    },
    {
      property: "og:description",
      content: pricingContent.subtitle,
    },
  ];
}

function PricingCard({ pkg }: { pkg: PricingPackage }) {
  const [expanded, setExpanded] = useState(false);
  const hasExtraFeatures = pkg.features.length > MOBILE_FEATURE_COUNT;

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border px-5 py-6 shadow-[0_18px_50px_-35px_rgba(16,185,129,0.45)] sm:px-6 ${
        pkg.highlighted
          ? "border-(--accent) bg-(--surface) shadow-glow"
          : "border-(--border) bg-(--surface)"
      }`}
    >
      {pkg.highlighted ? (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-(--accent) bg-(--surface) px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-(--accent)">
          Most Popular
        </span>
      ) : null}

      <header>
        <h3
          className="text-lg font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          {pkg.name}
        </h3>
        <p
          className="mt-4 text-4xl font-extrabold tracking-tight"
          style={{ color: "var(--textPrimary)" }}
        >
          {pkg.developmentFeeLabel}
        </p>
        <p className="mt-1 text-sm" style={{ color: "var(--textMuted)" }}>
          {pkg.feeNote}
        </p>
        <div
          className="mt-4 rounded-2xl border border-(--border) px-4 py-3"
          style={{ background: "var(--chipBg)" }}
        >
          <p
            className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--textMuted)" }}
          >
            Hosting & Care
          </p>
          <p
            className="mt-1 text-lg font-semibold"
            style={{ color: "var(--accent)" }}
          >
            {pkg.hostingLabel}
          </p>
        </div>
        <p
          className="mt-4 text-sm italic leading-relaxed"
          style={{ color: "var(--textSecondary)" }}
        >
          {pkg.tagline}
        </p>
      </header>

      {pkg.includesLabel ? (
        <p
          className="mt-5 text-sm font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          {pkg.includesLabel}
        </p>
      ) : (
        <div className="mt-5" />
      )}

      <ul className="mt-3 flex-1 space-y-2.5 text-sm leading-relaxed">
        {pkg.features.map((feature, index) => (
          <li
            key={feature}
            className={`items-start gap-2.5 ${
              index >= MOBILE_FEATURE_COUNT && !expanded
                ? "hidden lg:flex"
                : "flex"
            }`}
            style={{ color: "var(--textSecondary)" }}
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-(--accent)"
              aria-hidden
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {hasExtraFeatures ? (
        <button
          type="button"
          className="mt-3 self-start text-sm font-semibold text-(--accent) hover:text-(--textPrimary) lg:hidden"
          aria-expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded
            ? "Show fewer features"
            : `View all ${pkg.features.length} features`}
        </button>
      ) : null}

      <Link
        to={pricingContactHref(pkg.name)}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
          pkg.highlighted
            ? "btn-accent shadow-lg hover:shadow-xl"
            : "border border-accent hover:shadow-lg"
        }`}
        style={pkg.highlighted ? undefined : { color: "var(--textPrimary)" }}
      >
        {pkg.cta}
      </Link>
    </article>
  );
}

export default function Pricing() {
  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "DegazTech Solutions pricing",
    description: pricingContent.subtitle,
    itemListElement: pricingContent.packages.map((pkg) => ({
      "@type": "Offer",
      name: `${pkg.name} website package`,
      description: pkg.tagline,
      price: pkg.developmentFee.toFixed(2),
      priceCurrency: "CAD",
      url: "https://degaz.dev/pricing",
    })),
  };

  return (
    <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalog) }}
      />
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="overflow-hidden rounded-3xl border border-(--border) bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)] px-6 py-8 shadow-[0_25px_70px_-35px_rgba(16,185,129,0.45)] backdrop-blur-xl">
          <header className="max-w-3xl space-y-4">
            <p
              className="text-sm uppercase tracking-[0.35em]"
              style={{ color: "var(--textMuted)" }}
            >
              {pricingContent.eyebrow}
            </p>
            <h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
              style={{ color: "var(--textPrimary)" }}
            >
              {pricingContent.heading}
            </h1>
            <p
              className="text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--textSecondary)" }}
            >
              {pricingContent.subtitle}
            </p>
          </header>
        </section>

        <section aria-label="Pricing packages">
          <div className="grid items-stretch gap-8 pt-4 lg:grid-cols-3 lg:gap-6">
            {pricingContent.packages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-(--border) bg-(--surface) px-6 py-6 shadow-[0_25px_80px_-45px_rgba(16,185,129,0.45)]">
          <h2
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            {pricingContent.hostingCare.heading}
          </h2>
          <p
            className="mt-2 max-w-3xl text-sm leading-relaxed"
            style={{ color: "var(--textSecondary)" }}
          >
            {pricingContent.hostingCare.description}
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pricingContent.hostingCare.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm"
                style={{ color: "var(--textSecondary)" }}
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-(--accent)"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p
            className="mt-5 text-sm leading-relaxed"
            style={{ color: "var(--textPrimary)" }}
          >
            {pricingContent.hostingCare.allowance}
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            {pricingContent.addons.heading}
          </h2>
          <p
            className="mt-2 text-sm"
            style={{ color: "var(--textSecondary)" }}
          >
            {pricingContent.addons.description}
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pricingContent.addons.items.map((addon) => (
              <li
                key={addon.name}
                className="rounded-2xl border border-(--border) bg-(--surface) px-4 py-4"
              >
                <p
                  className="text-sm font-medium leading-snug"
                  style={{ color: "var(--textPrimary)" }}
                >
                  {addon.name}
                </p>
                {addon.quote ? (
                  <Link
                    to={pricingContactHref(addon.name)}
                    className="mt-2 inline-flex text-sm font-semibold text-(--accent) hover:text-(--textPrimary)"
                  >
                    {addon.price}
                  </Link>
                ) : (
                  <p
                    className="mt-2 text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {addon.price}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-(--border) bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.1),transparent_70%)] px-6 py-6">
          <h2
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            {pricingContent.payment.heading}
          </h2>
          <p
            className="mt-3 max-w-3xl text-base leading-relaxed"
            style={{ color: "var(--textSecondary)" }}
          >
            Flexible payment arrangements are available.{" "}
            <Link
              to="/contact"
              className="font-semibold text-(--accent) hover:text-(--textPrimary)"
            >
              Contact us
            </Link>{" "}
            to discuss a solution that fits your business and budget.
          </p>
        </section>

        <section aria-label={pricingContent.conditions.heading}>
          <h2
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--textMuted)" }}
          >
            {pricingContent.conditions.heading}
          </h2>
          <ul
            className="mt-3 space-y-2 text-sm leading-relaxed"
            style={{ color: "var(--textMuted)" }}
          >
            {pricingContent.conditions.items.map((item) => (
              <li key={item} className="relative pl-4">
                <span
                  className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-(--accent)"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
