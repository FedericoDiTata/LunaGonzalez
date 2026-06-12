"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger, VIEWPORT, wipeUp } from "@/components/ui/motion";

type Dolor = {
  index: string;
  frase: string;
};

const DOLORES: Dolor[] = [
  {
    index: "01",
    frase: "Lorem ipsum dolor sit amet consectetur adipiscing",
  },
  {
    index: "02",
    frase: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    index: "03",
    frase: "Ut enim ad minim veniam quis nostrud exercitation",
  },
  {
    index: "04",
    frase:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
  },
  {
    index: "05",
    frase: "Excepteur sint occaecat cupidatat non proident",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="bg-paper py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12 lg:gap-0">
        {/* Columna izquierda: heading sticky */}
        <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
          <SectionHeading
            index="02"
            label="El punto de partida"
            title="¿Algo de esto te suena?"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-6 max-w-xs text-[15px] leading-relaxed text-muted"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
            ad minim veniam quis nostrud.
          </motion.p>
        </div>

        {/* Columna derecha: frases de dolor en filas editoriales */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="lg:col-span-7 lg:col-start-6"
        >
          {DOLORES.map((dolor, i) => (
            <div
              key={dolor.index}
              className={`overflow-hidden border-b border-line ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <motion.div
                variants={wipeUp}
                className="flex items-baseline gap-6 py-7 md:py-8"
              >
                <span className="text-[11px] tracking-[0.08em] text-muted">
                  {dolor.index}
                </span>
                <p className="font-display text-xl font-normal leading-snug text-ink/85 md:text-2xl lg:text-[1.65rem]">
                  {dolor.frase}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
