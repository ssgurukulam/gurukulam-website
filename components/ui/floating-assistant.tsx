"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

// Custom Lotus Icon
function LotusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22c-4-3-8-7.5-8-12a8 8 0 0 1 16 0c0 4.5-4 9-8 12z" />
      <path d="M12 22c2-1.5 4-4.5 4-8a4 4 0 0 0-8 0c0 3.5 2 6.5 4 8z" />
      <path d="M12 6v4" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

// WhatsApp Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// 🚀 THE FIX: Explicitly type the lookup keys so TypeScript knows it's a safe Record map
const tooltips: Record<string, string> = {
  en: "Ask About Admissions",
  hi: "प्रवेश संबंधी जानकारी लें",
};

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const { language: clientLang } = useLanguage();

  // Normalize key lookup variable cleanly
  const language = clientLang || "en";
  const isHi = language === "hi";

  const whatsappNumber = "918094247452";

  const whatsappMessage = encodeURIComponent(
    isHi
      ? "नमस्ते, मैं शून्य शिखर गुरुकुलम के बारे में अधिक जानकारी प्राप्त करना चाहता हूँ।"
      : "Namaste, I would like to know more about the Gurukulam.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const phoneNumber = "+91 80942 47452";
  const emailAddress = "shoonyashikhargurukulam@gmail.com";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-80 rounded-2xl bg-background border border-border shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-saffron/20 to-gold/20 px-6 py-5 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center">
                    <LotusIcon className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">
                      {isHi ? "नमस्ते" : "Namaste"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isHi
                        ? "शून्य शिखर गुरुकुलम में आपका स्वागत है"
                        : "Welcome to SS Gurukulam"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 cursor-pointer"
                  aria-label={isHi ? "सहायक बंद करें" : "Close assistant"}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {isHi
                  ? "हम आपकी शिक्षण यात्रा में मार्गदर्शन के लिए उपलब्ध हैं। संपर्क करने का माध्यम चुनें।"
                  : "We are here to guide you on your learning journey. Choose how you'd like to connect with us."}
              </p>

              {/* Communication Options */}
              <div className="space-y-3">
                {/* WhatsApp - Primary */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 hover:bg-green-100 dark:hover:bg-green-950/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground block">
                      {isHi ? "गुरुकुल से चैट करें" : "Talk with Gurukul"}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {isHi ? "व्हाट्सएप पर संदेश भेजें" : "Chat on WhatsApp"}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                {/* Call */}
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-saffron" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground block">
                      {isHi ? "हमें कॉल करें" : "Call Us"}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {phoneNumber}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground block">
                      {isHi ? "हमें ईमेल करें" : "Email Us"}
                    </span>
                    <span className="text-sm text-muted-foreground truncate max-w-[150px] sm:max-w-none">
                      {emailAddress}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-muted/30 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                {isHi
                  ? "प्रतिक्रिया समय: 24 घंटे के भीतर"
                  : "Response time: Within 24 hours"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-saffron to-saffron/80 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={
          isOpen
            ? isHi
              ? "सहायक बंद करें"
              : "Close assistant"
            : tooltips[language] || tooltips.en
        }
      >
        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-saffron"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Icon Toggle */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="lotus"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <LotusIcon className="w-7 h-7 text-white" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center border-2 border-saffron">
                <WhatsAppIcon className="w-2.5 h-2.5 text-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🚀 THE COMPILE FIX: Fall back to English tooltips if the dictionary encounters an unmatched string parameter query */}
        {!isOpen && (
          <div className="absolute right-full mr-4 px-3 py-2 bg-foreground text-background text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {tooltips[language] || tooltips.en}
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
          </div>
        )}
      </motion.button>
    </div>
  );
}
