"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { EASE, fadeUp, VIEWPORT_BOTTOM } from "@/components/ui/motion";

type Testimonio = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIOS: Testimonio[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis.",
    name: "Nombre Apellido",
    role: "Cargo · Empresa",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    name: "Nombre Apellido",
    role: "Cargo · Empresa",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    name: "Nombre Apellido",
    role: "Cargo · Empresa",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae.",
    name: "Nombre Apellido",
    role: "Cargo · Empresa",
  },
];

export default function Testimonios() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIOS.length;
  const t = TESTIMONIOS[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonios" className="bg-fill-soft pb-24 md:pb-32">
      {/* Fila de apertura: label + controles sobre la misma hairline */}
      <div className="border-y border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            Testimonios
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-medium tracking-[0.18em] text-muted">
              {`0${index + 1} / 0${total}`}
            </span>
            <div className="flex">
              <button
                type="button"
                onClick={prev}
                aria-label="Testimonio anterior"
                className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors duration-300 hover:border-ink/30"
              >
                <ChevronLeft size={16} strokeWidth={1.5} aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Testimonio siguiente"
                className="-ml-px flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors duration-300 hover:border-ink/30"
              >
                <ChevronRight size={16} strokeWidth={1.5} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cita indentada profundo; la firma vuelve a col 1 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_BOTTOM}
        className="mx-auto max-w-6xl px-6 pt-14 md:pt-20"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="grid gap-x-6 lg:grid-cols-12"
          >
            <blockquote className="min-h-[120px] md:min-h-[140px] lg:col-span-9 lg:col-start-3">
              <p className="type-m text-ink/85">{t.quote}</p>
            </blockquote>

            <figcaption className="mt-10 flex items-center gap-4 lg:col-span-6 lg:col-start-1">
              <span className="relative block h-10 w-10 overflow-hidden">
                <MediaPlaceholder
                  fill
                  quiet
                  kind="avatar"
                  label="Retrato del testimonio"
                />
              </span>
              <p className="text-[13.5px] text-ink">
                <span className="font-medium">{t.name}</span>
                <span className="text-muted">{` · ${t.role}`}</span>
              </p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
