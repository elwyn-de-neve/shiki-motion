import React from "react";
import FileTreeSidebar from "@/components/file-tree-sidebar";
import BreadCrumbNavbar from "@/components/bread-crumb-navbar";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the weights you need
});

export type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div
      className={cn(
        "robotoMono flex h-screen flex-row bg-zinc-900 p-6",
        jetBrainsMono.className,
      )}
    >
      <FileTreeSidebar className="flex w-1/6 flex-row border-r border-zinc-800" />
      <div className="flex w-full flex-col">
        <BreadCrumbNavbar className="ml-4 border-b border-zinc-800 pb-4" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
