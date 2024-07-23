"use server";
import { createHighlighter } from "shiki/bundle/web";

type CodeToHtmlProps = {
  code: string;
  lang: string;
};

export const shiki = async ({ code, lang }: CodeToHtmlProps) => {
  const highlighter = await createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["html", "css", "javascript", "typescript"],
  });

  return highlighter.codeToHtml(code, {
    lang: lang,
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
  });
};
