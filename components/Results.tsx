"use client";

import { useRef, useEffect, useState, useCallback } from "react";
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

// Triple the items for seamless infinite scroll
const LOOP_ITEMS = [...RESULTS, ...RESULTS, ...RESULTS];

export default function Results() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const speedRef = useRef(0.5);
  const pausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  // Card width + gap
  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 516;
    return window.innerWidth < 768 ? 376 : 516;
  }, []);

  // Total width of one set
  const getSetWidth = useCallback(() => {
    return getCardWidth() * RESULTS.length;
  }, [getCardWidth]);

  // Animate loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Start at the middle set
    posRef.current = getSetWidth();

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speedRef.current;

        // Reset to middle set when we've scrolled past it
        const setWidth = getSetWidth();
        if (posRef.current >= setWidth * 2) {
          posRef.current -= setWidth;
        }
        if (posRef.current <= 0) {
          posRef.current += setWidth;
        }
      }

      track.style.transform = `translateX(${-posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [getSetWidth]);

  const handlePause = () => {
    pausedRef.current = true;
    setIsPaused(true);
  };

  const handleResume = () => {
    pausedRef.current = false;
    setIsPaused(false);
  };

  const slide = (dir: number) => {
    const cardW = getCardWidth();
    const target = posRef.current + dir * cardW;
    const start = posRef.current;
    const duration = 400;
    let startTime: number | null = null;

    // Temporarily pause auto-scroll
    pausedRef.current = true;
    setIsPaused(true);

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      posRef.current = start + (target - start) * easeOut(progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Resume auto-scroll after a short pause
        setTimeout(() => {
          pausedRef.current = false;
          setIsPaused(false);
        }, 2000);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section
      id="resultados"
      className="relative bg-[#18191E] py-24 md:py-32 overflow-hidden"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 divider-animated" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8C4821]/[0.03] rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#72311A]/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-[1328px] mx-auto relative px-6">
        <ScrollReveal className="text-center mb-8">
          <span className="pill-badge text-white/80 mb-6">
            Antes e depois
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-light text-white leading-[1.3] tracking-tight max-w-xl mx-auto">
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
      </div>

      {/* Full-width continuous carousel with arrows */}
      <ScrollReveal className="mb-10">
        <div
          className="relative w-full"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          {/* Track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-4 will-change-transform"
              style={{ width: "max-content" }}
            >
              {LOOP_ITEMS.map((result, i) => (
                <div
                  key={`${result.id}-${i}`}
                  className="flex-shrink-0 w-[360px] md:w-[500px] rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[43/20]">
                    <Image
                      src={result.src}
                      alt={`Resultado ${result.id} - ${result.label}`}
                      fill
                      sizes="(max-width: 768px) 360px, 500px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow left */}
          <button
            onClick={() => slide(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/60 hover:text-white transition-all duration-300 z-10 cursor-pointer"
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

          {/* Arrow right */}
          <button
            onClick={() => slide(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/60 hover:text-white transition-all duration-300 z-10 cursor-pointer"
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
        </div>
      </ScrollReveal>

      <div className="max-w-[1328px] mx-auto relative px-6">
        {/* ANVISA Seal */}
        <ScrollReveal className="flex justify-center mb-10">
          <div className="flex items-center gap-4 max-w-lg">
            <Image
              src="/images/logo-anvisa2.png"
              alt="ANVISA"
              width={48}
              height={48}
              className="flex-shrink-0 opacity-50"
            />
            <p className="text-white/30 text-xs font-light leading-relaxed">
              Procedimentos realizados com produtos aprovados pela{" "}
              <strong className="text-white/50 font-medium">ANVISA</strong> e
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
            className="cta-premium inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-white bg-gradient-to-r from-[#72311A] to-[#8C4821] hover:from-[#8C4821] hover:to-[#A0562F] border border-[rgba(255,218,199,0.2)] hover:border-[rgba(255,218,199,0.48)] px-10 py-[25px] rounded-full transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] focus-visible:ring-2 focus-visible:ring-[#8C4821] group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Entender como funciona
          </a>
        </ScrollReveal>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 divider-animated" />
    </section>
  );
}
