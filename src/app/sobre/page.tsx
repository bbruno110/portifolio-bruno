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
    <section className="py-6 md:py-8">
      <Container>
        <div className="max-w-4xl">
          <PageHeading title="Sobre" />

          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted md:text-lg">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2 md:gap-12">
            <section aria-labelledby="technologies-title">
              <h2
                id="technologies-title"
                className="text-xs font-medium tracking-widest text-muted uppercase"
              >
                Tecnologias
              </h2>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed md:text-base">
                {portfolio.technologyGroups.map((group) => (
                  <li key={group[0]}>
                    {group.join(" · ")}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="education-title">
              <h2
                id="education-title"
                className="text-xs font-medium tracking-widest text-muted uppercase"
              >
                Formação
              </h2>

              <p className="mt-3 font-heading text-xl leading-tight font-semibold tracking-tight md:text-[22px]">
                {portfolio.education.title}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                {portfolio.education.detail}
              </p>

              <a
                href={portfolio.resume}
                download="curriculo-bruno-oliveira-santos.pdf"
                className="
                  mt-5 inline-flex min-h-11 items-center
                  justify-center gap-3 rounded
                  border border-foreground px-5 py-2.5
                  text-sm font-semibold transition-colors
                  hover:border-accent hover:text-accent
                "
              >
                Ver currículo
                <ArrowUpRight className="size-4" />
                <span className="sr-only"> (baixar PDF)</span>
              </a>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}