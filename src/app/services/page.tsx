import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { ServicesPage } from "@/components/site/service-grid";
import { CTASection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Services — Income Tax, FBR Registration, Filer & Wealth Statement",
  description:
    "Income tax return filing, salaried and pensioner returns, filer assistance, wealth statement preparation, FBR registration, FBR notices and audit, IRIS support, and tax planning — for individuals and businesses across Pakistan.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Tax, FBR & Filer Assistance",
    description:
      "Income tax returns, FBR registration, filer assistance, wealth statements, FBR notices, and IRIS support — for individuals and businesses across Pakistan.",
    url: "/services",
  },
};

export default function ServicesRoute() {
  return (
    <SiteShell>
      <ServicesPage />
      <CTASection />
    </SiteShell>
  );
}
