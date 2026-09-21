import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

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
          className="rounded-lg px-4 py-3 text-base font-medium text-[#334155] transition-colors hover:bg-[#F1F5F9]"
        >
          {link.label}
        </Link>
      ))}

      <div className="mt-6 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6">
        <a
          href="tel:+923186652528"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#0E2944] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0A1E33]"
        >
          <Phone className="h-4 w-4" />
          +92 318 665 2528
        </a>
        <a
          href="https://wa.me/923186652528?text=Hello%2C%20I%20need%20tax%20consultation%20services."
          className="flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[#166534]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
