import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  site: "https://movie-astro.vercel.app",
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "qvsxkboawsixkeqgaeja.supabase.co",
        pathname: "/**",
        port: "",
      },
    ],
    domains: [
      "image.tmdb.org",
      "lh3.googleusercontent.com",
      "qvsxkboawsixkeqgaeja.supabase.co",
    ],
    service: passthroughImageService(),
  },
  experimental: {
    actions: true,
  },
  integrations: [tailwind(), react(), auth()],
  output: "server",
  adapter: vercel(),
});
