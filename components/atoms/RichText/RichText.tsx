import React from "react";

type RichTextProps = {
  content: React.ReactNode;
  className?: string;
};

export default function RichText({ content, className = "" }: RichTextProps) {
  return (
    <div className={`prose dark:text-white max-w-full ${className}`}>
      {content}
    </div>
  );
}
