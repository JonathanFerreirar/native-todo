import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import TaskLayout from './fragments/taskLayout'

const WorkTask = () => {
  return (
    <TaskLayout
      Icon={<Ionicons name="code-working" size={15} color="white" />}
    />
  )
}

export default WorkTask
