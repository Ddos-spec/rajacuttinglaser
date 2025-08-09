// src/integrations/supabase/serverClient.ts
// This client is for server-side use only and uses the service_role key.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseServiceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Supabase URL or Service Role Key is not defined in environment variables.");
}

// This client has elevated privileges and should only be used on the server.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);