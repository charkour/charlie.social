export interface SocialLink {
  href: string;
  title: string;
  color: string;
  desc?: string;
}

export const links = [
  {
    href: "https://www.github.com/charkour",
    title: "GitHub",
    color: "violet",
    desc: "The social media where I spend most of my time. Here, you will frequently see me star interesting projects and publish new releases of my packages.",
  },
  {
    href: "https://www.linkedin.com/in/charles-kornoelje/",
    title: "LinkedIn",
    color: "teal",
    desc: "Probably to best way to reach out to me. I don't spend too much time on this platform, but it's a great way to see what my friends are up to in their professional lives.",
  },
  {
    href: "https://www.strava.com/athletes/charkour",
    title: "Strava",
    color: "red",
    desc: "See what a post-collegiate runner is up to.",
  },
  {
    href: "https://twitter.com/_charkour",
    title: "Twitter",
    color: "lightblue",
    desc: "DMs are open! Occasionally I will tweet about web dev. Twitter is how I stay up to date on what's happening in engineering.",
  },
  {
    href: "https://stackoverflow.com/users/9931154/charles-kornoelje",
    title: "Stack Overflow",
    color: "orange",
    desc: "I like to answer questions when I can to give back to the community that helped me.",
  },
];
