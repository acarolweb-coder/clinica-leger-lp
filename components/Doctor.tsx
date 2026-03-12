"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

const credentials = [
  { number: "20+", label: "anos de experiência" },
  { number: "2", label: "livros publicados" },
  { number: "Milhares", label: "de procedimentos realizados" },
];

export default function Doctor() {
  return (
    <section id="dr-chacur" className="relative bg-[#18191E] py-24 md:py-32 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8C4821]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#8C4821]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative animated dividers */}
      <div className="divider-animated absolute top-0 left-0 right-0" />
      <div className="divider-animated absolute bottom-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left -- Photo Placeholder */}
          <ScrollReveal direction="left">
            <div className="relative group">
              <div className="aspect-[3/4] bg-[#433532] rounded-2xl overflow-hidden transition-all duration-700 group-hover:shadow-[0_20px_80px_rgba(140,72,33,0.15)]">
                <Image
                  src="/images/doctor-portrait.png"
                  alt="Dr. Roberto Chacur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {/* Hover overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8C4821]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              {/* Frame decoration -- copper gradient corners */}
              <div
                className="absolute -top-3 -left-3 w-24 h-24 rounded-tl-xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                style={{
                  borderTop: "2px solid transparent",
                  borderLeft: "2px solid transparent",
                  borderImage: "linear-gradient(135deg, #8C4821, #B6A095, #8C4821) 1",
                  borderImageSlice: 1,
                }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-br-xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                style={{
                  borderBottom: "2px solid transparent",
                  borderRight: "2px solid transparent",
                  borderImage: "linear-gradient(315deg, #8C4821, #B6A095, #8C4821) 1",
                  borderImageSlice: 1,
                }}
              />
              {/* Subtle corner glow on hover */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#8C4821]/[0.06] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#8C4821]/[0.06] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right -- Bio */}
          <div>
            <ScrollReveal>
              <span className="pill-badge text-white/80 mb-6">
                Especialista
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight text-white leading-[1.1] mb-2">
                Conheça o{" "}
                <span className="font-bold gradient-text-warm">
                  Dr. Roberto Chacur
                </span>
              </h2>
              <p className="text-white/20 text-xs tracking-wider mb-8">
                CRM-SP 000000
              </p>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 relative">
                {credentials.map((c, i) => (
                  <div key={i} className="text-center group/stat">
                    <p className="text-2xl md:text-3xl font-bold gradient-text-warm transition-transform duration-300 group-hover/stat:scale-105">
                      {c.number}
                    </p>
                    <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">
                      {c.label}
                    </p>
                  </div>
                ))}
                {/* Animated divider under credentials */}
                <div className="divider-animated absolute bottom-0 left-0 right-0" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-sm text-white/50 font-light leading-[1.9]">
                <p>
                  Dr. Roberto Chacur é médico cirurgião e uma das principais
                  referências internacionais em harmonização glútea e tratamento
                  da celulite.
                </p>
                <p>
                  Há mais de 20 anos dedica-se exclusivamente à pesquisa e
                  realização de preenchimento facial e corporal, além do
                  desenvolvimento de técnicas avançadas para contorno corporal.
                </p>
                <p>
                  Criador do método{" "}
                  <strong className="text-[#8C4821] font-semibold">
                    GoldIncision
                  </strong>
                  , reconhecido internacionalmente e premiado como melhor
                  tratamento corporal do mundo. Também é autor dos livros{" "}
                  <em className="text-[#B6A095]/70">
                    &ldquo;Ciência e Arte do Preenchimento&rdquo;
                  </em>{" "}
                  e{" "}
                  <em className="text-[#B6A095]/70">
                    &ldquo;Vitória Contra a Celulite&rdquo;
                  </em>
                  .
                </p>
                <p>
                  Já apresentou suas técnicas em congressos médicos
                  internacionais como{" "}
                  <span className="text-white/70">IMCAS Paris</span>,{" "}
                  <span className="text-white/70">AMWC</span> e{" "}
                  <span className="text-white/70">
                    Congresso Mundial de Dermatologia
                  </span>
                  , além de formar médicos de diversos países em seus
                  treinamentos de harmonização glútea.
                </p>
                <p>
                  Hoje coordena a equipe médica da{" "}
                  <strong className="text-[#8C4821] font-semibold">
                    Clínica Leger
                  </strong>
                  , dedicada a tratamentos avançados de contorno corporal e
                  qualidade da pele.
                </p>
              </div>
            </ScrollReveal>

            {/* Photo row */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-3 gap-3 mt-8">
                {["Congresso", "Treinamento médico", "Publicações"].map(
                  (label, i) => (
                    <div
                      key={i}
                      className="card-lift group relative aspect-[4/3] bg-[#433532] rounded-xl overflow-hidden cursor-pointer"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/10 text-[9px] tracking-widest uppercase text-center px-2 transition-colors duration-500 group-hover:text-white/20">
                          {label}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#8C4821]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Top border accent on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8C4821]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ),
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
