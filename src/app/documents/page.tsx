import { DocumentTabs } from "@/components/common/DocumentTabs";
import { SectionHeader } from "@/components/sections/section-header";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta";

export const metadata = {
  title: "Documents Required | Ayesha Consultancy Pakistan",
  description: "Find out what documents you may need for tax filing. Requirements vary by case. Final requirements confirmed by the consultant.",
};

export default function DocumentsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0F172A] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Documents Required</h1>
              <p className="text-lg text-white/60">Know what to prepare before your consultation.</p>
            </div>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <DocumentTabs />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
