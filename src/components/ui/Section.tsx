import { type Component, type JSX } from "solid-js";
import { Text } from './Text';

export const Section: Component<{ title: string; children: JSX.Element; class?: string }> = (
  props
) => {
  return (
    <section class="w-full">
      <Text as="h2">{props.title}</Text>
      {props.children}
    </section>
  );
};