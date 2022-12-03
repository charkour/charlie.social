import { For } from "solid-js";
import { navLinks } from "../data/navLinks";
import { NavLink } from "./ui/NavLink";

export const Nav = () => {
  return (
    <nav class="w-full h-12 sticky top-0 z-10 bg-transparent border-b py-3 backdrop-blur backdrop-saturate-50">
      <ul class="w-full max-w-lg flex justify-between font-bold tracking-widest mx-auto">
        <For each={navLinks}>{(link) => <NavLink>{link}</NavLink>}</For>
      </ul>
    </nav>
  );
};
