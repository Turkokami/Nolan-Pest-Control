import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-gold-300 to-gold-600 text-ink-900 font-extrabold hover:from-gold-400 hover:to-gold-700",
  secondary:
    "bg-transparent text-gold-600 ring-2 ring-inset ring-gold-500 hover:bg-gold-500/10",
  ghost: "text-gold-600 hover:bg-gold-500/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = cn(base, variants[variant], className);
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}
