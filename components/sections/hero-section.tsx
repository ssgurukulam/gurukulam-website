"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import galleryData from "@/content/gallery.json";

interface HeroSectionProps {
  language: string;
}

interface FlattenedMediaItem {
  id: string;
  type: string;
  src: string;
  title: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const isHi = language === "hi";

  // 1. Flatten all categories and filter out items containing "hero" inside their ID parameters
  const heroMedia: FlattenedMediaItem[] = galleryData.categories
    .flatMap((category) => category.images)
    .filter((img) => img?.showOnHero) // 👈 Acts as our implicit target gallery flag layer
    .map((item) => ({
      id: item.id,
      type: item.type || "image",
      src: item.src,
      title: item[isHi ? "hi" : "en"] || "Gurukulam Life",
    }));

  const [indexOffset, setIndexOffset] = useState(0);
  const [modalMedia, setModalMedia] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // 2. Rotate featured files automatically every 5 seconds if there are enough assets loaded
  useEffect(() => {
    if (heroMedia.length <= 1) return;

    const timer = setInterval(() => {
      setIndexOffset((prev) => (prev + 1) % heroMedia.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroMedia.length]);

  // Handle runtime empty safety checks cleanly
  if (!heroMedia || heroMedia.length === 0) return null;

  // 3. Safely extract 3 current assets based on the active rolling index offset loop (with fallbacks if len < 3)
  const leftCard = heroMedia[indexOffset % heroMedia.length];
  const centerCard =
    heroMedia[(indexOffset + 1) % heroMedia.length] || leftCard;
  const rightCard =
    heroMedia[(indexOffset + 2) % heroMedia.length] || centerCard;

  const clusterCards = [
    {
      item: leftCard,
      classes:
        "w-[55%] aspect-[3/4] absolute top-[8%] left-0 z-10 border-2 border-background shadow-lg",
      rotation: -7,
    },
    {
      item: rightCard,
      classes:
        "w-[55%] aspect-[3/4] absolute top-[14%] right-0 z-20 border-2 border-background shadow-lg",
      rotation: 7,
    },
    {
      item: centerCard,
      classes:
        "w-[68%] aspect-square absolute top-[2%] left-[16%] z-30 shadow-2xl border-4 border-background",
      rotation: 1,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-32 lg:pt-40 pb-12">
      {/* Background Ambient Decoratives */}
      <div className="absolute inset-0 opacity-30 pointer-events-none pattern-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT PANEL: Typography & Messaging Branding */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              {isHi ? "शून्य शिखर" : "Shoonya Shikhar"}
              <br />
              <span className="text-primary">
                {isHi ? "गुरुकुलम्" : "Gurukulam"}
              </span>
            </motion.h1>
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              {isHi
                ? "वर्ष 2025 में स्थापित, आधुनिक शिक्षा और भारतीय गुरुकुल परंपरा के समन्वय का एक प्रेरणादायी केंद्र। करौली के पाचना बांध की शांत तलहटी में स्थित, यहाँ छात्र अनुशासन, योग, ध्यान, मार्शल आर्ट और कंप्यूटर शिक्षा के माध्यम से पूर्ण मानव बनते हैं।"
                : "Established in 2025, Shunya Shikhar Gurukulam balances timeless Vedic wisdom with cutting-edge modern technology. Located in the peaceful foothills of Pachna Dam, Karauli, our campus shapes characters through disciplined living, meditation, coding, and physical combat mastery."}
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 cursor-pointer shadow-sm transition-all"
                >
                  {isHi ? "यात्रा प्रारम्भ करें" : "Begin Your Journey"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 px-8 border-primary/30 hover:bg-primary/5 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {isHi ? "हमारी कहानी देखें" : "Watch Our Story"}
                </Button>
              </Link>
            </motion.div>

            {/* Micro Counter Stats Layout Ribbon bar matching site data metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 grid grid-cols-3 gap-4 border-t border-border/40 max-w-md mx-auto lg:mx-0"
            >
              {[
                {
                  value: "170+",
                  label: isHi ? "शिक्षित छात्र" : "Students Trained",
                },
                {
                  value: "13+",
                  label: isHi ? "आचार्य गुरु" : "Expert Acharyas",
                },
                { value: "3", label: isHi ? "मंजिला परिसर" : "Storied Campus" },
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

          {/* RIGHT PANEL: The Responsive High-Impact Cascade Photo Fan Loop */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full pt-6 lg:pt-0 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[460px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] mx-auto lg:mr-0 select-none">
              <AnimatePresence mode="popLayout">
                {clusterCards.map((card, idx) => {
                  const isVideo = card.item.type === "video";
                  const displayImg = isVideo
                    ? card.item.src.replace(/\.(mp4|webm|ogg)$/i, ".jpg")
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
                        zIndex: 50,
                        transition: { duration: 0.25 },
                      }}
                      style={{ rotate: card.rotation }}
                      className={`rounded-3xl overflow-hidden bg-muted group cursor-pointer transition-shadow duration-300 ${card.classes}`}
                      onClick={() => {
                        if (isVideo) {
                          setModalMedia({
                            src: card.item.src,
                            title: card.item.title,
                          });
                        } else {
                          window.location.href = `/gallery#${card.item.id}`;
                        }
                      }}
                    >
                      <Image
                        src={displayImg}
                        alt={card.item.title}
                        fill
                        priority={idx === 2}
                        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Video Trigger Indicator Overlays */}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors z-10">
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-background/95 backdrop-blur-md text-primary rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 border border-primary/10">
                            <Play className="w-5 h-5 fill-current translate-x-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Title caption overlay ribbon bar appear on hover focus states */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end z-20">
                        <p className="text-white text-xs md:text-sm font-medium tracking-wide truncate w-full">
                          {isVideo ? `▶ ${card.item.title}` : card.item.title}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Dotted Guidelines Circle */}
              <div className="absolute inset-x-2 top-[6%] bottom-[10%] border border-primary/10 rounded-full scale-95 pointer-events-none border-dashed z-0 opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PANEL: Core Interactive Course Track Pillars Highlights */}
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
                href={"/curriculum#" + item.id}
                key={item.id}
                title={item.title}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-[2rem] border border-border/60 bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center ${item.borderColor}`}
                >
                  <div className="absolute inset-0 w-full h-full select-none p-5 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
                      className="object-cover dark:invert opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10 bg-background/90 backdrop-blur-xs p-1 rounded-full border border-border">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                </div>
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

      {/* Global Video Modal Lightbox Frame */}
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
                  poster={modalMedia.src.replace(/\.(mp4|webm|ogg)$/i, ".jpg")}
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
