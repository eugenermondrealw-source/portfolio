import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

const sizes: Record<HeadingLevel, string> = {
  h1: "text-4xl sm:text-5xl font-bold tracking-tight",
  h2: "text-3xl sm:text-4xl font-semibold tracking-tight",
  h3: "text-2xl sm:text-3xl font-semibold",
  h4: "text-xl sm:text-2xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
};

export default function Heading({
  level = "h1",
  children,
  className = "",
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag className={`${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}
