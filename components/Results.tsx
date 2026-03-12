"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import { WHATSAPP } from "@/lib/constants";

const RESULTS = [
  { id: 1, src: "/images/result-1.png", label: "Projeção e contorno" },
  { id: 2, src: "/images/result-2.png", label: "Projeção e volume" },
  { id: 3, src: "/images/result-3.png", label: "Contorno lateral" },
  { id: 4, src: "/images/result-4.png", label: "Projeção e contorno" },
  { id: 5, src: "/images/result-5.png", label: "Tratamento de celulite" },
  { id: 6, src: "/images/result-6.png", label: "Contorno lateral" },
  { id: 7, src: "/images/result-7.png", label: "Projeção e volume" },
  { id: 8, src: "/images/result-8.png", label: "Contorno lateral" },
  { id: 9, src: "/images/result-9.png", label: "Projeção e volume" },
];

export default function Results() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0) return RESULTS.length - 1;
        if (next >= RESULTS.length) return 0;
        return next;
      });
    },
    [],
  );

  const goTo = useCallback((index: number) => {
    setCurrent((prev) => {
      setDirection(index > prev ? 1 : -1);
      return index;
    });
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section
      id="resultados"
      className="relative bg-[#18191E] py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 divider-animated" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8C4821]/[0.03] rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#72311A]/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal className="text-center mb-14">
          <span className="pill-badge text-white/80 mb-6">
            Antes e depois
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-white leading-[1.1]">
            Resultados reais{" "}
            <span className="font-bold gradient-text-warm">
              de pacientes da Clínica Leger
            </span>
          </h2>
          <p className="text-white/30 text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Cada resultado é planejado respeitando a anatomia, as proporções do
            corpo e o desejo de cada paciente.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal className="mb-8">
          <div className="relative max-w-4xl mx-auto">
            {/* Before / After labels */}
            <div className="flex justify-between px-4 md:px-8 mb-3">
              <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-medium">
                Antes
              </span>
              <span className="text-[#8C4821] text-[10px] tracking-[0.25em] uppercase font-medium">
                Depois
              </span>
            </div>

            {/* Image container */}
            <div className="relative aspect-[43/20] rounded-2xl overflow-hidden bg-[#18191E]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={RESULTS[current].src}
                    alt={`Resultado ${current + 1} - ${RESULTS[current].label}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-contain object-center"
                    priority={current === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/50 hover:text-white transition-all duration-300 z-10 cursor-pointer"
                aria-label="Resultado anterior"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/50 hover:text-white transition-all duration-300 z-10 cursor-pointer"
                aria-label="Próximo resultado"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Counter */}
              <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full z-10">
                <span className="text-white/70 text-[11px] font-medium">
                  {String(current + 1).padStart(2, "0")} / {String(RESULTS.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Result label */}
            <div className="text-center mt-3">
              <p className="text-white/30 text-xs tracking-wide">
                {RESULTS[current].label}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Thumbnail strip */}
        <ScrollReveal className="mb-14">
          <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
            {RESULTS.map((result, i) => (
              <button
                key={result.id}
                onClick={() => goTo(i)}
                className={`relative w-20 h-10 md:w-24 md:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C4821] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18191E] ${
                  current === i
                    ? "border-[#8C4821] shadow-lg shadow-[#8C4821]/30"
                    : "border-white/10 hover:border-white/25 opacity-50 hover:opacity-80"
                }`}
                aria-label={`Ver resultado ${i + 1}`}
              >
                <Image
                  src={result.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ANVISA Seal */}
        <ScrollReveal className="flex justify-center mb-10">
          <div className="flex items-center gap-3 px-6 py-3.5 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8C4821]/10 border border-[#8C4821]/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#8C4821]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-white/35 text-[11px] font-light leading-snug">
              Procedimentos realizados com produtos aprovados pela{" "}
              <strong className="text-white/55 font-medium">ANVISA</strong> e
              seguindo rigorosos protocolos médicos de segurança.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-premium inline-flex items-center gap-3 border border-[rgba(255,218,199,0.3)] bg-transparent hover:bg-gradient-to-r hover:from-[#72311A] hover:to-[#8C4821] text-[#8C4821] hover:text-white px-8 py-3.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-500 hover:border-[rgba(255,218,199,0.48)] hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.2)] focus-visible:ring-2 focus-visible:ring-[#8C4821] group"
          >
            Entender como funciona
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </ScrollReveal>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 divider-animated" />
    </section>
  );
}
