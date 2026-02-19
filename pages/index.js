import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const user = supabase.auth.user()

  return (
    <div>
      <h1>Bienvenido {user ? user.email : 'Invitado'}</h1>
      <p>Home provisional del MVP</p>
    </div>
  )
}
