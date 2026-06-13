"use client";

import { motion } from "framer-motion";
import EdgePortrait from "@/components/ui/EdgePortrait";
import { EASE, fadeUp, stagger, wipeUp } from "@/components/ui/motion";

/**
 * Headline provisional (copy definitivo en entrega 2). Las líneas llevan
 * cortes duros: la 2.ª y 3.ª son las más largas y cruzan 1–2 columnas
 * sobre el borde de la foto (whitespace-nowrap + desborde visible).
 */
const HEADLINE_LINES = [
  "Coaching para",
  "personas y equipos",
  "que trabajan mejor",
];

const META = [
  { label: "Individual · equipos · online y presencial" },
  { label: "Buenos Aires, ——" },
  { label: "@lunagonzalezff", href: "https://instagram.com/lunagonzalezff" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-paper lg:flex lg:min-h-[92vh] lg:flex-col">
      {/* Contenido — columna izquierda, z-10 sobre la foto */}
      <motion.div
        variants={stagger(0.1, 0.25)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:pb-20 lg:pt-44"
      >
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p
              variants={fadeUp}
              className="text-[13px] font-medium tracking-[0.06em] text-muted"
            >
              Coach profesional — personas y equipos
            </motion.p>

            <h1 className="type-xl mt-7 text-ink">
              {HEADLINE_LINES.map((line) => (
                <span key={line} className="block overflow-y-clip">
                  <motion.span
                    variants={wipeUp}
                    className="block lg:whitespace-nowrap"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-9 max-w-sm text-[15px] leading-relaxed text-muted"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-4"
            >
              <motion.a
                href="#agendar"
                whileTap={{ scale: 0.98 }}
                className="bg-ink px-7 py-3.5 text-[14px] font-medium text-paper transition-colors duration-300 hover:bg-[#2e2e2c]"
              >
                Agendar una reunión
              </motion.a>
              <a
                href="#servicios"
                className="group relative text-[14px] font-medium text-ink"
              >
                Ver servicios
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 block h-px w-full origin-left scale-x-100 bg-ink/30 transition-colors duration-300 group-hover:bg-ink"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Retrato sangrado al borde derecho (en mobile entra al flujo acá) */}
      <EdgePortrait
        side="right"
        widthClass="lg:w-[44vw]"
        label="Retrato de Luna — plano 3/4, mirando a cámara"
        className="lg:z-[1]"
      />

      {/* Meta del hero: hairline que muere contra el borde de la foto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
        className="border-t border-line lg:mt-auto"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between lg:max-w-[54%]">
            {META.map((m) =>
              m.href ? (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-fit text-[12px] tracking-[0.08em] text-muted transition-colors duration-300 hover:text-ink"
                >
                  {m.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 block h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100"
                  />
                </a>
              ) : (
                <span
                  key={m.label}
                  className="text-[12px] tracking-[0.08em] text-muted"
                >
                  {m.label}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
