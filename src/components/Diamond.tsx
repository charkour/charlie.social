import { onMount, type Component } from "solid-js";

export const Diamond: Component = () => {
  // TODO: how to properly use refs in solid? TS is complaining.
  let canvas: HTMLCanvasElement;

  // TODO: how to make canvas a higher resolution
  onMount(() => {
    canvas.width = 1000;
    canvas.height = 1000;
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
    <a
      href="https://github.com/charkour/charlie.social"
      class="relative h-[100px] w-[100px] overflow-hidden appearance-none"
    >
      <canvas
        ref={canvas}
        class="absolute top-0 origin-top-left cursor-pointer"
        onClick={() => {
          // go to source code
        }}
        id="canvas"
        style={{ transform: "scale(0.1)" }}
      />
    </a>
  );
};
