import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import gallery from "@/content/gallery.json";

interface GallerySectionProps {
  language: string;
}

export function GallerySection({ language }: GallerySectionProps) {
  const langKey = (language === "hi" ? "hi" : "en") as "en" | "hi";

  // Flatten all media items from your JSON categories down into one list
  const homepageMedia = gallery.categories
    .flatMap((cat) =>
      cat.images.map((item) => ({
        id: item.id,
        type: item.type || "image",
        src: item.src,
        title: item[langKey],
      })),
    )
    .slice(0, 6); // Grab exactly the top 6 featured assets for your bento grid layout

  // Define static bento grid spans matching your structural aspect preferences
  const gridSpans = [
    "col-span-2 row-span-2", // Item 1 (Big featured box)
    "col-span-1 row-span-1", // Item 2
    "col-span-1 row-span-1", // Item 3
    "col-span-1 row-span-2", // Item 4 (Tall vertical box)
    "col-span-1 row-span-1", // Item 5
    "col-span-1 row-span-1", // Item 6
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
        {/* Bento Grid Framework Layout Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {homepageMedia.map((item, index) => {
            const layoutSpan = gridSpans[index] || "col-span-1 row-span-1";
            const isVideo = item.type === "video";

            // Generate clean static image source from target video files or use the default image link
            const displayImageSrc = isVideo
              ? item.src.replace(".mp4", ".jpg")
              : item.src;

            return (
              <Link
                href="/gallery"
                key={item.id}
                className={`${layoutSpan} rounded-2xl overflow-hidden bg-muted relative group cursor-pointer border border-border/40 shadow-sm`}
              >
                {/* Image Layout Component targeting Cloudinary */}
                <Image
                  src={displayImageSrc}
                  alt={item.title || "Gurukulam Media"}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Interactive Dynamic Overlays based on Media Flag Type */}
                {isVideo ? (
                  /* Video Layout Indicator Element overlay centering */
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors z-10">
                    <div className="w-12 h-12 bg-background/90 backdrop-blur-sm text-primary rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>
                ) : (
                  /* Standard Image Hover Shadow Layer */
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                )}

                {/* Universal Caption Overlay appearing smoothly on Desktop hover interaction patterns */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                  <span className="text-white text-xs font-medium tracking-wide truncate max-w-full">
                    {item.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </FadeIn>

      <div className="mt-12 text-center">
        <Link href="/gallery">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 hover:bg-primary/5 cursor-pointer"
          >
            {langKey === "hi" ? "पूर्ण दीर्घा देखें" : "View Full Gallery"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
