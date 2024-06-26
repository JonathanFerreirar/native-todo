import { Text, View } from 'react-native'
import { Redirect } from 'expo-router'

import Profile from '@/components/profile/profile'
import SettingsOptions from '@/components/settingsOptions/settingsOptions'
import { useAuth } from '@/context/auth'

const Settings = () => {
  const { user, logout } = useAuth()

  if (!user?.user_metadata) {
    return <Redirect href="/" />
  }

  const { avatar_url: url, name } = user.user_metadata

  return (
    <View className="h-full items-center justify-start space-y-5 p-5 pt-20">
      <Profile url={url} alt={name} size="big" />
      <Text className="text-2xl font-medium text-white">{name}</Text>
      <SettingsOptions logout={logout} />
    </View>
  )
}

export default Settings
