"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: string;
}) {
  const [language, setLanguageState] = useState(initialLanguage);

  // Sync state changes with document cookies so server components can read it
  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    // Refresh the router state to force Next.js server components to re-render in the new language
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
