import Button from "@/components/atoms/Button/Button"; 
import Heading from "../../atoms/Heading/Heading";
import RichText from "../../atoms/RichText/RichText";

interface HeroProps {
  title: string; // Main heading
  subtitle?: string | React.ReactNode; // RichText content
  buttons?: { label: string; href?: string; variant?: "primary" | "secondary"; onClick?: () => void }[];
  className?: string; // optional styling
}

export default function Hero({ title, subtitle, buttons = [], className = "" }: HeroProps) {
  return (
    <section className={`min-h-[100vh] flex items-center ${className}`}>
      <div className="w-full">
        <div className="flex flex-col gap-6 max-w-1/2">
          <Heading level="h1" className="text-4xl sm:text-5xl font-bold tracking-tight">
            {title}
          </Heading>

          {subtitle && (
            <RichText
              content={
                typeof subtitle === "string" ? <p className="text-lg leading-relaxed">{subtitle}</p> : subtitle
              }
            />
          )}

          {buttons.length > 0 && (
            <div className="flex gap-4">
              {buttons.map((btn, idx) => 
                btn.href ? (
                  <a key={idx} href={btn.href} className="inline-block">
                    <Button variant={btn.variant} onClick={btn.onClick}>
                      {btn.label}
                    </Button>
                  </a>
                ) : (
                  <Button key={idx} variant={btn.variant} onClick={btn.onClick}>
                    {btn.label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
