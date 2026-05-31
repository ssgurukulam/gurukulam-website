"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import siteData from "@/content/site.json";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      href: siteData.location.mapsLink,
      target: "_blank",
      details: [
        siteData.name.en,
        siteData.location.address.en,
        `${siteData.location.city.en}, ${siteData.location.state.en} ${siteData.location.pincode}`,
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      href: `tel:${siteData.contact.phone.replace(/\s+/g, "")}`,
      target: "_self",
      details: [siteData.contact.phone, "Tap to dial admin desk"],
    },
    {
      icon: Mail,
      title: "Email",
      href: `mailto:${siteData.contact.email}`,
      target: "_self",
      details: [siteData.contact.email, "Click to send direct mail"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      href: "#",
      target: "_self",
      details: [
        "Mon - Sat: 9:00 AM - 5:00 PM",
        "Sunday: Closed (except festivals)",
      ],
    },
  ];

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (formData.phone) {
      const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
      if (!indianPhoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
        tempErrors.phone = "Please enter a valid 10-digit Indian phone number.";
      }
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 👈 Strictly halts browser routing cycles
    if (!validateForm()) return;

    const emailTo = siteData.contact.email; // sushiljangid69@gmail.com
    const subjectLine = encodeURIComponent(
      formData.subject || "General Inquiry",
    );

    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n\n` +
        `Message:\n${formData.message}`,
    );

    // 🚀 EXPLICIT BROWSER TRIGGER: This forces the operating system to launch the default email client instantly
    window.location.assign(
      `mailto:${emailTo}?subject=${subjectLine}&body=${bodyContent}`,
    );

    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                Reach Out
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight">
                Contact Us
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We'd love to hear from you. Click any card below to launch
                directions, dial directly, or mail our administrative team.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Action Cards Grid */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
          {contactInfo.map((info, index) => (
            <a
              href={info.href}
              target={info.target}
              rel="noopener noreferrer"
              key={info.title}
              className="group block h-full p-6 bg-card rounded-2xl border border-border/60 text-center hover:border-primary/40 hover:bg-primary/5 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/5 group-hover:scale-105 transition-transform">
                <span className="text-primary transition-colors duration-300">
                  <info.icon className="w-6 h-6" />
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-xs md:text-sm text-muted-foreground leading-relaxed break-words"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Form and Map Frame */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-start">
          {/* Message Form Card */}
          <FadeIn>
            <div className="bg-background rounded-3xl border border-border/60 p-8 shadow-xs">
              <h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">
                Send a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Opening Mail Client...
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-4">
                    Your local email client is launching to send the message. If
                    it didn't open automatically, you can click below to try
                    again or edit your text.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="cursor-pointer text-xs"
                  >
                    Edit Message / Send Again
                  </Button>
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
                        placeholder="Enter full name"
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
                        placeholder="name@domain.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="10 digit contact entry"
                        className={
                          errors.phone
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 font-medium mt-1">
                          {errors.phone}
                        </p>
                      )}
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
                      placeholder="Write your message details here..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 cursor-pointer transition-all"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Location Map Thumbnail Interface */}
          <FadeIn delay={0.1}>
            <div className="space-y-6 w-full">
              <a
                href={siteData.location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] rounded-3xl overflow-hidden border border-border/60 shadow-md group bg-muted cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Hindaun City Regional Grid Map Landscape Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-103 opacity-80"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center p-6" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white space-y-3 z-10">
                  <div className="w-14 h-14 bg-background/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 border border-white/20">
                    <MapPin className="w-6 h-6 text-primary animate-bounce" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-base tracking-tight">
                      Interactive Location Map
                    </h4>
                    <p className="text-xs text-white/85 max-w-xs mx-auto line-clamp-2 leading-relaxed">
                      {siteData.location.address.en}, Hindaun, Rajasthan
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-xl shadow-md group-hover:bg-primary/90 transition-colors">
                      Get Directions on Map
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Transit Text Data Info Box */}
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 shadow-xs">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 border-b border-primary/10 pb-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  How to Reach Us
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="font-bold text-foreground block md:inline-block md:w-24">
                      By Train:
                    </span>{" "}
                    Hindaun City Railway Station (HAN) is connected on the major
                    Delhi-Mumbai line segment.
                  </p>
                  <p>
                    <span className="font-bold text-foreground block md:inline-block md:w-24">
                      By Air:
                    </span>{" "}
                    Nearest connection is Jaipur International Airport (JAI),
                    approx 140 km from campus.
                  </p>
                  <p>
                    <span className="font-bold text-foreground block md:inline-block md:w-24">
                      By Road:
                    </span>{" "}
                    Opposite Oxford School, near Agrasen College, Vajna Kalan
                    inside the core Hindaun local bypass loop lines.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* WhatsApp Link Banner */}
      <Section className="bg-card">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-semibold text-foreground tracking-tight">
              Quick Connect via WhatsApp
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Have a rapid query regarding admissions or operational parameters?
              Ping our chat desk directly during business hours.
            </p>
            <div className="pt-2">
              <a
                href={siteData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:opacity-90 transition-opacity font-semibold shadow-md cursor-pointer text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
