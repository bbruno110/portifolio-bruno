"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";
import { MenuIcon } from "@/components/icons";
import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Se a rota mudar, o menu já passa a estar fechado, sem sincronizar estado em um efeito.
  const isOpen = openForPath === pathname;
  const visibleLinks = navigation.filter((item) => pathname !== "/" || item.href !== "/");

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenForPath(null);
        toggleRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpenForPath(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className="relative z-20 shrink-0">
      <Container>
        <div className="site-header-bar flex h-20 items-center justify-between border-b border-line md:h-24">
          <Link
            href="/"
            aria-label="Bruno — página inicial"
            onClick={() => setOpenForPath(null)}
            className="rounded-sm font-heading text-[28px] leading-none font-bold tracking-[-0.045em] md:text-[32px]"
          >
            bruno<span className="text-accent" aria-hidden="true">.</span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
            {visibleLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border-b text-base transition-colors hover:text-accent ${
                  pathname === item.href
                    ? "border-accent text-accent"
                    : "border-transparent text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setOpenForPath(isOpen ? null : pathname)}
            className="inline-flex size-11 items-center justify-center rounded-sm transition-colors hover:text-accent md:hidden"
          >
            <MenuIcon open={isOpen} className="size-7" />
          </button>
        </div>
      </Container>

      {/* Disclosure de navegação: segue a ordem normal de Tab; Escape fecha. */}
      <nav
        id="mobile-navigation"
        aria-label="Navegação para celular"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-line bg-background md:hidden"
      >
        <Container className="py-4">
          {visibleLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpenForPath(null)}
              className={`flex min-h-12 items-center rounded-sm font-heading text-xl ${
                pathname === item.href ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}
