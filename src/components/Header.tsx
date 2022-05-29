import { type Component, For } from "solid-js";
import { Text } from "./ui/Text";
import photo from "../assets/charles.jpg";
import { Split } from "./ui/Split";

export const Header: Component = () => {
  return (
    <header class="flex items-center flex-col">
      <Text>Charles Kornoelje</Text>
      <img
        src={photo}
        class="rounded-full ring-1 ring-offset-4 ring-gray-500 h-[20vw] w-[20vw]"
        alt="profile shot of Charles"
        title="profile shot of Charles"
      />
      <Split>Software Engineer</Split>
    </header>
  );
};
