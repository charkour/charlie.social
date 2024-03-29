import { For } from "solid-js";
import { links } from "../data/links";
import { projects } from "../data/projects";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Project } from "./Project";
import { Section } from "./ui/Section";
import { StyledLinkItem } from "./ui/StyledLink";

export const App = () => {
  return (
    <>
      <Nav />
      <div id='grain'></div>
      <div class="p-4 max-w-4xl mx-auto">
        <Header />
        <main class="space-y-4 pt-4">
          <Section title="Projects">
            <div class="grid gap-2 md:grid-cols-2" id="cards">
              <For each={projects}>{(project) => <Project {...project} />}</For>
            </div>
          </Section>
          <Section title={"Links"}>
            <ul class="space-y-3">
              <For each={links}>{(link) => <StyledLinkItem {...link} />}</For>
            </ul>
          </Section>
          {/* // TODO: add podcasts, books, videos and other resources. */}
          {/* TODO: mention that I've given talks/presentations */}
          <Section title="Resumé">
            <ul>
              <StyledLinkItem
                title="My resumé"
                href="https://drive.google.com/file/d/1b8D9UjCz1jWnHBrvuAbghgj0yumGx9PP/view?usp=sharing"
                color="blue"
                desc="Hosted on Google Drive."
              />
            </ul>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
};
