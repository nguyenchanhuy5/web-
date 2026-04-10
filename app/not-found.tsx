import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--blue-600)]">
          Course Not Found
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--navy-900)]">
          We couldn&apos;t find that course.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Return to the homepage to browse the available student aid courses.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-800)]"
        >
          Browse courses
        </Link>
      </section>
    </main>
  );
}
