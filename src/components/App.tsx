import { type Component, For, type JSX, createSignal } from "solid-js";
import photo from "../assets/charles.jpg";
import { links, SocialLink } from "../data/links";
import { projects } from "../data/projects";
import { Nav } from "./Nav";
import { Project } from "./Project";
import { Section } from "./ui/Section";
import { Text } from "./ui/Text";

export const App: Component = () => {
  return (
    <>
      <Nav />
      <Text>Charles Kornoelje</Text>
      <img
        src={photo}
        class="rounded-full ring-1 ring-offset-4 ring-gray-500 h-[20vw] w-[20vw]"
        alt="profile shot of Charles"
        title="profile shot of Charles"
      />
      <div class="flex w-full justify-between max-w-md">
        <For each={"software engineer".split("")}>
          {(letter) => <span>{letter}</span>}
        </For>
      </div>
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
      <footer class="h-[50vh] bg-gray-100 w-screen -mx-4 flex justify-center items-end">
        <Text as="small">
          Copyright Charles Kornoelje {new Date().getFullYear()}
        </Text>
      </footer>
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
      class="block underline hover:before:content-['*'] before:absolute before:left-4 pl-2"
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
