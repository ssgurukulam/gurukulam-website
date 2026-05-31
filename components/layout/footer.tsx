"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteData from "@/content/site.json";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Teachers", href: "/teachers" },
  { name: "Admissions", href: "/admissions" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
];

const courses = [
  { name: "Meditation", href: "/curriculum#meditation" },
  { name: "Martial Arts", href: "/curriculum#martial-arts" },
  { name: "Computer Education", href: "/curriculum#computer-education" },
  { name: "Spiritual Learning", href: "/curriculum#spiritual-learning" },
];

export function Footer() {
  const currentYear = new Date().getFullYear().toString();
  const showDonationCTA = false;

  // Exact brand SVG paths configured to match official logo parameters cleanly
  const socialChannels = [
    {
      name: "Facebook",
      href: siteData.social.facebook,
      hoverClass: "hover:bg-[#1877F2] hover:text-white",
      svg: (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: siteData.social.instagram,
      hoverClass:
        "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white",
      svg: (
        <svg
          className="w-4 h-4 stroke-current fill-none"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: siteData.contact.whatsapp,
      hoverClass: "hover:bg-[#25D366] hover:text-white",
      svg: (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: siteData.social.youtube,
      hoverClass: "hover:bg-[#FF0000] hover:text-white",
      svg: (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-card border-t border-border/60">
      {/* Donation CTA */}
      {showDonationCTA && (
        <div className="bg-primary/5 border-b border-border/40">
          <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left space-y-1">
                <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                  Support Our Mission
                </h3>
                <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                  Your generous contribution helps us preserve ancient wisdom
                  and provide quality education to deserving students.
                </p>
              </div>
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 cursor-pointer shadow-xs transition-all"
                >
                  <Heart className="w-5 h-5" />
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Column Grid */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About & Social Media Channels */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors relative select-none">
                <Image
                  src="/images/logo.png"
                  alt="Shoonya Shikhar Logo"
                  width={44}
                  height={44}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-base font-bold text-foreground leading-tight tracking-tight">
                  {siteData.name.en}
                </h1>
                <p className="text-[10px] text-primary tracking-widest uppercase font-semibold">
                  Gurukulam
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {siteData.description.en}
            </p>

            {/* Rendered SVG Channels Grid */}
            <div className="flex gap-2.5 pt-2">
              {socialChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={channel.name}
                  className={`w-9 h-9 rounded-xl bg-muted/80 flex items-center justify-center text-muted-foreground transition-all duration-300 shadow-xs ${channel.hoverClass}`}
                >
                  {channel.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Curriculum Anchors */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">
              Our Curriculum
            </h3>
            <ul className="space-y-3">
              {courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Maps Trigger Tile */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <a
                  href={siteData.location.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed"
                >
                  {siteData.location.address.en},
                  <br />
                  {siteData.location.city.en}, {siteData.location.state.en} -{" "}
                  {siteData.location.pincode}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${siteData.contact.phone.replace(/\s+/g, "")}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm truncate break-all font-medium"
                >
                  {siteData.contact.email}
                </a>
              </li>
            </ul>

            {/* Static Clean Maps Image Thumbnail */}
            <a
              href={siteData.location.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-2xl overflow-hidden border border-border/60 hover:border-primary/40 transition-all duration-300 group bg-muted relative aspect-[16/9] shadow-xs hover:shadow-md cursor-pointer select-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80"
                alt="Hindaun Rajasthan Location Preview"
                fill
                sizes="280px"
                className="object-cover opacity-75 group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-2">
                <span className="bg-background/95 backdrop-blur-xs px-2.5 py-1.5 rounded-xl text-[11px] font-semibold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1.5 shadow-xs border border-border/20">
                  <MapPin className="w-3 h-3 text-primary" />
                  Open Google Maps
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs text-center sm:text-left">
              &copy; {currentYear} {siteData.name.en}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
