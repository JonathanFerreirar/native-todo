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
    <ThemedView className="mx-auto mt-7 w-full max-w-[320px] flex-1 items-center justify-center">
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
