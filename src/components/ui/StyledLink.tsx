import { type Component, createSignal } from "solid-js";
import { SocialLink } from "../../data/links";

export const StyledLink: Component<SocialLink> = (props) => {
  // TODO: is there a better way to get a ref?
  const [hover, setHover] = createSignal(false);
  let ref: HTMLAnchorElement;
  return (
    <li class='relative w-fit'>
      <a
        ref={ref}
        href={props.href}
        class="block underline hover:italic hover:before:content-['*'] before:absolute before:-left-1 pl-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          "text-decoration-color": props.color,
        }}
      >
        {props.title}
      </a>
    </li>
  );
};
