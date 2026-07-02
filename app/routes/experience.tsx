import ExperienceTimeline from "~/component/experience/ExperienceTimeline";
import ProjectsGrid from "~/component/experience/ProjectsGrid";
import SkillsGrid from "~/component/experience/SkillsGrid";
import { experienceContent } from "~/data/experience";

export default function Experience() {
  const {
    header,
    journey,
    projectsSection,
    skillsSection,
    referencesSection,
    experiences,
    projects,
    skills,
  } = experienceContent;

  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="space-y-4">
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--textMuted)" }}
          >
            {header.eyebrow}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            {header.title}
          </h1>
          <p
            className="text-lg sm:text-xl"
            style={{ color: "var(--textSecondary)" }}
          >
            {header.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            {header.actions.map((action, index) => (
              <a
                key={action.href}
                href={action.href}
                className={
                  index === 0
                    ? "inline-flex items-center justify-center rounded-2xl border border-(--borderAccent) px-4 py-2 text-sm font-semibold text-(--textPrimary) transition hover:-translate-y-0.5 hover:shadow-glow"
                    : "inline-flex items-center justify-center rounded-2xl btn-accent px-4 py-2 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5"
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2
              className="text-2xl md:text-3xl font-semibold tracking-tight"
              style={{ color: "var(--textPrimary)" }}
            >
              {journey.heading}
            </h2>
            <span className="hidden text-xs uppercase tracking-[0.35em] text-(--textMuted) lg:block">
              {journey.dateRange}
            </span>
          </div>
          <ExperienceTimeline experiences={experiences} />
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--textPrimary)" }}
              >
                {projectsSection.heading}
              </h2>
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                {projectsSection.description}
              </p>
            </div>
          </div>
          <ProjectsGrid projects={projects} />
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--textPrimary)" }}
              >
                {skillsSection.heading}
              </h2>
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                {skillsSection.description}
              </p>
            </div>
          </div>
          <SkillsGrid categories={skills} />
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--textPrimary)" }}
              >
                {referencesSection.heading}
              </h2>
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                {referencesSection.description}
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {referencesSection.items.map((reference) => (
              <div
                key={reference.email}
                className="rounded-2xl border border-(--border) bg-(--surface) px-5 py-6 shadow-[0_18px_50px_-35px_rgba(16,185,129,0.4)]"
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--textPrimary)" }}
                >
                  {reference.name}
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--textSecondary)" }}
                >
                  {reference.role}
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--textSecondary)" }}
                >
                  {reference.org}
                </p>
                <a
                  href={`mailto:${reference.email}`}
                  className="mt-3 inline-block text-sm font-medium text-(--accent) hover:underline"
                >
                  {reference.email}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
