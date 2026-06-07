"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Flower2,
  Brain,
  Sword,
  BookOpen,
  Monitor,
  Heart,
  Star,
  Flame,
  LucideIcon,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import curriculumData from "@/content/curriculum.json";

interface CurriculumSectionProps {
  language: string;
}

const iconMap: Record<string, LucideIcon> = {
  lotus: Flower2,
  meditation: Brain,
  sword: Sword,
  book: BookOpen,
  computer: Monitor,
  heart: Heart,
  star: Star,
  flame: Flame,
};

export function CurriculumSection({ language }: CurriculumSectionProps) {
  const isHi = language === "hi";
  const langKey = isHi ? "hi" : "en";

  return (
    <Section id="curriculum">
      <SectionHeader
        badge={isHi ? "हमारा पाठ्यक्रम" : "Our Curriculum"}
        title={isHi ? "शिक्षा के आयाम" : "Paths of Learning"}
        subtitle={
          isHi
            ? "हमारे व्यापक कार्यक्रमों की खोज करें जो आधुनिक शिक्षा के साथ प्राचीन ज्ञान का मेल कराते हैं।"
            : "Discover our comprehensive programs that blend ancient wisdom with modern education, nurturing complete human development."
        }
      />

      {/* 🔮 RESTORED: Exactly matches your original 4-column layout metrics */}
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {curriculumData.slice(0, 8).map((course) => {
          const Icon = iconMap[course.icon] || Flower2;
          const hasImage = !!course.image;

          // Safe data fallbacks to handle either translated objects or flat legacy strings
          const displayTitle =
            typeof course.title === "object"
              ? course.title[langKey]
              : course.title;
          const displayShortDesc =
            typeof course.shortDescription === "object"
              ? course.shortDescription[langKey]
              : course.shortDescription;

          return (
            <motion.div
              key={course.id}
              variants={staggerItem}
              className="group"
            >
              <Link href={`/curriculum#${course.id}`}>
                {/* 🔮 RESTORED: Exactly matches your original p-6 card blueprint */}
                <div className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* MEDIA CONTAINER */}
                    <div className="relative mb-4 overflow-hidden rounded-xl bg-primary/10 transition-all duration-300">
                      {hasImage ? (
                        <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-xl border border-border/40 shadow-xs">
                          <Image
                            src={course.image}
                            alt={displayTitle}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight">
                      {displayTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {displayShortDesc}
                    </p>
                  </div>

                  <div className="flex items-center text-sm text-primary font-medium pt-2 border-t border-border/10">
                    <span>{isHi ? "और जानें" : "Learn More"}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </StaggerContainer>

      <div className="mt-12 text-center">
        <Link href="/curriculum">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 hover:bg-primary/5 cursor-pointer rounded-xl font-semibold"
          >
            {isHi ? "पाठ्यक्रम का विवरण देखें" : "View Curriculum Details"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
