import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

export default defineConfig({
  site: "https://hitesh.io",
  integrations: [mdx(), sitemap(), compress()],
});
