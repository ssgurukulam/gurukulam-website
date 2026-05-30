"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { X, Play } from "lucide-react";
import gallery from "@/content/gallery.json";

interface GalleryClientProps {
  language: string;
}

// Custom stable SVG path for YouTube since the lucide icon tag is deprecated
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function GalleryClientPage({ language }: GalleryClientProps) {
  const langKey = (language === "hi" ? "hi" : "en") as "en" | "hi";
  const categories = ["all", ...gallery.categories.map((c) => c.id)];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string;
    title: string;
    type: string;
  } | null>(null);

  const allMedia = gallery.categories.flatMap((cat) =>
    cat.images.map((item) => ({
      id: item.id,
      type: item.type || "image",
      src: item.src,
      title: item[langKey],
      category: cat.id,
    })),
  );

  const filteredMedia =
    activeCategory === "all"
      ? allMedia
      : allMedia.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card border-b border-border/40">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
              {langKey === "hi" ? "गुरुकुल झलकियां" : "Media Gallery"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight">
              {langKey === "hi" ? "चित्र एवं वीडियो दीर्घा" : "Photos & Videos"}
            </h1>
            <p className="text-lg text-muted-foreground">
              Glimpses of life, learning, and celebrations at Shoonya Shikhar
              Gurukulam.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Menu (Restored Original Pill UI) */}
      <Section>
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const categoryData = gallery.categories.find((c) => c.id === cat);
              const label =
                cat === "all"
                  ? langKey === "hi"
                    ? "सभी"
                    : "All"
                  : categoryData?.[langKey]?.name;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer group relative border border-border/40"
                onClick={() =>
                  setSelectedMedia({
                    src: item.src,
                    title: item.title,
                    type: item.type,
                  })
                }
              >
                {item.type === "video" ? (
                  <div className="w-full h-full relative bg-zinc-900 overflow-hidden">
                    {/* Thumbnail covers the whole card completely */}
                    <Image
                      src={item.src.replace(".mp4", ".jpg")}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500" //
                    />

                    {/* Centered Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/10 group-hover:bg-black/30 transition-colors">
                      <div className="w-14 h-14 bg-background/90 backdrop-blur-sm text-primary rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Info Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-xs md:text-sm font-medium flex items-center gap-2">
                    {item.type === "video" && (
                      <Play className="w-3 h-3 fill-white" />
                    )}
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-video relative rounded-2xl overflow-hidden bg-black shadow-2xl">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
              <p className="text-center text-white text-base font-medium mt-4">
                {selectedMedia.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Section Footer Block */}
      <section className="py-16 bg-card border-t border-border/40">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <YouTubeIcon className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            {langKey === "hi"
              ? "हमारा यूट्यूब चैनल सब्सक्राइब करें"
              : "Subscribe to Our Channel"}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-sm md:text-base">
            {langKey === "hi"
              ? "नियमित उत्सव आयोजनों, दैनिक गुरुकुल जीवन और वैदिक व्याख्यानों के वीडियो सीधे देखने के लिए हमारे आधिकारिक चैनल से जुड़ें।"
              : "Watch live festival recordings, daily gurukulam schedules, and deep Vedic lectures uploaded straight from campus."}
          </p>
          <a
            href={gallery.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl shadow-md transition-colors"
          >
            <YouTubeIcon className="w-4 h-4 text-white" />
            {langKey === "hi"
              ? "चैनल पर जाएं"
              : "Visit Shunya Shikhar on YouTube"}
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
