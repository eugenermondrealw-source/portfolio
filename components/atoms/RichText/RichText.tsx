import { ReactNode } from "react";

interface RichTextProps {
  content?: ReactNode;
  className?: string;
  as?: "div" | "p" | "span";
}

export default function RichText({ 
  content, 
  className = "", 
  as: Component = "div" 
}: RichTextProps) {
  if (!content) return null;

  const isString = typeof content === "string";

  return (
    <Component 
      className={`prose max-w-full text-base leading-relaxed ${className}`}
      dangerouslySetInnerHTML={isString ? { __html: content } : undefined}
    >
      {!isString ? content : null}
    </Component>
  );
}
