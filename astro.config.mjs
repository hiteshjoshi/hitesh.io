import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://hitesh.io',
  integrations: [mdx(), sitemap(), tailwind(), alpinejs(), compress()]
});