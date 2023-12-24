import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TaskContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1 className='text-3xl text-secondary py-4 font-bold'>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
