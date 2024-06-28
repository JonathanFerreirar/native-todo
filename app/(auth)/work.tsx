import React from 'react'
import { FlatList, View } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import TabsComponent, { Tabs } from '@/components/tabs/tabs'
import Task from '@/components/taks/task'
import useTaskStore from '@/context/todo'

dayjs.extend(relativeTime)

const HomeScreen = () => {
  const [tab, setTab] = React.useState<Tabs>('work')
  const tasks = useTaskStore((state) => state.tasks)

  const handleChangeTab = (tab: Tabs) => {
    setTab(tab)
  }

  return (
    <View className="mx-auto h-screen w-full flex-1 items-center justify-center bg-[#030013] p-5">
      <TabsComponent onPressTab={handleChangeTab}>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => {
            return item.item.category === tab ? <Task task={item.item} /> : null
          }}
        />
      </TabsComponent>
    </View>
  )
}

export default HomeScreen
