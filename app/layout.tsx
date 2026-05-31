import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingAssistant } from "@/components/ui/floating-assistant";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shoonya Shikhar Gurukulam | Ancient Wisdom, Modern Learning",
    template: "%s | Shoonya Shikhar Gurukulam",
  },
  description:
    "A traditional Indian Gurukulam dedicated to holistic education through Yoga, Meditation, Martial Arts, Sanskrit, and Modern Sciences. Where ancient wisdom meets modern learning.",
  keywords: [
    "gurukulam",
    "yoga",
    "meditation",
    "sanskrit",
    "traditional education",
    "indian culture",
    "spiritual learning",
    "martial arts",
    "vedic studies",
  ],
  authors: [{ name: "Shoonya Shikhar Gurukulam" }],
  creator: "Shoonya Shikhar Gurukulam",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ssgurukulam.com",
    siteName: "Shoonya Shikhar Gurukulam",
    title: "Shoonya Shikhar Gurukulam | Ancient Wisdom, Modern Learning",
    description:
      "A traditional Indian Gurukulam dedicated to holistic education through Yoga, Meditation, Martial Arts, Sanskrit, and Modern Sciences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoonya Shikhar Gurukulam | Ancient Wisdom, Modern Learning",
    description:
      "A traditional Indian Gurukulam dedicated to holistic education.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#2d2a24" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${sourceSans.variable} font-sans antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingAssistant />
        </ThemeProvider>
        {process.env.NODE_ENV === "production"}
      </body>
    </html>
  );
}
