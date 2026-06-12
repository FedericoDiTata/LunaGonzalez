"use client";

import { motion } from "framer-motion";
import { Car, Puzzle, User, Users, type LucideIcon } from "lucide-react";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { VIEWPORT, fadeUp, stagger, staggerItem } from "@/components/ui/motion";

type Servicio = {
  icon: LucideIcon;
  title: string;
  bullets: string[];
};

const SERVICIOS: Servicio[] = [
  {
    icon: User,
    title: "Coaching individual",
    bullets: [
      "Lorem ipsum dolor sit amet consectetur",
      "Sed do eiusmod tempor incididunt labore",
      "Ut enim ad minim veniam quis nostrud",
    ],
  },
  {
    icon: Users,
    title: "Coaching de equipos",
    bullets: [
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat cupidatat non",
      "Sunt in culpa qui officia deserunt",
    ],
  },
  {
    icon: Puzzle,
    title: "Team building",
    bullets: [
      "Sed ut perspiciatis unde omnis iste",
      "Nemo enim ipsam voluptatem quia",
      "Neque porro quisquam est qui dolorem",
    ],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-fill-soft py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header editorial en 2 columnas: título a la izquierda, intro abajo a la derecha */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="03"
            label="Servicios"
            title="Cuatro maneras de trabajar juntos"
            className="md:max-w-xl"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-sm text-[15px] leading-relaxed text-muted"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
            ad minim veniam.
          </motion.p>
        </div>

        {/* 3 cards iguales */}
        <motion.div
          variants={stagger()}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3"
        >
          {SERVICIOS.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 280, damping: 20 },
                }}
                className="flex flex-col rounded-lg border border-line bg-surface p-8 transition-[border-color,box-shadow] duration-300 ease-(--ease-out-expo) hover:border-ink/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)]"
              >
                <Icon size={22} strokeWidth={1.5} className="text-ink" aria-hidden />

                <h3 className="mt-6 font-display text-lg font-medium tracking-[-0.01em] text-ink">
                  {s.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-baseline gap-2.5 text-[13.5px] leading-relaxed text-muted"
                    >
                      <span aria-hidden className="text-[12px] text-ink/45">
                        +
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="flex items-baseline justify-between gap-4 border-t border-line pt-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                        Desde
                      </span>
                      <span className="font-display text-xl text-ink">$ ——</span>
                      <span className="text-[12.5px] text-muted">/ sesión</span>
                    </div>
                    <a
                      href="#agendar"
                      className="group inline-flex shrink-0 items-baseline gap-1.5 text-[12.5px] font-medium text-ink"
                    >
                      Agendar
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Card destacada: el diferencial */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-5 grid overflow-hidden rounded-lg bg-band text-paper md:grid-cols-2"
        >
          <div className="flex flex-col p-8 md:p-12">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-paper/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-paper/80">
                Programa exclusivo
              </span>
              <Car size={22} strokeWidth={1.5} className="text-paper/70" aria-hidden />
            </div>

            <h3 className="mt-8 font-display text-2xl font-medium leading-[1.1] tracking-[-0.02em] md:text-3xl">
              Programa para concesionarias
            </h3>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-paper/40">
                  Desde
                </span>
                <span className="font-display text-xl">$ ——</span>
              </div>
              <motion.a
                href="#agendar"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 rounded-md bg-paper py-3 pl-6 pr-2.5 text-[14px] font-medium text-ink"
              >
                Agendar una reunión
                <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-ink/8 transition-transform duration-300 ease-(--ease-out-expo) group-hover:-translate-y-px group-hover:translate-x-0.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    aria-hidden
                  >
                    <path d="M2 10 10 2M4 2h6v6" />
                  </svg>
                </span>
              </motion.a>
            </div>
          </div>

          <div className="relative min-h-[260px] md:min-h-0">
            <MediaPlaceholder
              fill
              dark
              kind="foto"
              label="Equipo comercial en concesionaria"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
