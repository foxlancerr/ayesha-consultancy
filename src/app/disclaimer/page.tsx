import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { Container } from "@/components/site/container";
import { CTASection } from "@/components/site/cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimer regarding the use of this website, the information provided, and the scope of the consultancy's services.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer",
    description: "Important disclaimer regarding the use of this website and the consultancy's services.",
    url: "/disclaimer",
  },
};

export default function DisclaimerRoute() {
  return (
    <SiteShell>
      <section aria-labelledby="disclaimer-title" className="section-padding">
        <Container className="flex flex-col gap-8 max-w-3xl">
          <header className="flex flex-col gap-3">
            <span className="eyebrow">Legal</span>
            <h1 id="disclaimer-title" className="text-2xl sm:text-3xl font-semibold text-foreground">
              Disclaimer
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="flex flex-col gap-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <Section title="General information only">
              <p>
                The information published on this website is provided for general
                informational purposes only. It is not a substitute for
                professional advice tailored to your specific situation. Tax
                rules, FBR procedures, and deadlines change over time; the
                information on this website may not always reflect the most
                recent changes.
              </p>
            </Section>

            <Section title="Not tax, legal, or regulatory advice">
              <p>
                Nothing on this website constitutes tax advice, legal advice,
                or regulatory guidance. No engagement is created until you and
                the consultant have agreed the scope of work in writing. You
                should not act on the basis of any information on this website
                without first confirming it with the consultant.
              </p>
            </Section>

            <Section title="Document checklists are typical only">
              <p>
                The document checklists on the documents page are typical
                documents commonly required for each client type. They are not
                presented as legally mandatory for every case. Final
                requirements are confirmed by the consultant based on your
                individual situation, and verified against current
                authoritative FBR sources where applicable.
              </p>
            </Section>

            <Section title="No guaranteed outcomes">
              <p>
                The consultancy does not guarantee any specific outcome from a
                tax filing, FBR response, or other engagement — including
                approvals, refunds, tax savings, or processing times. Outcomes
                depend on your individual circumstances and on decisions made
                by the relevant authorities.
              </p>
            </Section>

            <Section title="External links">
              <p>
                Where this website links to external resources (such as the
                FBR website or IRIS portal), the consultancy is not responsible
                for the content, accuracy, or availability of those external
                resources.
              </p>
            </Section>

            <Section title="Placeholder information">
              <p>
                Some contact and office information shown on this website is
                displayed as a placeholder pending confirmation. The
                consultant will share confirmed details when you make an
                inquiry. No information about the consultant&apos;s
                qualifications, experience, client count, or other credentials
                is presented as final until confirmed.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the maximum extent permitted by law, {siteConfig.name}
                {" "}shall not be liable for any loss or damage arising from
                your use of, or reliance on, the information published on this
                website. Your engagement of the consultancy&apos;s services is
                governed by the terms agreed in writing between you and the
                consultant.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                If you have any questions about this disclaimer, please message
                the consultant on WhatsApp or send an email — both channels are
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
