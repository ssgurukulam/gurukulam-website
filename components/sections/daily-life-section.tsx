'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { Section, SectionHeader, FadeIn } from '@/components/ui/section'
import dailyRoutine from '@/content/daily-routine.json'

export function DailyLifeSection() {
  const morningActivities = dailyRoutine.slice(0, 6)
  const eveningActivities = dailyRoutine.slice(6)

  return (
    <Section>
      <SectionHeader
        badge="Daily Life"
        title="A Day at the Gurukulam"
        subtitle="Our structured daily routine balances spiritual practices, academic learning, and physical activities for complete development."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Morning */}
        <FadeIn>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Morning</h3>
                <p className="text-sm text-muted-foreground">Brahma Muhurta to Noon</p>
              </div>
            </div>
            <div className="space-y-4">
              {morningActivities.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-16 shrink-0">
                    <span className="text-sm font-medium text-primary">{item.time}</span>
                  </div>
                  <div className="flex-1 pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-medium text-foreground">{item.activity}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Evening */}
        <FadeIn delay={0.2}>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Moon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Afternoon & Evening</h3>
                <p className="text-sm text-muted-foreground">Post Lunch to Rest</p>
              </div>
            </div>
            <div className="space-y-4">
              {eveningActivities.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-16 shrink-0">
                    <span className="text-sm font-medium text-accent">{item.time}</span>
                  </div>
                  <div className="flex-1 pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-medium text-foreground">{item.activity}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Note */}
      <FadeIn delay={0.3}>
        <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10 text-center">
          <p className="text-muted-foreground italic">
            &quot;The daily routine is designed to align with natural rhythms, promoting physical health, 
            mental clarity, and spiritual growth. Each activity serves a purpose in the holistic 
            development of our students.&quot;
          </p>
        </div>
      </FadeIn>
    </Section>
  )
}
