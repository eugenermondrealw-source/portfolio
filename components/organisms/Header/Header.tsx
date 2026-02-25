"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PrimaryNav from "../../molecules/PrimaryNav/PrimaryNav";
import RichText from "../../atoms/RichText/RichText";
import "./Header.css";

const component_name = "Header";

type HeaderProps = {
  content: string;
  links: { label: string; href: string; target?: "_blank" | "_self" }[];
};

export default function Header({ content, links }: HeaderProps) {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect after 20px of scrolling
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`
      ${component_name} 
      sticky top-0 left-0 w-full z-50 transition-all duration-300 py-2
      ${isScrolled ? "bg-surface shadow-xs shadow-brand" : "bg-transparent"}
    `}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <RichText content={content} className="text-text text-xl" />
        </Link>

        <PrimaryNav links={links} />
      </div>
    </header>
  );
}
