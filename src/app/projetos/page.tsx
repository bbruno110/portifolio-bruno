import type { Metadata } from "next";
import { Container } from "@/components/container";
import { projects } from "@/data/portfolio";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Aplicações, integrações e automações desenvolvidas por Bruno Oliveira Santos.",
};

export default function ProjectsPage() {
  return (
    <section className="viewport-page projects-page">
      <Container>
        <h1 className="font-heading text-3xl leading-tight font-bold tracking-tight md:text-[40px]">
          Projetos<span className="text-accent">.</span>
        </h1>

        <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
          Aplicações, integrações e automações.
        </p>

        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
