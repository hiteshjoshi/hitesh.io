import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import compress from "astro-compress";
let config = {
  site: 'https://hitesh.io',
  integrations: [mdx(), sitemap(), compress(), tailwind()],
  output: 'static',
  adapter: vercelStatic({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    }, imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
};

// https://astro.build/config
export default defineConfig(config);