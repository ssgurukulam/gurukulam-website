import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Section,
  SectionHeader,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import teachers from "@/content/teachers.json";

interface TeachersSectionProps {
  language: string;
}

export function TeachersSection({ language }: TeachersSectionProps) {
  const langKey = (language === "hi" ? "hi" : "en") as "en" | "hi";

  return (
    <Section className="bg-card">
      <SectionHeader
        badge="Our Gurus"
        title="Learn from the Masters"
        subtitle="Our distinguished faculty brings decades of experience and deep expertise in their respective fields."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers &&
          teachers.slice(0, 3).map((teacher) => {
            const localized = teacher[langKey];

            return (
              <div key={teacher.id} className="group">
                <div className="bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  {/* Image Frame */}
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden shrink-0">
                    {teacher.image ? (
                      <Image
                        src={teacher.image}
                        alt={localized?.name || "Teacher"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-fit group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-5xl opacity-50">🙏</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="text-xs text-primary font-medium mb-1">
                        {localized?.specialty}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {localized?.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content Frame */}
                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary">
                          {localized?.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {localized?.experience}
                        </span>
                      </div>
                      {/* Clean plain fallback view preview text snippet */}
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {/* Strips out common basic HTML tags if any exist in data preview */}
                        {localized?.description?.replace(/<[^>]*>/g, "")}
                      </p>
                    </div>

                    <Link
                      href="/teachers"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 self-start pt-1"
                    >
                      {langKey === "hi" ? "और जानें" : "Read Full Bio"} →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </StaggerContainer>

      <div className="mt-12 text-center">
        <Link href="/teachers">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 hover:bg-primary/5"
          >
            Meet All Teachers
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
