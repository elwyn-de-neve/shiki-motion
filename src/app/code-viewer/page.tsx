"use client";
import { CodeBlock } from "@/components/code-block";
import { useState } from "react";

function Page() {
  const codeFragments = [
    `let count = 1`,
    `let count = 1
function add(){}`,
    `let count = 1 // [!code ++]
function add(){
  count += 1 // [!code highlight]
}`,
  ];

  const [code, setCode] = useState(codeFragments[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function updateIndex(direction: number) {
    const newIndex =
      (currentIndex + direction + codeFragments.length) % codeFragments.length;
    setCode(codeFragments[newIndex]);
    setCurrentIndex(newIndex);
  }

  return (
    <main className="h-full">
      <CodeBlock code={code} lang="js" />
      <button onClick={() => updateIndex(-1)}>Previous</button>
      <button onClick={() => updateIndex(1)}>Next</button>
    </main>
  );
}

export default Page;
