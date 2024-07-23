import { shiki } from "@/lib/action";

export default function Home() {
  const code = `const test = "test";  // [!code highlight]`;
  const res = shiki(code, "javascript");
  return <main>{res}</main>;
}
