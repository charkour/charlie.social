import { type Component, For } from "solid-js";
import { links } from "../data/links";
import { projects } from "../data/projects";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Project } from "./Project";
import { Section } from "./ui/Section";
import { StyledLink } from "./ui/StyledLink";

export const App: Component = () => {
  return (
    <>
      <Nav />
      <Header />
      <main class="space-y-4 pt-4">
        <Section title="Work">
          <div class="grid gap-4">
            <For each={projects}>{(project) => <Project {...project} />}</For>
          </div>
        </Section>
        <Section title={"Links"}>
          <ul>
            <For each={links}>{(link) => <StyledLink {...link} />}</For>
          </ul>
        </Section>
        <Section title="Resume">Link to my resume.</Section>
      </main>
      <Footer />
    </>
  );
};
