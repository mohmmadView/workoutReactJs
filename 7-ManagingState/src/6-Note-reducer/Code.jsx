import { useEffect, useState } from "react";
import Prism from "prismjs";

export default function Code(){
    let codeTaskApp = [
    `
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TaskContext"; 
    export default function TaskApp() {
     return (
       <div className="w-10/12   mx-auto my-12 bg-base-300 p-10 text-xl">
         <TasksProvider>
           <h1 className="text-3xl text-secondary py-4 font-bold">
             Day off in Kyoto
           </h1>
           <AddTask />
           <TaskList />
           <Code code={} />
         </TasksProvider>
       </div>
     );
   } `
   ,
   `
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
   ];`,
   `
   import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TaskContext";
export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="w-8/12">
      {tasks.map((task) => (
        <li className="flex m-2" key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="input input-accent bg-accent-content input-bordered  max-w-xs"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          className="btn btn-accent border border-purple-800 btn-circle"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <div className="flex text-2xl w-6/12">
        <p className="w-full">{task.text}</p>
        <button
          className="btn btn-accent border border-purple-800 btn-circle ml-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
    );
  }
  return (
    <label className="w-full gap-4 flex ">
      <input
        className="checkbox checkbox-accent border border-purple-800"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        className="btn btn-accent border border-purple-800 btn-circle"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
   `,
   `
   import { useState } from "react";
import { useTasksDispatch } from "./TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <div className="flex  m-2 gap-2">
      <input
        className="input input-accent bg-accent-content input-bordered w-full max-w-xs"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn btn-accent border border-purple-800 btn-circle"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

let nextId = 3;

   `
   ]
    let [id , setId]=useState(0);
    useEffect(() => {
        Prism.highlightAll(Prism.highlight);
      }, []);
      let [overflow, setOverflow] = useState(false);
      function handleClick() {
        if (!overflow) {
          setOverflow(true);
        } else {
          setOverflow(false);
        }
      }
      return (
        <div className={`w-full  ml-2`}>
           <div className="m-auto w-3/6 flex justify-center bg-primary-content ring ">
            <a href="#TaskApp"  className="hover:text-secondary p-3 text-primary  ">TaskApp.jsx</a>
            <a href="#TaskList"  className="hover:text-secondary p-3 text-primary ">TaskList.jsx</a>
            <a href="#TaskContext"  className="hover:text-secondary p-3 text-primary">TaskContext.jsx</a>
            <a href="#AddTask"  className="hover:text-secondary p-3 text-primary">AddTask.jsx</a>
        </div>
          <div className={
              overflow
                ? ``
                : ` h-96 overflow-auto ` +
                `w-full p-1  mockup-code text-white rounded-none text-left`}>
            <code id="TaskApp" tabIndex={0} className="Code">
                <h2 className="text-center text-success font-bold">  index.jsx </h2>
                <pre>
                    <code className={`language-${'js'}`}>{codeTaskApp[0]}</code>
                </pre>
            </code>
             <code id="TaskContext" tabIndex={1} className="Code">
                <h2 className="text-center text-success font-bold p-4" > TaskContext.jsx </h2>
                <pre>
                    <code className={`language-${'js'}`}>{codeTaskApp[1]}</code>
                </pre>
            </code>
              <code id="TaskList" tabIndex={2} className="Code">
                <h2 className="text-center text-success font-bold p-4" >TaskList.jsx</h2>
                <pre>
                    <code className={`language-${'js'}`}>{codeTaskApp[2]}</code>
                </pre>
            </code>
              <code id="AddTask" tabIndex={3} className="Code">
                <h2 className="text-center text-success font-bold p-4" >AddTask.jsx</h2>
                <pre  >
                    <code className={`language-${'js'}`}>{codeTaskApp[3]}</code>
                </pre>
            </code>
          </div>
          <button
            className="w-[100%]  btn  btn-warning rounded-t"
            onClick={handleClick}>
            more
          </button>
        </div>
      );

      
}