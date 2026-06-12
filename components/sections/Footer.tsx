"use client";

import { motion } from "framer-motion";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { EASE, VIEWPORT_BOTTOM } from "@/components/ui/motion";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_BOTTOM}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-6xl px-6 py-16 md:py-20"
      >
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-5">
            <a href="#inicio" className="flex items-baseline gap-2.5 text-ink">
              <span className="font-display text-[17px] font-semibold tracking-[-0.01em]">
                Luna González
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-muted">
                Coach
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          {/* Navegación */}
          <nav className="md:col-span-3" aria-label="Secciones del sitio">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-muted">
              Secciones
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative text-[13.5px] text-ink/75 transition-colors duration-300 hover:text-ink"
                  >
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 block h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="md:col-span-4">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-muted">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-[13.5px] text-ink/75">
              <li>
                <a
                  href="https://instagram.com/lunagonzalezff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-ink"
                >
                  <InstagramIcon size={15} />
                  @lunagonzalezff
                </a>
              </li>
              <li className="text-muted">hola@—————.com</li>
              <li className="text-muted">——————, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="text-[12px] text-muted">
            © {new Date().getFullYear()} Luna González — Coach profesional
          </p>
          <p className="text-[12px] text-muted">
            Sitio desarrollado por{" "}
            <span className="font-medium text-ink/70">BrodhIA</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
