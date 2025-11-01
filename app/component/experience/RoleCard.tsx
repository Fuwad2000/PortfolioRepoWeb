import React from "react";
import type { Experience } from "~/data/experience";

function formatRange(start: string, end: string) {
  const format = (value: string) => {
    if (value.toLowerCase() === "present") return "Present";
    const [year, month] = value.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };

  return `${format(start)} — ${format(end)}`;
}

type RoleCardProps = {
  experience: Experience;
};

export default function RoleCard({ experience }: RoleCardProps) {
  return (
    <article className="rounded-2xl border border-(--border) bg-(--surface) px-5 py-6 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.45)] transition hover:-translate-y-1 hover:shadow-glow">
      <header className="flex flex-col gap-1">
        <h3
          className="text-lg sm:text-xl font-semibold"
          style={{ color: "var(--textPrimary)" }}
        >
          {experience.title}
        </h3>
        <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
          {experience.org}
        </p>
        <p
          className="text-xs uppercase tracking-[0.35em]"
          style={{ color: "var(--textMuted)" }}
        >
          {formatRange(experience.start, experience.end)}
        </p>
      </header>

      <ul
        className="mt-4 space-y-2 text-sm leading-relaxed"
        style={{ color: "var(--textSecondary)" }}
      >
        {experience.bullets.map((point) => (
          <li key={point} className="relative pl-4">
            <span
              className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-(--accent)"
              aria-hidden
            />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-(--borderAccent) bg-(--surface) px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-(--textMuted)"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
