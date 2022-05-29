import { type Component, JSX } from "solid-js";
import { spread, classList, setAttribute } from "solid-js/web";

interface Props extends JSX.HTMLAttributes<HTMLHeadingElement> {
  as?: Parameters<typeof document.createElement>[0];
}

export const Text: Component<Props> = ({ as = "h1", ...rest }) => {
  const element = document.createElement(as);
  spread(element, rest);
  classList(element, {
    "uppercase font-bold font-[Phosphate] text-[9vw] border-b w-full text-center tracking-wide":
      as === "h1",
    "text-3xl font-[Avenir] text-gray-400 font-thin tracking-wider text-right": as === "h2",
    "text-2xl text-gray-700": as === "h3",
    "font-['Big_Caslon'] tracking-widest": as === 'small'
  });
  typeof rest.children === "string" &&
    setAttribute(element, "id", rest.children);

  return element;
};
