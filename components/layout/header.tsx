"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Languages,
  FileText,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItemsEn = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Gurukulam", href: "/about" },
      { name: "Vision & Mission", href: "/vision-mission" },
    ],
  },
  { name: "Curriculum", href: "/curriculum" },
  { name: "Teachers", href: "/teachers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

const navItemsHi = [
  { name: "होम", href: "/" },
  {
    name: "हमारे बारे में",
    href: "/about",
    children: [
      { name: "गुरुकुल के बारे में", href: "/about" },
      { name: "दृष्टि और लक्ष्य", href: "/vision-mission" },
    ],
  },
  { name: "पाठ्यक्रम", href: "/curriculum" },
  { name: "शिक्षक", href: "/teachers" },
  { name: "गैलरी", href: "/gallery" },
  { name: "प्रशंसापत्र", href: "/testimonials" },
  { name: "प्रवेश", href: "/admissions" },
  { name: "संपर्क", href: "/contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const isHi = language === "hi";

  const navItems = isHi ? navItemsHi : navItemsEn;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const currentLanguageLabel = language === "en" ? "English" : "हिंदी";

  return (
    <div className="w-full bg-background flex flex-col relative">
      {/* 🏛️ TOP MAIN BANNER */}
      <div className="w-full bg-card border-b border-border/50 py-4 sm:py-5 relative z-30">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between gap-4">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 sm:gap-5 group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border-2 border-primary/20 shrink-0 relative">
              <Image
                src="/images/logo.png"
                alt="Shoonya Shikhar Emblem Logo"
                width={80}
                height={80}
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-1 w-full text-center md:text-left justify-items-center md:justify-items-start">
              <h1 className="text-lg sm:text-3xl font-bold tracking-tight text-foreground font-cormorant leading-none text-center md:text-left">
                {isHi ? "शून्य शिखर गुरुकुलम्" : "Shoonya Shikhar Gurukulam"}
              </h1>

              {/* 🎯 Centered Sub-Branding Target Ribbon Text Block */}
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary font-sans text-center md:text-left mt-1.5 sm:mt-2 w-full">
                {isHi
                  ? '"विद्या, वीरता और विवेक का गुरुकुल"'
                  : "Gurukul of knowledge, bravery and wisdom"}
              </p>

              <p className="text-xs text-muted-foreground leading-relaxed hidden md:block max-w-xl text-center md:text-left mt-1">
                {isHi
                  ? "प्रत्येक विद्यार्थी का शारीरिक, मानसिक, बौद्धिक एवं आध्यात्मिक रूप से सशक्तिकरण |"
                  : "Empowerment of every student physically, mentally, intellectually and spiritually."}
              </p>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link href="/admissions">
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-xs gap-1.5 px-3 sm:px-6 rounded-xl transition-all cursor-pointer text-[11px] sm:text-sm h-9 sm:h-11"
              >
                <FileText className="w-4 h-4 hidden sm:inline" />
                {isHi ? "प्रवेश जानकारी" : "Admission Enquiry"}
              </Button>
            </Link>

            {/* Desktop Only Side-Tray Buttons */}
            <div className="hidden sm:flex items-center gap-1.5 border-l border-border pl-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1.5 text-foreground/80 hover:text-primary px-3 cursor-pointer rounded-lg hover:bg-primary/5 font-medium transition-colors"
                  >
                    <Languages className="w-4 h-4 opacity-80" />
                    <span className="text-xs font-semibold">
                      {currentLanguageLabel}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-popover border-border/50 rounded-xl p-1 shadow-lg z-50"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "cursor-pointer rounded-lg text-xs font-semibold hover:text-primary hover:bg-primary/5 transition-colors",
                      language === "en" && "text-primary bg-primary/5",
                    )}
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("hi")}
                    className={cn(
                      "cursor-pointer rounded-lg text-xs font-semibold hover:text-primary hover:bg-primary/5 transition-colors",
                      language === "hi" && "text-primary bg-primary/5",
                    )}
                  >
                    हिंदी
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🧭 NAVIGATION ROW 
    🚀 FIX: Added "bg-muted/40 backdrop-blur-md" for a highly aesthetic dark/light integrated row coloring layer */}
      <div className="w-full bg-muted/40 backdrop-blur-md border-b border-border/40 relative z-20 sticky top-0 bg-opacity-95">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center h-14">
          {/* Desktop Horizontal View Links */}
          <div className="hidden lg:flex items-center justify-center gap-6 w-full">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-2 py-1.5 text-sm font-semibold transition-all rounded-lg cursor-pointer tracking-wide hover:text-primary hover:bg-primary/5",
                      isActive(item.href)
                        ? "text-primary bg-primary/5 px-3"
                        : "text-foreground/80",
                    )}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-semibold transition-colors rounded-lg block tracking-wide hover:text-primary hover:bg-primary/5",
                      isActive(item.href)
                        ? "text-primary bg-primary/5 px-3 py-1.5"
                        : "text-foreground/80 px-2 py-1.5",
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 bg-popover text-popover-foreground border border-border/60 rounded-xl shadow-lg py-1.5 min-w-48 z-50 p-1"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-xs font-semibold transition-colors rounded-lg text-center hover:text-primary hover:bg-primary/5",
                              isActive(child.href)
                                ? "text-primary bg-primary/5 font-semibold"
                                : "text-muted-foreground",
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Controls 
              🚀 MOBILE SELECTOR FIX: Integrated matching dropdown-menu action trigger directly into the sticky action strip for perfect phone viewing */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {isHi ? "गुरुकुल नेविगेशन" : "Gurukulam Navigation"}
            </span>

            <div className="flex items-center gap-1">
              {/* Mobile Adaptive Language Dropdown Trigger */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-foreground/70 hover:text-primary"
                  >
                    <Languages className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-popover border-border/50 rounded-xl p-1 shadow-lg z-50"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "cursor-pointer rounded-lg text-xs font-semibold hover:text-primary hover:bg-primary/5",
                      language === "en" && "text-primary bg-primary/5",
                    )}
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("hi")}
                    className={cn(
                      "cursor-pointer rounded-lg text-xs font-semibold hover:text-primary hover:bg-primary/5",
                      language === "hi" && "text-primary bg-primary/5",
                    )}
                  >
                    हिंदी
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-foreground/70 hover:text-primary"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/80 h-9 w-9 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border/60 relative z-40 overflow-hidden"
          >
            <div className="w-full px-4 py-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="col-span-1">
                  {item.children ? (
                    item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-xs font-bold transition-colors text-center hover:text-primary hover:bg-primary/5",
                          isActive(child.href)
                            ? "text-primary bg-primary/5"
                            : "text-foreground/70",
                        )}
                      >
                        {child.name}
                      </Link>
                    ))
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-xs font-bold transition-colors text-center hover:text-primary hover:bg-primary/5",
                        isActive(item.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="col-span-2 h-px bg-border/60 my-2" />
              <div className="col-span-2 flex items-center justify-between px-3">
                <span className="text-xs font-bold text-muted-foreground">
                  {isHi ? "सक्रिय भाषा:" : "Active Language:"}
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={language === "hi" ? "default" : "outline"}
                    onClick={() => setLanguage("hi")}
                    className="h-7 text-[10px] font-bold rounded-md px-3 cursor-pointer"
                  >
                    हिंदी
                  </Button>
                  <Button
                    size="sm"
                    variant={language === "en" ? "default" : "outline"}
                    onClick={() => setLanguage("en")}
                    className="h-7 text-[10px] font-bold rounded-md px-3 cursor-pointer"
                  >
                    English
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
