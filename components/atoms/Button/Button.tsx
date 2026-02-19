import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "px-5 py-2 font-medium border-2 border-emerald-800 hover:bg-transparent transition-colors duration-300";

  const variants = {
    primary: "bg-emerald-800 text-white hover:text-emerald-800 dark:hover:text-white",
    secondary: "bg-white/90 text-brand-black hover:text-emerald-800 hover:bg-emerald-800 dark:hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
