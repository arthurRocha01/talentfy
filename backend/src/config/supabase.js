import meta from '../../meta.js'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    meta.env.VITE_SUPABASE_URL,
    meta.env.VITE_SUPABASE_ANON_KEY
)

export default supabase
