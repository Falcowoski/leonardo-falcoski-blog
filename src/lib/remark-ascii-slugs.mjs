import { visit } from "unist-util-visit";
import Slugger from "github-slugger";

function stripDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function remarkAsciiSlugs() {
  return (tree) => {
    const slugger = new Slugger();

    visit(tree, "heading", (node) => {
      const text = node.children
        .filter((c) => c.type === "text" || c.type === "inlineCode")
        .map((c) => c.value)
        .join("");

      const slug = slugger.slug(stripDiacritics(text));

      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};
      node.data.hProperties.id = slug;
      node.data.id = slug;
    });
  };
}
