"use client";

import { useState } from "react";
import { documentCategories } from "@/lib/data";
import { DocumentChecklist } from "./DocumentChecklist";
import { cn } from "@/lib/utils";

export function DocumentTabs() {
  const [activeTab, setActiveTab] = useState("tab-salaried");
  const activeCategory = documentCategories.find((c) => c.id === activeTab) || documentCategories[0];

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto border-b border-[#E2E8F0] bg-white">
        {documentCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={cn(
              "whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors border-b-2 -mb-px",
              activeTab === cat.id
                ? "border-[#1D4ED8] text-[#1D4ED8]"
                : "border-transparent text-[#475569] hover:text-[#0F172A]"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="rounded-b-xl border border-t-0 border-[#E2E8F0] bg-white p-8">
        <DocumentChecklist items={activeCategory.documents} />
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-xs text-amber-800 leading-relaxed">
          ⚠️ These are typical documents only. Requirements vary depending on the client's individual case. Final requirements are confirmed by the consultant.
        </p>
      </div>
    </div>
  );
}
