"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "@/components/ui/motion";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Transparente solo sobre el hero; nunca texto invisible sobre fondo claro
  const isTransparent = !scrolled && !open;
  const text = isTransparent ? "text-paper" : "text-ink";
  const textMuted = isTransparent ? "text-paper/75" : "text-muted";

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "border-b border-line bg-paper/92 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className={`flex items-baseline gap-2.5 transition-colors duration-500 ${text}`}
        >
          <span className="font-display text-[17px] font-semibold tracking-[-0.01em]">
            Luna González
          </span>
          <span
            className={`text-[10px] font-medium uppercase tracking-[0.26em] ${textMuted}`}
          >
            Coach
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-[13.5px] font-medium tracking-wide transition-colors duration-500 ${textMuted} ${
                isTransparent ? "hover:text-paper" : "hover:text-ink"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 block h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  isTransparent ? "bg-paper" : "bg-ink"
                }`}
              />
            </a>
          ))}
          <a
            href="#agendar"
            className={`group flex items-center gap-2.5 rounded-md py-2 pl-5 pr-2 text-[13.5px] font-medium transition-all duration-500 active:scale-[0.98] ${
              isTransparent
                ? "bg-paper text-ink hover:bg-white"
                : "bg-ink text-paper hover:bg-[#2e2e2c]"
            }`}
          >
            Agendar reunión
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-[4px] transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-0.5 ${
                isTransparent ? "bg-ink/8" : "bg-paper/12"
              }`}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden
              >
                <path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5" />
              </svg>
            </span>
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              isTransparent ? "bg-paper" : "bg-ink"
            } ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              isTransparent ? "bg-paper" : "bg-ink"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              isTransparent ? "bg-paper" : "bg-ink"
            } ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-line bg-paper md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 + i * 0.05 }}
                  className="border-b border-line py-3.5 text-[15px] font-medium text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#agendar"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                className="mt-4 rounded-md bg-ink px-5 py-3.5 text-center text-[15px] font-medium text-paper"
              >
                Agendar reunión
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
