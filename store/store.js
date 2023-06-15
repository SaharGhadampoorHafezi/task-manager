import {create} from 'zustand'

export const taskStore = create()(
    persist(
      (set) => ({
        tasks: [],
        addTask: (newTask) =>
          set((state) => { tasks: [...tasks, newTask] }),
      }),
      {
        name: "task-storage",
      },
    ),
  );