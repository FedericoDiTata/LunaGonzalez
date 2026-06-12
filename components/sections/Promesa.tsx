"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, staggerItem, VIEWPORT } from "@/components/ui/motion";

type Resultado = {
  label: string;
  frase: string;
};

const RESULTADOS: Resultado[] = [
  {
    label: "Resultado 01",
    frase: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    label: "Resultado 02",
    frase: "Sed do eiusmod tempor incididunt ut labore",
  },
  {
    label: "Resultado 03",
    frase: "Ut enim ad minim veniam quis nostrud",
  },
];

export default function Promesa() {
  return (
    <section id="promesa" className="bg-band py-32 text-paper md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          index="04"
          label="La promesa"
          align="center"
          dark
          title={
            <>
              Lorem ipsum dolor sit amet, consectetur{" "}
              <em className="italic font-normal">adipiscing elit</em> sed do
              eiusmod tempor incididunt
            </>
          }
        />

        <motion.div
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid divide-y divide-white/10 md:mt-20 md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {RESULTADOS.map((resultado) => (
            <motion.div
              key={resultado.label}
              variants={staggerItem}
              className="px-8 py-6 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-paper/40">
                {resultado.label}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/80">
                {resultado.frase}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
