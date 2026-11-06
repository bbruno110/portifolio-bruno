import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      aria-labelledby={`project-${project.id}`}
      className={`
        relative flex h-full flex-col overflow-hidden
        rounded-lg border border-line p-4 md:p-5
        before:absolute before:inset-x-0 before:top-0
        before:h-[3px] before:bg-accent
        before:transition-opacity before:duration-200
        ${featured ? "before:opacity-100" : "before:opacity-0"}
      `}
    >
      <h2
        id={`project-${project.id}`}
        className="font-heading text-xl leading-tight font-semibold tracking-tight"
      >
        {project.title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul
        aria-label="Tecnologias utilizadas"
        className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-5 text-xs text-muted"
      >
        {project.technologies.map((technology, index) => (
          <li key={technology} className="inline-flex items-center gap-3">
            {index > 0 && <span aria-hidden="true">·</span>}
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}