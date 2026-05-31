import { Metadata } from "next";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { Languages, Quote } from "lucide-react";
import testimonials from "@/content/testimonials.json";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read stories from our alumni about their transformative journey at Shoonya Shikhar Gurukulam.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                Student Voices
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Transformed Lives
              </h1>
              <p className="text-lg text-muted-foreground">
                Hear from our alumni about their transformative journey at
                Shoonya Shikhar Gurukulam.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Quote */}
      <Section>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center p-12 bg-primary/5 rounded-2xl border border-primary/10 relative">
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed mb-6 italic">
              &quot;The education I received at Shoonya Shikhar Gurukulam was
              not just about acquiring knowledge—it was about becoming a better
              human being. The values, discipline, and spiritual foundation I
              gained here continue to guide every aspect of my life.&quot;
            </p>
            <div>
              <p className="font-semibold text-foreground">Dr. Venkatesh Rao</p>
              <p className="text-sm text-muted-foreground">
                Batch of 1995 | Now Professor of Philosophy, BHU
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials Grid */}
      <Section className="bg-card">
        <SectionHeader
          badge="Stories"
          title="What Our Alumni Say"
          subtitle="Real experiences from students who walked this path before you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <div className="h-full p-8 bg-background rounded-2xl border border-border relative">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">🙏</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary">{testimonial.year}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Video Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="aspect-video rounded-2xl bg-muted overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                  <span className="text-primary-foreground text-3xl ml-1">
                    ▶
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Watch Our Alumni Stories
            </h2>
            <p className="text-muted-foreground mb-6">
              Hear directly from our graduates as they share their experiences,
              challenges, growth, and how the Gurukulam education shaped their
              lives and careers.
            </p>
            <div className="space-y-4">
              {[
                "Journey of a Sanskrit Scholar",
                "From Student to Yoga Teacher",
                "Finding Purpose Through Meditation",
                "Blending Tradition with Technology",
              ].map((title) => (
                <div
                  key={title}
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">▶</span>
                  </div>
                  <span className="text-foreground">{title}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Stats */}
      {/* <Section className="bg-card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5000+", label: "Alumni Worldwide" },
            { value: "40+", label: "Years of Excellence" },
            { value: "15+", label: "Countries" },
            { value: "95%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section> */}

      {/* Share Story CTA */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Share Your Story
            </h2>
            <p className="text-muted-foreground mb-8">
              Are you an alumnus of Shoonya Shikhar Gurukulam? We&apos;d love to
              hear about your journey and how the Gurukulam education has
              impacted your life.
            </p>
            <a
              href="mailto:shoonyashikhargurukulam@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Submit Your Testimonial
            </a>
          </div>
        </FadeIn>
      </Section>

      <CTASection language="en" />
    </>
  );
}
