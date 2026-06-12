"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, VIEWPORT, wipeUp } from "./motion";

type Props = {
  /** Número editorial de sección, ej. "03" */
  index: string;
  /** Label corto en mayúsculas, ej. "Servicios" */
  label: string;
  /** Título grande de la sección */
  title: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

const labelIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/**
 * Encabezado editorial de sección: número + hairline + label, y un h2
 * grande con wipe reveal. Mismo peso visual en todas las secciones.
 *
 * El observador de viewport vive en el wrapper (no en el h2): el h2 arranca
 * desplazado 100% dentro de un overflow-hidden, por lo que el
 * IntersectionObserver lo vería recortado y nunca dispararía.
 */
export default function SectionHeading({
  index,
  label,
  title,
  align = "left",
  dark = false,
  className = "",
}: Props) {
  const muted = dark ? "text-white/45" : "text-muted";
  const line = dark ? "bg-white/15" : "bg-line";
  const inkColor = dark ? "text-paper" : "text-ink";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      <motion.div
        variants={labelIn}
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className={`text-[11px] font-medium tracking-[0.08em] ${muted}`}>
          ({index})
        </span>
        <span className={`h-px w-10 ${line}`} aria-hidden />
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.24em] ${muted}`}
        >
          {label}
        </span>
      </motion.div>

      <div className="mt-6 overflow-hidden">
        <motion.h2
          variants={wipeUp}
          className={`font-display text-4xl font-medium leading-[1.06] tracking-[-0.02em] md:text-5xl lg:text-[3.4rem] ${inkColor}`}
        >
          {title}
        </motion.h2>
      </div>
    </motion.div>
  );
}
