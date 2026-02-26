"use client";

import FooterNav from "@/components/molecules/FooterNav/FooterNav";
import RichText from "../../atoms/RichText/RichText";

type FooterProps = {
  content?: string;
  links?: { label: string; href: string; target?: "_blank" | "_self" }[];
};

export default function Footer({ 
  content = `© ${new Date().getFullYear()} Eugene Mondreal. Built with Next.js & Tailwind 4.`, 
  links 
}: FooterProps) {
  return (
    <footer className="w-full border-t border-brand/10 bg-surface/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding / Copyright */}
        <div className="text-sm font-medium text-muted">
          <RichText content={content} className="text-center md:text-left" />
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-8">
          <FooterNav links={links ?? []} />
          
          {/* Optional: Add a 'Back to Top' link here later */}
        </div>
      </div>
    </footer>
  );
}
