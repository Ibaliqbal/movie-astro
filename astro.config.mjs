import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org" }],
    domains: ["image.tmdb.org"],
  },
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
});
