import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://owjyckuieytcrvgaqzpk.supabase.co'
const supabaseAnonKey = 'sb_publishable_6GTSGEYymfRTdO-qBNSzIA_zHZHfDrp'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
