"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Heart,
  GraduationCap,
  BookOpen,
  Home,
  Utensils,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";

const donationPurposes = [
  {
    icon: GraduationCap,
    title: "Student Scholarships",
    description:
      "Help deserving students access traditional education regardless of financial background.",
    amount: "₹50,000/year supports one student",
  },
  {
    icon: BookOpen,
    title: "Library & Resources",
    description:
      "Fund rare manuscripts, books, and learning materials for our Sanskrit library.",
    amount: "₹10,000 adds 50+ books",
  },
  {
    icon: Home,
    title: "Infrastructure",
    description:
      "Support construction and maintenance of classrooms, meditation halls, and dormitories.",
    amount: "Any amount helps",
  },
  {
    icon: Utensils,
    title: "Anna Danam (Food)",
    description:
      "Provide sattvic meals to students and visiting scholars throughout the year.",
    amount: "₹1,000 feeds 20 people",
  },
];

// const impactStats = [
//   { value: "500+", label: "Students on Scholarship" },
//   { value: "₹2Cr+", label: "Donated Last Year" },
//   { value: "100%", label: "Goes to Programs" },
//   { value: "5000+", label: "Lives Transformed" },
// ];

const donationAmounts = [1000, 5000, 10000, 25000, 50000];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time",
  );
  const [purpose, setPurpose] = useState("");

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount > 0) {
      // Handle donation processing
      alert(`Thank you for your generous donation of ₹${amount}!`);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                Support Our Mission
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Make a Donation
              </h1>
              <p className="text-lg text-muted-foreground">
                Your generosity helps preserve ancient wisdom and provide
                transformative education to future generations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quote */}
      <Section>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center p-12 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-relaxed">
              &quot;दातव्यमिति यद्दानं दीयतेऽनुपकारिणे&quot;
            </p>
            <p className="text-lg text-muted-foreground italic mb-2">
              &quot;That gift which is given with the thought &apos;it is to be
              given&apos; to one who does no service in return...&quot;
            </p>
            <p className="text-sm text-primary">— Bhagavad Gita 17.20</p>
          </div>
        </FadeIn>
      </Section>

      {/* Donation Form */}
      <Section className="bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="bg-background rounded-2xl border border-border p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Choose Your Contribution
                  </h2>

                  {/* Donation Type */}
                  <div className="mb-6">
                    <Label className="mb-3 block">Donation Type</Label>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setDonationType("one-time")}
                        className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                          donationType === "one-time"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-muted-foreground border-border hover:border-primary/30"
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        onClick={() => setDonationType("monthly")}
                        className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                          donationType === "monthly"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-muted-foreground border-border hover:border-primary/30"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <Label className="mb-3 block">Select Amount (₹)</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`py-3 px-2 rounded-lg border text-sm font-medium transition-colors ${
                            selectedAmount === amount
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted text-muted-foreground border-border hover:border-primary/30"
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">or</span>
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="mb-6">
                    <Label htmlFor="purpose" className="mb-3 block">
                      Donation Purpose (Optional)
                    </Label>
                    <select
                      id="purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    >
                      <option value="">Where needed most</option>
                      <option value="scholarships">Student Scholarships</option>
                      <option value="library">Library & Resources</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="food">Anna Danam (Food)</option>
                    </select>
                  </div>

                  {/* Donate Button */}
                  <Button
                    onClick={handleDonate}
                    disabled={!selectedAmount && !customAmount}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 text-lg"
                  >
                    <Heart className="w-5 h-5" />
                    Donate{" "}
                    {selectedAmount
                      ? `₹${selectedAmount.toLocaleString()}`
                      : customAmount
                        ? `₹${parseInt(customAmount).toLocaleString()}`
                        : ""}
                    {donationType === "monthly" && "/month"}
                  </Button>

                  {/* Security Note */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Secure payment. Tax-deductible under 80G.</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Impact */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="bg-background rounded-2xl border border-border p-8 h-full">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Your Impact
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        amount: "₹1,000",
                        impact: "Provides textbooks for 1 student",
                      },
                      { amount: "₹5,000", impact: "Supports 1 week of meals" },
                      {
                        amount: "₹10,000",
                        impact: "Funds yoga mats & equipment",
                      },
                      { amount: "₹25,000", impact: "Sponsors a short retreat" },
                      { amount: "₹50,000", impact: "1 year scholarship" },
                    ].map((item) => (
                      <div key={item.amount} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-primary">
                            {item.amount}
                          </span>
                          <span className="text-muted-foreground">
                            {" "}
                            — {item.impact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Donation Purposes */}
      <Section>
        <SectionHeader
          badge="Where Your Donation Goes"
          title="Support Areas"
          subtitle="Choose how you'd like your contribution to make a difference."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationPurposes.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="h-full p-6 bg-card rounded-2xl border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <p className="text-xs text-primary font-medium">
                  {item.amount}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Stats */}
      {/* <Section className="bg-card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat) => (
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

      {/* Other Ways */}
      <Section>
        <SectionHeader
          badge="Alternatives"
          title="Other Ways to Give"
          subtitle="Beyond monetary donations, there are many ways to support our mission."
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Legacy Giving",
              description:
                "Include Shoonya Shikhar Gurukulam in your will to create a lasting impact.",
            },
            {
              title: "Corporate Sponsorship",
              description:
                "Partner with us for CSR initiatives and employee engagement programs.",
            },
            {
              title: "Volunteer",
              description:
                "Share your skills and time to support our educational programs.",
            },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="p-6 bg-card rounded-2xl border border-border text-center">
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/5"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Thank You */}
      <Section className="bg-primary/5">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Thank You for Your Generosity
            </h2>
            <p className="text-muted-foreground mb-8">
              Every contribution, no matter the size, helps us preserve ancient
              wisdom and provide transformative education to students who carry
              forward this sacred tradition. May your kindness be blessed
              manifold.
            </p>
            <p className="text-xl text-primary italic">
              &quot;सर्वे भवन्तु सुखिनः&quot; — May all beings be happy
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
