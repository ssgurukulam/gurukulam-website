import { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { Section, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import teachers from "@/content/teachers.json";

export const metadata: Metadata = {
  title: "Our Teachers | Shoonya Shikhar Gurukulam",
  description:
    "Meet the distinguished Gurus and teachers of Shoonya Shikhar Gurukulam who guide students on their educational journey.",
};

export default async function TeachersPage() {
  const cookieStore = await cookies();
  const language = cookieStore.get("lang")?.value || "en";
  const langKey = (language === "hi" ? "hi" : "en") as "en" | "hi";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card border-b border-border/40">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                {langKey === "hi" ? "हमारे पूज्य गुरु" : "Our Revered Gurus"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight">
                {langKey === "hi"
                  ? "गुरुओं से सीखें"
                  : "Learn from the Masters"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our distinguished faculty brings decades of traditional wisdom,
                deep shastric expertise, and modern educational methodologies to
                direct your paths.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Teachers Row List Section */}
      <Section className="bg-background py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-24">
          {teachers.map((teacher, index) => {
            const localized = teacher[langKey];
            // Alternates direction layout per item index to build design visual interest
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={teacher.id} delay={0.05}>
                <div
                  className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-start pb-16 border-b border-border/50 last:border-0 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left Column: Image and Badges Block */}
                  <div className="w-full md:w-2/5 max-w-sm shrink-0 mx-auto md:mx-0 sticky top-24">
                    <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative shadow-md border border-border/40 group">
                      {teacher.image ? (
                        <Image
                          src={teacher.image}
                          alt={localized?.name || "Teacher Profile"}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <span className="text-7xl opacity-40">🙏</span>
                        </div>
                      )}
                    </div>

                    {/* Tiny stats stack below the image frame */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {localized?.specialty}
                      </span>
                      <span className="text-xs text-muted-foreground px-3 py-1 bg-muted rounded-full">
                        {localized?.experience}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Detailed Biography Context Text */}
                  <div className="w-full md:w-3/5 space-y-4 text-left">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                        {localized?.name}
                      </h2>
                      <p className="text-base text-primary font-medium mt-1">
                        {localized?.title}
                      </p>
                    </div>

                    {/* Rich HTML Content styling resets applied via Tailwind typography prose */}
                    <div
                      className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4 prose prose-neutral dark:prose-invert max-w-none
                        prose-p:mb-4 prose-p:leading-relaxed
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-ul:list-disc prose-ul:pl-5 prose-li:my-1"
                      dangerouslySetInnerHTML={{
                        __html: localized?.description || "",
                      }}
                    />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Philosophy Callout Break */}
      <Section className="bg-card border-t border-b border-border/40">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-12">
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-relaxed tracking-wide font-serif">
            &quot;गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः&quot;
          </p>
          <p className="text-lg text-muted-foreground italic mb-2">
            &quot;The Guru is Brahma, Vishnu, and Maheshwara (Shiva)&quot;
          </p>
          <p className="text-xs tracking-widest text-primary uppercase font-medium">
            — Guru Stotram
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
