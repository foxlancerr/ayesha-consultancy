import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { Container } from "@/components/site/container";
import { SectionHeader } from "@/components/site/section-header";
import { ContactCard } from "@/components/site/contact-card";
import { InquiryForm } from "@/components/site/inquiry-form";

export const metadata: Metadata = {
  title: "Contact — WhatsApp, Phone, Email & Inquiry Form",
  description:
    "Reach the consultancy by WhatsApp, phone, or email, or use the inquiry form. In-person consultations available in Islamabad and Peshawar; remote consultations across Pakistan.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact the Tax Consultant",
    description:
      "Reach out by WhatsApp, phone, email, or the inquiry form. Islamabad, Peshawar, and remote across Pakistan.",
    url: "/contact",
  },
};

export default function ContactRoute() {
  return (
    <SiteShell>
      <section aria-labelledby="contact-title" className="section-padding">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Contact"
            as="h1"
            title="Get in touch — the consultant replies personally."
            description="Every message is read by the consultant. For the fastest response, send a WhatsApp message with a short description of your situation. In-person consultations available in Islamabad and Peshawar; remote consultations across Pakistan."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <ContactCard />

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-foreground">
                Inquiry form
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fill in the fields below. On submit, a pre-filled WhatsApp
                message opens — no information is sent to a server.
              </p>
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
