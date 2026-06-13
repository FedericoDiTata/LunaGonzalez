"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { EASE, fadeUp, field, VIEWPORT_BOTTOM, wipeUp } from "@/components/ui/motion";

const SERVICIOS = [
  "Coaching individual",
  "Coaching de equipos",
  "Team building",
  "Programa para concesionarias",
  "Todavía no lo sé",
];

const inputBase =
  "w-full border-b border-paper/20 bg-transparent py-3 text-[15px] text-paper placeholder:text-paper/35 outline-none transition-colors duration-300 focus:border-paper";

const labelBase =
  "block text-[10.5px] font-medium uppercase tracking-[0.22em] text-paper/45";

export default function Agendar() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="agendar" className="bg-band py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Segundo y último uso de type-xl. El observador va en el wrapper:
            el h2 arranca clippeado por el overflow y no dispararía. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_BOTTOM}
          className="overflow-y-clip"
        >
          <motion.h2 variants={wipeUp} className="type-xl">
            Hablemos.
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid gap-y-14 md:mt-24 lg:grid-cols-12 lg:gap-x-6">
          {/* Meta: filas planas con hairlines, sin cajas */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_BOTTOM}
            className="lg:col-span-4"
          >
            <p className="max-w-sm text-[15px] leading-relaxed text-paper/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              <p className="py-4 text-[13px] tracking-[0.04em] text-paper/70">
                Respuesta en —— hs hábiles
              </p>
              <a
                href="https://instagram.com/lunagonzalezff"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-4 text-[13px] tracking-[0.04em] text-paper/70 transition-colors duration-300 hover:text-paper"
              >
                <InstagramIcon size={15} />
                @lunagonzalezff
              </a>
              <p className="py-4 text-[13px] tracking-[0.04em] text-paper/70">
                hola@——.com
              </p>
            </div>
          </motion.div>

          {/* Formulario */}
          <div className="lg:col-span-7 lg:col-start-6">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex min-h-[420px] flex-col items-center justify-center border border-paper/15 px-8 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className="flex h-14 w-14 items-center justify-center border border-paper/30"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m4.5 12.5 5 5 10-11" />
                    </svg>
                  </motion.span>
                  <p className="mt-6 font-display text-2xl font-medium">
                    Mensaje enviado
                  </p>
                  <p className="mt-3 max-w-xs text-[14px] text-paper/55">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="group relative mt-8 text-[13px] font-medium text-paper/70 transition-colors duration-300 hover:text-paper"
                  >
                    Enviar otra consulta
                    <span className="absolute -bottom-1 left-0 block h-px w-full origin-left scale-x-0 bg-paper transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_BOTTOM}
                  className="space-y-9"
                >
                  <div className="grid gap-9 sm:grid-cols-2">
                    <motion.div variants={field} custom={0}>
                      <label htmlFor="nombre" className={labelBase}>
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className={inputBase}
                      />
                    </motion.div>
                    <motion.div variants={field} custom={1}>
                      <label htmlFor="email" className={labelBase}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className={inputBase}
                      />
                    </motion.div>
                  </div>

                  <div className="grid gap-9 sm:grid-cols-2">
                    <motion.div variants={field} custom={2}>
                      <label htmlFor="telefono" className={labelBase}>
                        Teléfono <span className="normal-case">(opcional)</span>
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+54 ——"
                        className={inputBase}
                      />
                    </motion.div>
                    <motion.div variants={field} custom={3}>
                      <label htmlFor="servicio" className={labelBase}>
                        Me interesa
                      </label>
                      <select
                        id="servicio"
                        name="servicio"
                        defaultValue={SERVICIOS[0]}
                        className={`${inputBase} appearance-none cursor-pointer [&>option]:bg-band [&>option]:text-paper`}
                      >
                        {SERVICIOS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  <motion.div variants={field} custom={4}>
                    <label htmlFor="mensaje" className={labelBase}>
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      placeholder="Contame brevemente tu situación…"
                      className={`${inputBase} resize-none`}
                    />
                  </motion.div>

                  <motion.div variants={field} custom={5}>
                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-paper px-8 py-3.5 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-white sm:w-auto"
                    >
                      Agendar reunión
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
