/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user: User | null;
  }
}

interface ImportMetaEnv {
  readonly SUPABASE_SECRET_KEY: string;
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly PUBLIC_TMDB_TOKEN: string;
  readonly PUBLIC_TMDB_KEY: string;
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_TMDB_IMG_URL: string;
  readonly PUBLIC_TMDB_IMG_URL_ORIGINAL_SIZE: string;
  readonly GOOGLE_OAUTH_SECRET: string;
  readonly GOOGLE_OAUTH_CLIENT_ID: string;
  readonly AUTH_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
