"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, WHATSAPP } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Focus trap & ESC */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
      if (e.key === "Tab" && menuOpen) {
        const menu = document.getElementById("mobile-menu");
        if (!menu) return;
        const focusable = menu.querySelectorAll<HTMLElement>(
          "a[href], button, [tabindex]:not([tabindex='-1'])",
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [menuOpen],
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, handleKeyDown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF4EE]/90 backdrop-blur-xl shadow-lg shadow-[#B6A095]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#conteudo-principal" className="relative z-10">
          <Image
            src={scrolled ? "/logos/logo-dark.png" : "/logos/logo-white.png"}
            alt="Dr. Chacur"
            width={scrolled ? 120 : 140}
            height={50}
            className="object-contain transition-all duration-500"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[#433532]/70 hover:text-[#8C4821]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.15em] uppercase font-semibold bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white px-6 py-2.5 rounded-full border border-[rgba(255,218,199,0.48)] shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98)] hover:shadow-[inset_0_0_4px_0_rgba(222,134,84,0.98)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#8C4821] focus-visible:ring-offset-2"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="lg:hidden relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#8C4821] rounded"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-px transition-colors ${
              scrolled && !menuOpen ? "bg-[#433532]" : "bg-white"
            }`}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-6 h-px transition-colors ${
              scrolled && !menuOpen ? "bg-[#433532]" : "bg-white"
            }`}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-px transition-colors ${
              scrolled && !menuOpen ? "bg-[#433532]" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-transparent">
        <motion.div
          style={{ scaleX: progress, transformOrigin: "left" }}
          className="h-full bg-gradient-to-r from-[#8C4821] to-[#B6A095]"
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-[#18191E]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-white/70 hover:text-[#8C4821] text-lg tracking-[0.15em] uppercase font-light transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={WHATSAPP.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-4 bg-gradient-to-r from-[#72311A] to-[#8C4821] text-white px-10 py-3.5 rounded-full text-sm tracking-[0.2em] uppercase font-semibold border border-[rgba(255,218,199,0.48)] shadow-[inset_0_0_2px_0_rgba(222,134,84,0.98)] transition-all duration-300"
            >
              Agendar avaliação
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
