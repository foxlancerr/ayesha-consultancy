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
        <section className="bg-[#0E2944] py-32 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">Documents Required</h1>
              <p className="text-xl text-white/75">Know what to prepare before your consultation.</p>
            </div>
          </div>
        </section>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-base text-[#15803D] font-semibold uppercase tracking-wide">Confirmation Required</p>
              <h2 className="mb-4 text-2xl font-bold text-[#0E2944]">Each client type has a typical set of documents</h2>
              <p className="text-lg text-[#334155]">Final requirements depend on your individual case and are confirmed before anything is filed.</p>
            </div>
            <DocumentTabs />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
