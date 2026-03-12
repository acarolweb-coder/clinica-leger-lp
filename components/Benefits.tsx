"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { WHATSAPP } from "@/lib/constants";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Contorno e projeção",
    description: "em harmonia perfeita",
    num: "01",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "GoldIncision",
    description: "Melhora da textura da pele e da celulite",
    num: "02",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Resultado natural",
    description: "totalmente personalizado",
    num: "03",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Realizados em consultório",
    description: "com rápida recuperação",
    num: "04",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#FFF4EE] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#18191E] leading-[1.15] tracking-tight">
            Tudo o que um bumbum harmonioso precisa,{" "}
            <span className="font-bold text-[#8C4821]">
              em um único planejamento.
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
          {benefits.map((b, i) => (
            <StaggerItem key={i}>
              <div className="card-lift group text-center p-6 md:p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#B6A095]/10 hover:bg-white hover:border-[#8C4821]/20 transition-all duration-500 relative overflow-hidden">
                {/* Background number */}
                <span className="absolute top-3 right-4 text-5xl font-black text-[#8C4821]/[0.03] group-hover:text-[#8C4821]/[0.06] transition-colors duration-500 select-none">
                  {b.num}
                </span>

                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#8C4821]/[0.08] to-[#8C4821]/[0.02] border border-[#8C4821]/10 flex items-center justify-center text-[#8C4821] group-hover:from-[#8C4821]/15 group-hover:to-[#8C4821]/[0.05] group-hover:border-[#8C4821]/25 group-hover:scale-110 transition-all duration-500">
                  {b.icon}
                </div>
                <h3 className="text-sm font-bold text-[#18191E] mb-1.5 relative">
                  {b.title}
                </h3>
                <p className="text-xs text-[#B6A095] font-light leading-relaxed relative">
                  {b.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#72311A] to-[#8C4821] group-hover:w-12 transition-all duration-500 rounded-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-premium inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8C4821] hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-[#72311A] hover:to-[#8C4821] border border-[#8C4821]/20 hover:border-[rgba(255,218,199,0.48)] px-6 py-2.5 rounded-full transition-all duration-500 group"
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
