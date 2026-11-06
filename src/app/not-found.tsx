import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeading } from "@/components/page-heading";

export default function NotFound() {
  return (
    <section className="flex items-center py-16">
      <Container>
        <p className="mb-5 font-mono text-sm text-accent">404</p>
        <PageHeading title="Página não encontrada" />
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded bg-accent px-6 py-3 font-semibold text-background hover:bg-accent/90">
          Voltar ao início
        </Link>
      </Container>
    </section>
  );
}
