"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE, VIEWPORT_BOTTOM, fadeUp } from "@/components/ui/motion";

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
    <section
      id="testimonios"
      className="border-y border-line bg-surface py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          index="08"
          label="Testimonios"
          title="Lo que dicen después de trabajar conmigo"
          align="center"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_BOTTOM}
          className="mt-16"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex flex-col items-center"
            >
              {/* Altura mínima fija en el área de la cita para no saltar entre slides */}
              <div className="flex min-h-[180px] flex-col items-center">
                <span
                  aria-hidden
                  className="font-display text-6xl leading-none text-line"
                >
                  “
                </span>
                <blockquote className="mt-5 max-w-2xl text-center font-display text-xl font-normal leading-normal text-ink/85 md:text-[1.6rem]">
                  {t.quote}
                </blockquote>
              </div>

              <figcaption className="mt-6 flex flex-col items-center">
                <span className="relative block h-12 w-12 overflow-hidden rounded-full">
                  <MediaPlaceholder
                    fill
                    quiet
                    kind="avatar"
                    label="Retrato del testimonio"
                  />
                </span>
                <span className="mt-3 text-[13.5px] font-medium text-ink">
                  {t.name}
                </span>
                <span className="mt-0.5 text-[12.5px] text-muted">{t.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Controles */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 ease-(--ease-out-expo) hover:border-ink/30"
            >
              <ChevronLeft size={18} strokeWidth={1.5} aria-hidden />
            </button>
            <span className="text-[11px] font-medium tracking-[0.18em] text-muted">
              {`0${index + 1} / 0${total}`}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Testimonio siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 ease-(--ease-out-expo) hover:border-ink/30"
            >
              <ChevronRight size={18} strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
