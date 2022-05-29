import { onMount, type Component, type JSX } from "solid-js";
import { Text } from "./ui/Text";

export const Footer: Component = () => {
  let canvas: HTMLCanvasElement;
  // TODO: add dark mode toggle.
  // TODO: how to make canvas a higher resolution
  onMount(() => {
    canvas.width = 1000;
    canvas.height = 1000;
    // canvas.style = "transform: scale(0.1)";
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = "lightgray";
      ctx.lineWidth = 10;

      // TODO: use trig to calculate the correct values.
      // TODO: animate it to spin!

      // Outline
      ctx.moveTo(500, 0);
      ctx.lineTo(50, 500);
      ctx.lineTo(500, 1000);
      ctx.lineTo(950, 500);
      ctx.lineTo(500, 0);
      ctx.stroke();

      // Center Horizontal V
      ctx.moveTo(50, 500);
      ctx.lineTo(500, 650);
      ctx.lineTo(950, 500);
      ctx.stroke();

      // Leftmost
      ctx.moveTo(500, 0);
      ctx.lineTo(200, 550);
      ctx.lineTo(500, 1000);
      ctx.stroke();

      // Rightmost
      ctx.moveTo(500, 0);
      ctx.lineTo(800, 550);
      ctx.lineTo(500, 1000);
      ctx.stroke();

      // Left center
      ctx.moveTo(500, 0);
      ctx.lineTo(400, 620);
      ctx.lineTo(500, 1000);
      ctx.stroke();

      // Right center
      ctx.moveTo(500, 0);
      ctx.lineTo(600, 620);
      ctx.lineTo(500, 1000);
      ctx.stroke();
    }
  });
  return (
    <footer class="relative h-[50vh] bg-gray-100 w-full pb-4 mt-4 flex flex-col justify-between items-center">
      <div />
      <div class="relative h-[100px] w-[100px] overflow-hidden">
        <canvas
          ref={canvas}
          class="absolute top-0 origin-top-left"
          id="canvas"
          style={{ transform: "scale(0.1)" }}
        />
      </div>
      <Text as="small">
        Copyright Charles Kornoelje {new Date().getFullYear()}
      </Text>
    </footer>
  );
};
