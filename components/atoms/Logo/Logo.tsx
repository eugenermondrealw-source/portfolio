// components/atoms/Logo/Logo.tsx
import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const Logo = ({ className = "w-10 h-10", ...props }: LogoProps) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org"
    className={className}
    {...props}
  >
    <rect width="40" height="40" rx="8" className="fill-brand/10" />
    <path
      d="M12 10H28M12 20H24M12 30H28M12 10V30"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand"
    />
  </svg>
);
