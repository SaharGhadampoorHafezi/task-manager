import create from "zustand";
import { persist } from "zustand/middleware";

export const taskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (newTask) =>
        set((state) => ({
          tasks: [...state.tasks, newTask],
        })),
      removeTask: (title) =>
        set((store) => ({
          tasks: store.tasks.filter((task) => task.title !== title),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);
