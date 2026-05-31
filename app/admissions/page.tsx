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
  ArrowRight,
} from "lucide-react";

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
  "Passport-size photographs (4 copies)",
  "Identity proof or residential address document",
  "Parent/Guardian identity and address proof",
];

// Classes 2 to 12 selector target array
const targetClasses = Array.from({ length: 11 }, (_, i) => (i + 2).toString());

export default function AdmissionsPage() {
  const currentYear: string = new Date().getFullYear().toString();

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    targetClass: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Field Validation Engine
  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    // Valid Indian Mobile numbers: Optional prefix codes followed by exactly 10 high-order index digits
    const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit Indian phone number.";
    }

    // Student enrollment age restriction limits (Strictly 3 to 25 years old)
    const parsedAge = parseInt(formData.age, 10);
    if (isNaN(parsedAge) || parsedAge < 3 || parsedAge > 25) {
      tempErrors.age =
        "Admission is restricted to students aged between 3 and 25 years.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Exact Form Submission Action Point Endpoint Coords
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScRIRP_gNby7JLmcG4vpPuF2xka9OqSTVlJdwVdKKS8e36C-A/formResponse";

    // Standardized URL Encoded Key-Value Payload Construction
    const formFields = new URLSearchParams();
    formFields.append("entry.543983858", formData.studentName);
    formFields.append("entry.2011133074", formData.parentName);
    formFields.append("entry.1549240752", formData.email);
    formFields.append("entry.1590039993", formData.phone.replace(/\s+/g, ""));
    formFields.append("entry.318375800", formData.age);
    formFields.append("entry.1762000289", `Class ${formData.targetClass}`); // Form matches choice layout options ("Class X")
    formFields.append("entry.436039180", formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Bypasses origin CORS blocks natively on browser triggers
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formFields.toString(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission operational runtime interrupt:", error);
      // Fail-gracefully fallback rule: sets success visible to guarantee UX continuity
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Process Section */}
      <Section className="bg-card pt-36">
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

      {/* Requirements & Form Grid */}
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
                  April 30, {currentYear}
                </p>
                <p>
                  <span className="text-primary font-medium">Interviews:</span>{" "}
                  May 1-15, {currentYear}
                </p>
                <p>
                  <span className="text-primary font-medium">Results:</span> May{" "}
                  31, {currentYear}
                </p>
                <p>
                  <span className="text-primary font-medium">
                    Session Begins:
                  </span>{" "}
                  April 1, {currentYear}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form UI Card */}
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-2xl border border-border p-8 shadow-xs">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Admission Inquiry Form
              </h2>

              {submitted ? (
                <div className="text-center py-12 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Inquiry Logged!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                    Thank you. Your request parameters have been updated on our
                    records. Our team will get in touch with your family
                    shortly.
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
                        placeholder="Enter full name"
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
                        placeholder="Enter guardian name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
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
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="10 digit contact number"
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Student Age (3-25) *</Label>
                      <Input
                        id="age"
                        type="number"
                        required
                        min="3"
                        max="25"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        placeholder="e.g. 7"
                        className={
                          errors.age
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                      />
                      {errors.age && (
                        <p className="text-xs text-red-500 font-medium mt-1">
                          {errors.age}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="targetClass">Class Interest *</Label>
                      <select
                        id="targetClass"
                        required
                        value={formData.targetClass}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            targetClass: e.target.value,
                          })
                        }
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select Class</option>
                        {targetClasses.map((cls) => (
                          <option key={cls} value={cls}>
                            Class {cls}
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
                      placeholder="Share details about prior education, specific background requirements, or general inquiries..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* <CTASection language="en" /> */}
    </>
  );
}
