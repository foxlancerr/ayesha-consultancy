import type { Metadata } from "next";
import { ShieldCheck, Lock, MessageSquare, MapPin, Phone, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Container } from "@/components/site/container";
import { SectionHeader } from "@/components/site/section-header";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { Button } from "@/components/site/button";
import { CTASection } from "@/components/site/cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Professional Tax Consultant in Islamabad & Peshawar",
  description:
    "A professional tax consultant providing income tax, FBR compliance, and filer assistance to individuals, salaried professionals, pensioners, and businesses across Pakistan — from Islamabad and Peshawar, and remotely nationwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the Consultant",
    description:
      "Professional tax consultancy in Islamabad and Peshawar, serving clients across Pakistan remotely.",
    url: "/about",
  },
};

const approach = [
  {
    icon: ShieldCheck,
    title: "Professional approach",
    description:
      "Every engagement begins with a structured review of your situation and the documents available. Nothing is filed until you have reviewed and confirmed what is being submitted.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Your information is treated with strict confidentiality. It is used only for the work you have authorised, retained only as long as needed for the engagement and applicable record-keeping, and never shared with third parties without your consent.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    description:
      "You receive clear, plain-language explanations of what each filing involves, what is being submitted on your behalf, and what the next steps are. After every engagement, you receive a short written summary for your own records.",
  },
] as const;

export default function AboutRoute() {
  return (
    <SiteShell>
      <section aria-labelledby="about-title" className="section-padding">
        <Container className="flex flex-col gap-12">
          {/* Header */}
          <SectionHeader
            eyebrow="About"
            as="h1"
            title="A qualified tax consultant — direct, professional, and confidential."
            description="The consultancy provides income tax, FBR compliance, and filer assistance services to individuals, salaried professionals, pensioners, and businesses across Pakistan. Every engagement is handled directly by the consultant preparing your return."
          />

          {/* Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <aside className="lg:col-span-1">
              <div className="relative w-full max-w-xs mx-auto rounded-lg border border-border bg-card p-5 md:p-6 flex flex-col items-center gap-3 text-center">
                <div className="aspect-square w-full rounded-md bg-primary text-primary-foreground flex flex-col items-center justify-center gap-2">
                  <span className="text-5xl font-semibold tracking-tight" aria-hidden="true">
                    {siteConfig.consultant.name.replace(/[\[\]]/g, "").trim().charAt(0).toUpperCase() || "?"}
                  </span>
                  <span className="text-xs text-primary-foreground/70 px-4 leading-relaxed">
                    Professional headshot
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Portrait will appear here once confirmed by the consultant,
                  in line with the consultancy&apos;s policy of publishing only
                  verified information.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="eyebrow">{siteConfig.consultant.qualification}</span>
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  {siteConfig.consultant.name}
                </h2>
                <p className="text-sm text-foreground/70">{siteConfig.consultant.affiliation}</p>
              </div>

              <div className="flex flex-col gap-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>{siteConfig.consultant.shortBio}</p>
                {siteConfig.consultant.longBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <ul className="flex flex-col gap-2 mt-2">
                {siteConfig.consultant.credentials.map((cred, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-md border border-border bg-card p-3"
                  >
                    <ShieldCheck aria-hidden="true" className="size-4 mt-0.5 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{cred}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <WhatsAppCTA size="default">Send a WhatsApp message</WhatsAppCTA>
                <Button asChild size="default" variant="outline">
                  <a href="/contact">Use the contact form</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="How the consultancy works"
              as="h2"
              title="Three commitments that shape every engagement."
              description="Beyond the technical work, three principles guide how the consultancy operates — and what you can expect from the first message to the final filing."
            />
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {approach.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 md:p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-foreground">
                    <item.icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-5 md:p-6">
            <SectionHeader
              eyebrow="Where the consultancy operates"
              as="h2"
              title="Islamabad, Peshawar, and remote across Pakistan."
              description="In-person consultations in both cities; every service also available remotely by phone, WhatsApp, or video call."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.offices.map((office) => (
                <div key={office.city} className="flex flex-col gap-1.5">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <MapPin aria-hidden="true" className="size-4 text-accent" />
                    {office.city}
                  </span>
                  <span className="text-xs text-muted-foreground">{office.addressLine1}</span>
                  <span className="text-xs text-muted-foreground">{office.addressLine2}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                    <Clock aria-hidden="true" className="size-3.5" />
                    {office.hours}
                  </span>
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Phone aria-hidden="true" className="size-4 text-accent" />
                  Pakistan (remote)
                </span>
                <span className="text-xs text-muted-foreground">
                  Phone, WhatsApp, or video call
                </span>
                <span className="text-xs text-muted-foreground">
                  Documents shared securely, no travel required
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </SiteShell>
  );
}
