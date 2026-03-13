"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { WHATSAPP } from "@/lib/constants";

const techniques = [
  {
    title: "Preenchimento Glúteo",
    image: "/images/technique-preenchimento.jpg",
    imagePosition: "left" as const,
    description:
      "Consiste na aplicação de substâncias biocompatíveis, aprovadas pela ANVISA, em pontos estratégicos do bumbum para harmonizar o formato e melhorar a projeção de forma natural. O procedimento é realizado em consultório e com anestesia local. É totalmente personalizado e começa com uma análise da anatomia da paciente e da escuta de suas queixas, permitindo ao Dr. Roberto Chacur definir o planejamento mais adequado de contorno e proporção corporal.",
    indications: [
      "Mais projeção e volume no bumbum",
      "Melhor definição do contorno glúteo",
      "Corrigir depressões ou assimetrias",
      "Resultados naturais sem cirurgia",
    ],
  },
  {
    title: "GoldIncision",
    image: "/images/technique-goldincision.jpg",
    imagePosition: "right" as const,
    description:
      "Método avançado para o tratamento da celulite, criado pelo Dr. Roberto Chacur e premiado internacionalmente como melhor tratamento corporal do mundo. Consiste na liberação das fibras que puxam a pele para dentro e formam as depressões da celulite, associada ao bioestímulo de colágeno para melhorar a textura e a qualidade da pele. Realizada em consultório, com anestesia local, permite suavizar irregularidades de forma segura e personalizada.",
    indications: [
      "Reduzir celulites de todos os graus",
      "Melhorar a textura da pele do bumbum",
      "Suavizar depressões e irregularidades",
      "Conquistar um bumbum mais liso e uniforme",
    ],
  },
];


export default function Techniques() {
  return (
    <section id="tecnicas" className="bg-[#FFF4EE] py-24 md:py-32">
      <div className="max-w-[1328px] mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <span className="pill-badge-dark mb-6">Técnicas</span>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight text-[#18191E] leading-[1.1]">
            O que é a{" "}
            <span className="font-bold text-[#8C4821]">
              Harmonização Glútea?
            </span>
          </h2>
          <p className="text-[#433532]/60 text-[13px] font-light mt-4 max-w-lg mx-auto leading-relaxed">
            O segredo para um bumbum realmente harmonioso vai além do volume: é
            também a qualidade da pele. Por isso a Clínica Leger oferece duas
            técnicas complementares:
          </p>
        </ScrollReveal>

        {/* Technique Cards — full-width, stacked, alternating layout */}
        <div className="flex flex-col gap-8 mb-10">
          {techniques.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="rounded-3xl overflow-hidden border border-[#B6A095]/15 bg-white group hover:shadow-xl hover:shadow-[#B6A095]/10 transition-all duration-700">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/5] md:aspect-auto md:min-h-[400px] ${
                      t.imagePosition === "right" ? "md:order-2" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.image}
                      alt={t.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col justify-center p-5 md:p-10 ${
                      t.imagePosition === "right" ? "md:order-1" : ""
                    }`}
                  >
                    <h3 className="text-2xl md:text-[2rem] font-light text-[#8C4821] leading-[1.15] mb-4">
                      {t.title}
                    </h3>

                    <p className="text-[13px] text-[#433532]/70 font-light leading-[2]">
                      {t.description}
                    </p>

                    {/* Indications */}
                    <div className="mt-5 pt-5 border-t border-[#B6A095]/10">
                      <p className="text-[10px] tracking-[0.35em] uppercase text-[#8C4821]/40 font-medium mb-3">
                        Indicado para quem deseja
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                        {t.indications.map((ind, j) => (
                          <div key={j} className="flex items-start gap-3 group/item">
                            <div className="w-5 h-5 rounded-md bg-[#8C4821]/[0.06] border border-[#8C4821]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-[#8C4821]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                            <span className="text-[13px] text-[#433532]/65 font-light leading-snug">
                              {ind}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Callout + CTA — mesma linha, full-width como os cards */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-[#433532]/70 font-light leading-relaxed max-w-lg">
              Elas podem ser realizadas em conjunto ou separadas. Quando
              combinadas, Preenchimento e GoldIncision permitem tratar o bumbum
              de forma completa:{" "}
              <strong className="text-[#8C4821] font-semibold">
                contorno, projeção e qualidade da pele
              </strong>
              .
            </p>

            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-premium inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-white bg-gradient-to-r from-[#72311A] to-[#8C4821] hover:from-[#8C4821] hover:to-[#A0562F] border border-[rgba(255,218,199,0.2)] hover:border-[rgba(255,218,199,0.48)] px-10 py-[25px] rounded-full transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] focus-visible:ring-2 focus-visible:ring-[#8C4821] group flex-shrink-0 self-start md:self-center"
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
