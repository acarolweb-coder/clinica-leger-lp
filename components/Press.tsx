"use client";

import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { PRESS_ITEMS, WHATSAPP } from "@/lib/constants";

export default function Press() {
  return (
    <section className="relative bg-[#FFF4EE] py-16 md:py-32 overflow-hidden">
      {/* Top divider */}
      <div className="divider-animated absolute top-0 left-0 right-0" />

      <div className="max-w-[1328px] mx-auto px-6">
        <ScrollReveal className="text-center mb-6 md:mb-10">
          <span className="pill-badge-dark mb-6">Imprensa</span>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {PRESS_ITEMS.map((item, i) => (
            <StaggerItem key={i}>
              <div className="card-lift group bg-white rounded-2xl border border-[#B6A095]/15 p-5 hover:border-[#8C4821]/30 hover:shadow-lg hover:shadow-[#B6A095]/10 transition-all duration-500 overflow-hidden">
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

                {/* Accent line with width animation */}
                <div className="w-8 h-px bg-gradient-to-r from-[#72311A] to-[#8C4821] mt-4 group-hover:w-full transition-all duration-700 rounded-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="flex justify-center pt-8 border-t border-[#B6A095]/15">
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-premium inline-flex w-full md:w-auto justify-center items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-white bg-gradient-to-r from-[#72311A] to-[#8C4821] hover:from-[#8C4821] hover:to-[#A0562F] border border-[rgba(255,218,199,0.2)] hover:border-[rgba(255,218,199,0.48)] px-7 md:px-10 py-[22px] rounded-full transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] focus-visible:ring-2 focus-visible:ring-[#8C4821]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar avaliação
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
