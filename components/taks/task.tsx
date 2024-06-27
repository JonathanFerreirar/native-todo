import React from 'react'
import { Text, View } from 'react-native'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons'

import Icons from '@/primitive/Icons'

import { Tabs } from '../tabs/tabs'

type Icons = typeof AntDesign | typeof FontAwesome5 | typeof Octicons

type ProjectsProps = {
  type: Tabs
}

const Task = ({ type }: ProjectsProps) => {
  const Icon =
    type === 'projects' ? (
      <Icons.ProjectIcon className="h-3 w-3" />
    ) : (
      <Icons.WorkIcon className="h-3 w-3" />
    )
  return (
    <View className="flex-row items-start justify-between gap-y-2 border-b border-b-slate-800 bg-transparent pb-4">
      <View className="w-full max-w-[220px] flex-col items-start gap-y-1">
        <View className="max-w-[220px] flex-row items-center gap-3">
          {Icon}
          <Text className="text-xl text-white">
            {'Desenvolver app mobile Desenvolver app mobile Desenvolver app mobile'.slice(
              0,
              21,
            )}
            ...
          </Text>
        </View>

        <View className="w-full flex-row items-center justify-start gap-x-5">
          <View className="flex-row items-center gap-1 self-end">
            <AntDesign name="pushpin" size={15} color="white" />
          </View>

          <View className="flex-row items-center gap-1 self-end">
            <Text className="text-xs text-white">10-15-2024</Text>
            <Octicons name="calendar" size={10} color="white" />
          </View>
        </View>
      </View>
      <View className="flex-row items-start justify-start gap-7">
        <Octicons name="pencil" size={20} color="white" />
        <Octicons name="trash" size={20} color="white" />
      </View>
    </View>
  )
}

export default Task
