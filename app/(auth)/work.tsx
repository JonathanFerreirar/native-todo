import React from 'react'
import { FlatList, View } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import TabsComponent, { Tabs } from '@/components/tabs/tabs'
import Task from '@/components/taks/task'
import ThemedView from '@/primitive/ThemedView'

dayjs.extend(relativeTime)

const now = dayjs()
const HomeScreen = () => {
  const [tab, setTab] = React.useState<Tabs>('work')

  const handleChangeTab = (tab: Tabs) => {
    setTab(tab)
  }
  // {dayjs(order.created_at).fromNow()}

  const tasks = [
    {
      category: 'work',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'projects',
      isFixed: true,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
    {
      category: 'work',
      isFixed: false,
      title: 'Developer mobile app',
      description: 'To developer a mobile app you need to',
      createAt: now.subtract(1, 'hour').toISOString(),
    },
  ]

  return (
    <View className="mx-auto h-screen w-full flex-1 items-center justify-center bg-[#030013] p-5">
      <TabsComponent onPressTab={handleChangeTab}>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => {
            return item.item.category === tab ? (
              <Task type={item.item.category as Tabs} />
            ) : null
          }}
        />
      </TabsComponent>
    </View>
  )
}

export default HomeScreen
