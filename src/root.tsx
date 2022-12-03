/* @refresh reload */
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link
} from "solid-start";
import "./root.css";
import { App } from "./components";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Charles Kornoelje</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#000" />
        <Link rel="shortcut icon" type="image/ico" href="/src/assets/favicon.ico" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}


// document.getElementById("root")!.onmousemove = (e) => {
//   for (const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;

//     // TODO: figure out why TS is complaining about this.
//     card.style.setProperty("--x", `${x}px`);
//     card.style.setProperty("--y", `${y}px`);
//   }
// };
