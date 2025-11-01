import React from "react";
import ExperienceTimeline from "~/component/experience/ExperienceTimeline";
import ProjectsGrid from "~/component/experience/ProjectsGrid";
import SkillsGrid from "~/component/experience/SkillsGrid";
import { EXPERIENCES, PROJECTS, SKILLS } from "~/data/experience";

export default function Experience() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="space-y-4">
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "var(--textMuted)" }}
          >
            Journey
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--textPrimary)" }}
          >
            Experience
          </h1>
          <p
            className="text-lg sm:text-xl"
            style={{ color: "var(--textSecondary)" }}
          >
            Over 2 years of hands-on infrastructure and full-stack work, plus
            100+ students mentored.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/documents"
              className="inline-flex items-center justify-center rounded-2xl border border-(--borderAccent) px-4 py-2 text-sm font-semibold text-(--textPrimary) transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              View Resume
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl btn-accent px-4 py-2 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2
              className="text-2xl md:text-3xl font-semibold tracking-tight"
              style={{ color: "var(--textPrimary)" }}
            >
              Professional Journey
            </h2>
            <span className="hidden text-xs uppercase tracking-[0.35em] text-(--textMuted) lg:block">
              Jan 2024 – Present
            </span>
          </div>
          <ExperienceTimeline experiences={EXPERIENCES} />
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--textPrimary)" }}
              >
                Selected Full-Stack Projects
              </h2>
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                A mix of client work, community apps, and personal labs—covering
                UI, APIs, and production ops.
              </p>
            </div>
          </div>
          <ProjectsGrid projects={PROJECTS} />
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--textPrimary)" }}
              >
                Core Skills
              </h2>
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                The toolset I use to design, build, ship, and maintain
                dependable software.
              </p>
            </div>
          </div>
          <SkillsGrid categories={SKILLS} />
        </section>
      </div>
    </main>
  );
}
