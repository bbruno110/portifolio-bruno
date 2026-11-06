import type { SVGProps } from "react";

// SVGs pequenos evitam adicionar uma biblioteca inteira apenas para dois ícones.
export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export function MenuIcon({ open, ...props }: SVGProps<SVGSVGElement> & { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 8h16M4 16h16" />}
    </svg>
  );
}
