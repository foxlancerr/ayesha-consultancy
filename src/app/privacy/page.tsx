import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { Container } from "@/components/site/container";
import { CTASection } from "@/components/site/cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How this tax consultancy collects, uses, and protects information you share when you make an inquiry or engage the consultant's services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy",
    description: "How this tax consultancy handles information you share.",
    url: "/privacy",
  },
};

export default function PrivacyRoute() {
  return (
    <SiteShell>
      <section aria-labelledby="privacy-title" className="section-padding">
        <Container className="flex flex-col gap-8 max-w-3xl">
          <header className="flex flex-col gap-3">
            <span className="eyebrow">Legal</span>
            <h1 id="privacy-title" className="text-2xl sm:text-3xl font-semibold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="flex flex-col gap-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <Section title="Overview">
              <p>
                This policy explains how {siteConfig.name} (&quot;the consultancy&quot;,
                &quot;we&quot;, &quot;us&quot;) handles the information you share when you make
                an inquiry or engage the consultant&apos;s services. It is written in plain
                language so you understand exactly what happens to your information.
              </p>
            </Section>

            <Section title="Information you share with us">
              <p>
                When you reach out by WhatsApp, phone, email, or the inquiry form,
                you may share information such as your name, phone number, city,
                the service you are interested in, and the documents you provide
                for the engagement. We only collect what you choose to share.
              </p>
            </Section>

            <Section title="How we use your information">
              <p>
                Your information is used only for the purpose of responding to
                your inquiry, understanding your situation, preparing the work
                you engage the consultant to perform, and corresponding with you
                during and after the engagement. We do not use your information
                for marketing, and we do not sell or rent it to any third party.
              </p>
            </Section>

            <Section title="How your information is stored">
              <p>
                Information you share by WhatsApp is held within your WhatsApp
                conversation with the consultant. Information shared by email is
                held within the consultancy email account. Documents you share
                for an engagement are retained only as long as needed for that
                engagement and applicable record-keeping, and are then securely
                deleted or returned to you on request.
              </p>
            </Section>

            <Section title="When we share information with third parties">
              <p>
                We share your information with third parties only when necessary
                to perform the engagement you have authorised (for example, when
                filing your return in IRIS on your behalf), when required by law,
                or with your explicit consent. We never share your information
                for marketing purposes.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You may request access to the information we hold about you, ask
                for corrections, or request that we delete information that is
                no longer required — by sending a message to the consultant on
                WhatsApp or by email. We will respond within a reasonable
                timeframe.
              </p>
            </Section>

            <Section title="This website">
              <p>
                This website does not use cookies for tracking, advertising, or
                analytics. The site is a frontend-only publication; no
                information you enter into the inquiry form is sent to a server.
                On submit, the form opens a pre-filled WhatsApp message in your
                own WhatsApp app — your information stays on your device until
                you choose to send it.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this policy from time to time. The date above
                reflects when the policy was last updated. Continued use of the
                consultancy&apos;s services after a change indicates acceptance
                of the updated policy.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                If you have any questions about this policy, please message the
                consultant on WhatsApp or send an email — both channels are
                listed on the contact page and in the website footer.
              </p>
            </Section>
          </div>
        </Container>
      </section>

      <CTASection />
    </SiteShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-base sm:text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
