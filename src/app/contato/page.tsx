import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeading } from "@/components/page-heading";
import { ArrowUpRight } from "@/components/icons";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Bruno Oliveira Santos por e-mail, LinkedIn ou GitHub.",
};

export default function ContactPage() {
  const links = [
    { label: "E-mail", value: portfolio.email, href: `mailto:${portfolio.email}`, external: false },
    { label: "LinkedIn", value: portfolio.name, href: portfolio.linkedin, external: true },
    { label: "GitHub", value: portfolio.githubUsername, href: portfolio.github, external: true },
  ];

  return (
    <section className="flex items-center py-6 md:py-8">
      <Container>
        <PageHeading title="Vamos conversar" subtitle="Oportunidades, projetos e novas conexões." />
        <ul className="mt-6 max-w-3xl md:mt-8">
          {links.map((link, index) => (
            <li key={link.label} className={index < links.length - 1 ? "border-b border-line" : ""}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group grid  grid-cols-[minmax(0,1fr)_24px]  items-center gap-x-3 gap-y-1  rounded-sm py-4  md:grid-cols-[112px_minmax(0,1fr)_24px]  md:gap-x-4 md:py-5">
                <span className="text-sm text-muted md:text-base">{link.label}</span>
                <span className="col-start-1 row-start-2 min-w-0  font-heading text-base leading-snug  font-semibold tracking-tight break-words  transition-colors group-hover:text-accent  md:col-start-2 md:row-start-1 md:text-[22px]">
                  {link.value}
                </span>
                <ArrowUpRight className="col-start-2 row-span-2 row-start-1 size-6 text-accent md:col-start-3 md:row-span-1" />
                {link.external && <span className="sr-only"> (abre em nova aba)</span>}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
