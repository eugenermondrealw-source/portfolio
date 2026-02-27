import { Fragment, ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button"; 
import Heading from "../../atoms/Heading/Heading";
import RichText from "../../atoms/RichText/RichText";
import AppImage from "../../atoms/AppImage/AppImage";

interface HeroProps {
  title: string;
  subtitle?: string | ReactNode;
  name?: string;
  location?: string;
  age?: number;
  email?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number; 
  aspectRatio?: "square" | "video" | "auto";
  buttons?: { label: string; href?: string; variant?: "primary" | "secondary"; onClick?: () => void }[];
  className?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  name, 
  location, 
  age, 
  email, 
  imageSrc = "https://picsum.photos/id/91/300/300",
  imageAlt = "Profile Picture",
  imageWidth = 450,
  imageHeight = 450,
  aspectRatio = "square",
  buttons = [], 
  className = "" 
}: HeroProps) {
  return (
    <section className={`min-h-[600px] lg:h-[80vh] flex items-center ${className}`}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12 items-center">
        <div className="lg:col-span-4 order-last lg:order-first flex flex-col gap-6 text-foreground"> 
          <Heading level="h1">
            {title}
          </Heading>

          {subtitle && (
            <div className="flex flex-col gap-4 text-text max-w-prose">
              <RichText content={subtitle} className="text-lg sm:text-xl" />
            </div>
          )}

          <div className="h-1 bg-brand"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text">
            <div className="text-base tracking-wide">
                <strong className="text-brand">Name:</strong><span className="ml-2">{name}</span>
            </div>
            <div className="text-base tracking-wide">
                <strong className="text-brand">From:</strong><span className="ml-2">{location}</span>
            </div>
            <div className="text-base tracking-wide">
                <strong className="text-brand">Age:</strong><span className="ml-2">{age}</span>
            </div>
            <div className="text-base tracking-wide">
                <strong className="text-brand">Email:</strong><span className="ml-2">{email}</span>
            </div>
          </div>

          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {buttons.map((btn, idx) => {
                const ButtonElement = (
                  <Button variant={btn.variant} onClick={btn.onClick}>
                    {btn.label}
                  </Button>
                );

                return btn.href ? (
                  <Link key={idx} href={btn.href} className="inline-block">
                    {ButtonElement}
                  </Link>
                ) : (
                  <Fragment key={idx}>{ButtonElement}</Fragment>
                );
              })}
            </div>
          )}
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <AppImage 
            src={imageSrc}
            alt={imageAlt} 
            width={imageWidth} 
            height={imageHeight}
            aspectRatio={aspectRatio}
            imageClassName=""
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
