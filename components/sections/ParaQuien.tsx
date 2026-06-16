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
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

const itemDerecha: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

function Lista({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: Variants;
}) {
  return (
    <motion.div
      variants={stagger(0.09, 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <motion.h3
        variants={fadeUp}
        className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted"
      >
        {title}
      </motion.h3>
      <ul className="mt-6">
        {items.map((item) => (
          <motion.li
            key={item}
            variants={variant}
            className="flex items-baseline gap-5 border-b border-line py-5 last:border-0"
          >
            <span aria-hidden className="text-muted">
              —
            </span>
            <p className="font-display text-[1.1rem] leading-snug text-ink/85 md:text-[1.25rem]">
              {item}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ParaQuien() {
  return (
    <section id="para-quien" className="bg-paper pb-24 pt-12 md:pb-30 md:pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="max-w-xl text-[15px] font-semibold text-ink"
        >
          Esto no es para cualquiera — y está bien que así sea.
        </motion.p>

        {/* Dos columnas iguales, sin panel ni foto */}
        <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-16">
          <Lista title="Es para vos si…" items={PARA_VOS} variant={itemIzquierda} />
          <Lista
            title="No es para vos si…"
            items={NO_PARA_VOS}
            variant={itemDerecha}
          />
        </div>
      </div>
    </section>
  );
}
