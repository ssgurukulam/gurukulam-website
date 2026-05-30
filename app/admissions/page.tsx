"use client";

import { useState } from "react";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  FileText,
  Calendar,
  Users,
  GraduationCap,
  Clock,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    name: "Gurukul Vidyarthi (Full-Time Residential)",
    age: "8-18 years",
    duration: "10 years",
    description:
      "Complete traditional Gurukul education from primary to senior secondary level.",
  },
  {
    name: "Yoga Teacher Training",
    age: "18+ years",
    duration: "1-2 years",
    description:
      "Professional certification program for aspiring yoga teachers.",
  },
  {
    name: "Sanskrit Intensive",
    age: "15+ years",
    duration: "6 months - 2 years",
    description: "Focused Sanskrit language and Vedic literature study.",
  },
  {
    name: "Short-Term Retreats",
    age: "All ages",
    duration: "1-4 weeks",
    description: "Meditation retreats, yoga camps, and spiritual workshops.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out the inquiry form with required details",
  },
  {
    icon: Calendar,
    title: "Interview",
    description: "Personal interview with student and parents",
  },
  {
    icon: Users,
    title: "Campus Visit",
    description: "Visit our campus and meet the faculty",
  },
  {
    icon: GraduationCap,
    title: "Enrollment",
    description: "Complete formalities and join the Gurukulam",
  },
];

const requirements = [
  "Birth certificate or age proof",
  "Academic records from previous institution",
  "Medical fitness certificate",
  "Character certificate (for transfer students)",
  "Passport-size photographs (4 copies)",
  "Aadhaar card or identity proof",
  "Parent/Guardian identity and address proof",
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                Join Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Admissions
              </h1>
              <p className="text-lg text-muted-foreground">
                Begin your transformative journey at Shoonya Shikhar Gurukulam.
                Applications are now open for the upcoming academic year.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs */}
      <Section>
        <SectionHeader
          badge="Programs"
          title="Choose Your Path"
          subtitle="We offer various programs suited to different ages and aspirations."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <FadeIn key={program.name} delay={index * 0.1}>
              <div className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {program.name}
                </h3>
                <div className="flex gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    {program.age}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    {program.duration}
                  </span>
                </div>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-card">
        <SectionHeader
          badge="Process"
          title="Admission Steps"
          subtitle="A simple four-step process to join our Gurukulam."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div
                    className="absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10 hidden md:block last:hidden"
                    style={{
                      display: index === steps.length - 1 ? "none" : undefined,
                    }}
                  />
                  <div className="text-sm text-primary font-medium mb-1">
                    Step {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Required Documents
            </h2>
            <div className="space-y-3">
              {requirements.map((req) => (
                <div key={req} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="font-semibold text-foreground mb-2">
                Important Dates
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-primary font-medium">
                    Application Deadline:
                  </span>{" "}
                  May 31, 2026
                </p>
                <p>
                  <span className="text-primary font-medium">Interviews:</span>{" "}
                  June 1-15, 2026
                </p>
                <p>
                  <span className="text-primary font-medium">Results:</span>{" "}
                  June 30, 2026
                </p>
                <p>
                  <span className="text-primary font-medium">
                    Session Begins:
                  </span>{" "}
                  July 15, 2026
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Inquiry Form */}
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Admission Inquiry
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We have received your inquiry. Our admissions team will
                    contact you within 3-5 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input
                        id="studentName"
                        required
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            studentName: e.target.value,
                          })
                        }
                        placeholder="Enter student name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        required
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            parentName: e.target.value,
                          })
                        }
                        placeholder="Enter parent name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Student Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        required
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        placeholder="Enter age"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Program Interest *</Label>
                      <select
                        id="program"
                        required
                        value={formData.program}
                        onChange={(e) =>
                          setFormData({ ...formData, program: e.target.value })
                        }
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                      >
                        <option value="">Select a program</option>
                        {programs.map((p) => (
                          <option key={p.name} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about the student's interests, previous education, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Scholarships */}
      <Section className="bg-card">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Scholarships Available
            </h2>
            <p className="text-muted-foreground mb-8">
              We believe financial constraints should not prevent deserving
              students from accessing quality traditional education. Shoonya
              Shikhar Gurukulam offers merit-based and need-based scholarships
              covering partial to full tuition and boarding fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:scholarships@srividyagurukulam.edu.in"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Inquire About Scholarships
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
