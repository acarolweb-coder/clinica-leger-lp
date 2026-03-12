"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP, CITIES } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#18191E] px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8C4821]/[0.04] rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(182,160,149,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(182,160,149,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative text-center max-w-4xl mx-auto pt-24 pb-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
        >
          <Image
            src="/logos/logo-white.png"
            alt="Dr. Chacur"
            width={180}
            height={65}
            className="object-contain mx-auto mb-12 opacity-60"
            priority
          />
        </motion.div>

        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span className="w-12 h-px bg-[#8C4821]/40" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#B6A095]/60 font-medium">
            Contorno corporal avançado
          </span>
          <span className="w-12 h-px bg-[#8C4821]/40" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.9, ease }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-[1.05] mb-4"
        >
          Harmonização{" "}
          <span className="font-bold bg-gradient-to-r from-[#8C4821] via-[#B6A095] to-[#8C4821] bg-clip-text text-transparent">
            Glútea
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease }}
          className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto mb-3"
        >
          Mais contorno, mais projeção e bumbum liso,{" "}
          <strong className="text-[#8C4821] font-semibold">sem cirurgia</strong>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease }}
          className="text-sm text-white/30 font-light max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Conheça as técnicas avançadas que tratam volume e celulite, realizadas
          pelo Dr. Roberto Chacur, médico referência internacional com duas
          décadas dedicadas ao contorno corporal
        </motion.p>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-4 text-[10px] tracking-[0.35em] text-white/20 uppercase mb-10"
        >
          {CITIES.map((city, i) => (
            <span key={city} className="flex items-center gap-4">
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-[#8C4821]/40" />
              )}
              <span>{city}</span>
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease }}
        >
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#8C4821] hover:bg-[#72311A] text-white font-semibold text-sm px-10 py-4 uppercase tracking-[0.2em] shadow-2xl shadow-[#8C4821]/20 transition-all duration-500 hover:shadow-[#8C4821]/40 focus-visible:ring-2 focus-visible:ring-[#B6A095] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18191E]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative">Descobrir se é para mim</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-[11px] text-white/20 mt-6"
        >
          Resultados reais de pacientes logo abaixo
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/10 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-[#8C4821] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
