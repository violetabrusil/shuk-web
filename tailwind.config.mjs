/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Manual de marca SHUK — mismos tokens que src/styles/global.css (:root).
        // Úsalos así en componentes nuevos: bg-shuk-dark, text-shuk-orange, etc.
        'shuk-dark': '#222225',
        'shuk-nimbus': '#F1F1F1',
        'shuk-taupe': '#A69577',
        'shuk-terra': '#726350',
        'shuk-orange': '#FE5F38',
      },
      fontFamily: {
        display: ['Neue Regrade', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Space Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
  // El CSS existente del sitio (src/styles/global.css) es CSS escrito a mano,
  // ya probado y responsive — no se migró a utilidades de Tailwind para evitar
  // regresiones visuales. Tailwind queda instalado y configurado con los
  // tokens de marca listos para cualquier componente NUEVO que el equipo
  // construya de aquí en adelante.
};
