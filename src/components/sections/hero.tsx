import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative bg-[#0F172A] py-24 text-white md:py-32 lg:py-40">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            Professional Tax Consultancy
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Tax Consultancy for Pakistan
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-white/60 sm:text-xl">
            Trusted tax advisory serving Islamabad, Peshawar, and clients nationwide through remote consultation.
            From income tax returns to FBR compliance — we handle it all with precision and confidentiality.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl("Hello, I need tax consultation services. My city is [CITY].")}
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#128C7E] shadow-sm"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              View Services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm text-white/40">
            <Phone className="h-4 w-4" />
            <a href="tel:+92XXXXXXXXXX" className="transition-colors hover:text-white/70">
              Call Now: [PHONE NUMBER]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
