"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(1, "Please select a city"),
  clientType: z.string().min(1, "Please select a client type"),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const clientTypes = [
  { value: "Salaried", label: "Salaried" },
  { value: "Business", label: "Business" },
  { value: "Pensioner", label: "Pensioner" },
  { value: "Freelancer", label: "Freelancer" },
  { value: "Property/Vehicle", label: "Property/Vehicle" },
  { value: "FBR Notice", label: "FBR Notice" },
  { value: "Other", label: "Other" },
];

const services = [
  "Income Tax Return Filing",
  "Tax Planning",
  "FBR Registration",
  "FBR Notice Response",
  "Tax Audit Representation",
  "Wealth Statement Preparation",
  "Business Tax Filing",
  "Sales Tax Compliance",
  "Other",
];

const cities = ["Islamabad", "Peshawar", "Lahore", "Karachi", "Rawalpindi", "Other"];

export function InquiryForm() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedClientType, setSelectedClientType] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      clientType: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    const serviceText = data.service || "General tax consultation";
    const message = `Hello, I found your website and would like to discuss ${serviceText}. My name is ${data.name}, I'm located in ${data.city}, and I'm a ${data.clientType} client. ${data.message}`;
    
    const whatsappUrl = buildWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-[#0F172A]">Full Name *</Label>
          <Input
            id="name"
            placeholder="Your full name"
            className={cn(errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500")}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-[#0F172A]">Phone / WhatsApp *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+923186652528"
            className={cn(errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500")}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="city" className="text-sm font-medium text-[#0F172A]">City *</Label>
          <Select value={selectedCity} onValueChange={setSelectedCity} placeholder="Select your city">
            <SelectTrigger />
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.city && (
            <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="clientType" className="text-sm font-medium text-[#0F172A]">Client Type *</Label>
          <Select value={selectedClientType} onValueChange={setSelectedClientType} placeholder="Select client type">
            <SelectTrigger />
            <SelectContent>
              {clientTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.clientType && (
            <p className="mt-1 text-xs text-red-600">{errors.clientType.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="service" className="text-sm font-medium text-[#0F172A]">Service of Interest</Label>
        <Select value={selectedService} onValueChange={setSelectedService} placeholder="Select a service (optional)">
          <SelectTrigger />
          <SelectContent>
            {services.map((svc) => (
              <SelectItem key={svc} value={svc}>{svc}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-[#0F172A]">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your tax needs..."
          className={cn(errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500")}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full bg-[#0F172A] text-white hover:bg-[#1D4ED8]">
        <MessageCircle className="mr-2 h-4 w-4" />
        Send via WhatsApp
      </Button>

      <p className="text-center text-xs text-[#94A3B8]">
        Your information is handled with strict confidentiality. No backend storage is used.
      </p>
    </form>
  );
}
