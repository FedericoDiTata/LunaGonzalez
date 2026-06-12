# Luna González — Landing

Landing one-scroll para Luna González, coach profesional (coaching individual, de equipos, team building y programa para concesionarias).

> **Estado: Primera entrega — solo estructura.**
> Textos en lorem ipsum, fotos/videos como placeholders y escala de grises neutra.
> En la segunda entrega se aplican paleta de marca, contenidos reales y la integración del formulario. Ver [cliente-info.md](cliente-info.md).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (tokens de diseño en `app/globals.css`)
- Framer Motion v12
- Tipografía de marca: Poppins (títulos) + Inter (texto), vía `next/font`

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

```
app/
  globals.css        ← tokens (la paleta de la entrega 2 se enchufa acá)
  layout.tsx         ← fuentes + metadata
  page.tsx           ← ensambla las secciones
components/
  ui/                ← design system (MediaPlaceholder, SectionHeading, motion)
  sections/          ← las 10 secciones + navbar + footer
design-spec.md       ← especificación de diseño de la entrega
cliente-info.md      ← datos de la clienta + pendientes de entrega 2
```

Desarrollado por **BrodhIA**.
