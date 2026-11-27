"use client";

import { useState, useSyncExternalStore } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/portfolio";

const fourCards = "(min-width: 1024px) and (min-height: 600px), (min-width: 768px) and (min-height: 800px)";
const twoCards = "(min-width: 640px) and (min-height: 480px)";

function subscribe(callback: () => void) {
  const queries = [window.matchMedia(fourCards), window.matchMedia(twoCards)];
  queries.forEach((query) => query.addEventListener("change", callback));
  return () => queries.forEach((query) => query.removeEventListener("change", callback));
}

function getPageSize() {
  if (window.matchMedia(fourCards).matches) return 4;
  return window.matchMedia(twoCards).matches ? 2 : 1;
}

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  const pageSize = useSyncExternalStore(subscribe, getPageSize, () => 1);
  // Guardar o índice mantém o projeto em vista ao redimensionar a tela.
  const [firstIndex, setFirstIndex] = useState(0);
  const [activeId, setActiveId] = useState(projects[0]?.id ?? "");
  const pageCount = Math.ceil(projects.length / pageSize);
  const page = Math.min(Math.floor(firstIndex / pageSize), Math.max(0, pageCount - 1));
  const visibleProjects = projects.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="project-browser">
      <div id="project-results" className={`project-grid project-grid-${pageSize}`}>
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="min-h-0 min-w-0"
            onPointerEnter={() => setActiveId(project.id)}
            onPointerDown={() => setActiveId(project.id)}
          >
            <ProjectCard project={project} featured={activeId === project.id} />
          </div>
        ))}
      </div>
      {pageCount > 1 && (
        <nav aria-label="Paginação dos projetos" className="project-pagination">
          <button
            type="button"
            aria-controls="project-results"
            disabled={page === 0}
            onClick={() => setFirstIndex((page - 1) * pageSize)}
          >
            <span aria-hidden="true">←</span> Anterior
          </button>
          <p role="status" aria-atomic="true" className="text-xs text-muted">
            {page + 1} / {pageCount}
            <span className="sr-only"> · Projetos {page * pageSize + 1} a {Math.min((page + 1) * pageSize, projects.length)} de {projects.length}</span>
          </p>
          <button
            type="button"
            aria-controls="project-results"
            disabled={page === pageCount - 1}
            onClick={() => setFirstIndex((page + 1) * pageSize)}
          >
            Próxima <span aria-hidden="true">→</span>
          </button>
        </nav>
      )}
    </div>
  );
}
