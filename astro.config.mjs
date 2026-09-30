import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://j769chen.github.io",
  base: "/Personal-Website/",
  integrations: [sitemap()],
});
