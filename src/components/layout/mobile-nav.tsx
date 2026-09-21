import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onNavigate?: () => void;
}

export function MobileNav({ onNavigate }: MobileNavProps) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/documents", label: "Documents" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex flex-col gap-1" onClick={onNavigate}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#F1F5F9]"
        >
          {link.label}
        </Link>
      ))}

      <div className="mt-6 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6">
        <a
          href="tel:+92XXXXXXXXXX"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
        >
          [PHONE NUMBER]
        </a>
        <a
          href="https://wa.me/92XXXXXXXXXX?text=Hello%2C%20I%20need%20tax%20consultation%20services."
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#128C7E]"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
