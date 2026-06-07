"use client";

import { useState, useEffect } from "react";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/components/language-provider"; // 🚀 THE BILINGUAL HOOK
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
    title: { en: "Submit Application", hi: "आवेदन पत्र जमा करें" },
    description: {
      en: "Fill out the inquiry form with required details",
      hi: "आवश्यक विवरण के साथ पूछताछ फॉर्म भरें",
    },
  },
  {
    icon: Calendar,
    title: { en: "Interview", hi: "साक्षात्कार (इंटरव्यू)" },
    description: {
      en: "Personal interview with student and parents",
      hi: "विद्यार्थी और माता-पिता के साथ व्यक्तिगत बातचीत",
    },
  },
  {
    icon: Users,
    title: { en: "Campus Visit", hi: "परिसर का अवलोकन" },
    description: {
      en: "Visit our campus and meet the faculty",
      hi: "गुरुकुल परिसर का दौरा करें और आचार्यों से मिलें",
    },
  },
  {
    icon: GraduationCap,
    title: { en: "Enrollment", hi: "प्रवेश एवं नामांकन" },
    description: {
      en: "Complete formalities and join the Gurukulam",
      hi: "औपचारिकताएं पूरी करें और गुरुकुल का हिस्सा बनें",
    },
  },
];

const requirements = [
  {
    en: "Birth certificate or age proof",
    hi: "जन्म प्रमाण पत्र या आयु का प्रमाण",
  },
  {
    en: "Academic records from previous institution",
    hi: "पिछली कक्षा के शैक्षणिक दस्तावेज/रिपोर्ट कार्ड",
  },
  {
    en: "Medical fitness certificate",
    hi: "चिकित्सा फिटनेस प्रमाण पत्र (मेडिकल सर्टिफिकेट)",
  },
  {
    en: "Passport-size photographs (4 copies)",
    hi: "पासपोर्ट आकार के फोटो (4 प्रतियां)",
  },
  {
    en: "Identity proof or residential address document",
    hi: "विद्यार्थी का पहचान प्रमाण या निवास प्रमाण पत्र",
  },
  {
    en: "Parent/Guardian identity and address proof",
    hi: "माता-पिता/अभिभावक का पहचान और पता प्रमाण पत्र",
  },
];

const targetClasses = Array.from({ length: 11 }, (_, i) => (i + 2).toString());

export default function AdmissionsPage() {
  const currentYear: string = new Date().getFullYear().toString();

  // Connect cleanly to your dynamic client language provider context
  const { language: clientLang } = useLanguage();
  const isHi = clientLang === "hi";
  const langKey = isHi ? "hi" : "en";

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

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      tempErrors.phone = isHi
        ? "कृपया एक वैध 10-अंकीय भारतीय फ़ोन नंबर दर्ज करें।"
        : "Please enter a valid 10-digit Indian phone number.";
    }

    const parsedAge = parseInt(formData.age, 10);
    if (isNaN(parsedAge) || parsedAge < 3 || parsedAge > 25) {
      tempErrors.age = isHi
        ? "प्रवेश केवल 3 से 25 वर्ष के बीच की आयु के विद्यार्थियों के लिए ही सीमित है।"
        : "Admission is restricted to students aged between 3 and 25 years.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScRIRP_gNby7JLmcG4vpPuF2xka9OqSTVlJdwVdKKS8e36C-A/formResponse";

    const formFields = new URLSearchParams();
    formFields.append("entry.543983858", formData.studentName);
    formFields.append("entry.2011133074", formData.parentName);
    formFields.append("entry.1549240752", formData.email);
    formFields.append("entry.1590039993", formData.phone.replace(/\s+/g, ""));
    formFields.append("entry.318375800", formData.age);
    formFields.append(
      "entry.1762000289",
      `${isHi ? "कक्षा" : "Class"} ${formData.targetClass}`,
    );
    formFields.append("entry.436039180", formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formFields.toString(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission operational runtime interrupt:", error);
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
          badge={isHi ? "प्रक्रिया" : "Process"}
          title={isHi ? "प्रवेश के चरण" : "Admission Steps"}
          subtitle={
            isHi
              ? "हमारे गुरुकुल में शामिल होने के लिए एक सरल चार-चरण प्रक्रिया।"
              : "A simple four-step process to join our Gurukulam."
          }
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <FadeIn key={step.title.en} delay={index * 0.1}>
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
                    {isHi ? `चरण ${index + 1}` : `Step ${index + 1}`}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title[langKey]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description[langKey]}
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
              {isHi ? "आवश्यक दस्तावेज" : "Required Documents"}
            </h2>
            <div className="space-y-3">
              {requirements.map((req) => (
                <div key={req.en} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req[langKey]}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="font-semibold text-foreground mb-2">
                {isHi ? "महत्वपूर्ण तिथियां" : "Important Dates"}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-primary font-medium">
                    {isHi ? "आवेदन की अंतिम तिथि:" : "Application Deadline:"}
                  </span>{" "}
                  {isHi
                    ? `30 अप्रैल, ${currentYear}`
                    : `April 30, ${currentYear}`}
                </p>
                <p>
                  <span className="text-primary font-medium">
                    {isHi ? "साक्षात्कार अवधि:" : "Interviews:"}
                  </span>{" "}
                  {isHi
                    ? `1-15 मई, ${currentYear}`
                    : `May 1-15, ${currentYear}`}
                </p>
                <p>
                  <span className="text-primary font-medium">
                    {isHi ? "परिणाम घोषणा:" : "Results:"}
                  </span>{" "}
                  {isHi ? `31 मई, ${currentYear}` : `May 31, ${currentYear}`}
                </p>
                <p>
                  <span className="text-primary font-medium">
                    {isHi ? "सत्र का शुभारंभ:" : "Session Begins:"}
                  </span>{" "}
                  {isHi
                    ? `1 अप्रैल, ${currentYear}`
                    : `April 1, ${currentYear}`}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form UI Card */}
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-2xl border border-border p-8 shadow-xs">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                {isHi ? "प्रवेश पूछताछ फॉर्म" : "Admission Inquiry Form"}
              </h2>

              {submitted ? (
                <div className="text-center py-12 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {isHi ? "पूछताछ दर्ज की गई!" : "Inquiry Logged!"}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                    {isHi
                      ? "धन्यवाद। आपकी पूछताछ हमारे पास सफलतापूर्वक दर्ज कर ली गई है। हमारा गुरुकुल प्रबंधन दल शीघ्र ही आपके परिवार से संपर्क करेगा।"
                      : "Thank you. Your request parameters have been updated on our records. Our team will get in touch with your family shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentName">
                        {isHi ? "विद्यार्थी का नाम *" : "Student Name *"}
                      </Label>
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
                        placeholder={
                          isHi ? "पूरा नाम दर्ज करें" : "Enter full name"
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentName">
                        {isHi
                          ? "माता-पिता/अभिभावक का नाम *"
                          : "Parent/Guardian Name *"}
                      </Label>
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
                        placeholder={
                          isHi
                            ? "अभिभावक का नाम दर्ज करें"
                            : "Enter guardian name"
                        }
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {isHi ? "ईमेल आईडी *" : "Email Address *"}
                      </Label>
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
                      <Label htmlFor="phone">
                        {isHi ? "फ़ोन नंबर *" : "Phone Number *"}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={
                          isHi
                            ? "10 अंकों का संपर्क नंबर"
                            : "10 digit contact number"
                        }
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
                      <Label htmlFor="age">
                        {isHi
                          ? "विद्यार्थी की आयु (3-25) *"
                          : "Student Age (3-25) *"}
                      </Label>
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
                      <Label htmlFor="targetClass">
                        {isHi ? "प्रवेश हेतु कक्षा *" : "Class Interest *"}
                      </Label>
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
                        <option value="">
                          {isHi ? "कक्षा चुनें" : "Select Class"}
                        </option>
                        {targetClasses.map((cls) => (
                          <option key={cls} value={cls}>
                            {isHi ? `कक्षा ${cls}` : `Class ${cls}`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {isHi ? "अतिरिक्त जानकारी" : "Additional Information"}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={
                        isHi
                          ? "पूर्व शिक्षा, विशिष्ट पारिवारिक पृष्ठभूमि या सामान्य प्रश्नों के बारे में विवरण साझा करें..."
                          : "Share details about prior education, specific background requirements, or general inquiries..."
                      }
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 cursor-pointer transition-all disabled:opacity-50 font-bold"
                  >
                    {isSubmitting
                      ? isHi
                        ? "पूछताछ सबमिट हो रही है..."
                        : "Submitting Inquiry..."
                      : isHi
                        ? "पूछताछ सबमिट करें"
                        : "Submit Inquiry"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTASection language={langKey} />
    </>
  );
}
