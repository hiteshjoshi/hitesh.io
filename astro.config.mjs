import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import compress from "astro-compress";

let config = {
  site: 'https://hitesh.io',
  integrations: [mdx(), sitemap(), alpinejs(), compress(), tailwind()]
}
export default defineConfig(config);