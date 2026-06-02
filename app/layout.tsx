import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingAssistant } from "@/components/ui/floating-assistant";
import "./globals.css";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/components/language-provider";

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
    "ssgurukulam",
    "gurukulam",
    "shoonya shikhar",
    "hindaun city gurukulam",
    "meditation",
    "traditional education",
    "indian culture",
    "spiritual learning",
    "martial arts",
    "pushpendra bainsla",
    "sushil jangid",
  ],
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read the lang parameter server-side to prevent hydration flickering on initial load
  const cookieStore = await cookies();
  const initialLanguage = cookieStore.get("lang")?.value || "en";

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${sourceSans.variable} font-sans antialiased bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider initialLanguage={initialLanguage}>
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingAssistant />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
