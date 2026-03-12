"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { WHATSAPP } from "@/lib/constants";

const painPoints = [
  "Mesmo treinando e cuidando do corpo, você sente que seu bumbum não reflete todo o esforço realizado",
  "Percebe falta de projeção ou contorno no bumbum",
  "Se incomoda com celulites profundas que impedem de usar certas roupas",
  "Identifica depressões laterais que quebram o formato do glúteo",
  "Sofre com flacidez ou textura irregular da pele",
  "Sente dificuldade de conquistar um contorno mais harmonioso",
];

export default function PainPoints() {
  return (
    <section className="relative bg-[#FFF4EE] py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B6A095]/10 rounded-full blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Pain Points */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#8C4821]/60 font-medium mb-6">
                <span className="w-8 h-px bg-[#8C4821]/30" />
                Identificação
              </span>
              <h2 className="text-3xl md:text-4xl font-extralight text-[#18191E] leading-[1.15] mb-8">
                Você se identifica com{" "}
                <span className="font-bold text-[#8C4821]">
                  alguma dessas situações?
                </span>
              </h2>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.08}>
              {painPoints.map((point, i) => (
                <StaggerItem key={i} distance={20}>
                  <div className="flex items-start gap-4 mb-5 group">
                    <span className="flex-shrink-0 w-6 h-6 border border-[#8C4821]/30 flex items-center justify-center mt-0.5 group-hover:bg-[#8C4821] group-hover:border-[#8C4821] transition-all duration-300">
                      <svg className="w-3 h-3 text-[#8C4821] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-sm text-[#433532] font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.4}>
              <div className="border-l-2 border-[#8C4821]/20 pl-5 mt-8 mb-8">
                <p className="text-sm text-[#433532]/80 font-light leading-[1.9]">
                  Foi justamente observando esses incômodos ao longo de mais de
                  20 anos dedicados ao contorno corporal que o Dr. Roberto Chacur
                  desenvolveu as técnicas capazes de tratar volume, formato e
                  textura da pele. Criador da{" "}
                  <strong className="text-[#8C4821] font-semibold">
                    GoldIncision
                  </strong>{" "}
                  e reconhecido internacionalmente por sua atuação na área.
                </p>
              </div>

              <a
                href={WHATSAPP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#8C4821] hover:bg-[#72311A] text-white font-semibold text-[11px] px-8 py-3.5 uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#8C4821] focus-visible:ring-offset-2"
              >
                Quero saber se sou candidata
              </a>
            </ScrollReveal>
          </div>

          {/* Right — Video Placeholder */}
          <ScrollReveal direction="right">
            <div className="relative aspect-[9/16] md:aspect-[3/4] bg-[#18191E] overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[#8C4821]/40 rounded-full flex items-center justify-center group-hover:border-[#8C4821] group-hover:scale-110 transition-all duration-500">
                  <svg className="w-6 h-6 text-[#8C4821] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/20 text-[10px] tracking-widest uppercase text-center">
                  Vídeo do procedimento
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
