import React from 'react'
import { Text, View } from 'react-native'

import Button from '@/primitive/Button'

type OptionsSettings = {
  label: string
  onPress: () => void
  icon: React.JSX.Element
}

const OptionSettings = ({ ...option }: OptionsSettings) => {
  return (
    <View className="m-2">
      <Button
        variant="link"
        onPress={option.onPress}
        customStyle="items-center py-5 min-w-[130px] flex-row justify-between"
      >
        <Text className="font-semibold text-white">{option.label}</Text>
        {option.icon}
      </Button>
    </View>
  )
}

export default OptionSettings
