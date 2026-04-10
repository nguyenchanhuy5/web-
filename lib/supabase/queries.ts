import { COURSE_COLUMNS } from "@/lib/supabase/course-columns";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";
import type { CourseCategory } from "@/types/course";

type CourseRow = Database["public"]["Tables"]["courses"]["Row"];

export async function getCoursesByCategory(category: CourseCategory) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_COLUMNS)
    .eq("category", category)
    .order("name", { ascending: true });

  if (error) {
    throw new Error(`Failed to load courses: ${error.message}`);
  }

  return (data ?? []) as CourseRow[];
}

export async function getCourseById(id: string) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_COLUMNS)
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }

    throw new Error(`Failed to load course: ${error.message}`);
  }

  return data as CourseRow;
}
