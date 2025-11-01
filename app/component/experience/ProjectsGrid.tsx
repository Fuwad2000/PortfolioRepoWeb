import type { Project } from "~/data/experience";

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="rounded-2xl border border-(--border) bg-(--surface) px-5 py-6 shadow-[0_18px_50px_-35px_rgba(16,185,129,0.4)] transition hover:-translate-y-1 hover:shadow-glow"
        >
          <header>
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--textPrimary)" }}
            >
              {project.title}
            </h3>
            {project.role && (
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                {project.role}
              </p>
            )}
          </header>

          <ul
            className="mt-4 space-y-2 text-sm leading-relaxed"
            style={{ color: "var(--textSecondary)" }}
          >
            {project.bullets.map((bullet) => (
              <li key={bullet} className="relative pl-4">
                <span
                  className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-(--accent)"
                  aria-hidden
                />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-(--borderAccent) bg-(--surface) px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-(--textMuted)"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {project.links.map((link) => (
                <a
                  key={`${project.title}-${link.label}`}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center gap-1 text-(--accent) hover:text-(--textPrimary) transition"
                >
                  <span>{link.label}</span>
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
