import { For, type Component, Show } from "solid-js";
import { Typography } from "./ui/Typography";

export interface ProjectProps {
  title: string;
  desc: string;
  tech: Tech[];
  href?: string;
}

export const Project: Component<ProjectProps> = (props) => {
  return (
    <article class="card">
      <div class="card-content">
        <Typography as="h3" class="inline">
          {props.title}
        </Typography>
        {/* <Show when={props.href}>
          <a
            href={props.href}
            class="pl-2 hover:italic underline decoration-emerald-300"
          >
            View
          </a>
        </Show> */}
        <Typography as="p">{props.desc}</Typography>
        <ul class="flex flex-wrap gap-2 pt-2">
          {/* TODO: fix the font weight shift issue. */}
          <For each={props.tech}>{(item) => <span>{item}</span>}</For>
        </ul>
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
  | "Ionic"
  | "MQTT"
  | "Preact"
  | "Raspberry Pi";
