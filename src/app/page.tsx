import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { Hero } from "@/components/site/hero";
import { TrustStrip } from "@/components/site/trust-strip";
import { WhoWeHelp } from "@/components/site/who-we-help";
import { CoreServices } from "@/components/site/core-services";
import { WhyChoose } from "@/components/site/why-choose";
import { HowItWorks } from "@/components/site/how-it-works";
import { DocumentPreparation } from "@/components/site/document-preparation";
import { ConsultantProfile } from "@/components/site/consultant-profile";
import { IslamabadPeshawar } from "@/components/site/islamabad-peshawar";
import { FAQ } from "@/components/site/faq";
import { CTASection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Tax Consultant Islamabad & Peshawar — Income Tax, FBR & Filer Assistance",
  description:
    "Professional tax consultancy in Islamabad and Peshawar, serving clients across Pakistan remotely. Income tax returns, FBR registration, filer assistance, wealth statements, and FBR notices — handled by a qualified tax professional.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tax Consultant Islamabad & Peshawar — Professional Tax Consultancy",
    description:
      "Professional tax consultancy in Islamabad and Peshawar, serving clients across Pakistan remotely. Income tax returns, FBR registration, filer assistance, wealth statements, and FBR notices.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <SiteShell>
      {/* Visual H1 lives inside the Hero */}
      <Hero />
      <TrustStrip />
      <WhoWeHelp />
      <CoreServices />
      <WhyChoose />
      <HowItWorks />
      <DocumentPreparation />
      <ConsultantProfile />
      <IslamabadPeshawar />
      <FAQ />
      <CTASection />
    </SiteShell>
  );
}
