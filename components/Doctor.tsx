"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { WHATSAPP } from "@/lib/constants";

const congressImages = [
  "/images/highlight-congresso.jpg",
  "/images/congresso-3.jpg",
  "/images/congresso-4.jpg",
];

const treinamentoImages = [
  "/images/highlight-treinamento.jpg",
  "/images/treinamento-2.jpg",
  "/images/treinamento-3.jpg",
  "/images/treinamento-4.jpg",
];

function ImageCarouselCard({
  images,
  label,
  caption,
  alt,
}: {
  images: string[];
  label: string;
  caption: string;
  alt: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  function goTo(index: number) {
    setActiveIndex(index);
  }

  function next() {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className="group relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-[#8C4821]/10">
      {/* All images stacked — crossfade via opacity */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0, zIndex: i === activeIndex ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : `${alt} ${i + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2]" />

      {/* Navigation arrows — visible on mobile, hover-reveal on desktop */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-[4] w-8 h-8 md:w-7 md:h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 active:bg-black/60 hover:bg-black/60 hover:text-white transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
        aria-label="Foto anterior"
      >
        <svg className="w-3.5 h-3.5 md:w-3 md:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-[4] w-8 h-8 md:w-7 md:h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 active:bg-black/60 hover:bg-black/60 hover:text-white transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
        aria-label="Próxima foto"
      >
        <svg className="w-3.5 h-3.5 md:w-3 md:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-[5] pointer-events-none">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium mb-1">
              {label}
            </p>
            <p className="text-[13px] text-white/50 font-light">
              {caption}
            </p>
          </div>

          {/* Dot indicators + counter */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="text-[10px] text-white/40 font-medium tabular-nums md:hidden">
              {activeIndex + 1}/{images.length}
            </span>
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "bg-white/90 scale-110"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top border accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8C4821]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />
    </div>
  );
}

export default function Doctor() {
  return (
    <section
      id="dr-chacur"
      className="relative bg-[#18191E] py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8C4821]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#8C4821]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative animated dividers */}
      <div className="divider-animated absolute top-0 left-0 right-0" />
      <div className="divider-animated absolute bottom-0 left-0 right-0" />

      <div className="max-w-[1328px] mx-auto px-6 relative">
        {/* Bento Grid — 50/50 with L-shape */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr_auto] gap-6 md:gap-8">
          {/* ─── Cell 1: Main doctor photo — tall, left, spans header + bio rows ─── */}
          <ScrollReveal
            direction="left"
            className="md:col-span-6 md:row-start-1 md:row-end-3 order-1"
          >
            <div className="relative group h-full">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full md:min-h-[580px] rounded-2xl overflow-hidden transition-all duration-700 group-hover:shadow-[0_24px_80px_rgba(140,72,33,0.2)]">
                <Image
                  src="/images/foto-doutor.png"
                  alt="Dr. Roberto Chacur — Especialista em Harmonização Glútea"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
                {/* Bottom gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191E]/70 via-[#18191E]/10 to-transparent" />
                {/* Hover warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8C4821]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Name overlay at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-gradient-to-r from-[#8C4821] to-transparent" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium">
                      Médico Cirurgião
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ─── Cell 2: Header + CRM — top right ─── */}
          <ScrollReveal className="md:col-span-6 md:row-start-1 order-2 flex flex-col justify-end">
            <span className="pill-badge text-white/80 mb-6 self-start">
              Conheça seu doutor
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold gradient-text-warm leading-[1.08] mb-5">
              Dr. Roberto Chacur
            </h2>

            {/* CRM credentials */}
            <div className="flex flex-col sm:flex-row gap-x-6 gap-y-1.5 pb-4 md:pb-6 border-b border-white/[0.08]">
              <span className="text-white/35 text-[11px] tracking-[0.2em] font-medium uppercase">
                CRMRJ 953687 &middot; RQE 24521
              </span>
              <span className="text-white/35 text-[11px] tracking-[0.2em] font-medium uppercase">
                CRMSP 124125 &middot; RQE 33433
              </span>
            </div>
          </ScrollReveal>

          {/* ─── Cell 3: Bio — below header, right side ─── */}
          <ScrollReveal delay={0.15} className="md:col-span-6 md:row-start-2 order-3">
            <div className="pt-3 md:pt-5 space-y-5">
              {/* First two paragraphs — intro */}
              <div className="space-y-4 text-sm text-white/60 font-light leading-[1.85]">
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
              </div>

              {/* Pull quote — GoldIncision paragraph highlighted */}
              <div className="relative pl-5 border-l-2 border-[#8C4821]/40">
                <p className="text-sm text-white/65 font-light leading-[1.85]">
                  Criador do método{" "}
                  <strong className="text-[#8C4821] font-semibold">
                    GoldIncision
                  </strong>
                  , reconhecido internacionalmente e premiado como melhor
                  tratamento corporal do mundo. Também é autor dos livros{" "}
                  <em className="text-[#B6A095]">
                    &ldquo;Ciência e Arte do Preenchimento&rdquo;
                  </em>{" "}
                  e{" "}
                  <em className="text-[#B6A095]">
                    &ldquo;Vitória Contra a Celulite&rdquo;
                  </em>
                  .
                </p>
              </div>

              {/* Last two paragraphs */}
              <div className="space-y-4 text-sm text-white/60 font-light leading-[1.85]">
                <p>
                  Já apresentou suas técnicas em congressos médicos
                  internacionais como{" "}
                  <span className="text-white/75">IMCAS Paris</span>,{" "}
                  <span className="text-white/75">AMWC</span> e{" "}
                  <span className="text-white/75">
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
            </div>
          </ScrollReveal>

          {/* ─── Cell 4: Highlight cards — full width bottom ─── */}
          <ScrollReveal delay={0.25} className="md:col-span-12 md:row-start-3 order-4 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
              {/* Congresso — carousel on hover */}
              <ImageCarouselCard
                images={congressImages}
                label="Congresso"
                caption="IMCAS Paris"
                alt="Dr. Roberto Chacur em congresso internacional"
              />

              {/* Treinamento — carousel on hover */}
              <ImageCarouselCard
                images={treinamentoImages}
                label="Treinamento médico"
                caption="Formação internacional"
                alt="Dr. Roberto Chacur em treinamento médico"
              />

              {/* Publicações — 2 livros lado a lado */}
              <div className="sm:col-span-1 group relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-[#8C4821]/10 bg-gradient-to-br from-[#2A2226] to-[#1E1A1C]">
                <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-5 px-6 md:px-10 py-4">
                  <div className="relative h-[75%] aspect-[3/4] rounded-sm overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-105">
                    <Image
                      src="/images/highlight-publicacoes.png"
                      alt="Livro Ciência e Arte do Preenchimento"
                      fill
                      sizes="120px"
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-[75%] aspect-[3/4] rounded-sm overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105">
                    <Image
                      src="/images/highlight-livro-2.jpg"
                      alt="Livro Vitória Contra a Celulite"
                      fill
                      sizes="120px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A1C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium mb-1 group-hover:text-white/80 transition-colors duration-500">
                    Publicações
                  </p>
                  <p className="text-[13px] text-white/50 font-light group-hover:text-white/80 transition-colors duration-500">
                    2 livros publicados
                  </p>
                </div>
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8C4821]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </ScrollReveal>

          {/* ─── Cell 5: CTA — full width bottom ─── */}
          <ScrollReveal delay={0.35} className="md:col-span-12 md:row-start-4 order-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 mt-2 border-t border-white/[0.08]">
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-lg">
                Agende uma avaliação personalizada com o{" "}
                <span className="text-white/70">Dr. Roberto Chacur</span> e
                descubra o melhor tratamento para o seu caso.
              </p>

              <a
                href={WHATSAPP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-premium inline-flex w-full md:w-auto justify-center items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-white bg-gradient-to-r from-[#72311A] to-[#8C4821] hover:from-[#8C4821] hover:to-[#A0562F] border border-[rgba(255,218,199,0.2)] hover:border-[rgba(255,218,199,0.48)] px-7 md:px-10 py-[22px] rounded-full transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] focus-visible:ring-2 focus-visible:ring-[#8C4821] group/cta flex-shrink-0 self-start md:self-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar avaliação
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
