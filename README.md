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

## Flujo de trabajo con Git

El repositorio tiene dos ramas principales:

- **`main`** — producción. Lo que está aquí es lo que está publicado en vivo. Nadie hace commits
  directos a esta rama.
- **`development`** — integración. Aquí es donde el equipo trabaja día a día y se prueban los
  cambios antes de que lleguen a producción.

Flujo recomendado para cualquier cambio nuevo:

```bash
# 1. Parado en development, actualizado
git checkout development
git pull

# 2. Crear una rama para la tarea específica
git checkout -b feature/nombre-del-cambio

# 3. Trabajar, hacer commits normalmente
git add .
git commit -m "Describe el cambio"

# 4. Subir la rama y abrir un Pull Request hacia development (no hacia main)
git push -u origin feature/nombre-del-cambio
```

Cuando `development` esté probado y listo para publicarse, se abre un Pull Request de
`development` → `main`. Ese merge es lo que dispara el despliegue a producción (ver sección de
despliegue más abajo — Vercel/Netlify hacen esto automáticamente por rama).

## Cómo usar esto

- **Deploy Preview automático para `development`**: tanto Vercel como Netlify generan una URL de
  preview por cada push a cualquier rama que no sea la de producción — así el equipo (o marketing)
  puede revisar los cambios en `development` antes de aprobarlos, sin tocar el sitio en vivo.
- **`main` como rama de producción**: al configurar el proyecto en Vercel/Netlify, se marca `main`
  como "Production Branch" — cada merge a `main` publica automáticamente en el dominio real.
- Opcional pero recomendado: en GitHub, ir a **Settings → Branches → Branch protection rules** y
  proteger `main` para que solo se pueda actualizar vía Pull Request (no con push directo). Esto
  hay que configurarlo desde la cuenta de GitHub del proyecto — no es algo que venga ya activado.


Tailwind está instalado y configurado con los tokens de marca (`tailwind.config.mjs` →
`shuk-dark`, `shuk-orange`, etc.), pero el CSS existente del sitio **no se migró a utilidades de
Tailwind** — se dejó como CSS normal en `src/styles/global.css` porque ya está probado y no valía
la pena arriesgar una regresión visual solo por reescribirlo. Tailwind queda listo para cualquier
componente **nuevo** que el equipo construya de aquí en adelante.
