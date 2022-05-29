import { onMount, type Component, type JSX } from "solid-js";
import { Text } from "./ui/Text";

export const Footer: Component = () => {
  let canvas: HTMLCanvasElement;
  // TODO: add dark mode toggle.
  // TODO: how to make canvas a higher resolution
  onMount(() => {
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = "lightgray";

      // TODO: use trig to calculate the correct values.
      // TODO: animate it to spin!

      // Outline
      ctx.moveTo(50, 0);
      ctx.lineTo(5, 50);
      ctx.lineTo(50, 100);
      ctx.lineTo(95, 50);
      ctx.lineTo(50, 0);
      ctx.stroke();

      // Center Horizontal V
      ctx.moveTo(5, 50);
      ctx.lineTo(50, 65);
      ctx.lineTo(95, 50);
      ctx.stroke();

      // Leftmost
      ctx.moveTo(50, 0);
      ctx.lineTo(20, 55);
      ctx.lineTo(50, 100);
      ctx.stroke();

      // Rightmost
      ctx.moveTo(50, 0);
      ctx.lineTo(80, 55);
      ctx.lineTo(50, 100);
      ctx.stroke();

      // Left center
      ctx.moveTo(50, 0);
      ctx.lineTo(40, 62);
      ctx.lineTo(50, 100);
      ctx.stroke();

      // Right center
      ctx.moveTo(50, 0);
      ctx.lineTo(60, 62);
      ctx.lineTo(50, 100);
      ctx.stroke();
    }
  });
  return (
    <footer class="h-[50vh] bg-gray-100 w-full pb-4 mt-4 flex flex-col justify-between items-center">
      <div />
      <canvas ref={canvas} class="" id="canvas" />
      <Text as="small">
        Copyright Charles Kornoelje {new Date().getFullYear()}
      </Text>
    </footer>
  );
};
