"use client";

import { motion } from "framer-motion";
import ScrollStack from "@/components/ui/ScrollStack";
import { fadeUp, VIEWPORT } from "@/components/ui/motion";

const DOLORES = [
  "Lorem ipsum dolor sit amet consectetur adipiscing",
  "Sed do eiusmod tempor incididunt ut labore et dolore",
  "Ut enim ad minim veniam quis nostrud exercitation",
  "Duis aute irure dolor in reprehenderit in voluptate velit",
  "Excepteur sint occaecat cupidatat non proident",
];

const ITEMS = DOLORES.map((text, i) => ({ num: `0${i + 1}`, text }));

export default function Problema() {
  return (
    <section id="problema" className="bg-paper pb-16 pt-16 md:pt-20">
      {/* Jerarquía invertida: título intermedio + setup corto a la izquierda */}
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

      {/* Cards que se apilan al hacer scroll (adaptación de 21st.dev) */}
      <ScrollStack items={ITEMS} />
    </section>
  );
}
