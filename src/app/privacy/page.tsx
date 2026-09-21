import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Privacy Policy | Ayesha Consultancy Pakistan",
  description: "Read our privacy policy. Your information is handled with strict confidentiality and security.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-[#0E2944]">Privacy Policy</h1>
          <div className="space-y-6">
            <p className="text-lg text-[#334155]">Effective Date: [DATE]</p>
            <p className="text-lg text-[#334155] leading-relaxed">
              Ayesha ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and disclose your information
              when you visit our website or contact our services.
            </p>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">1. Information We Collect</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                We may collect personal information you provide through our contact form,
                WhatsApp messages, or phone calls. This may include your name, phone number,
                email address, city, and any messages regarding your tax needs.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">2. How We Use Your Information</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                We use your information solely to respond to your inquiries, provide tax
                consultancy services, and communicate with you regarding your engagement.
                We do not use your information for any purpose beyond these services.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">3. Information Sharing</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information
                to third parties. Your information is kept confidential and shared only
                as necessary to provide our services.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">4. Data Security</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                We take reasonable measures to protect your information. However,
                please note that no method of transmission over the internet is 100% secure.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">5. Your Rights</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                You may contact us at any time to request access to, correction of,
                or deletion of your personal information.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">6. Contact Us</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact
                us at [EMAIL] or call +92 318 665 2528.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
