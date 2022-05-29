import { type Component, createSignal, Show } from "solid-js";
import { SocialLink } from "../../data/links";
import { Typography } from "./Typography";

export const StyledLink: Component<SocialLink> = (props) => {
  return (
    <li class='relative'>
      <a
        href={props.href}
        class="block underline hover:italic hover:before:content-['*'] before:absolute before:left-0 pl-2 w-fit"
        style={{
          "text-decoration-color": props.color,
        }}
      >
        {props.title}
      </a>
      <Show when={props.desc}>
        {/* // TODO: Check the class is properly merging with typography */}
        <Typography as='p' class='pl-2'>{props.desc}</Typography>
      </Show>
    </li>
  );
};
