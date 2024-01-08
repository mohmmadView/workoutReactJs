import { createContext, useContext, useReducer } from "react";
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
/**
 * Create a provider component for managing tasks.
 *
 * @param {ReactNode} children - The child components to be wrapped by the provider.
 * @return {ReactNode} The wrapped child components.
 */
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
export function useTasks() {
  return useContext(TasksContext);
}
export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
/**
 * Reduces an array of tasks based on the given action.
 *
 * @param {Array} tasks - The array of tasks to be reduced.
 * @param {Object} action - The action object containing the type and additional data.
 * @return {Array} - The updated array of tasks after the reduction.
 */
function tasksReducer(tasks, action) {
  switch (action.type){
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
