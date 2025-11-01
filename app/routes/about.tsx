import { motion } from "framer-motion";
import type { FC, HTMLAttributes } from "react";
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
} from "lucide-react";
import Counter from "~/component/Counter";

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
const MotionDiv: FC<MotionDivShimProps> = isServer
  ? ({ initial, animate, whileInView, viewport, transition, ...rest }) => (
      <div {...rest} />
    )
  : motion.div;
const MotionSection: FC<MotionSectionShimProps> = isServer
  ? ({ initial, animate, whileInView, viewport, transition, ...rest }) => (
      <section {...rest} />
    )
  : motion.section;

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const timeline = [
  {
    year: "January 2024 — August 2025",
    title: "Infrastructure Analyst Intern",
    org: "Region of Peel",
    body: "Automating infrastructure workflows, improving reliability, and monitoring production workloads across the enterprise.",
  },
  {
    year: "October 2023 — Present",
    title: "Software Development Tutor",
    org: "Sheridan College",
    body: "Coaching students in programming, databases, networking, and cloud computing through mentoring sessions and labs.",
  },
  {
    year: "September 2022 — Present",
    title: "Full-Stack Projects",
    org: "Personal & Freelance",
    body: "Created end-to-end web apps with React, Spring Boot, and .NET, deploying on AWS with CI/CD pipelines and container orchestration.",
  },
];

const strengths = [
  {
    icon: Cloud,
    label: "Cloud Architecture & Automation",
    text: "Designing resilient AWS ecosystems, IaC workflows, and automated deployments.",
  },
  {
    icon: Code2,
    label: "Full-Stack Development",
    text: "Crafting modern interfaces and secure APIs across React, Spring Boot, and .NET.",
  },
  {
    icon: Server,
    label: "Infrastructure & API Management",
    text: "Observability, performance tuning, and lifecycle management for services in production.",
  },
  {
    icon: GraduationCap,
    label: "Tutoring & Mentorship",
    text: "Upskilling developers with structured lessons, labs, and real-world project reviews.",
  },
];

const values = [
  {
    icon: Target,
    title: "Consistency",
    text: "Reliable engineering happens when deliberate practice meets focus.",
  },
  {
    icon: Code2,
    title: "Simplicity",
    text: "I translate complexity into straightforward, maintainable solutions.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "Every project and student interaction is a chance to learn and elevate.",
  },
];

const interests = [
  {
    icon: BookOpen,
    title: "Mentoring",
    text: "Guiding aspiring engineers and sharing knowledge that accelerates their journey.",
  },
  {
    icon: Dumbbell,
    title: "Wellness",
    text: "Training at the gym keeps my mindset sharp for deep building sessions.",
  },
  {
    icon: Trophy,
    title: "Football",
    text: "A lifelong fan drawing strategy, teamwork, and grit from the sport.",
  },
];

const heroBadges = [
  "Infrastructure Analyst",
  "Cloud Develpment/Engineering",
  "Full-Stack Development",
  "Software Development",
];

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

export default function About() {
  return (
    <main className="relative pt-28 pb-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
      >
        <div className="absolute -top-48 -left-36 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-112 w-md rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-[140px]" />
      </div>

      <MotionSection
        {...fadeIn}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 py-12 rounded-3xl border border-default backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(0,0,0,0.45)]"
        style={heroCardStyle}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <p
              className="text-sm sm:text-base uppercase tracking-[0.35em]"
              style={{ color: "var(--textMuted)" }}
            >
              Who I Am
            </p>
            <h1
              className="mt-4 font-extrabold leading-tight"
              style={{
                fontSize: "clamp(2.75rem,6.2vw,4.2rem)",
                color: "var(--textPrimary)",
              }}
            >
              Fuwad Oladega
            </h1>
            <h2
              className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              Cloud & Software Developer
            </h2>
            <div
              className="mt-8 space-y-4 text-lg sm:text-lg leading-[1.85]"
              style={{ color: textBody }}
            >
              <p>
                I build cloud-native applications and resilient infrastructure —
                translating complexity into clarity for users, teams, and
                learners.
              </p>
              <p>
                Born in Nigeria and living in Canada since 2017, I bring a
                multicultural curiosity that fuels adaptability, empathy, and a
                love for scalable solutions.
              </p>
              <p>
                Today I support enterprise systems as an Infrastructure Analyst
                Intern at the Region of Peel while tutoring software,
                networking, and cloud Engineering students at Sheridan College.
                I also work on my own projects and freelance projects.
              </p>
            </div>
            <div
              className="mt-4 text-lg sm:text-lg font-semibold"
              style={{ color: "var(--textPrimary)" }}
            >
              Areas of Expertise:
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-accent/60 bg-(--surface) px-4 py-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/documents"
                className="px-5 py-2.5 rounded-2xl btn-accent font-semibold shadow-glow hover:-translate-y-0.5 transition"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-2xl border border-accent hover:-translate-y-0.5 transition"
                style={{ color: "var(--textPrimary)" }}
              >
                Let’s Connect
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div
              className="absolute -inset-4 rounded-[2.5rem] bg-[conic-gradient(from_120deg,rgba(16,185,129,0.3),transparent_55%)] blur-2xl opacity-80"
              aria-hidden
            />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-default bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)] shadow-[0_25px_70px_-35px_rgba(16,185,129,0.6)]">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_65%)]"
                aria-hidden
              />
              <img
                src="/images/work.jpg"
                alt="Fuwad Oladega"
                className="relative block h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        {...fadeIn}
        className="relative max-w-5xl mx-auto px-6 lg:px-10 mt-20"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 border border-default rounded-3xl px-8 py-10 backdrop-blur-xl shadow-[0_20px_60px_-35px_rgba(16,185,129,0.35)]"
          style={paneStyle}
        >
          <Counter value={2} label="Years of Experience" />
          <Counter value={30} label="Courses Taught" />
          <Counter value={100} label="Students Mentored" />
        </div>
      </MotionSection>

      <MotionSection
        {...fadeIn}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20"
      >
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          What I Do
        </h2>
        <p
          className="mt-3 max-w-6xl text-base sm:text-lg leading-relaxed"
          style={{ color: textBody }}
        >
          My craft blends software development with infrastructure expertise.
          I’m happiest architecting systems, shipping intuitive digital
          products, and empowering teams through automation.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map(({ icon: Icon, label, text }) => (
            <MotionDiv
              key={label}
              {...fadeIn}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-default px-5 py-6 backdrop-blur-xl shadow-[0_15px_45px_-25px_rgba(0,0,0,0.5)] hover:shadow-glow hover:-translate-y-1 transition"
              style={paneStyle}
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "var(--accentSubtle)",
                  color: "var(--textPrimary)",
                }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3
                className="mt-4 font-semibold"
                style={{ color: "var(--textPrimary)" }}
              >
                {label}
              </h3>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: mutedBody }}
              >
                {text}
              </p>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      <MotionSection
        {...fadeIn}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20"
      >
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          My Journey
        </h2>
        <div className="mt-8 space-y-8 relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15),rgba(16,185,129,0.4))]"
            aria-hidden
          />
          {timeline.map((item, idx) => (
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

      <MotionSection
        {...fadeIn}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20"
      >
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          How I Work
        </h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, text }, idx) => (
            <MotionDiv
              key={title}
              {...fadeIn}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-accent/60 px-6 py-6 backdrop-blur-xl shadow-[0_15px_45px_-25px_rgba(16,185,129,0.35)] hover:-translate-y-1 hover:shadow-glow transition"
              style={paneStyle}
            >
              <Icon className="h-6 w-6" style={{ color: "var(--accent)" }} />
              <h3
                className="mt-4 font-semibold text-lg"
                style={{ color: "var(--textPrimary)" }}
              >
                {title}
              </h3>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: mutedBody }}
              >
                {text}
              </p>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      <MotionSection
        {...fadeIn}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 mt-20"
      >
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          Beyond the Screen
        </h2>
        <p
          className="mt-4 max-w-6xl text-base sm:text-lg leading-relaxed"
          style={{ color: textBody }}
        >
          Away from the keyboard you’ll find me following football (soccer),
          staying consistent at the gym, and mentoring the next wave of
          builders. Curiosity, teamwork, and discipline keep me grounded.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {interests.map(({ icon: Icon, title, text }, idx) => (
            <MotionDiv
              key={title}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl border border-default px-6 py-8 backdrop-blur-xl shadow-[0_15px_45px_-30px_rgba(16,185,129,0.35)] relative overflow-hidden"
              style={paneStyle}
            >
              <div
                className="absolute -bottom-14 -right-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_70%)] group-hover:scale-110 transition"
                aria-hidden
              />
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  background: "var(--accentSubtle)",
                  color: "var(--textPrimary)",
                }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3
                className="mt-5 text-xl font-semibold"
                style={{ color: "var(--textPrimary)" }}
              >
                {title}
              </h3>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: mutedBody }}
              >
                {text}
              </p>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      <MotionSection
        {...fadeIn}
        className="relative max-w-5xl mx-auto px-6 lg:px-10 mt-24 text-center"
      >
        <div
          className="rounded-[2.5rem] border border-default px-10 py-12 backdrop-blur-xl shadow-[0_25px_70px_-35px_rgba(16,185,129,0.4)]"
          style={paneStyle}
        >
          <p className="text-lg" style={{ color: textBody }}>
            Want to collaborate, build something ambitious, or bring me in to
            mentor your team?
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/experience"
              className="px-5 py-2.5 rounded-2xl btn-accent font-semibold shadow-glow hover:-translate-y-0.5 transition"
            >
              View Experience
            </a>
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-2xl border border-accent hover:-translate-y-0.5 transition"
              style={{ color: "var(--textPrimary)" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
