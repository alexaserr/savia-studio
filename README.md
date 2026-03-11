# Savia Studio — saviastudio.io

Estudio de tecnología especializado en salud, bienestar y conocimiento.

## Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS 3.4 + CSS variables
- **Fonts:** Cormorant Garamond + Montserrat (swap for Kenao when ready)
- **Deploy:** Vercel
- **Animations:** Intersection Observer + CSS transitions

## Setup rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx      ← Root layout, fonts, metadata
  page.tsx        ← Homepage (assembles sections)
  globals.css     ← Tailwind + brand CSS variables + animations

components/
  Reveal.tsx      ← Scroll-triggered animation wrapper
  Nav.tsx         ← Fixed nav with scroll-aware styling
  Hero.tsx        ← Hero section with entrance animations
  Services.tsx    ← Service cards with hover effects
  CaseStudy.tsx   ← Case study with metrics
  WhySavia.tsx    ← Differentiators
  Process.tsx     ← 4-step process
  FinalCTA.tsx    ← Call to action
  Footer.tsx      ← Footer

lib/
  useInView.ts    ← Intersection Observer hook
```

## Roadmap

- [ ] **Semana 1:** Homepage + Contacto → ya puedes enviar link a prospectos
- [ ] **Semana 2:** Servicios + Caso de estudio completo
- [ ] **Semana 3:** Nosotros + versiones en inglés (next-intl)
- [ ] Swap Cormorant Garamond por Kenao Sans Serif
- [ ] Formulario de contacto (Resend / Formspree)
- [ ] SEO: og:image, hreflang, schema markup
- [ ] Performance: Lighthouse 90+

## Brand tokens

Los colores y tipografías están definidos en:
- `tailwind.config.ts` → para clases de Tailwind
- `app/globals.css` → como CSS variables (:root)

Referencia completa: ver `brand-guide-savia-studio.docx`
