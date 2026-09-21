import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const footerLinks: Record<string, Array<{ href: string; label: string }>> = {
  About: [
    { href: "/about", label: "Our Team" },
    { href: "/about", label: "Professional Approach" },
    { href: "/about", label: "Confidentiality" },
  ],
  Services: [
    { href: "/services", label: "Individual Services" },
    { href: "/services", label: "Business Services" },
    { href: "/services", label: "FBR & Compliance" },
    { href: "/services", label: "Other Services" },
  ],
  Locations: [
    { href: "/contact", label: "Islamabad" },
    { href: "/contact", label: "Peshawar" },
    { href: "/contact", label: "Nationwide Remote" },
  ],
  Contact: [
    { href: "/contact", label: "WhatsApp" },
    { href: "/contact", label: "Phone" },
    { href: "/contact", label: "Email" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#0F172A] text-white no-print">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/20" />
              <span className="text-xl font-bold text-white">Ayesha Consultancy</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Professional tax consultancy serving Islamabad, Peshawar, and all of Pakistan through remote consultation.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Ayesha. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="tel:+923186652528"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                923186652528
              </a>
              <a
                href="https://wa.me/923186652528"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
