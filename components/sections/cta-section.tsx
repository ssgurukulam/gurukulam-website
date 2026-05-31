"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  language: string;
}

export function CTASection({ language }: CTASectionProps) {
  const isHi = language === "hi";

  // Toggle flag to easily switch presentation modes when features go live
  const showDonationCTA = false;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Atmosphere Accents */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* 
            Dynamic Grid Framework: 
            If donation is hidden, it acts as a single focused centered panel column.
            If donation is active, it splits cleanly into a balanced side-by-side 2-column grid.
          */}
          <div
            className={
              showDonationCTA
                ? "grid md:grid-cols-2 gap-8"
                : "max-w-xl mx-auto w-full flex justify-center"
            }
          >
            {/* Admissions CTA Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 border border-border/60 hover:border-primary/30 transition-all duration-300 w-full shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/5 select-none text-3xl">
                🎓
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                {isHi ? "प्रवेश यात्रा प्रारम्भ करें" : "Begin Your Journey"}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                {isHi
                  ? "आगामी शैक्षणिक सत्र के लिए प्रवेश प्रक्रिया अब खुल चुकी है। पारंपरिक गुरुकुल शिक्षा पद्धति की इस परिवर्तनकारी शक्ति का अनुभव करने के लिए आज ही आवेदन करें।"
                  : "Applications are now open for the upcoming academic year. Join us to experience the transformative power of traditional Gurukul education."}
              </p>
              <Link href="/admissions">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 cursor-pointer transition-all duration-200">
                  {isHi ? "प्रवेश के लिए आवेदन करें" : "Apply for Admission"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Donation CTA Block (Kept safely commented out for immediate future feature activation) */}
            {showDonationCTA && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-3xl p-8 border border-border/60 hover:border-accent/30 transition-all duration-300 w-full shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/5">
                  <Heart className="w-6 h-6 text-accent fill-current" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                  {isHi ? "हमारे ध्येय को सहयोग दें" : "Support Our Mission"}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  {isHi
                    ? "आपका बहुमूल्य योगदान हमें मेधावी छात्रों को छात्रवृत्ति प्रदान करने, परिसरों के रख-रखाव और आने वाली पीढ़ियों के लिए प्राचीन भारतीय ज्ञान को संरक्षित रखने में मदद करता है।"
                    : "Your generous contribution helps us provide scholarships, maintain our facilities, and continue preserving ancient Indian wisdom for future generations."}
                </p>
                <Link href="/donate">
                  <Button
                    variant="outline"
                    className="w-full border-accent hover:bg-accent/10 text-accent gap-2 cursor-pointer transition-all duration-200"
                  >
                    {isHi ? "योगदान प्रदान करें" : "Make a Donation"}
                    <Heart className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Canonical Scriptural Quote Overlay Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center border-t border-border/30 pt-10"
          >
            <p className="text-base md:text-lg text-primary/80 font-medium italic max-w-2xl mx-auto tracking-wide leading-relaxed">
              &quot;तमसो मा ज्योतिर्गमय&quot;
              <br />
              <span className="text-xs md:text-sm text-muted-foreground not-italic block mt-1.5 font-normal tracking-normal">
                &quot;
                {isHi
                  ? "मुझे अंधकार से प्रकाश की ओर ले चलो"
                  : "Lead me from darkness to light"}
                &quot; — Brihadaranyaka Upanishad
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
