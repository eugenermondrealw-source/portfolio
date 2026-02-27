"use client";
import { RefObject, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Extract number (e.g., "15+" -> 15) and suffix (e.g., "+" or "Years")
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 120 });
  const isInView = useInView(ref as RefObject<Element>, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) motionValue.set(numericValue);
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatCard({ label, value, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="h-full flex flex-col items-center justify-center p-6 lg:p-4 rounded-2xl bg-surface border border-gray-100 shadow-sm transition-all hover:shadow-md">
        <p className="text-2xl font-bold text-brand">
          <AnimatedNumber value={value} />
        </p>
        <p className="text-[10px] font-bold text-text uppercase tracking-widest mt-1">
          {label}
        </p>
      </div>
    </motion.div>
  );
}