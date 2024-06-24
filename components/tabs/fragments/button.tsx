import React from 'react'
import { Pressable, Text } from 'react-native'

import { Colors } from '@/constants/Colors'

import { Tabs } from '../tabs'

type ButtonTabProps = React.PropsWithChildren &
  React.ComponentProps<typeof Pressable> & {
    tab: Tabs
    currentTab: Tabs
  }

const ButtonTab = ({ tab, currentTab, children, ...rest }: ButtonTabProps) => {
  const white = Colors.dark.white
  const primary = Colors.dark.primary

  const colorStyle = currentTab === tab ? primary : white

  return (
    <Pressable
      {...rest}
      style={{
        borderBottomColor: colorStyle,
      }}
      className="w-2/5 items-center justify-center gap-1 border p-1 transition-all"
    >
      <Text
        style={{
          color: colorStyle,
        }}
        className="text-xl font-bold capitalize transition-all"
      >
        {children}
      </Text>
    </Pressable>
  )
}

export default ButtonTab
