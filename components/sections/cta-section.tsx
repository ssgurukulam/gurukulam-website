'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 pattern-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Admissions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Begin Your Journey
              </h3>
              <p className="text-muted-foreground mb-6">
                Applications are now open for the upcoming academic year. Join us to experience 
                the transformative power of traditional Gurukul education.
              </p>
              <Link href="/admissions">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Donation CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Support Our Mission
              </h3>
              <p className="text-muted-foreground mb-6">
                Your generous contribution helps us provide scholarships, maintain our facilities, 
                and continue preserving ancient Indian wisdom for future generations.
              </p>
              <Link href="/donate">
                <Button variant="outline" className="w-full border-accent hover:bg-accent/10 text-accent gap-2">
                  Make a Donation
                  <Heart className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              &quot;तमसो मा ज्योतिर्गमय&quot;
              <br />
              <span className="text-sm not-italic">&quot;Lead me from darkness to light&quot; — Brihadaranyaka Upanishad</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
