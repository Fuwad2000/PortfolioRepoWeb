import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";
import {
  Cloud,
  Code2,
  Server,
  GraduationCap,
  Target,
  TrendingUp,
  BookOpen,
  Dumbbell,
  Trophy,
  ArrowRight,
  Briefcase,
  Mail,
  type LucideIcon,
} from "lucide-react";
import Counter from "~/component/Counter";
import {
  aboutContent,
  type AboutIconKey,
  type AboutParagraph,
} from "~/data/aboutContent";

type MotionDivShimProps = HTMLAttributes<HTMLDivElement> & {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

type MotionSectionShimProps = HTMLAttributes<HTMLElement> & {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

const isServer = typeof window === "undefined";
const MotionDiv = isServer
  ? ({
      initial,
      animate,
      whileInView,
      viewport,
      transition,
      ...rest
    }: MotionDivShimProps) => <div {...rest} />
  : motion.div;
const MotionSection = isServer
  ? ({
      initial,
      animate,
      whileInView,
      viewport,
      transition,
      ...rest
    }: MotionSectionShimProps) => <section {...rest} />
  : motion.section;

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const iconMap: Record<AboutIconKey, LucideIcon> = {
  cloud: Cloud,
  code2: Code2,
  server: Server,
  graduationCap: GraduationCap,
  target: Target,
  trendUp: TrendingUp,
  bookOpen: BookOpen,
  dumbbell: Dumbbell,
  trophy: Trophy,
};

function AboutHighlight({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-(--accent)">{children}</strong>
  );
}

function AboutBioParagraph({ paragraph }: { paragraph: AboutParagraph }) {
  return (
    <p>
      {paragraph.segments.map((segment, index) =>
        segment.highlight ? (
          <AboutHighlight key={index}>{segment.text}</AboutHighlight>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </p>
  );
}

const heroCardStyle = {
  backgroundColor: "color-mix(in srgb, var(--surface) 88%, transparent)",
};
const paneStyle = {
  backgroundColor: "color-mix(in srgb, var(--surface) 92%, transparent)",
};
const textBody =
  "color-mix(in srgb, var(--textPrimary) 85%, var(--textSecondary))";
const mutedBody =
  "color-mix(in srgb, var(--textPrimary) 70%, var(--textSecondary))";

function AboutHeroSection({
  hero,
  textBody,
}: {
  hero: (typeof aboutContent)["hero"];
  textBody: string;
}) {
  return (
    <MotionSection
      {...fadeIn}
      className="relative max-w-6xl mx-auto px-6 lg:px-10 py-10 sm:py-12 lg:py-14 rounded-3xl border border-default backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(0,0,0,0.45)] overflow-hidden"
      style={heroCardStyle}
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_65%)] blur-3xl"
        aria-hidden
      />

      {/* Profile header */}
      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(220px,280px)_1fr] gap-8 lg:gap-12 items-center">
        <div className="relative mx-auto w-full max-w-[280px] md:max-w-none md:mx-0">
          <div
            className="absolute -inset-3 rounded-[2rem] bg-[conic-gradient(from_120deg,rgba(16,185,129,0.35),transparent_55%)] blur-xl opacity-70"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.55)]">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_70%)]"
              aria-hidden
            />
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="relative block aspect-4/5 w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--textMuted)" }}
          >
            {hero.eyebrow}
          </p>
          <h1
            className="mt-3 font-extrabold leading-tight text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(2.5rem,5.5vw,3.75rem)",
              backgroundImage:
                "linear-gradient(120deg, var(--textPrimary) 0%, var(--textPrimary) 55%, var(--accent) 100%)",
            }}
          >
            {hero.name}
          </h1>
          <h2
            className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-(--accent)"
          >
            {hero.title}
          </h2>
          {hero.achievement ? (
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-(--accent) shadow-[0_0_24px_-12px_var(--accent)]">
              <Trophy className="h-4 w-4 shrink-0" aria-hidden />
              {hero.achievement}
            </span>
          ) : null}
          <div className="mt-4 mx-auto md:mx-0 h-1 w-24 rounded-full bg-linear-to-r from-(--accent) via-emerald-300/60 to-transparent" />
          <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
            {hero.actions.map((action, index) => (
              <a
                key={action.href}
                href={action.href}
                className={
                  index === 0
                    ? "px-5 py-2.5 rounded-2xl btn-accent font-semibold shadow-glow hover:-translate-y-0.5 transition"
                    : "px-5 py-2.5 rounded-2xl border border-accent hover:-translate-y-0.5 transition"
                }
                style={
                  index === 0 ? undefined : { color: "var(--textPrimary)" }
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div
        className="relative mt-10 pt-10 border-t border-(--border)"
      >
        <div
          className="space-y-5 text-base sm:text-[1.05rem] leading-[1.85] max-w-4xl"
          style={{ color: textBody }}
        >
          {hero.bio.map((paragraph, index) => (
            <AboutBioParagraph key={index} paragraph={paragraph} />
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div
        className="relative mt-10 pt-8 border-t border-(--border)"
      >
        <div
          className="rounded-2xl border border-(--border) px-5 py-6 sm:px-7 sm:py-7"
          style={{
            background:
              "color-mix(in srgb, var(--surface) 94%, var(--accent) 6%)",
          }}
        >
          <h3
            className="text-lg sm:text-xl font-semibold"
            style={{ color: "var(--textPrimary)" }}
          >
            {hero.expertiseHeading}
          </h3>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {hero.expertise.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-(--border) bg-(--background)/40 px-3.5 py-2.5 text-sm leading-snug"
                style={{ color: textBody }}
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  );
}

function AboutWhatIDoSection({
  whatIDo,
  textBody,
  mutedBody,
}: {
  whatIDo: (typeof aboutContent)["whatIDo"];
  textBody: string;
  mutedBody: string;
}) {
  return (
    <MotionSection
      {...fadeIn}
      className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20 py-10 sm:py-12 rounded-3xl border border-default backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(0,0,0,0.45)] overflow-hidden"
      style={heroCardStyle}
    >
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)] blur-3xl"
        aria-hidden
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-10 items-start pb-8 border-b border-(--border)">
        <div>
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--textMuted)" }}
          >
            {whatIDo.eyebrow}
          </p>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            {whatIDo.heading}
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-(--accent) via-emerald-300/60 to-transparent" />
        </div>
        <div
          className="rounded-2xl border border-(--border) px-5 py-5 sm:px-6 sm:py-6"
          style={{
            background:
              "color-mix(in srgb, var(--surface) 94%, var(--accent) 6%)",
          }}
        >
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: textBody }}
          >
            {whatIDo.intro}
          </p>
        </div>
      </div>

      <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {whatIDo.strengths.map(({ icon, title, text }, index) => {
          const Icon = iconMap[icon];
          const step = String(index + 1).padStart(2, "0");

          return (
            <MotionDiv
              key={title}
              {...fadeIn}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group relative overflow-hidden rounded-2xl border border-(--border) p-5 sm:p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_50px_-28px_rgba(16,185,129,0.45)]"
              style={paneStyle}
            >
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1 scale-y-0 bg-linear-to-b from-(--accent) to-emerald-300/40 transition-transform duration-300 group-hover:scale-y-100 origin-top"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />

              <div className="relative flex items-start gap-4">
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <span
                    className="text-xs font-semibold tracking-[0.25em]"
                    style={{ color: "var(--textMuted)" }}
                  >
                    {step}
                  </span>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 shadow-[0_0_24px_-12px_var(--accent)]"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accentSubtle) 70%, var(--surface))",
                      color: "var(--textPrimary)",
                    }}
                  >
                    <Icon className="h-5 w-5 text-(--accent)" />
                  </span>
                </div>

                <div className="min-w-0 pt-1">
                  <h3
                    className="text-lg font-semibold leading-snug"
                    style={{ color: "var(--textPrimary)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-2.5 text-sm sm:text-[0.95rem] leading-relaxed"
                    style={{ color: mutedBody }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </MotionSection>
  );
}

function AboutHowIWorkSection({
  howIWork,
  textBody,
  mutedBody,
}: {
  howIWork: (typeof aboutContent)["howIWork"];
  textBody: string;
  mutedBody: string;
}) {
  return (
    <MotionSection
      {...fadeIn}
      className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20 py-10 sm:py-12 rounded-3xl border border-default backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(0,0,0,0.45)] overflow-hidden"
      style={heroCardStyle}
    >
      <div
        className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_65%)] blur-3xl"
        aria-hidden
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-10 items-start pb-8 border-b border-(--border)">
        <div>
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--textMuted)" }}
          >
            {howIWork.eyebrow}
          </p>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            {howIWork.heading}
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-(--accent) via-emerald-300/60 to-transparent" />
        </div>
        <div
          className="rounded-2xl border border-(--border) px-5 py-5 sm:px-6 sm:py-6"
          style={{
            background:
              "color-mix(in srgb, var(--surface) 94%, var(--accent) 6%)",
          }}
        >
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: textBody }}
          >
            {howIWork.intro}
          </p>
        </div>
      </div>

      <div className="relative mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {howIWork.values.map(({ icon, title, text }, index) => {
          const Icon = iconMap[icon];

          return (
            <MotionDiv
              key={title}
              {...fadeIn}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) p-5 sm:p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_50px_-28px_rgba(16,185,129,0.45)]"
              style={paneStyle}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-(--accent) to-transparent opacity-70"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />

              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30"
                style={{
                  background:
                    "color-mix(in srgb, var(--accentSubtle) 65%, var(--surface))",
                }}
              >
                <Icon className="h-5 w-5 text-(--accent)" />
              </span>
              <h3
                className="mt-5 text-lg font-semibold leading-snug"
                style={{ color: "var(--textPrimary)" }}
              >
                {title}
              </h3>
              <p
                className="mt-2.5 flex-1 text-sm sm:text-[0.95rem] leading-relaxed"
                style={{ color: mutedBody }}
              >
                {text}
              </p>
            </MotionDiv>
          );
        })}
      </div>
    </MotionSection>
  );
}

function AboutBeyondTheScreenSection({
  beyondTheScreen,
  textBody,
  mutedBody,
}: {
  beyondTheScreen: (typeof aboutContent)["beyondTheScreen"];
  textBody: string;
  mutedBody: string;
}) {
  return (
    <MotionSection
      {...fadeIn}
      className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20 py-10 sm:py-12 rounded-3xl border border-default backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(0,0,0,0.45)] overflow-hidden"
      style={heroCardStyle}
    >
      <div
        className="pointer-events-none absolute -bottom-24 right-8 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_65%)] blur-3xl"
        aria-hidden
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-10 items-start pb-8 border-b border-(--border)">
        <div>
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--textMuted)" }}
          >
            {beyondTheScreen.eyebrow}
          </p>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            {beyondTheScreen.heading}
          </h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-(--accent) via-emerald-300/60 to-transparent" />
        </div>
        <div
          className="rounded-2xl border border-(--border) px-5 py-5 sm:px-6 sm:py-6"
          style={{
            background:
              "color-mix(in srgb, var(--surface) 94%, var(--accent) 6%)",
          }}
        >
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: textBody }}
          >
            {beyondTheScreen.intro}
          </p>
        </div>
      </div>

      <div className="relative mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {beyondTheScreen.interests.map(({ icon, title, text }, index) => {
          const Icon = iconMap[icon];

          return (
            <MotionDiv
              key={title}
              {...fadeIn}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group relative overflow-hidden rounded-2xl border border-(--border) p-5 sm:p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_50px_-28px_rgba(16,185,129,0.45)]"
              style={paneStyle}
            >
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1 scale-y-0 bg-linear-to-b from-emerald-300/40 to-(--accent) transition-transform duration-300 group-hover:scale-y-100 origin-top"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -top-12 -left-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_70%)] opacity-60 transition-transform duration-300 group-hover:scale-110"
                aria-hidden
              />

              <div className="relative flex items-center gap-3.5">
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accentSubtle) 70%, var(--surface))",
                  }}
                >
                  <Icon className="h-5 w-5 text-(--accent)" />
                </span>
                <h3
                  className="text-lg font-semibold leading-snug"
                  style={{ color: "var(--textPrimary)" }}
                >
                  {title}
                </h3>
              </div>
              <p
                className="relative mt-4 text-sm sm:text-[0.95rem] leading-relaxed"
                style={{ color: mutedBody }}
              >
                {text}
              </p>
            </MotionDiv>
          );
        })}
      </div>
    </MotionSection>
  );
}

const ctaActionIcons: Record<string, LucideIcon> = {
  "/contact": Mail,
  "/experience": Briefcase,
};

function AboutCtaButton({
  label,
  href,
  variant = "secondary",
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const Icon = ctaActionIcons[href] ?? ArrowRight;
  const isPrimary = variant === "primary";

  if (isPrimary) {
    return (
      <a
        href={href}
        className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-6 py-3.5 text-sm sm:text-base font-semibold text-(--textPrimary) shadow-[0_0_32px_-8px_var(--accent)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-6px_var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--accent) 0%, var(--accentHover) 55%, var(--accentSubtle) 100%)",
        }}
      >
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden
        />
        <Icon className="relative h-4 w-4 shrink-0" aria-hidden />
        <span className="relative">{label}</span>
        <ArrowRight
          className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </a>
    );
  }

  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-accent/50 bg-(--surface)/80 px-6 py-3.5 text-sm sm:text-base font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))] hover:shadow-[0_0_28px_-10px_var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      style={{ color: "var(--textPrimary)" }}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <Icon
        className="relative h-4 w-4 shrink-0 text-(--accent) transition-transform duration-300 group-hover:scale-110"
        aria-hidden
      />
      <span className="relative">{label}</span>
      <ArrowRight
        className="relative h-4 w-4 shrink-0 text-(--accent) opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        aria-hidden
      />
    </a>
  );
}

function AboutCtaSection({
  cta,
  textBody,
}: {
  cta: (typeof aboutContent)["cta"];
  textBody: string;
}) {
  return (
    <MotionSection
      {...fadeIn}
      className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-24"
    >
      <div
        className="relative overflow-hidden rounded-[2.5rem] border border-default px-6 py-12 sm:px-12 sm:py-14 text-center backdrop-blur-xl shadow-[0_30px_90px_-35px_rgba(16,185,129,0.55)]"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in srgb, var(--surface) 92%, var(--accent) 8%) 0%, color-mix(in srgb, var(--surface) 96%, transparent) 45%, color-mix(in srgb, var(--surface) 88%, var(--accent) 12%) 100%)",
        }}
      >
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
          aria-hidden
        >
          <span className="block h-full w-full bg-linear-to-r from-transparent via-(--accent) to-transparent opacity-70 animate-[shimmer_4s_linear_infinite]" />
        </span>

        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_70%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl">
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--textMuted)" }}
          >
            {cta.eyebrow}
          </p>
          <h2
            className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(120deg, var(--textPrimary) 0%, var(--textPrimary) 50%, var(--accent) 100%)",
            }}
          >
            {cta.text}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-transparent via-(--accent) to-transparent" />
          <p
            className="mt-5 text-base sm:text-lg leading-relaxed"
            style={{ color: textBody }}
          >
            {cta.subtext}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            {cta.actions.map((action) => (
              <AboutCtaButton
                key={action.href}
                label={action.label}
                href={action.href}
                variant={action.variant}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}
      `}</style>
    </MotionSection>
  );
}

export default function About() {
  const { hero, stats, whatIDo, journey, howIWork, beyondTheScreen, cta } =
    aboutContent;

  return (
    <main className="relative pt-28 pb-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
      >
        <div className="absolute -top-48 -left-36 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-112 w-md rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-[140px]" />
      </div>

      <AboutHeroSection hero={hero} textBody={textBody} />

      <MotionSection
        {...fadeIn}
        className="relative max-w-5xl mx-auto px-6 lg:px-10 mt-20"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 border border-default rounded-3xl px-8 py-10 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(16,185,129,0.35)]"
          style={paneStyle}
        >
          {stats.map((stat) => (
            <Counter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </MotionSection>

      <AboutWhatIDoSection
        whatIDo={whatIDo}
        textBody={textBody}
        mutedBody={mutedBody}
      />

      <MotionSection
        {...fadeIn}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20"
      >
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          {journey.heading}
        </h2>
        <div className="mt-8 space-y-8 relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15),rgba(16,185,129,0.4))]"
            aria-hidden
          />
          {journey.timeline.map((item, idx) => (
            <MotionDiv
              key={item.title}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-14"
            >
              <span className="absolute left-2 top-2 h-6 w-6 rounded-full border border-accent bg-(--background)" />
              <div
                className="rounded-2xl border border-default px-6 py-5 backdrop-blur-xl shadow-[0_15px_50px_-30px_rgba(16,185,129,0.45)]"
                style={paneStyle}
              >
                <p
                  className="text-sm uppercase tracking-[0.18em]"
                  style={{ color: "var(--textMuted)" }}
                >
                  {item.year}
                </p>
                <h3
                  className="mt-1 text-xl font-semibold"
                  style={{ color: "var(--textPrimary)" }}
                >
                  {item.title}
                </h3>
                <p className="text-base" style={{ color: "var(--accent)" }}>
                  {item.org}
                </p>
                <p
                  className="mt-4 text-sm sm:text-base leading-relaxed"
                  style={{ color: mutedBody }}
                >
                  {item.body}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      <AboutHowIWorkSection
        howIWork={howIWork}
        textBody={textBody}
        mutedBody={mutedBody}
      />

      <AboutBeyondTheScreenSection
        beyondTheScreen={beyondTheScreen}
        textBody={textBody}
        mutedBody={mutedBody}
      />

      <AboutCtaSection cta={cta} textBody={textBody} />
    </main>
  );
}
