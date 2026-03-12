"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { FAQS, WHATSAPP } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = `faq-${index}`;

  return (
    <div
      className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
        isOpen
          ? "bg-white border-[#8C4821]/15 shadow-lg shadow-[#8C4821]/[0.04]"
          : "bg-white/60 backdrop-blur-sm border-[#B6A095]/10 hover:border-[#8C4821]/15 hover:bg-white/80"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-5 group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C4821] focus-visible:ring-inset rounded-2xl"
      >
        <div className="flex items-center gap-4">
          <span
            className={`text-xs font-semibold w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              isOpen
                ? "bg-gradient-to-br from-[#72311A] to-[#8C4821] text-white"
                : "bg-[#8C4821]/[0.06] text-[#8C4821]/50"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-medium text-sm md:text-base transition-colors duration-300 ${
              isOpen
                ? "text-[#8C4821]"
                : "text-[#18191E] group-hover:text-[#8C4821]"
            }`}
          >
            {question}
          </span>
        </div>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#8C4821]/10 border border-[#8C4821]/20"
              : "border border-[#B6A095]/30 group-hover:border-[#8C4821]/40 group-hover:bg-[#8C4821]/[0.04]"
          }`}
        >
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-3.5 h-3.5 text-[#8C4821]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${id}-answer`}
            role="region"
            aria-labelledby={`${id}-question`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[4.25rem]">
              <div className="w-10 h-px bg-gradient-to-r from-[#72311A] to-[#8C4821] mb-4 rounded-full" />
              <p className="text-[#433532]/70 text-sm leading-[1.9] font-light max-w-2xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-[#FFF4EE] py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/10 to-transparent" />

      <div className="max-w-3xl mx-auto relative">
        <ScrollReveal className="text-center mb-14">
          <span className="pill-badge-dark mb-6">Dúvidas</span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#18191E] tracking-tight leading-[1.1]">
            Perguntas{" "}
            <span className="font-bold text-[#8C4821]">frequentes</span>
          </h2>
          <p className="text-[#433532]/50 text-sm font-light mt-4 max-w-md mx-auto">
            Tire suas dúvidas sobre o tratamento, recuperação e resultados.
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.05} className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <StaggerItem key={i} distance={20}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA below FAQ */}
        <ScrollReveal className="text-center mt-14">
          <p className="text-[#433532]/50 text-sm font-light mb-5">
            Ainda tem dúvidas? Fale diretamente com nossa equipe.
          </p>
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-premium inline-flex items-center gap-3 bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white px-8 py-3.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold border border-[rgba(255,218,199,0.48)] shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_8px_32px_rgba(140,72,33,0.15)] transition-all duration-500 hover:shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98),0_12px_40px_rgba(140,72,33,0.25)] focus-visible:ring-2 focus-visible:ring-[#8C4821] focus-visible:ring-offset-2 group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com a equipe
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
