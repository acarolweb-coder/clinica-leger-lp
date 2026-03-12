"use client";

import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import CopperLine from "./ui/CopperLine";
import { PRESS_ITEMS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-[#FFF4EE] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Video Testimonials */}
        <ScrollReveal className="text-center mb-14">
          <span className="pill-badge-dark mb-6">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#18191E] leading-[1.1]">
            O que muda{" "}
            <span className="font-bold text-[#8C4821]">
              depois do tratamento?
            </span>
          </h2>
          <p className="text-[#433532]/60 text-sm font-light mt-4 max-w-lg mx-auto">
            A melhor forma de entender os resultados da harmonização glútea é
            ouvir quem já passou pelo tratamento.
          </p>
        </ScrollReveal>

        {/* Video placeholders */}
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-4 md:gap-6 mb-20">
          {[1, 2, 3].map((n) => (
            <StaggerItem key={n}>
              <div className="group relative aspect-[9/16] bg-[#18191E] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#8C4821] group-hover:scale-110 group-hover:bg-[#8C4821]/10 transition-all duration-500">
                    <svg className="w-5 h-5 text-white/40 group-hover:text-[#8C4821] ml-0.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/15 text-[10px] tracking-widest uppercase text-center">
                    Depoimento {n}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <CopperLine className="mb-16" />

        {/* Press Coverage */}
        <ScrollReveal className="text-center mb-10">
          <span className="pill-badge-dark mb-6">
            Destaques na imprensa
          </span>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-4 md:gap-6">
          {PRESS_ITEMS.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group bg-white rounded-2xl border border-[#B6A095]/15 p-5 hover:border-[#8C4821]/30 hover:shadow-lg hover:shadow-[#B6A095]/10 transition-all duration-500 overflow-hidden">
                {/* Outlet badge */}
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C4821] font-semibold">
                  {item.outlet}
                </span>

                {/* Image */}
                <div className="relative aspect-[16/10] mt-3 mb-4 rounded-xl overflow-hidden bg-[#FFF4EE]">
                  <Image
                    src={item.image}
                    alt={item.person}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Headline */}
                <p className="text-sm text-[#433532] font-light leading-relaxed line-clamp-3">
                  &ldquo;{item.headline}&rdquo;
                </p>

                {/* Accent line */}
                <div className="w-8 h-px bg-[#8C4821]/20 mt-4 group-hover:w-full transition-all duration-700" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
