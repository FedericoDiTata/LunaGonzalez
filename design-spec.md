# Design Spec — Landing Luna González (Primera entrega: estructura)

Documento de referencia para construir las secciones. **Leer completo antes de codear.**

## Contexto

Landing one-scroll para Luna González, coach profesional (+10 años en concesionarias de autos, formación internacional). Servicios: coaching individual, coaching de equipos, team building, programa para concesionarias. Instagram: @lunagonzalezff.

**Primera entrega = estructura.** Sin paleta (escala de grises, flat). Títulos de sección reales, cuerpos de texto en lorem ipsum. Fotos/videos = componente `MediaPlaceholder`. Debe verse como el trabajo de un diseñador humano senior: editorial, monocromo, tipografía protagonista.

## Stack y convenciones

- Next.js 16 App Router + Tailwind v4 + Framer Motion v12 + TypeScript.
- Cada sección = un componente en `components/sections/`, default export, `"use client"` (todas usan framer-motion).
- NO tocar `page.tsx`, `layout.tsx`, `globals.css` ni archivos de otras secciones.
- NO correr npm, ni build, ni git. Solo escribir los archivos asignados.
- Sin dependencias nuevas. Disponible: `framer-motion`, `lucide-react`.

## Tokens (definidos en `app/globals.css` via `@theme`)

| Token | Uso |
|---|---|
| `bg-paper` `text-paper` | Fondo general #FAFAF8 / texto sobre oscuro |
| `bg-surface` | Cards blancas #FFFFFF |
| `bg-band` | Bandas oscuras #151514 |
| `text-ink` `bg-ink` | Texto principal #161616 |
| `text-muted` | Texto secundario #6F6F69 |
| `border-line` `bg-line` | Hairlines #E6E6E1 |
| `bg-fill-soft` | Fondo de sección alternativo #F0F0EC |
| `font-display` | Poppins (headings) |
| (default body) | Inter |
| `ease-(--ease-out-expo)` | cubic-bezier(0.16,1,0.3,1) para transitions CSS |

## Componentes compartidos (leer su código antes de usar)

- `components/ui/motion.ts` — `EASE`, `VIEWPORT`, `VIEWPORT_BOTTOM`, variants `fadeUp`, `stagger()`, `staggerItem`, `wipeUp`, `field`, `pill`. Usarlos siempre que apliquen.
- `components/ui/SectionHeading.tsx` — encabezado editorial obligatorio en cada sección: `index` ("03"), `label`, `title`, `align`, `dark`.
- `components/ui/MediaPlaceholder.tsx` — TODA foto/video va con esto. Props: `label` (qué material debe entregar la clienta), `kind` ("foto"|"video"|"avatar"), `ratio` ("4:5"), `fill`, `dark`, `quiet`.

## Reglas de diseño (anti-genérico — obligatorias)

1. **Flat editorial monocromo:** sin gradientes de color, sin sombras pesadas. Hairlines `border-line` en lugar de sombras. Sombra solo en hover de cards: `0 12px 32px rgba(0,0,0,0.05)` máximo.
2. **Tipografía protagonista:** headings `font-display` (Poppins) con `tracking-[-0.02em]` y `leading-[1.06]`. Cuerpo Inter `text-[15px] leading-relaxed`. Meta-labels: `text-[11px] uppercase tracking-[0.22em]`.
3. **Radios chicos:** botones y cards `rounded-md` / `rounded-lg` máx. Pills solo para tags/chips chicos (`rounded-full`).
4. **Íconos:** `lucide-react` con `strokeWidth={1.5}`, tamaño 20–22. NUNCA emojis.
5. **Ritmo:** secciones `py-28 md:py-36`. Contenedor `mx-auto max-w-6xl px-6`. Gap entre heading y contenido: `mt-14 md:mt-20`.
6. **Botón primario:** `bg-ink text-paper rounded-md text-[14px] font-medium`, padding `py-3 pl-6 pr-2.5`, con ícono de flecha anidado en un cuadradito `bg-paper/12 rounded-[5px] h-7 w-7` que se desplaza en hover (ver patrón exacto en `Hero.tsx`). Sobre fondo oscuro: invertir (`bg-paper text-ink`, cuadradito `bg-ink/8`).
7. **Textos:** títulos de sección reales (en español rioplatense, voseo); párrafos, items, preguntas y citas en lorem ipsum. Precios: `$ ——`.
8. **Clases Tailwind SIEMPRE completas** — nunca construir nombres de clase con template strings parciales (`hover:${x}` ❌).

## Animación (Framer Motion v12 — bugs conocidos, NO violar)

1. `Variants` siempre tipados con `: Variants` (importar de los compartidos cuando se pueda).
2. Spring solo con 2 keyframes. Nunca `[a, b, c]` con spring.
3. Loops infinitos siempre con `ease: "easeInOut"` explícito.
4. Secciones cerca del fondo de página (Testimonios, FAQ, Agendar): `viewport` con `VIEWPORT_BOTTOM` (amount 0.1). Resto: `VIEWPORT`.
5. `whileInView` con `once: true` siempre. Combinar opacity con y/x/scale (nunca opacity sola).
6. Hover de cards: `whileHover={{ y: -6 }}` con spring `stiffness: 280, damping: 20`.
7. Animar solo `transform` y `opacity`.

## Orden de secciones y numeración editorial

| Index | id | Archivo | Fondo |
|---|---|---|---|
| 01 | `inicio` | Hero.tsx (hecho) | banda oscura |
| 02 | `problema` | Problema.tsx | paper |
| 03 | `servicios` | Servicios.tsx | fill-soft |
| 04 | `promesa` | Promesa.tsx | banda oscura |
| 05 | `metodologia` | Metodologia.tsx | paper |
| 06 | `para-quien` | ParaQuien.tsx | fill-soft |
| 07 | `sobre-mi` | SobreMi.tsx | paper |
| 08 | `testimonios` | Testimonios.tsx | surface con borders top/bottom |
| 09 | `faq` | Faq.tsx | paper |
| 10 | `agendar` | Agendar.tsx (lo hace el lead) | banda oscura |

La variación de layout entre secciones consecutivas es deliberada: alternar alineación (izquierda/centro), fondos y estructuras. Nunca dos secciones seguidas con el mismo patrón "título centrado + grid de 3 cards".

## Especificación por sección

### 02 — Problema (`Problema.tsx`, id `problema`)
Editorial asimétrico, NADA de cards. Grid `lg:grid-cols-12`:
- Izquierda `lg:col-span-4`: `lg:sticky lg:top-32 self-start` → `SectionHeading index="02" label="El punto de partida" title="¿Algo de esto te suena?"` + párrafo lorem `text-muted text-[15px] mt-6 max-w-xs`.
- Derecha `lg:col-span-7 lg:col-start-6`: 5 frases de dolor (lorem, largos variados, 6–14 palabras). Cada una: fila `border-b border-line py-7 md:py-8 flex gap-6 items-baseline` con índice `01`–`05` (`text-[11px] text-muted tracking-[0.08em]`) + frase `font-display text-xl md:text-2xl lg:text-[1.65rem] font-normal leading-snug text-ink/85`. Primera fila también con `border-t`.
- Reveal: cada fila dentro de `overflow-hidden` con wipe (`wipeUp`) + stagger 0.1 entre filas.

### 03 — Servicios (`Servicios.tsx`, id `servicios`)
Fondo `bg-fill-soft`. Header en 2 columnas editoriales: `SectionHeading index="03" label="Servicios" title="Cuatro maneras de trabajar juntos"` a la izquierda; párrafo lorem `text-muted max-w-sm` abajo a la derecha (alineado al baseline inferior con flex).
- Grid `md:grid-cols-3 gap-px`(o gap-5): 3 cards iguales — **Coaching individual** (ícono `User`), **Coaching de equipos** (`Users`), **Team building** (`Puzzle`). Card: `bg-surface border border-line rounded-lg p-8 flex flex-col`, ícono arriba, título `font-display text-lg font-medium mt-6`, 3 bullets lorem con `+` chiquito (`text-muted text-[13.5px]`), separador hairline, fila de precio: label `Desde` muted + `$ ——` `font-display text-xl` + `/ sesión` muted, y mini-link "Agendar →" (`#agendar`). Entrada: `stagger` + `staggerItem`. Hover: lift y -6 + sombra suave + `hover:border-ink/15`.
- Debajo, card destacada full-width (el diferencial): `bg-band text-paper rounded-lg overflow-hidden grid md:grid-cols-2`. Izquierda `p-8 md:p-12`: chip `Programa exclusivo` (`border border-paper/25 rounded-full text-[10px] uppercase tracking-[0.22em] px-3 py-1`), título "Programa para concesionarias" `font-display text-2xl md:text-3xl`, ícono `Car`, párrafo lorem `text-paper/65`, precio `$ ——` + CTA botón claro (patrón invertido del spec). Derecha: `MediaPlaceholder dark kind="foto" ratio="16:9"` o fill de la mitad, `label="Equipo comercial en concesionaria"`. Entrada `fadeUp`.

### 04 — Promesa (`Promesa.tsx`, id `promesa`)
Banda oscura `bg-band text-paper`, `py-32 md:py-40`, todo centrado, container `max-w-4xl`.
- `SectionHeading index="04" label="La promesa" title={...}` `align="center" dark` — el title acá es la GRAN frase: lorem de ~12 palabras con 2 palabras en `<em className="italic font-normal">`.
- Debajo `mt-16 md:mt-20`: 3 resultados en `grid md:grid-cols-3`, separados por hairlines verticales `md:divide-x md:divide-white/10` (en mobile, divide-y): cada uno `px-8 py-6 text-center`: label `Resultado 0N` (`text-[10px] uppercase tracking-[0.24em] text-paper/40`) + frase lorem corta `text-paper/80 text-[15px] mt-3`. Stagger.

### 05 — Metodología (`Metodologia.tsx`, id `metodologia`)
Fondo paper. `SectionHeading index="05" label="Cómo trabajamos" title="Un proceso claro, paso a paso" align="center"`.
- 4 pasos: `grid md:grid-cols-4 gap-10` (mobile: vertical con línea izquierda). Cada paso: círculo `h-14 w-14 rounded-full border border-line bg-surface flex items-center justify-center font-display text-[15px]` con número `01`–`04`, spring pop (2 keyframes, `stiffness: 180, damping: 14, delay: 0.3 + i * 0.18`); título del paso REAL ("Reunión inicial", "Diagnóstico", "Plan de trabajo", "Seguimiento") `font-display text-base font-medium mt-5`; 2 líneas lorem `text-muted text-[13.5px]`.
- Detrás de los círculos (solo desktop): línea SVG horizontal punteada (`strokeDasharray="4 6"`, `stroke-line`... usar stroke `#E6E6E1`) que se dibuja con `pathLength` 0→1, 1.2s, delay 0.4.
- Cierre: CTA centrado `mt-16` — link con flecha "Agendar la primera reunión" → `#agendar` (subrayado animado en hover, patrón navbar).

### 06 — Para quién (`ParaQuien.tsx`, id `para-quien`)
Fondo `bg-fill-soft`. `SectionHeading index="06" label="Para quién" title="Esto es para vos — y quizás no"`.
- `mt-14 grid md:grid-cols-2` con divisor central `md:divide-x md:divide-line` (mobile `divide-y`): 
  - Col A (`md:pr-12`): subtítulo "Es para vos si…" `font-display text-lg font-medium`, lista de 5 items lorem: cada item `flex gap-4 py-4 border-b border-line last:border-0`, ícono `Check` en circulito `h-6 w-6 rounded-full border border-ink/20` strokeWidth 1.5 size 13, texto `text-[14.5px] text-ink/80`. Items entran en stagger desde la izquierda (`x: -16`).
  - Col B (`md:pl-12`): "No es para vos si…", ícono `Minus` (o `X`) circulito `border-line`, texto `text-muted`. Stagger desde la derecha (`x: 16`).

### 07 — Sobre mí (`SobreMi.tsx`, id `sobre-mi`)
Fondo paper. Grid `lg:grid-cols-12 gap-12 items-center`:
- Izquierda `lg:col-span-5`: contenedor relativo con `MediaPlaceholder kind="foto" ratio="4:5" label="Retrato profesional de Luna"` que entra con slide desde la izquierda (`x: -32`); detrás, offset `-bottom-4 -right-4`, un cuadrado decorativo `bg-band` `h-24 w-24 -z-10` (absolute) con spring pop.
- Derecha `lg:col-span-6 lg:col-start-7`: `SectionHeading index="07" label="Sobre mí" title="Luna González"` + 2 párrafos lorem `text-muted text-[15px] mt-8 space-y-4 max-w-lg` + pills de credenciales `mt-8 flex flex-wrap gap-2.5` con variants `pill` (custom i): `+10 años en concesionarias`, `Certificación internacional · ——`, `Coach individual y de equipos`, `—— procesos acompañados`. Pill: `rounded-full border border-line bg-surface px-4 py-1.5 text-[12px] text-ink/75`.

### 08 — Testimonios (`Testimonios.tsx`, id `testimonios`)
`bg-surface border-y border-line`. Container `max-w-4xl` centrado. Usar `VIEWPORT_BOTTOM`.
- `SectionHeading index="08" label="Testimonios" title="Lo que dicen después de trabajar conmigo" align="center"`.
- Carrusel de 4 citas lorem (largos variados, 18–30 palabras): `AnimatePresence mode="wait"` crossfade (`opacity` + `y: 14`), `mt-16 min-h-[180px]` para no saltar de altura. Cita: comillas decorativas `font-display text-6xl text-line leading-none` ( " ) arriba, texto `font-display text-xl md:text-[1.6rem] font-normal leading-normal text-ink/85 text-center`.
- Debajo: `MediaPlaceholder kind="avatar" quiet` circular `h-12 w-12 rounded-full overflow-hidden` + `Nombre Apellido` `text-[13.5px] font-medium` + `Cargo · Empresa` `text-muted text-[12.5px]`.
- Controles centrados `mt-10`: botón prev y next (`h-10 w-10 rounded-full border border-line hover:border-ink/30 flex items-center justify-center`, `ChevronLeft/Right` 18 strokeWidth 1.5) + índice `01 / 04` `text-[11px] tracking-[0.18em] text-muted`.

### 09 — FAQ (`Faq.tsx`, id `faq`)
Fondo paper. Container angosto `max-w-2xl mx-auto`. Usar `VIEWPORT_BOTTOM`.
- `SectionHeading index="09" label="Preguntas frecuentes" title="Las dudas de siempre"`.
- `mt-14`: 6 items SIN cajas — solo `border-b border-line` (primero también `border-t`). Header del item: `<button>` fila `w-full flex items-center justify-between gap-6 py-6 text-left`, pregunta lorem terminada en `?` `text-[15px] font-medium text-ink`, toggle `+` que rota a `×`: `motion.span` con `animate={{ rotate: open ? 45 : 0 }}` conteniendo `Plus` de lucide (18, strokeWidth 1.5).
- Respuesta: `AnimatePresence` `height: 0 → "auto"` + opacity, lorem 2–3 líneas `text-muted text-[14px] pb-6 pr-10`.
- Un solo item abierto a la vez (`useState<number | null>(null)`).

## Checklist final por sección

- [ ] `"use client"` arriba
- [ ] id de sección correcto (anclas del navbar dependen de esto)
- [ ] SectionHeading con index/label correctos
- [ ] Solo tokens del design system (nada de grises hardcodeados nuevos)
- [ ] Lorem en cuerpos, nunca inventar copy real
- [ ] Animaciones cumplen los 7 puntos de la sección Animación
- [ ] Responsive: mobile primero apilado, sin overflow horizontal
