import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harmonização Glútea — Dr. Roberto Chacur | Clínica Leger",
  description:
    "Mais contorno, mais projeção e bumbum liso, sem cirurgia. Técnicas avançadas realizadas pelo Dr. Roberto Chacur, referência internacional em contorno corporal.",
  keywords: [
    "harmonização glútea",
    "preenchimento glúteo",
    "GoldIncision",
    "Dr. Roberto Chacur",
    "Clínica Leger",
    "contorno corporal",
    "celulite",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
