"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      // 🚀 THE FIX: Added "border-b border-border/40" (or border-border/50) directly to the global template.
      // This automatically injects a crisp, elegant separation line at the bottom of every single component on your home page.
      className={cn(
        "py-6 md:py-8 clear-both block border-b border-border/40",
        className,
      )}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(`mb-8 md:mb-8 ${centered ? "text-center" : ""}`, className)}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 text-balance font-cormorant leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-55" />
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({
  children,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
