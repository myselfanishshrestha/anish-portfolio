import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/start/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      spaMode: true,
    }),
  ],
  // Force Nitro to prerender the home page into index.html
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
