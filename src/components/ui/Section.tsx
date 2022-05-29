import { type Component, type JSX } from "solid-js";
import { Text } from "./Text";

interface Props {
  title: string;
  children: JSX.Element;
  class?: string;
}

export const Section: Component<Props> = (props) => {
  return (
    <section class="w-full">
      <Text as="h2">{props.title}</Text>
      {props.children}
    </section>
  );
};
