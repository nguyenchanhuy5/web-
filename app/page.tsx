import { CourseTabs } from "@/components/course-tabs";
import { SiteHeader } from "@/components/site-header";
import { getCoursesByCategory } from "@/lib/supabase/queries";
import type { CourseCategory } from "@/types/course";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const initialCategory: CourseCategory = "considering";
  const initialCourses = await getCoursesByCategory(initialCategory);

  return (
    <main>
      <SiteHeader />

      <section className="bg-[var(--navy-950)] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold-400)]">
              Student Aid Learning
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Courses that help students plan smarter and stay on track.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Explore practical guidance designed for students who are deciding
              on school and those already enrolled. Each course includes a
              simple checkout flow and mobile-friendly payment QR code.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold-400)]">
              What you can do here
            </p>
            <div className="mt-6 space-y-5 text-white/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Compare courses by student stage
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Review details for each course
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Scan a QR code to pay on mobile
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <CourseTabs
          initialCategory={initialCategory}
          initialCourses={initialCourses}
        />
      </section>
    </main>
  );
}
