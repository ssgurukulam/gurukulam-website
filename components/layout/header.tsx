"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Languages } from "lucide-react";
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
  // { name: "Events", href: "/events" },
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
  // { name: "कार्यक्रम", href: "/events" },
  { name: "प्रशंसापत्र", href: "/testimonials" },
  { name: "प्रवेश", href: "/admissions" },
  { name: "संपर्क", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navItems = language === "en" ? navItemsEn : navItemsHi;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-colors relative">
              <Image
                src="/images/logo.png"
                alt="Shoonya Shikhar Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            {/* Text Branding */}
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground leading-tight">
                Shoonya Shikhar
              </h1>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">
                Gurukulam
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                    )}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors rounded-md block",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Navigation Menu Drawer */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 bg-popover text-popover-foreground border border-border rounded-xl shadow-lg py-2 min-w-48 z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors font-medium",
                              isActive(child.href)
                                ? "text-primary bg-primary/5 font-semibold"
                                : "text-muted-foreground hover:text-primary hover:bg-muted/5",
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

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle Menu Dropdown Trigger */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-foreground/80 hover:text-primary px-3 cursor-pointer rounded-lg hover:bg-primary/5 font-medium transition-colors"
                >
                  <Languages className="w-4 h-4 opacity-80" />
                  <span className="text-sm">{currentLanguageLabel}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="min-w-32 bg-popover text-popover-foreground border-border/50 rounded-xl p-1 shadow-lg z-50"
              >
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "cursor-pointer rounded-lg text-sm px-3 py-2 font-medium focus:bg-primary/5 focus:text-primary transition-colors",
                    language === "en" && "font-bold text-primary bg-primary/5",
                  )}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("hi")}
                  className={cn(
                    "cursor-pointer rounded-lg text-sm px-3 py-2 font-medium focus:bg-primary/5 focus:text-primary transition-colors",
                    language === "hi" && "font-bold text-primary bg-primary/5",
                  )}
                >
                  हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle Button Icon */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground/80 hover:text-primary cursor-pointer rounded-lg hover:bg-primary/5 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            )}

            {/* Mobile Menu Open Switcher */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden cursor-pointer text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Panel Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                              isActive(child.href)
                                ? "text-primary bg-primary/5 font-semibold"
                                : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                          isActive(item.href)
                            ? "text-primary bg-primary/5 font-semibold"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
