import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="py-24 text-center">
      <h1 className="text-5xl font-extrabold text-brand-900">Page not found</h1>
      <p className="mt-4 text-brand-900/70">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button href="/">Back home</Button>
        <Button href="/contact" variant="secondary">Contact us</Button>
      </div>
    </Section>
  );
}
