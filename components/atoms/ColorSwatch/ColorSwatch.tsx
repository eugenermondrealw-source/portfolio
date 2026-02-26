import { ComponentPropsWithoutRef } from "react";

type ColorSwatchProps = ComponentPropsWithoutRef<"div"> & {
  variant?: "surface" | "muted" | "text" | "brand" | "brand-soft" | "brand-highlight";
  name: string;
};

const ColorSwatch = ({
  variant = "brand",
  name,
  className = "",
  ...props
}: ColorSwatchProps) => {
  const variantClasses = {
    surface: "bg-surface",
    muted: "bg-muted",
    text: "bg-text",
    brand: "bg-brand",
    "brand-soft": "bg-brand-soft",
    "brand-highlight": "bg-brand-highlight",
  };

  const activeVariant = variant && variantClasses[variant] ? variant : "surface";
  const isLightVariant = ["surface", "brand-soft", "brand-highlight"].includes(activeVariant);

  return (
    <div className={`relative flex items-center gap-4 ${className}`} {...props}>
      <div 
        className={`w-full h-14 rounded-lg border border-black/5 shadow-xl shrink-0 ${variantClasses[variant]}`} 
      />
      <span className={`absolute left-1/2 top-1/2 transform -translate-1/2 text-sm font-medium ${isLightVariant ? "text-black dark:text-white" : "text-white dark:text-black"}`}>{name}</span>
    </div>
  );
};

export default ColorSwatch;
