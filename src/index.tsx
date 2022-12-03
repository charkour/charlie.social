/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { App } from "./components";

render(() => <App />, document.getElementById("root") as HTMLElement);

document.getElementById("root")!.onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    // TODO: figure out why TS is complaining about this.
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }
};
