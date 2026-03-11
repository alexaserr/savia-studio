# Guía de setup: Savia Studio → GitHub → Vercel

## Paso 1: Crear el repo en GitHub

Ve a [github.com/new](https://github.com/new) y crea un repo:
- **Nombre:** `savia-studio` (o `saviastudio.io`)
- **Visibilidad:** Private
- **NO** inicialices con README (ya lo tenemos)

## Paso 2: Crear el proyecto local

Abre tu terminal y corre estos comandos uno por uno:

```bash
# 1. Crea el proyecto con Next.js
npx create-next-app@latest savia-studio --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

# 2. Entra al proyecto
cd savia-studio
```

## Paso 3: Reemplazar archivos con los del proyecto

Ahora necesitas reemplazar los archivos que `create-next-app` generó con los que te di.
Puedes hacerlo con Claude Code:

```bash
# Instala Claude Code si no lo tienes
npm install -g @anthropic-ai/claude-code

# Desde la carpeta del proyecto
claude
```

Una vez dentro de Claude Code, pídele:
> "Reemplaza los archivos del proyecto con los que están en [pega la estructura]"

O manualmente, reemplaza estos archivos:

| Archivo generado          | Reemplazar con                |
|---------------------------|-------------------------------|
| `tailwind.config.ts`     | El que te di (con brand tokens) |
| `app/globals.css`         | El que te di (con animaciones) |
| `app/layout.tsx`          | El que te di (con fonts + metadata) |
| `app/page.tsx`            | El que te di (assembla secciones) |
| `next.config.ts`          | El que te di |
| `README.md`               | El que te di |

Y agrega estos archivos nuevos:

| Archivo nuevo               | Ubicación                       |
|-----------------------------|--------------------------------|
| `lib/useInView.ts`         | `lib/useInView.ts`             |
| `components/Reveal.tsx`    | `components/Reveal.tsx`        |
| `components/Nav.tsx`       | `components/Nav.tsx`           |
| `components/Hero.tsx`      | `components/Hero.tsx`          |
| `components/Services.tsx`  | `components/Services.tsx`      |
| `components/CaseStudy.tsx` | `components/CaseStudy.tsx`     |
| `components/WhySavia.tsx`  | `components/WhySavia.tsx`      |
| `components/Process.tsx`   | `components/Process.tsx`       |
| `components/FinalCTA.tsx`  | `components/FinalCTA.tsx`      |
| `components/Footer.tsx`    | `components/Footer.tsx`        |

## Paso 4: Instalar dependencia extra

```bash
npm install lucide-react
```

## Paso 5: Verificar que corre

```bash
npm run dev
```

Abre http://localhost:3000 — deberías ver el homepage completo.

## Paso 6: Subir a GitHub

```bash
git add .
git commit -m "feat: homepage inicial con animaciones — Savia Studio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/savia-studio.git
git push -u origin main
```

## Paso 7: Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com) y logueate con GitHub
2. Click "Add New Project"
3. Importa el repo `savia-studio`
4. Vercel detecta Next.js automáticamente — no cambies nada
5. Click "Deploy"

En ~60 segundos tienes tu sitio en `savia-studio.vercel.app`.

## Paso 8: Conectar dominio (cuando estés lista)

1. En Vercel → Settings → Domains
2. Agrega `saviastudio.io`
3. Vercel te da los DNS records
4. Configura en tu registrador de dominio
5. SSL se configura solo

## Siguiente: iterar con Claude Code

Una vez que tengas el proyecto corriendo, puedes usar Claude Code
para seguir desarrollando. Algunas tareas lógicas:

- Agregar la página de Contacto con formulario
- Agregar la página de Servicios detallada
- Agregar responsive design (mobile)
- Implementar i18n con next-intl
- Integrar Kenao Sans Serif como fuente local
- Agregar analytics (Plausible o Vercel Analytics)
