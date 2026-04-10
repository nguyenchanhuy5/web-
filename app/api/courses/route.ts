import { NextRequest, NextResponse } from "next/server";
import { COURSE_CATEGORY_LABELS } from "@/lib/constants";
import { getCoursesByCategory } from "@/lib/supabase/queries";
import type { CourseCategory } from "@/types/course";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");

  if (
    !category ||
    !Object.prototype.hasOwnProperty.call(COURSE_CATEGORY_LABELS, category)
  ) {
    return NextResponse.json(
      { message: "Invalid course category." },
      { status: 400 }
    );
  }

  try {
    const courses = await getCoursesByCategory(category as CourseCategory);

    return NextResponse.json(courses);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch courses.";

    return NextResponse.json({ message }, { status: 500 });
  }
}
