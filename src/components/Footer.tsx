import { Typography } from "./ui/Typography";

export const Footer = () => {
  return (
    <footer class="w-full pb-4 mt-4 text-center mx-auto">
      <Typography as="small" class="block">
        Built using Solid.js, TailwindCSS, and Vite.js. Hosted on Netlify.
      </Typography>
      <Typography as="small">
        Copyright © {new Date().getFullYear()} Charles Kornoelje
      </Typography>
    </footer>
  );
};
