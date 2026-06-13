"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { fadeUp, stagger, staggerItem, VIEWPORT } from "@/components/ui/motion";

type Paso = {
  title: string;
  body: string;
};

const PASOS: Paso[] = [
  {
    title: "Reunión inicial",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    title: "Diagnóstico",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    title: "Plan de trabajo",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
  {
    title: "Seguimiento",
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-paper pb-12 pt-14 md:pb-14 md:pt-18">
      <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-14 px-6 lg:grid-cols-12">
        {/* Columna funcional sticky: título, contexto, CTA y el video de Luna */}
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="self-start lg:sticky lg:top-28 lg:col-span-4"
        >
          <motion.h2 variants={fadeUp} className="type-m text-ink">
            Cómo trabajamos
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#agendar"
            className="group relative mt-8 inline-block text-[14px] font-medium text-ink"
          >
            Agendar la primera reunión
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 block h-px w-full origin-left scale-x-100 bg-ink/30 transition-colors duration-300 group-hover:bg-ink"
            />
          </motion.a>

          {/* Video movido desde el hero, a tamaño real de la columna */}
          <motion.div variants={fadeUp} className="mt-12">
            <MediaPlaceholder
              kind="video"
              ratio="16:9"
              label="Luna explica cómo trabaja — clip 60–90s"
            />
          </motion.div>
        </motion.div>

        {/* Pasos: lista vertical, numerales gigantes colgando al gutter */}
        <motion.div
          variants={stagger(0.14, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="divide-y divide-line lg:col-span-7 lg:col-start-6"
        >
          {PASOS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="grid grid-cols-[auto_1fr] gap-x-6 py-10 first:pt-0 md:gap-x-10 lg:first:pt-2"
            >
              <span
                aria-hidden
                className="type-l w-[2ch] font-display leading-none text-ink/15 lg:-ml-14"
              >
                {`0${i + 1}`}
              </span>
              <div>
                <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2.5 max-w-md text-[14.5px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
