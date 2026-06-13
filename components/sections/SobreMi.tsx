"use client";

import { motion } from "framer-motion";
import EdgePortrait from "@/components/ui/EdgePortrait";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { fadeUp, stagger, staggerItem, VIEWPORT, wipeUp } from "@/components/ui/motion";

const CREDENCIALES: string[] = [
  "+10 años en concesionarias",
  "Certificación internacional · ——",
  "Coach individual y de equipos",
  "—— procesos acompañados",
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="relative bg-paper [--edge-w:38vw] py-20 lg:py-0">
      {/* Retrato sangrado al borde izquierdo (mobile: en flujo, antes del texto) */}
      <EdgePortrait
        side="left"
        label="Retrato de Luna — plano medio, luz natural"
        className="lg:z-[1]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12 lg:py-32">
        {/* El nombre cruza sobre la foto con tope (cross-left, mismo sistema
            que el hero, espejado). El observador va en el wrapper clippeado. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="overflow-y-clip lg:cross-left"
        >
          <motion.h2
            variants={wipeUp}
            className="type-l text-ink lg:whitespace-nowrap"
          >
            Luna González
          </motion.h2>
        </motion.div>

        <div className="grid gap-x-6 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="mt-8 max-w-md space-y-4 text-[15px] leading-relaxed text-muted lg:mt-12"
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
                cupidatat non proident.
              </p>
            </motion.div>

            {/* Credenciales: lista editorial con hairlines — no pills */}
            <motion.ul
              variants={stagger(0.08, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="mt-10 max-w-md divide-y divide-line border-y border-line"
            >
              {CREDENCIALES.map((c, i) => (
                <motion.li
                  key={c}
                  variants={staggerItem}
                  className="flex items-baseline gap-5 py-3.5"
                >
                  <span className="text-[11px] tracking-[0.08em] text-muted">
                    {`0${i + 1}`}
                  </span>
                  <span className="text-[14px] text-ink/80">{c}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Candid chico, se asoma sobre el panel gris de Testimonios */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative z-10 mt-12 max-w-[260px] lg:col-span-3 lg:col-start-10 lg:-mb-24 lg:mt-16 lg:max-w-none"
          >
            <MediaPlaceholder
              kind="foto"
              ratio="4:3"
              label="Luna en sesión — candid"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
