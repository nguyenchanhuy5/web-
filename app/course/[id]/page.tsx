import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseQr } from "@/components/course-qr";
import { SiteHeader } from "@/components/site-header";
import { COURSE_CATEGORY_LABELS } from "@/lib/constants";
import { getCourseById } from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

type CourseDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = params;
  const resolvedCourse = await getCourseById(id);

  if (!resolvedCourse) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(resolvedCourse.price);

  return (
    <main>
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--blue-600)]"
          >
            Back to courses
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--navy-900)] md:text-5xl">
                {resolvedCourse.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {resolvedCourse.description ?? "Course details will be available soon."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border)] bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Category
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--navy-900)]">
                    {COURSE_CATEGORY_LABELS[resolvedCourse.category]}
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Price
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--navy-900)]">
                    {formattedPrice}
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Payment
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--navy-900)]">
                    {resolvedCourse.payment_link ? "Available" : "Unavailable"}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[var(--border)] bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Created At
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--navy-900)]">
                  {new Date(resolvedCourse.created_at).toLocaleString("en-US")}
                </p>
              </div>

              <div className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--blue-600)]">
                  Course Summary
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">
                  This course is listed in the <strong>{COURSE_CATEGORY_LABELS[resolvedCourse.category]}</strong> category and can be paid online using the QR code or payment link.
                </div>
              </div>
            </div>

            <div className="lg:pt-14">
              <CourseQr paymentLink={resolvedCourse.payment_link ?? ""} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
