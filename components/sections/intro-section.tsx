"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import {
  Flower2,
  Brain,
  Sword,
  BookOpen,
  Monitor,
  Heart,
  Star,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import introData from "@/content/introSection.json";

interface IntroSectionProps {
  language: string;
}

const iconMap: Record<string, React.ElementType> = {
  lotus: Flower2,
  meditation: Brain,
  sword: Sword,
  book: BookOpen,
  computer: Monitor,
  heart: Heart,
  star: Star,
  flame: Flame,
};

export function IntroSection({ language }: IntroSectionProps) {
  const isHi = language === "hi";
  const langKey = isHi ? "hi" : "en";

  return (
    <Section className="bg-card p-0 relative overflow-hidden border-b border-border/40">
      {/* Background Ambience Overlays */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none pattern-overlay" />

      <div className="w-full mx-auto max-w-[1440px] relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="grid lg:grid-cols-12 items-center gap-8 lg:gap-16">
          {/* 🖼️ LEFT PANEL (Image Frame)
              🚀 MOBILE FIX: Added 'order-2 lg:order-1' so this block wraps *below* the typography on phones,
              preventing an image-under-image stack right after the slider. */}
          <div className="lg:col-span-5 w-full relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] rounded-[2rem] overflow-hidden shadow-xs border border-border/30 z-10 bg-muted order-2 lg:order-1">
            {introData.image ? (
              <Image
                src={introData.image}
                alt="Shoonya Shikhar Campus Infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Flower2 className="w-16 h-16 text-primary/20" />
              </div>
            )}

            {/* Subtle Gradient Veil for Depth Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
          </div>

          {/* 📋 RIGHT PANEL (Content & Features Layout block)
              🚀 MOBILE FIX: Added 'order-1 lg:order-2' to pull heading descriptions to the immediate top on mobile views. */}
          <div className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-8 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-3">
              <div>
                <span className="inline-block px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                  {introData.tagline?.[langKey] || "Shoonya Shikhar"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight font-cormorant leading-tight text-pretty">
                {introData.headingStart?.[langKey]}
                <br />
                <span className="text-primary">
                  {introData.headingAccent?.[langKey]}
                </span>
              </h2>
            </div>

            {/* Explanatory Paragraph Contexts */}
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto lg:mx-0">
              {introData.paragraphs?.map((para, idx) => (
                <p
                  key={idx}
                  className={cn(idx === 0 && "font-medium text-foreground/90")}
                >
                  {para[langKey]}
                </p>
              ))}
            </div>

            {/* 📊 STATE-AUDIT COMPLIANT COMPACT DASHBOARD GRID */}
            <div className="grid sm:grid-cols-2 gap-4 text-left pt-6 border-t border-border/40 mt-6">
              {introData.features?.map((item, idx) => {
                const configIconKey = item.icon || "lotus";
                const FeatureIcon = iconMap[configIconKey] || Flower2;

                return (
                  <div
                    key={idx}
                    className="p-4 bg-background rounded-xl border border-border/50 shadow-2xs flex gap-4 items-start hover:border-primary/20 transition-all duration-300 group hover:shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                      <FeatureIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-sm md:text-base tracking-tight group-hover:text-primary transition-colors">
                        {item.title?.[langKey]}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-normal">
                        {item.desc?.[langKey]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
