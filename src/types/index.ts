// Color references: deep navy (#1B2A4A), professional blue (#2563EB), dark green (#166534)

export type ServiceCategory =
  | "Individual Services"
  | "Business Services"
  | "FBR & Compliance"
  | "Other Confirmed Services";

export interface ServiceDocument {
  id: string;
  label: string;
  documents: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  audience: string;
  whatWeHelp: string;
  documents: ServiceDocument[];
  category: ServiceCategory;
  slug: string;
  whatsappMessage: string;
}

export interface Persona {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DocumentCategory {
  id: string;
  label: string;
  documents: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Location {
  city: string;
  address: string;
  phone: string;
}

export interface TrustItem {
  label: string;
  value: string;
}

export interface HowItStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  city: string;
  clientType: string;
  service: string;
  message: string;
}

export interface ConsultantProfile {
  name: string;
  qualification: string;
  professionalInformation: string;
}
