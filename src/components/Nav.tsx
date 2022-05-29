import { type Component, For } from "solid-js";
import { navLinks } from "../data/navLinks";
import { NavLink } from "./ui/NavLink";

export const Nav: Component = () => {
  return (
    <nav class="w-full h-12 sticky top-0 z-10 bg-gray-50 border-b pt-4 pb-2 -mt-4">
      <ul class="w-full max-w-lg flex justify-between font-bold font-['Big_Caslon'] tracking-widest mx-auto">
        <For each={navLinks}>{(link) => <NavLink>{link}</NavLink>}</For>
      </ul>
    </nav>
  );
};