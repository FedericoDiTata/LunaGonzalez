"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE, fadeUp, stagger, VIEWPORT } from "@/components/ui/motion";

const PARA_VOS: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
  "Eiusmod tempor incididunt ut labore et dolore magna",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  "Nisi ut aliquip ex ea commodo consequat duis",
  "Aute irure dolor in reprehenderit in voluptate velit",
];

const NO_PARA_VOS: string[] = [
  "Esse cillum dolore eu fugiat nulla pariatur excepteur",
  "Sint occaecat cupidatat non proident sunt in culpa",
  "Qui officia deserunt mollit anim id est laborum sed ut",
  "Perspiciatis unde omnis iste natus error sit",
  "Voluptatem accusantium doloremque laudantium totam rem aperiam",
];

const itemDesdeIzquierda: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const itemDesdeDerecha: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function ParaQuien() {
  return (
    <section id="para-quien" className="bg-fill-soft py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          label="Para quién"
          title="Esto es para vos — y quizás no"
        />

        <div className="mt-14 grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
          {/* Col A: es para vos */}
          <motion.div
            variants={stagger(0.08, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="pb-12 md:pb-0 md:pr-12"
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-lg font-medium text-ink"
            >
              Es para vos si…
            </motion.h3>
            <ul className="mt-6">
              {PARA_VOS.map((item) => (
                <motion.li
                  key={item}
                  variants={itemDesdeIzquierda}
                  className="flex items-start gap-4 border-b border-line py-4 last:border-0"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink/70">
                    <Check size={13} strokeWidth={1.5} />
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-ink/80">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col B: no es para vos */}
          <motion.div
            variants={stagger(0.08, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="pt-12 md:pl-12 md:pt-0"
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-lg font-medium text-ink"
            >
              No es para vos si…
            </motion.h3>
            <ul className="mt-6">
              {NO_PARA_VOS.map((item) => (
                <motion.li
                  key={item}
                  variants={itemDesdeDerecha}
                  className="flex items-start gap-4 border-b border-line py-4 last:border-0"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-muted">
                    <Minus size={13} strokeWidth={1.5} />
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-muted">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
