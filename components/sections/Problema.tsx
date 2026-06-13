"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT, wipeUp } from "@/components/ui/motion";

const DOLORES = [
  "Lorem ipsum dolor sit amet consectetur adipiscing",
  "Sed do eiusmod tempor incididunt ut labore et dolore",
  "Ut enim ad minim veniam quis nostrud exercitation",
  "Duis aute irure dolor in reprehenderit in voluptate velit",
  "Excepteur sint occaecat cupidatat non proident",
];

/**
 * Indentación escalonada por fila, en columnas de grilla (solo lg+).
 * Plan B (indentación fija profunda): OFFSETS = [2, 2, 2, 2, 2].
 */
const OFFSETS = [0, 1, 2, 0, 1];
const INDENT = ["lg:col-start-1", "lg:col-start-2", "lg:col-start-3"];

export default function Problema() {
  return (
    <section id="problema" className="bg-paper pb-28 pt-16 md:pt-20">
      {/* Jerarquía invertida: el título es mínimo, las frases son lo grande */}
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-[15px] font-semibold text-ink"
        >
          ¿Algo de esto te suena?
        </motion.p>
      </div>

      {/* Filas full-bleed: la hairline corre de borde a borde del viewport */}
      <div>
        {DOLORES.map((frase, i) => (
          <motion.div
            key={frase}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delayChildren: 0.08 }}
            className={`border-b border-line ${i === 0 ? "border-t" : ""}`}
          >
            <div className="mx-auto grid max-w-6xl px-6 lg:grid-cols-12">
              <div
                className={`overflow-y-clip py-7 md:py-9 lg:col-span-9 ${INDENT[OFFSETS[i]]}`}
              >
                <motion.div variants={wipeUp} className="flex items-baseline gap-6">
                  <span className="text-[11px] tracking-[0.08em] text-muted">
                    {`0${i + 1}`}
                  </span>
                  <p className="type-l text-ink/85">{frase}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contexto: bloque posicionado a la derecha, texto alineado a la izquierda */}
      <div className="mx-auto grid max-w-6xl px-6 lg:grid-cols-12">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 text-[15px] leading-relaxed text-muted lg:col-span-4 lg:col-start-9"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
          ad minim veniam quis nostrud.
        </motion.p>
      </div>
    </section>
  );
}
