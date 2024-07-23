"use client";
import { useEffect, useState } from "react";
import { createHighlighter, type HighlighterCore } from "shiki/bundle/web";

import "shiki-magic-move/dist/style.css";
import { ShikiMagicMove } from "shiki-magic-move/react";

type CodeBlockProps = {
  code: string;
  lang: string;
};

export function CodeBlock({ code, lang }: CodeBlockProps) {
  const [highlighter, setHighlighter] = useState<HighlighterCore | null>(null);

  useEffect(() => {
    async function initializeHighlighter() {
      const highlighter = await createHighlighter({
        langs: ["html", "css", "javascript", "typescript", "json", "python"],
        themes: ["vitesse-dark"],
      });

      setHighlighter(highlighter);
    }

    void initializeHighlighter();
  }, [code, lang]);

  if (!highlighter) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {highlighter && (
        <ShikiMagicMove
          lang={lang}
          theme="vitesse-dark"
          highlighter={highlighter}
          code={code}
          options={{
            duration: 800,
            stagger: 0.3,
            lineNumbers: true,
          }}
        />
      )}
    </div>
  );
}
