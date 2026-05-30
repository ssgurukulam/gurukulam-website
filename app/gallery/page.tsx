// app/gallery/page.tsx (Server Component)
import { Metadata } from "next";
import { cookies } from "next/headers";
import GalleryClientPage from "./GalleryClientPage";

export const metadata: Metadata = {
  title: "Photo Gallery | Shoonya Shikhar Gurukulam",
  description:
    "Glimpses of life, learning, and celebrations at Shoonya Shikhar Gurukulam.",
};

export default async function GalleryPage() {
  const cookieStore = await cookies();
  const language = cookieStore.get("lang")?.value || "en";

  return <GalleryClientPage language={language} />;
}
