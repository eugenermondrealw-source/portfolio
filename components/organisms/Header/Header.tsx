"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import these
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryNav from "../../molecules/PrimaryNav/PrimaryNav";
import RichText from "../../atoms/RichText/RichText";
import { Logo } from "@/components/atoms/Logo/Logo";

type HeaderProps = {
  content: string;
  links: { label: string; href: string; target?: "_blank" | "_self" }[];
};

export default function Header({ content, links }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`
      sticky top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled || isMenuOpen ? "bg-surface shadow-xs shadow-brand" : "bg-transparent"}
    `}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight z-50">
          <Logo />
        </Link>

        {/* Desktop Nav & Theme Toggle */}
        <div className="flex items-center gap-4">
          <PrimaryNav links={links} />

          {/* Burger Button - Visible only on Mobile */}
          <button 
            className="sm:hidden p-2 text-brand z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Overlay */}
      <div className={`
        fixed inset-0 bg-surface flex flex-col items-center justify-center transition-all duration-300 lg:hidden
        ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}>
        <nav className="flex flex-col gap-8 text-center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-2xl font-bold ${pathname === link.href ? "text-brand" : "text-muted"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
