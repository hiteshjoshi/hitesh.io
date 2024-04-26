import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import compress from "astro-compress";
let config = {
  site: 'https://hitesh.io',
  integrations: [mdx(), sitemap(), compress(), tailwind({ applyBaseStyles: false, nesting: true, })],
  output: 'static',
  adapter: vercelStatic({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280, 1920],
      domains: [],
      minimumCacheTTL: 60,
      formats: ["image/avif", "image/webp"],
    },
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
};

// https://astro.build/config
export default defineConfig(config);