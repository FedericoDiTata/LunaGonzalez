"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { EASE, fadeUp, stagger, staggerItem, VIEWPORT_BOTTOM } from "@/components/ui/motion";

type FaqItem = {
  question: string;
  answer: string;
};

const ITEMS: FaqItem[] = [
  {
    question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.",
  },
  {
    question: "¿Sed do eiusmod tempor incididunt ut labore et dolore?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    question: "¿Ut enim ad minim veniam, quis nostrud exercitation?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident sunt in culpa.",
  },
  {
    question: "¿Duis aute irure dolor in reprehenderit voluptate?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.",
  },
  {
    question: "¿Excepteur sint occaecat cupidatat non proident sunt?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    question: "¿Sed ut perspiciatis unde omnis iste natus error?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-paper pb-16 pt-12 md:pb-16 md:pt-14">
      <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-12 px-6 lg:grid-cols-12">
        {/* Columna funcional: título y salida directa al contacto */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_BOTTOM}
          className="lg:col-span-4"
        >
          <h2 className="type-m text-ink">Preguntas frecuentes</h2>
          <p className="mt-5 max-w-[26ch] text-[14.5px] leading-relaxed text-muted">
            ¿Tenés otra duda?{" "}
            <a
              href="#agendar"
              className="group relative inline-block font-medium text-ink"
            >
              Escribime
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 block h-px w-full origin-left scale-x-100 bg-ink/30 transition-colors duration-300 group-hover:bg-ink"
              />
            </a>{" "}
            y te respondo en —— hs hábiles.
          </p>
        </motion.div>

        {/* Accordion de hairlines */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_BOTTOM}
          className="lg:col-span-7 lg:col-start-6"
        >
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.question}
                variants={staggerItem}
                className={`border-b border-line ${i === 0 ? "border-t" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[15px] font-medium text-ink">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="shrink-0 text-ink/60"
                    aria-hidden
                  >
                    <Plus size={18} strokeWidth={1.5} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="respuesta"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-[14px] leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
