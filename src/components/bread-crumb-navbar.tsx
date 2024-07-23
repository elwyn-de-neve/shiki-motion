import { cn } from "@/lib/utils";

export type BreadCrumbNavbarProps = {
  className?: string;
};

function BreadCrumbNavbar({ className }: BreadCrumbNavbarProps) {
  return <header className={cn("text-zinc-200", className)}>Navbar</header>;
}

export default BreadCrumbNavbar;
