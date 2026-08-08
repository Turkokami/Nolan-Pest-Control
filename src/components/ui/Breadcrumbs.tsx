import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-700/70">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="font-medium text-brand-800">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-brand-800 hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden className="px-1">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
