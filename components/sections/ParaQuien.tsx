"use client";

import { motion, type Variants } from "framer-motion";
import { EASE, fadeUp, stagger, VIEWPORT } from "@/components/ui/motion";

const PARA_VOS: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
  "Eiusmod tempor incididunt ut labore et dolore magna",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  "Nisi ut aliquip ex ea commodo consequat duis",
  "Aute irure dolor in reprehenderit in voluptate velit",
];

const NO_PARA_VOS: string[] = [
  "Esse cillum dolore eu fugiat nulla pariatur excepteur",
  "Sint occaecat cupidatat non proident sunt in culpa",
  "Qui officia deserunt mollit anim id est laborum sed ut",
  "Perspiciatis unde omnis iste natus error sit",
];

const itemIzquierda: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const itemDerecha: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function ParaQuien() {
  return (
    <section id="para-quien" className="relative bg-paper py-28 md:py-36">
      {/* Panel gris sangrado al borde derecho — la ruptura de la sección */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 top-16 hidden w-[34vw] bg-fill-soft lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-x-6 px-6 lg:grid-cols-12">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-[15px] font-semibold text-ink lg:col-span-6"
        >
          Esto no es para cualquiera — y está bien que así sea.
        </motion.p>

        {/* Lo importante: a quién SÍ le sirve (cols 1–7, escala grande) */}
        <motion.div
          variants={stagger(0.09, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 lg:col-span-7 lg:col-start-1"
        >
          <motion.h3
            variants={fadeUp}
            className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
          >
            Es para vos si…
          </motion.h3>
          <ul className="mt-6">
            {PARA_VOS.map((item) => (
              <motion.li
                key={item}
                variants={itemIzquierda}
                className="flex items-baseline gap-5 border-b border-line py-5 last:border-0"
              >
                <span aria-hidden className="text-muted">
                  —
                </span>
                <p className="font-display text-[1.15rem] leading-snug text-ink/85 md:text-[1.3rem]">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contrapunto menor: cols 9–12, offset vertical, sobre el panel */}
        <motion.div
          variants={stagger(0.09, 0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="-mx-6 mt-12 bg-fill-soft px-6 py-10 lg:col-span-4 lg:col-start-9 lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:pt-28"
        >
          <motion.h3
            variants={fadeUp}
            className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
          >
            No es para vos si…
          </motion.h3>
          <ul className="mt-6 space-y-5">
            {NO_PARA_VOS.map((item) => (
              <motion.li key={item} variants={itemDerecha} className="flex gap-4">
                <span aria-hidden className="text-line">
                  —
                </span>
                <p className="text-[14px] leading-relaxed text-muted">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
