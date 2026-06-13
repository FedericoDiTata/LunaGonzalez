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

export default function Problema() {
  return (
    <section id="problema" className="bg-paper pb-8 pt-16 md:pt-20">
      {/* Jerarquía invertida: título mínimo + setup corto a la izquierda;
          las frases son lo grande. El setup vive acá arriba (antes vivía
          flotando abajo-derecha y dejaba la columna izquierda vacía). */}
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="type-m text-ink"
          >
            ¿Algo de esto te suena?
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
            ad minim veniam quis nostrud.
          </motion.p>
        </div>
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
              <div className="overflow-y-clip py-7 md:py-9 lg:col-span-11">
                <motion.div
                  variants={wipeUp}
                  className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-8"
                >
                  {/* Numeral gigante claro: ancla liviana en el margen, contra
                      la frase sólida en ink. Gris claro SÓLIDO (sin text-stroke,
                      que renderiza inconsistente entre navegadores). */}
                  <span className="shrink-0 font-display font-medium leading-[0.8] tracking-[-0.02em] text-ink/35 [font-size:clamp(3.25rem,5.5vw,5rem)] [font-variant-numeric:tabular-nums] lg:-ml-4">
                    {`0${i + 1}`}
                  </span>
                  <p className="type-l text-ink/85 lg:pt-3">{frase}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
