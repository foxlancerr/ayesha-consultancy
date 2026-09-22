import { siteConfig } from "./site";

/**
 * WhatsApp helpers — build contextual pre-filled messages and produce
 * ready-to-use wa.me links. No backend, no fetch — everything runs in the
 * browser and opens the WhatsApp app/web in a new tab.
 */

/** Compose a wa.me URL with a pre-filled, URL-encoded message. */
export function buildWhatsAppUrl(message: string, number: string = siteConfig.contact.whatsapp): string {
  const trimmed = number.replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${trimmed}?text=${encoded}`;
}

/** Open a WhatsApp link in a new tab using the user's preferred device behaviour. */
export function openWhatsApp(message: string, number?: string): void {
  if (typeof window === "undefined") return;
  const url = buildWhatsAppUrl(message, number);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Build a general "I found your website" message.
 * Always includes the city if provided, so the consultant can triage quickly.
 */
export function buildGeneralMessage(opts?: { service?: string; city?: string }): string {
  const service = opts?.service?.trim();
  const city = opts?.city?.trim();

  let message = "Hello, I found your website and would like to discuss ";
  message += service ? `${service}.` : "a tax matter.";
  if (city) message += ` My city is ${city}.`;
  return message;
}

/** Build a service-specific message for service cards and CTAs. */
export function buildServiceMessage(serviceTitle: string, city?: string): string {
  return buildGeneralMessage({ service: serviceTitle, city });
}

/**
 * Build a complete inquiry message from the validated contact form data.
 * The structure mirrors the visible form fields so the consultant can scan
 * messages on WhatsApp quickly.
 */
export interface InquiryPayload {
  name: string;
  phone: string;
  city: string;
  clientType: string;
  service: string;
  message?: string;
}

export function buildInquiryMessage(payload: InquiryPayload): string {
  const lines: string[] = [];
  lines.push("Hello, I would like to request a consultation. Details below:");
  lines.push("");
  lines.push(`Name: ${payload.name}`);
  lines.push(`Phone/WhatsApp: ${payload.phone}`);
  lines.push(`City: ${payload.city}`);
  lines.push(`Client type: ${payload.clientType}`);
  lines.push(`Service: ${payload.service}`);
  if (payload.message && payload.message.trim().length > 0) {
    lines.push("");
    lines.push("Message:");
    lines.push(payload.message.trim());
  }
  return lines.join("\n");
}

/** Build a tel: href from the configured phone number. */
export function buildPhoneHref(number: string = siteConfig.contact.phone): string {
  const trimmed = number.replace(/[^0-9+]/g, "");
  return `tel:${trimmed}`;
}

/** Build a mailto: href with optional subject and body. */
export function buildMailtoHref(
  to: string = siteConfig.contact.email,
  opts?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams();
  if (opts?.subject) params.set("subject", opts.subject);
  if (opts?.body) params.set("body", opts.body);
  const query = params.toString();
  return `mailto:${to}${query ? `?${query}` : ""}`;
}
