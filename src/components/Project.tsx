import { For, type Component } from "solid-js";
import { StyledLink } from "./ui/StyledLink";
import { Typography } from "./ui/Text";

export const Project: Component<Project> = (props) => {
  return (
    <article class="border p-4">
      <Typography as="h3">{props.title}</Typography>
      <Typography as='p'>{props.description}</Typography>
      <ul class="flex flex-wrap gap-2 pt-2">
        {/* TODO: fix the font weight shift issue.  */}
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

export interface Project {
  title: string;
  description: string;
  tech: Tech[];
}


