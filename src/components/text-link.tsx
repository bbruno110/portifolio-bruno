import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/icons";

export function TextLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-11 items-center gap-1.5 rounded-sm text-muted transition-colors hover:text-accent ${className}`}
    >
      {children}
      <ArrowUpRight className="size-4 shrink-0" />
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
