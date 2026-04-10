import type { CourseCategory } from "@/types/course";

export const COURSE_CATEGORY_LABELS: Record<CourseCategory, string> = {
  considering: "Considering School",
  inschool: "In School"
};

export const COURSE_TABS: Array<{
  id: CourseCategory;
  label: string;
  eyebrow: string;
}> = [
  {
    id: "considering",
    label: "Considering School",
    eyebrow: "Plan before you enroll"
  },
  {
    id: "inschool",
    label: "In School",
    eyebrow: "Support while you study"
  }
];
