'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, TreePine, Heart, BookOpen, Shield } from 'lucide-react'
import { Section, SectionHeader, StaggerContainer, staggerItem } from '@/components/ui/section'

const features = [
  {
    icon: GraduationCap,
    title: 'Authentic Gurukul System',
    description: 'Experience traditional residential learning where students live with teachers, fostering deep bonds and true character development.',
  },
  {
    icon: Users,
    title: 'Expert Gurus & Masters',
    description: 'Learn from highly qualified teachers who have dedicated their lives to mastering and preserving ancient Indian knowledge systems.',
  },
  {
    icon: TreePine,
    title: 'Serene Natural Setting',
    description: 'Inspired by the ancient Gurukulam tradition, we are continuously working to provide a natural and value-based learning environment for our students. Our vision is to establish a 9,075 sq. yard Gurukulam campus in the lap of nature at Karauli, where education, संस्कार, discipline, meditation, and holistic development come together to shape future leaders.',
  },
  {
    icon: Heart,
    title: 'Holistic Development',
    description: 'We nurture the body, mind, and spirit through yoga, meditation, academics, and character-building activities.',
  },
  {
    icon: BookOpen,
    title: 'Balanced Curriculum',
    description: 'Unique integration of ancient wisdom—Sanskrit, Vedas, Yoga—with modern subjects like computer science and English.',
  },
  {
    icon: Shield,
    title: 'Values-Based Education',
    description: 'Strong emphasis on discipline, ethics, respect for elders, service to society, and the timeless values of Indian culture.',
  },
]

export function WhyChooseSection() {
  return (
    <Section className="bg-card">
      <SectionHeader
        badge="Why Choose Us"
        title="The Gurukulam Difference"
        subtitle="Discover what makes our traditional approach to education unique and transformative in the modern world."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={staggerItem}
            className="relative p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/10 rounded-tr-2xl" />
          </motion.div>
        ))}
      </StaggerContainer>
    </Section>
  )
}
