import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { DocumentsPage } from "@/components/site/document-tabs";
import { CTASection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Documents — Typical Checklist by Client Type",
  description:
    "Typical documents required for salaried, business, pensioner, freelancer, and FBR notice engagements. Final requirements are confirmed by the consultant based on your individual case.",
  alternates: { canonical: "/documents" },
  openGraph: {
    title: "Documents — Typical Checklist by Client Type",
    description:
      "Typical documents for salaried, business, pensioner, freelancer, and FBR notice engagements. Requirements vary by case.",
    url: "/documents",
  },
};

export default function DocumentsRoute() {
  return (
    <SiteShell>
      <DocumentsPage />
      <CTASection />
    </SiteShell>
  );
}
