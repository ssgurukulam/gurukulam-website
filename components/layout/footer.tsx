import Link from 'next/link'
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Teachers', href: '/teachers' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
]

const courses = [
  { name: 'Yoga & Pranayama', href: '/courses#yoga' },
  { name: 'Meditation', href: '/courses#meditation' },
  { name: 'Sanskrit Studies', href: '/courses#sanskrit' },
  { name: 'Martial Arts', href: '/courses#martial-arts' },
  { name: 'Computer Education', href: '/courses#computer-education' },
  { name: 'Spiritual Learning', href: '/courses#spiritual-learning' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Donation CTA */}
      <div className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Support Our Mission
              </h3>
              <p className="text-muted-foreground max-w-md">
                Your generous contribution helps us preserve ancient wisdom and provide quality education to deserving students.
              </p>
            </div>
            <Link href="/donate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Heart className="w-5 h-5" />
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                <span className="text-primary text-xl font-bold">ॐ</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground leading-tight">Shoonya Shikhar</h2>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Gurukulam</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A traditional Indian Gurukulam dedicated to holistic education, where ancient wisdom meets modern learning in a serene spiritual environment.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/shoonya.shikhar.gurukulam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/shoonya.shikhar.gurukulam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Oxford School ke Saamne, Keshav Pura,<br />
                  Hindaun, Rajasthan 322230
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918094247452" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 80942 47452
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:shoonyashikhargurukulam@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                  shoonyashikhargurukulam@gmail.com
                </a>
              </li>
            </ul>

            {/* Map Embed */}
            <a 
              href="https://share.google/5B91roLY32vaQLskI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 block rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="relative h-36">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.5!2d76.8317!3d26.7308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKeshav+Pura%2C+Hindaun%2C+Rajasthan+322230!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="144"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none"
                  title="Shoonya Shikhar Gurukulam Location"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-colors flex items-end justify-center pb-2">
                  <span className="bg-background/90 px-3 py-1 rounded-full text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    Click to open in Google Maps
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Shoonya Shikhar Gurukulam. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
