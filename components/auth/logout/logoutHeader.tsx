import React from 'react'
import { Pressable, Text } from 'react-native'

import TabBarIcon from '@/navigation/TabBarIcon'

type LogoutHeaderProps = {
  logout: () => Promise<void>
}
const LogoutHeader = ({ logout }: LogoutHeaderProps) => {
  return (
    <Pressable
      onPress={logout}
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
        Logout
      </Text>
      <TabBarIcon size={20} name="log-out-outline" color={'#fff'} />
    </Pressable>
  )
}

export default LogoutHeader
