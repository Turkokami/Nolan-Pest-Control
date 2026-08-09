import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/ui/LegalShell";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${business.name} website and service requests.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" path="/terms" updated="August 2026">
      <p>
        These terms govern your use of the {business.name} website. By using this site or submitting
        a request, you agree to them.
      </p>

      <h2>Estimates and service</h2>
      <p>
        Submitting the estimate form is a request, not a binding contract. Pricing, scope, and any
        guarantee are confirmed in a written service agreement before work begins. Guarantee terms
        are described on our <Link href="/our-guarantee">Our Guarantee</Link> page and in your agreement.
      </p>

      <h2>Use of the site</h2>
      <p>
        You agree not to misuse the site, attempt to disrupt it, or use it for unlawful purposes. All
        content on this site is owned by {business.name} unless otherwise noted.
      </p>

      <h2>Communications</h2>
      <p>
        By providing your phone number and email, you consent to be contacted about your request. SMS
        consent is handled separately and described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Disclaimer &amp; limitation of liability</h2>
      <p>
        The site is provided &ldquo;as is.&rdquo; To the fullest extent permitted by law,
        {" "}{business.name} is not liable for indirect or incidental damages arising from use of the
        site. Nothing here limits rights you have under your written service agreement or applicable law.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${business.email}`}>{business.email}</a>{" "}
        or call {business.phone}.
      </p>

      <p className="text-sm text-brand-900/60">
        These terms are a starting point and should be reviewed by counsel before launch.
      </p>
    </LegalShell>
  );
}
