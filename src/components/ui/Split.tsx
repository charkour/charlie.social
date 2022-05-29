import { For, type Component } from "solid-js";

export const Split: Component<{ children: string }> = (props) => {
  return (
    <div class="flex w-full justify-between max-w-md">
      <For each={props.children.split("")}>
        {(letter) => <span>{letter}</span>}
      </For>
    </div>
  );
};
