import { type Component } from "solid-js";

interface Props {
  children: string;
}

export const NavLink: Component<Props> = (props) => {
  const href = `#${props.children}`;

  return (
    <li class="relative">
      <a
        class="hover:before:content-['*'] hover:italic before:absolute before:-left-2"
        onClick={(e) => {
          e.preventDefault();
          const id = href.substring(1);
          const destination = document.getElementById(id);
          if (destination) {
            destination.scrollIntoView({
              behavior: "smooth",
            });
          }
          window.history.pushState(window.history.state, "", href);
        }}
        href={href}
      >
        {props.children}
      </a>
    </li>
  );
};
