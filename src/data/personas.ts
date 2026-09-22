import type { LucideIcon } from "lucide-react";
import { User, Briefcase, Home, FileText, Landmark, HelpCircle } from "lucide-react";

/**
 * Icon registry — kept in one place so the data file can reference icons
 * by string name (avoiding passing Lucide function components across the
 * Next.js server → client component boundary).
 */
export const personaIconRegistry: Record<string, LucideIcon> = {
  User,
  Briefcase,
  Home,
  FileText,
  Landmark,
  HelpCircle,
};

/**
 * Persona definitions for the "Who We Help" section on the home page.
 * Each persona maps to a client type used in the inquiry form so the
 * WhatsApp message is consistent.
 */

export interface Persona {
  slug: string;
  title: string;
  summary: string;
  /** Formatted as "I am a…" so the WhatsApp message reads naturally. */
  clientTypeLabel: string;
  /** Icon name — must exist in {@link personaIconRegistry}. */
  icon: keyof typeof personaIconRegistry;
  /** Optional preview of the most common services this persona asks about. */
  commonServices: string[];
}

export const personas: Persona[] = [
  {
    slug: "salaried",
    title: "Salaried Professionals",
    summary:
      "Employees who need to file their annual return, confirm filer status, and reconcile tax withheld by their employer.",
    clientTypeLabel: "Salaried",
    icon: "User",
    commonServices: [
      "Salaried Person Tax Return",
      "Filer / Active Taxpayer Assistance",
      "Wealth Statement Preparation",
    ],
  },
  {
    slug: "business",
    title: "Businesses & AOPs",
    summary:
      "Sole proprietors, partnerships, and small businesses that need to file business returns and stay on top of ongoing compliance.",
    clientTypeLabel: "Business",
    icon: "Briefcase",
    commonServices: [
      "Business Tax Filing",
      "Tax Planning & Compliance Consultation",
      "FBR Registration Assistance",
    ],
  },
  {
    slug: "pensioner",
    title: "Pensioners",
    summary:
      "Retired individuals receiving pension income who need help filing their return correctly and reporting any additional income.",
    clientTypeLabel: "Pensioner",
    icon: "Home",
    commonServices: [
      "Pensioner Tax Return",
      "Wealth Statement Preparation",
      "Income Certificate Assistance",
    ],
  },
  {
    slug: "freelancer",
    title: "Freelancers & Individuals",
    summary:
      "Freelancers and other individuals with mixed income sources who need structured help preparing their annual return and wealth statement.",
    clientTypeLabel: "Freelancer",
    icon: "FileText",
    commonServices: [
      "Income Tax Return Filing",
      "Wealth Statement Preparation",
      "Filer / Active Taxpayer Assistance",
    ],
  },
  {
    slug: "property-vehicle",
    title: "Property & Vehicle Owners",
    summary:
      "Individuals with property, vehicle, or investment income who need help reporting these correctly in their annual return and wealth statement.",
    clientTypeLabel: "Property/Vehicle",
    icon: "Landmark",
    commonServices: [
      "Income Tax Return Filing",
      "Wealth Statement Preparation",
      "Historical Return Revisions",
    ],
  },
  {
    slug: "fbr-notice",
    title: "Clients with FBR Notices",
    summary:
      "Individuals and businesses that have received an FBR notice or audit selection and need help understanding and responding.",
    clientTypeLabel: "FBR Notice",
    icon: "HelpCircle",
    commonServices: [
      "FBR Notices Assistance",
      "FBR Audit Assistance",
      "IRIS-Related Assistance",
    ],
  },
];

/** Resolve a persona icon name to the Lucide component. */
export function resolvePersonaIcon(name: keyof typeof personaIconRegistry): LucideIcon {
  return personaIconRegistry[name] ?? User;
}

/** Client type options shown in the inquiry form — order matters for the dropdown. */
export const clientTypeOptions: { value: string; label: string }[] = [
  { value: "Salaried", label: "Salaried" },
  { value: "Business", label: "Business" },
  { value: "Pensioner", label: "Pensioner" },
  { value: "Freelancer", label: "Freelancer" },
  { value: "Property/Vehicle", label: "Property/Vehicle" },
  { value: "FBR Notice", label: "FBR Notice" },
  { value: "Other", label: "Other" },
];
