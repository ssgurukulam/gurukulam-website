"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import {
  Section,
  SectionHeader,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import testimonials from "@/content/testimonials.json";

export function TestimonialsSection() {
  return (
    <Section className="bg-card">
      <SectionHeader
        badge="Student Voices"
        title="Transformed Lives"
        subtitle="Hear from our alumni about their transformative journey at Shoonya Shikhar Gurukulam."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 6).map((testimonial) => (
          <motion.div key={testimonial.id} variants={staggerItem}>
            <div className="h-full p-8 bg-background rounded-2xl border border-border relative">
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🙏</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary">{testimonial.year}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>

      <div className="mt-12 text-center">
        <Link href="/testimonials">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 hover:bg-primary/5"
          >
            Read More Stories
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
