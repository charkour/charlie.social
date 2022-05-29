import { type Component } from "solid-js";

interface Props {
  children: string;
}

export const NavLink: Component<Props> = (props) => {
  return (
    <li class="relative">
      <a
        class="hover:italic hover:before:content-['*'] before:absolute before:-left-2"
        href={`/#${props.children}`}
      >
        {props.children}
      </a>
    </li>
  );
};
