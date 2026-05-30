import { Metadata } from "next";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { Target, Eye, Heart, BookOpen, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Discover the vision and mission of Shoonya Shikhar Gurukulam - nurturing individuals rooted in tradition and ready for the modern world.",
};

const values = [
  {
    icon: Heart,
    title: "Dharma",
    description:
      "Living in accordance with cosmic order and ethical principles that ensure harmony within and without.",
  },
  {
    icon: BookOpen,
    title: "Vidya",
    description:
      "Pursuit of both para vidya (spiritual knowledge) and apara vidya (worldly knowledge) for complete understanding.",
  },
  {
    icon: Users,
    title: "Seva",
    description:
      "Selfless service to Guru, community, and society as a path to spiritual growth and character building.",
  },
  {
    icon: Globe,
    title: "Vasudhaiva Kutumbakam",
    description:
      "The world is one family - fostering universal brotherhood and respect for all beings.",
  },
];

const goals = [
  "Preserve and propagate authentic Vedic knowledge and practices",
  "Develop individuals with strong moral character and ethical values",
  "Create leaders who can bridge traditional wisdom with modern challenges",
  "Foster physical health through Yoga and disciplined lifestyle",
  "Cultivate mental clarity through meditation and contemplative practices",
  "Build a community of scholars, practitioners, and teachers",
  "Provide education accessible to deserving students regardless of background",
  "Contribute to the revival of Sanskrit and classical Indian arts",
];

export default function VisionMissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                Our Purpose
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Vision & Mission
              </h1>
              <p className="text-lg text-muted-foreground">
                Guiding principles that shape every aspect of education and life
                at Shoonya Shikhar Gurukulam.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                To nurture individuals who embody the wisdom of ancient Indian
                traditions while being equipped to contribute meaningfully to
                the modern world.
              </p>
              <p className="text-muted-foreground">
                We envision a world where the timeless values of Indian
                culture—compassion, wisdom, discipline, and service—guide
                individuals in creating a harmonious society. Our graduates
                carry forward this vision as teachers, leaders, and
                practitioners who illuminate the path for others.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-9xl opacity-30">👁️</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-9xl opacity-30">🎯</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                To provide a holistic education that integrates spiritual
                growth, physical discipline, intellectual development, and moral
                values in a serene and nurturing environment.
              </p>
              <p className="text-muted-foreground">
                We accomplish this through the authentic Gurukul system where
                students live and learn with their teachers, following a
                structured daily routine that balances Yoga, meditation,
                academic studies, and practical skills. Every aspect of life at
                the Gurukulam is designed to support complete human development.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader
          badge="Foundation"
          title="Our Core Values"
          subtitle="The eternal principles that guide everything we do."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <div className="h-full p-8 bg-card rounded-2xl border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Goals */}
      <Section className="bg-card">
        <SectionHeader
          badge="Objectives"
          title="Our Goals"
          subtitle="Specific objectives we strive to achieve in our educational mission."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {goals.map((goal, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-foreground">{goal}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center p-12 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-relaxed">
              &quot;सा विद्या या विमुक्तये&quot;
            </p>
            <p className="text-lg text-muted-foreground italic mb-2">
              &quot;That is knowledge which liberates&quot;
            </p>
            <p className="text-sm text-primary">— Vishnu Purana</p>
          </div>
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
