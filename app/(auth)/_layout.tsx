import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Redirect, Tabs } from 'expo-router'

import LogoutHeader from '@/components/auth/logout/logoutHeader'
import Profile from '@/components/profile/profile'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/auth'
import { useColorScheme } from '@/hooks/useColorScheme'
import TabBarIcon from '@/navigation/TabBarIcon'

const TabLayout = () => {
  const colorScheme = useColorScheme()
  const { logout, user } = useAuth()

  if (!user?.user_metadata) {
    return <Redirect href="/" />
  }
  const { avatar_url: url, name } = user.user_metadata

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
      }}
    >
      <Tabs.Screen
        name="work"
        options={{
          title: '',
          tabBarLabel: 'To-do',
          tabBarLabelStyle: { color: Colors.dark.white },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'apps' : 'apps-outline'}
              color={color}
            />
          ),
          headerLeft: () => {
            return <Profile url={url} alt={name} />
          },
          headerRight: () => {
            return <LogoutHeader logout={logout} />
          },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: '',
          tabBarLabel: 'Settings',
          tabBarLabelStyle: { color: Colors.dark.white },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
            />
          ),
          headerLeft: () => {
            return <Profile url={url} alt={name} />
          },
          headerRight: () => {
            return <LogoutHeader logout={logout} />
          },
        }}
      />
    </Tabs>
  )
}
export default TabLayout
