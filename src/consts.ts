import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Leonardo Falcoski",
  EMAIL: "leonardo.falcoski@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Início",
  DESCRIPTION: "Blog pessoal de Leonardo Falcoski sobre tecnologia e desenvolvimento.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Artigos sobre tecnologia, desenvolvimento e aprendizados.",
};


export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/leonardofalcoski"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/leonardofalcoski",
  }
];
