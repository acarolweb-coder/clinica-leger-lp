"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { WHATSAPP } from "@/lib/constants";

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
  {
    id: 4,
    name: "Depoimento 4",
    label: "Harmonização Glútea",
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
    <section className="bg-[#FFF4EE] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1328px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="pill-badge-dark mb-6">Depoimentos</span>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight text-[#18191E] leading-[1.1]">
            O que muda
            <br />
            <span className="font-bold text-[#8C4821]">
              depois do tratamento?
            </span>
          </h2>
          <p className="text-[#433532]/60 text-sm font-light mt-4 max-w-lg mx-auto">
            A melhor forma de entender os resultados da harmonização glútea é
            ouvir quem já passou pelo tratamento.
          </p>
        </ScrollReveal>

        {/* 4 Video Testimonials */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {VIDEO_TESTIMONIALS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="flex justify-center">
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-premium inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-white bg-gradient-to-r from-[#72311A] to-[#8C4821] hover:from-[#8C4821] hover:to-[#A0562F] border border-[rgba(255,218,199,0.2)] hover:border-[rgba(255,218,199,0.48)] px-10 py-[22px] rounded-full transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] focus-visible:ring-2 focus-visible:ring-[#8C4821]"
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
