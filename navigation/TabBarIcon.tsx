// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import React from 'react'
import { type IconProps } from '@expo/vector-icons/build/createIconSet'
import Ionicons from '@expo/vector-icons/Ionicons'

import { Colors } from '@/constants/Colors'

const TabBarIcon = ({
  style,
  ...rest
}: IconProps<React.ComponentProps<typeof Ionicons>['name']>) => {
  return (
    <Ionicons
      size={28}
      style={[{ marginBottom: -3, color: Colors.dark.primary }, style]}
      {...rest}
    />
  )
}

export default TabBarIcon
