"use client";

import { useEffect, useState } from "react";
import { CourseCard } from "@/components/course-card";
import { COURSE_TABS } from "@/lib/constants";
import { COURSE_COLUMNS } from "@/lib/supabase/course-columns";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { Course, CourseCategory } from "@/types/course";

type CourseTabsProps = {
  initialCategory: CourseCategory;
  initialCourses: Course[];
};

export function CourseTabs({
  initialCategory,
  initialCourses
}: CourseTabsProps) {
  const supabase = createBrowserSupabaseClient();
  const [activeTab, setActiveTab] = useState<CourseCategory>(initialCategory);
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCourses() {
      if (activeTab === initialCategory) {
        setError(null);
        setCourses(initialCourses);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        if (!supabase) {
          throw new Error("Supabase environment variables are not available.");
        }

        const { data, error: queryError } = await supabase
          .from("courses")
          .select(COURSE_COLUMNS)
          .eq("category", activeTab)
          .order("name", { ascending: true });

        if (queryError) {
          throw new Error(queryError.message);
        }

        if (!cancelled) {
          setCourses((data ?? []) as Course[]);
        }
      } catch (fetchError) {
        if (!cancelled) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to load courses"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadCourses();

    return () => {
      cancelled = true;
    };
  }, [activeTab, initialCategory, initialCourses, supabase]);

  return (
    <section className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:p-8">
      <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--blue-600)]">
            Browse Courses
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-900)] md:text-4xl">
            Choose support based on where you are in your education journey
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {COURSE_TABS.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`min-w-52 rounded-2xl border px-5 py-4 text-left transition ${
                  isActive
                    ? "border-[var(--navy-900)] bg-[var(--navy-900)] text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-[var(--blue-600)] hover:bg-white"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    isActive ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {tab.eyebrow}
                </p>
                <p className="mt-2 text-lg font-semibold">{tab.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-2xl border border-slate-200 bg-slate-100"
              />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-rose-700">
            {error}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
