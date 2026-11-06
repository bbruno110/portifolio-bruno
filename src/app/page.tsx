import Link from "next/link";
import { Container } from "@/components/container";
import { ArrowUpRight } from "@/components/icons";
import { portfolio } from "@/data/portfolio";

export default function HomePage() {
  return (
    <section aria-labelledby="home-title" className="flex items-center py-4">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-xs leading-relaxed font-medium tracking-[0.12em] text-accent uppercase md:mb-8 md:text-sm">
            {portfolio.role}
          </p>
          <h1
            id="home-title"
            className=" font-heading text-[clamp(2.5rem,12vw,3rem)] md:text-[clamp(3rem,8svh,5.5rem)] leading-[1.04] font-bold tracking-[-0.045em]"
          >
            Bruno<br className="sm:hidden" />{" "}Oliveira
            <br />
            Santos<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-[24rem] text-lg leading-relaxed text-muted md:max-w-none md:text-2xl">
            {portfolio.tagline}
          </p>
          <Link
            href="/projetos"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent/90 md:mt-10"
          >
            Ver projetos
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
