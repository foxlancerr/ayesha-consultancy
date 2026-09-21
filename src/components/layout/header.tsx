"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-[#0F172A] no-print">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white" />
            <span className="text-xl font-bold text-white tracking-tight">TAX CONSULTANT</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link href="/services" className="text-sm font-medium text-white/70 transition-colors hover:text-white">Services</Link>
            <Link href="/documents" className="text-sm font-medium text-white/70 transition-colors hover:text-white">Documents</Link>
            <Link href="/about" className="text-sm font-medium text-white/70 transition-colors hover:text-white">About</Link>
            <Link href="/contact" className="text-sm font-medium text-white/70 transition-colors hover:text-white">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+92XXXXXXXXXX" className="flex items-center gap-2.5 rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/20">
              <Phone className="h-4 w-4" />
              <span>[PHONE NUMBER]</span>
            </a>
            <a
              href="https://wa.me/92XXXXXXXXXX?text=Hello%2C%20I%20need%20tax%20consultation%20services."
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#128C7E] shadow-sm"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <span className="font-semibold text-[#0F172A] text-lg">Menu</span>
          </SheetHeader>
          <MobileNav onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
