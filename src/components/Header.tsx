import { type Component, For } from "solid-js";
import { Typography } from "./ui/Typography";
import photo from "../assets/charles.jpg";
import { Split } from "./ui/Split";

export const Header: Component = () => {
  return (
    <header class="flex flex-col items-center">
      <Typography>Charles Kornoelje</Typography>
      <img
        // TODO: on click, display confetti
        src={photo}
        class="rounded-full ring-1 ring-offset-4 ring-gray-500 h-16 sm:h-24 md:h-32 lg:h-44 xl:h-64 cursor-pointer"
        alt="profile shot of Charles"
        title="profile shot of Charles"
      />
      <Split>Software Engineer</Split>
    </header>
  );
};
