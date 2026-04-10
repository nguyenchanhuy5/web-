import Link from "next/link";
import { COURSE_CATEGORY_LABELS } from "@/lib/constants";
import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(course.price);

  return (
    <Link
      href={`/course/${course.id}`}
      className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              {COURSE_CATEGORY_LABELS[course.category]}
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--navy-900)]">
            {course.name}
          </h3>
        </div>
        <span className="rounded-full bg-[var(--blue-100)] px-3 py-1 text-sm font-semibold text-[var(--navy-900)]">
          {formattedPrice}
        </span>
      </div>

      <p className="text-base leading-7 text-slate-600">
        {course.description ?? "Course details will be available soon."}
      </p>

      <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
            Payment
          </p>
          <p className="mt-1 font-semibold">
            {course.payment_link ? "QR available" : "Contact support"}
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
            Created
          </p>
          <p className="mt-1 font-semibold">
            {new Date(course.created_at).toLocaleDateString("en-US")}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6 text-sm font-semibold text-[var(--blue-600)] group-hover:text-[var(--navy-900)]">
        View course details
      </div>
    </Link>
  );
}
