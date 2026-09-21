import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { CoreServices } from "@/components/sections/core-services";
import { WhyChoose } from "@/components/sections/why-choose";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DocumentPreparation } from "@/components/sections/document-preparation";
import { ConsultantProfile } from "@/components/sections/consultant-profile";
import { Location } from "@/components/sections/location";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhoWeHelp />
        <CoreServices />
        <WhyChoose />
        <HowItWorks />
        <DocumentPreparation />
        <ConsultantProfile />
        <Location />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
