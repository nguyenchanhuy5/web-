import { createClient } from "@supabase/supabase-js";
import { getRequiredSupabasePublicEnv } from "@/lib/env";
import type { Database } from "@/types/database";

export function createServerSupabaseClient() {
  const { url, anonKey } = getRequiredSupabasePublicEnv();

  return createClient<Database>(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
