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
      {/* Apertura: título + intro debajo, alineada a la izquierda (más
          legible para la presentación que la tensión a la derecha) */}
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="type-m text-ink"
        >
          Servicios
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-4 max-w-md text-[15px] leading-relaxed text-muted"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </motion.p>
      </div>

      {/* Tarjetas asimétricas: una destacada (mayor escala) + dos menores
          apiladas. Esquinas rectas, hairlines, sin iconos ni bullets "+". */}
      <motion.div
        variants={stagger(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-12 grid gap-4 px-6 md:mt-14 lg:mx-auto lg:max-w-6xl lg:grid-cols-12"
      >
        {/* Destacada */}
        <motion.article
          variants={staggerItem}
          className="flex flex-col border border-line bg-surface p-8 transition-colors duration-300 hover:border-ink/20 md:p-12 lg:col-span-7"
        >
          <h3 className="font-display text-2xl font-medium tracking-[-0.01em] text-ink md:text-[1.9rem]">
            {SERVICIOS[0].name}
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            {SERVICIOS[0].desc}
          </p>

          <div className="mt-10">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted">
              Incluye
            </p>
            <ul className="mt-4 space-y-2.5 text-[14.5px] leading-relaxed text-ink/75">
              {SERVICIOS[0].incluye.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex items-baseline justify-between gap-4 border-t border-line pt-8">
            <p className="flex items-baseline gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                Desde
              </span>
              <span className="font-display text-xl text-ink">$ ——</span>
              <span className="text-[12px] text-muted">/ sesión</span>
            </p>
            <a
              href="#agendar"
              className="relative text-[13px] font-medium text-ink after:absolute after:-bottom-0.5 after:left-0 after:block after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Agendar
            </a>
          </div>
        </motion.article>

        {/* Dos menores apiladas */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col gap-4 lg:col-span-5"
        >
          {SERVICIOS.slice(1).map((s, i) => (
            <article
              key={s.name}
              className="flex flex-col border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink/20"
            >
              <h3 className="font-display text-lg font-medium text-ink">
                {s.name}
              </h3>
              <p className="mt-2.5 max-w-sm text-[13.5px] leading-relaxed text-muted">
                {s.desc}
              </p>
              <ul className="mt-4 space-y-1 text-[13px] leading-relaxed text-ink/70">
                {s.incluye.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-auto flex items-baseline justify-between gap-3 border-t border-line pt-4">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                    Desde
                  </span>
                  <span className="font-display text-base text-ink">$ ——</span>
                </p>
                <a
                  href="#agendar"
                  className="relative text-[12.5px] font-medium text-ink after:absolute after:-bottom-0.5 after:left-0 after:block after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Agendar
                </a>
              </div>
            </article>
          ))}
        </motion.div>
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
