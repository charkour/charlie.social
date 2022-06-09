import { type ProjectProps } from "../components/Project";

export const projects: ProjectProps[] = [
  {
    title: "Tekton.com",
    desc: "6 month rewrite of Tekton.com using modern web technologies and best-of-breed microservices.",
    tech: ["Next.js", "React.js"],
    href: "https://www.tekton.com",
  },
  {
    title: "Course Schedulizer",
    desc: "Project used internally at Calvin University by department chairs",
    tech: ["React.js", "Sass"],
    href: "https://github.com/senior-knights/course-schedulizer",
  },
  {
    title: "Zundo",
    desc: "middleware for zustand. add time travel to your apps",
    tech: ["TypeScript", "React.js"],
    href: "https://github.com/charkour/zundo",
  },
  {
    title: "React Reactions",
    desc: "Fork of an old npm package updated to work with modern React.js and Next.js",
    tech: ["React.js"],
    href: "https://github.com/charkour/react-reactions",
  },
  {
    title: "Benchmark",
    desc: "Internal app used at CQL",
    tech: [".NET Core", "C#", "React.js", "SQL Server"],
  },
  {
    title: "Turtle Tracker",
    desc: "Mobile app used by the Calvin Ecosystem Preserve to track the health of their threatened box turtles",
    tech: ["React Native", "Expo", "Firebase", "PostgreSQL", "Ionic"],
    href: "https://github.com/calvin-cs262-fall2019-teamH?type=source",
  },
  {
    title: "IT Inventory Tracker",
    desc: "Internal app used at CQL to keep track of their inventory.",
    tech: [".NET Core", "C#", "React.js"],
  },
  {
    title: "Vacation Tracker",
    desc: "Restyled internal CQL HR vacation app 🌴",
    tech: ["Bulma", "Gulp"],
  },
  {
    title: "csps",
    desc: "tools to solve constraint satisfaction problems",
    tech: ["TypeScript"],
    href: "https://github.com/charkour/csps",
  },
  {
    title: "Harmoniously",
    desc: "automatically create non-conflicting semester schedules for departments and universities",
    tech: ["TypeScript"],
    href: "https://github.com/charkour/harmoniously",
  },
  {
    title: "Grit Leadership",
    desc: "Coaching Evaluation platform",
    tech: ["TypeScript", "React.js", "MUI"],
  },
  {
    title: "Calvin Orientation",
    desc: "Mobile app used by Calvin University to help students learn about the campus and complete Quest",
    tech: ["TypeScript", "React Native", "Expo"],
  },
];
