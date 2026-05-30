import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import events from "@/content/events.json";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming events, festivals, retreats, and programs at Shoonya Shikhar Gurukulam.",
};

const typeColors: Record<string, string> = {
  Festival: "bg-primary/10 text-primary border-primary/20",
  Retreat: "bg-accent/10 text-accent border-accent/20",
  Ceremony: "bg-chart-3/20 text-chart-4 border-chart-3/30",
  Course: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Camp: "bg-chart-5/10 text-chart-5 border-chart-5/20",
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => new Date(e.date) >= new Date());
  const pastEvents = events.filter((e) => new Date(e.date) < new Date());

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                Calendar
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Events & Programs
              </h1>
              <p className="text-lg text-muted-foreground">
                Join us for festivals, retreats, workshops, and special programs
                throughout the year.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Events */}
      <Section>
        <SectionHeader
          badge="Upcoming"
          title="Upcoming Events"
          subtitle="Mark your calendar for these transformative experiences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <FadeIn key={event.id} delay={index * 0.1}>
              <div className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-primary/30" />
                  </div>
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${typeColors[event.type] || "bg-muted text-foreground"}`}
                  >
                    {event.type}
                  </div>
                  {/* Date Badge */}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">
                      {new Date(event.date).toLocaleDateString("en-IN", {
                        month: "short",
                      })}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-IN", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Shoonya Shikhar Gurukulam Campus</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {event.description}
                  </p>

                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/5"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Annual Calendar */}
      <Section className="bg-card">
        <SectionHeader
          badge="Annual"
          title="Festival Calendar"
          subtitle="Major celebrations and observances at the Gurukulam."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { month: "January", event: "Makar Sankranti & Pongal" },
              { month: "February", event: "Maha Shivaratri" },
              { month: "March", event: "Holi & Ugadi" },
              { month: "April", event: "Ram Navami" },
              { month: "May", event: "Buddha Purnima" },
              { month: "June", event: "Yoga Day Celebration" },
              { month: "July", event: "Guru Purnima" },
              { month: "August", event: "Krishna Janmashtami" },
              { month: "September", event: "Ganesh Chaturthi" },
              { month: "October", event: "Navaratri & Dussehra" },
              { month: "November", event: "Diwali & Annakut" },
              { month: "December", event: "Gita Jayanti" },
            ].map((item, index) => (
              <FadeIn key={item.month} delay={index * 0.05}>
                <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {item.month.slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {item.event}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.month}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Host Event */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center p-12 bg-primary/5 rounded-2xl border border-primary/10">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Host Your Event With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Our serene campus is available for spiritual retreats, workshops,
              and traditional ceremonies. Contact us to discuss how we can host
              your event.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
