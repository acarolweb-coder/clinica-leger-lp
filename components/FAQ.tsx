"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { FAQS } from "@/lib/constants";

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
    <div className="border-b border-[#B6A095]/20">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group focus-visible:ring-2 focus-visible:ring-[#8C4821] focus-visible:ring-inset rounded-sm"
      >
        <div className="flex items-center gap-5">
          <span className="text-[#8C4821]/30 text-xs font-light w-6 text-right">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-medium text-[#18191E] text-sm md:text-base group-hover:text-[#8C4821] transition-colors duration-300">
            {question}
          </span>
        </div>
        <span className="flex-shrink-0 w-8 h-8 border border-[#B6A095]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#8C4821]/40">
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-3.5 h-3.5 text-[#8C4821]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
            <div className="pl-11 pb-6">
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
    <section id="faq" className="relative bg-[#FFF4EE] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C4821]/10 to-transparent" />

      <div className="max-w-3xl mx-auto relative">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#8C4821]/60 font-medium mb-6">
            <span className="w-8 h-px bg-[#8C4821]/30" />
            Dúvidas
            <span className="w-8 h-px bg-[#8C4821]/30" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#18191E] tracking-tight leading-[1.1]">
            Perguntas{" "}
            <span className="font-bold text-[#8C4821]">frequentes</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.05}>
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
      </div>
    </section>
  );
}
