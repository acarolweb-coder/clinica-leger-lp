"use client";

import Image from "next/image";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import CopperLine from "./ui/CopperLine";
import { PRESS_ITEMS } from "@/lib/constants";

const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    name: "Depoimento 1",
    label: "Harmonização Glútea",
  },
  {
    id: 2,
    name: "Depoimento 2",
    label: "GoldIncision",
  },
  {
    id: 3,
    name: "Depoimento 3",
    label: "Preenchimento + GoldIncision",
  },
];

function VideoCard({ video }: { video: (typeof VIDEO_TESTIMONIALS)[0] }) {
  return (
    <div className="group relative aspect-[9/16] bg-[#18191E] rounded-2xl overflow-hidden cursor-pointer">
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 shadow-lg shadow-black/20">
          <svg
            className="w-6 h-6 text-white/90 ml-1 drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent z-[5]" />

      {/* Video label */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <p className="text-white/50 text-[9px] tracking-widest uppercase mb-1">
          {video.label}
        </p>
        <p className="text-white/80 text-xs font-light">{video.name}</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8C4821]/10 via-transparent to-[#72311A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Top border accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8C4821]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#FFF4EE] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="pill-badge-dark mb-6">Depoimentos</span>
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

        {/* 3 Video Testimonials - vertical format, side by side on desktop */}
        <ScrollReveal className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
            {VIDEO_TESTIMONIALS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </ScrollReveal>

        <CopperLine className="mb-16" />

        {/* Press Coverage */}
        <ScrollReveal className="text-center mb-10">
          <span className="pill-badge-dark mb-6">Destaques na imprensa</span>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid md:grid-cols-3 gap-4 md:gap-6"
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
      </div>
    </section>
  );
}
