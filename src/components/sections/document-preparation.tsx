import { SectionHeader } from "./section-header";
import { FileText, FileCheck, AlertTriangle } from "lucide-react";

export function DocumentPreparation() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Document Preparation"
          subtitle="What to Prepare"
          description="Proper documentation is the foundation of accurate tax filing."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#0E2944]">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0E2944]">Why Documents Matter</h3>
            </div>
            <p className="mb-5 text-base text-[#334155] leading-relaxed">
              Having the right documents ready ensures your tax return is filed accurately and on time.
              Missing documents can lead to delays, penalties, or incorrect filings.
            </p>
            <p className="text-base text-[#334155] leading-relaxed">
              Our team provides a tailored checklist based on your specific situation, making the process smooth and stress-free.
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0E2944] text-white">
                <FileCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0E2944]">General Checklist (Examples)</h3>
            </div>
            <ul className="space-y-4">
              {["CNIC Copy", "Income Proof (Salary slips, Bank statements)", "Investment & Deduction Proofs", "Previous Year's Return (if available)", "Business/Property documents (if applicable)"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E2944] text-xs text-white">
                    {i + 1}
                  </div>
                  <span className="text-base text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-[#FFFBF0] p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <p className="text-sm text-amber-800 leading-relaxed">
                Requirements vary by case. Final document requirements are confirmed by the consultant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
