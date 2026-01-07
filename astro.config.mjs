import { defineConfig } from 'astro/config';

// Astro integrations
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  site: 'https://mauricioyair.github.io',
  base: '/portafolio',  
  integrations: [
    tailwind(
      {
        applyBaseStyles: false,
      }
    ),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
