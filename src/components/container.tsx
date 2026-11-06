import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  // 1.248px externos menos 24px de cada lado = até 1.200px de conteúdo.
  return (
    <div className={`mx-auto w-full max-w-[1248px] px-6 ${className}`}>
      {children}
    </div>
  );
}
