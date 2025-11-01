import React from "react";
import SkillPill from "./SkillPill";

type SkillsGridProps = {
  categories: Record<string, string[]>;
};

export default function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(categories).map(([title, skills]) => (
        <section
          key={title}
          className="rounded-2xl border border-(--border) bg-(--surface) px-5 py-6 shadow-[0_18px_50px_-35px_rgba(16,185,129,0.4)]"
        >
          <h3 className="text-sm uppercase tracking-[0.35em] text-(--accent)">
            {title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
