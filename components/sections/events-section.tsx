'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Section, SectionHeader, StaggerContainer, staggerItem } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import events from '@/content/events.json'

const typeColors: Record<string, string> = {
  Festival: 'bg-primary/10 text-primary',
  Retreat: 'bg-accent/10 text-accent',
  Ceremony: 'bg-chart-3/20 text-chart-4',
  Course: 'bg-chart-2/10 text-chart-2',
  Camp: 'bg-chart-5/10 text-chart-5',
}

export function EventsSection() {
  return (
    <Section>
      <SectionHeader
        badge="Upcoming"
        title="Events & Programs"
        subtitle="Join us for festivals, retreats, workshops, and special programs throughout the year."
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 6).map((event) => (
          <motion.div
            key={event.id}
            variants={staggerItem}
            className="group"
          >
            <div className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-primary/50" />
                </div>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${typeColors[event.type] || 'bg-muted text-foreground'}`}>
                  {event.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>

      <div className="mt-12 text-center">
        <Link href="/events">
          <Button variant="outline" size="lg" className="gap-2 border-primary/30 hover:bg-primary/5">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  )
}
