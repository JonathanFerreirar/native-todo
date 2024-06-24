import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Link, Redirect } from 'expo-router'

import DismissKeyboard from '@/components/keyboard/dismiss'
import { useAuth } from '@/context/auth'
import Button from '@/primitive/Button'
import Input from '@/primitive/Input'
import ThemedView from '@/primitive/ThemedView'

import Logo from '../assets/images/logo.png'

const Signup = () => {
  const { isAuth, setIsAuth } = useAuth()

  if (isAuth) {
    return <Redirect href="(auth)/work" />
  }

  return (
    <DismissKeyboard>
      <ThemedView className="h-full flex-col items-center justify-center px-5 pt-24">
        <Image
          alt="Logo code community"
          source={Logo}
          className="absolute top-24 h-[100px] w-[100px] object-cover"
        />

        <View className="w-full flex-col items-center space-y-5">
          <Input placeholder="email@gmail.com" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </View>

        <Button variant="primary" customStyle="mt-8">
          <Link href="/signup">Sign-up</Link>
        </Button>
        <Link href="/" asChild>
          <Button variant="link" customStyle="mt-8">
            <Text className="text-sm">
              Already have an <Text className="text-primary">account?</Text>
            </Text>
          </Button>
        </Link>

        <View className="mt-10 h-auto w-full flex-row items-center justify-between">
          <View className="h-1 w-1/3 border-b border-b-white" />
          <Text className="text-sm text-white">Ou</Text>
          <View className="h-1 w-1/3 border-b border-b-white" />
        </View>

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
    </DismissKeyboard>
  )
}

export default Signup
