"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";

export function IntroSection() {
  return (
    <Section className="bg-card">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <FadeIn className="order-2 lg:order-1">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">🕉️</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>
        </FadeIn>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
              Our Heritage
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              A Sacred Space for
              <br />
              <span className="text-primary">Holistic Learning</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                Founded in 1985 by Swami Vishwananda Ji, Shoonya Shikhar
                Gurukulam stands as a beacon of traditional Indian education in
                the modern world. Our 50-acre campus, nestled in the serene
                foothills of the Himalayas near Rishikesh, provides the perfect
                environment for spiritual growth and academic excellence.
              </p>
              <p className="text-pretty">
                We follow the ancient Gurukul tradition where students live and
                learn with their teachers, imbibing not just knowledge but
                values, discipline, and a deep connection with our cultural
                roots. Our curriculum uniquely blends Yoga, Meditation,
                Sanskrit, Martial Arts with modern subjects like Computer
                Science.
              </p>
              <p className="text-pretty">
                Every aspect of life at the Gurukulam is designed to nurture the
                body, mind, and spirit—creating individuals who are rooted in
                tradition yet ready to contribute meaningfully to the
                contemporary world.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "Residential", desc: "Traditional Gurukul living" },
                { title: "Holistic", desc: "Mind, body & spirit" },
                { title: "Authentic", desc: "Ancient teachings preserved" },
                { title: "Modern", desc: "Contemporary skills integrated" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
