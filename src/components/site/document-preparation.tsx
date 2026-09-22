import * as React from "react";
import Link from "next/link";
import { ArrowRight, FileStack } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { Button } from "./button";
import { documentTabs } from "@/data/documents";

/**
 * DocumentPreparation — a short preview of the /documents page. Lists the
 * available document tabs without going into per-document detail, and
 * directs visitors to the full page.
 */
export function DocumentPreparation() {
  return (
    <section
      aria-labelledby="documents-title"
      className="section-padding"
    >
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Document preparation"
            as="h2"
            title="Typical documents by client type — confirmed by the consultant before any filing."
            description="Each client type has a typical set of documents that the consultant will review with you. Final requirements depend on your individual case and are confirmed before anything is filed."
          />
          <Button asChild variant="outline" size="default" className="self-start md:self-end">
            <Link href="/documents">
              View document checklists
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {documentTabs.map((tab) => (
            <li
              key={tab.slug}
              className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/25"
            >
              <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-foreground">
                <FileStack aria-hidden="true" className="size-4.5" />
              </span>
              <h3 className="text-sm font-semibold text-foreground">{tab.label}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{tab.audience}</p>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
          Requirements vary depending on the client's individual case. Final
          requirements are confirmed by the consultant. Documents shown on the
          documents page are typical, not legally mandatory, unless verified
          against current authoritative FBR sources.
        </p>
      </Container>
    </section>
  );
}
