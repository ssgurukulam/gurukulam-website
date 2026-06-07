"use client";

import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { Quote } from "lucide-react";
import testimonials from "@/content/testimonials.json";
import React, { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Testimonials / अनुभूतियाँ",
//   description:
//     "Read stories from our alumni about their transformative journey at Shoonya Shikhar Gurukulam.",
// };

export default function TestimonialsPage() {
  // 🚀 THE HYDRATION FIX: Shift dynamic cookie lookups to standard client-safe states
  // to completely isolate script injections from Next.js server render passes
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (typeof document !== "undefined") {
      const match = document.cookie.match(new RegExp("(^| )lang=([^;]+)"));
      if (match && match[2]) {
        setLanguage(match[2]);
      }
    }
  }, []);

  const isHi = language === "hi";
  const langKey = isHi ? "hi" : "en";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                {isHi ? "विद्यार्थी अनुभव / जीवन दर्शन" : "Student Voices"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                {isHi ? "परिवर्तित जीवन की अनुभूतियाँ" : "Transformed Lives"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {isHi
                  ? "जानिए हमारे पूर्व छात्रों से कि कैसे शून्या शिखर गुरुकुलम की जीवनशैली ने उनके जीवन को एक श्रेष्ठ दिशा प्रदान की।"
                  : "Hear from our alumni about their transformative journey at Shoonya Shikhar Gurukulam."}
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
              {isHi
                ? "“शून्या शिखर गुरुकुलम में मुझे जो शिक्षा मिली, वह केवल किताबी ज्ञान प्राप्त करने के बारे में नहीं थी—यह एक बेहतर मनुष्य बनने की साधना थी। यहाँ से प्राप्त संस्कार, अनुशासन और आध्यात्मिक नीव आज भी मेरे जीवन के हर क्षेत्र का मार्गदर्शन करती है।”"
                : "The education I received at Shoonya Shikhar Gurukulam was not just about acquiring knowledge—it was about becoming a better human being. The values, discipline, and spiritual foundation I gained here continue to guide every aspect of my life."}
            </p>
            <div>
              <p className="font-semibold text-foreground">
                {isHi ? "श्रीमती सुनीता बैंसला" : "Mrs Sunita Bainsla"}
              </p>
              <p className="text-sm text-muted-foreground">IRS</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials Grid */}
      <Section className="bg-card">
        <SectionHeader
          badge={isHi ? "प्रेरणादायी गाथाएँ" : "Stories"}
          title={isHi ? "हमारे पूर्व छात्रों के अनुभव" : "What Our Alumni Say"}
          subtitle={
            isHi
              ? "उन विद्यार्थियों के वास्तविक अनुभव जो आपसे पहले इस ज्ञान मार्ग पर चल चुके हैं।"
              : "Real experiences from students who walked this path before you."
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const displayTxt =
              typeof testimonial.text === "object"
                ? testimonial.text[langKey]
                : testimonial.text;
            const displayRole =
              typeof testimonial.role === "object"
                ? testimonial.role[langKey]
                : testimonial.role;

            return (
              <FadeIn key={testimonial.id} delay={index * 0.1}>
                <div className="h-full p-8 bg-background rounded-2xl border border-border relative">
                  <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    &quot;{displayTxt}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl">🙏</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {displayRole}
                      </p>
                      <p className="text-xs text-primary">
                        {isHi
                          ? `सत्र: ${testimonial.year}`
                          : `Batch: ${testimonial.year}`}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
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
              {isHi
                ? "हमारे पूर्व छात्रों के साक्षात् अनुभव देखें"
                : "Watch Our Alumni Stories"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isHi
                ? "हमारे स्नातकों से सीधे सुनें क्योंकि वे अपने अनुभव, चुनौतियाँ, व्यक्तिगत विकास और यह साझा करते हैं कि कैसे गुरुकुल शिक्षा ने उनके जीवन और करियर को आकार दिया।"
                : "Hear directly from our graduates as they share their experiences, challenges, growth, and how the Gurukulam education shaped their lives and careers."}
            </p>
            <div className="space-y-4">
              {(isHi
                ? [
                    "एक संस्कृत विद्वान की यात्रा",
                    "विद्यार्थी से योग शिक्षक बनने का सफर",
                    "ध्यान के माध्यम से उद्देश्य की खोज",
                    "तकनीक के साथ परंपरा का अनूठा मेल",
                  ]
                : [
                    "Journey of a Sanskrit Scholar",
                    "From Student to Yoga Teacher",
                    "Finding Purpose Through Meditation",
                    "Blending Tradition with Technology",
                  ]
              ).map((title) => (
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

      {/* Share Story CTA */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              {isHi ? "अपना अनुभव साझा करें" : "Share Your Story"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isHi
                ? "क्या आप शून्या शिखर गुरुकुलम के पूर्व छात्र हैं? हम आपकी यात्रा के बारे में जानने और गुरुकुल शिक्षा ने आपके जीवन को कैसे प्रभावित किया, यह सुनने के लिए उत्सुक हैं।"
                : "Are you an alumnus of Shoonya Shikhar Gurukulam? We'd love to hear about your journey and how the Gurukulam education has impacted your life."}
            </p>
            <a
              href="mailto:shoonyashikhargurukulam@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {isHi ? "अपनी अनुभूति सबमिट करें" : "Submit Your Testimonial"}
            </a>
          </div>
        </FadeIn>
      </Section>

      <CTASection language={langKey} />
    </>
  );
}
