/* @refresh reload */
import { onMount } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start";
import "./root.css";

export default function Root() {
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
    <Html lang="en">
      <Head>
        <Title>Charles Kornoelje</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#000" />
        <Meta
          name="description"
          content="Performance engineer and web developer."
        />
        <Link rel="shortcut icon" type="image/ico" href="/assets/favicon.ico" />
      </Head>
      <Body>
        <ErrorBoundary>
          <Routes>
            <FileRoutes />
          </Routes>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
