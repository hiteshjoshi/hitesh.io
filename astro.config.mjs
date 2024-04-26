import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
let config = {
  site: 'https://hitesh.io',
  integrations: [mdx(), sitemap(), compress(), tailwind({ applyBaseStyles: false, nesting: true, })]
};

// https://astro.build/config
export default defineConfig(config);