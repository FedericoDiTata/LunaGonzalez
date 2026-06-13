"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { fadeUp, stagger, staggerItem, VIEWPORT } from "@/components/ui/motion";

type Servicio = {
  name: string;
  desc: string;
  incluye: string[];
};

const SERVICIOS: Servicio[] = [
  {
    name: "Coaching individual",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    incluye: [
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
    ],
  },
  {
    name: "Coaching de equipos",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    incluye: [
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation",
      "Ullamco laboris nisi",
    ],
  },
  {
    name: "Team building",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    incluye: [
      "Nemo enim ipsam voluptatem",
      "Quia voluptas sit aspernatur",
      "Aut odit aut fugit sed",
    ],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-paper pb-28 pt-14 md:pb-36 md:pt-16">
      {/* Apertura: tensión izquierda-derecha sobre la misma línea de base */}
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-6 lg:grid-cols-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="type-m text-ink lg:col-span-3"
        >
          Servicios
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="max-w-sm text-[15px] leading-relaxed text-muted lg:col-span-4 lg:col-start-9"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </motion.p>
      </div>

      {/* Tabla editorial: filas full-bleed, sin cards ni iconos */}
      <motion.div
        variants={stagger(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-12 md:mt-14"
      >
        {SERVICIOS.map((s, i) => (
          <motion.article
            key={s.name}
            variants={staggerItem}
            className={`border-t border-line transition-colors duration-300 hover:bg-fill-soft ${
              i === SERVICIOS.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-6 px-6 py-10 lg:grid-cols-12 lg:py-12">
              <h3 className="type-m text-ink lg:col-span-5">{s.name}</h3>

              <p className="text-[14px] leading-relaxed text-muted lg:col-span-3">
                {s.desc}
              </p>

              <ul className="space-y-1.5 text-[13px] leading-relaxed text-ink/70 lg:col-span-2">
                {s.incluye.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex items-baseline justify-between gap-4 lg:col-span-2 lg:flex-col lg:items-end lg:justify-start lg:gap-3 lg:text-right">
                <p className="flex items-baseline gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    Desde
                  </span>
                  <span className="font-display text-lg text-ink">$ ——</span>
                  <span className="text-[12px] text-muted">/ sesión</span>
                </p>
                <a
                  href="#agendar"
                  className="group relative text-[13px] font-medium text-ink"
                >
                  Agendar
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 block h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Banda destacada full-bleed, split 7/5 — el destaque es por escala */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-24 bg-band text-paper md:mt-28"
      >
        <div className="grid pl-edge lg:grid-cols-12">
          <div className="py-16 pr-6 md:py-20 lg:col-span-7 lg:pr-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-paper/45">
              Programa exclusivo
            </p>

            <h3 className="type-l mt-6">Programa para concesionarias</h3>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
              <motion.a
                href="#agendar"
                whileTap={{ scale: 0.98 }}
                className="bg-paper px-7 py-3.5 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-white"
              >
                Agendar una reunión
              </motion.a>
              <p className="flex items-baseline gap-2">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-paper/40">
                  Desde
                </span>
                <span className="font-display text-lg">$ ——</span>
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:col-span-5 lg:min-h-0">
            <MediaPlaceholder
              fill
              dark
              label="Equipo comercial en concesionaria"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
