"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { EASE } from "@/components/ui/motion";

const SLIDES = [
  { kind: "video" as const, label: "Luna dando un taller (clip corto)" },
  { kind: "foto" as const, label: "Sesión de coaching individual" },
  { kind: "foto" as const, label: "Dinámica de team building" },
];

const SLIDE_MS = 4000;

const HEADLINE = "Coaching para personas y equipos que quieren trabajar mejor";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = HEADLINE.split(" ");

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-band"
    >
      {/* Slideshow de placeholders con Ken Burns */}
      <div className="absolute inset-[-3%]">
        {SLIDES.map((s, i) => (
          <motion.div
            key={s.label}
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{
                scale: [1.05, 1.12],
                x: i % 2 === 0 ? ["0%", "1.2%"] : ["1.2%", "0%"],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute inset-0 will-change-transform"
            >
              <MediaPlaceholder fill dark quiet kind={s.kind} label={s.label} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Triple overlay para profundidad y legibilidad */}
      <div className="absolute inset-0 bg-ink/35" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/15 to-ink/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/35 to-transparent"
        aria-hidden
      />

      {/* Contenido centrado con parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-3xl px-6 pb-32 pt-36 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-paper/25 px-4 py-1.5"
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-paper"
            aria-hidden
          />
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-paper/80">
            Coach profesional · Individual y equipos
          </span>
        </motion.div>

        <h1 className="mt-8 font-display text-[2.6rem] font-medium leading-[1.06] tracking-[-0.025em] text-paper sm:text-6xl lg:text-[4.3rem]">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.3 + i * 0.07 }}
              className="inline-block whitespace-pre will-change-transform"
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
          className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-paper/70"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="#agendar"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full items-center justify-center gap-3 rounded-md bg-paper py-3 pl-6 pr-2.5 text-[14px] font-medium text-ink sm:w-auto"
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
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-md border border-paper/30 px-6 py-3 text-[14px] font-medium text-paper transition-colors duration-300 hover:border-paper/60 hover:bg-paper/5 sm:w-auto"
          >
            Ver servicios
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Chip de especificación del slide activo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-7 left-6 z-10 hidden items-center gap-2.5 border border-paper/15 px-3 py-2 md:flex"
      >
        <span className="text-[9.5px] font-medium uppercase tracking-[0.2em] text-paper/55">
          {SLIDES[active].kind} · {SLIDES[active].label}
        </span>
      </motion.div>

      {/* Dots + contador */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-7 right-6 z-10 flex items-center gap-5"
      >
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              aria-label={`Ver slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === active ? "w-7 bg-paper" : "w-2 bg-paper/35 hover:bg-paper/60"
              }`}
            />
          ))}
        </div>
        <span className="hidden text-[11px] font-medium tracking-[0.18em] text-paper/55 md:block">
          0{active + 1} / 0{SLIDES.length}
        </span>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#problema"
        aria-label="Bajar a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block text-paper/60"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  );
}
