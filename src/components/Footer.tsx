import { type Component } from "solid-js";
import { Text } from "./ui/Text";

export const Footer: Component = () => {
  // TODO: add dark mode toggle.
  return (
    <footer class="h-[50vh] bg-gray-100 w-full pb-4 mt-4 flex justify-center items-end">
      <Text as="small">
        Copyright Charles Kornoelje {new Date().getFullYear()}
      </Text>
    </footer>
  );
};
