import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
    domains: ["image.tmdb.org"],
    service: passthroughImageService(),
  },
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
});
