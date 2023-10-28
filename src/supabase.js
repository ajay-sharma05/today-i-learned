import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fwbckrgmtiasjmjcrqkp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YmNrcmdtdGlhc2ptamNycWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMjk0MTgsImV4cCI6MTk5NDgwNTQxOH0.sZD6tcB8NtzIDx7Y1OAXwCff-yZ2OtI6PSWOrTbGLYk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
