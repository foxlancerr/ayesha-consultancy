"use client";

import { services } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CoreServices() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="What We Offer"
          description="Comprehensive tax services for individuals and businesses across Pakistan."
        />
        <div className="space-y-14">
          {["Individual Services", "Business Services", "FBR & Compliance", "Other Confirmed Services"].map(
            (category) => {
              const categoryServices = services.filter((s) => s.category === category);
              if (categoryServices.length === 0) return null;
              return (
                <div key={category}>
                  <Badge variant="secondary" className="mb-4">{category}</Badge>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {categoryServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="mb-5">
                          <h3 className="text-lg font-semibold text-[#0F172A]">{service.title}</h3>
                        </div>
                        <p className="mb-3 text-sm text-[#475569] leading-relaxed">{service.description}</p>
                        <p className="mb-4 text-xs font-medium text-[#1D4ED8]">{service.audience}</p>
                        <p className="mb-5 flex-1 text-sm text-[#475569] leading-relaxed">{service.whatWeHelp}</p>
                        <div className="mt-auto flex flex-col gap-3">
                          <ul className="space-y-2">
                            {service.documents.slice(0, 3).map((doc) => (
                              <li key={doc.id} className="text-xs text-[#475569] flex items-center gap-2">
                                <Check className="h-3.5 w-3.5 shrink-0 text-[#15803D]" />
                                {doc.label}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={buildWhatsAppUrl(service.whatsappMessage)}
                            className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1D4ED8]"
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
            }
          )}
        </div>
      </div>
    </section>
  );
}
