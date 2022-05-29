import { type Component, For } from "solid-js";

const links = ["Work", "Links", "Resume"] as const;
export const Nav: Component = () => {
  return (
    <nav class="w-full sticky top-0 bg-gray-50 pt-4 pb-2 -mt-4 border-b h-12">
      <List links={links} />
    </nav>
  );
};

const List: Component<{ links: readonly string[] }> = (props) => {
  return (
    <ul class="flex justify-between w-full font-bold font-['Big_Caslon'] tracking-widest">
      <For each={props.links}>{(link) => <ListItem>{link}</ListItem>}</For>
    </ul>
  );
};

const ListItem: Component<{ children: string }> = (props) => {
  return (
    <li class="hover:italic relative">
      <a class="hover:before:content-['*'] before:absolute before:-left-2" href={`/#${props.children}`}>{props.children}</a>
    </li>
  );
};
