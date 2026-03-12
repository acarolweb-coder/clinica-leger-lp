"use client";

import { motion } from "framer-motion";

interface CopperLineProps {
  className?: string;
}

export default function CopperLine({ className = "" }: CopperLineProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={`h-px bg-gradient-to-r from-transparent via-[#8C4821]/40 to-transparent origin-center ${className}`}
    />
  );
}
