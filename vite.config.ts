import solid from "solid-start/vite";
import { defineConfig } from "vite";
// @ts-ignore -- no types
import netlify from 'solid-start-netlify'

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: netlify({
        edge: true,
      }),
    }),
  ],
});
