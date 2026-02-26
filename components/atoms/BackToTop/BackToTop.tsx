"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate how far we've scrolled (0 to 100)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // 2. Show button only after scrolling 300px
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG Circle Math
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        showButton ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-50 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="relative flex items-center justify-center p-3 rounded-full bg-surface shadow-xl border border-brand/5 hover:border-brand/20 group active:scale-90 transition-all duration-300"
      >
        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 -rotate-90" width="100%" height="100%" viewBox="0 0 50 50">
          {/* Background Circle (Track) */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="3"
            className="text-brand/10"
          />
          {/* Progress Circle (Fill) */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: offset }}
            strokeLinecap="round"
            className="text-brand transition-all duration-100 ease-out"
          />
        </svg>

        {/* The Arrow Icon */}
        <ArrowUp size={20} className="relative z-10 text-brand group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
