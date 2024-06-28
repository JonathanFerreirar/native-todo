import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { create } from 'zustand'

import { Task } from './types/todo'

dayjs.extend(relativeTime)

const now = dayjs()

type TodoState = {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (task: Task) => void
  editTask: (task: Task) => void
}

const fakeTask: Task[] = [
  {
    id: 1,
    category: 'work',
    isFixed: true,
    title: 'Developer mobile app',
    description: 'To developer a mobile app you need to',
    createAt: now.subtract(1, 'hour').toISOString(),
  },
  {
    id: 2,
    category: 'work',
    isFixed: true,
    title: 'vendo isso aqio mobile app',
    description: 'To developer a mobile app you need to',
    createAt: now.subtract(1, 'hour').toISOString(),
  },
  {
    id: 3,
    category: 'work',
    isFixed: false,
    title: 'Developer mobile app',
    description: 'To developer a mobile app you need to',
    createAt: now.subtract(1, 'hour').toISOString(),
  },
  {
    id: 4,
    category: 'project',
    isFixed: false,
    title: 'Developer mobile app',
    description: 'To developer a mobile app you need to',
    createAt: now.subtract(1, 'hour').toISOString(),
  },
]

const useTaskStore = create<TodoState>()((set) => ({
  tasks: [...fakeTask],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (task) =>
    set((state) => ({
      tasks: state.tasks.filter((item) => item.id !== task.id),
    })),
  editTask: (task) =>
    set((state) => ({
      tasks: state.tasks.map((item) =>
        item.id === task.id ? { ...task } : item,
      ),
    })),
}))

export default useTaskStore
