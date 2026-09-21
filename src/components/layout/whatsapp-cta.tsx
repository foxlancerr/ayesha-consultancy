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
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#15803D] text-white shadow-lg transition-all duration-200 hover:bg-[#166534] hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
        >
          <MessageCircle className="h-6 w-6" />
        </a>

        {tooltipVisible && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-[#0E2944] px-3 py-2 text-sm font-medium text-white shadow-lg">
            Chat on WhatsApp
            <div className="absolute right-[-6px] top-1/2 h-3 w-3 rotate-45 bg-[#0E2944]" />
          </div>
        )}
      </div>
    </div>
  );
}
