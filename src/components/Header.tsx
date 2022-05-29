import { type Component, For } from "solid-js";
import { Text } from "./ui/Text";
import photo from "../assets/charles.jpg";

export const Header: Component = () => {
  return (
    <header>
      <Text>Charles Kornoelje</Text>
      <img
        src={photo}
        class="rounded-full ring-1 ring-offset-4 ring-gray-500 h-[20vw] w-[20vw]"
        alt="profile shot of Charles"
        title="profile shot of Charles"
      />
      <div class="flex w-full justify-between max-w-md">
        <For each={"software engineer".split("")}>
          {(letter) => <span>{letter}</span>}
        </For>
      </div>
    </header>
  );
};
