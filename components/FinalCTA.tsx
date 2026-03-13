"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";
import { WHATSAPP, CITIES } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#18191E] py-32 md:py-40 text-center overflow-hidden">
      <div className="max-w-[1328px] mx-auto px-6 relative">
        <ScrollReveal>
          <span className="pill-badge badge-glass text-white/80 mb-8">
            Próximo passo
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight text-white leading-[1.05] mb-8">
            Cada bumbum possui
            <br />
            <span className="font-bold gradient-text-animated">
              características únicas.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/40 font-light text-base md:text-lg leading-relaxed mb-3 max-w-lg mx-auto">
            Por isso, o primeiro passo é entender qual planejamento é mais
            indicado para o seu caso.
          </p>
          <p className="text-white/20 text-sm mb-12">
            Converse com nossa equipe e descubra qual planejamento é mais
            indicado para o seu caso.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="cta-premium group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white font-semibold text-[11px] tracking-[0.2em] px-10 py-[22px] rounded-full uppercase border border-[rgba(255,218,199,0.2)] hover:border-[rgba(255,218,199,0.48)] overflow-hidden transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] focus-visible:ring-2 focus-visible:ring-[#8C4821]"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <svg className="w-4 h-4 relative" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative">A harmonização é para mim</span>
          </motion.a>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.35em] text-white/15 uppercase mt-12">
            {CITIES.map((city, i) => (
              <span key={city} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-[#8C4821]/20" />
                )}
                <span>{city}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
