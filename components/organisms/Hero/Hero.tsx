import { Fragment, ReactNode } from "react";
import Button from "@/components/atoms/Button/Button"; 
import Heading from "../../atoms/Heading/Heading";
import RichText from "../../atoms/RichText/RichText";

interface HeroProps {
  title: string;
  subtitle?: string | ReactNode;
  buttons?: { label: string; href?: string; variant?: "primary" | "secondary"; onClick?: () => void }[];
  className?: string;
}

export default function Hero({ title, subtitle, buttons = [], className = "" }: HeroProps) {
  return (
    <section className={`min-h-[70vh] flex items-center ${className}`}>
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* text-foreground ensures the title flips between Dark Forest and Lime */}
        <div className="flex flex-col gap-6 max-w-2xl text-foreground"> 
          <Heading level="h1" className="text-4xl sm:text-6xl font-bold tracking-tight">
            {title}
          </Heading>

          {subtitle && (
            <div className="flex flex-col gap-4 text-text max-w-prose">
              <RichText content={subtitle} className="text-lg sm:text-xl" />
            </div>

          )}

          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-4">
              {buttons.map((btn, idx) => {
                const ButtonElement = (
                  <Button variant={btn.variant} onClick={btn.onClick}>
                    {btn.label}
                  </Button>
                );

                return btn.href ? (
                  <a key={idx} href={btn.href} className="inline-block">
                    {ButtonElement}
                  </a>
                ) : (
                  <Fragment key={idx}>{ButtonElement}</Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
