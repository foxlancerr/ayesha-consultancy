"use client";

import * as React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Check, FileText, Info } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { WhatsAppCTA } from "./whatsapp-cta";
import { documentTabs } from "@/data/documents";
import { cn } from "@/lib/utils";

/**
 * DocumentTabs — accessible tabbed list of typical documents by client
 * type. The disclaimer "requirements vary by case" appears in every tab
 * so it is always visible regardless of which tab is open.
 */
export function DocumentTabs() {
  const firstTab = documentTabs[0]?.slug ?? "salaried";

  return (
    <Tabs defaultValue={firstTab} className="flex flex-col gap-6">
      <TabsList
        aria-label="Document checklists by client type"
        className="flex w-full overflow-x-auto justify-start h-auto flex-wrap gap-1 bg-muted p-1 rounded-lg"
      >
        {documentTabs.map((tab) => (
          <TabsTrigger
            key={tab.slug}
            value={tab.slug}
            className="flex-1 min-w-[7rem] data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm px-4 py-2 text-sm"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {documentTabs.map((tab) => (
        <TabsContent
          key={tab.slug}
          value={tab.slug}
          className="mt-0 focus-visible:outline-none"
        >
          <DocumentChecklistContent slug={tab.slug} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function DocumentChecklistContent({ slug }: { slug: string }) {
  const tab = documentTabs.find((t) => t.slug === slug);
  if (!tab) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Main checklist */}
      <div className="lg:col-span-2 flex flex-col gap-4 rounded-lg border border-border bg-card p-5 md:p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-foreground">
            <FileText aria-hidden="true" className="size-5" />
          </span>
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-foreground">{tab.label}</h3>
            <p className="text-xs text-muted-foreground">{tab.audience}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-2 mt-1">
          {tab.documents.map((doc, idx) => (
            <li
              key={`${slug}-${idx}`}
              className="flex items-start gap-3 rounded-md border border-border bg-background p-3"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent mt-0.5">
                <Check aria-hidden="true" className="size-3.5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground leading-snug">
                  {doc.name}
                </span>
                {doc.note && (
                  <span className="text-xs text-muted-foreground leading-snug">
                    {doc.note}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        {tab.footNote && (
          <p className="text-xs text-muted-foreground border-t border-border pt-3 mt-2">
            <span className="font-medium text-foreground/80">Note:</span>{" "}
            {tab.footNote}
          </p>
        )}
      </div>

      {/* Side: disclaimer + WhatsApp */}
      <aside className="lg:col-span-1 flex flex-col gap-4">
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-5 md:p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Info aria-hidden="true" className="size-4 text-accent" />
            Important
          </h3>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Requirements vary depending on the client's individual case. Final
            requirements are confirmed by the consultant. The documents above
            are typical, not legally mandatory, unless verified against
            current authoritative FBR sources.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 md:p-6 flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            Not sure which documents apply to you?
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Send a short WhatsApp message describing your situation. The
            consultant will confirm the exact documents needed for your case
            before any work begins.
          </p>
          <WhatsAppCTA
            serviceTitle={`${tab.label} document checklist`}
            size="default"
            className="w-full"
          >
            Confirm on WhatsApp
          </WhatsAppCTA>
        </div>
      </aside>
    </div>
  );
}

/** Full /documents page section wrapper. */
export function DocumentsPage() {
  return (
    <section aria-labelledby="documents-title" className="section-padding">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Document checklists"
          as="h1"
          title="Typical documents by client type."
          description="A starting point — not a definitive list. Requirements vary depending on your individual case and are confirmed by the consultant before any filing."
        />
        <DocumentTabs />
      </Container>
    </section>
  );
}
