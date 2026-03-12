"use client";

import ScrollReveal from "./ui/ScrollReveal";

const credentials = [
  { number: "20+", label: "anos de experiência" },
  { number: "2", label: "livros publicados" },
  { number: "Milhares", label: "de procedimentos realizados" },
];

export default function Doctor() {
  return (
    <section id="dr-chacur" className="relative bg-[#18191E] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — Photo Placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[3/4] bg-[#433532] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 text-xs tracking-widest uppercase">
                    Foto do Dr. Chacur
                  </span>
                </div>
              </div>
              {/* Frame decoration */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#8C4821]/20" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#8C4821]/20" />
            </div>
          </ScrollReveal>

          {/* Right — Bio */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#8C4821]/60 font-medium mb-6">
                <span className="w-8 h-px bg-[#8C4821]/30" />
                Especialista
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight text-white leading-[1.1] mb-2">
                Conheça o{" "}
                <span className="font-bold bg-gradient-to-r from-[#8C4821] via-[#B6A095] to-[#8C4821] bg-clip-text text-transparent">
                  Dr. Roberto Chacur
                </span>
              </h2>
              <p className="text-white/20 text-xs tracking-wider mb-8">
                CRM-SP 000000
              </p>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/[0.06]">
                {credentials.map((c, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#8C4821]">
                      {c.number}
                    </p>
                    <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">
                      {c.label}
                    </p>
                  </div>
                ))}
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
                    <div key={i} className="group relative aspect-[4/3] bg-[#433532] overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/10 text-[9px] tracking-widest uppercase text-center px-2">
                          {label}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#8C4821]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
