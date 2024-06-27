import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'

import CreateCheck from '@/components/create/checkbox/createCheck'
import { Tabs } from '@/components/tabs/tabs'
import Button from '@/primitive/Button'
import Input from '@/primitive/Input'
import ThemedView from '@/primitive/ThemedView'

const CreateTodo = () => {
  const [category, setCategory] = React.useState<Tabs>('work')

  return (
    <ThemedView className="h-[88%] flex-col justify-between px-5">
      <View className="space-y-5 pt-6">
        <View className="mb-3 flex-row items-center justify-center gap-2">
          <Text className="text-3xl font-semibold text-white">Task</Text>
          <Ionicons name="create" size={24} color="white" />
        </View>
        <View className="space-y-2">
          <Text className="text-xl font-semibold text-white">Title</Text>
          <Input placeholder="To-do title" />
        </View>
        <View className="space-y-2">
          <Text className="text-xl font-semibold text-white">Description</Text>
          <Input
            placeholder="description..."
            multiline={true}
            numberOfLines={4}
            className="h-[150px]"
          />
        </View>
        <View className="space-y-px pt-5">
          <Text className="text-xl font-semibold text-white">
            Select a category
          </Text>
          <View className="flex-row items-center justify-center gap-5">
            <View>
              <CreateCheck
                onChange={(value) => {
                  setCategory(value as Tabs)
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex-col gap-5">
        <View>
          <Button>
            <Text className="text-xl font-bold text-white">Create</Text>
          </Button>
        </View>
        <View>
          <Link href="(auth)/work" asChild>
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
