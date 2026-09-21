const PHONE_PLACEHOLDER = "+923186652528";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${PHONE_PLACEHOLDER}?text=${encoded}`;
}

export function buildCallUrl(): string {
  return `tel:${PHONE_PLACEHOLDER}`;
}

export function buildSMSSmsUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${PHONE_PLACEHOLDER}&text=${encoded}`;
}
