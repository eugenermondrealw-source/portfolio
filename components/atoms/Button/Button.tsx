import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle = 
    "inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    // text-background ensures it is White on Forest (Light) AND Black on Lime (Dark)
    primary: 
      "bg-brand text-background hover:bg-brand-hover shadow-md",
    
    // text-foreground ensures it is Dark on Lime (Light) AND White on Forest (Dark)
    // Inside Button.tsx variants
    secondary: 
      "bg-brand-highlight text-brand font-bold hover:bg-brand hover:text-background",
    
    outline: 
      "border-2 border-brand text-brand hover:bg-brand hover:text-background",
      
    ghost: 
      "text-muted hover:text-brand hover:bg-brand/10",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
