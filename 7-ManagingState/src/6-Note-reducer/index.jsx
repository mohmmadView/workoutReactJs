import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TaskContext';
import  Code from  '../utils/Prism'

export default function TaskApp() {
  return (
    <div className='w-10/12   mx-auto my-12 bg-base-300 p-10 text-xl'>
          <TasksProvider>
            <h1 className='text-3xl text-secondary py-4 font-bold'>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
          </TasksProvider>
    </div>
  );
}
