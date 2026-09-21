"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { MobileNav } from "./mobile-nav";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#0E2944] py-2.5 text-xs text-white/70 no-print">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+923186652528" className="info-bar-link flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              <span>+92 318 665 2528</span>
            </a>
            <a href="https://wa.me/923186652528" className="info-bar-link flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15803D]" />
              <span>Islamabad</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Peshawar</span>
            </span>
            <span>Remote across Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white no-print">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#0E2944]" />
            <span className="text-xl font-bold text-[#0E2944] tracking-tight">Ayesha Consultancy</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/services" className="text-sm font-medium text-[#334155] transition-colors hover:text-[#0E2944]">Services</Link>
            <Link href="/documents" className="text-sm font-medium text-[#334155] transition-colors hover:text-[#0E2944]">Documents</Link>
            <Link href="/about" className="text-sm font-medium text-[#334155] transition-colors hover:text-[#0E2944]">About</Link>
            <Link href="/contact" className="text-sm font-medium text-[#334155] transition-colors hover:text-[#0E2944]">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+923186652528" className="flex items-center gap-2 rounded-lg bg-[#F1F5F9] px-4 py-2.5 text-sm font-medium text-[#0E2944] transition-colors hover:bg-[#E2E8F0]">
              <Phone className="h-4 w-4" />
              <span>+92 318 665 2528</span>
            </a>
            <a
              href={buildWhatsAppUrl("Hello, I need tax consultation services.")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#15803D] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden rounded-lg p-2 text-[#334155] hover:bg-[#F1F5F9]"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <MobileNav onNavigate={() => setOpen(false)} />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
