"use client";

import Image from "next/image";
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
    <section className="relative bg-[#FFF4EE] py-24 md:py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B6A095]/10 rounded-full blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/10 to-transparent" />

      <div className="max-w-[1328px] mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Pain Points */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-[2.75rem] font-extralight text-[#18191E] leading-[1.15] mb-8">
                Você se identifica com{" "}
                <span className="font-bold text-[#8C4821]">
                  alguma dessas situações?
                </span>
              </h2>
            </ScrollReveal>

            {/* Melhoria 1: Numeração editorial ao invés de checkmarks */}
            <StaggerContainer staggerDelay={0.08}>
              {painPoints.map((point, i) => (
                <StaggerItem key={i} distance={20}>
                  <div className="flex items-start gap-4 mb-5 group cursor-default">
                    <span className="flex-shrink-0 text-base font-semibold text-[#8C4821]/30 group-hover:text-[#8C4821] transition-colors duration-300 mt-0.5 w-6 text-right tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Melhoria 5: Hover com cor ao invés de translate-x */}
                    <p className="text-sm text-[#433532] font-light leading-relaxed group-hover:text-[#8C4821] transition-colors duration-300">
                      {point}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.4}>
              <div className="relative pl-5 mt-8 mb-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-[#72311A] to-[#8C4821]" />
                <p className="text-sm text-[#433532]/80 font-light leading-[1.9]">
                  Foi justamente observando esses incômodos ao longo de mais de
                  20 anos dedicados ao contorno corporal que o Dr. Roberto Chacur
                  desenvolveu as técnicas capazes de tratar volume, formato e
                  textura da pele. Criador da{" "}
                  <strong className="text-[#8C4821] font-semibold">
                    GoldIncision
                  </strong>{" "}
                  e reconhecido internacionalmente por sua atuação na área, o
                  Dr. Chacur já realizou milhares de tratamentos
                  personalizados, ajudando pacientes a conquistar um bumbum
                  mais harmônico, natural e proporcional ao corpo.
                </p>
              </div>

              <a
                href={WHATSAPP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-premium inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-white bg-gradient-to-r from-[#72311A] to-[#8C4821] hover:from-[#8C4821] hover:to-[#A0562F] border border-[rgba(255,218,199,0.2)] hover:border-[rgba(255,218,199,0.48)] px-10 py-[25px] rounded-full transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] focus-visible:ring-2 focus-visible:ring-[#8C4821] group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quero saber se sou candidata
              </a>
            </ScrollReveal>
          </div>

          {/* Right — Bento Grid (vídeo + stats) */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-3">
              {/* Video card — span full width */}
              <div className="col-span-2 card-lift relative aspect-[4/3] md:aspect-[3/4] bg-[#18191E] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/clinica-optimized.jpg"
                  alt="Interior da Clínica Leger"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191E] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-white/90 ml-1 drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/30 text-[10px] tracking-widest uppercase text-center">
                    Vídeo do procedimento
                  </p>
                </div>
              </div>

              {/* Mini stat cards */}
              <div className="bg-[#8C4821]/[0.05] border border-[#8C4821]/10 rounded-xl p-4 md:p-5 text-center group hover:border-[#8C4821]/20 transition-colors duration-300">
                <span className="block text-xl md:text-2xl font-bold text-[#8C4821] mb-1">
                  +5.000
                </span>
                <span className="text-[10px] md:text-xs text-[#433532]/60 font-light uppercase tracking-wider">
                  Tratamentos
                </span>
              </div>
              <div className="bg-[#8C4821]/[0.05] border border-[#8C4821]/10 rounded-xl p-4 md:p-5 text-center group hover:border-[#8C4821]/20 transition-colors duration-300">
                <span className="block text-xl md:text-2xl font-bold text-[#8C4821] mb-1">
                  20+
                </span>
                <span className="text-[10px] md:text-xs text-[#433532]/60 font-light uppercase tracking-wider">
                  Anos de experiência
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
