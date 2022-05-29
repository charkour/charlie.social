import { type Component, For } from "solid-js";
import { NavLink } from "./ui/NavLink";

const links = ["Work", "Links", "Resume"] as const;
export const Nav: Component = () => {
  return (
    <nav class="w-full sticky top-0 bg-gray-50 pt-4 pb-2 -mt-4 border-b h-12 z-10">
      <ul class="flex justify-between w-full font-bold font-['Big_Caslon'] tracking-widest">
        <For each={links}>{(link) => <NavLink>{link}</NavLink>}</For>
      </ul>
    </nav>
  );
};