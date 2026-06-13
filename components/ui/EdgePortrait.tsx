"use client";

import { motion, type Variants } from "framer-motion";
import MediaPlaceholder from "./MediaPlaceholder";
import { EASE, VIEWPORT } from "./motion";

type Props = {
  /** Borde del viewport al que sangra la foto en desktop */
  side: "left" | "right";
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
 * viewport, a alto completo de la sección, con ancho = --edge-w (declarado
 * por la sección). El contenido vive en el container con `relative z-10` y
 * el heading cruza el borde de la foto usando las utilities cross-right /
 * cross-left, que leen el MISMO --edge-w y topean el cruce con --edge-cap.
 * Así la foto y el texto comparten una sola fuente de verdad y el roce no se
 * vuelve choque a ningún ancho. El label va al fondo (align="end") para no
 * quedar bajo el texto que cruza. En mobile el overlap se apaga.
 */
export default function EdgePortrait({
  side,
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
      className={`relative w-full ${mobileAspectClass} lg:absolute lg:inset-y-0 lg:aspect-auto lg:w-[var(--edge-w)] ${
        side === "right" ? "lg:right-0" : "lg:left-0"
      } ${className}`}
    >
      <MediaPlaceholder fill align="end" kind={kind} label={label} />
    </motion.div>
  );
}
