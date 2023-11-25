import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import compress from "astro-compress";

let config = {
  site: 'https://hitesh.io',
  integrations: [mdx(), sitemap(), alpinejs()]
}
if (!process.env.NETLIFY) {//use tailwind astro only on development
  config.integrations.push(tailwind())
}
if (process.env.NETLIFY) config.integrations.push(compress())
// https://astro.build/config
export default defineConfig(config);