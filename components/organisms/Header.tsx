"use client";

import Link from "next/link";
import PrimaryNav from "../molecules/PrimaryNav";
import RichText from "../atoms/RichText";

type HeaderProps = {
  content: string;
  links: { label: string; href: string; target?: "_blank" | "_self" }[];
};

export default function Header({ content, links }: HeaderProps) {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <RichText content={content} />
        </Link>

        <PrimaryNav links={links} />
      </nav>
    </header>
  );
}
