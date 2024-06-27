import React from 'react'
import { Pressable, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Link, Redirect, Tabs } from 'expo-router'

import Profile from '@/components/profile/profile'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/auth'
import { useColorScheme } from '@/hooks/useColorScheme'
import TabBarIcon from '@/navigation/TabBarIcon'

const TabLayout = () => {
  const colorScheme = useColorScheme()
  const { user } = useAuth()

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
            return (
              <Link asChild href="/(modal)/create">
                <Pressable
                  style={{
                    gap: 5,
                    marginRight: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '600',
                    }}
                  >
                    Create
                  </Text>
                  <Entypo name="plus" size={34} color="green" />
                </Pressable>
              </Link>
            )
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
        }}
      />
    </Tabs>
  )
}
export default TabLayout
