import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isWaitlistConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const supabase = isWaitlistConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function addWaitlistSignup(email) {
  if (!supabase) {
    throw new Error("Waitlist signups are not configured.");
  }

  const { error } = await supabase
    .from("waitlist_signups")
    .insert({ email: email.trim().toLowerCase() });

  if (error) {
    throw error;
  }
}
