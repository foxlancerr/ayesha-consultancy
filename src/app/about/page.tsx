import { ConsultantProfile } from "@/components/sections/consultant-profile";
import { Location } from "@/components/sections/location";
import { SectionHeader } from "@/components/sections/section-header";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta";

export const metadata = {
  title: "About | Ayesha Consultancy Islamabad & Peshawar",
  description: "Meet the consultant behind Ayesha Consultancy serving Islamabad, Peshawar, and all of Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0E2944] py-28 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeader title="About Us" subtitle="Who We Are" description="Your trusted partner for professional tax consultancy in Pakistan." />
          </div>
        </section>
        <ConsultantProfile />
        <Location />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
