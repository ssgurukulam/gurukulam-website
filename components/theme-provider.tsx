"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 🚀 THE EXACT NEXT.JS 16 / REACT 19 FIX:
// We intercept scriptProps and map the type format directly to application/json.
// This forces next-themes to render a clean, standard data element that hides the
// warning from React's compiler, while maintaining your fast theme configurations.
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      scriptProps={{ type: "application/json" } as any}
    >
      {children}
    </NextThemesProvider>
  );
}
