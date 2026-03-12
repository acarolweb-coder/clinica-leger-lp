"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP, CITIES } from "@/lib/constants";
import FloatingParticles from "./ui/FloatingParticles";

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

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
        {/* Premium layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18191E]/95 via-[#18191E]/65 to-transparent md:from-[#18191E]/80 md:via-[#18191E]/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18191E]/90 via-transparent to-[#18191E]/30" />
        {/* Warm radial glow behind content */}
        <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[600px] h-[600px] bg-[#8C4821]/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={15} />

      {/* Content — Left aligned */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-[320px] max-w-[1920px] mx-auto">
        {/* Top: Glass Badge with pulse */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="absolute top-20 md:top-24 left-6 md:left-12 lg:left-20 xl:left-[320px]"
        >
          <div className="badge-glass text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C4821] animate-pulse" />
            Harmonização Glútea
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-[540px] mt-16 md:mt-0">
          {/* Heading with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 1, ease }}
            className="gradient-text-animated text-[clamp(2.25rem,5vw,3.25rem)] font-normal leading-[1.15] tracking-[-0.03em] mb-6"
          >
            Mais contorno, mais projeção e bumbum liso,{" "}
            <strong className="font-bold">sem cirurgia</strong>
          </motion.h1>

          {/* Subtitle with better contrast */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="text-[clamp(0.9375rem,2vw,1.125rem)] text-white/65 font-light leading-[1.65] mb-8 max-w-[480px]"
          >
            Conheça as técnicas avançadas que tratam volume e celulite,
            realizadas pelo Dr. Roberto Chacur, médico referência internacional
            com duas décadas dedicadas ao contorno corporal
          </motion.p>

          {/* Cities with copper dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-5 md:gap-7 mb-10"
          >
            {CITIES.map((city, i) => (
              <div key={city} className="flex items-center gap-5 md:gap-7">
                {i > 0 && <div className="w-1 h-1 rounded-full bg-[#8C4821]/50" />}
                <div className="flex items-center gap-2 text-white/50">
                  <LocationPin />
                  <span className="text-[13px] tracking-wide">
                    {city}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Premium CTA Button — with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
          >
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-premium group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white font-semibold text-[13px] md:text-sm px-8 md:px-10 py-4 md:py-[18px] rounded-full uppercase tracking-[0.15em] border border-[rgba(255,218,199,0.35)] shadow-[0_4px_24px_rgba(140,72,33,0.25)] hover:shadow-[0_8px_40px_rgba(140,72,33,0.4)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#B6A095] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18191E]"
            >
              <WhatsAppIcon />
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

          {/* Sub-CTA with social proof dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-3 mt-6"
          >
            <div className="flex -space-x-1.5">
              {[0.4, 0.5, 0.6].map((opacity, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border border-white/10"
                  style={{ background: `rgba(140,72,33,${opacity})` }}
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
