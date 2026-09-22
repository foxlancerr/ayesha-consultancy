import * as React from "react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { ServiceCard } from "./service-card";
import { services, serviceCategories, type ServiceCategory } from "@/data/services";

/**
 * ServiceGrid — the full /services page. Groups every service by category
 * (Individual, Business, FBR & Compliance, Other) and renders each card
 * with the full "helps with" detail visible.
 */
export function ServiceGrid() {
  return (
    <div className="flex flex-col gap-12 md:gap-14">
      {serviceCategories.map((category) => (
        <ServiceCategoryBlock key={category} category={category} />
      ))}
    </div>
  );
}

function ServiceCategoryBlock({ category }: { category: ServiceCategory }) {
  const items = services.filter((s) => s.category === category);
  if (items.length === 0) return null;

  // Anchor slug derived from category (used for in-page navigation).
  const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section
      id={slug}
      aria-labelledby={`${slug}-title`}
      className="flex flex-col gap-6 scroll-mt-24"
    >
      <header className="flex flex-col gap-2">
        <span className="eyebrow">{category}</span>
        <h2 id={`${slug}-title`} className="text-xl sm:text-2xl font-semibold text-foreground">
          {categoryHeading(category)}
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          {categoryDescription(category)}
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
        {items.map((service) => (
          <li key={service.slug} id={service.slug} className="h-full scroll-mt-24">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function categoryHeading(category: ServiceCategory): string {
  switch (category) {
    case "Individual Services":
      return "Individual tax services";
    case "Business Services":
      return "Business tax services";
    case "FBR & Compliance":
      return "FBR registration, notices, and audit";
    case "Other Confirmed Services":
      return "Additional confirmed services";
  }
}

function categoryDescription(category: ServiceCategory): string {
  switch (category) {
    case "Individual Services":
      return "Income tax returns, filer status, wealth statements, and certificates for salaried individuals, pensioners, and freelancers.";
    case "Business Services":
      return "Filing and compliance support for sole proprietors, partnerships, and small businesses.";
    case "FBR & Compliance":
      return "Registration with the FBR, responses to notices and audits, and practical IRIS portal support.";
    case "Other Confirmed Services":
      return "Additional services confirmed by the consultancy — available on request.";
  }
}

/** Wrapper used on the /services page to render the full grid inside a section. */
export function ServicesPage() {
  return (
    <section aria-labelledby="services-title" className="section-padding">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Services"
          as="h1"
          title="Tax, filer, and FBR compliance services."
          description="A focused set of services covering individual and business tax needs, FBR registration and notices, and ongoing compliance. Every engagement begins with a short consultation and ends with a written summary."
        />
        <ServiceGrid />
      </Container>
    </section>
  );
}
