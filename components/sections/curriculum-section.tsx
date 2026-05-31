'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Flower2, Brain, Sword, BookOpen, Monitor, Heart, Star, Flame } from 'lucide-react'
import { Section, SectionHeader, StaggerContainer, staggerItem } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import curriculum from '@/content/curriculum.json'

const iconMap: Record<string, React.ElementType> = {
  lotus: Flower2,
  meditation: Brain,
  sword: Sword,
  book: BookOpen,
  computer: Monitor,
  heart: Heart,
  star: Star,
  flame: Flame,
}

export function CurriculumSection() {
  return (
    <Section id="curriculum">
      <SectionHeader
        badge="Our Curriculum"
        title="Paths of Learning"
        subtitle="Discover our comprehensive programs that blend ancient wisdom with modern education, nurturing complete human development."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {curriculum.slice(0, 8).map((course) => {
          const Icon = iconMap[course.icon] || Flower2
          return (
            <motion.div
              key={course.id}
              variants={staggerItem}
              className="group"
            >
              <Link href={`/curriculum#${course.id}`}>
                <div className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {course.shortDescription}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </StaggerContainer>

      <div className="mt-12 text-center">
        <Link href="/curriculum">
          <Button variant="outline" size="lg" className="gap-2 border-primary/30 hover:bg-primary/5">
            View Curriculum Details
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  )
}
