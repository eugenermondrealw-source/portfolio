"use client";

import { ReactNode, use, useState } from "react";
import { Copy, Check } from "lucide-react"; // Import copy icons

export type SocialLinkProps = {
  icon: ReactNode;
  platform: string;
  username: string;
  href: string;
};

export default function SocialLink({ icon, platform, username, href }: SocialLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the link
    e.stopPropagation(); // Stop event bubbling
    
    navigator.clipboard.writeText(username);
    setCopied(true);
    
    // Reset icon after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-surface border border-brand/5 hover:border-brand/20 transition-all min-w-0 w-full">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-4 flex-1 min-w-0"
      >
        <div className="shrink-0 p-3 rounded-xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-background transition-colors duration-300">
          {icon}
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-xs font-bold text-muted uppercase tracking-widest">{platform}</p>
          <p className="text-base font-semibold text-text truncate">
            {username}
          </p>
        </div>
      </a>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="shrink-0 p-2 ml-auto rounded-lg text-muted hover:text-brand hover:bg-brand/10 transition-all"
        title={`Copy ${platform}`}
      >
        {copied ? (
          <Check size={16} className="text-green-500 animate-in zoom-in duration-200" />
        ) : (
          <Copy size={16} />
        )}
      </button>
    </div>
  );
}