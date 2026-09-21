import { SectionHeader } from "@/components/sections/section-header";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta";

export const metadata = {
  title: "Not Found | Ayesha Consultancy Pakistan",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-[#0F172A]">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">Page Not Found</h2>
          <p className="mb-8 text-[#475569]">The page you are looking for does not exist.</p>
          <a
            href="/"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#0F172A] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Return Home
          </a>
        </div>
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
