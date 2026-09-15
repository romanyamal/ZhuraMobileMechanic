// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zhuramobilemechanic.com",
  integrations: [sitemap()],

  compressHTML: true,

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
    css: {
      // Forcefully disable sourcemaps so the mobile parser has absolutely zero extra bytes to read
      devSourcemap: false,
    },
    build: {
      minify: "esbuild",
      sourcemap: false, // Ensures zero performance overhead in production builds
    },
  },
});
