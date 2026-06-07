"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import dailyRoutine from "@/content/daily-routine.json";

interface DailyLifeSectionProps {
  language: string;
}

export function DailyLifeSection({ language }: DailyLifeSectionProps) {
  const isHi = language === "hi";
  const langKey = isHi ? "hi" : "en";

  // 🚀 THE JSON FIX: Safely splits your 12 native json items into two groups of 6
  const morningActivities = dailyRoutine.slice(0, 6);
  const eveningActivities = dailyRoutine.slice(6);

  return (
    <Section className="border-b border-border/40 relative overflow-hidden">
      {/* Background Ambience Vector Grid */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.03] pointer-events-none pattern-overlay" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full">
        <SectionHeader
          badge={
            isHi
              ? "दैनिक चर्या // अनुशासित जीवन"
              : "Daily Life // Structured Discipline"
          }
          title={isHi ? "गुरुकुल की आदर्श दिनचर्या" : "A Day at the Gurukulam"}
          subtitle={
            isHi
              ? "प्रकृति के नैसर्गिक चक्र के साथ संरेखित दिनचर्या, जो मानसिक स्पष्टता, शारीरिक सुदृढ़ता और सर्वांगीण विकास प्रदान करती है।"
              : "Our structured daily routine balances spiritual practices, academic learning, and physical activities for complete development."
          }
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-4">
          {/* ☀️ MORNING BLOCK CARD (First 6 JSON items) */}
          <FadeIn>
            <div className="bg-card rounded-2xl border border-border/50 p-5 sm:p-8 h-full shadow-2xs hover:border-primary/10 transition-colors">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {isHi ? "प्रातःकाल दिनचर्या" : "Morning"}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">
                    {isHi
                      ? "ब्रह्ममुहूर्त से दोपहर तक"
                      : "Brahma Muhurta to Noon"}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {morningActivities.map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-20 shrink-0 pt-0.5">
                      <span className="text-[11px] font-bold tracking-wide text-primary bg-primary/5 px-2.5 py-1 rounded-md border border-primary/10 block text-center">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 pb-4 border-b border-border/40 group-last:border-0 group-last:pb-0">
                      <h4 className="font-bold text-foreground text-sm sm:text-base tracking-tight group-hover:text-primary transition-colors">
                        {item.activity[langKey]}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1 text-pretty">
                        {item.description[langKey]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 🌙 AFTERNOON & EVENING BLOCK CARD (Remaining 6 JSON items) */}
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-2xl border border-border/50 p-5 sm:p-8 h-full shadow-2xs hover:border-accent/10 transition-colors">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0">
                  <Moon className="w-5 h-5 text-accent" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {isHi ? "सायं एवं रात्रि चर्या" : "Afternoon & Evening"}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">
                    {isHi
                      ? "मध्याह्न से पूर्ण विश्राम तक"
                      : "Post Lunch to Rest"}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {eveningActivities.map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-20 shrink-0 pt-0.5">
                      <span className="text-[11px] font-bold tracking-wide text-accent bg-accent/5 px-2.5 py-1 rounded-md border border-accent/10 block text-center">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 pb-4 border-b border-border/40 group-last:border-0 group-last:pb-0">
                      <h4 className="font-bold text-foreground text-sm sm:text-base tracking-tight group-hover:text-accent transition-colors">
                        {item.activity[langKey]}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-1 text-pretty">
                        {item.description[langKey]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Dynamic Summary Mottos Strip footer block */}
        <FadeIn delay={0.2}>
          <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10 text-center max-w-4xl mx-auto">
            <p className="text-muted-foreground italic text-xs sm:text-sm leading-relaxed text-pretty">
              {isHi
                ? '"गुरुकुल की यह दैनिक चर्या प्रकृति के नैसर्गिक नियमों के अनुरूप तैयार की गई है, जो विद्यार्थियों के शारीरिक स्वास्थ्य, मानसिक एकाग्रता और आध्यात्मिक चेतना को जाग्रत कर उनका सर्वांगीण विकास सुनिश्चित करती है।"'
                : '"The daily routine is designed to align with natural rhythms, promoting physical health, mental clarity, and spiritual growth. Each activity serves a purpose in the holistic development of our students."'}
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
