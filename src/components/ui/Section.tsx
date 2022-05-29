import { type Component, type JSX } from "solid-js";
import { Typography } from "./Text";

interface Props {
  title: string;
  children: JSX.Element;
  class?: string;
}

export const Section: Component<Props> = (props) => {
  return (
    <section class="w-full">
      <Typography as="h2">{props.title}</Typography>
      {props.children}
    </section>
  );
};
