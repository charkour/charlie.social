import { type Component, JSX } from "solid-js";
import { spread, classList, setAttribute } from "solid-js/web";

interface Props extends JSX.HTMLAttributes<HTMLHeadingElement> {
  as?: Parameters<typeof document.createElement>[0];
}

export const Typography: Component<Props> = ({ as = "h1", ...rest }) => {
  const element = document.createElement(as);
  spread(element, rest);
  classList(element, {
    "uppercase font-bold font-['Exo_2',_Phosphate] text-3xl sm:text-5xl md:text-6xl border-b w-full text-center tracking-wide py-0.5 sm:py-1 md:py-2":
      as === "h1",
    "text-xl sm:text-3xl font-['Quicksand',_Avenir] font-thin tracking-[1rem] sm:leading-10":
      as === "h2",
    "text-lg sm:text-2xl font-['Libre_Caslon_Text',_'Big_Caslon'] tracking-wide font-bold":
      as === "h3",
    "font-['Libre_Caslon_Text',_'Big_Caslon'] tracking-widest": as === "small",
    "text-sm sm:text-base leading-4": as === "p",
  });
  typeof rest.children === "string" &&
    setAttribute(element, "id", rest.children);

  return element;
};
