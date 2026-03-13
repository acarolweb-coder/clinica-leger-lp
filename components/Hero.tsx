"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP, CITIES } from "@/lib/constants";
import FloatingParticles from "./ui/FloatingParticles";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

function LocationPin() {
  return (
    <svg
      width="10"
      height="12"
      viewBox="0 0 12 15"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M6 0C2.686 0 0 2.686 0 6c0 4.5 6 9 6 9s6-4.5 6-9c0-3.314-2.686-6-6-6Zm0 8.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
        fill="#8C4821"
      />
    </svg>
  );
}


export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:h-[930px] bg-[#18191E] overflow-hidden">
      {/* Background Image — Dr. Chacur */}
      <div className="absolute inset-0">
        {/* Mobile: imagem específica com gradiente embutido */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-mobile.png"
          alt=""
          className="md:hidden absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Desktop: imagem original com gradientes CSS */}
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="hidden md:block object-cover object-center"
          priority
          quality={90}
        />
        {/* Desktop: gradient lateral para legibilidade */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#18191E]/70 via-[#18191E]/30 to-transparent" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[#18191E]/60 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={15} />

      {/* Content */}
      <div className="relative h-full flex flex-col md:justify-center max-w-[1328px] mx-auto px-5 md:px-6 w-full pt-[42svh] md:pt-0 pb-[60px] md:pb-0">
        {/* Main Content */}
        <div className="max-w-[540px]">
          {/* Mobile: Logo + Badge row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center justify-between mb-4 md:hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/logo.svg"
              alt="Dr. Chacur"
              width={140}
              height={30}
              className=""
            />
            <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.46] rounded-full px-4 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span className="text-[8px] tracking-[0.2em] uppercase text-white/80 font-medium">Harmonização Glútea</span>
            </div>
          </motion.div>

          {/* Mobile separator — full width */}
          <div className="h-px bg-white/10 mb-6 md:hidden -mx-5" />

          {/* Desktop: Badge only */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease }}
            className="mb-5 hidden md:block"
          >
            <div className="badge-glass text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C4821] animate-pulse" />
              Harmonização Glútea
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 1, ease }}
            className="gradient-text-animated text-[32px] md:text-[clamp(2.25rem,5vw,3.25rem)] font-normal leading-[1.21] md:leading-[1.15] tracking-[-1.2px] md:tracking-[-0.03em] mb-5 md:mb-6"
          >
            Mais contorno, mais projeção e bumbum liso,{" "}
            <span className="md:font-bold">sem cirurgia</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="text-[15.5px] md:text-[clamp(0.9375rem,2vw,1.125rem)] text-white/70 md:text-white/65 font-light leading-[1.55] md:leading-[1.65] mb-6 md:mb-8 max-w-[480px]"
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
            className="flex items-center gap-[23px] md:gap-7 mb-8 md:mb-10 opacity-[0.67] md:opacity-100"
          >
            {CITIES.map((city, i) => (
              <div key={city} className="flex items-center gap-5 md:gap-7">
                {i > 0 && <div className="w-px h-3 bg-white/40" />}
                <div className="flex items-center gap-2 text-white">
                  <LocationPin />
                  <span className="text-[9px] md:text-[13px] tracking-wide opacity-65 whitespace-nowrap">
                    {city}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button — full-width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
          >
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-premium group relative flex md:inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white font-semibold text-[13px] md:text-sm px-8 md:px-12 py-[22px] md:py-[25px] rounded-full uppercase tracking-[0.15em] border border-[rgba(255,218,199,0.48)] shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_4px_24px_rgba(140,72,33,0.25)] hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_40px_rgba(140,72,33,0.4)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#B6A095] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18191E]"
            >
              <span className="relative">Descobrir se é para mim</span>
              <svg
                width="18"
                height="18"
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

          {/* Sub-CTA — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="hidden md:flex items-center gap-3 mt-6"
          >
            <div className="flex -space-x-2">
              {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full border-2 border-[#18191E] object-cover"
                />
              ))}
            </div>
            <p className="text-[12px] text-white/40 tracking-wide">
              Resultados reais de pacientes logo abaixo
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative animated line */}
      <div className="absolute bottom-0 left-0 right-0 divider-animated" />
    </section>
  );
}
