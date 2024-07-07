import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org" }],
    domains: ["image.tmdb.org"],
    service: passthroughImageService(),
  },
  integrations: [tailwind()],
  output: "hybrid",
  adapter: vercel({
    imageService: true,
  }),
});
