/**
 * Central site configuration for the tax consultancy frontend.
 *
 * IMPORTANT — PLACEHOLDER POLICY
 * Every piece of business information that has not been explicitly confirmed
 * by the consultant (name, phone, email, address, qualifications) lives
 * here as a clearly-marked placeholder. Update this file when the consultant
 * confirms the real values. Do NOT invent values inside component code.
 */

export const siteConfig = {
  name: "Ayesha Tax Consultants",
  /** Short brand tagline shown under the logo. */
  tagline: "Tax & Compliance Consultancy — Islamabad · Peshawar · Pakistan (Remote)",
  /** One-sentence positioning used for SEO and the hero subtitle. */
  description:
    "Professional tax consultancy in Islamabad and Peshawar, serving clients across Pakistan remotely. Income tax returns, FBR registration, filer assistance, wealth statements, and FBR notices handled by a qualified tax professional.",
  /** Primary locale of the website. */
  locale: "en_PK",
  /** Primary language for content. Urdu RTL support is structurally ready. */
  primaryLanguage: "en",
  /** Reserved for future bilingual content. */
  supportedLanguages: ["en", "ur"],

  /** Contact channels — replace placeholders before going live. */
  contact: {
    // PLACEHOLDER — consultant's primary WhatsApp number in international format without "+".
    whatsapp: "923186652528",
    // PLACEHOLDER — display version of the WhatsApp number.
    whatsappDisplay: "+92 318 665 2528",
    // PLACEHOLDER — consultant's primary phone number in international format without "+".
    phone: "923186652528",
    // PLACEHOLDER — display version of the phone number.
    phoneDisplay: "+92 318 665 2528",
    // PLACEHOLDER — consultant's email address.
    email: "info@meridiantax.example",
    // PLACEHOLDER — general inquiries email.
    salesEmail: "consult@meridiantax.example",
  },

  /** Office locations — replace placeholders with confirmed addresses. */
  offices: [
    {
      city: "Islamabad",
      addressLine1: "Office address to be confirmed",
      addressLine2: "Islamabad Capital Territory, Pakistan",
      hours: "Monday–Friday, 9:00 AM – 6:00 PM",
      // PLACEHOLDER — optional Google Maps link once confirmed.
      mapUrl: "",
    },
    {
      city: "Peshawar",
      addressLine1: "Office address to be confirmed",
      addressLine2: "Khyber Pakhtunkhwa, Pakistan",
      hours: "Monday–Friday, 9:00 AM – 6:00 PM",
      mapUrl: "",
    },
  ],

  /** Consultant profile — every field is a placeholder until confirmed. */
  consultant: {
    name: "Ayesha Noor",
    qualification: "[Qualification]",
    // Short professional summary — replace with the consultant's actual bio.
    shortBio:
      "A professional tax consultant providing income tax, FBR compliance, and filer assistance services to individuals, salaried professionals, pensioners, and businesses across Pakistan.",
    longBio: [
      "Professional approach focused on clarity, confidentiality, and transparent communication. Every engagement begins with a structured review of the client's situation before any work is undertaken, and ends with a written summary of what was filed, prepared, or recommended.",
      "Consultations are available in person in Islamabad and Peshawar, and remotely across Pakistan — by phone, WhatsApp, or video call — so that clients in any city can access professional tax assistance without needing to travel.",
    ],
    credentials: [
      // Add confirmed credentials only. Leave the placeholder in place until confirmed.
      "[Professional qualification]",
      "[FBR / tax authority registration, if applicable]",
    ],
    affiliation: "[Professional affiliation / membership, if applicable]",
    yearsOfExperience: null, // null = not disclosed. Never invent.
  },

  /** Navigation structure (single source of truth). */
  nav: [
   
    { label: "Services", href: "/services" },
    { label: "Documents", href: "/documents" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /** Footer legal links. */
  legalNav: [
    { label: "Privacy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
