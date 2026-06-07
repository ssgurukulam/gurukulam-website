"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";
import galleryData from "@/content/gallery.json";

interface FlattenedMediaItem {
  id: string;
  type: string;
  src: string;
  title: string;
}

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const { language: clientLang } = useLanguage();
  const isHi = clientLang === "hi";

  const sliderMedia: FlattenedMediaItem[] = galleryData.categories
    .flatMap((category) => category.images)
    .filter((img) => img?.showOnHero)
    .map((item) => ({
      id: item.id,
      type: item.type || "image",
      src: item.src,
      title: item[isHi ? "hi" : "en"] || "Gurukulam Life",
    }));

  const [activeSlide, setActiveSlide] = useState(0);
  const [modalVideo, setModalVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (sliderMedia.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderMedia.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [sliderMedia.length]);

  if (!sliderMedia || sliderMedia.length === 0) return null;

  return (
    <>
      {/* 🌅 VIEWPORT BLEED PANORAMIC CAROUSEL (Mobile Aspect Boosted to 16/9, Desktop Height Explicitly Scaled Up) */}
      <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[21/7] lg:h-[580px] bg-zinc-950 overflow-hidden group/slider border-b border-border/40 shadow-sm">
        <AnimatePresence mode="crossfade">
          {sliderMedia.map((slide, idx) => {
            if (idx !== activeSlide) return null;
            const isVideo = slide.type === "video";
            const thumbnailSrc = isVideo
              ? slide.src.replace(/\.(mp4|webm|ogg)$/i, ".jpg")
              : slide.src;

            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full cursor-pointer"
                onClick={() => {
                  if (isVideo) {
                    setModalVideo({ src: slide.src, title: slide.title });
                  } else {
                    window.location.href = `/gallery#${slide.id}`;
                  }
                }}
              >
                <Image
                  src={thumbnailSrc}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-[6000ms] scale-100 group-hover/slider:scale-[1.02]"
                />

                {/* Visual shade box overlay layout block */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 flex flex-col justify-end p-4 sm:p-8 lg:p-12" />

                {/* Localized text containers with scaling fixes for small displays */}
                <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-12 right-20 sm:right-32 text-white space-y-1 sm:space-y-2 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 text-[9px] sm:text-xs font-bold uppercase tracking-widest bg-primary text-white rounded-md">
                    {isVideo
                      ? isHi
                        ? "वीडियो संग्रह"
                        : "Video Feature"
                      : isHi
                        ? "परिसर झलक"
                        : "Campus Scene"}
                  </span>
                  <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-md font-cormorant leading-tight line-clamp-2 sm:line-clamp-none">
                    {slide.title}
                  </h2>
                </div>

                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-12 h-12 sm:w-18 sm:h-18 bg-white/95 text-primary rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover/slider:scale-110 transition-transform duration-300">
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current translate-x-0.5 text-primary" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Action slide pagination dot elements */}
        <div className="absolute bottom-4 right-4 sm:right-12 flex items-center gap-1.5 z-20">
          {sliderMedia.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSlide(i);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 bg-white/50 cursor-pointer",
                i === activeSlide
                  ? "w-5 sm:w-6 bg-primary"
                  : "w-1.5 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      </section>

      {/* Video Lightbox Modal Framework */}
      <AnimatePresence>
        {modalVideo && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setModalVideo(null)}
          >
            <div
              className="absolute top-6 right-6 text-white cursor-pointer p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setModalVideo(null)}
            >
              <X className="w-5 h-5" />
            </div>
            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
                <video
                  src={modalVideo.src}
                  controls
                  autoPlay
                  playsInline
                  poster={modalVideo.src.replace(/\.(mp4|webm|ogg)$/i, ".jpg")}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-white text-sm font-medium mt-3 tracking-wide">
                {modalVideo.title}
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
