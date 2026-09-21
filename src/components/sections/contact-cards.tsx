import { ContactCard } from "@/components/common";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { locations } from "@/lib/data";

export function ContactCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <ContactCard
        title="WhatsApp"
        icon={<MessageCircle className="h-5 w-5 text-[#25D366]" />}
        details={[
          { label: "Number", value: "923186652528" },
          { label: "Response", value: "Within 24 hours" },
        ]}
      />
      <ContactCard
        title="Phone"
        icon={<Phone className="h-5 w-5 text-[#2563EB]" />}
        details={[
          { label: "Number", value: "923186652528" },
          { label: "Hours", value: "9 AM – 6 PM (PKT)" },
        ]}
      />
      <ContactCard
        title="Email"
        icon={<Mail className="h-5 w-5 text-[#166534]" />}
        details={[
          { label: "Address", value: "[EMAIL]" },
          { label: "Response", value: "Within 48 hours" },
        ]}
      />
      <ContactCard
        title="Offices"
        icon={<Phone className="h-5 w-5 text-[#1B2A4A]" />}
        details={[
          { label: "Islamabad", value: "[ADDRESS]" },
          { label: "Peshawar", value: "[ADDRESS]" },
        ]}
      />
    </div>
  );
}
