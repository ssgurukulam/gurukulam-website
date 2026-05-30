import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { CoursesSection } from "@/components/sections/courses-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { DailyLifeSection } from "@/components/sections/daily-life-section";
import { TeachersSection } from "@/components/sections/teachers-section";
import { EventsSection } from "@/components/sections/events-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CTASection } from "@/components/sections/cta-section";
import { cookies } from "next/headers";

export default async function HomePage() {
  const cookieStore = await cookies();
  // get the language preference
  const language = cookieStore.get("lang")?.value || "en";

  return (
    <>
      <HeroSection />
      <IntroSection />
      <CoursesSection />
      <WhyChooseSection />
      <DailyLifeSection />
      <TeachersSection language={language} />
      <EventsSection />
      <TestimonialsSection />
      <GallerySection language={language} />
      <CTASection />
    </>
  );
}
