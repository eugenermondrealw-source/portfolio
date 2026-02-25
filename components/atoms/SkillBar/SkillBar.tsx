import { ComponentPropsWithoutRef } from "react";

type SkillBarProps = ComponentPropsWithoutRef<"div"> & {
  name: string;
  percentage: number;
};

export default function SkillBar({ name, percentage, className = "" }: SkillBarProps) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <div className="flex justify-between items-end px-1">
        <span className="text-sm font-bold text-text uppercase tracking-tight">
          {name}
        </span>
        <span className="text-xs font-medium text-text italic">
          {percentage + '%'}
        </span>
      </div>
      
      {/* The Bar Container */}
      <div className="h-2 w-full bg-brand/5 rounded-full overflow-hidden border border-brand/5">
        {/* The Progress Fill */}
        <div 
          className="h-full bg-brand rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
