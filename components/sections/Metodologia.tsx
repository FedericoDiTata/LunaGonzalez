"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE, VIEWPORT, fadeUp } from "@/components/ui/motion";

type Paso = {
  title: string;
  body: string;
};

const PASOS: Paso[] = [
  {
    title: "Reunión inicial",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
  },
  {
    title: "Diagnóstico",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Plan de trabajo",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    title: "Seguimiento",
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
  },
];

/** Pop del círculo numerado — spring con 2 keyframes, opacity con tween aparte */
const circle: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      delay: 0.3 + i * 0.18,
      opacity: { duration: 0.35, ease: EASE, delay: 0.3 + i * 0.18 },
    },
  }),
};

/** Texto del paso, en cascada apenas después de su círculo */
const stepText: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.45 + i * 0.18 },
  }),
};

/** Dibujo de la línea punteada (vía mask para conservar el dasharray 4 6) */
const drawLine: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.2, delay: 0.4, ease: EASE },
  },
};

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          label="Cómo trabajamos"
          title="Un proceso claro, paso a paso"
          align="center"
        />

        <div className="relative mt-14 md:mt-20">
          {/* Línea vertical (solo mobile), pasa por detrás de los círculos */}
          <span
            aria-hidden
            className="absolute bottom-12 left-7 top-7 w-px bg-line md:hidden"
          />

          {/* Línea SVG punteada (solo desktop) que se dibuja con pathLength.
              El dash 4 6 vive en la línea visible; el pathLength anima la
              línea blanca del mask que la revela de izquierda a derecha. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[12.5%] top-7 hidden md:block"
          >
            <motion.svg
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="block h-[2px] w-full"
              fill="none"
            >
              <defs>
                <mask
                  id="metodologia-line-mask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100%"
                  height="2"
                >
                  <motion.line
                    variants={drawLine}
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                </mask>
              </defs>
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#E6E6E1"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                mask="url(#metodologia-line-mask)"
              />
            </motion.svg>
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            {PASOS.map((p, i) => (
              <div
                key={p.title}
                className="flex items-start gap-6 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <motion.div
                  variants={circle}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-display text-[15px] text-ink"
                >
                  {`0${i + 1}`}
                </motion.div>

                <motion.div
                  variants={stepText}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="pt-1.5 md:pt-0"
                >
                  <h3 className="font-display text-base font-medium text-ink md:mt-5">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Cierre: link con subrayado animado (patrón navbar) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 text-center"
        >
          <a
            href="#agendar"
            className="group relative inline-flex items-center gap-2.5 text-[14px] font-medium text-ink"
          >
            Agendar la primera reunión
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-0.5"
              aria-hidden
            >
              <path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5" />
            </svg>
            <span
              aria-hidden
              className="absolute -bottom-1.5 left-0 block h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
