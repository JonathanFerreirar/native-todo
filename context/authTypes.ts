import { Session } from '@supabase/supabase-js'
export type AuthProviderProps = React.PropsWithChildren

export type EmailAndPasswordProps = {
  email: string
  password: string
}

export type BaseUser = {
  id: string
  created_at: string
  updated_at: string
  user_metadata: {
    avatar_url: string
    email: string
    full_name: string
    name: string
    provider_id: string
    sub: string
  }
}

export type User = BaseUser | null
