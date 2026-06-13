"use client";

import { motion, type Variants } from "framer-motion";
import MediaPlaceholder from "./MediaPlaceholder";
import { EASE, VIEWPORT } from "./motion";

type Props = {
  /** Borde del viewport al que sangra la foto en desktop */
  side: "left" | "right";
  /** Ancho desktop, ej. "lg:w-[44vw]" */
  widthClass: string;
  label: string;
  kind?: "foto" | "video";
  /** Aspect ratio cuando la foto pasa a flujo normal en mobile */
  mobileAspectClass?: string;
  className?: string;
};

/**
 * Sistema compartido texto-sobre-foto (Hero y Sobre mí).
 *
 * Mecanismo: en lg+ la foto es un bloque absoluto anclado a un borde del
 * viewport, a alto completo de la sección. El contenido vive en el container
 * con `relative z-10` y el título cruza el borde de la foto entre 1 y 2
 * columnas (por desborde de línea o margen negativo), siempre en ink.
 * En mobile el overlap se apaga: la foto entra al flujo con aspect fijo.
 */
export default function EdgePortrait({
  side,
  widthClass,
  label,
  kind = "foto",
  mobileAspectClass = "aspect-[3/4]",
  className = "",
}: Props) {
  const slide: Variants = {
    hidden: { opacity: 0, x: side === "right" ? 32 : -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <motion.div
      variants={slide}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`relative w-full ${mobileAspectClass} lg:absolute lg:inset-y-0 lg:aspect-auto ${
        side === "right" ? "lg:right-0" : "lg:left-0"
      } ${widthClass} ${className}`}
    >
      <MediaPlaceholder fill kind={kind} label={label} />
    </motion.div>
  );
}
