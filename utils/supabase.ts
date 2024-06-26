/* eslint-disable camelcase */
import { createClient } from '@supabase/supabase-js'
import * as QueryParams from 'expo-auth-session/build/QueryParams'
import * as SecureStore from 'expo-secure-store'

import 'react-native-url-polyfill/auto'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL as string,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string,
  {
    auth: {
      storage: ExpoSecureStoreAdapter as typeof ExpoSecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
)

export const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url)

  if (errorCode) throw new Error(errorCode)
  const { access_token, refresh_token } = params

  if (!access_token) return

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  })
  if (error) throw error

  return data
}

export default supabase
