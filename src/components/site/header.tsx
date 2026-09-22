"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { WhatsAppCTA } from "./whatsapp-cta";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";
import { buildPhoneHref } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Header — sticky top navigation. Includes the brand, desktop nav, a
 * phone link, a WhatsApp CTA, and a mobile sheet menu.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on route change.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-ring"
          aria-label={`${siteConfig.name} home`}
        >
          <BrandMark />
          <span className="flex flex-col leading-tight">
            <span className="text-[0.95rem] font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
            <span className="hidden sm:block text-[0.7rem] text-muted-foreground font-medium">
              Tax &amp; Compliance Consultancy
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map((item) => {
            const active =
                 pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link rounded-md px-3 py-2 transition-colors",
                  active && "text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="nav">
            <a href={buildPhoneHref()} aria-label={`Call ${siteConfig.contact.phoneDisplay}`}>
              <Phone aria-hidden="true" className="size-4" />
              <span className="hidden lg:inline">{siteConfig.contact.phoneDisplay}</span>
            </a>
          </Button>
          <WhatsAppCTA size="nav">WhatsApp</WhatsAppCTA>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm p-0 border-l border-border bg-background"
          >
            <SheetTitle className="sr-only">Site navigation</SheetTitle>
            <div className="flex h-16 items-center justify-between border-b border-border px-5">
              <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
                <BrandMark />
                <span className="text-[0.95rem] font-semibold tracking-tight">
                  {siteConfig.name}
                </span>
              </Link>
             
            </div>
            <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
              {siteConfig.nav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground",
                        active && "bg-muted text-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
            <div className="border-t border-border p-4 flex flex-col gap-2">
              <WhatsAppCTA size="lg" className="w-full">
                WhatsApp Consultation
              </WhatsAppCTA>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a href={buildPhoneHref()} aria-label={`Call ${siteConfig.contact.phoneDisplay}`}>
                  <Phone aria-hidden="true" />
                  Call {siteConfig.contact.phoneDisplay}
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

/** Brand mark — small monogram used in the header and footer. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground",
        "shadow-sm ring-1 ring-inset ring-white/10",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5"
      >
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    </span>
  );
}
