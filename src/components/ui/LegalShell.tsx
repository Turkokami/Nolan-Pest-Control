import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { pageGraph } from "@/components/schema/siteSchema";

export function LegalShell({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];
  return (
    <>
      <JsonLd data={pageGraph({ path, name: title, description: title, breadcrumbs: crumbs })} />
      <Breadcrumbs items={crumbs} />
      <Section className="pt-6">
        <div className="max-w-prose space-y-4 text-brand-900/80 [&_h2]:pt-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-900 [&_a]:text-brand-700 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
          <h1 className="text-4xl font-extrabold text-brand-900">{title}</h1>
          <p className="text-sm text-brand-900/60">Last updated: {updated}</p>
          {children}
        </div>
      </Section>
    </>
  );
}
