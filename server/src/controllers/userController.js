import supabase from '../config/supabase.js'

export const register = async (req, res) => {
    const { email, password } = req.body
    const { data, error } = await supabase.auth.signUp({ email, password })

    if (error) return res.status(400).json({ error: error.message })
    res.json({ user: data.user })
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) return res.status(401).json({ error: error.message })
    res.json({ user: data.user, session: data.session })
}
