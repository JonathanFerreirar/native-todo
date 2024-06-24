import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Redirect } from 'expo-router'

import { useAuth } from '@/context/auth'
import ThemedView from '@/primitive/ThemedView'

const Login = () => {
  const { isAuth, setIsAuth } = useAuth()

  if (isAuth) {
    return <Redirect href="(auth)/work" />
  }

  return (
    <ThemedView className="h-full flex-col items-center justify-center">
      <Text className="-mt-20 text-2xl font-bold text-white">
        Continue with
      </Text>

      <Pressable
        className="mt-10 h-[60px] w-[60px] items-center justify-center rounded-full"
        onPress={() => {
          setIsAuth(true)
        }}
      >
        <View className="w-full flex-row items-center justify-center">
          <AntDesign name="github" size={60} color="white" />
        </View>
      </Pressable>
    </ThemedView>
  )
}

export default Login
