import { type Component } from "solid-js";
import { Text } from "./ui/Text";

export const Footer: Component = () => {
  return (
    <footer class="h-[50vh] bg-gray-100 w-screen -mx-4 -mb-4 pb-4 flex justify-center items-end">
      <Text as="small">
        Copyright Charles Kornoelje {new Date().getFullYear()}
      </Text>
    </footer>
  );
};
