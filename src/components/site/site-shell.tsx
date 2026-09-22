import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingWhatsApp } from "./whatsapp-cta";

/**
 * SiteShell — shared page wrapper used by every route. Provides the sticky
 * header, the floating mobile WhatsApp button, and the sticky footer.
 *
 * `min-h-screen flex flex-col` on the wrapper plus `mt-auto` on the footer
 * gives the sticky-footer behaviour required by the design system: the
 * footer sticks to the bottom of the viewport on short pages and is pushed
 * down naturally on long pages.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main id="main" className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
