export interface SocialLink {
  href: string;
  title: string;
  color: string;
  desc?: string;
}

// TODO: add href
export const links = [
  {
    href: "https://www.github.com/charkour",
    title: "GitHub",
    color: "violet",
    desc: "The social media where I spend most of my time. Here, you will frequently see me star interesting projects and publish new releases of my packages.",
  },
  {
    href: "",
    title: "LinkedIn",
    color: "teal",
    desc: "Probably to best way to reach out to me! I don't spend too much time on this platform, but it's a great way to see what my friends are up to in their professional lives!",
  },
  {
    href: "",
    title: "Twitter",
    color: "lightblue",
    desc: "Occasionally I will tweet about web dev. Twitter is how I stay up to do "
  },
  {
    href: "",
    title: "Stack Overflow",
    color: "orange",
    desc: "I like to answer questions when I can and give back."
  },
];
