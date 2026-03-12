"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import CopperLine from "./ui/CopperLine";
import { WHATSAPP } from "@/lib/constants";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Contorno e projeção",
    description: "em harmonia perfeita",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
