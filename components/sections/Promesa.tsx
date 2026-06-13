"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, staggerItem, VIEWPORT, wipeUp } from "@/components/ui/motion";

/**
 * Manifiesto con cortes duros. El énfasis es posicional (la palabra clave
 * va sola en su propia línea, indentada profundo), nunca en itálica.
 */
const LINEAS = [
  { texto: "Lorem ipsum dolor", indent: false },
  { texto: "sit amet consectetur", indent: false },
  { texto: "adipiscing.", indent: true },
];

const RESULTADOS = [
  "Lorem ipsum dolor sit amet consectetur",
  "Sed do eiusmod tempor incididunt ut labore",
  "Ut enim ad minim veniam quis nostrud",
];

export default function Promesa() {
  return (
    <section id="promesa" className="bg-band pb-24 pt-16 text-paper md:pb-30 md:pt-20">
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 lg:grid-cols-12">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-[11px] font-medium uppercase tracking-[0.24em] text-paper/40 lg:col-span-12"
        >
          La promesa
        </motion.p>

        {/* Manifiesto: escalera irregular, cols 1–8 */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          className="type-manifiesto mt-10 lg:col-span-8"
        >
          {LINEAS.map((linea) => (
            <span key={linea.texto} className="block overflow-y-clip">
              <motion.span
                variants={wipeUp}
                className={`block ${linea.indent ? "ml-10 lg:ml-[33%]" : ""}`}
              >
                {linea.texto}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* Resultados: contrapeso abajo a la derecha, apilados */}
        <motion.div
          variants={stagger(0.14, 0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 lg:col-span-4 lg:col-start-9 lg:mt-24"
        >
          {RESULTADOS.map((r, i) => (
            <motion.div
              key={r}
              variants={staggerItem}
              className="border-t border-white/10 py-6"
            >
              <p className="text-[11px] tracking-[0.18em] text-paper/40">
                {`0${i + 1}`}
              </p>
              <p className="mt-2 max-w-[34ch] text-[15px] leading-relaxed text-paper/80">
                {r}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
