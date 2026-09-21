"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppCTA({ message }: { message?: string }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const defaultMessage = message || "Hello, I found your website and would like to discuss tax consultation services. My city is [CITY].";

  return (
    <div className="fixed bottom-6 right-4 z-40 md:bottom-8 md:right-8">
      <div className="relative">
        <a
          href={buildWhatsAppUrl(defaultMessage)}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:bg-[#128C7E] hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
        >
          <MessageCircle className="h-7 w-7" />
        </a>

        {tooltipVisible && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-[#0F172A] px-3 py-2 text-xs font-medium text-white shadow-lg">
            Chat on WhatsApp
            <div className="absolute right-[-6px] top-1/2 h-3 w-3 rotate-45 bg-[#0F172A]" />
          </div>
        )}
      </div>
    </div>
  );
}
