/**
 * Process steps for the "How It Works" section on the home page.
 * Kept deliberately simple — four steps, each tied to a clear action.
 */

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "Reach out by WhatsApp or phone. The consultant asks a few questions to understand your situation, the documents you have, and what you need to accomplish.",
  },
  {
    number: 2,
    title: "Document Review",
    description:
      "You share the relevant documents securely. The consultant reviews them, confirms what is required for your specific case, and gives you a clear scope and quote.",
  },
  {
    number: 3,
    title: "Preparation & Filing",
    description:
      "The consultant prepares your return, response, or registration, reviews it with you, and — once you confirm — files it on your behalf in IRIS or with the relevant authority.",
  },
  {
    number: 4,
    title: "Written Summary",
    description:
      "You receive a short written summary of what was filed, prepared, or recommended, so you have a clear record of the engagement for your files.",
  },
];
