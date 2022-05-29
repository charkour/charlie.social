import { For, type Component } from "solid-js";
import { StyledLink } from "./ui/StyledLink";
import { Text } from "./ui/Text";

export const Project: Component<Project> = (props) => {
  return (
    <article class="border p-4">
      <Text as="h3">{props.title}</Text>
      <Text as='p'>{props.description}</Text>
      <ul class="flex gap-1 flex-wrap pt-3">
        <For each={props.tech}>
          {(item) => (
            <StyledLink title={item} color="maroon" href="" />
          )}
        </For>
      </ul>
    </article>
  );
};

type Tech =
  | "React.js"
  | "Next.js"
  | "Sass"
  | "TypeScript"
  | "React Native"
  | "Expo"
  | "C#"
  | ".NET Core"
  | "Firebase"
  | "PostgreSQL"
  | "SQL Server"
  | "Bulma"
  | "Gulp"
  | "MUI"
  | "Ionic";

// type Tech = [
//   "React.js",
//   "Next.js",
//   "Sass",
//   "TypeScript",
//   "React Native",
//   "Expo",
//   "C#",
//   ".NET Core",
//   "Firebase",
//   "PostgreSQL",
//   "SQL Server",
//   "Bulma",
//   "Gulp",
//   "MUI",
//   "Ionic"
// ];

const TechColor: Map<Tech, string> = new Map();
TechColor.set(".NET Core", "black");
TechColor.set("Bulma", "yellow");

export interface Project {
  title: string;
  description: string;
  tech: Tech[];
}


