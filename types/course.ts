import type { Database } from "@/types/database";

export type CourseCategory = Database["public"]["Tables"]["courses"]["Row"]["category"];

export type Course = Database["public"]["Tables"]["courses"]["Row"];
