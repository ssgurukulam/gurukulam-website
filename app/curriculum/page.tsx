"use client";

import Image from "next/image";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import {
  Flower2,
  Brain,
  Sword,
  BookOpen,
  Monitor,
  Heart,
  Star,
  Flame,
  Clock,
  CheckCircle,
} from "lucide-react";
import curriculum from "@/content/curriculum.json";

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

export default function CurriculumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card border-b border-border/40">
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                Our Programs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                Paths of Learning
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Comprehensive programs that blend ancient wisdom with modern
                education for holistic human development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Courses Alternating Row Grid Stack */}
      <Section>
        <div className="space-y-24 max-w-7xl mx-auto w-full">
          {curriculum.map((course, index) => {
            const Icon = iconMap[course.icon] || Flower2;
            const isEven = index % 2 === 0;
            const hasImage = !!course.image; // Safe boolean flag evaluator

            return (
              <FadeIn key={course.id}>
                <div
                  id={course.id}
                  className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
                >
                  {/* Visual Content Block (6 Columns) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden relative bg-muted border border-border/60 shadow-xs">
                      {hasImage ? (
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          priority={index < 2}
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover transition-transform duration-700 hover:scale-102"
                        />
                      ) : (
                        /* Clean thematic icon fallback structure matching the design tokens if no image path exists */
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 flex items-center justify-center">
                          <Icon className="w-24 h-24 text-primary/20 animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Written Content Description Block (6 Columns) */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/5 shadow-2xs">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        {course.title}
                      </h2>

                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-muted w-fit px-3 py-1.5 rounded-lg border border-border/40">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>Duration: {course.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {course.description}
                    </p>

                    {/* Bullet Highlights Grid */}
                    {course.highlights && course.highlights.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                          What You&apos;ll Learn:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {course.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-snug"
                            >
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtle Geometric Row Border Break */}
                {index < curriculum.length - 1 && (
                  <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                )}
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Educational Approach Pedagogy Section */}
      <Section className="bg-card/50 border-t border-border/40">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          <SectionHeader
            badge="Our Approach"
            title="Learning at the Gurukulam"
            subtitle="How we structure education for maximum real-world impact and mental retention."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Traditional Methods",
                description:
                  "Oral transmission, logical debate frameworks, mantra chanting mechanics, and direct instruction from Guru to shishya in the time-tested way.",
              },
              {
                title: "Experiential Learning",
                description:
                  "Knowledge is not just stored as text data but lived. Students practice actionable modules directly inside daily schedules and campus seva.",
              },
              {
                title: "Individual Attention",
                description:
                  "Small focused batches and personal behavioral guidance ensure every single student grows at their optimal, comfortable custom pace.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="p-8 bg-background rounded-3xl border border-border/60 shadow-2xs hover:shadow-sm transition-shadow duration-300 h-full flex flex-col justify-start space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center border border-primary/5 select-none">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <CTASection language="en" />
    </>
  );
}
