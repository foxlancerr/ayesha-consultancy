"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { Button } from "./button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clientTypeOptions } from "@/data/personas";
import { services } from "@/data/services";
import { buildInquiryMessage, openWhatsApp } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * InquiryForm — frontend-only contact form. On submit, builds a structured
 * WhatsApp message and opens wa.me in a new tab. No data is sent to a
 * backend — validation runs entirely on the client.
 *
 * Accessibility:
 * - every input has an associated <Label> via htmlFor
 * - error messages use role="alert" and aria-describedby
 * - the form is keyboard navigable
 */

const inquirySchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number must be 20 digits or fewer.")
    .regex(/^[0-9+\-\s()]+$/, "Phone number may contain digits, +, -, spaces and ()."),
  city: z
    .string()
    .min(2, "Please enter your city.")
    .max(60, "City must be 60 characters or fewer."),
  clientType: z.string().min(1, "Please select a client type."),
  service: z.string().min(1, "Please select a service."),
  message: z
    .string()
    .max(1000, "Message must be 1000 characters or fewer.")
    .optional()
    .or(z.literal("")),
});

type InquiryValues = z.infer<typeof inquirySchema>;

export interface InquiryFormProps {
  /** Optional default values (e.g. pre-select a service when navigating from /services). */
  defaultService?: string;
  /** Optional default client type (e.g. pre-select "Salaried" when navigating from a persona card). */
  defaultClientType?: string;
  className?: string;
}

export function InquiryForm({
  defaultService,
  defaultClientType,
  className,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      clientType: defaultClientType ?? "",
      service: defaultService ?? "",
      message: "",
    },
  });

  const onSubmit = (values: InquiryValues) => {
    const message = buildInquiryMessage({
      name: values.name,
      phone: values.phone,
      city: values.city,
      clientType: values.clientType,
      service: values.service,
      message: values.message ?? "",
    });
    openWhatsApp(message);
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "flex flex-col gap-5 rounded-lg border border-border bg-card p-5 md:p-7",
        className,
      )}
      aria-label="Consultation inquiry form"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg sm:text-xl font-semibold text-foreground">
          Request a consultation
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Fill in the fields below. On submit, a pre-filled WhatsApp message
          opens — no information is sent to a server.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name */}
        <Field
          id="name"
          label="Name"
          required
          error={errors.name?.message}
        >
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>

        {/* Phone / WhatsApp */}
        <Field
          id="phone"
          label="Phone / WhatsApp"
          required
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="03xx xxxxxxx"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>

        {/* City */}
        <Field
          id="city"
          label="City"
          required
          error={errors.city?.message}
        >
          <Input
            id="city"
            autoComplete="address-level2"
            placeholder="e.g. Islamabad"
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? "city-error" : undefined}
            {...register("city")}
          />
        </Field>

        {/* Client type */}
        <Field
          id="clientType"
          label="Client type"
          required
          error={errors.clientType?.message}
        >
          <Controller
            control={control}
            name="clientType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="clientType"
                  className="w-full"
                  aria-invalid={!!errors.clientType}
                  aria-describedby={errors.clientType ? "clientType-error" : undefined}
                >
                  <SelectValue placeholder="Select client type" />
                </SelectTrigger>
                <SelectContent>
                  {clientTypeOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        {/* Service */}
        <Field
          id="service"
          label="Service"
          required
          error={errors.service?.message}
          className="sm:col-span-2"
        >
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="service"
                  className="w-full"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <SelectValue placeholder="Select the service you need" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        {/* Message */}
        <Field
          id="message"
          label="Message (optional)"
          error={errors.message?.message}
          className="sm:col-span-2"
          hint="Briefly describe your situation — no sensitive data needed at this stage."
        >
          <Textarea
            id="message"
            rows={4}
            placeholder="I need help filing my salaried return for the current tax year."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
        </Field>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
        <Button type="submit" size="lg" variant="whatsapp" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Preparing…
            </>
            ) : (
              <>
                <MessageCircle aria-hidden="true" />
                Open WhatsApp with my details
              </>
            )}
        </Button>
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Send aria-hidden="true" className="size-3.5" />
          Opens WhatsApp with a pre-filled message to {siteConfig.contact.whatsappDisplay}.
        </p>
      </div>

      {submitted && (
        <p
          role="status"
          className="text-sm text-accent rounded-md border border-accent/30 bg-accent/5 px-4 py-3"
        >
          WhatsApp should have opened in a new tab. If it did not, tap the
          floating WhatsApp button on the bottom-right, or message{" "}
          <span className="font-medium">{siteConfig.contact.whatsappDisplay}</span>{" "}
          directly.
        </p>
      )}
    </form>
  );
}

/** Wrapper field with label, hint, and accessible error display. */
function Field({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && (
          <span aria-hidden="true" className="text-destructive ml-0.5">
            *
          </span>
        )}
      </Label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
}
