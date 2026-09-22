import * as React from "react";
import { ShieldCheck, MapPin, Clock, Lock } from "lucide-react";
import { Container } from "./container";

/**
 * TrustStrip — a compact row of trust signals placed directly under the hero.
 * Kept deliberately factual: no invented numbers, no fabricated testimonials.
 */
const trustItems = [
  {
    icon: ShieldCheck,
    title: "Qualified tax professional",
    description:
      "Engagements handled directly by the consultant preparing your return.",
  },
  {
    icon: MapPin,
    title: "Islamabad & Peshawar",
    description:
      "In-person consultations in both cities, and remote support across Pakistan.",
  },
  {
    icon: Lock,
    title: "Strict confidentiality",
    description:
      "Your information is used only for the work you have authorised.",
  },
  {
    icon: Clock,
    title: "Clear response times",
    description:
      "WhatsApp replies within business hours; clear scope before any work begins.",
  },
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="At a glance"
      className="border-b border-border bg-background"
    >
      <Container className="py-6 md:py-7">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
          {trustItems.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
                <item.icon aria-hidden="true" className="size-4.5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground leading-tight">
                  {item.title}
                </span>
                <span className="text-xs sm:text-[0.8rem] text-foreground/70 leading-snug mt-0.5">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
