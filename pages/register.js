import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) alert(error.message)
    else alert('Usuario registrado. Revisa tu correo para confirmar.')
  }

  return (
    <div>
      <h1>Registro</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  )
}
