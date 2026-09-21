import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#0E2944] py-28 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-xl text-white/75 leading-relaxed">
          Don't let tax stress hold you back. Contact us today for professional, reliable tax consultancy services.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={buildWhatsAppUrl("Hello, I would like to book a tax consultation.")}
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#15803D] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#16653D] shadow-sm"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+923186652528"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
