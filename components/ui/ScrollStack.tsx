type StackItem = {
  num: string;
  text: string;
};

/**
 * Cards que se apilan al hacer scroll (position: sticky en cascada).
 * Adaptación del componente "scroll-card" de 21st.dev al lenguaje del sitio:
 * monocromo, esquinas rectas, hairlines, numerales gigantes. Sin Lenis
 * (scroll nativo) para no tocar el comportamiento de scroll global del sitio.
 *
 * Mecánica: todas las cards son hermanas `sticky` con un `top` creciente, así
 * se fijan en cascada y se apilan dejando ver una franja de cada una. Un leve
 * gradiente de grises distingue las cards al apilarse sin salir del monocromo.
 */
const CARD_BG = ["#ffffff", "#f3f3ef", "#e9e9e4", "#dfdfd9", "#d5d5ce"];

export default function ScrollStack({ items }: { items: StackItem[] }) {
  return (
    <div className="relative px-6">
      {items.map((it, i) => (
        <div
          key={it.num}
          className="sticky"
          style={{ top: `calc(5.5rem + ${i * 2}rem)` }}
        >
          <article
            className="mx-auto flex min-h-[17rem] max-w-6xl flex-col justify-center gap-4 border border-line p-7 shadow-[0_-10px_40px_-24px_rgba(0,0,0,0.18)] md:min-h-[23rem] md:flex-row md:items-center md:gap-12 md:p-12"
            style={{ backgroundColor: CARD_BG[i] ?? CARD_BG[CARD_BG.length - 1] }}
          >
            <span className="shrink-0 font-display font-medium leading-[0.8] tracking-[-0.02em] text-ink/25 [font-size:clamp(3.5rem,5.5vw,5rem)] [font-variant-numeric:tabular-nums]">
              {it.num}
            </span>
            <p className="type-l text-ink/90 md:max-w-[28ch]">{it.text}</p>
          </article>
        </div>
      ))}
      {/* respiro para que la última card termine de apilar antes de salir */}
      <div className="h-[6vh]" aria-hidden />
    </div>
  );
}
