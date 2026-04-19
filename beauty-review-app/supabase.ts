import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iqtsderwfuarebcavpfp.supabase.co";
const supabaseAnonKey = "sb_publishable_QhxGjWTmcd2a60suEYJkKw_jCnQ7YDc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
