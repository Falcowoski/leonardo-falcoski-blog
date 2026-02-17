import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mermaid from "astro-mermaid";
import remarkSectionize from "remark-sectionize";
import remarkAsciiSlugs from "./src/lib/remark-ascii-slugs.mjs";

export default defineConfig({
  site: "https://leonardo-falcoski-blog.vercel.app",
  integrations: [
    mermaid({
      theme: "neutral",
      autoTheme: true,
      mermaidConfig: {
        themeCSS: ".label foreignObject { overflow: visible; } .nodeLabel { white-space: nowrap; }",
      },
    }),
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [remarkAsciiSlugs, remarkSectionize],
    shikiConfig: {
      theme: "dracula",
    },
  },
});
