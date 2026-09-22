"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { buildWhatsAppUrl, buildServiceMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface WhatsAppCTAProps
  extends Omit<ButtonProps, "variant" | "asChild" | "onClick"> {
  /** Optional service title — when provided, the message becomes service-specific. */
  serviceTitle?: string;
  /** Optional city to pre-fill in the message. */
  city?: string;
  /** Optional fully custom message — overrides service/city logic. */
  message?: string;
  /** Visual variant of the button. Defaults to `whatsapp`. */
  variant?: ButtonProps["variant"];
  /** Whether to render as a Next.js Link (children must be a single Link element). */
  asChild?: boolean;
  /** Optional override for the WhatsApp number. */
  number?: string;
}

/**
 * WhatsAppCTA — renders a Button that opens WhatsApp with a pre-filled,
 * contextual message. Used across hero, service cards, contact card, and
 * the final CTA section so every WhatsApp touchpoint behaves consistently.
 */
export function WhatsAppCTA({
  serviceTitle,
  city,
  message,
  variant = "whatsapp",
  children,
  className,
  number,
  asChild = false,
  ...rest
}: WhatsAppCTAProps) {
  const finalMessage =
    message ?? buildServiceMessage(serviceTitle ?? "", city);

  // When asChild is set, the Slot receives the href via an anchor child.
  if (asChild) {
    return (
      <Button
        asChild
        variant={variant}
        className={className}
        {...rest}
      >
        <a
          href={buildWhatsAppUrl(finalMessage, number ?? siteConfig.contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp consultation${serviceTitle ? ` about ${serviceTitle}` : ""}`}
        >
          <MessageCircle aria-hidden="true" />
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.open(
            buildWhatsAppUrl(finalMessage, number ?? siteConfig.contact.whatsapp),
            "_blank",
            "noopener,noreferrer",
          );
        }
      }}
      {...rest}
    >
      <MessageCircle aria-hidden="true" />
      {children}
    </Button>
  );
}

/** Convenience wrapper for the floating mobile WhatsApp button. */
export function FloatingWhatsApp() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!isMobile) return null;

  const message = buildServiceMessage();

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the consultant on WhatsApp"
      className={cn(
        "fixed bottom-4 right-4 z-50 inline-flex items-center justify-center",
        "size-14 rounded-full bg-accent text-accent-foreground shadow-lg",
        "ring-2 ring-white/40 hover:bg-accent/90 active:bg-accent",
        "transition-colors",
      )}
    >
      <MessageCircle className="size-7" aria-hidden="true" />
      <span className="sr-only">WhatsApp Consultation</span>
    </a>
  );
}
