"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import { CLINICS } from "@/lib/constants";

export default function Clinics() {
  return (
    <section id="clinicas" className="bg-[#FFF4EE] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#8C4821]/60 font-medium mb-6">
            <span className="w-8 h-px bg-[#8C4821]/30" />
            Nossas unidades
            <span className="w-8 h-px bg-[#8C4821]/30" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#18191E] leading-[1.1]">
            Clínica{" "}
            <span className="font-bold text-[#8C4821]">Leger</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-12">
          {CLINICS.map((clinic, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center bg-white overflow-hidden">
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={clinic.image}
                    alt={`Clínica Leger ${clinic.city}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-[#8C4821]" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C4821]/60 font-medium">
                      {clinic.neighborhood}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#18191E] mb-4">
                    {clinic.city}
                  </h3>

                  <div className="flex items-start gap-3 mb-6">
                    <svg className="w-5 h-5 text-[#8C4821] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-[#18191E] font-medium">
                        {clinic.address}
                      </p>
                      <p className="text-xs text-[#B6A095] mt-1">
                        {clinic.region}
                      </p>
                    </div>
                  </div>

                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-semibold text-[#8C4821] hover:text-[#72311A] transition-colors group"
                  >
                    Ver no mapa
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Team placeholder */}
                  <div className="mt-8 pt-6 border-t border-[#B6A095]/15">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#B6A095] font-medium mb-3">
                      Conheça a equipe
                    </p>
                    <div className="h-20 bg-[#FFF4EE] flex items-center justify-center">
                      <span className="text-[#B6A095]/40 text-xs">
                        Foto da equipe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
