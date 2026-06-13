import type { CSSProperties } from "react";

type MediaKind = "foto" | "video" | "avatar";

type Props = {
  /** Descripción del material esperado, ej. "Luna en taller" */
  label: string;
  kind?: MediaKind;
  /** Relación de aspecto, ej. "4:5", "16:9". Ignorada si fill */
  ratio?: string;
  /** Ocupa todo el contenedor padre (position: absolute inset-0) */
  fill?: boolean;
  /** Variante para fondos oscuros */
  dark?: boolean;
  /** Oculta el texto (para usos decorativos muy chicos) */
  quiet?: boolean;
  className?: string;
};

function KindIcon({ kind }: { kind: MediaKind }) {
  const common = {
    width: 22,
    height: 22,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (kind === "video") {
    return (
      <svg viewBox="0 0 24 24" {...common} aria-hidden>
        <polygon points="10 8.5 16 12 10 15.5 10 8.5" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  }
  if (kind === "avatar") {
    return (
      <svg viewBox="0 0 24 24" {...common} aria-hidden>
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M5 20c1.4-3.2 4-4.8 7-4.8s5.6 1.6 7 4.8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...common} aria-hidden>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <circle cx="9" cy="9.5" r="1.6" />
      <path d="M3.5 16.5 9 12l4 3.5 3-2.5 4.5 3.5" />
    </svg>
  );
}

/**
 * Placeholder de foto/video estilo handoff de agencia: indica a la clienta
 * exactamente qué material entregar y en qué formato, sin verse "roto".
 */
export default function MediaPlaceholder({
  label,
  kind = "foto",
  ratio,
  fill = false,
  dark = false,
  quiet = false,
  className = "",
}: Props) {
  const style: CSSProperties = {};
  if (!fill && ratio) {
    style.aspectRatio = ratio.replace(":", " / ");
  }

  const hatch = dark
    ? "repeating-linear-gradient(135deg, transparent 0px, transparent 9px, rgba(255,255,255,0.045) 9px, rgba(255,255,255,0.045) 10px)"
    : "repeating-linear-gradient(135deg, transparent 0px, transparent 9px, rgba(22,22,22,0.04) 9px, rgba(22,22,22,0.04) 10px)";

  const tick = dark ? "border-white/25" : "border-ink/20";

  return (
    <div
      className={`relative overflow-hidden ${
        fill ? "absolute inset-0" : ""
      } ${
        dark
          ? "bg-[#1d1d1b] text-white/45 border border-white/10"
          : "bg-[#ECECE8] text-ink/40 border border-line"
      } ${className}`}
      style={style}
      role="img"
      aria-label={`Placeholder de ${kind}: ${label}`}
    >
      {/* Trama diagonal sutil */}
      <div className="absolute inset-0" style={{ backgroundImage: hatch }} aria-hidden />

      {/* Shimmer lento */}
      <div className="media-shimmer absolute inset-0" aria-hidden />

      {/* Marcas de esquina, estilo plano técnico */}
      <span className={`absolute left-3 top-3 h-3 w-3 border-l border-t ${tick}`} aria-hidden />
      <span className={`absolute right-3 top-3 h-3 w-3 border-r border-t ${tick}`} aria-hidden />
      <span className={`absolute bottom-3 left-3 h-3 w-3 border-b border-l ${tick}`} aria-hidden />
      <span className={`absolute bottom-3 right-3 h-3 w-3 border-b border-r ${tick}`} aria-hidden />

      {!quiet && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span
            className={`flex h-11 w-11 items-center justify-center border ${
              dark ? "border-white/20" : "border-ink/15"
            }`}
          >
            <KindIcon kind={kind} />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
            {kind}
            {ratio ? ` · ${ratio}` : ""}
          </span>
          <span className="max-w-[22ch] text-[11px] leading-relaxed tracking-wide opacity-80">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
