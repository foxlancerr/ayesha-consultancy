/**
 * "Why Choose" items for the home page. Focused on professional approach
 * rather than fabricated numbers (no years of experience, no client count).
 */

export interface WhyChooseItem {
  title: string;
  description: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Direct, professional communication",
    description:
      "Every consultation is conducted directly with the consultant — no account managers, no call centres. You speak to the person preparing your return.",
  },
  {
    title: "Plain-language explanations",
    description:
      "Tax terminology is explained in plain language. You understand what is being filed, why, and what the next steps are — before any work begins.",
  },
  {
    title: "Strict confidentiality",
    description:
      "Your information is treated with strict confidentiality, retained only as long as needed for the engagement and applicable record-keeping.",
  },
  {
    title: "Written summary of every engagement",
    description:
      "After every filing or response, you receive a short written summary of what was submitted, so you have a clear record for your own files.",
  },
  {
    title: "Islamabad, Peshawar, and remote",
    description:
      "In-person consultations are available in Islamabad and Peshawar. Clients anywhere else in Pakistan are served remotely by phone, WhatsApp, or video call.",
  },
  {
    title: "Transparent scope and pricing",
    description:
      "Before any work begins, you receive a clear scope and quote. There are no hidden charges and no work is undertaken without your confirmation.",
  },
];
