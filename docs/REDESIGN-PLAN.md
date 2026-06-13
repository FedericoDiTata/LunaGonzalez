# Plan de rediseño — composición anti-template

Rediseño a nivel layout de la entrega 1. **No cambia**: contenido lorem, grises, placeholders,
ids de sección, stack. **Cambia**: composición, anatomía de cada sección, jerarquías.

Decisiones cerradas por Fede (no reabrir):
- Hero claro, split 7/5, retrato sangrado al borde derecho.
- Escalonado de Problema va, con offsets en UN solo array. Plan B (indentación fija col 3) = cambio de una línea.
- Banda concesionarias: 7/5 (nunca 6/6).
- Texto-pisando-foto: mismo sistema en Hero y Sobre mí (componente compartido `EdgePortrait` + mismas reglas).
- Video del hero: si compite con el headline, moverlo a Metodología o Sobre mí a tamaño real. → **Decidido: va a Metodología** (columna izquierda sticky, ancho completo de sus 4 columnas). Razón: el split 7/5 con retrato no deja lugar al video sin degradarlo a decoración, y "cómo trabajo" es el contexto natural para un clip de Luna explicando el proceso.

---

## Reglas globales

1. Grilla de 12 columnas (`max-w-6xl px-6` = 72rem). Splits siempre desiguales: 7/5, 8/4, 5/7, 4/8, 3/9. **Prohibido 50/50 y 3 columnas iguales.**
2. Alineación izquierda por default. Única excepción deliberada: "Hablemos." en Agendar (centrado por escala, ocupa todo el ancho).
3. **Muere el eyebrow "(0N) ––– LABEL"**. Números solo como contenido (filas, pasos, contador). `SectionHeading` se elimina al final del run.
4. Esquinas rectas en todo: botones, paneles, bandas, controles, avatar. Cero `rounded-*` (excepción: ninguna).
5. Hairlines (`border-line` / `border-white/10`) como único ornamento. Las reglas horizontales sangran de borde a borde del viewport como motivo recurrente (Problema, Servicios, Testimonios, meta del Hero).
6. Roles tipográficos (utilities en globals.css):
   - `type-xl` — clamp(3.25rem→6.75rem). **Exactamente 2 usos**: headline del Hero y "Hablemos." de Agendar.
   - `type-l` — clamp(2.1rem→3.4rem): frases de Problema, manifiesto de Promesa, numerales de Metodología, nombre en Sobre mí, título destacado de concesionarias.
   - `type-m` — clamp(1.35rem→1.8rem): nombres de servicios, cita de Testimonios, títulos funcionales (Metodología, FAQ, "Servicios").
7. Ritmo vertical variable: Problema pegado al Hero (pt chico), aire enorme antes de Promesa, Testimonios cerca de Sobre mí. Fondos: paper / paper / paper+banda dark / **dark** / paper / paper+panel gris / paper / **gris full** / paper / **dark** / paper. Sin alternancia ABAB.
8. Cohesión: 2 tipografías, hairlines, esquinas rectas, mismo lenguaje de links (subrayado animado origin-left) y botones (sólido rectangular). La variedad es anatómica, no de lenguaje.
9. Animaciones: mismas reglas de la entrega 1 (Variants tipados, springs de 2 keyframes, `whileInView` SIEMPRE sobre un wrapper no recortado — lección del bug de wipe reveal — `VIEWPORT_BOTTOM` en secciones de fondo de página).

## Sistema compartido texto-sobre-foto (`components/ui/EdgePortrait.tsx`)

- **Mecanismo**: la foto es un bloque `lg:absolute` anclado a un borde del viewport (`inset-y-0` + `right-0|left-0` + ancho en vw). El contenido vive en el container normal con `relative z-10`. El título cruza el borde de la foto **entre 1 y 2 columnas**, siempre con color ink y z-10: en Hero cruzando por span (col-span-8 sobre foto que empieza ≈ col 7), en Sobre mí por margen negativo (`lg:-ml-[20%]`). Misma regla, dirección espejada.
- **Mobile (< lg)**: overlap APAGADO. La foto pasa a flujo normal con aspect ratio fijo (`aspect-[3/4]`), ancho completo, sin margen negativo. Hero: foto después del texto. Sobre mí: foto antes del texto.
- Props: `side`, `widthClass` (ej. `lg:w-[44vw]`), `label`, `kind`, `mobileRatio`.

## Utilities nuevas (globals.css)

- `type-xl`, `type-l`, `type-m` (roles de arriba).
- `pl-edge`: padding-left que alinea con el borde izquierdo del container desde un bloque full-bleed (`max(1.5rem, calc((100% - 72rem) / 2 + 1.5rem))`). Usos: banda concesionarias, meta del hero.

---

## 0. Navbar

Se mantiene la estructura (no es patrón quemado). Cambios: botón CTA y botones del menú mobile a esquinas rectas (`rounded-none`). Nada más.

## 1. Hero — split 7/5, fondo claro

- Sección `relative bg-paper lg:min-h-[92vh]`, SIN fondo oscuro ni slideshow.
- **Foto**: `EdgePortrait side="right" lg:w-[44vw]` — retrato de Luna, sangra al borde derecho y llega hasta el fondo de la sección (pasa el fold). Mobile: `aspect-[3/4]` en flujo, después del CTA.
- **Columna izquierda (container, z-10)**: kicker en texto plano (sin pill, sin punto): "Coach profesional — personas y equipos", 13px tracking ancho. Headline `type-xl` en 3 líneas con cortes duros (spans block), sentence case, `lg:col-span-8` → la línea más larga cruza ≈1 columna sobre la foto. Subtítulo `max-w-sm`. CTA: **un** botón sólido rectangular "Agendar una reunión" + link subrayado "Ver servicios" inline al lado.
- **Meta del hero**: fila al fondo, hairline superior, desde el borde izquierdo del viewport hasta el borde de la foto (`lg:absolute bottom-0 left-0 lg:w-[56vw]`, `pl-edge`): Modalidad · Ubicación —— · @lunagonzalezff con `justify-between`. Mobile: estática, ancho completo, `mt-12`.
- Animación: líneas del headline con wipe (observando el wrapper), foto fade lateral, meta fadeUp con delay. Sin loops.
- El video que vivía acá **se va a Metodología** (ver arriba).

## 2. Problema — jerarquía invertida, escalonado

- Pegado al hero: `pt-16 md:pt-20`, `pb-28`.
- Abre directo: "¿Algo de esto te suena?" en **bold 15px** (título mínimo), container, una línea.
- 5 filas full-bleed: cada fila `border-b border-line` (primera con `border-t`) a lo ancho del viewport; adentro container + grid 12. Frase `type-l text-ink/85`, número 01–05 micro en el margen.
- **Escalonado**: `const OFFSETS = [0, 1, 2, 0, 1]` → lookup `INDENT = ["lg:col-start-1", "lg:col-start-2", "lg:col-start-3"]`, frase `lg:col-span-8`. **Plan B = una línea**: `OFFSETS = [2, 2, 2, 2, 2]`.
- Mobile: los `lg:col-start-*` no aplican → alineación única automática.
- Párrafo de contexto: después de las filas, bloque en cols 9–12 (`lg:col-start-9 lg:col-span-4`), texto alineado a la izquierda dentro del bloque (la asimetría es posicional, no de text-align).

## 3. Servicios — tabla editorial, sin cards ni iconos

- Apertura: fila container con `items-end`: "Servicios" `type-m` en col 1–3 + intro 2 líneas `max-w-sm` en cols 9–12. Tensión izquierda-derecha, misma línea de base.
- **Tabla**: 3 filas full-bleed con hairlines (border-t por fila, última con border-b). Fila = container grid 12, `py-10`: nombre `type-m` cols 1–5 / lorem corto 14px muted cols 6–8 / 3 ítems "incluye" apilados 13px cols 9–10 / "Desde $ ——" + link subrayado "Agendar" cols 11–12 alineado a la derecha. Hover: `hover:bg-fill-soft` en la fila completa. Sin iconos, sin "+", sin cajas.
- Mobile: cada fila colapsa a bloque apilado (nombre → desc → incluye → precio), mismos hairlines.
- **Banda concesionarias**: full-bleed `bg-band`, esquinas rectas, **split 7/5**: texto cols 1–7 (`pl-edge`, py generoso): overline texto plano "Programa exclusivo" (sin pill), título `type-l` (más grande que los nombres de la tabla — el destaque es por escala), lorem `max-w-md`, precio + botón claro rectangular. Foto cols 8–12 `fill dark` hasta el borde derecho. Mobile: texto arriba, foto abajo `min-h-[280px]`.

## 4. Promesa — manifiesto descentrado (única banda oscura del medio)

- `bg-band text-paper`, aire enorme (`py-36 md:py-44`).
- Overline micro "La promesa" texto plano col 1.
- **Manifiesto** `type-l`, cols 1–8, 3–4 líneas con cortes duros (spans block) formando escalera irregular. Énfasis posicional: **una palabra clave sola en su propia línea**, indentada `lg:ml-[33%]`. Sin itálicas.
- **3 resultados**: bloque cols 9–12 con `lg:mt-24` (diagonal arriba-izquierda → abajo-derecha). Cada uno: hairline superior `border-white/10`, número micro + 2 líneas 15px `text-paper/80`. Apilados, NO columnas.
- Mobile: manifiesto sin ml (la palabra clave mantiene una indentación chica `ml-10`), resultados full-width apilados.

## 5. Metodología — lista vertical, numerales gigantes

- Split **4/8** (cols 1–4 / 6–12). Izquierda sticky (`lg:sticky lg:top-32`): "Cómo trabajamos" `type-m`, párrafo `max-w-xs`, link subrayado "Agendar la primera reunión", y **el video placeholder** (16:9, ancho completo de la columna, label "Luna explica cómo trabaja — clip 60–90s").
- Derecha: 4 pasos apilados con hairline entre ellos (`divide-y`). Paso = grid `[auto_1fr]`: numeral `type-l text-ink/15 font-display` colgando al gutter con `lg:-ml-14`, título bold 17px + descripción `max-w-md` muted.
- Cero círculos, cero líneas conectoras, cero timeline horizontal.
- Mobile: numeral más chico (`text-4xl`), sin margen negativo, sticky apagado.

## 6. Para quién — jerarquía de importancia

- Sección `relative`; **panel gris** `bg-fill-soft` absoluto `lg:right-0 lg:top-16 lg:bottom-0 lg:w-[34vw]` sangrando al borde derecho, detrás del contenido (z). Es la ruptura de la sección.
- Intro: una sola línea 15px, container, sin header grande.
- **"Es para vos si…"**: cols 1–7. Ítems grandes (`text-[1.3rem]` display), hairlines entre ítems, marcador tipográfico "—". 
- **"No es para vos si…"**: cols 9–12, `lg:pt-28` (offset vertical real ~6rem extra), texto 14px muted, SIN hairlines (diferenciación), marcador "—" más claro. Queda montada sobre el panel.
- Mobile: panel oculto; lista "No" dentro de caja `bg-fill-soft -mx-6 px-6 py-10` (bleed a ancho completo).

## 7. Sobre mí — la foto manda

- `EdgePortrait side="left" lg:w-[38vw]` — retrato 3:4 sangrado al borde izquierdo, alto completo de la sección. Mobile: en flujo, antes del texto.
- Contenido cols 6–12 (z-10): **"Luna González" `type-l` con `lg:-ml-[20%]`** cruzando 1–2 columnas sobre la foto (mismo sistema que el hero, espejado). Bio 2 párrafos `max-w-md`. Credenciales: lista apilada `divide-y` con hairlines, texto plano + índice micro — NO pills.
- **Segunda foto** (candid 4:3) cols 10–12, `lg:mt-16 lg:-mb-24 relative z-10`: se asoma sobre el panel gris de Testimonios (sección siguiente). Mobile: bloque normal `mt-12`, sin overlap.

## 8. Testimonios — indentación profunda

- Sección `bg-fill-soft` full-bleed, esquinas rectas.
- **Fila de apertura**: hairlines arriba y abajo full-bleed; adentro container `flex justify-between`: "Testimonios" micro izquierda + contador "01 / 04" y flechas ‹ › en **cajas cuadradas** hairline (mueren los círculos) a la derecha.
- Cita `type-m text-ink/85` alineada izquierda, **indentada: cols 3–11** (`lg:col-start-3 lg:col-span-9`). `min-h` en el área de cita para no saltar entre slides.
- Atribución vuelve a **col 1**: fila horizontal avatar cuadrado 40px + nombre + " · cargo" en una línea. El quiebre de indentación cita→firma es la tensión.
- Carrusel: mismo estado/AnimatePresence de la entrega 1. Sin comillas gigantes.
- Mobile: todo col 1, fila de apertura igual.

## 9. FAQ — split funcional, quieto

- Split **4/8**: izquierda "Preguntas frecuentes" `type-m` + "¿Tenés otra duda? Escribime" con link subrayado a #agendar. Derecha (cols 6–12): el accordion de hairlines existente, sin eyebrow.
- Sin offsets ni rupturas: después de dos secciones con gestos, esta respira. `VIEWPORT_BOTTOM`.

## 10. Agendar — la palabra gigante

- `bg-band text-paper`. **"Hablemos."** en `type-xl` (segundo y último uso de XL), ocupando el ancho del container, línea sola arriba.
- Debajo split **5/7**: izquierda meta apilada con hairlines `border-white/10`: respuesta en —— hs · @lunagonzalezff · hola@——.com (texto plano, sin cajas con borde). Derecha: el formulario existente (campos subrayados, AnimatePresence de éxito), botón claro **rectangular**.
- Mobile: Hablemos. clampa, meta arriba del form.

## Footer

Estructura igual. Solo lenguaje: sin esquinas redondeadas, links con el subrayado estándar.

---

## Checklist de auto-review final (regla 11 del run)

- [ ] ¿Quedó algún split 50/50 o 3 columnas iguales? (`grep grid-cols-2|grid-cols-3` y revisar)
- [ ] ¿`type-xl` usado exactamente 2 veces?
- [ ] ¿Algún eyebrow "(0N) ––– LABEL" vivo? ¿`SectionHeading` eliminado?
- [ ] ¿Algún `rounded-*` vivo (incl. `rounded-full`)?
- [ ] ¿Iconos de librería decorativos? (lucide solo para flechas/UI funcional: chevrons, +, X)
- [ ] ¿Algo centrado fuera de "Hablemos."?
- [ ] ¿Itálicas de énfasis vivas?
- [ ] Mobile: escalonado colapsado, overlaps apagados, panels a caja full-width.
- [ ] Build + tsc limpios.
