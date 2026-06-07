"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  TreePine,
  Heart,
  BookOpen,
  Shield,
  LucideIcon,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/section";
import whyChooseData from "@/content/whyChoose.json";

interface WhyChooseSectionProps {
  language: string;
}

const iconComponentMap: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  users: Users,
  nature: TreePine,
  heart: Heart,
  book: BookOpen,
  shield: Shield,
};

export function WhyChooseSection({ language }: WhyChooseSectionProps) {
  const isHi = language === "hi";
  const langKey = isHi ? "hi" : "en";

  return (
    // 🚀 THE FIX: Removed the explicit "py-16 md:py-24" overrides completely.
    // It now naturally falls back to our compact "py-6 md:py-8" system defaults.
    <Section className="bg-card border-b border-border/40 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full">
        {/* Dynamic Section Header Content Layout block */}
        <SectionHeader
          badge={whyChooseData.badge?.[langKey] || "Why Choose Us"}
          title={whyChooseData.title?.[langKey] || "The Gurukulam Difference"}
          subtitle={whyChooseData.subtitle?.[langKey]}
        />

        {/* Dense Informational Grid Viewport (Reduced top margin scale from mt-12 to mt-6) */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {whyChooseData.features?.map((feature, idx) => {
            const TargetIcon = iconComponentMap[feature.icon] || GraduationCap;

            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="relative p-6 sm:p-8 bg-background rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 group hover:shadow-2xs flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block Component Structure */}
                  <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-105">
                    <TargetIcon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {feature.title?.[langKey]}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-pretty">
                    {feature.desc?.[langKey]}
                  </p>
                </div>

                {/* Subtle traditional aesthetic border accent corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/15 rounded-tr-2xl group-hover:border-primary/30 transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
