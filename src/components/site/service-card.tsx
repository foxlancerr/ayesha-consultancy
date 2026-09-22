"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { WhatsAppCTA } from "./whatsapp-cta";
import { ServiceIcon } from "./icons";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

/**
 * ServiceCard — single card representing one service. Shows title, short
 * description, audience, "helps with" bullets, and a contextual WhatsApp
 * CTA. Used by both the home page preview and the full /services grid.
 */
export interface ServiceCardProps {
  service: Service;
  /** When true, render a more compact card (used on the home page preview). */
  compact?: boolean;
  className?: string;
}

export function ServiceCard({ service, compact = false, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-5 md:p-6 transition-colors hover:border-foreground/25",
        className,
      )}
    >
      <header className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
          <ServiceIcon name={service.icon} aria-hidden="true" className="size-5" />
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-foreground leading-tight">
            {service.title}
          </h3>
          <p className="text-xs text-muted-foreground">{service.audience}</p>
        </div>
      </header>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.shortDescription}
      </p>

      {!compact && (
        <div className="flex flex-col gap-2 pt-1">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
            What the consultant helps with
          </p>
          <ul className="flex flex-col gap-1.5">
            {service.helpsWith.map((item) => (
              <li key={item} className="text-xs text-muted-foreground leading-snug flex gap-1.5">
                <span className="text-accent mt-0.5" aria-hidden="true">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-2 flex items-center justify-between gap-2">
        <WhatsAppCTA
          serviceTitle={service.title}
          variant="whatsapp"
          size="sm"
        >
          Discuss on WhatsApp
        </WhatsAppCTA>
        {!compact && (
          <Link
            href={`/services#${service.slug}`}
            className="text-xs font-medium text-foreground/80 hover:text-foreground inline-flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors"
          >
            Details
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
