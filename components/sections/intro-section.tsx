"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/ui/section";
import introData from "@/content/introSection.json";

interface IntroSectionProps {
  language: string;
}

export function IntroSection({ language }: IntroSectionProps) {
  const isHi = language === "hi";
  const langKey = isHi ? "hi" : "en";

  return (
    <Section className="bg-card py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT PANEL: Grand Media Frame (Image First on Desktop) */}
          <FadeIn className="order-1 lg:order-1 w-full flex items-center justify-center lg:justify-start">
            {/* 
               Increased max-width to 540px and height to 460px for a "Bigger" focus.
               The 'group' class allows us to animate the border on hover.
            */}
            <div className="relative w-full max-w-[540px] h-[360px] sm:h-[420px] md:h-[460px] group">
              {/* 
                 OFFSET BORDER: This stays strictly behind the image.
                 It expands and shifts on hover for a premium "depth" effect.
              */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[2.5rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />

              {/* 
                 MAIN IMAGE CARD: Z-10 ensures it sits on top of the offset border.
              */}
              <div className="relative z-10 w-full h-full rounded-[2.5rem] bg-muted overflow-hidden shadow-2xl border border-border/40">
                <Image
                  src={introData.image} // 👈 Pulls directly from the image key in introSection.json
                  alt={introData.headingAccent[langKey] || "Gurukulam Campus"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-fit transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg border border-primary/10 text-2xl select-none">
                  🕉️
                </div>
              </div>

              {/* 
                 DECORATIVE ACCENT: A small floating shape tucked in the corner.
                 This is positioned so it doesn't overlap the main image content.
              */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10" />
            </div>
          </FadeIn>

          {/* RIGHT PANEL: Content Container */}
          <div className="order-2 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div>
                <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                  {introData.tagline[langKey]}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight">
                {introData.headingStart[langKey]}
                <br />
                <span className="text-primary">
                  {introData.headingAccent[langKey]}
                </span>
              </h2>
            </motion.div>

            {/* Paragraphs from JSON */}
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {introData.paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {para[langKey]}
                </motion.p>
              ))}
            </div>

            {/* Feature Grid: Clean & Spaced */}
            <div className="mt-10 pt-8 border-t border-border/40 grid grid-cols-2 gap-x-8 gap-y-6">
              {introData.features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Modern Bullet Design */}
                  <div className="w-1.5 h-6 bg-primary/30 rounded-full group-hover:bg-primary transition-colors duration-300" />
                  <div className="space-y-1">
                    <div className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                      {item.title[langKey]}
                    </div>
                    <div className="text-sm text-muted-foreground leading-snug">
                      {item.desc[langKey]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
