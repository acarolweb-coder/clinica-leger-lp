"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import { NAV_LINKS, FOOTER_DISCLAIMER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#18191E] text-white/20 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo + Nav */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-12 border-b border-white/[0.04]">
            <Image
              src="/logos/logo-white.png"
              alt="Dr. Chacur"
              width={140}
              height={50}
              className="object-contain opacity-40 hover:opacity-60 transition-opacity duration-500"
            />
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.25em] uppercase text-white/20 hover:text-[#8C4821]/60 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </ScrollReveal>

        {/* Legal disclaimer */}
        <div className="mb-10">
          <p className="text-[11px] leading-[2] text-white/30 max-w-4xl mx-auto text-center">
            {FOOTER_DISCLAIMER}
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.03]">
          <p className="text-[11px] tracking-[0.2em] text-white/10 uppercase">
            &copy; {new Date().getFullYear()} Clínica Leger &mdash; Dr. Roberto
            Chacur
          </p>
          <p className="text-[11px] tracking-[0.2em] text-white/10 uppercase">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
