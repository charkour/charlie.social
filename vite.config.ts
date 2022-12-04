import solid from "solid-start/vite";
import { defineConfig } from "vite";
// @ts-ignore -- no types
import vercel from "solid-start-vercel";

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: vercel({
        prerender: true,
      }),
    }),
  ],
});
