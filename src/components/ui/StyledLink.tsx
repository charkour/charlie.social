import { type Component, createSignal } from "solid-js";
import { SocialLink } from "../../data/links";

export const StyledLink: Component<SocialLink> = (props) => {
  return (
    <li class='relative w-fit'>
      <a
        href={props.href}
        class="block underline hover:italic hover:before:content-['*'] before:absolute before:left-0 pl-2"
        style={{
          "text-decoration-color": props.color,
        }}
      >
        {props.title}
      </a>
    </li>
  );
};
