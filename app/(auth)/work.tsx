import React from 'react'

import TabsComponent, { Tabs } from '@/components/tabs/tabs'
import ProjectTask from '@/components/taks/projects'
import WorkTask from '@/components/taks/work'
import ThemedView from '@/primitive/ThemedView'

const HomeScreen = () => {
  const [tab, setTab] = React.useState<Tabs>('work')

  const handleChangeTab = (tab: Tabs) => {
    setTab(tab)
  }
  return (
    <ThemedView className="mx-auto h-screen w-full flex-1 items-center justify-center p-5">
      <TabsComponent onPressTab={handleChangeTab}>
        {tab === 'work' && (
          <React.Fragment>
            <WorkTask />
            <WorkTask />
            <WorkTask />
          </React.Fragment>
        )}

        {tab === 'projects' && (
          <React.Fragment>
            <ProjectTask />
            <ProjectTask />
            <ProjectTask />
          </React.Fragment>
        )}
      </TabsComponent>
    </ThemedView>
  )
}

export default HomeScreen
