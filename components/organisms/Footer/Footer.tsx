"use client";

import FooterNav from "@/components/molecules/FooterNav/FooterNav";
import RichText from "../../atoms/RichText/RichText";

type FooterProps = {
  content?: string;
  links?: { label: string; href: string; target?: "_blank" | "_self" }[];
};

export default function Footer({ content, links }: FooterProps) {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-base">
        <RichText content={content} className="text-text" />
        <FooterNav links={links ?? []} />
      </div>
    </footer>
  );
}
