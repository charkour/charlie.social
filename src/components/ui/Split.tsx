import { For, type Component } from "solid-js";

interface Props {
  children: string;
  class?: string;
}

export const Split: Component<Props> = (props) => {
  return (
    <div
      class={
        "flex w-full justify-between max-w-xs sm:max-w-md text-xs sm:text-base " +
        props.class
      }
    >
      <For each={props.children.split("")}>
        {(letter) => <span>{letter}</span>}
      </For>
    </div>
  );
};
