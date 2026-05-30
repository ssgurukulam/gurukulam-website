"use client";

import { useState } from "react";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Shoonya Shikhar Gurukulam",
      "Himalayan Foothills, Near Lakshman Jhula",
      "Rishikesh, Uttarakhand 249201",
      "India",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9876 543 210", "+91 1234 567 890"],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@srividyagurukulam.edu.in",
      "admissions@srividyagurukulam.edu.in",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Saturday",
      "9:00 AM - 5:00 PM IST",
      "Sunday: Closed (except festivals)",
    ],
  },
];

const departments = [
  { name: "General Inquiries", email: "info@srividyagurukulam.edu.in" },
  { name: "Admissions", email: "admissions@srividyagurukulam.edu.in" },
  { name: "Alumni Relations", email: "alumni@srividyagurukulam.edu.in" },
  { name: "Donations & Support", email: "donate@srividyagurukulam.edu.in" },
  { name: "Media & Press", email: "media@srividyagurukulam.edu.in" },
  { name: "Careers", email: "careers@srividyagurukulam.edu.in" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                Reach Out
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                We&apos;d love to hear from you. Reach out with questions, visit
                inquiries, or just to connect.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <FadeIn key={info.title} delay={index * 0.1}>
              <div className="h-full p-6 bg-card rounded-2xl border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Form and Map */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn>
            <div className="bg-background rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We will respond within 24-48
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your name"
                      />
                    </div>
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your message here..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      Rishikesh, Uttarakhand
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  How to Reach Us
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">By Air:</span>{" "}
                    Nearest airport is Jolly Grant Airport, Dehradun (35 km)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      By Train:
                    </span>{" "}
                    Nearest railway station is Haridwar (25 km)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      By Road:
                    </span>{" "}
                    Well connected by NH-58 from Delhi (240 km)
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Departments */}
      <Section>
        <SectionHeader
          badge="Departments"
          title="Direct Contact"
          subtitle="Reach the right department directly for faster response."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {departments.map((dept, index) => (
            <FadeIn key={dept.name} delay={index * 0.05}>
              <a
                href={`mailto:${dept.email}`}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{dept.name}</div>
                  <div className="text-sm text-primary">{dept.email}</div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WhatsApp */}
      <Section className="bg-card">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Quick Connect via WhatsApp
            </h2>
            <p className="text-muted-foreground mb-8">
              For quick queries, you can reach us on WhatsApp during office
              hours.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
