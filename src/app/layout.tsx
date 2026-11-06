import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { portfolio } from "@/data/portfolio";
import { Background } from "@/components/background";
import "./globals.css";

// Fontes incluídas no projeto: o build não precisa consultar Google Fonts.
const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-variable.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: {
    default: `${portfolio.name} | Full Stack / Back-end`,
    template: `%s | ${portfolio.name}`,
  },
  description: "Portfólio de Bruno Oliveira Santos. Aplicações web, mobile e integrações com Node.js, TypeScript, React, Python e Oracle PL/SQL.",
  applicationName: "Bruno — Portfólio",
  authors: [{ name: portfolio.name }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="relative isolate flex min-h-svh flex-col antialiased">
        <Background
          colors={["#6e6e80", "#ffffff"]}
          backgroundColor="#0a0a0a"

          waveHeight={1}
          wavelength={1}
          choppiness={0.8}
          speed={1}
          windAngle={0}

          horizon={0.1}
          fog={1}
          glow={0.7}
          foam={1}

          interactive={true}
          eventSource="window"
          parallax={1}
          swell={1}
          swellRadius={0.9}
          clickRipples={true}

          density={1}
          particleSize={1}
          adaptiveQuality={true}
          maxFps={30}
          dpr={1.5}
        />

        <a
          href="#conteudo"
          className="sr-only z-50 rounded bg-accent px-4 py-3 font-semibold text-background focus:fixed focus:top-4 focus:left-6 focus:not-sr-only"
        >
          Pular para o conteúdo
        </a>

        <SiteHeader />

        <main
          id="conteudo"
          tabIndex={-1}
          className="grid flex-1 outline-none"
        >
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
