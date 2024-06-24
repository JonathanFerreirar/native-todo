import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

import TaskLayout from './fragments/taskLayout'

const ProjectTask = () => {
  return (
    <TaskLayout
      Icon={<FontAwesome5 name="project-diagram" size={10} color="white" />}
    />
  )
}

export default ProjectTask
