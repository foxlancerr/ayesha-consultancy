import { ContactCard } from "@/components/common/CTASection";
import { InquiryForm } from "@/components/common/InquiryForm";
import { CTASection } from "@/components/common/CTASection";
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0F172A] py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h1>
              <p className="text-xl text-white/75">Ready to discuss your tax needs? Reach out — we're here to help.</p>
            </div>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "WhatsApp", icon: "💬", color: "bg-[#F1F5F9] text-[#0F172A]", details: [{ label: "Number", value: "923186652528" }, { label: "Response", value: "Within 24 hours" }] },
                { title: "Phone", icon: "📞", color: "bg-[#EFF6FF] text-[#1D4ED8]", details: [{ label: "Number", value: "923186652528" }, { label: "Hours", value: "9 AM – 6 PM (PKT)" }] },
                { title: "Email", icon: "✉️", color: "bg-[#F0FDF4] text-[#15803D]", details: [{ label: "Address", value: "[EMAIL]" }, { label: "Response", value: "Within 48 hours" }] },
                { title: "Offices", icon: "📍", color: "bg-[#F1F5F9] text-[#0F172A]", details: [{ label: "Islamabad", value: "[ADDRESS]" }, { label: "Peshawar", value: "[ADDRESS]" }] },
              ].map((item, i) => (
                <ContactCard key={i} title={item.title} icon={item.icon} details={item.details} />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Send Us a Message</h2>
              <p className="text-xl text-[#334155]">Fill out the form below and we'll respond promptly via WhatsApp.</p>
            </div>
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <InquiryForm />
            </div>
          </div>
        </section>
        <CTASection
          title="Ready to Get Started?"
          subtitle="Don't let tax stress hold you back. Contact us today for professional, reliable tax consultancy services."
          ctaLabel="Chat on WhatsApp"
          ctaMessage="Hello, I would like to book a tax consultation."
        />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
