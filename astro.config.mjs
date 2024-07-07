import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{
      protocol: "https",
      hostname: "image.tmdb.org"
    }],
    domains: ["image.tmdb.org"],
    service: passthroughImageService()
  },
  integrations: [tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});