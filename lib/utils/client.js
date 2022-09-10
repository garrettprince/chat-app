import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vrjanjbuxgsbhppluoek.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyamFuamJ1eGdzYmhwcGx1b2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI3NDg3MjgsImV4cCI6MTk3ODMyNDcyOH0.bPa5-TRXKiWDHZuxIi2p7BFsn8PG9o07T1f-2yln4Rc"
);
