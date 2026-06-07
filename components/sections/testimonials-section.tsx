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

interface TestimonialItem {
  id: string | number;
  name: string;
  year: string;
  role: Record<string, string> | string;
  text: Record<string, string> | string;
}

interface TestimonialsSectionProps {
  language: string;
}

// Simulated data fallback matching bilingual schema maps
const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Aman Sharma",
    year: "2025",
    role: {
      en: "Alumni // Computer Science",
      hi: "पूर्व छात्र // कंप्यूटर विज्ञान",
    },
    text: {
      en: "Living in the Gurukulam completely altered my perspective. Balancing rigorous modern coding blocks with morning dhyana meditations gave me a calm clarity I never found in conventional classrooms.",
      hi: "गुरुकुल में रहने से मेरा दृष्टिकोण पूरी तरह बदल गया। सुबह के ध्यान के साथ आधुनिक कोडिंग सीखने से मुझे एक अनूठी मानसिक स्पष्टता मिली जो सामान्य स्कूलों में असंभव है।",
    },
  },
  {
    id: 2,
    name: "Rahul Jangid",
    year: "2025",
    role: { en: "Alumni // Vedic Studies", hi: "पूर्व छात्र // वैदिक अध्ययन" },
    text: {
      en: "The combination of traditional discipline, Sanskrit shlokas, and daily martial arts self-defense training structured my character. It built real inner stamina and absolute focus.",
      hi: "पारंपरिक अनुशासन, संस्कृत श्लोक और दैनिक मार्शल आर्ट्स के प्रशिक्षण ने मेरे चरित्र को एक नया आकार दिया है। इसने मुझमें वास्तविक आंतरिक शक्ति और एकाग्रता का निर्माण किया।",
    },
  },
];

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const isHi = language === "hi";
  const langKey = isHi ? "hi" : "en";

  return (
    <Section className="bg-card border-b border-border/40 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full">
        <SectionHeader
          badge={
            isHi
              ? "विद्यार्थी अनुभव // जीवन परिवर्तन"
              : "Student Voices // Authentic Transformations"
          }
          title={
            isHi
              ? "परिवर्तित जीवन की अनुभूतियाँ"
              : "Stories of True Transformation"
          }
          subtitle={
            isHi
              ? "जानिए हमारे विद्यार्थियों और पूर्व छात्रों से कि कैसे गुरुकुलम् की जीवनशैली ने उनके चरित्र और कौशल को निखारा है।"
              : "Hear from our alumni about their comprehensive 360° growth journey at Shoonya Shikhar Gurukulam."
          }
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonialsData.map((testimonial) => {
            const currentText =
              typeof testimonial.text === "object"
                ? testimonial.text[langKey]
                : testimonial.text;
            const currentRole =
              typeof testimonial.role === "object"
                ? testimonial.role[langKey]
                : testimonial.role;

            return (
              <motion.div key={testimonial.id} variants={staggerItem}>
                <div className="h-full p-6 sm:p-8 bg-background rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 relative group flex flex-col justify-between hover:shadow-2xs">
                  <div>
                    {/* Background Quote Decoration Layout item */}
                    <div className="absolute top-6 right-6">
                      <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
                    </div>

                    <p className="text-muted-foreground text-xs sm:text-sm italic leading-relaxed mb-6 text-pretty pt-2">
                      "{currentText}"
                    </p>
                  </div>

                  {/* Profile grouping card metadata alignment */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                    <div className="w-11 h-11 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 text-lg select-none">
                      🙏
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-foreground text-sm sm:text-base tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">
                        {currentRole}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {isHi
                          ? `सत्र: ${testimonial.year}`
                          : `Batch: ${testimonial.year}`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Link href="/testimonials">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary/30 hover:bg-primary/5 cursor-pointer rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all h-10 sm:h-12"
            >
              {isHi
                ? "सभी प्रेरणादायक कहानियाँ पढ़ें"
                : "Read More Transformation Stories"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
