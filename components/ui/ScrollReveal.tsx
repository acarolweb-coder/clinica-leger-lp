"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  className?: string;
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  blur = true,
  className = "",
}: ScrollRevealProps) {
  const dir = directionMap[direction];
  const initial = {
    opacity: 0,
    x: (dir.x ?? 0) * distance,
    y: (dir.y ?? 0) * distance,
    filter: blur ? "blur(8px)" : "blur(0px)",
  };
  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ===== Stagger Utilities ===== */

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  distance?: number;
  className?: string;
}

export function StaggerItem({
  children,
  distance = 30,
  className = "",
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
