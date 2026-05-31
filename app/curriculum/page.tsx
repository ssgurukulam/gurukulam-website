import { Metadata } from "next";
import {
  Section,
  SectionHeader,
  FadeIn,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/section";
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
import { motion } from "framer-motion";
import curriculum from "@/content/curriculum.json";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "Explore our comprehensive curriculum in Yoga, Meditation, Martial Arts, and more at Shoonya Shikhar Gurukulam.",
};

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
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                Our Curriculum
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Paths of Learning
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive programs that blend ancient wisdom with modern
                education for holistic development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Courses Grid */}
      <Section>
        <div className="space-y-16">
          {curriculum.map((course, index) => {
            const Icon = iconMap[course.icon] || Flower2;
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={course.id}>
                <div
                  id={course.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24`}
                >
                  {/* Image */}
                  <div
                    className={`${isEven ? "order-1" : "order-1 lg:order-2"}`}
                  >
                    <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-primary/30" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${isEven ? "order-2" : "order-2 lg:order-1"}`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-semibold text-foreground mb-4">
                      {course.title}
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Duration: {course.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {course.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">
                        What You&apos;ll Learn:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < curriculum.length - 1 && (
                  <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-card">
        <SectionHeader
          badge="Our Approach"
          title="Learning at the Gurukulam"
          subtitle="How we structure education for maximum impact and retention."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Traditional Methods",
              description:
                "Oral transmission, memorization, chanting, and direct instruction from Guru to student in the time-tested way.",
            },
            {
              title: "Experiential Learning",
              description:
                "Knowledge is not just studied but lived. Students practice what they learn in daily life and seva.",
            },
            {
              title: "Individual Attention",
              description:
                "Small class sizes and personalized guidance ensure each student progresses at their optimal pace.",
            },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="p-8 bg-background rounded-2xl border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection language="en"/>
    </>
  );
}
