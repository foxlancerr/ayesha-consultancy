import { CTASection } from "@/components/common/CTASection";
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InquiryForm } from "@/components/common/InquiryForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0F172A] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h1>
              <p className="text-lg text-white/60">Ready to discuss your tax needs? Reach out — we're here to help.</p>
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
                <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}>{item.icon}</div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.details.map((d, j) => (
                      <li key={j} className="text-sm text-[#475569]">{d.label}: <span className="font-medium text-[#0F172A]">{d.value}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Send Us a Message</h2>
              <p className="text-lg text-[#475569]">Fill out the form below and we'll respond promptly via WhatsApp.</p>
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
