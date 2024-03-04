import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TaskContext";
import Code from "./Code";
export default function TaskApp() {
  return (
    <div className="w-11/12 text-center mx-auto my-12 bg-base-300 p-10 text-xl">
      <TasksProvider>
        <h1 className="text-3xl text-secondary py-4 font-bold">
          note useReducer
        </h1>
        <AddTask />
        <TaskList />
        <Code />
      </TasksProvider>
    </div>
  );
}
