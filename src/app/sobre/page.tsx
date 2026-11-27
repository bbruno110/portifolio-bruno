import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeading } from "@/components/page-heading";
import { ArrowUpRight } from "@/components/icons";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Perfil, tecnologias e formação de Bruno Oliveira Santos.",
};

export default function AboutPage() {
  return (
    <section className="viewport-page about-page">
      <Container>
        <div className="about-content max-w-4xl">
          <PageHeading title="Sobre" />
          <div className="about-intro text-muted">
            {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="about-details">
            <section aria-labelledby="technologies-title">
              <h2 id="technologies-title" className="about-label">Tecnologias</h2>
              <ul className="technology-list">
                {portfolio.technologyGroups.map((group) => (
                  <li key={group[0]}>{group.join(" · ")}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="education-title">
              <h2 id="education-title" className="about-label">Formação</h2>
              <ul className="education-list">
                {portfolio.education.map((education) => (
                  <li key={education.title}>
                    <p className="education-title font-heading font-semibold tracking-tight">
                      {education.title}
                    </p>
                    <p className="education-detail text-muted">{education.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="about-actions">
            <p className="text-sm text-muted">{portfolio.languages}</p>
            <a
              href={portfolio.resume}
              download="curriculo-bruno-oliveira-santos.pdf"
              className="resume-link inline-flex min-h-11 items-center justify-center gap-3 rounded border border-foreground px-5 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Ver currículo
              <ArrowUpRight className="size-4" />
              <span className="sr-only"> (baixar PDF)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
