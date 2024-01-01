// @refresh reload
import { onMount } from "solid-js";
import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";

export default function App() {
  onMount(() => {
    document.body.onmousemove = (e) => {
      for (const card of document.getElementsByClassName(
        "card"
      ) as HTMLCollectionOf<HTMLElement>) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      }
    };
  });
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}