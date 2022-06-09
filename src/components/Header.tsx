import { type Component, For } from "solid-js";
import { Typography } from "./ui/Typography";
import photo from "../assets/charles.jpg";
import { Split } from "./ui/Split";
import confetti from "canvas-confetti";

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
        onClick={() => confetti()}
      />
      <Split class="pt-1">Software Engineer</Split>
      <p class="pt-2 mx-10 text-center">
        I help companies modernize their tech stacks and create performant
        experiences users love.
      </p>
    </header>
  );
};
