# SHUK — sitio web (Astro)

Proyecto Astro del sitio de SHUK, migrado desde la versión HTML de vista previa. Sigue el stack
recomendado: Astro + Tailwind CSS, listo para desarrollo local y despliegue en Vercel/Netlify.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior (recomendado: 20 LTS)
- npm (viene con Node)

## Poner el proyecto a andar en tu máquina

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abre **http://localhost:4321** — deberías ver el sitio completo, con recarga en caliente al editar
cualquier archivo `.astro`.

## Comandos disponibles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera el sitio estático de producción en `dist/` |
| `npm run preview` | Sirve `dist/` localmente, para revisar el build de producción antes de publicar |

## Estructura del proyecto

```
src/
├── layouts/
│   └── Layout.astro       — <head>, SEO, fuentes, script global de scroll-reveal
├── components/
│   ├── Header.astro       — nav + menú móvil
│   ├── Hero.astro         — hero con la animación del cuadrado (3 actos)
│   ├── SectorStrip.astro  — franja de sectores (marquee)
│   ├── QuienesSomos.astro
│   ├── Hub.astro          — sección "El Hub"
│   ├── QueHacemos.astro
│   ├── ComoTrabajamos.astro
│   ├── Industrias.astro
│   ├── Cartics.astro      — existe pero NO está incluida en index.astro (ver nota abajo)
│   ├── Resultados.astro
│   ├── FAQ.astro
│   ├── Contact.astro      — formulario de contacto (ver nota sobre el backend abajo)
│   ├── Footer.astro
│   └── CookieBar.astro
├── styles/
│   └── global.css         — todos los tokens de marca y estilos (colores, tipografía, layout)
└── pages/
    └── index.astro         — arma la página completa importando los componentes de arriba

public/
├── fonts/                  — Neue Regrade (las 4 variantes usadas)
├── images/                 — logo y símbolo de marca
├── robots.txt
```

## Cosas pendientes antes de publicar en producción

1. **Formulario de contacto no está conectado a ningún backend.** `src/components/Contact.astro`
   tiene un comentario mostrando exactamente cómo conectarlo a Formspree/Getform o a un CRM — ver
   también `references/astro-handoff.md` de la skill `landing-page-builder` si la tienen instalada.

2. **Política de privacidad es un texto de marcador de posición.** El equipo legal debe redactar la
   versión real antes de publicar (aparece en `src/components/CookieBar.astro`, al hacer clic en
   "Más información").

3. **Imagen Open Graph pendiente.** `src/layouts/Layout.astro` tiene un TODO para agregar una imagen
   de 1200×630px cuando esté lista, para que el sitio se vea bien al compartirse en redes.

4. **Sección CARTICS existe pero está desactivada.** El componente completo vive en
   `src/components/Cartics.astro`; para reactivarla, descomentar el import y el uso en
   `src/pages/index.astro` (hay una nota ahí mismo con los eyebrows a renumerar).

5. **Analítica no está instalada.** Agregar Google Analytics 4 / Meta Pixel en
   `src/layouts/Layout.astro` cuando el sitio esté listo para medir tráfico real.

6. **Dominio real.** El sitio usa `https://www.shuktech.com` como URL base
   (`astro.config.mjs` → `site`) — actualizar si el dominio final es otro.

## Sobre Tailwind

Tailwind está instalado y configurado con los tokens de marca (`tailwind.config.mjs` →
`shuk-dark`, `shuk-orange`, etc.), pero el CSS existente del sitio **no se migró a utilidades de
Tailwind** — se dejó como CSS normal en `src/styles/global.css` porque ya está probado y no valía
la pena arriesgar una regresión visual solo por reescribirlo. Tailwind queda listo para cualquier
componente **nuevo** que el equipo construya de aquí en adelante.
