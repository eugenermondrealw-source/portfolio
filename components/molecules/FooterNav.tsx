"use client";

import Link from "next/link";

export type FooterLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
};

type FooterNavProps = {
  links?: FooterLink[];
};

export default function FooterNav({ links = [] }: FooterNavProps) {
  return (
    <div className="flex gap-6 mt-4 sm:mt-0">
      {links.map((link, index) => (
        <Link
          key={index} // Using index is fine for simple static lists
          href={link.href}
          target={link.target || "_blank"}
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
