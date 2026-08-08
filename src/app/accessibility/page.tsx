import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/ui/LegalShell";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: `${business.name}'s commitment to an accessible website for all visitors.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalShell title="Accessibility Statement" path="/accessibility" updated="August 2026">
      <p>
        {business.name} is committed to making our website accessible to everyone, including people
        with disabilities. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1
        Level AA.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Semantic HTML, keyboard-navigable menus, and visible focus states.</li>
        <li>Sufficient color contrast and readable text sizing.</li>
        <li>Descriptive labels on all form fields and links.</li>
      </ul>

      <h2>Feedback</h2>
      <p>
        If you encounter any barrier using this site, please let us know so we can fix it. Email{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a> or call {business.phone}, and
        we&apos;ll help you get the information or service you need.
      </p>

      <p className="text-sm text-brand-900/60">
        This is a living commitment; we review accessibility as we add pages through the buildout.
      </p>
    </LegalShell>
  );
}
