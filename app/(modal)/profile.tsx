import React from 'react'
import { Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Link, Redirect } from 'expo-router'

import Profile from '@/components/profile/profile'
import { useAuth } from '@/context/auth'
import Button from '@/primitive/Button'
import Input from '@/primitive/Input'
import ThemedView from '@/primitive/ThemedView'
import { pickImage } from '@/utils/pickImage'

const CreateTodo = () => {
  const { user } = useAuth()
  const [image, setImage] = React.useState<null | string>(null)

  if (!user?.user_metadata) {
    return <Redirect href="/" />
  }
  const { avatar_url: url, name } = user.user_metadata

  return (
    <ThemedView className="h-[88%] flex-col justify-between px-5">
      <View className="space-y-5 pt-6">
        <View className="mx-auto">
          <Profile alt={name} url={image || url} size="big" />

          <View className="">
            <Button
              variant="link"
              onPress={() =>
                pickImage({
                  setImage,
                })
              }
              customStyle="flex-row justify-center gap-x-3 max-w-[170px] mx-auto"
            >
              <Text className=" text-sm font-bold text-white">
                Select new photo
              </Text>
              <Entypo name="images" size={24} color="white" />
            </Button>
          </View>
        </View>
        <View className="space-y-2">
          <Text className="text-sm font-semibold text-white">name</Text>
          <Input placeholder={name} placeholderTextColor="#000" />
        </View>
      </View>
      <View className="flex-col gap-5">
        <View>
          <Button>
            <Text className="text-xl font-bold text-white">Save</Text>
          </Button>
        </View>
        <View>
          <Link href="(auth)/settings" asChild>
            <Button variant="link">
              <Text className="text-xl font-bold text-white">Cancel</Text>
            </Button>
          </Link>
        </View>
      </View>
    </ThemedView>
  )
}

export default CreateTodo
