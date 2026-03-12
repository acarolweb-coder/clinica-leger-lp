"use client";

import ScrollReveal from "./ui/ScrollReveal";
import CopperLine from "./ui/CopperLine";
import { WHATSAPP } from "@/lib/constants";

const techniques = [
  {
    num: "01",
    title: "Preenchimento Glúteo",
    badge: null,
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
    num: "02",
    title: "GoldIncision",
    badge: "Premiado internacionalmente",
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
    <section id="tecnicas" className="bg-[#FFF4EE] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="pill-badge-dark mb-6">
            Técnicas
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#18191E] leading-[1.1]">
            O que é a{" "}
            <span className="font-bold text-[#8C4821]">
              Harmonização Glútea?
            </span>
          </h2>
          <p className="text-[#433532]/60 text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            O segredo para um bumbum realmente harmonioso vai além do volume: é
            também a qualidade da pele. Por isso a Clínica Leger oferece duas
            técnicas complementares:
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {techniques.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="card-lift relative bg-white rounded-2xl p-8 md:p-10 border border-[#B6A095]/10 group hover:border-[#8C4821]/10 transition-all duration-500">
                {/* Number decoration */}
                <span className="absolute top-6 right-6 text-6xl font-black text-[#FFF4EE] group-hover:text-[#8C4821]/[0.08] transition-colors duration-500">
                  {t.num}
                </span>

                {/* Badge */}
                {t.badge && (
                  <span className="inline-block bg-gradient-to-r from-[#8C4821] to-[#72311A] text-white text-[9px] tracking-[0.2em] uppercase font-semibold px-4 py-1.5 rounded-full mb-6 animate-[pulse-glow_3s_ease-in-out_infinite]">
                    {t.badge}
                  </span>
                )}

                <h3 className="text-2xl font-bold text-[#18191E] mb-4 relative">
                  {t.title}
                </h3>

                {/* Accent line - expands on hover */}
                <div className="w-10 group-hover:w-16 h-px bg-[#8C4821]/40 mb-5 transition-all duration-500" />

                <p className="text-sm text-[#433532]/70 font-light leading-[1.9] mb-6 relative">
                  {t.description}
                </p>

                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C4821]/50 font-medium mb-3">
                  Indicado para quem deseja:
                </p>
                <ul className="space-y-2">
                  {t.indications.map((ind, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-[#433532] font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#72311A] to-[#8C4821] flex-shrink-0" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-sm text-[#433532]/60 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Elas podem ser realizadas em conjunto ou separadas. Quando
            combinadas, Preenchimento e GoldIncision permitem tratar o bumbum de
            forma completa: contorno, projeção e qualidade da pele.
          </p>
        </ScrollReveal>

        <CopperLine className="mb-10" />

        <ScrollReveal className="text-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-premium inline-flex items-center gap-3 bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white font-semibold text-[11px] px-10 py-4 rounded-full uppercase tracking-[0.2em] border border-[rgba(255,218,199,0.48)] shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98)] hover:shadow-[inset_0_0_4px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.3)] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#8C4821] focus-visible:ring-offset-2"
          >
            Agendar avaliação
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
