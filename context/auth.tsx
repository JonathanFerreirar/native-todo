/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React from 'react'
import { Linking } from 'react-native'
import { makeRedirectUri } from 'expo-auth-session'
import * as QueryParams from 'expo-auth-session/build/QueryParams'
import { Redirect } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'

import supabase from '@/utils/supabase'

import { AuthProviderProps, EmailAndPasswordProps } from './authTypes'

WebBrowser.maybeCompleteAuthSession()

const redirectTo = makeRedirectUri()

type User = null | any

type AuthContextProps = {
  user: User
  isAuth: boolean
  logout: () => Promise<void>
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  SigninAndSinupWithGithub: () => Promise<void | React.JSX.Element>
  signup: (props: EmailAndPasswordProps) => Promise<void | React.JSX.Element>
  signin: (props: EmailAndPasswordProps) => Promise<void | React.JSX.Element>
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = React.useState(true)
  const [user, setUser] = React.useState<User>(null)

  const signup = async ({ email, password }: EmailAndPasswordProps) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return <Redirect href="/" />
    }
    console.log(data)
    return setIsAuth(true)
  }

  const signin = async ({ email, password }: EmailAndPasswordProps) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(error)
    if (error) {
      return <Redirect href="/" />
    }
    console.log(data)

    return setIsAuth(true)
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    setIsAuth(false)
    console.log(error)
  }

  const createSessionFromUrl = async (url: string) => {
    const { params, errorCode } = QueryParams.getQueryParams(url)

    if (errorCode) throw new Error(errorCode)
    const { access_token, refresh_token } = params

    if (!access_token) return

    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    })
    if (error) throw error
    return data.session
  }

  const performOAuth = async () => {
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
      await createSessionFromUrl(url)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        logout,
        isAuth,
        signup,
        setIsAuth,
        SigninAndSinupWithGithub: performOAuth,
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
