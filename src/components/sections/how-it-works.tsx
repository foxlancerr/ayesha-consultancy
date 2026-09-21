import { howItSteps } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function HowItWorks() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="How It Works"
          subtitle="Process"
          description="A simple, straightforward process to get your tax affairs handled professionally."
        />
        <div className="grid gap-10 md:grid-cols-4">
          {howItSteps.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-sm">
                <span className="text-xl font-bold">{step.step}</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">{step.title}</h3>
              <p className="text-base text-[#334155] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
