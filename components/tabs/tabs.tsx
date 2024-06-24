import React from 'react'
import { View } from 'react-native'

import ButtonTab from './fragments/button'

export type Tabs = 'work' | 'projects'

type TabsProps = React.PropsWithChildren & {
  onPressTab: (tab: Tabs) => void
}

const TabsComponent = ({ onPressTab, children }: TabsProps) => {
  const [tab, setTab] = React.useState<Tabs>('work')

  const handleTabChange = (tab: Tabs) => {
    setTab(tab)
    onPressTab(tab)
  }

  return (
    <View className="w-full flex-1">
      <View className="flex-row items-center justify-between">
        <ButtonTab
          tab="work"
          currentTab={tab}
          onPress={() => {
            handleTabChange('work')
          }}
        >
          Work
        </ButtonTab>
        <ButtonTab
          tab="projects"
          currentTab={tab}
          onPress={() => {
            handleTabChange('projects')
          }}
        >
          Projects
        </ButtonTab>
      </View>
      <View className="p-2 pt-10">{children}</View>
    </View>
  )
}

export default TabsComponent
