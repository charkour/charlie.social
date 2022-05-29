import { type Component, For, createSignal } from "solid-js";
import { links, SocialLink } from "../data/links";
import { projects } from "../data/projects";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Project } from "./Project";
import { Section } from "./ui/Section";
import { Text } from "./ui/Text";

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
          <Text as="h3">Open Source Contributions</Text>
          <ul>
            <li>Turborepo</li>
            <li>Utopia</li>
          </ul>
        </Section>
        <Section title={"Links"}>
          <ul class="">
            <For each={links}>{(link) => <StyledLink {...link} />}</For>
          </ul>
        </Section>
        <Section title="Resume">Link to my resume.</Section>
      </main>
      <Footer />
    </>
  );
};

const StyledLink: Component<SocialLink> = (props) => {
  // TODO: is there a better way to get a ref?
  const [hover, setHover] = createSignal(false);
  let ref: HTMLAnchorElement;
  return (
    <a
      ref={ref}
      href={props.href}
      class="block underline hover:italic hover:before:content-['*'] before:absolute before:left-4 pl-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        "text-decoration-color": props.color,
        // "border-color": hover() ? props.color : 'transparent',
      }}
    >
      {props.title}
    </a>
  );
};
