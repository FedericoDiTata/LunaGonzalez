import type { Variants } from "framer-motion";

/**
 * Sistema de movimiento compartido.
 * Reglas (bugs conocidos de Framer Motion v12):
 *  - Variants SIEMPRE tipados con `: Variants`
 *  - spring solo con 2 keyframes
 *  - loops infinitos siempre con ease explícito
 *  - secciones al fondo de página: viewport con amount: 0.1
 */

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const VIEWPORT = { once: true, amount: 0.2 } as const;
export const VIEWPORT_BOTTOM = { once: true, amount: 0.1 } as const;

/** Entrada estándar de bloques de contenido */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Contenedor con stagger para grids y listas */
export const stagger = (delay = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delay, delayChildren },
  },
});

/** Item de grid/lista (usar dentro de un contenedor con stagger) */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

/** Wipe reveal para headings: usar dentro de un wrapper overflow-hidden */
export const wipeUp: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

/** Campos de formulario, en cascada desde la izquierda */
export const field: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE, delay: i * 0.08 },
  }),
};

/** Pills / chips en cascada */
export const pill: Variants = {
  hidden: { opacity: 0, x: -12, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE, delay: 0.35 + i * 0.07 },
  }),
};
