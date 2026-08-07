import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.shuktech.com',
  integrations: [tailwind(), sitemap()],
  // host:true expone el servidor en la red local (no solo localhost), para
  // poder abrir el sitio desde el celular u otro dispositivo en el mismo WiFi.
  server: { host: true },
});
