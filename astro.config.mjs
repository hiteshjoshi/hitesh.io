import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import compress from "astro-compress";

let config = {
  site: 'https://hitesh.io',
  integrations: [mdx(), sitemap(), alpinejs(), compress()],
  output: "static"
};
if (!process.env.NETLIFY) { //we use tailwind only on development. On netlify we build inline css in BaseHead.astro
  config.integrations.push(tailwind())
}
export default defineConfig(config);