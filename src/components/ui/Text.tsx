import { type Component, JSX } from "solid-js";
import { spread, createComponent, classList } from "solid-js/web";

interface Props extends JSX.HTMLAttributes<HTMLHeadingElement> {
  as?: Parameters<typeof document.createElement>[0];
}

export const Text: Component<Props> = ({ as = "h1", ...rest }) => {
  const element = document.createElement(as);
  classList(element, {
    "text-5xl text-transparent font-bold font-['Bungee_Inline',_Phosphate] bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text":
      as === "h1",
    "text-3xl text-gray-700": as === "h2",
    "text-2xl text-gray-700": as === "h3",
  });
  spread(element, rest);
  return element;
};
