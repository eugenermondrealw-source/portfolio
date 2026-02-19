"use client";

import Link from "next/link";

export type PrimaryLink = {
  label: string;
  href: string;
  target?: "_blank" | "_self";
};

type PrimaryNavProps = {
  links?: PrimaryLink[];
};

export default function PrimaryNav({ links }: PrimaryNavProps) {
	return (
		<div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
			{links?.map((link) => (
				<Link
					key={link.label}
					href={link.href}
					target={link.target || "_self"}
          rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
					className="hover:text-black dark:hover:text-white transition"
				>
					{link.label}
				</Link>
			))}
		</div>
	);
}