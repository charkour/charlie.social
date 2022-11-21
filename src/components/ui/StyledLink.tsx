import { type Component, Show, type JSXElement } from "solid-js";
import { SocialLink } from "../../data/links";
import { Typography } from "./Typography";

export const StyledLinkItem: Component<SocialLink> = (props) => {
  return (
    <li class="relative">
      <StyledLink href={props.href} color={props.color}>
        {props.title}
      </StyledLink>
      <Show when={props.desc}>
        {/* // TODO: Check the class is properly merging with typography */}
        <Typography as="p" class="pl-2">
          {props.desc}
        </Typography>
      </Show>
    </li>
  );
};

interface Props {
  children: JSXElement;
  href: string;
  color: string;
}

export const StyledLink: Component<Props> = (props) => {
  return (
    <a
      href={props.href}
      class="underline hover:italic hover:before:content-['*'] before:absolute before:left-0 pl-2 w-fit"
      style={{
        "text-decoration-color": props.color,
      }}
    >
      {props.children}
    </a>
  );
};
