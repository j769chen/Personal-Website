import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://james-chen.me",
  integrations: [sitemap()],
  redirects: {
    "/aboutMe": "/#about",
    "/projects": "/#projects",
  },
});
