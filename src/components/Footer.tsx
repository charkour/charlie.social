import { type Component } from "solid-js";
import { Diamond } from "./Diamond";
import { Typography } from "./ui/Typography";

export const Footer: Component = () => {
  // TODO: add dark mode toggle.

  return (
    <footer class="h-[50vh] bg-gray-100 w-full pb-4 mt-4 flex flex-col justify-between items-center">
      <div />
      <Diamond />
      <Typography as="small">
        Copyright © {new Date().getFullYear()} Charles Kornoelje
      </Typography>
    </footer>
  );
};
