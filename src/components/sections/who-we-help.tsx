"use client";

import { PersonaCard } from "./persona-card";
import { personas } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function WhoWeHelp() {
  const displayPersonas = personas.slice(0, 6);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Who We Help"
          subtitle="Our Clients"
          description="We provide specialized tax services tailored to each client type. Whether you're a salaried professional or a business owner, we've got you covered."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayPersonas.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </div>
    </section>
  );
}
