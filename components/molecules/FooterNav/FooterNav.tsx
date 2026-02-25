"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type FooterLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
};

type FooterNavProps = {
  links?: FooterLink[];
};

export default function FooterNav({ links = [] }: FooterNavProps) {
  const pathname = usePathname();
  
  return (
    <nav className="flex gap-6 mt-4 sm:mt-0">
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={index} // Using index is fine for simple static lists
            href={link.href}
            target={link.target || "_blank"}
            rel="noopener noreferrer"
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
    </nav>
  );
}
