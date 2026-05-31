"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Eye, Shield, Cpu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMedia from "@/content/heroMedia.json";

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const isHi = language === "hi";

  // 1. Keep state management clean and structured at the top level
  const [indexOffset, setIndexOffset] = useState(0);
  const [modalMedia, setModalMedia] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // Rotate media files automatically every 5 seconds if there are more than 3 assets
  useEffect(() => {
    if (heroMedia.length <= 3) return;

    const timer = setInterval(() => {
      setIndexOffset((prev) => (prev + 1) % heroMedia.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // 2. Safely extract 3 current assets based on the active rolling index offset loop
  const currentCardsData = [
    heroMedia[indexOffset % heroMedia.length],
    heroMedia[(indexOffset + 1) % heroMedia.length],
    heroMedia[(indexOffset + 2) % heroMedia.length],
  ];

  // 3. Tightly packed layout configurations to fix empty spacing bugs
  const clusterPositions = [
    {
      // LEFT COMPACT CARD
      classes:
        "w-[52%] aspect-[3/4] absolute top-[12%] left-0 z-10 border-2 border-background",
      rotation: -6,
    },
    {
      // CENTER MASTER VIDEO CARD (Pops out larger directly in front)
      classes:
        "w-[62%] aspect-square absolute top-[6%] left-[19%] z-30 shadow-2xl border-4 border-background",
      rotation: 1,
    },
    {
      // RIGHT COMPACT CARD
      classes:
        "w-[52%] aspect-[3/4] absolute top-[16%] right-0 z-20 border-2 border-background",
      rotation: 6,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-32 lg:pt-40 pb-12">
      {/* Background Ambience Accents */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT PANEL: Branding Typography Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-primary bg-primary/10 rounded-full border border-primary/20">
                सा विद्या या विमुक्तये । —{" "}
                {isHi
                  ? "सच्ची शिक्षा वही है जो मुक्त करे।"
                  : "True wisdom leads to liberation."}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight"
            >
              {isHi ? "शून्य शिखर" : "Shoonya Shikhar"}
              <br />
              <span className="text-primary">
                {isHi ? "गुरुकुलम्" : "Gurukulam"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              {isHi
                ? "प्राचीन भारतीय संस्कृति, संस्कार, एवं आधुनिक विज्ञान का एक पावन समन्वय। यहाँ विद्यार्थी अनुशासित जीवनशैली, योग, ध्यान, और अत्याधुनिक कंप्यूटर शिक्षा के माध्यम से उज्ज्वल भविष्य के लिए तैयार होते हैं।"
                : "A transformative sanctuary bridging timeless Vedic wisdom with cutting-edge modern science. Rooted in traditional discipline, deep shastric values, AI learning, and physical mastery."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link href="/admissions" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 w-full cursor-pointer shadow-sm transition-all"
                >
                  {isHi ? "यात्रा प्रारम्भ करें" : "Begin Your Journey"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 px-8 border-primary/30 hover:bg-primary/5 w-full cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {isHi ? "हमारी कहानी देखें" : "Watch Our Story"}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 grid grid-cols-3 gap-4 border-t border-border/40 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "170+", label: isHi ? "शिक्षित छात्र" : "Students" },
                { value: "13+", label: isHi ? "आचार्य गुरु" : "Expert Gurus" },
                { value: "3", label: isHi ? "शिक्षा केंद्र" : "Storied Center" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT PANEL: Fixed Spacing Tightly-Packed Photo Fan Loop Container */}
          {/* RIGHT PANEL: Grand, High-Impact Cascading Fan Media Cluster */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full pt-6 lg:pt-0 flex items-center justify-center lg:justify-end">
            {heroMedia &&
              heroMedia.length >= 3 &&
              (() => {
                const [modalMedia, setModalMedia] = React.useState<{
                  src: string;
                  title: string;
                } | null>(null);

                // Scaling adjustments: Increased overall dimensions, optimized overlay positioning matrices
                const clusterCards = [
                  {
                    item: heroMedia[indexOffset % heroMedia.length],
                    // LEFT PHOTO LAYER: Scaled up to 55% width
                    classes:
                      "w-[55%] aspect-[3/4] absolute top-[8%] left-0 z-10 border-2 border-background shadow-lg",
                    rotation: -7,
                  },
                  {
                    item: heroMedia[(indexOffset + 2) % heroMedia.length],
                    // RIGHT PHOTO LAYER: Scaled up to 55% width
                    classes:
                      "w-[55%] aspect-[3/4] absolute top-[14%] right-0 z-20 border-2 border-background shadow-lg",
                    rotation: 7,
                  },
                  {
                    item: heroMedia[(indexOffset + 1) % heroMedia.length],
                    // CENTER MASTER CARD: Expanded to 68% total layout width for massive visual punch
                    classes:
                      "w-[68%] aspect-square absolute top-[2%] left-[16%] z-30 shadow-2xl border-4 border-background",
                    rotation: 1,
                  },
                ];

                return (
                  <>
                    {/* Main boundary limits increased to max-w-[460px] and h-[480px] on desktop for size depth */}
                    <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[460px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] mx-auto lg:mr-0 select-none">
                      <AnimatePresence mode="popLayout">
                        {clusterCards.map((card, idx) => {
                          const isVideo = card.item.type === "video";
                          const cardTitle = card.item[isHi ? "hi" : "en"];
                          const displayImg = isVideo
                            ? card.item.src.replace(".mp4", ".jpg")
                            : card.item.src;

                          return (
                            <motion.div
                              key={`${idx}-${card.item.id}`}
                              initial={{ opacity: 0, y: 25, scale: 0.94 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.94, y: -15 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              whileHover={{
                                scale: 1.06,
                                rotate: 0,
                                zIndex: 50, // Floating card smoothly glides out on hover focus
                                // shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                                transition: { duration: 0.25 },
                              }}
                              style={{ rotate: card.rotation }}
                              className={`rounded-3xl overflow-hidden bg-muted group cursor-pointer transition-shadow duration-300 ${card.classes}`}
                              onClick={() => {
                                if (isVideo) {
                                  setModalMedia({
                                    src: card.item.src,
                                    title: cardTitle,
                                  });
                                } else {
                                  window.location.href = "/gallery";
                                }
                              }}
                            >
                              {/* High Performance Cached Image Delivery */}
                              <Image
                                src={displayImg}
                                alt={cardTitle}
                                fill
                                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 400px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />

                              {/* Centered Glassmorphic Play Trigger */}
                              {isVideo && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors z-10">
                                  <div className="w-14 h-14 md:w-16 md:h-16 bg-background/95 backdrop-blur-md text-primary rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 border border-primary/10">
                                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                                  </div>
                                </div>
                              )}

                              {/* Elegant Gradient Title bar appearing on Hover */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end z-20">
                                <p className="text-white text-xs md:text-sm font-medium tracking-wide truncate w-full">
                                  {isVideo ? `▶ ${cardTitle}` : cardTitle}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>

                      {/* Background Radial Dotted Pattern Guideline */}
                      <div className="absolute inset-x-2 top-[6%] bottom-[10%] border border-primary/10 rounded-full scale-95 pointer-events-none border-dashed z-0 opacity-70" />
                    </div>

                    {/* Video Lightbox Modal Backdrop layout container */}
                    <AnimatePresence>
                      {modalMedia && (
                        <div
                          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                          onClick={() => setModalMedia(null)}
                        >
                          <div
                            className="absolute top-6 right-6 text-white cursor-pointer p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            onClick={() => setModalMedia(null)}
                          >
                            <X className="w-5 h-5" />
                          </div>
                          <div
                            className="max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
                              <video
                                src={modalMedia.src}
                                controls
                                autoPlay
                                playsInline
                                poster={modalMedia.src.replace(".mp4", ".jpg")}
                                className="w-full h-full object-contain max-h-[80vh]"
                              />
                            </div>
                            <p className="text-center text-white text-sm md:text-base font-medium mt-4 tracking-wide">
                              {modalMedia.title}
                            </p>
                          </div>
                        </div>
                      )}
                    </AnimatePresence>
                  </>
                );
              })()}
          </div>
        </div>
      </div>

      {/* BOTTOM PANEL: Minimalist Interactive Curriculum Highlights */}
      <div className="w-full mt-12 lg:mt-16 border-t border-border/40 pt-8 relative z-20">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[
              {
                id: "meditation",
                icon: "https://res.cloudinary.com/dgzi1ruvs/image/upload/v1780209468/monument_mskl7i.png",
                title: isHi ? "ध्यान साधना" : "Meditation",
                borderColor: "hover:border-amber-500/40 shadow-amber-500/5",
                textColor: "group-hover:text-amber-500",
              },
              {
                id: "martial-arts",
                icon: "https://res.cloudinary.com/dgzi1ruvs/image/upload/v1780209465/taekwondo_zwrnkt.png",
                title: isHi ? "मार्शल आर्ट" : "Martial Arts",
                borderColor: "hover:border-red-500/40 shadow-red-500/5",
                textColor: "group-hover:text-red-500",
              },
              {
                id: "computer-education",
                icon: "https://res.cloudinary.com/dgzi1ruvs/image/upload/v1780209465/student_zaitkn.png",
                title: isHi ? "कंप्यूटर शिक्षा" : "Computer Ed.",
                borderColor: "hover:border-blue-500/40 shadow-blue-500/5",
                textColor: "group-hover:text-blue-500",
              },
            ].map((item) => (
              <Link
                href="/curriculum"
                key={item.id}
                title={item.title}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                {/* 1. Grand Core Card Frame (Image completely covers the background) */}
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-[2rem] border border-border/60 bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center ${item.borderColor}`}
                >
                  {/* Absolute Background Image Component */}
                  <div className="absolute inset-0 w-full h-full select-none p-5 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
                      className="object-cover dark:invert opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Dynamic Glassmorphic Overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />

                  {/* Corner Indicator Arrow */}
                  <div className="absolute bottom-2.5 right-2.5 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10 bg-background/90 backdrop-blur-xs p-1 rounded-full border border-border">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                </div>

                {/* 2. Text Label Component (Positioned perfectly below the card block) */}
                <span
                  className={`text-xs md:text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-300 ${item.textColor} text-center px-1`}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Global Video Lightbox Modal Frame (Compiled outside the loops safely) */}
      <AnimatePresence>
        {modalMedia && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setModalMedia(null)}
          >
            <div
              className="absolute top-6 right-6 text-white cursor-pointer p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setModalMedia(null)}
            >
              <X className="w-5 h-5" />
            </div>
            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
                <video
                  src={modalMedia.src}
                  controls
                  autoPlay
                  playsInline
                  poster={modalMedia.src.replace(".mp4", ".jpg")}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-white text-sm font-medium mt-3 tracking-wide">
                {modalMedia.title}
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
