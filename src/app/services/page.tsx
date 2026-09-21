import { services } from "@/lib/data";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta";

export const metadata = {
  title: "Our Services | Ayesha Consultancy Islamabad & Peshawar",
  description: "Comprehensive tax services including income tax filing, FBR compliance, wealth statement, and tax planning. Serving Islamabad, Peshawar, and all of Pakistan.",
};

export default function ServicesPage() {
  const categories = ["Individual Services", "Business Services", "FBR & Compliance", "Other Confirmed Services"];

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0F172A] py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">Our Services</h1>
              <p className="text-xl text-white/75">Professional tax services tailored to your needs.</p>
            </div>
          </div>
        </section>
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="space-y-16">
              {categories.map((category) => {
                const categoryServices = services.filter((s) => s.category === category);
                if (categoryServices.length === 0) return null;
                return (
                  <div key={category}>
                    <Badge variant="secondary" className="mb-5">{category}</Badge>
                    <div className="grid gap-8 md:grid-cols-2">
                      {categoryServices.map((service) => (
                        <div
                          key={service.id}
                          className="flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                          <div className="mb-5">
                            <h3 className="text-lg font-semibold text-[#0F172A]">{service.title}</h3>
                          </div>
                          <p className="mb-3 text-base text-[#334155] leading-relaxed">{service.description}</p>
                          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-[#15803D]">{service.audience}</p>
                          <p className="mb-6 flex-1 text-base text-[#334155] leading-relaxed">{service.whatWeHelp}</p>
                          <div className="mt-auto flex flex-col gap-3">
                            <ul className="space-y-3">
                              {service.documents.slice(0, 3).map((doc) => (
                                <li key={doc.id} className="text-sm text-[#334155] flex items-center gap-2">
                                  <Check className="h-4 w-4 shrink-0 text-[#15803D]" />
                                  {doc.label}
                                </li>
                              ))}
                            </ul>
                            <a
                              href={buildWhatsAppUrl(service.whatsappMessage)}
                              className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0F172A] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1D4ED8]"
                            >
                              <MessageCircle className="h-4 w-4" />
                              WhatsApp Us
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
