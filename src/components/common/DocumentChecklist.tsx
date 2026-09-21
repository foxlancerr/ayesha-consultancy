import { Check } from "lucide-react";

interface DocumentChecklistProps {
  items: string[];
}

export function DocumentChecklist({ items }: DocumentChecklistProps) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="mt-1.5 h-5 w-5 shrink-0 text-[#15803D]" />
          <span className="text-base text-[#334155]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default DocumentChecklist;
