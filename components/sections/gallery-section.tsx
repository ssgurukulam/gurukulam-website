"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, X, Maximize2 } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import gallery from "@/content/gallery.json";

interface GallerySectionProps {
  language: string;
}

interface MediaItem {
  id: string;
  type: string;
  src: string;
  title: string;
}

export function GallerySection({ language }: GallerySectionProps) {
  const langKey = (language === "hi" ? "hi" : "en") as "en" | "hi";
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  // Flatten out the core featured layout matrix elements array
  const homepageMedia: MediaItem[] = gallery.categories
    .flatMap((cat) =>
      cat.images.map((item) => ({
        id: item.id,
        type: item.type || "image",
        src: item.src,
        title: item[langKey] || "Gurukulam Media",
      })),
    )
    .slice(0, 6);

  const gridSpans = [
    "col-span-2 row-span-2 h-full min-h-[340px] md:min-h-auto",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2 h-full",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <Section>
      <SectionHeader
        badge={langKey === "hi" ? "गुरुकुल परिसर" : "Campus Life"}
        title={
          langKey === "hi" ? "गुरुकुल की एक झलक" : "Glimpses of Our Gurukulam"
        }
        subtitle={
          langKey === "hi"
            ? "शून्य शिखर गुरुकुलम् के शांत वातावरण, पावन ऊर्जा और विविध गतिविधियों का साक्षात् अनुभव करें।"
            : "Experience the serene beauty and vibrant activities of life at Shoonya Shikhar Gurukulam."
        }
      />

      <FadeIn>
        {/* Core Bento Grid Configuration Container Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {homepageMedia.map((item, index) => {
            const layoutSpan = gridSpans[index] || "col-span-1 row-span-1";
            const isVideo = item.type === "video";

            const displayImageSrc = isVideo
              ? item.src.replace(/\.(mp4|webm|ogg)$/i, ".jpg")
              : item.src;

            return (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)} // 👈 Opens securely on the same view tab line instantly
                className={`${layoutSpan} rounded-3xl overflow-hidden bg-muted relative group cursor-pointer border border-border/60 shadow-xs hover:shadow-md transition-all duration-300`}
              >
                <Image
                  src={displayImageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                />

                {/* Video Play Indicators versus Hover Light Overlays */}
                {isVideo ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors z-10">
                    <div className="w-12 h-12 bg-background/95 backdrop-blur-md text-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center z-10">
                    <div className="w-10 h-10 bg-background/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 scale-70 group-hover:scale-100 transition-all duration-300 border border-border">
                      <Maximize2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                )}

                {/* Interactive Caption Base Tray Layout */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex items-end z-20">
                  <div className="w-full flex items-center justify-between gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-semibold tracking-wide truncate max-w-[75%]">
                      {item.title}
                    </p>

                    {/* 🔗 Accelerated Anchor Link: 
                        Allows power users to bypass internal states if they right-click/middle-click to open in a new link asset route, safely appending hashes!
                    */}
                    <Link
                      href={`/gallery#${item.id}`}
                      onClick={(e) => e.stopPropagation()} // Halts bubbling loops from misfiring modal toggles
                      className="text-white/60 hover:text-primary transition-colors p-1"
                      title="Inspect element file link"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>

      {/* Main Bottom Operational Gallery Access Button Element */}
      <div className="mt-12 text-center">
        <Link href="/gallery">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 hover:bg-primary/5 cursor-pointer rounded-xl font-semibold text-sm"
          >
            {langKey === "hi" ? "पूर्ण दीर्घा देखें" : "View Full Gallery"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* LIGHTBOX LAYOUT: Instant View Engine on the same active tab window instance */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-lg p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveMedia(null)}
        >
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-xl bg-card border border-border/60 hover:bg-accent text-foreground transition-colors cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-border/40"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            )}

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-6">
              <p className="text-white text-sm font-medium tracking-wide">
                {activeMedia.title}
              </p>

              {/* Context Action Button: Direct navigation redirect to open the file inside the dedicated route sheet */}
              <Link href={`/gallery#${activeMedia.id}`}>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-primary transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 font-medium">
                  Jump to File View
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
