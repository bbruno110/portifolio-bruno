"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { TextLink } from "@/components/text-link";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  const isContactPage = usePathname() === "/contato";

  return (
    <footer className="shrink-0">
      <Container>
        <div className="flex flex-col items-center justify-between gap-2 border-t border-line py-6 text-sm md:flex-row md:gap-6">
          <small className="order-2 text-center text-sm text-muted md:order-1 md:text-left">
            © {portfolio.copyrightYear} {portfolio.name}
          </small>
          {!isContactPage && (
            <nav aria-label="Redes e contato" className="order-1 flex flex-wrap justify-center gap-x-6 md:order-2">
              <TextLink href={`mailto:${portfolio.email}`}>E-mail</TextLink>
              <TextLink href={portfolio.linkedin} external>LinkedIn</TextLink>
              <TextLink href={portfolio.github} external>GitHub</TextLink>
            </nav>
          )}
        </div>
      </Container>
    </footer>
  );
}
