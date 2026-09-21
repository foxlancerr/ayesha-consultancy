import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Disclaimer | Ayesha Consultancy Pakistan",
  description: "Read our disclaimer. All information provided is for general guidance only.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-[#0E2944]">Disclaimer</h1>
          <div className="space-y-6">
            <p className="text-lg text-[#334155]">Effective Date: [DATE]</p>
            <p className="text-lg text-[#334155] leading-relaxed">
              Please read these disclaimer terms carefully before using our website.
            </p>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">1. General Disclaimer</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                The information provided on this website is for general informational purposes
                only. All information is provided on an "as-is" basis without any representations
                or warranties, express or implied. Ayesha does not warrant the accuracy,
                completeness, or timeliness of the information on this website.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">2. Tax Advice</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                The content on this website does not constitute professional tax advice. Tax laws
                and regulations are subject to change and may vary based on your specific circumstances.
                Always consult with a qualified tax professional for advice tailored to your situation.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">3. Liability Limitation</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                In no event shall Ayesha be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of profits, data,
                or use, arising out of or related to the use of this website.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">4. External Links</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                Our website may contain links to third-party websites that are not owned or controlled
                by Ayesha. We have no control over, and assume no responsibility for, the
                content, privacy policies, or practices of any third-party websites.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">5. Changes to Disclaimer</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                Ayesha reserves the right to modify or replace these terms at any time.
                If revisions are material, we will notify users through updated posting of this disclaimer.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xl font-bold text-[#0E2944]">6. Governing Law</h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of Pakistan.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
