import * as React from "react";
import { serviceIconRegistry } from "@/data/services";
import { personaIconRegistry } from "@/data/personas";

/**
 * Icon wrappers — stable React components that resolve a string icon name
 * to the corresponding Lucide component and render it. This avoids creating
 * components during render (which would reset state) and keeps icon
 * references out of the data file's exported shape (avoiding the
 * Next.js server→client component boundary issue).
 */

export interface ServiceIconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof serviceIconRegistry;
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = serviceIconRegistry[name] ?? serviceIconRegistry.FileText;
  return <Icon {...props} />;
}

export interface PersonaIconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof personaIconRegistry;
}

export function PersonaIcon({ name, ...props }: PersonaIconProps) {
  const Icon = personaIconRegistry[name] ?? personaIconRegistry.User;
  return <Icon {...props} />;
}
