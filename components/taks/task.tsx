import React from 'react'
import { Alert, Text, View } from 'react-native'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons'
import dayjs from 'dayjs'

import useTaskStore from '@/context/todo'
import { Task as TaskType } from '@/context/types/todo'
import Icons from '@/primitive/Icons'

import { Tabs } from '../tabs/tabs'

type Icons = typeof AntDesign | typeof FontAwesome5 | typeof Octicons

type ProjectsProps = {
  task: TaskType
}

const Task = ({ task }: ProjectsProps) => {
  const removeTask = useTaskStore((state) => state.removeTask)

  const Icon =
    task.category === 'project' ? (
      <Icons.ProjectIcon className="h-3 w-3" />
    ) : (
      <Icons.WorkIcon className="h-3 w-3" />
    )

  const handleRemoveTask = () => {
    Alert.alert(
      'Are you sure?',
      `This action will delete the task with Title: ${titleSize(task.title, 35)}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Confirm', onPress: () => removeTask(task) },
      ],
    )
  }

  const titleSize = (title: string, size = 21) => {
    if (title.length > size) {
      return `${title.slice(0, size)}...`
    }

    return title
  }

  return (
    <View className="flex-row items-start justify-between gap-y-2 border-b border-b-slate-800 bg-transparent pb-4">
      <View className="w-full max-w-[220px] flex-col items-start gap-y-1">
        <View className="max-w-[220px] flex-row items-center gap-3">
          {Icon}
          <Text className="text-xl text-white">{titleSize(task.title)}</Text>
        </View>

        <View className="w-full flex-row items-center justify-start gap-x-5">
          {task.isFixed && (
            <View className="flex-row items-center gap-1 self-end">
              <AntDesign name="pushpin" size={15} color="white" />
            </View>
          )}

          <View className="flex-row items-center gap-1 self-end">
            <Text className="text-xs text-white">
              {dayjs(task.createAt).format('DD-MM-YYYY')}
            </Text>
            <Octicons name="calendar" size={10} color="white" />
          </View>
        </View>
      </View>
      <View className="flex-row items-start justify-start gap-7">
        <Octicons name="pencil" size={20} color="white" />
        <Octicons
          name="trash"
          size={20}
          color="white"
          onPress={handleRemoveTask}
        />
      </View>
    </View>
  )
}

export default Task
