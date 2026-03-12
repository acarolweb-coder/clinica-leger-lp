"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP, CITIES } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

function LocationPin() {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M6 0C2.686 0 0 2.686 0 6c0 4.5 6 9 6 9s6-4.5 6-9c0-3.314-2.686-6-6-6Zm0 8.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[950px] bg-[#18191E] overflow-hidden">
      {/* Background Image — Dr. Chacur */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18191E]/90 via-[#18191E]/60 to-transparent md:from-[#18191E]/70 md:via-[#18191E]/30 md:to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18191E]/80 via-transparent to-[#18191E]/20" />
      </div>

      {/* Content — Left aligned */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-[320px] max-w-[1920px] mx-auto">
        {/* Top: Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="absolute top-20 md:top-24 left-6 md:left-12 lg:left-20 xl:left-[320px]"
        >
          <div className="inline-flex items-center bg-white/[0.07] border border-white/[0.46] rounded-full px-4 py-1.5">
            <span className="text-[11px] tracking-[0.12em] uppercase text-white/80 font-medium whitespace-nowrap">
              Harmonização Glútea
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-[520px] mt-16 md:mt-0">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            className="hero-title text-[clamp(2.25rem,5vw,3rem)] font-normal leading-[1.2] tracking-[-0.03em] mb-5"
          >
            Mais contorno, mais projeção e bumbum liso, sem cirurgia
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="text-[clamp(0.9375rem,2vw,1.1875rem)] text-white/70 font-normal leading-[1.55] mb-8"
          >
            Conheça as técnicas avançadas que tratam volume e celulite,
            realizadas pelo Dr. Roberto Chacur, médico referência internacional
            com duas décadas dedicadas ao contorno corporal
          </motion.p>

          {/* Cities */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-5 md:gap-7 opacity-[0.67] mb-10"
          >
            {CITIES.map((city, i) => (
              <div key={city} className="flex items-center gap-5 md:gap-7">
                {i > 0 && <div className="w-px h-4 bg-white/40" />}
                <div className="flex items-center gap-2">
                  <LocationPin />
                  <span className="text-[13px] text-white/65 tracking-wide">
                    {city}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button — Pill style with gradient and inner glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
          >
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white font-semibold text-[13px] md:text-sm px-8 md:px-10 py-4 md:py-[18px] rounded-full uppercase tracking-[0.15em] border border-[rgba(255,218,199,0.48)] shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98)] hover:shadow-[inset_0_0_4px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#B6A095] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18191E]"
            >
              <span className="relative">Descobrir se é para mim</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>

          {/* Sub-CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-[13px] text-white/[0.61] mt-5 tracking-wide"
          >
            Resultados reais de pacientes logo abaixo
          </motion.p>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/30 to-transparent" />
    </section>
  );
}
