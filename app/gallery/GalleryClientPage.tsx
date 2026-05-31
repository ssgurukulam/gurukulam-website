"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section, FadeIn } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { X, Play, ArrowRight, Heart, Users } from "lucide-react";
import gallery from "@/content/gallery.json";
import siteData from "@/content/site.json";

interface GalleryClientProps {
  language: string;
}

interface MediaItem {
  id: string;
  type: string;
  src: string;
  title: string;
  category: string;
}

// Custom stable official brand SVG path for YouTube
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Custom stable official brand SVG path for Instagram
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function GalleryClientPage({ language }: GalleryClientProps) {
  const langKey = (language === "hi" ? "hi" : "en") as "en" | "hi";
  const categories = ["all", ...gallery.categories.map((c) => c.id)];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Flatten dataset maps
  const allMedia: MediaItem[] = gallery.categories.flatMap((cat) =>
    cat.images.map((item) => ({
      id: item.id,
      type: item.type || "image",
      src: item.src,
      title: item[langKey] || "Gurukulam Media",
      category: cat.id,
    })),
  );

  // Deep linking hook: listens for initialization hash tags to prompt native file viewing modals
  // Deep linking hook: listens for initialization hash tags to prompt native file viewing modals
  useEffect(() => {
    const handleHashCheck = () => {
      // Decode URL safely to parse potential special characters or spaces
      const URLHash = decodeURIComponent(window.location.hash.replace("#", ""));

      if (URLHash) {
        // Find the asset across your entire global master gallery dataset
        const matchingAsset = allMedia.find((media) => media.id === URLHash);

        if (matchingAsset) {
          // 🚀 CRITICAL FIX: If the item belongs to a specific category,
          // we force the tab state to switch so the item is actively rendered in the DOM!
          setActiveCategory("all");

          // 🚀 TIMING FIX: Give Next.js and Framer Motion a split second (50ms)
          // to update the layout and mount the asset before popping the modal open
          setTimeout(() => {
            setSelectedMedia(matchingAsset);

            // Optional: Smoothly scroll down directly to the highlighted bento tile element anchor
            const element = document.getElementById(URLHash);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 50);
        }
      }
    };

    // Run the check instantly on browser load mount
    handleHashCheck();

    // Monitor hash changes while the user is still actively browsing on the tab layout
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

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
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              {langKey === "hi" ? "गुरुकुल झलकियां" : "Media Gallery"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight">
              {langKey === "hi" ? "चित्र एवं वीडियो दीर्घा" : "Photos & Videos"}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Glimpses of life, learning, and celebrations at Shoonya Shikhar
              Gurukulam.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Menu */}
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
                  className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm scale-102"
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
                id={item.id} // Adds a tracking point hook to the target element node
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="aspect-square rounded-2xl overflow-hidden bg-muted cursor-pointer group relative border border-border/60 shadow-xs hover:shadow-md transition-shadow"
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === "video" ? (
                  <div className="w-full h-full relative bg-zinc-900 overflow-hidden">
                    <Image
                      src={
                        item.src.includes("cloudinary")
                          ? item.src.replace(/\.(mp4|webm|ogg)$/i, ".jpg")
                          : "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80"
                      }
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/15 group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 bg-background/95 backdrop-blur-md text-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/10">
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end z-20">
                  <span className="text-white text-xs md:text-sm font-semibold flex items-center gap-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 truncate max-w-full">
                    {item.type === "video" && (
                      <Play className="w-3 h-3 fill-white shrink-0" />
                    )}
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Lightbox Modal Wrapper Component */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
            onClick={() => {
              setSelectedMedia(null);
              // Safely clear the location anchor tag parameter without disrupting router timeline records
              window.history.replaceState(null, "", window.location.pathname);
            }}
          >
            <button
              className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-card border border-border/60 hover:bg-accent text-foreground transition-colors cursor-pointer shadow-xs"
              onClick={() => {
                setSelectedMedia(null);
                window.history.replaceState(null, "", window.location.pathname);
              }}
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
              <div className="w-full aspect-video relative rounded-2xl overflow-hidden bg-black shadow-2xl border border-border/40">
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
              <p className="text-center text-foreground text-sm font-medium mt-4 bg-card px-4 py-2 rounded-xl border border-border/60 shadow-2xs">
                {selectedMedia.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌟 COHESIVE SOCIAL HUB DESK: Elegant Light Cards Layout Grid */}
      <section className="py-20 border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* 📺 YOUTUBE COMMUNITY PLATFORM CARD */}
            <div className="bg-card rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-border/60 shadow-xs group hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center border border-red-500/5 group-hover:scale-105 transition-transform duration-300">
                  <YouTubeIcon className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                    {langKey === "hi"
                      ? "यूट्यूब वीडियो प्रसारण"
                      : "Vedic Video Broadcasts"}
                  </h2>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
                    {langKey === "hi"
                      ? "सत्संग, योग अभ्यास एवं पर्व उत्सव"
                      : "Satsang, Yoga Kriya & Festivals"}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                    {langKey === "hi"
                      ? "हमारे आधिकारिक यूट्यूब चैनल को सब्सक्राइब करें। यहाँ आपको दैनिक गुरुकुल जीवन, मंत्रोच्चार अभ्यास, और आचार्यों के पावन व्याख्यानों के वीडियो नियमित रूप से मिलेंगे।"
                      : "Subscribe to our official YouTube channel to watch high-definition recordings of daily rituals, classical weapon arts practice, and profound spiritual lectures streamed directly from campus."}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={siteData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <YouTubeIcon className="w-4 h-4 text-white" />
                  {langKey === "hi"
                    ? "चैनल को सब्सक्राइब करें"
                    : "Subscribe on YouTube"}
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>
              </div>
            </div>

            {/* 📸 INSTAGRAM COMMUNITY PLATFORM CARD */}
            <div className="bg-card rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-border/60 shadow-xs group hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center border border-amber-500/5 group-hover:scale-105 transition-transform duration-300">
                  <InstagramIcon className="w-7 h-7 text-[#ee2a7b]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                    {langKey === "hi"
                      ? "इंस्टाग्राम कम्युनिटी"
                      : "Instagram Hub Connect"}
                  </h2>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
                    {langKey === "hi"
                      ? "@shoonya.shikhar.gurukulam"
                      : "@shoonya.shikhar.gurukulam"}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
                    {langKey === "hi"
                      ? "हमारे आधिकारिक इंस्टाग्राम हैंडल को फॉलो करें। यहाँ आपको कहानियों (Stories) और पोस्ट के माध्यम से गुरुकुल परिसर की दैनिक गतिविधियों, यज्ञ अनुष्ठानों और लाइव उत्सवों की तुरंत झलकियाँ मिलेंगी।"
                      : "Follow our verified profile handle to view daily campus snapshots, dynamic real-time stories, short clips of regular baseline operations, and lively updates straight on your wall feed."}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-sm font-semibold rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                  {langKey === "hi"
                    ? "इंस्टाग्राम पर फॉलो करें"
                    : "Follow on Instagram"}
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Integrated Meta Stat Counter Ribbon Bar */}
          <div className="mt-10 p-6 bg-background rounded-2xl border border-border/60 grid grid-cols-3 gap-4 text-center divide-x divide-border/60">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 block">
                {langKey === "hi" ? "दैनिक अपडेट" : "Daily Updates"}
              </span>
              <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                100% Live
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 block">
                {langKey === "hi" ? "कम्युनिटी" : "Network Circle"}
              </span>
              <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-1">
                <Users className="w-3.5 h-3.5 text-primary" />
                Digital Sangha
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 block">
                {langKey === "hi" ? "वैदिक सामग्री" : "Media Content"}
              </span>
              <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-1">
                <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                Pure Quality
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection language="en" />
    </>
  );
}
