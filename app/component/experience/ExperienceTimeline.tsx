import React from "react";
import type { Experience } from "~/data/experience";
import RoleCard from "./RoleCard";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <div className="relative pl-6 sm:pl-10">
      <span
        className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(16,185,129,0.4))]"
        aria-hidden
      />

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={exp.title} className="relative">
            <span
              className="absolute -left-4 sm:-left-6 top-3 h-3 w-3 rounded-full border border-(--borderAccent) bg-(--background)"
              aria-hidden
            />
            <RoleCard experience={exp} />
          </div>
        ))}
      </div>
    </div>
  );
}
