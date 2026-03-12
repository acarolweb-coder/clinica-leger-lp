"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import CopperLine from "./ui/CopperLine";
import { WHATSAPP } from "@/lib/constants";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "Contorno e projeção",
    description: "em harmonia perfeita",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "GoldIncision",
    description: "Melhora da textura da pele e da celulite",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Resultado natural",
    description: "totalmente personalizado",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Realizados em consultório",
    description: "com rápida recuperação",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#FFF4EE] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {benefits.map((b, i) => (
            <StaggerItem key={i}>
              <div className="group text-center p-6 md:p-8 rounded-sm hover:bg-white/60 transition-all duration-500">
                <div className="text-[#8C4821] mb-4 flex justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  {b.icon}
                </div>
                <h3 className="text-sm font-bold text-[#18191E] mb-1">
                  {b.title}
                </h3>
                <p className="text-xs text-[#B6A095] font-light leading-relaxed">
                  {b.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <CopperLine className="mb-10" />

        <ScrollReveal className="text-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8C4821] hover:text-[#72311A] transition-colors group"
          >
            Descobrir a técnica ideal para mim
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
