import React from 'react'
import { makeRedirectUri } from 'expo-auth-session'
import { Redirect } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'

import supabase, { createSessionFromUrl } from '@/utils/supabase'

import { AuthProviderProps, EmailAndPasswordProps, User } from './types/auth'

WebBrowser.maybeCompleteAuthSession()

const redirectTo = makeRedirectUri()

type AuthContextProps = {
  user: User
  loading: boolean
  logout: () => Promise<void>
  SigninAndSinupWithGithub: () => Promise<void | React.JSX.Element>
  signup: (props: EmailAndPasswordProps) => Promise<void | React.JSX.Element>
  signin: (props: EmailAndPasswordProps) => Promise<void | React.JSX.Element>
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState<User>(null)

  React.useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()

      if (data?.user) {
        setUser(data.user as unknown as User)
      }
      setLoading(false)
    }
    getUser()
  }, [])

  const signup = async ({ email, password }: EmailAndPasswordProps) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return <Redirect href="/" />
    }

    return setUser(data.user as User)
  }

  const signin = async ({ email, password }: EmailAndPasswordProps) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return <Redirect href="/" />
    }

    return setUser(data?.user as unknown as User)
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    setUser(null)
  }

  const SigninAndSinupWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    })

    const res = await WebBrowser.openAuthSessionAsync(
      data?.url ?? '',
      redirectTo,
    )

    if (res.type === 'success') {
      const { url } = res
      const data = await createSessionFromUrl(url)

      setUser(data?.user as User)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        logout,
        signup,
        loading,
        SigninAndSinupWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return React.useContext(AuthContext)
}
