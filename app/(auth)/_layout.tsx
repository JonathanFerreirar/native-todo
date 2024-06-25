import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Redirect, Tabs } from 'expo-router'

import { Colors } from '@/constants/Colors'
import { useAuth } from '@/context/auth'
import { useColorScheme } from '@/hooks/useColorScheme'
import TabBarIcon from '@/navigation/TabBarIcon'

const TabLayout = () => {
  const colorScheme = useColorScheme()
  const { isAuth, logout } = useAuth()

  if (!isAuth) {
    return <Redirect href="/" />
  }

  const handleLogout = async () => {
    await logout()
  }

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
            return (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  marginLeft: 20,
                  backgroundColor: '#fff',
                }}
              ></View>
            )
          },
          headerRight: () => {
            return (
              <Pressable
                onPress={handleLogout}
                style={{
                  gap: 10,
                  marginRight: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                  }}
                >
                  Sair
                </Text>
                <TabBarIcon size={20} name="log-out-outline" color={'#fff'} />
              </Pressable>
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
          headerLeft: () => {
            return (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  marginLeft: 20,
                  backgroundColor: '#fff',
                }}
              ></View>
            )
          },
          headerRight: () => {
            return (
              <Pressable
                onPress={handleLogout}
                style={{
                  gap: 10,
                  marginRight: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                  }}
                >
                  Sair
                </Text>
                <TabBarIcon size={20} name="log-out-outline" color={'#fff'} />
              </Pressable>
            )
          },
        }}
      />
    </Tabs>
  )
}
export default TabLayout
