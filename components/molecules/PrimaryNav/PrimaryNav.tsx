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
		<div className="flex gap-6 text-base">
			{links?.map((link) => (
				<Link
					key={link.label}
					href={link.href}
					target={link.target || "_self"} 
					rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
					className="border-b border-transparent text-emerald-800 transition-colors duration-300 hover:border-emerald-800 dark:text-emerald-600 dark:hover:text-white"
				>
					{link.label}
				</Link>
			))}
		</div>
	);
}