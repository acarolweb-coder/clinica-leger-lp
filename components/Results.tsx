"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { WHATSAPP } from "@/lib/constants";

export default function Results() {
  return (
    <section id="resultados" className="relative bg-[#18191E] py-24 md:py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8C4821]/[0.03] rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#8C4821]/60 font-medium mb-6">
            <span className="w-8 h-px bg-[#8C4821]/30" />
            Antes e depois
            <span className="w-8 h-px bg-[#8C4821]/30" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-white leading-[1.1]">
            Resultados reais{" "}
            <span className="font-bold bg-gradient-to-r from-[#8C4821] via-[#B6A095] to-[#8C4821] bg-clip-text text-transparent">
              da Clínica Leger
            </span>
          </h2>
          <p className="text-white/30 text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Cada resultado é planejado respeitando a anatomia, as proporções do
            corpo e o desejo de cada paciente.
          </p>
        </ScrollReveal>

        {/* Gallery Grid — placeholders */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <StaggerItem key={i}>
              <div className="group relative aspect-[3/4] bg-[#433532] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 text-xs tracking-widest uppercase">
                    Resultado {i + 1}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#8C4821]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ANVISA Seal */}
        <ScrollReveal className="flex justify-center mb-10">
          <div className="flex items-center gap-3 px-6 py-3 border border-white/[0.06] rounded-sm">
            <svg className="w-5 h-5 text-[#8C4821]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-white/30 text-[11px] font-light leading-snug">
              Procedimentos realizados com produtos aprovados pela{" "}
              <strong className="text-white/50 font-medium">ANVISA</strong> e seguindo
              rigorosos protocolos médicos de segurança.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#8C4821]/40 text-[#8C4821] hover:bg-[#8C4821] hover:text-white px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#8C4821]"
          >
            Entender como funciona
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
