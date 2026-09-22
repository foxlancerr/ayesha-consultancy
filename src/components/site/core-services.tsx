import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { ServiceCard } from "./service-card";
import { Button } from "./button";
import { services } from "@/data/services";

/**
 * CoreServices — a compact preview of the service catalogue on the home
 * page. Shows the first 6 services and links to /services for the full
 * list grouped by category.
 */
export function CoreServices() {
  const preview = services.slice(0, 6);

  return (
    <section
      aria-labelledby="core-services-title"
      className="section-padding surface-muted border-y border-border"
    >
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Core services"
            as="h2"
            title="Tax, filer, and FBR compliance services for individuals and businesses."
            description="A focused set of services covering the most common personal and business tax needs. Each engagement is handled directly by the consultant, with a written summary of what was filed."
          />
          <Button asChild variant="outline" size="default" className="self-start md:self-end">
            <Link href="/services">
              View all services
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {preview.map((service) => (
            <li key={service.slug} id={service.slug} className="h-full scroll-mt-24">
              <ServiceCard service={service} compact />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
