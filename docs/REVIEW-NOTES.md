# Notas de review — rediseño anti-template

Run completo: 12 commits de sección + fundamentos + limpieza + fixes de QA.
Build y typecheck limpios. QA con screenshots (desktop 1440 / mobile 375, sección
por sección) y overflow horizontal mobile = 0px.

## (a) Decisiones que tomé solo, y por qué

1. **El video del hero se movió a Metodología** (la opción que dejaste abierta).
   El split 7/5 con retrato sangrado no dejaba lugar en la columna izquierda sin
   degradar el video a decoración. En Metodología vive a ancho completo de la
   columna sticky (16:9 real) y el contexto es el natural: un clip de Luna
   explicando cómo trabaja.
2. **Navbar siempre en tinta**: la lógica "texto blanco sobre hero transparente"
   moría con el hero claro (texto invisible). Ahora solo cambia fondo/hairline al
   scrollear.
3. **El cruce texto-foto se implementa con dos mecánicas del mismo sistema**
   (`EdgePortrait` + contenido z-10 + cruce de 1–2 columnas): en el Hero las
   líneas largas del headline desbordan con `whitespace-nowrap`; en Sobre mí el
   nombre usa `lg:-ml-[35%]` (subí de 20% a 35% porque el cruce inicial quedaba
   en ~36px y el gesto no se leía).
4. **Hairline del hero "hasta el borde de la foto"**: la línea es full-bleed y la
   foto (z-1) la cubre del lado derecho. Más simple y robusto que calcular el
   ancho exacto.
5. **`sm:grid-cols-2` del formulario quedó**: son pares de campos (nombre/email),
   layout funcional de form, no un split 50/50 de sección. Lo mismo el
   `text-center` del estado de éxito del form (estado transitorio, no layout).
6. **Footer sin commit propio**: ya cumplía el lenguaje (splits 5/3/4, hairlines,
   cero redondeos). No había diff que hacer.
7. **Headline provisional del hero acortado** a "Coaching para / personas y
   equipos / que trabajan mejor" para que las líneas crucen 1–2 columnas y no 4.
   El copy definitivo es de la entrega 2 igualmente.
8. **Avatar de testimonios cuadrado** (era el último círculo vivo fuera de los
   placeholders).

## (b) Dudas que me quedaron

1. **Headline mobile**: a `type-xl` mínimo (3.25rem) el headline del hero ocupa
   6 líneas en 375px. Con el copy definitivo puede cambiar; si no, bajar el
   mínimo del clamp a ~2.9rem es un cambio de una línea en `globals.css`.
2. **Foto del hero debajo del navbar**: el retrato llega hasta y=0 y el navbar
   transparente flota encima (links sobre gris claro, legible). Me gusta como
   gesto editorial, pero es opinable — si molesta, se le da `lg:top-[4.5rem]` al
   wrapper en vez de `inset-y-0`.
3. **Escalonado de Problema**: offsets `[0,1,2,0,1]`. El plan B (fijo en col 3)
   sigue siendo una línea: `OFFSETS = [2,2,2,2,2]` en `Problema.tsx`.
4. **El panel gris de Para quién** arranca en `top-16` fijo; si la intro crece en
   la entrega 2 puede quedar corto/largo.

## (c) Qué revisar primero en el navegador (mayor → menor riesgo visual)

1. **Hero y Sobre mí en anchos intermedios (1024–1366)**: el cruce texto/foto es
   sensible al viewport. Verificar que el headline no toque el borde derecho y
   que "Luna González" no tape la cara del retrato (con foto real).
2. **Candid de Sobre mí asomándose sobre Testimonios** (`-mb-24`): mirar que el
   solape sobre la fila de hairlines del carrusel no choque con los controles en
   1024–1280.
3. **Banda de concesionarias**: alineación del texto con el container de la tabla
   (usa `pl-edge` calculado); comparar el borde izquierdo de "Programa..." con el
   de los nombres de la tabla.
4. **Escalonado de Problema en lg justo (1024)**: que la fila 03 (col-start-3) no
   deje la frase demasiado corta de ancho.
5. **Promesa**: el aire enorme (py-44) + manifiesto — chequear que la palabra
   indentada "eiusmod." se lea como gesto y no como error de maquetado.
6. **Mobile 375**: ya verificado por screenshot (overlaps apagados, escalonado
   colapsado, panel a caja full-width), pero vale repasar el menú hamburguesa y
   el form.

## Estado del checklist de reglas (regla 11)

- Splits 50/50 de sección: **0** (solo pares de campos del form).
- 3 columnas iguales: **0**.
- `type-xl`: **exactamente 2** (Hero, "Hablemos.").
- Eyebrows "(0N) ––– LABEL": **0** — `SectionHeading` eliminado.
- `rounded-*`: **0**.
- Itálicas de énfasis: **0**.
- Iconos de librería: solo funcionales (chevrons del carrusel, + del accordion,
  X del menú). Decorativos: 0.
