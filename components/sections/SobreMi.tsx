"use client";

import { motion, type Variants } from "framer-motion";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE, fadeUp, pill, VIEWPORT } from "@/components/ui/motion";

const CREDENCIALES: string[] = [
  "+10 años en concesionarias",
  "Certificación internacional · ——",
  "Coach individual y de equipos",
  "—— procesos acompañados",
];

const fotoDesdeIzquierda: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-paper py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
        {/* Retrato con cuadrado decorativo detrás */}
        <motion.div
          variants={fotoDesdeIzquierda}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative isolate lg:col-span-5"
        >
          <MediaPlaceholder
            kind="foto"
            ratio="4:5"
            label="Retrato profesional de Luna"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
              delay: 0.45,
            }}
            className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 bg-band"
            aria-hidden
          />
        </motion.div>

        {/* Bio + credenciales */}
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading index="07" label="Sobre mí" title="Luna González" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-8 max-w-lg space-y-4 text-[15px] leading-relaxed text-muted"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {CREDENCIALES.map((credencial, i) => (
              <motion.span
                key={credencial}
                custom={i}
                variants={pill}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="rounded-full border border-line bg-surface px-4 py-1.5 text-[12px] text-ink/75"
              >
                {credencial}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
