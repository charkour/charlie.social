import { type Component, For } from "solid-js";
import { Typography } from "./ui/Typography";
import photo from "../../public/charles.jpg";
import { Split } from "./ui/Split";
import confetti from "canvas-confetti";

export const Header: Component = () => {
  return (
    <header class="flex flex-col items-center">
      <Typography>Charles Kornoelje</Typography>
      <div
        class="overflow-hidden rounded-full ring-1 ring-offset-4 ring-gray-500 cursor-pointer h-20 sm:h-24 md:h-32 lg:h-44 xl:h-64 w-max"
        onClick={() => confetti()}
      >
        <img
          src={photo}
          class="h-20 sm:h-24 md:h-32 lg:h-44 xl:h-64 scale-125 origin-top"
          alt="profile shot of Charles"
          title="profile shot of Charles"
        />
      </div>
      {/* <Split class="pt-1">Software Engineer</Split> */}
      <p class="pt-2 mx-10 text-center">
        I help companies modernize their tech stacks and create performant
        experiences users love.
      </p>
    </header>
  );
};
