import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative bg-[#0F172A] py-28 text-white md:py-36 lg:py-48">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#15803D]" />
            Professional Tax Consultancy
          </div>
          <h1 className="mb-8 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
            Professional Tax Consultancy for Pakistan
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-white/80 md:text-xl lg:text-2xl">
            Trusted tax advisory serving Islamabad, Peshawar, and clients nationwide through remote consultation.
            From income tax returns to FBR compliance — we handle it all with precision and confidentiality.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl("Hello, I need tax consultation services. My city is [CITY].")}
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#15803D] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#166534] shadow-sm"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              View Services
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2.5 text-sm text-white/60">
            <Phone className="h-5 w-5" />
            <a href="tel:+923186652528" className="transition-colors hover:text-white/80">
              Call Now: 923186652528
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
