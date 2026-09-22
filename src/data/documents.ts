/**
 * Document checklist data for the /documents page tabs.
 *
 * IMPORTANT: These are TYPICAL documents only. Requirements vary by case and
 * are confirmed by the consultant before any submission. Generic documents
 * are never presented as legally mandatory unless verified against current
 * authoritative FBR sources.
 */

export interface DocumentItem {
  name: string;
  /** Optional one-line note explaining when/why this might be required. */
  note?: string;
}

export interface DocumentTab {
  slug: string;
  label: string;
  /** Short audience descriptor for context. */
  audience: string;
  /** Typical documents only — never presented as mandatory. */
  documents: DocumentItem[];
  /** Optional supporting note shown at the bottom of the checklist. */
  footNote?: string;
}

export const documentTabs: DocumentTab[] = [
  {
    slug: "salaried",
    label: "Salaried",
    audience: "For salaried employees filing their annual return.",
    documents: [
      { name: "CNIC" },
      { name: "Salary certificate from the employer for the relevant tax year" },
      { name: "Bank statements for the relevant period" },
      { name: "Details of any other income (rent, investments, freelance)" },
      { name: "Records of investments claimed, where applicable" },
      { name: "NTN and IRIS access (or authorisation to file on your behalf)" },
    ],
    footNote:
      "Some employers also issue a tax deduction certificate — share this if you have one.",
  },
  {
    slug: "business",
    label: "Business",
    audience: "For sole proprietors, partnerships, and small businesses.",
    documents: [
      { name: "CNIC(s) of owner(s) / partners" },
      { name: "Business bank statements for the relevant period" },
      { name: "Sales and purchase records" },
      { name: "Expense records and supporting invoices" },
      { name: "Existing registration documents (NTN, STRN, etc.)" },
      { name: "Asset and liability records for the wealth statement" },
      { name: "Any previously filed returns for the period" },
    ],
    footNote:
      "Books of accounts structure varies by business type — share what you currently maintain.",
  },
  {
    slug: "pensioner",
    label: "Pensioner",
    audience: "For retired individuals receiving pension income.",
    documents: [
      { name: "CNIC" },
      { name: "Pension payment certificate or pension bank statement" },
      { name: "Bank statements for the relevant period" },
      { name: "Details of any other income (rent, investments)" },
      { name: "Asset and liability records for the wealth statement" },
      { name: "NTN and IRIS access (or authorisation to file on your behalf)" },
    ],
    footNote:
      "If your pension is paid through a bank, the bank statement usually shows the pension credits clearly.",
  },
  {
    slug: "freelancer",
    label: "Freelancer",
    audience: "For freelancers and individuals with mixed income sources.",
    documents: [
      { name: "CNIC" },
      { name: "Bank statements for the relevant period" },
      { name: "Records of freelance / professional income received" },
      { name: "Records of expenses incurred for your work" },
      { name: "Details of any other income (rent, investments, salary if any)" },
      { name: "Asset and liability records for the wealth statement" },
      { name: "NTN and IRIS access (or authorisation to file on your behalf)" },
    ],
    footNote:
      "Foreign-earned income may have additional reporting considerations — flag this in your consultation.",
  },
  {
    slug: "fbr-notice",
    label: "FBR Notice",
    audience: "For clients who have received a notice or audit selection from the FBR.",
    documents: [
      { name: "The original FBR notice (full document)" },
      { name: "CNIC" },
      { name: "Returns previously filed for the period referenced" },
      { name: "Bank statements for the period referenced" },
      { name: "Records of the income / transactions referenced in the notice" },
      { name: "Any correspondence already exchanged with the FBR" },
      { name: "Supporting documents specifically requested in the notice" },
    ],
    footNote:
      "Notices have response deadlines that vary by case — share the notice as soon as you receive it so timelines can be reviewed.",
  },
];
