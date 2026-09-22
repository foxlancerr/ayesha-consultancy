import * as React from "react";
import { MapPin, ShieldCheck, Phone } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { siteConfig } from "@/lib/site";

/**
 * IslamabadPeshawar — a clear summary of where the consultancy operates,
 * including in-person and remote consultation options.
 */
export function IslamabadPeshawar() {
  return (
    <section
      aria-labelledby="locations-title"
      className="section-padding surface-muted border-y border-border"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Where we operate"
          as="h2"
          title="Islamabad and Peshawar in person. The rest of Pakistan, remotely."
          description="If you can travel to either city, in-person consultations are available. If you cannot, every engagement can be conducted remotely by phone, WhatsApp, or video call."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {siteConfig.offices.map((office) => (
            <article
              key={office.city}
              className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 md:p-6"
            >
              <div className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-5 text-accent" />
                <h3 className="text-base font-semibold text-foreground">{office.city}</h3>
              </div>
              <address className="not-italic text-sm text-muted-foreground flex flex-col gap-1 leading-relaxed">
                <span>{office.addressLine1}</span>
                <span>{office.addressLine2}</span>
              </address>
              <p className="text-xs text-muted-foreground mt-1">{office.hours}</p>
              <p className="text-xs text-foreground/80 mt-1">
                In-person consultations available by appointment.
              </p>
            </article>
          ))}

          <article className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 md:p-6">
            <div className="flex items-center gap-2">
              <Phone aria-hidden="true" className="size-5 text-accent" />
              <h3 className="text-base font-semibold text-foreground">Pakistan (remote)</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every service is available remotely — by phone, WhatsApp, or video
              call. Documents can be shared securely without needing to travel.
            </p>
            <p className="text-xs text-foreground/80 mt-1">
              Lahore · Karachi · Rawalpindi · Multan · Faisalabad · Quetta ·
              Peshawar · and any other city in Pakistan.
            </p>
          </article>
        </div>

        <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed flex items-start gap-2">
          <ShieldCheck aria-hidden="true" className="size-4 mt-0.5 text-accent shrink-0" />
          <span>
            Office addresses are placeholders pending confirmation. The
            consultant will share the exact location when your appointment is
            confirmed.
          </span>
        </p>
      </Container>
    </section>
  );
}
