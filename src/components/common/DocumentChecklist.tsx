import { Check } from "lucide-react";

interface DocumentChecklistProps {
  items: string[];
}

export function DocumentChecklist({ items }: DocumentChecklistProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="mt-1 h-4 w-4 shrink-0 text-[#166534]" />
          <span className="text-sm text-[#334155]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default DocumentChecklist;
