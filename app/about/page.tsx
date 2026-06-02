import { Metadata } from "next";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shoonya Shikhar Gurukulam - a traditional Indian Gurukulam dedicated to holistic education through ancient wisdom and modern learning.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Our Story & Heritage
              </h1>
              <p className="text-lg text-muted-foreground">
                A journey of four decades preserving and propagating the
                timeless wisdom of Indian tradition.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* History */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-8xl opacity-50">🕉️</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Founded on Sacred Principles
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Established in 2025, Shunya Shikhar Gurukulam balances timeless
                Vedic wisdom with cutting-edge modern technology. Located in the
                peaceful foothills of Pachna Dam, Karauli, our campus shapes
                characters through disciplined living, meditation, coding, and
                physical combat mastery.
              </p>
              <p>
                The Gurukulam began with just 12 students and 3 teachers in a
                modest ashram. Today, we have grown to accommodate over 170+
                residential students, guided by 13+ expert Gurus, on a sprawling
                3 floored campus that includes temples, meditation halls,
                meditation room, library, and modern educational facilities.
              </p>
              <p>
                Our growth has never compromised our core values. We continue to
                follow the time-tested traditions of Guru-Shishya parampara,
                where education is not merely transfer of information but a
                complete transformation of being.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-card">
        <SectionHeader
          badge="Our Philosophy"
          title="The Gurukul Way"
          subtitle="Understanding the ancient system that guides our approach to education."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Guru-Shishya Parampara",
              description:
                "The sacred teacher-student tradition where knowledge is transmitted not just through words but through living example. Students live with their Guru, absorbing wisdom through daily interaction.",
              icon: "🙏",
            },
            {
              title: "Holistic Development",
              description:
                "Education that addresses all dimensions of human existence—physical through Yoga, mental through studies, emotional through values, and spiritual through meditation and contemplation.",
              icon: "☯️",
            },
            {
              title: "Seva & Discipline",
              description:
                "Students learn humility through service and build character through disciplined daily routines. These practices create strong, ethical individuals ready to serve society.",
              icon: "🙌",
            },
          ].map((item) => (
            <FadeIn key={item.title}>
              <div className="text-center p-8 bg-background rounded-2xl border border-border">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      {/* <Section>
        <SectionHeader
          badge="Our Journey"
          title="Milestones"
          subtitle="Key moments in the history of Shoonya Shikhar Gurukulam."
        />
        <div className="max-w-3xl mx-auto">
          {[
            {
              year: "1985",
              title: "Foundation",
              description:
                "Swami Vishwananda Ji establishes Shoonya Shikhar Gurukulam with 12 students.",
            },
            {
              year: "1990",
              title: "First Convocation",
              description:
                "Our first batch of students graduates, marking a new beginning.",
            },
            {
              year: "1998",
              title: "Campus Expansion",
              description:
                "New meditation halls, library, and residential quarters added.",
            },
            {
              year: "2005",
              title: "Computer Wing",
              description:
                "Modern computer education integrated while preserving traditional values.",
            },
            {
              year: "2010",
              title: "International Recognition",
              description: "Students from 15 countries join our programs.",
            },
            {
              year: "2020",
              title: "5000 Alumni",
              description: "Celebrating the graduation of our 5000th student.",
            },
            {
              year: "2025",
              title: "40 Years",
              description:
                "Four decades of preserving and propagating ancient wisdom.",
            },
          ].map((item, index) => (
            <FadeIn key={item.year} delay={index * 0.1}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="relative pb-8 border-l-2 border-primary/20 pl-6 last:pb-0">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section> */}

      {/* Campus */}
      <Section className="bg-card">
        <SectionHeader
          badge="Our Campus"
          title="A Sacred Learning Space"
          subtitle="3 storied campus building"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Main Temple", desc: "Heart of spiritual activities" },
            { name: "Meditation Halls", desc: "Hall for silent practice" },
            { name: "Computer Lab", desc: "Modern tech facilities" },
            { name: "Dining Hall", desc: "Sattvic vegetarian meals" },
            { name: "Guest House", desc: "For visiting scholars or parents" },
            { name: "Garden", desc: "Playground and rest time place" },
          ].map((facility) => (
            <FadeIn key={facility.name}>
              <div className="p-6 bg-background rounded-xl border border-border text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  {facility.name}
                </h3>
                <p className="text-sm text-muted-foreground">{facility.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection language="en" />
    </>
  );
}
