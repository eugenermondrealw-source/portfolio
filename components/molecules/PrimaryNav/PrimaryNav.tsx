"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../../atoms/ThemeToggle/ThemeToggle";

export type PrimaryLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
};

type PrimaryNavProps = {
  links?: PrimaryLink[];
};

export default function PrimaryNav({ links }: PrimaryNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 items-center" aria-label="Main Navigation">
      <div className="flex gap-6 items-center">
        {links?.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`
                py-1 text-base font-semibold transition-all border-b-2
                text-brand hover:border-brand
                ${isActive ? "border-brand" : "border-transparent"}
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <ThemeToggle />
    </nav>
  );
}
