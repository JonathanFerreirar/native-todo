import React from 'react'
import { Text, View } from 'react-native'

const Tabs = () => {
  const [tab, setTab] = React.useState()

  return (
    <View className="w-full flex-1">
      <Text className="text-2xl text-white">tabs está aqui man</Text>
    </View>
  )
}

export default Tabs
