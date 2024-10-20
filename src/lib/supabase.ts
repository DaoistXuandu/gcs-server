import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.URL as string, process.env.KEY as string)

export { supabase }
