import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

import OptionSettings from './fragment/option'

type SettingsOptionsProps = {
  logout: () => void
}

const SettingsOptions = ({ logout }: SettingsOptionsProps) => {
  const optionsSettings = [
    {
      label: 'Profile',
      onPress: () => router.push('/(modal)/profile'),
      icon: <Ionicons name="person-circle-outline" size={24} color="white" />,
    },
    {
      label: 'Tasks',
      onPress: () => console.warn('Tasks'),
      icon: <FontAwesome5 name="tasks" size={24} color="white" />,
    },
    {
      label: 'Help',
      onPress: () => console.warn('help'),
      icon: <Feather name="help-circle" size={24} color="white" />,
    },
    {
      label: 'Logout',
      onPress: logout,
      icon: <Ionicons name="log-out-outline" size={24} color="white" />,
    },
  ]
  return (
    <FlatList
      numColumns={2}
      data={optionsSettings}
      renderItem={(item) => <OptionSettings {...item.item} />}
      contentContainerStyle={{
        gap: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    />
  )
}

export default SettingsOptions
