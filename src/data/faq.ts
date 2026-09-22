/**
 * FAQ data for the home page FAQ section.
 *
 * Answers use neutral wording only. No tax rates, deadlines, penalties, or
 * guarantees. Where a question depends on the client's case, the answer
 * redirects the visitor to a WhatsApp consultation.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Where is the consultancy based, and do you work with clients outside your city?",
    answer:
      "The consultancy operates from Islamabad and Peshawar, and works with clients across Pakistan through remote consultation by phone, WhatsApp, or video call. You do not need to travel to either city to engage the consultant — documents can be shared securely and the consultation conducted remotely.",
  },
  {
    question: "What is the process for filing my income tax return?",
    answer:
      "Every engagement begins with a short consultation to understand your situation and the documents you have available. The consultant then prepares the return, reviews it with you, files it on your behalf once you confirm, and provides a written summary of what was submitted. Exact steps may vary depending on your income sources and the documents available.",
  },
  {
    question: "I have received a notice from the FBR — what should I do?",
    answer:
      "Share the notice with the consultant as soon as you receive it. The consultant will read it, explain what is being asked, identify the documents you need to respond, and prepare a draft response for your review before submission. Response deadlines vary depending on the type of notice — early action gives you more room to respond properly.",
  },
  {
    question: "Can the consultant help me become a filer / active taxpayer?",
    answer:
      "Yes. The consultant can review your current status, identify the steps required to obtain or restore your Active Taxpayer List (ATL) status, file the return(s) needed to support inclusion, and follow up until the listing is reflected. The exact steps depend on your individual case and current standing.",
  },
  {
    question: "How are consultations conducted, and what are the fees?",
    answer:
      "Consultations are conducted in person in Islamabad or Peshawar, or remotely across Pakistan via phone, WhatsApp, or video call. Fees depend on the scope of work involved — once the consultant understands your situation, you receive a clear quote before any work begins. There are no hidden charges.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes. Client information is treated with strict confidentiality and is used only for the work you have engaged the consultant to perform. Documents you share are retained only as long as needed for the engagement and applicable record-keeping, and are not shared with third parties without your consent.",
  },
  {
    question: "Do you file returns for previous tax years?",
    answer:
      "Assistance with reviewing and revising previously filed returns is available where correction is required, subject to the time limits applicable to your case. If you have missed a year, share the details and the consultant will explain what can be done in your specific situation.",
  },
  {
    question: "Can the consultant file my return on my behalf?",
    answer:
      "Yes — once you authorise the consultant, the return can be prepared and filed in IRIS on your behalf, with your confirmation before submission. You retain full visibility of everything that is filed, and receive a written summary of what was submitted.",
  },
];
