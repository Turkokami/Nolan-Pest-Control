import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/ui/LegalShell";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses, and protects your information, including SMS consent.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" path="/privacy" updated="August 2026">
      <p>
        {business.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy
        explains what we collect through this website and how we use it. Questions? Email{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a> or call {business.phone}.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit our estimate form we collect the information you provide: your name, email,
        phone number, service address, and the service you&apos;re requesting. We also collect basic
        analytics (pages visited, device type) to improve the site.
      </p>

      <h2>SMS / text messaging consent</h2>
      <p>
        If you check the SMS consent box, you agree to receive text messages from {business.name}
        related to your service request and appointments. Message frequency varies. Message and data
        rates may apply. Consent is not a condition of purchase. You can opt out at any time by
        replying STOP, or get help by replying HELP. We do not sell or share your mobile number or
        SMS consent with third parties for their marketing.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your estimate request and schedule service.</li>
        <li>To contact you about your appointment, service, or account.</li>
        <li>To improve our website and services.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We share information only with service providers who help us operate (for example, scheduling
        or email tools), and only as needed. We do not sell your personal information.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request access to, correction of, or deletion of your information by contacting us at{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>.
      </p>

      <p className="text-sm text-brand-900/60">
        This policy is provided as a starting point and should be reviewed by counsel before launch.
      </p>
    </LegalShell>
  );
}
