import { For, type Component } from "solid-js";
import { Text } from "./ui/Text";

export const Project: Component<Project> = (props) => {
  return (
    <article class="border p-4">
      <Text as="h3">{props.title}</Text>
      <Text as='p'>{props.description}</Text>
      <div class="flex gap-1 flex-wrap">
        <For each={props.tech}>
          {(item) => (
            <span class="border-blue-400 border rounded-full bg-blue-300 w-fit px-1 text-sm">
              {item}
            </span>
          )}
        </For>
      </div>
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


