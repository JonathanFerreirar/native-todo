import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { Link, router } from 'expo-router'

import CreateCheck from '@/components/create/checkbox/createCheck'
import useTaskStore from '@/context/todo'
import { Task } from '@/context/types/todo'
import Button from '@/primitive/Button'
import Input from '@/primitive/Input'
import ThemedView from '@/primitive/ThemedView'
import cn from '@/utils/cn'
import { getRandomInt } from '@/utils/getRandomInt'

type handleTaskStateProps = {
  key: keyof Task
  value: unknown
}

const now = dayjs()

const CreateTodo = () => {
  const addTask = useTaskStore((state) => state.addTask)
  const [task, setTask] = React.useState<Task>({
    id: getRandomInt(1, 987652),
    title: '',
    isFixed: false,
    description: '',
    category: 'work',
    createAt: now.toString(),
  })

  const [error, setError] = React.useState({
    title: '',
    description: '',
  })

  const handleTaskState = ({ key, value }: handleTaskStateProps) => {
    setTask((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleCreateTask = () => {
    if (task.title && task.description) {
      addTask(task)
      return router.dismiss()
    }
    if (!task.title && !task.description) {
      setError({
        title: 'Type the title',
        description: 'Type the description',
      })
      return
    }

    if (task.title) {
      if (task.title.length < 50) {
        setError({
          title: '',
          description: 'Type the description',
        })
        return
      }

      setError({
        title: 'Title should have less than 100 characters.',
        description: '',
      })
      return
    }

    if (task.description) {
      setError({
        title: 'Type the title',
        description: '',
      })
    }
  }

  return (
    <ThemedView className="h-[88%] flex-col justify-between px-5">
      <View className="space-y-5 pt-6">
        <View className="mb-3 flex-row items-center justify-center gap-2">
          <Text className="text-3xl font-semibold text-white">Task</Text>
          <Ionicons name="create" size={24} color="white" />
        </View>
        <View className="space-y-2">
          <Text className="text-xl font-semibold text-white">Title</Text>
          <View className="relative w-auto">
            <Input
              maxLength={50}
              placeholder="To-do title"
              className="pr-9"
              onChangeText={(value) => {
                handleTaskState({
                  key: 'title',
                  value,
                })
              }}
            />
            {task.title.length > 0 && (
              <View
                className={cn(
                  'absolute right-2 mt-3 h-[20px] w-[20px] rounded-full border p-[2px]',
                  task.title.length > 35 && 'border-red-500',
                )}
              >
                <Text
                  className={cn(
                    'text-center text-xs font-semibold text-black',
                    task.title.length > 35 && 'text-red-500',
                  )}
                >
                  {task.title.length}
                </Text>
              </View>
            )}
          </View>
          {error.title && (
            <Text className="text-xs font-semibold text-red-500">
              {error.title}
            </Text>
          )}
        </View>
        <View className="space-y-2">
          <Text className="text-xl font-semibold text-white">Description</Text>
          <View className="relative h-auto w-auto">
            <Input
              placeholder="description..."
              multiline={true}
              numberOfLines={4}
              className="h-[150px]"
              onChangeText={(value) => {
                handleTaskState({
                  key: 'description',
                  value,
                })
              }}
            />
            {task.description.length > 0 && (
              <View
                className={cn(
                  'absolute right-2 bottom-3 h-[25px] w-[25px] rounded-full border p-[2px]',
                  task.description.length > 400 && 'border-red-500',
                )}
              >
                <Text
                  className={cn(
                    'text-center mt-[2px] text-xs font-semibold text-black',
                    task.description.length > 400 && 'text-red-500',
                  )}
                >
                  {task.description.length}
                </Text>
              </View>
            )}
          </View>

          {error.description && (
            <Text className="text-xs font-semibold text-red-500">
              {error.description}
            </Text>
          )}
        </View>
        <View className="space-y-px pt-5">
          <Text className="text-xl font-semibold text-white">
            Select a category
          </Text>
          <View className="flex-row items-center justify-center gap-5">
            <View>
              <CreateCheck
                onChange={(value) => {
                  handleTaskState({
                    key: 'category',
                    value,
                  })
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex-col gap-5">
        <View>
          <Button onPress={handleCreateTask}>
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
