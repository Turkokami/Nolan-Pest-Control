import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/data/business";
import { siteUrl } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { StickyCallCta } from "@/components/layout/StickyCallCta";
import { JsonLd } from "@/components/schema/JsonLd";
import { siteGraph } from "@/components/schema/siteSchema";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Pest Control in Ithaca & Central NY`,
    template: `%s | ${business.name}`,
  },
  description:
    `Family-owned pest control serving Ithaca and Central New York. Safe, guaranteed treatment for ants, rodents, bed bugs, stinging insects and more. Call ${business.phone}.`,
  applicationName: business.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-brand-900 antialiased">
        {/* Site-wide 7-node @graph: Organization + LocalBusiness/PestControlService + WebSite */}
        <JsonLd data={siteGraph()} />
        <UtilityBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallCta />
      </body>
    </html>
  );
}
