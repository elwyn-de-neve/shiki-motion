import { cn } from "@/lib/utils";

export type FileTreeSidebarProps = {
  className?: string;
};

function FileTreeSidebar({ className }: FileTreeSidebarProps) {
  return <nav className={cn("text-zinc-200", className)}>Sidebar</nav>;
}

export default FileTreeSidebar;
