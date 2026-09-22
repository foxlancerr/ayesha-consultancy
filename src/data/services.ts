import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Briefcase,
  UserCheck,
  Landmark,
  Wallet,
  Building2,
  ShieldCheck,
  FileSearch,
  FileClock,
  ClipboardList,
  ScrollText,
  WalletCards,
} from "lucide-react";

/**
 * Icon registry — kept in one place so the data file can reference icons
 * by string name (avoiding passing Lucide function components across the
 * Next.js server → client component boundary).
 *
 * The string keys must match the values used in the `icon` field of each
 * service entry below.
 */
export const serviceIconRegistry: Record<string, LucideIcon> = {
  FileText,
  Briefcase,
  UserCheck,
  Landmark,
  Wallet,
  Building2,
  ShieldCheck,
  FileSearch,
  FileClock,
  ClipboardList,
  ScrollText,
  WalletCards,
};

/**
 * Service catalogue — single source of truth for the /services page and
 * the home page services preview. ONLY confirmed services are listed.
 *
 * Every entry must be safely worded — no tax rates, deadlines, penalties,
 * FBR sections or guarantees. Use neutral phrasing when requirements vary.
 */

export type ServiceCategory =
  | "Individual Services"
  | "Business Services"
  | "FBR & Compliance"
  | "Other Confirmed Services";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  audience: string;
  /** What the consultant actually helps with — bullet points, kept concise. */
  helpsWith: string[];
  potentialDocuments: string[];
  category: ServiceCategory;
  /** Icon name — must exist in {@link serviceIconRegistry}. */
  icon: keyof typeof serviceIconRegistry;
}

export const services: Service[] = [
  // ---------- INDIVIDUAL SERVICES ----------
  {
    slug: "income-tax-return-filing",
    title: "Income Tax Return Filing",
    shortDescription:
      "Preparation and filing of annual income tax returns for individuals, with a clear review of your income sources before submission.",
    audience: "Salaried individuals, freelancers, property owners, pensioners.",
    helpsWith: [
      "Reviewing your income sources for the relevant tax year",
      "Preparing the return in IRIS",
      "Filing the return on your behalf with your confirmation",
      "Sharing a written summary of what was filed",
    ],
    potentialDocuments: [
      "CNIC",
      "Salary certificate / payslips",
      "Bank statements",
      "Property and investment records",
    ],
    category: "Individual Services",
    icon: "FileText",
  },
  {
    slug: "salaried-person-tax-return",
    title: "Salaried Person Tax Return",
    shortDescription:
      "Targeted support for salaried employees, including reconciliation of tax withheld by the employer and confirmation of filer status.",
    audience: "Salaried employees in private sector, government, and multinational companies.",
    helpsWith: [
      "Reviewing the employer-issued salary certificate",
      "Reconciling tax withheld with the IRIS record",
      "Confirming Active Taxpayer (filer) status",
      "Filing the salaried return in IRIS",
    ],
    potentialDocuments: [
      "Salary certificate for the tax year",
      "CNIC",
      "Bank statement for the relevant period",
      "Any other income records",
    ],
    category: "Individual Services",
    icon: "UserCheck",
  },
  {
    slug: "pensioner-tax-return",
    title: "Pensioner Tax Return",
    shortDescription:
      "Filing support for retired individuals receiving pension income, with a focus on correctly reporting pension and any other income.",
    audience: "Retired government and private-sector pensioners.",
    helpsWith: [
      "Reviewing pension income documentation",
      "Reporting other income correctly",
      "Preparing and filing the return in IRIS",
      "Confirming the return has been submitted",
    ],
    potentialDocuments: [
      "Pension payment certificate",
      "CNIC",
      "Bank statements showing pension credits",
      "Any other income records",
    ],
    category: "Individual Services",
    icon: "Wallet",
  },
  {
    slug: "filer-active-taxpayer-assistance",
    title: "Filer / Active Taxpayer Assistance",
    shortDescription:
      "Helping clients become and remain on the Active Taxpayer List (ATL), with a review of the requirements applicable to their case.",
    audience: "Individuals and businesses that need to be on the Active Taxpayer List.",
    helpsWith: [
      "Confirming whether you are currently on the ATL",
      "Identifying the steps required to obtain or restore ATL status",
      "Filing the relevant return(s) to support ATL inclusion",
      "Follow-up guidance until the listing is reflected",
    ],
    potentialDocuments: [
      "CNIC",
      "Recent filed return acknowledgement",
      "IRIS login details (only if you authorise the consultant to act)",
    ],
    category: "Individual Services",
    icon: "ShieldCheck",
  },
  {
    slug: "income-certificate-assistance",
    title: "Income Certificate Assistance",
    shortDescription:
      "Support in obtaining and preparing an income certificate where required for applications, visas, banking, or other official purposes.",
    audience: "Individuals needing proof of income for official or institutional use.",
    helpsWith: [
      "Reviewing the income sources to be certified",
      "Preparing supporting documentation",
      "Liaising with the relevant issuing authority where applicable",
      "Confirming the certificate meets the requesting institution's requirements",
    ],
    potentialDocuments: [
      "CNIC",
      "Salary / pension / business income records",
      "Bank statements",
      "The institution's specified format (if any)",
    ],
    category: "Individual Services",
    icon: "FileText",
  },
  {
    slug: "wealth-statement-preparation",
    title: "Wealth Statement Preparation",
    shortDescription:
      "Preparation and reconciliation of the wealth statement filed alongside your annual return, with a structured review of assets and liabilities.",
    audience: "Individuals who are required to file a wealth statement, or who wish to reconcile a previously filed one.",
    helpsWith: [
      "Reviewing your assets and liabilities",
      "Reconciling year-on-year changes",
      "Preparing the wealth statement in IRIS",
      "Flagging items that may need supporting documentation",
    ],
    potentialDocuments: [
      "Bank statements",
      "Property documents",
      "Vehicle and investment records",
      "Loan statements",
    ],
    category: "Individual Services",
    icon: "WalletCards",
  },

  // ---------- BUSINESS SERVICES ----------
  {
    slug: "business-tax-filing",
    title: "Business Tax Filing",
    shortDescription:
      "Tax return preparation and filing for sole proprietors, partnerships, and small businesses, with attention to the documentation required for business income.",
    audience: "Sole proprietors, AOPs, and small businesses operating in Pakistan.",
    helpsWith: [
      "Reviewing business income and expense records",
      "Preparing the business return in IRIS",
      "Filing on your behalf with your confirmation",
      "Providing a written summary of what was filed",
    ],
    potentialDocuments: [
      "Business bank statements",
      "Sales and purchase records",
      "CNIC(s) of owner(s) / partners",
      "Any registrations already held (e.g. NTN, sales tax)",
    ],
    category: "Business Services",
    icon: "Briefcase",
  },
  {
    slug: "tax-planning-compliance-consultation",
    title: "Tax Planning & Compliance Consultation",
    shortDescription:
      "Advisory consultation on ongoing tax compliance for individuals and businesses, focused on what you need to file, when, and how to stay on the right side of the rules.",
    audience: "Existing and prospective clients looking for structured, ongoing guidance.",
    helpsWith: [
      "Reviewing your current compliance position",
      "Identifying filings you may be missing",
      "Explaining what each filing involves in plain language",
      "Suggesting a practical compliance calendar for the year",
    ],
    potentialDocuments: [
      "Recent filed returns (if any)",
      "Business registration documents",
      "Bank statements",
    ],
    category: "Business Services",
    icon: "ClipboardList",
  },

  // ---------- FBR & COMPLIANCE ----------
  {
    slug: "fbr-registration-assistance",
    title: "FBR Registration Assistance",
    shortDescription:
      "Assistance with new FBR / NTN registration for individuals and businesses, including review of the information required before the application is submitted.",
    audience: "Individuals and businesses that need to register with the FBR for the first time.",
    helpsWith: [
      "Reviewing the information required for registration",
      "Preparing the registration application",
      "Guiding you through verification steps",
      "Confirming registration has been completed",
    ],
    potentialDocuments: [
      "CNIC",
      "Proof of business (for business registrations)",
      "Bank account details",
      "Utility bill (for address verification, where applicable)",
    ],
    category: "FBR & Compliance",
    icon: "Landmark",
  },
  {
    slug: "fbr-notices-assistance",
    title: "FBR Notices Assistance",
    shortDescription:
      "Review of FBR notices you have received, and assistance with drafting a clear, structured response for your confirmation before submission.",
    audience: "Individuals and businesses that have received a notice from the FBR.",
    helpsWith: [
      "Reading the notice and explaining what is being asked",
      "Identifying the documents you need to respond",
      "Preparing a draft response for your review",
      "Guiding you through submission where applicable",
    ],
    potentialDocuments: [
      "The original FBR notice",
      "CNIC",
      "Previously filed returns referenced in the notice",
      "Supporting documents mentioned in the notice",
    ],
    category: "FBR & Compliance",
    icon: "ScrollText",
  },
  {
    slug: "fbr-audit-assistance",
    title: "FBR Audit Assistance",
    shortDescription:
      "Support during an FBR audit, including help organising your records and preparing responses to auditor queries, with clear communication throughout.",
    audience: "Individuals and businesses selected for FBR audit.",
    helpsWith: [
      "Organising records requested by the auditor",
      "Preparing written responses to audit queries",
      "Coordinating with the auditor on your behalf where authorised",
      "Keeping you informed at each step",
    ],
    potentialDocuments: [
      "Audit notice",
      "Books of accounts and supporting records",
      "Bank statements for the audit period",
      "Previously filed returns",
    ],
    category: "FBR & Compliance",
    icon: "FileSearch",
  },
  {
    slug: "iris-assistance",
    title: "IRIS-Related Assistance",
    shortDescription:
      "Practical help with the FBR IRIS portal — recovering access, correcting profile information, and navigating the steps required to file or amend a return.",
    audience: "Clients who cannot access IRIS, or who need help navigating the portal.",
    helpsWith: [
      "Recovering or resetting IRIS access",
      "Correcting profile information in IRIS",
      "Navigating filing and amendment workflows",
      "Explaining IRIS error messages in plain language",
    ],
    potentialDocuments: [
      "CNIC",
      "Registered phone number / email details",
      "Last filed return acknowledgement (if available)",
    ],
    category: "FBR & Compliance",
    icon: "Building2",
  },

  // ---------- OTHER CONFIRMED SERVICES ----------
  {
    slug: "historical-return-revisions",
    title: "Historical Return Revisions",
    shortDescription:
      "Assistance with reviewing and revising previously filed returns where correction is required, subject to the time limits applicable to your case.",
    audience: "Clients who need to correct a return filed in a previous tax year.",
    helpsWith: [
      "Reviewing the previously filed return",
      "Identifying what needs to be corrected",
      "Preparing the revised return in IRIS",
      "Confirming the revision has been submitted",
    ],
    potentialDocuments: [
      "Previously filed return acknowledgement",
      "CNIC",
      "Corrected source documents",
    ],
    category: "Other Confirmed Services",
    icon: "FileClock",
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Individual Services",
  "Business Services",
  "FBR & Compliance",
  "Other Confirmed Services",
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Resolve a service icon name to the Lucide component. */
export function resolveServiceIcon(name: keyof typeof serviceIconRegistry): LucideIcon {
  return serviceIconRegistry[name] ?? FileText;
}
