"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/portfolio";

export function ProjectGrid({
  projects,
}: {
  projects: readonly Project[];
}) {
  const [activeId, setActiveId] = useState<string>(
    projects[0]?.id ?? ""
  );

  return (
    <div className="project-grid mt-4 grid grid-cols-2 gap-3 md:mt-6 md:gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          onPointerEnter={() => setActiveId(project.id)}
          onPointerDown={() => setActiveId(project.id)}
        >
          <ProjectCard
            project={project}
            featured={activeId === project.id}
          />
        </div>
      ))}
    </div>
  );
}
