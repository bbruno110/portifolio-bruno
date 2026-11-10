import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { portfolio } from "@/data/portfolio";
import { Background } from "@/components/background";
import "./globals.css";

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
          renderer="auto"
          color="#b6ff3b"
          secondaryColor="#e6ffc5"
          backgroundColor="#0a0a0a"
          opacity={0.6}

          waveHeight={1.65}
          wavelength={0.85}
          choppiness={0.8}
          speed={0.7}
          windAngle={0.65}
          noiseStrength={1.65}
          noiseScale={0.28}

          fog={0.18}
          cameraTilt={0.26}

          interactive={true}
          parallax={0.1}
          swell={1}
          swellRadius={8}
          clickRipples={false}

          density={1}
          particleSize={2.8}
          adaptiveQuality={true}
          maxFps={120}
          dpr={1.5}

          mobileOptions={{
            density: 0.75,
            particleSize: 3.2,
            cameraHeight: 3.5,
            cameraTilt: 0.32,
            perspective: 60,
            dpr: 1,
          }}
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
